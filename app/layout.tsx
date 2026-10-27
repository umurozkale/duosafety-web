import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

// Font tanımlamaları ve CSS değişkenlerine atanması
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DUO Safety | HSE & CDM 2015 Compliance Consultancy',
  description: 'Authoritative Health & Safety, CDM 2015 advisory, and statutory workplace compliance consultancy across Liverpool and the UK.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body bg-surface text-on-surface antialiased min-h-screen flex flex-col">
        {/* Header Bileşeni */}
        <Header />
        
        {/* Ana İçerik */}
        <main className="flex-grow pt-20">
          {children}
        </main>

        {/* Footer Bileşeni */}
        <Footer />
      </body>
    </html>
  )
}