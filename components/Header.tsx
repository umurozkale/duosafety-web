import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-card/95 backdrop-blur-md shadow-sm border-b border-surface-container">
      <div className="max-w-[1240px] mx-auto px-margin h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo-color.svg" 
            alt="DUO Safety" 
            width={180} 
            height={48} 
            className="object-contain"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="font-body font-semibold text-sm text-duo-deep-blue hover:text-duo-bright-blue transition-colors">Home</Link>
          <Link href="/about" className="font-body font-semibold text-sm text-on-surface-variant hover:text-duo-bright-blue transition-colors">About Us</Link>
          <Link href="/services" className="font-body font-semibold text-sm text-on-surface-variant hover:text-duo-bright-blue transition-colors">Services</Link>
          <Link href="/location" className="font-body font-semibold text-sm text-on-surface-variant hover:text-duo-bright-blue transition-colors">Location</Link>
          <Link href="/contact" className="font-body font-semibold text-sm text-on-surface-variant hover:text-duo-bright-blue transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center">
          <Link href="/contact" className="px-6 py-2.5 bg-duo-deep-blue text-white font-body font-semibold text-sm rounded-lg hover:bg-duo-bright-blue transition-colors shadow-sm">
            Client Portal
          </Link>
        </div>
      </div>
    </header>
  )
}