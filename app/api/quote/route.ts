import { NextResponse } from 'next/server'

const FALLBACK = {
  q: 'Engineering that thinks. Technology that serves. Growth as a lifestyle.',
  a: 'Isaac Adjei',
}

export async function GET() {
  try {
    const res = await fetch('https://zenquotes.io/api/random', {
      next: { revalidate: 0 },
    })
    if (!res.ok) return NextResponse.json(FALLBACK)
    const data = await res.json()
    const quote = data[0]
    if (!quote?.q || !quote?.a) return NextResponse.json(FALLBACK)
    return NextResponse.json({ q: quote.q, a: quote.a })
  } catch {
    return NextResponse.json(FALLBACK)
  }
}
