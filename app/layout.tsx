import type { Metadata } from 'next'
import { Inter, Outfit, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DUO Safety | UK HSE & CDM 2015 Compliance Consultancy',
  description:
    'Authoritative Occupational Health & Safety, CDM 2015 Principal Designer & Contractor advisory, construction safety management, and statutory compliance audits across Liverpool and the UK.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="bg-surface-canvas font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow w-full pt-20 md:pt-[108px] bg-surface-canvas">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
