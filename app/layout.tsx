import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'zacess.com',
  description: 'Terminal interface by Isaac (Zac) Adjei -- Aston University',
  authors: [{ name: 'Isaac Adjei' }],
  metadataBase: new URL('https://zacess.com'),
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'zacess.com',
    description: 'Interactive terminal by Isaac (Zac) Adjei',
    url: 'https://zacess.com',
    siteName: 'zacess.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} font-mono antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
