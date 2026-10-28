import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About DUO Safety | UK HSE & CDM 2015 Compliance Consultancy',
  description:
    'Learn about DUO Safety Consultancy — Liverpool-headquartered specialists in UK Occupational Health & Safety, CDM 2015 Regulations, and statutory compliance governance.',
}

const philosophyCards = [
  {
    icon: 'shield',
    title: 'Zero Preventable Incidents',
    desc: 'Every worker deserves an uncompromising environment where safety protocols are embedded into the structural sequencing, pre-empting hazardous conditions before workforce deployment.',
    metric: 'Metric: Zero Harm Benchmark',
  },
  {
    icon: 'gavel',
    title: 'Rigorous Legal Certainty',
    desc: 'We eliminate regulatory exposure for clients, duty holders, and contractors by verifying uncompromising adherence to UK HSE statutes, CDM 2015 regulations, and workplace legislation.',
    metric: 'Standard: Statutory Absolute',
  },
  {
    icon: 'handyman',
    title: 'Practical On-Site Execution',
    desc: 'Paper-only policies fail without realistic implementation. Our advisory delivers pragmatic, real-world safe systems of work that protect teams without paralyzing project progress.',
    metric: 'Focus: Live Operational Reality',
  },
]

const capabilities = [
  {
    icon: 'architecture',
    badge: 'Statutory Directive',
    title: 'Construction Safety Management & CDM 2015 Advisor Duties',
    desc: 'Comprehensive counsel for Principal Designers, Clients, and Principal Contractors. We curate Pre-Construction Information (PCI), coordinate design phase risk elimination, and validate Construction Phase Plans (CPP).',
  },
  {
    icon: 'fact_check',
    badge: 'Inspection & Governance',
    title: 'Statutory Health & Safety Compliance Audits',
    desc: 'Independent, rigorous on-site inspections evaluating plant safety, scaffolding integrity, welfare setups, and regulatory paperwork, accompanied by prioritized remedial action plans and legal risk ratings.',
  },
  {
    icon: 'school',
    badge: 'Human Performance',
    title: 'Site Safety Inductions & Practical Workforce Training',
    desc: 'Custom-built briefing modules and on-site toolbox talks tailored specifically to project hazards, establishing behavioral expectations, emergency procedures, and contractor accountability from day one.',
  },
  {
    icon: 'warning',
    badge: 'Risk Engineering',
    title: 'Comprehensive Hazard Identification & Risk Assessments',
    desc: 'Robust Risk Assessments and Method Statements (RAMS), task-specific risk profiling, lift plans, and COSHH documentation ensuring total legal compliance under UK safety legislation.',
  },
]

const reasons = [
  {
    icon: 'history_edu',
    title: 'Deep Industry Experience',
    desc: 'Decades of cross-discipline leadership overseeing high-density commercial towers, civil groundwork, structural steel erection, and industrial plant operations.',
  },
  {
    icon: 'apartment',
    title: 'Liverpool HQ & Nationwide Advisory',
    desc: 'Headquartered centrally in Liverpool, Merseyside, serving the North West industrial hub while operating mobile consulting teams deployed across all UK regions.',
  },
  {
    icon: 'speed',
    title: 'Rapid Response On-Site Inspections',
    desc: 'Agile emergency deployment for immediate site interventions, imminent hazard assessments, contractor compliance evaluations, and HSE inspector visit preparation.',
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO HEADER */}
      <section className="relative w-full bg-duo-navy text-white py-space-3xl overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#137dc5_1.5px,transparent_1.5px)] [background-size:32px_32px]"></div>
        </div>
        <div className="max-w-[1240px] mx-auto px-margin relative z-10">
          <div className="flex flex-col gap-space-md max-w-3xl">
            <div className="flex flex-wrap items-center gap-space-sm">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-duo-bright-blue/25 text-secondary-fixed font-label-sm text-label-sm uppercase tracking-widest border border-white/15">
                Institutional Profile
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-compliance-green"></span>
              <span className="font-label-sm text-label-sm text-secondary-fixed/80 tracking-wider uppercase">
                Liverpool HQ • Nationwide Advisory
              </span>
            </div>
            <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-white tracking-tight uppercase">
              ABOUT DUO SAFETY
            </h1>
            <p className="font-headline-md text-headline-md text-secondary-fixed">
              Specialist Health &amp; Safety, CDM 2015, and Compliance Consultancy
            </p>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW SPLIT */}
      <section className="w-full py-space-3xl bg-surface-canvas">
        <div className="max-w-[1240px] mx-auto px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <div className="lg:col-span-6 flex flex-col gap-space-lg">
              <div className="flex items-center gap-space-sm">
                <span className="w-8 h-1 bg-duo-deep-blue rounded-full"></span>
                <span className="font-label-sm text-label-sm uppercase text-duo-deep-blue font-bold tracking-widest">
                  Overview
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface">
                Authoritative Governance for Complex Physical Environments
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                DUO Safety is a premier UK consultancy providing expert guidance in Occupational Health &amp; Safety and Construction Design and Management (CDM 2015). We ensure construction sites, commercial developments, and industrial workplaces maintain the highest standards of worker protection and legal compliance.
              </p>
              <div className="grid grid-cols-2 gap-space-md pt-space-sm">
                <div className="bg-surface-card p-space-md rounded-xl shadow-sm border border-surface-container flex flex-col gap-space-xs">
                  <span className="font-headline-lg text-headline-lg text-duo-deep-blue font-bold">
                    100%
                  </span>
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    HSE Statutory Adherence
                  </span>
                </div>
                <div className="bg-surface-card p-space-md rounded-xl shadow-sm border border-surface-container flex flex-col gap-space-xs">
                  <span className="font-headline-lg text-headline-lg text-duo-bright-blue font-bold">
                    UK-Wide
                  </span>
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    Principal Designer Advisory
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-xl overflow-hidden shadow-xl bg-duo-navy h-[440px] flex flex-col justify-between p-space-xl text-white">
                <Image
                  src="/images/about-liverpool-hq.jpg"
                  alt="DUO Safety Liverpool Operations Centre and Principal Contractor Advisory Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-duo-navy via-duo-navy/55 to-duo-navy/35"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-duo-navy/80 backdrop-blur-md font-label-sm text-label-sm uppercase tracking-wider border border-white/15">
                    Principal Contractor • CDM 2015
                  </span>
                  <span className="material-symbols-outlined text-[36px] text-compliance-green">
                    verified_user
                  </span>
                </div>

                <div className="relative z-10 bg-duo-navy/85 backdrop-blur-md rounded-xl p-space-md border border-white/15">
                  <div className="flex items-center gap-space-sm mb-1">
                    <span className="material-symbols-outlined text-compliance-green text-[20px]">
                      verified
                    </span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed">
                      Liverpool HQ &amp; Nationwide Site Command
                    </span>
                  </div>
                  <p className="font-headline-sm text-headline-sm font-semibold text-white">
                    Appointed Principal Contractor &amp; CDM 2015 Dutyholder Representation Across Flagship UK Works
                  </p>
                </div>
              </div>

              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-surface-card p-space-md rounded-xl shadow-lg border border-surface-container flex-col gap-1 max-w-[240px] z-20">
                <div className="flex items-center gap-1.5 text-compliance-green">
                  <span className="material-symbols-outlined text-[18px]">
                    verified
                  </span>
                  <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider">
                    Field Validated
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Comprehensive statutory checks conducted prior to primary works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & CORE PHILOSOPHY */}
      <section className="w-full py-space-3xl bg-surface-container-low">
        <div className="max-w-[1240px] mx-auto px-margin">
          <div className="flex flex-col gap-space-xs mb-space-2xl max-w-2xl">
            <span className="font-label-sm text-label-sm uppercase text-duo-deep-blue font-bold tracking-widest">
              Guiding Standards
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface">
              Mission &amp; Core Philosophy
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Our structural approach bridges board-level legal governance with practical daily site operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            {philosophyCards.map((card) => (
              <div
                key={card.title}
                className="bg-surface-card p-space-xl rounded-xl shadow-sm hover:shadow-md border border-surface-container transition-shadow flex flex-col justify-between"
              >
                <div className="flex flex-col gap-space-md">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-duo-deep-blue">
                    <span className="material-symbols-outlined text-[28px]">
                      {card.icon}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    {card.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <div className="pt-space-md mt-space-md border-t border-surface-container">
                  <span className="font-label-sm text-label-sm uppercase text-duo-deep-blue tracking-wider font-bold">
                    {card.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. KEY EXPERTISE AREAS */}
      <section className="w-full py-space-3xl bg-surface-canvas">
        <div className="max-w-[1240px] mx-auto px-margin">
          <div className="flex flex-col gap-space-xs mb-space-2xl max-w-2xl">
            <span className="font-label-sm text-label-sm uppercase text-duo-deep-blue font-bold tracking-widest">
              Capabilities
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface">
              Key Expertise Areas
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Comprehensive advisory covering statutory mandates and site-level management across the UK construction and industrial sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-surface-card p-space-xl rounded-xl shadow-sm hover:shadow-md border border-surface-container transition-shadow flex gap-space-lg items-start"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-surface-container flex items-center justify-center text-duo-deep-blue">
                  <span className="material-symbols-outlined text-[26px]">
                    {cap.icon}
                  </span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm text-duo-bright-blue font-bold uppercase tracking-wider">
                    {cap.badge}
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    {cap.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE DUO SAFETY */}
      <section className="w-full py-space-3xl bg-surface-container-low">
        <div className="max-w-[1240px] mx-auto px-margin">
          <div className="flex flex-col gap-space-xs mb-space-2xl text-center items-center">
            <span className="font-label-sm text-label-sm uppercase text-duo-deep-blue font-bold tracking-widest">
              The DUO Standard
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface">
              Why Choose DUO Safety
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              Proven regional leadership backed by comprehensive national coverage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-xl">
            {reasons.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center p-space-lg bg-surface-card rounded-xl shadow-sm border border-surface-container"
              >
                <div className="w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center text-duo-deep-blue mb-space-md">
                  <span className="material-symbols-outlined text-[32px]">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">
                  {item.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="w-full py-space-3xl bg-surface-canvas">
        <div className="max-w-[1240px] mx-auto px-margin">
          <div className="bg-duo-navy rounded-xl p-space-xl md:p-space-3xl shadow-xl relative overflow-hidden text-white">
            <div className="absolute -right-16 -top-16 w-80 h-80 bg-duo-bright-blue/25 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-xl">
              <div className="max-w-2xl flex flex-col gap-space-sm">
                <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-widest font-bold">
                  Engage DUO Safety
                </span>
                <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-white">
                  Ready to Solidify Your Operational Compliance?
                </h2>
                <p className="font-body-lg text-body-lg text-secondary-fixed/85">
                  Explore our comprehensive range of specialized safety disciplines or contact our Liverpool advisory office directly to discuss your project requirements.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-space-md shrink-0">
                <Link
                  href="/services"
                  className="px-6 py-3.5 rounded-xl bg-duo-bright-blue text-white font-label-md text-label-md font-bold uppercase tracking-wider hover:bg-duo-deep-blue transition-all flex items-center gap-2 shadow-md"
                >
                  <span>Explore Services</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-label-md text-label-md font-bold uppercase tracking-wider hover:bg-white/20 transition-all flex items-center gap-2"
                >
                  <span>Contact Team</span>
                  <span className="material-symbols-outlined text-[18px]">
                    mail
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
