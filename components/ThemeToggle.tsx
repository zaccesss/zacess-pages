'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      title={`switch to ${isDark ? 'light' : 'dark'} mode`}
      className="fixed top-4 right-4 z-50 font-mono text-xs px-2 py-1 border border-[rgba(255,255,0,0.25)] text-[#555] hover:text-[#ffff00] hover:border-[rgba(255,255,0,0.55)] bg-black transition-colors duration-150"
      style={{ fontFamily: 'var(--font-mono), JetBrains Mono, monospace' }}
    >
      {isDark ? '[light]' : '[dark]'}
    </button>
  )
}
