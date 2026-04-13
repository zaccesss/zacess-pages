import Banner from '@/components/Banner'
import Terminal from '@/components/Terminal'
import QuoteBar from '@/components/QuoteBar'
import ThemeToggle from '@/components/ThemeToggle'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <ThemeToggle />
      <div className="w-full max-w-[900px] mx-auto flex flex-col gap-3 py-4 px-4 sm:px-6">
        <Banner />
        <Terminal />
        <QuoteBar />
      </div>
    </main>
  )
}
