import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-duo-navy text-white min-h-[600px] flex items-center pt-20">
        {/* Endüstriyel Izgara Arka Planı */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(#137dc5_1px,transparent_1px)] [background-size:24px_24px]"></div>
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-duo-navy via-duo-navy/95 to-duo-navy/40"></div>
        
        <div className="relative z-10 max-w-[1240px] mx-auto px-margin w-full pb-24">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-compliance-green animate-pulse"></span>
              <span className="font-body text-xs font-bold uppercase tracking-widest text-inverse-primary">
                Protecting Your Workforce, Securing Your Future
              </span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
              Your Trusted Partner In Health & Safety Compliance
            </h1>
            
            <p className="font-body text-lg text-surface-variant max-w-2xl leading-relaxed">
              Specialising in occupational health and safety, CDM 2015 advisory, construction safety management, and statutory compliance audits across the UK.
            </p>
            
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <Link href="/services" className="inline-flex items-center justify-center gap-2 bg-duo-bright-blue text-white font-body font-semibold text-sm px-8 py-4 rounded-xl shadow-lg hover:bg-duo-deep-blue transition-colors">
                <span>Explore Services</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 font-body font-semibold text-sm px-8 py-4 rounded-xl transition-colors">
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OVERLAPPING STATS SECTION */}
      <section className="relative z-20 max-w-[1240px] mx-auto px-margin w-full -mt-16 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-surface-card p-6 rounded-xl shadow-lg border border-surface-container flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-duo-deep-blue">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-on-surface">100%</div>
              <div className="font-body text-xs font-bold uppercase tracking-wider text-outline-variant">Statutory Adherence</div>
            </div>
          </div>

          <div className="bg-surface-card p-6 rounded-xl shadow-lg border border-surface-container flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-duo-bright-blue">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-on-surface">CDM 2015</div>
              <div className="font-body text-xs font-bold uppercase tracking-wider text-outline-variant">Principal Specialists</div>
            </div>
          </div>

          <div className="bg-surface-card p-6 rounded-xl shadow-lg border border-surface-container flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-compliance-green/10 flex items-center justify-center text-compliance-green">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-on-surface">Site-Ready</div>
              <div className="font-body text-xs font-bold uppercase tracking-wider text-outline-variant">Comprehensive Audits</div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}