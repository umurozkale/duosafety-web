import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-duo-navy text-surface mt-auto border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-margin py-space-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl">
          {/* Column 1: Brand & Overview */}
          <div className="space-y-space-md">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo-white.svg"
                alt="DUO Safety"
                width={175}
                height={48}
                className="h-11 w-auto object-contain"
              />
            </Link>
            <p className="font-body-sm text-body-sm text-secondary-fixed/80 max-w-sm leading-relaxed">
              Authoritative Health &amp; Safety, CDM 2015 Principal Designer &amp; Contractor advisory, and statutory workplace compliance consultancy across Liverpool and the United Kingdom.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-compliance-green font-label-sm text-label-sm uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-compliance-green animate-pulse"></span>
              HSE &amp; CDM 2015 Certified Advisory
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-headline-sm text-headline-sm text-white uppercase tracking-wider mb-space-md">
              Navigation
            </h4>
            <ul className="space-y-space-sm font-body-sm text-body-sm">
              <li>
                <Link
                  href="/"
                  className="text-secondary-fixed/80 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-secondary-fixed/80 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-secondary-fixed/80 hover:text-white transition-colors"
                >
                  Services Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/location"
                  className="text-secondary-fixed/80 hover:text-white transition-colors"
                >
                  Location &amp; UK Coverage
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-secondary-fixed/80 hover:text-white transition-colors"
                >
                  Contact &amp; Dispatch
                </Link>
              </li>
              <li className="pt-1">
                <a
                  href="https://hse-test.yoldaki.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-compliance-green hover:text-white font-semibold transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-compliance-green animate-pulse"></span>
                  <span>HS Tracking System Login</span>
                  <span className="material-symbols-outlined text-[14px]">
                    open_in_new
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Specialisms */}
          <div>
            <h4 className="font-headline-sm text-headline-sm text-white uppercase tracking-wider mb-space-md">
              Core Specialisms
            </h4>
            <ul className="space-y-space-sm font-body-sm text-body-sm text-secondary-fixed/80">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  CDM 2015 Principal Designer Advisory
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Statutory HSE Site Audits &amp; Inspections
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Workplace Risk Assessments &amp; RAMS
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Workforce Inductions &amp; Safety Training
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Accident Investigation (RIDDOR) &amp; PUWER
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Office & Contact */}
          <div>
            <h4 className="font-headline-sm text-headline-sm text-white uppercase tracking-wider mb-space-md">
              Office &amp; Dispatch
            </h4>
            <div className="space-y-space-sm font-body-sm text-body-sm text-secondary-fixed/80">
              <p className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-duo-bright-blue shrink-0 mt-0.5">
                  location_on
                </span>
                <span>
                  105 Boundary Street
                  <br />
                  Liverpool, Merseyside, L5 9YJ
                  <br />
                  United Kingdom
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-duo-bright-blue shrink-0">
                  mail
                </span>
                <a
                  href="mailto:info@duosafety.co.uk"
                  className="hover:text-white transition-colors underline underline-offset-4"
                >
                  info@duosafety.co.uk
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-compliance-green shrink-0">
                  schedule
                </span>
                <span>Mon–Fri: 9:00 AM – 5:00 PM GMT (24/7 SLA)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-space-2xl pt-space-lg border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-secondary-fixed/70 font-body-sm text-body-sm gap-space-sm">
          <div>
            &copy; 2026 DUO Safety Consultancy Ltd. All rights reserved. Registered in England &amp; Wales.
          </div>
          <div className="flex items-center gap-space-lg">
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              Terms of Engagement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
