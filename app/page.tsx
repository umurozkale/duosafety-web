import Link from 'next/link'

const coreDomains = [
  {
    icon: 'engineering',
    iconBg: 'bg-secondary-fixed text-duo-deep-blue',
    title: 'Construction Safety Management (CDM 2015)',
    description:
      'Statutory advisory for Clients, Principal Designers, and Principal Contractors under the Construction (Design and Management) Regulations 2015. We oversee Pre-Construction Information (PCI), Construction Phase Plans (CPP), and Health and Safety Files.',
    bullets: [
      'Principal Designer Technical Coordination',
      'Construction Phase Plan (CPP) Drafting & Auditing',
      'Design Risk Management & Hazard Elimination',
    ],
    cta: 'View CDM Capabilities',
  },
  {
    icon: 'checklist_rtl',
    iconBg: 'bg-surface-container text-duo-deep-blue',
    title: 'Health & Safety Audits & Inspections',
    description:
      'Independent, unannounced, and scheduled physical site audits identifying statutory non-compliances, physical plant hazards, and unsafe practices before HSE enforcement notices or project shutdowns occur.',
    bullets: [
      'Unannounced Structural Site Safety Audits',
      'Scaffolding, Lifting & Plant Equipment Verifications',
      'Subcontractor Safety Competence & PQQ Appraisals',
    ],
    cta: 'Explore Inspection Protocols',
  },
  {
    icon: 'co_present',
    iconBg: 'bg-surface-container text-duo-deep-blue',
    title: 'Workforce Training & Safety Inductions',
    description:
      'High-impact behavioral and regulatory training modules tailored to project scopes. We establish accountable safety cultures through structured site inductions, RAMS briefings, and toolbox talks.',
    bullets: [
      'Bespoke Site Inductions & Access Controls',
      'Task-Specific RAMS Briefings & Daily Protocols',
      'Work at Height & Confined Space Procedures',
    ],
    cta: 'Review Induction Frameworks',
  },
  {
    icon: 'assignment_turned_in',
    iconBg: 'bg-secondary-fixed text-duo-deep-blue',
    title: 'Statutory Compliance & Risk Assessments',
    description:
      'Defensible Risk Assessment and Method Statements (RAMS), COSHH evaluations, Fire Safety assessments under the Regulatory Reform (Fire Safety) Order, and statutory legal registers.',
    bullets: [
      'Legally Defensible Dynamic RAMS Documentation',
      'Regulatory Fire Risk Assessment (FRA) Certification',
      'COSHH, DSE & Manual Handling Risk Matrices',
    ],
    cta: 'Explore Compliance Services',
  },
]

const trackerModules = [
  {
    icon: 'description',
    title: 'Pre-Construction Info (PCI / PWI)',
    desc: 'Centralized drafting, updating, and duty-holder sign-offs for Pre-Construction Information and Works packages.',
    badge: 'CDM 2015 Compliant',
  },
  {
    icon: 'notifications_active',
    title: 'F10 Statutory Notification Tracking',
    desc: 'Automated tracking of HSE F10 portal submissions, threshold triggers, revisions, and site display verifications.',
    badge: 'Automated Submissions',
  },
  {
    icon: 'menu_book',
    title: 'Construction Phase Plan (CPP) Governance',
    desc: 'Live auditing, statutory section reviews, and revision workflows ensuring duty-holder alignment before breaking ground.',
    badge: 'Principal Contractor Aligned',
  },
  {
    icon: 'badge',
    title: 'Digital Workforce Inductions',
    desc: 'Paperless contractor onboarding, CSCS credential validation, emergency procedure briefings, and QR gate checks.',
    badge: 'QR Access Integration',
  },
  {
    icon: 'rule',
    title: 'Dynamic RAMS Management',
    desc: 'Defensible Risk Assessments and Method Statements workflow, subcontractor vetting, and operative digital sign-offs.',
    badge: 'Defensible Legal Audit Trail',
  },
  {
    icon: 'troubleshoot',
    title: 'On-Site Inspections & Live Hazards',
    desc: 'Mobile app audits with instant geolocated hazard logging, risk categorization, and automated immediate contractor alerts.',
    badge: 'Real-Time Escalations',
  },
  {
    icon: 'report_problem',
    title: 'Incident & Accident Reporting (RIDDOR)',
    desc: 'Statutory classification workflows conforming with UK RIDDOR requirements, root-cause analyses, and regulatory registers.',
    badge: 'RIDDOR Protocol Enforced',
  },
  {
    icon: 'add_a_photo',
    title: 'Photographic Action Closeouts',
    desc: 'Enforce before-and-after photo verification on all remediation items before tickets can be signed off by HSE leads.',
    badge: 'Tamper-Evident Proof',
  },
  {
    icon: 'groups',
    title: 'Toolbox Talks & Digital Signatures',
    desc: 'Deploy daily safety briefings directly to site supervisors with tablet-based digital signatures and attendance logs.',
    badge: 'Auditable Sign-Off Logs',
  },
]

const sectors = [
  {
    tag: 'Construction & Civil',
    icon: 'apartment',
    title: 'Commercial & Infrastructure Construction',
    desc: 'CDM 2015 compliance, structural steelwork oversight, lifting operations, scaffolding safety, and principal contractor advisory across major UK build programmes.',
    badge: 'CDM 2015 Specialist',
    gradient: 'from-duo-navy via-duo-deep-blue to-duo-bright-blue',
  },
  {
    tag: 'Manufacturing',
    icon: 'precision_manufacturing',
    title: 'Manufacturing Line Production',
    desc: 'Automated conveyor line governance, machinery guarding PUWER compliance, repetitive strain ergonomics, and operational safety culture on high-throughput assembly floors.',
    badge: 'PUWER & Line Auditing',
    gradient: 'from-slate-900 via-duo-navy to-duo-deep-blue',
  },
  {
    tag: 'Chemical & Process',
    icon: 'science',
    title: 'Chemical & High-Hazard Processing',
    desc: 'Strict COSHH compliance protocols, hazardous substance handling, pressurized piping inspection regimes, and PPE compliance in chemical processing environments.',
    badge: 'COSHH & DSEAR Controls',
    gradient: 'from-duo-deep-blue via-duo-navy to-slate-900',
  },
  {
    tag: 'Automotive Sector',
    icon: 'conveyor_belt',
    title: 'Automotive Manufacturing & Assembly',
    desc: 'Plant-level risk mitigation, automated robotic cell interfaces, chassis fabrication line safety, and integrated quality-safety inspections for automotive manufacturers.',
    badge: 'Automated Cell Safeguarding',
    gradient: 'from-duo-navy via-slate-800 to-duo-deep-blue',
  },
]

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-duo-navy text-white min-h-[620px] flex items-center">
        {/* Industrial Blueprint Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(#137dc5_1.5px,transparent_1.5px)] [background-size:32px_32px]"></div>
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-duo-navy via-duo-navy/95 to-duo-deep-blue/40"></div>
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-duo-bright-blue/25 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-margin py-space-3xl w-full flex flex-col justify-between min-h-[580px]">
          <div className="max-w-3xl space-y-space-md">
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-compliance-green animate-pulse"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">
                Protecting Your Workforce, Securing Your Future
              </span>
            </div>

            <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero uppercase tracking-tight text-white leading-tight">
              Your Trusted Partner In{' '}
              <span className="text-secondary-fixed">
                Health &amp; Safety Compliance
              </span>
            </h1>

            <p className="font-body-lg text-body-lg text-secondary-fixed/90 max-w-2xl leading-relaxed">
              At DUO Safety, we specialise in occupational health and safety, CDM 2015 advisory, construction safety management, workforce safety inductions, and statutory compliance audits across the UK.
            </p>

            <div className="pt-space-md flex flex-wrap items-center gap-space-md">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-duo-bright-blue text-white font-label-md text-label-md px-7 py-4 rounded-xl shadow-lg hover:bg-duo-deep-blue transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Services</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 font-label-md text-label-md px-7 py-4 rounded-xl transition-all"
              >
                <span>Get in Touch</span>
                <span className="material-symbols-outlined text-[18px]">
                  contact_support
                </span>
              </Link>
            </div>
          </div>

          {/* 3 Hero Metric Cards */}
          <div className="pt-space-2xl grid grid-cols-1 md:grid-cols-3 gap-space-md">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-space-md rounded-xl flex items-center gap-space-md shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-duo-bright-blue/30 flex items-center justify-center text-secondary-fixed shrink-0">
                <span className="material-symbols-outlined text-[28px]">
                  gavel
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-stat-counter text-3xl font-bold text-white leading-none">
                  100%
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed/80 mt-1">
                  Statutory HSE Adherence
                </span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-space-md rounded-xl flex items-center gap-space-md shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-duo-deep-blue/50 flex items-center justify-center text-secondary-fixed shrink-0">
                <span className="material-symbols-outlined text-[28px]">
                  architecture
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-md text-2xl font-bold text-white leading-tight">
                  CDM 2015
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed/80 mt-1">
                  Principal Specialists
                </span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-space-md rounded-xl flex items-center gap-space-md shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-compliance-green/25 flex items-center justify-center text-compliance-green shrink-0">
                <span className="material-symbols-outlined text-[28px]">
                  fact_check
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-md text-2xl font-bold text-white leading-tight">
                  Site-Ready
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed/80 mt-1">
                  Comprehensive Site Audits
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORPORATE OVERVIEW */}
      <section className="max-w-[1240px] mx-auto px-margin py-space-3xl w-full">
        <div className="bg-surface-card rounded-xl p-space-xl md:p-space-2xl shadow-md border border-surface-container flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-xl">
          <div className="space-y-space-md max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-duo-deep-blue font-label-sm text-label-sm uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px]">
                domain
              </span>
              <span>Corporate Overview</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface uppercase tracking-tight">
              Executive Health &amp; Safety Leadership
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Headquartered in Liverpool, DUO Safety operates across the United Kingdom providing tier-one developers, principal contractors, and duty holders with precise regulatory oversight. We bridge statutory obligations and site-level practicality, safeguarding workforces and neutralizing legal liabilities under the Health and Safety at Work Act 1974.
            </p>
            <div className="flex flex-wrap items-center gap-space-lg pt-space-xs text-on-surface">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-compliance-green text-[20px]">
                  check_circle
                </span>
                <span className="font-label-md text-label-md">
                  Direct HSE Accountability
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-compliance-green text-[20px]">
                  check_circle
                </span>
                <span className="font-label-md text-label-md">
                  UK-Wide Site Mobilization
                </span>
              </div>
            </div>
          </div>
          <div className="shrink-0">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-surface-container-high text-on-surface hover:bg-duo-deep-blue hover:text-white font-label-md text-label-md px-6 py-3.5 rounded-xl transition-colors shadow-sm"
            >
              <span>About DUO Safety</span>
              <span className="material-symbols-outlined text-[18px]">
                navigate_next
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. AUTHORITATIVE PRACTICE AREAS (CORE DOMAINS) */}
      <section className="max-w-[1240px] mx-auto px-margin pb-space-3xl w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
          <div>
            <div className="inline-flex items-center gap-1.5 text-duo-deep-blue font-label-sm text-label-sm uppercase tracking-widest mb-space-xs">
              <span className="material-symbols-outlined text-[16px]">
                shield
              </span>
              <span>Core Domains</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface uppercase tracking-tight">
              Authoritative Practice Areas
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Field-tested advisory and operational interventions engineered to enforce stringent UK HSE governance across complex high-risk environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {coreDomains.map((domain) => (
            <div
              key={domain.title}
              className="bg-surface-card rounded-xl p-space-xl shadow-sm hover:shadow-xl border border-surface-container hover:border-duo-bright-blue/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-xl ${domain.iconBg} flex items-center justify-center mb-space-lg group-hover:scale-105 transition-transform`}
                >
                  <span className="material-symbols-outlined text-[28px]">
                    {domain.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-space-sm uppercase">
                  {domain.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg leading-relaxed">
                  {domain.description}
                </p>
                <ul className="space-y-space-sm mb-space-lg font-body-sm text-body-sm text-on-surface">
                  {domain.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-space-sm">
                      <span className="w-5 h-5 rounded-lg bg-surface-container flex items-center justify-center text-duo-deep-blue shrink-0">
                        <span className="material-symbols-outlined text-[14px]">
                          done
                        </span>
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 font-label-md text-label-md text-duo-deep-blue group-hover:text-duo-bright-blue transition-colors"
              >
                <span>{domain.cta}</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. HSE WEB TRACKER PLATFORM */}
      <section className="max-w-[1240px] mx-auto px-margin pb-space-3xl w-full">
        <div className="bg-surface-card rounded-xl border border-duo-deep-blue/20 p-space-xl md:p-space-2xl shadow-lg relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md mb-space-xl border-b border-surface-container pb-space-lg">
            <div className="max-w-3xl space-y-space-xs">
              <div className="inline-flex items-center gap-1.5 text-duo-deep-blue font-label-sm text-label-sm uppercase tracking-widest">
                <span className="material-symbols-outlined text-[16px]">
                  devices
                </span>
                <span>Proprietary Digital Governance</span>
              </div>
              <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface uppercase tracking-tight">
                HSE Web Tracker™ Platform
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Our proprietary digital CDM 2015 and safety intelligence software bridges site operations and executive oversight. Experience effortless on-site integration, automated statutory documentation, live hazard escalation, and auditable closeouts across all your projects.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-space-sm shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-compliance-green/15 text-compliance-green font-label-sm text-label-sm font-bold">
                <span className="w-2 h-2 rounded-full bg-compliance-green animate-pulse"></span>
                Live Cloud Portal
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 bg-duo-deep-blue text-white font-label-md text-label-md px-5 py-2.5 rounded-xl hover:bg-duo-bright-blue transition-all shadow-sm"
              >
                <span>Request Demo</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
            {trackerModules.map((mod) => (
              <div
                key={mod.title}
                className="p-space-md rounded-xl bg-surface-container/60 hover:bg-surface-container transition-all border border-surface-container-high/50 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-secondary-fixed text-duo-deep-blue flex items-center justify-center mb-space-sm">
                    <span className="material-symbols-outlined text-[20px]">
                      {mod.icon}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">
                    {mod.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
                <span className="font-label-sm text-label-sm text-duo-deep-blue uppercase tracking-wider mt-space-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-compliance-green">
                    verified
                  </span>
                  {mod.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MULTI-INDUSTRY SAFE OPERATIONS */}
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
            Proven health, safety, and regulatory compliance expertise applied across high-risk sectors with zero compromise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {sectors.map((sec) => (
            <div
              key={sec.title}
              className="bg-surface-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-surface-container-high/50"
            >
              <div
                className={`relative h-56 overflow-hidden bg-gradient-to-br ${sec.gradient} flex items-center justify-center`}
              >
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                <span className="material-symbols-outlined text-[88px] text-white/15 group-hover:scale-110 transition-transform duration-500">
                  {sec.icon}
                </span>
                <div className="absolute top-4 left-4 bg-duo-navy/85 backdrop-blur-md px-3.5 py-1 rounded-full text-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider border border-white/10">
                  {sec.tag}
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
                    <span>Details</span>
                    <span className="material-symbols-outlined text-[16px]">
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
        <div className="bg-duo-navy text-white rounded-xl p-space-xl md:p-space-2xl shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-80 h-80 rounded-full bg-duo-bright-blue/25 blur-3xl pointer-events-none"></div>
          <div className="max-w-2xl relative z-10 space-y-space-sm">
            <div className="inline-flex items-center gap-1.5 text-secondary-fixed font-label-sm text-label-sm uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px]">
                support_agent
              </span>
              <span>Direct Advisory</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-white uppercase tracking-tight">
              Require Statutory Safety Guidance or On-Site Audits?
            </h2>
            <p className="font-body-md text-body-md text-secondary-fixed/85 leading-relaxed">
              Speak with our Liverpool-based health and safety officers regarding CDM 2015 advisory, immediate site audits, or compliance verifications across the UK.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-duo-bright-blue hover:bg-duo-deep-blue text-white font-label-md text-label-md px-8 py-4 rounded-xl shadow-lg transition-colors"
            >
              <span>Get in Touch</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
