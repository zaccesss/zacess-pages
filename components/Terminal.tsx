'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { COMMANDS } from '@/lib/commands'

// ── Types ─────────────────────────────────────────────────────────────────────

type EntryType = 'sys' | 'echo' | 'out' | 'blank' | 'divider'

interface Entry {
  id: number
  type: EntryType
  html?: string
  prompt?: string
  cmd?: string
  boot?: boolean // boot entries survive clear
}

type TermMode = 'normal' | 'suggest'

// ── Helpers ───────────────────────────────────────────────────────────────────

let _id = 0
const nextId = () => ++_id

const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms))

function escHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function Terminal() {
  const [entries, setEntries] = useState<Entry[]>([])
  const [inputVal, setInputVal] = useState('')
  const [busy, setBusy] = useState(false)
  const [mode, setMode] = useState<TermMode>('normal')
  const [history, setHistory] = useState<string[]>([])
  const [histIdx, setHistIdx] = useState(-1)
  const [closed, setClosed] = useState(false)
  const [minimised, setMinimised] = useState(false)
  const [maximised, setMaximised] = useState(false)
  // incrementing this re-triggers the boot effect (used by + button)
  const [bootKey, setBootKey] = useState(0)

  const inputRef = useRef<HTMLInputElement>(null)
  const outputRef = useRef<HTMLDivElement>(null)

  // ── Scroll ─────────────────────────────────────────────────────────────────

  const scrollBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (outputRef.current) {
        outputRef.current.scrollTop = outputRef.current.scrollHeight
      }
    })
  }, [])

  useEffect(() => { scrollBottom() }, [entries, scrollBottom])

  // ── addEntry ───────────────────────────────────────────────────────────────

  const addEntry = useCallback((entry: Omit<Entry, 'id'>) => {
    setEntries(prev => [...prev, { ...entry, id: nextId() }])
  }, [])

  // ── Focus: restore after busy clears ───────────────────────────────────────

  useEffect(() => {
    if (!busy) {
      const t = setTimeout(() => inputRef.current?.focus(), 30)
      return () => clearTimeout(t)
    }
  }, [busy])

  // ── Boot sequence ──────────────────────────────────────────────────────────
  // setTimeout(0) absorbs React strict-mode's double-invoke so boot runs once.

  useEffect(() => {
    let cancelled = false

    const timer = setTimeout(() => {
      if (cancelled) return

      setEntries([])
      setInputVal('')
      setMode('normal')
      setHistory([])
      setHistIdx(-1)
      setBusy(false)

      async function boot() {
        const sysLines = [
          'ZacessOS v2.0.0-beta',
          'kernel: initialising...',
          'user: zacess  |  host: terminal',
          'environment: ready',
        ]
        for (const line of sysLines) {
          if (cancelled) return
          await sleep(110)
          addEntry({ type: 'sys', html: line, boot: true })
        }
        if (cancelled) return
        addEntry({ type: 'divider', boot: true })
        await sleep(200)
        if (cancelled) return
        addEntry({ type: 'out', html: `type <span class="lbl">help</span> for a list of commands.`, boot: true })
        addEntry({ type: 'divider', boot: true })
        inputRef.current?.focus()
      }

      boot()
    }, 0)

    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  // bootKey changes trigger a fresh boot (used by + button)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bootKey])

  // ── Reset (+ button) ───────────────────────────────────────────────────────

  const resetTerminal = useCallback(() => {
    setClosed(false)
    setMinimised(false)
    setMaximised(false)
    setBootKey(k => k + 1)
  }, [])

  // ── Command runner ─────────────────────────────────────────────────────────

  const runCommand = useCallback(async (raw: string) => {
    const name = raw.trim().toLowerCase()
    if (!name) return

    // ── Suggest mode ─────────────────────────────────────────────────────────
    if (mode === 'suggest') {
      addEntry({ type: 'echo', prompt: 'suggestion:~$', cmd: raw })
      await sleep(90)

      if (name === 'cancel' || name === 'exit') {
        addEntry({ type: 'out', html: '<span class="dim">cancelled. type help for commands.</span>' })
      } else {
        const body = encodeURIComponent(raw)
        addEntry({ type: 'out', html: '<span class="lbl">suggestion noted:</span>' })
        addEntry({ type: 'out', html: `  <span class="dim">"${escHtml(raw)}"</span>` })
        addEntry({ type: 'blank' })
        addEntry({ type: 'out', html: '<span class="dim">opening mail client...</span>' })
        await sleep(400)
        window.location.href = `mailto:contact@zacess.com?subject=Suggestion%20--%20zacess.com&body=${body}`
      }

      addEntry({ type: 'divider' })
      setMode('normal')
      setBusy(false)
      return
    }

    // ── Normal mode ───────────────────────────────────────────────────────────
    setBusy(true)

    addEntry({ type: 'echo', prompt: 'zacess@terminal:~$', cmd: raw })
    await sleep(90)

    if (name === 'clear') {
      setEntries(prev => prev.filter(e => e.boot))
      setBusy(false)
      return
    }

    const cmd = COMMANDS[name]

    if (!cmd) {
      addEntry({ type: 'out', html: `<span class="err">bash: ${escHtml(name)}: command not found</span>` })
      addEntry({ type: 'out', html: `<span class="dim">type 'help' to list available commands</span>` })
      addEntry({ type: 'divider' })
      setBusy(false)
      return
    }

    if (cmd.special === 'suggest') {
      addEntry({ type: 'out', html: '<span class="lbl">suggest something to build:</span>' })
      addEntry({ type: 'blank' })
      addEntry({ type: 'out', html: '  have an idea for zacess.com?' })
      addEntry({ type: 'out', html: '  type your suggestion and press enter.' })
      addEntry({ type: 'out', html: `  type <span class="lbl">cancel</span> to exit.` })
      addEntry({ type: 'blank' })
      addEntry({ type: 'divider' })
      setMode('suggest')
      setBusy(false)
      return
    }

    for (const line of cmd.lines ?? []) {
      await sleep(20)
      addEntry({ type: line === '' ? 'blank' : 'out', html: line })
    }

    if (cmd.redirect) {
      await sleep(350)
      if (cmd.redirect.startsWith('mailto')) {
        window.location.href = cmd.redirect
      } else {
        window.open(cmd.redirect, '_blank', 'noopener,noreferrer')
      }
    }

    if (cmd.special === 'cv') {
      await sleep(350)
      const a = document.createElement('a')
      a.href = '/Isaac_Adjei_CV.pdf'
      a.download = 'Isaac_Adjei_CV.pdf'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }

    addEntry({ type: 'divider' })
    setBusy(false)
  }, [mode, addEntry])

  // ── Tab completion ─────────────────────────────────────────────────────────

  const handleTab = useCallback(() => {
    const partial = inputVal.trim().toLowerCase()
    if (!partial) return
    const keys = Object.keys(COMMANDS)
    const matches = keys.filter(k => k.startsWith(partial))
    if (matches.length === 1) {
      setInputVal(matches[0])
    } else if (matches.length > 1) {
      addEntry({ type: 'echo', prompt: 'zacess@terminal:~$', cmd: inputVal })
      addEntry({ type: 'out', html: `<span class="dim">${matches.join('  ')}</span>` })
      addEntry({ type: 'divider' })
    }
  }, [inputVal, addEntry])

  // ── Keyboard handler ───────────────────────────────────────────────────────

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const val = inputVal.trim()
      if (!val) return
      // block new commands while busy in normal mode (suggest mode always accepts)
      if (busy && mode === 'normal') return
      setHistory(prev => [val, ...prev])
      setHistIdx(-1)
      setInputVal('')
      runCommand(val)
      return
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHistIdx(prev => {
        const next = Math.min(prev + 1, history.length - 1)
        if (history[next] !== undefined) setInputVal(history[next])
        return next
      })
      return
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHistIdx(prev => {
        if (prev <= 0) { setInputVal(''); return -1 }
        const next = prev - 1
        if (history[next] !== undefined) setInputVal(history[next])
        return next
      })
      return
    }

    if (e.key === 'Tab') {
      e.preventDefault()
      if (mode === 'normal' && !busy) handleTab()
    }
  }, [inputVal, busy, mode, history, runCommand, handleTab])

  // ── Derived ────────────────────────────────────────────────────────────────

  const prompt = mode === 'suggest' ? 'suggestion:~$' : 'zacess@terminal:~$'
  const cursorHidden = busy && mode === 'normal'

  // ── Closed state: show restore button ─────────────────────────────────────

  if (closed) {
    return (
      <div className="h-full flex items-center justify-center">
        <button
          type="button"
          onClick={resetTerminal}
          className="font-mono text-[#555555] text-xs border border-[rgba(255,255,0,0.2)] px-4 py-2 hover:text-[#ffff00] hover:border-[rgba(255,255,0,0.5)] transition-colors duration-150"
        >
          [restore terminal]
        </button>
      </div>
    )
  }

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <div
      className={[
        'terminal-wrapper',
        minimised ? '!h-auto' : '',
        maximised ? 'fixed inset-0 !w-full !h-full z-[9999] !m-0' : '',
      ].filter(Boolean).join(' ')}
      onClick={() => {
        if (window.getSelection()?.toString()) return
        if (!busy || mode === 'suggest') inputRef.current?.focus()
      }}
    >
      {/* Titlebar */}
      <div className="terminal-titlebar">
        {/* Traffic lights -- left */}
        <div className="flex gap-1.5 flex-shrink-0">
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-[#ff5f56] transition-all hover:brightness-125 active:scale-90"
            onClick={e => { e.stopPropagation(); setClosed(true) }}
            title="close"
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-[#ffbd2e] transition-all hover:brightness-125 active:scale-90"
            onClick={e => { e.stopPropagation(); setMinimised(m => !m) }}
            title="minimise"
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-[#27c93f] transition-all hover:brightness-125 active:scale-90"
            onClick={e => { e.stopPropagation(); setMaximised(m => !m) }}
            title="maximise"
          />
        </div>

        {/* Title -- centre */}
        <span className="terminal-title flex-1 text-center">
          zacess@terminal -- bash -- 80x24
        </span>

        {/* New terminal -- right */}
        <button
          type="button"
          onClick={e => { e.stopPropagation(); resetTerminal() }}
          title="new terminal"
          className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-[rgba(255,255,0,0.45)] hover:text-[rgba(255,255,0,0.9)] transition-colors duration-150 text-base leading-none"
        >
          +
        </button>
      </div>

      {/* Content -- hidden when minimised */}
      {!minimised && (
        <>
          <div className="terminal-content" ref={outputRef}>
            {entries.map(entry => {
              const { id, type, html, prompt: ep, cmd } = entry
              if (type === 'divider') return <hr key={id} className="divider" />
              if (type === 'blank') return <div key={id} className="out blank" />
              if (type === 'sys') return (
                <div key={id} className="out sys" dangerouslySetInnerHTML={{ __html: html ?? '' }} />
              )
              if (type === 'echo') return (
                <div key={id} className="cmd-echo">
                  <span className="p-glyph">{ep}</span>
                  <span className="cmd-text">{cmd}</span>
                </div>
              )
              if (type === 'out') return (
                <div key={id} className="out" dangerouslySetInnerHTML={{ __html: html ?? '' }} />
              )
              return null
            })}
          </div>

          {/* Input row */}
          <div className="terminal-input-area">
            <span className="mobile-tap-hint">tap to type</span>
            <span className="p-glyph">{prompt}</span>
            <div className="flex-1 flex items-center overflow-hidden cursor-text min-w-0">
              <span className="cmd-text whitespace-pre" aria-hidden="true">{inputVal}</span>
              <span
                className={`cursor-block${cursorHidden ? ' opacity-0' : ''}`}
                aria-hidden="true"
              >
                &#x258A;
              </span>
            </div>
            <input
              ref={inputRef}
              type="text"
              inputMode="text"
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
              aria-label="terminal input"
              className="terminal-hidden-input"
            />
          </div>
        </>
      )}
    </div>
  )
}
