'use client'

import { useState, useEffect, useCallback } from 'react'

interface Quote {
  q: string
  a: string
}

const FALLBACK: Quote = {
  q: 'Engineering that thinks. Technology that serves. Growth as a lifestyle.',
  a: 'Isaac Adjei',
}

export default function QuoteBar() {
  const [quote, setQuote] = useState<Quote>(FALLBACK)
  const [loading, setLoading] = useState(true)

  const fetchQuote = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/quote')
      if (res.ok) {
        const data: Quote = await res.json()
        setQuote(data)
      }
    } catch {
      // keep current quote
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchQuote()
    const id = setInterval(fetchQuote, 30 * 60 * 1000)
    return () => clearInterval(id)
  }, [fetchQuote])

  return (
    <div className="w-full font-mono text-center px-6 py-3 border border-[rgba(255,255,0,0.15)] bg-[rgba(255,255,0,0.01)] flex-shrink-0">
      <p className="text-[#555555] text-[0.72rem] tracking-[0.12em] mb-1">
        -- daily motivation --
      </p>

      {loading ? (
        <p className="text-[#555555] text-[0.85rem]">fetching quote...</p>
      ) : (
        <>
          <p className="text-[#06ffa5] text-[0.9rem] italic mb-2 leading-relaxed">
            &ldquo;{quote.q}&rdquo;
          </p>
          <p className="text-[#00f5ff] text-[0.8rem]">-- {quote.a}</p>
        </>
      )}

      <button
        type="button"
        onClick={fetchQuote}
        disabled={loading}
        className="mt-2 font-mono text-[#555555] text-[0.72rem] hover:text-[#ffff00] transition-colors duration-150 disabled:opacity-40"
      >
        [refresh]
      </button>
    </div>
  )
}
