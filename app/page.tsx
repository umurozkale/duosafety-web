import Image from 'next/image'
import Link from 'next/link'
import DynamicScrollyServices from '@/components/DynamicScrollyServices'
import HseTrackerShowcase from '@/components/HseTrackerShowcase'

const sectors = [
  {
    tag: 'Construction & Civil',
    icon: 'apartment',
    title: 'Commercial & Infrastructure Construction',
    desc: 'Principal Contractor duties, CDM 2015 compliance, structural steelwork oversight, lifting operations (LOLER), scaffolding safety, and temporary works advisory across major UK build programmes.',
    badge: 'Principal Contractor & CDM 2015',
    image: '/images/sector-construction.jpg',
    metrics: 'F10 • CPP • PCI • Temporary Works',
  },
  {
    tag: 'Automotive Sector',
    icon: 'conveyor_belt',
    title: 'Automotive Manufacturing & Robotic Assembly',
    desc: 'Plant-level Principal Contractor management across Body-in-White (BIW), Paint Shop, and Trim & Final halls. Robotic cell safeguarding, contractor inductions, and live man-hour governance.',
    badge: '3.7M+ Safe Man-Hours Tracked',
    image: '/images/sector-automotive.jpg',
    metrics: 'BIW • Paint Shop • Robotic Interlocks',
  },
  {
    tag: 'Manufacturing',
    icon: 'precision_manufacturing',
    title: 'High-Throughput Manufacturing Lines',
    desc: 'Automated conveyor line governance, machinery guarding PUWER compliance, LOTO (Lockout/Tagout) verification, and operational safety culture on high-speed UK production floors.',
    badge: 'PUWER & Machinery Guarding',
    image: '/images/sector-manufacturing.jpg',
    metrics: 'PUWER • LOTO • Ergonomics',
  },
  {
    tag: 'Chemical & Process',
    icon: 'science',
    title: 'Chemical & High-Hazard Processing',
    desc: 'Strict COSHH compliance protocols, DSEAR explosive atmosphere zoning, pressurized piping inspection regimes, and permit-to-work governance in hazardous processing facilities.',
    badge: 'COSHH & DSEAR Controls',
    image: '/images/sector-chemical.jpg',
    metrics: 'COSHH • DSEAR • Confined Spaces',
  },
]

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION WITH REAL PHOTOGRAPHY & PRINCIPAL CONTRACTOR AUTHORITY */}
      <section className="relative w-full overflow-hidden bg-duo-navy text-white min-h-[680px] flex items-center">
        {/* Background High-Resolution Site Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-construction-safety.jpg"
            alt="DUO Safety Principal Contractor and CDM 2015 Advisors on a UK construction site"
            fill
            priority
            className="object-cover object-center opacity-40 scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-duo-navy via-duo-navy/90 to-duo-navy/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-duo-navy via-transparent to-duo-navy/40" />
        </div>

        {/* Subtle Industrial Blueprint Grid Overlay */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#137dc5_1.5px,transparent_1.5px)] [background-size:32px_32px]" />
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-margin py-space-3xl w-full flex flex-col justify-between min-h-[620px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <div className="lg:col-span-8 space-y-space-md">
              <div className="inline-flex flex-wrap items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-compliance-green animate-pulse" />
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">
                  Appointed Principal Contractor • CDM 2015 • Live HSE Cloud
                </span>
              </div>

              <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero uppercase tracking-tight text-white leading-tight">
                Authoritative{' '}
                <span className="text-secondary-fixed">
                  Principal Contractor
                </span>{' '}
                &amp; UK Health &amp; Safety Governance
              </h1>

              <p className="font-body-lg text-body-lg text-secondary-fixed/90 max-w-2xl leading-relaxed">
                Headquartered in Liverpool, DUO Safety acts as Principal Contractor, CDM 2015 Advisor, and statutory HSE partner for flagship UK construction, automotive, and industrial programmes—backed by our live{' '}
                <strong className="text-white font-semibold">
                  DUO HS Tracking System™
                </strong>
                .
              </p>

              <div className="pt-space-md flex flex-wrap items-center gap-space-md">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 bg-duo-bright-blue text-white font-label-md text-label-md px-7 py-4 rounded-xl shadow-lg hover:bg-duo-deep-blue transition-all transform hover:-translate-y-0.5"
                >
                  <span>Explore Principal Capabilities</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </Link>
                <a
                  href="https://hse-test.yoldaki.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-compliance-green/20 backdrop-blur-md text-white border border-compliance-green/50 hover:bg-compliance-green hover:text-duo-navy font-label-md text-label-md px-7 py-4 rounded-xl transition-all"
                >
                  <span className="w-2 h-2 rounded-full bg-compliance-green animate-ping" />
                  <span>Launch HSE Tracker Portal</span>
                  <span className="material-symbols-outlined text-[18px]">
                    open_in_new
                  </span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 font-label-md text-label-md px-6 py-4 rounded-xl transition-all"
                >
                  <span>Appoint DUO Safety</span>
                </Link>
              </div>
            </div>

            {/* Right Floating Live Credentials Card */}
            <div className="lg:col-span-4">
              <div className="bg-duo-navy/85 backdrop-blur-xl border border-white/20 rounded-2xl p-space-lg shadow-2xl space-y-space-md">
                <div className="flex items-center justify-between border-b border-white/10 pb-space-sm">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">
                    Live Operational Scale
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-compliance-green/20 text-compliance-green text-[11px] font-bold">
                    ● UK-Wide Active
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-extrabold text-white">3.73M+</div>
                      <div className="text-xs text-secondary-fixed/80">
                        Project Man-Hours Supervised
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-compliance-green text-[28px]">
                      schedule
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-extrabold text-white">5,208+</div>
                      <div className="text-xs text-secondary-fixed/80">
                        Inducted Operatives &amp; CSCS Vault
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-secondary-fixed text-[28px]">
                      badge
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-extrabold text-white">100%</div>
                      <div className="text-xs text-secondary-fixed/80">
                        Principal Contractor CDM 2015 SLA
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-duo-bright-blue text-[28px]">
                      verified_user
                    </span>
                  </div>
                </div>

                <div className="pt-1 text-[11px] text-secondary-fixed/75 flex items-center justify-between">
                  <span>Liverpool HQ (L5 9YJ)</span>
                  <a
                    href="https://hse-test.yoldaki.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-compliance-green font-bold hover:underline"
                  >
                    hse-test.yoldaki.com →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Bottom Hero Authority Pillars */}
          <div className="pt-space-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            <div className="bg-duo-navy/80 backdrop-blur-md border border-white/15 p-space-md rounded-xl flex items-center gap-space-md shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-duo-bright-blue/30 flex items-center justify-center text-secondary-fixed shrink-0">
                <span className="material-symbols-outlined text-[26px]">
                  engineering
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-lg font-bold text-white leading-tight">
                  Principal Contractor
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed/80 mt-0.5">
                  Full CDM 2015 Dutyholder
                </span>
              </div>
            </div>

            <div className="bg-duo-navy/80 backdrop-blur-md border border-white/15 p-space-md rounded-xl flex items-center gap-space-md shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-compliance-green/25 flex items-center justify-center text-compliance-green shrink-0">
                <span className="material-symbols-outlined text-[26px]">
                  cloud_done
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-lg font-bold text-white leading-tight">
                  DUO HS Tracker™
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed/80 mt-0.5">
                  Proprietary Cloud Portal
                </span>
              </div>
            </div>

            <div className="bg-duo-navy/80 backdrop-blur-md border border-white/15 p-space-md rounded-xl flex items-center gap-space-md shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-duo-deep-blue/50 flex items-center justify-center text-secondary-fixed shrink-0">
                <span className="material-symbols-outlined text-[26px]">
                  fact_check
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-lg font-bold text-white leading-tight">
                  LOLER &amp; PUWER
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed/80 mt-0.5">
                  Plant &amp; Lifting Audits
                </span>
              </div>
            </div>

            <div className="bg-duo-navy/80 backdrop-blur-md border border-white/15 p-space-md rounded-xl flex items-center gap-space-md shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-duo-bright-blue/30 flex items-center justify-center text-secondary-fixed shrink-0">
                <span className="material-symbols-outlined text-[26px]">
                  gavel
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-lg font-bold text-white leading-tight">
                  100% HSE Adherence
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed/80 mt-0.5">
                  Defensible RAMS &amp; Audits
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORPORATE OVERVIEW SPLIT WITH LIVERPOOL HQ PHOTO */}
      <section className="max-w-[1240px] mx-auto px-margin py-space-3xl w-full">
        <div className="bg-surface-card rounded-2xl p-space-xl md:p-space-2xl shadow-md border border-surface-container grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-7 space-y-space-md">
            <div className="inline-flex items-center gap-1.5 text-duo-deep-blue font-label-sm text-label-sm uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px]">
                domain
              </span>
              <span>Principal Contractor &amp; Executive Advisory</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface uppercase tracking-tight">
              Direct Site Command, Not Just Paperwork
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Headquartered at 105 Boundary Street, Liverpool, DUO Safety operates across the United Kingdom as both an appointed{' '}
              <strong className="text-on-surface">Principal Contractor</strong> and independent{' '}
              <strong className="text-on-surface">Health &amp; Safety Consultancy</strong>. We bridge statutory obligations under the Construction (Design and Management) Regulations 2015 and Health and Safety at Work Act 1974 with live on-site execution.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs text-on-surface">
              <div className="flex items-center gap-2 bg-surface-container-low p-3 rounded-xl border border-surface-container">
                <span className="material-symbols-outlined text-compliance-green text-[20px]">
                  check_circle
                </span>
                <span className="font-label-md text-label-md">
                  Principal Contractor &amp; Designer (CDM)
                </span>
              </div>
              <div className="flex items-center gap-2 bg-surface-container-low p-3 rounded-xl border border-surface-container">
                <span className="material-symbols-outlined text-compliance-green text-[20px]">
                  check_circle
                </span>
                <span className="font-label-md text-label-md">
                  Proprietary HS Tracking Cloud System
                </span>
              </div>
              <div className="flex items-center gap-2 bg-surface-container-low p-3 rounded-xl border border-surface-container">
                <span className="material-symbols-outlined text-compliance-green text-[20px]">
                  check_circle
                </span>
                <span className="font-label-md text-label-md">
                  Turnkey Subcontractor Vetting &amp; RAMS
                </span>
              </div>
              <div className="flex items-center gap-2 bg-surface-container-low p-3 rounded-xl border border-surface-container">
                <span className="material-symbols-outlined text-compliance-green text-[20px]">
                  check_circle
                </span>
                <span className="font-label-md text-label-md">
                  24/7 Nationwide Site Mobilization
                </span>
              </div>
            </div>
            <div className="pt-space-sm flex flex-wrap items-center gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-duo-deep-blue text-white hover:bg-duo-bright-blue font-label-md text-label-md px-6 py-3.5 rounded-xl transition-colors shadow-sm"
              >
                <span>About DUO Safety</span>
                <span className="material-symbols-outlined text-[18px]">
                  navigate_next
                </span>
              </Link>
              <Link
                href="/location"
                className="inline-flex items-center gap-2 bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md px-6 py-3.5 rounded-xl transition-colors"
              >
                <span>Liverpool HQ &amp; UK Coverage</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-[380px] w-full rounded-2xl overflow-hidden shadow-xl border border-surface-container group">
              <Image
                src="/images/about-liverpool-hq.jpg"
                alt="DUO Safety Liverpool Operations Centre and Executive Advisory Team"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-duo-navy/90 via-duo-navy/25 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-duo-navy/90 backdrop-blur-md p-4 rounded-xl border border-white/15 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-secondary-fixed font-bold">
                      Merseyside Operations Command
                    </div>
                    <div className="font-headline-sm text-base font-bold mt-0.5">
                      105 Boundary Street, Liverpool (L5 9YJ)
                    </div>
                  </div>
                  <span className="w-9 h-9 rounded-lg bg-compliance-green/20 text-compliance-green flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">
                      verified
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OPTION A: STICKY SCROLLYTELLING — PRINCIPAL CONTRACTOR & CORE PRACTICE AREAS */}
      <DynamicScrollyServices />

      {/* 4. OPTION B: INTERACTIVE HSE TRACKER LIVE COCKPIT SHOWCASE */}
      <HseTrackerShowcase />

      {/* 5. MULTI-INDUSTRY SAFE OPERATIONS WITH REAL PHOTOGRAPHY */}
      <section className="max-w-[1240px] mx-auto px-margin pb-space-3xl w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
          <div>
            <div className="inline-flex items-center gap-1.5 text-duo-deep-blue font-label-sm text-label-sm uppercase tracking-widest mb-space-xs">
              <span className="material-symbols-outlined text-[16px]">
                factory
              </span>
              <span>Sector Governance</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface uppercase tracking-tight">
              Multi-Industry Safe Operations
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Proven Principal Contractor leadership, regulatory auditing, and live safety tracking applied across high-hazard UK industrial environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {sectors.map((sec) => (
            <div
              key={sec.title}
              className="bg-surface-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-surface-container-high/60"
            >
              <div className="relative h-64 overflow-hidden bg-duo-navy">
                <Image
                  src={sec.image}
                  alt={sec.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-duo-navy/90 via-duo-navy/25 to-transparent" />
                <div className="absolute top-4 left-4 bg-duo-navy/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider border border-white/15 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px] text-compliance-green">
                    {sec.icon}
                  </span>
                  {sec.tag}
                </div>
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90 font-medium">
                  <span className="bg-black/40 backdrop-blur-xs px-3 py-1 rounded-md border border-white/10">
                    {sec.metrics}
                  </span>
                </div>
              </div>
              <div className="p-space-lg flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs uppercase">
                    {sec.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                    {sec.desc}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-space-sm border-t border-surface-container">
                  <span className="font-label-sm text-label-sm text-compliance-green flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px]">
                      verified_user
                    </span>
                    {sec.badge}
                  </span>
                  <Link
                    href="/services"
                    className="font-label-md text-label-md text-duo-deep-blue hover:text-duo-bright-blue inline-flex items-center gap-1"
                  >
                    <span>Explore Sector</span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                      chevron_right
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. BOTTOM CTA BANNER */}
      <section className="max-w-[1240px] mx-auto px-margin pb-space-3xl w-full">
        <div className="bg-duo-navy text-white rounded-2xl p-space-xl md:p-space-2xl shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-80 h-80 rounded-full bg-duo-bright-blue/25 blur-3xl pointer-events-none" />
          <div className="max-w-2xl relative z-10 space-y-space-sm">
            <div className="inline-flex items-center gap-1.5 text-secondary-fixed font-label-sm text-label-sm uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px]">
                support_agent
              </span>
              <span>Direct Principal Contractor &amp; HSE Dispatch</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-white uppercase tracking-tight">
              Require a Principal Contractor, CDM Advisor, or Immediate Site Audit?
            </h2>
            <p className="font-body-md text-body-md text-secondary-fixed/85 leading-relaxed">
              Speak directly with our Liverpool-based health and safety command team regarding Principal Contractor appointments, live HSE Tracker onboarding, or urgent UK-wide site inspections.
            </p>
          </div>
          <div className="relative z-10 flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-duo-bright-blue hover:bg-duo-deep-blue text-white font-label-md text-label-md px-8 py-4 rounded-xl shadow-lg transition-colors"
            >
              <span>Instruct DUO Safety</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
            <a
              href="https://hse-test.yoldaki.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-label-md text-label-md px-6 py-4 rounded-xl transition-colors"
            >
              <span>HSE Tracker Portal</span>
              <span className="material-symbols-outlined text-[18px]">
                open_in_new
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
