'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Location', href: '/location' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-card/95 backdrop-blur-md shadow-[0_1px_12px_rgba(11,28,48,0.08)] border-b border-surface-container">
      {/* Top Corporate Bar */}
      <div className="bg-duo-navy text-surface px-margin hidden md:block">
        <div className="max-w-[1240px] mx-auto py-1.5 flex justify-between items-center text-label-sm font-label-sm tracking-wider">
          <div className="flex items-center gap-space-lg">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-duo-bright-blue">
                location_on
              </span>
              105 Boundary Street, Liverpool, UK (L5 9YJ)
            </span>
            <a
              href="mailto:info@duosafety.co.uk"
              className="flex items-center gap-1.5 hover:text-secondary-fixed transition-colors"
            >
              <span className="material-symbols-outlined text-[14px] text-duo-bright-blue">
                mail
              </span>
              info@duosafety.co.uk
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[14px] text-compliance-green">
              verified
            </span>
            <span>UK HSE &amp; CDM 2015 Statutory Specialists</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="h-20 max-w-[1240px] mx-auto px-margin flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo-color.svg"
            alt="DUO Safety Consultancy"
            width={175}
            height={48}
            className="h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`py-1.5 transition-colors text-label-md font-label-md ${
                  isActive
                    ? 'text-duo-deep-blue font-bold underline underline-offset-8 decoration-2 decoration-duo-bright-blue'
                    : 'text-on-surface-variant hover:text-duo-deep-blue'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-duo-deep-blue text-white font-label-md text-label-md rounded-lg hover:bg-duo-bright-blue transition-all shadow-sm hover:shadow-md"
          >
            <span className="material-symbols-outlined text-[18px]">
              shield_person
            </span>
            <span>Client Portal</span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-duo-deep-blue hover:bg-surface-container transition-colors"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-card border-t border-surface-container px-margin py-space-md space-y-2 shadow-xl">
          {navItems.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg font-label-md text-label-md transition-colors ${
                  isActive
                    ? 'bg-duo-deep-blue text-white font-bold'
                    : 'text-on-surface hover:bg-surface-container'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
          <div className="pt-2 border-t border-surface-container">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-duo-bright-blue text-white font-label-md text-label-md rounded-lg shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">
                shield_person
              </span>
              <span>Client Portal &amp; Dispatch</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
