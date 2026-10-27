'use client'

import { useState } from 'react'
import Link from 'next/link'

type CategoryKey = 'all' | 'cdm' | 'site' | 'training' | 'technical'

interface ServiceItem {
  id: string
  category: Exclude<CategoryKey, 'all'>
  numberLabel: string
  title: string
  badge: string
  badgeClass: string
  topBarClass: string
  icon: string
  iconBoxClass: string
  dotClass: string
  description: string
  deliverables: string[]
  refCode: string
}

const servicesList: ServiceItem[] = [
  {
    id: 'cdm-2015',
    category: 'cdm',
    numberLabel: 'Service 01 • Statutory CDM',
    title: 'CDM 2015 MANAGEMENT',
    badge: 'Primary Regulation',
    badgeClass: 'bg-secondary-fixed text-duo-deep-blue',
    topBarClass: 'bg-duo-deep-blue',
    icon: 'architecture',
    iconBoxClass: 'bg-secondary-fixed text-duo-deep-blue',
    dotClass: 'bg-duo-deep-blue',
    description:
      'Full dutyholder representation and technical advisory across Pre-Construction and Construction phases. We facilitate seamless collaboration between Clients, Principal Designers, and Principal Contractors, eliminating legal friction and guaranteeing HSE compliance from inception to handover.',
    deliverables: [
      'Pre-Construction Information (PCI) compilation & verification',
      'Construction Phase Safety Plans (CPPs) drafted and audited',
      'Principal Designer coordination meetings and legal filing support',
      'H&S File preparation and statutory handover packaging',
    ],
    refCode: 'REF: DUO-CDM-01',
  },
  {
    id: 'compliance-audits',
    category: 'cdm',
    numberLabel: 'Service 02 • Statutory Audit',
    title: 'STATUTORY COMPLIANCE AUDITS',
    badge: 'Risk Protection',
    badgeClass: 'bg-alert-amber-soft text-on-tertiary-fixed-variant',
    topBarClass: 'bg-duo-bright-blue',
    icon: 'fact_check',
    iconBoxClass: 'bg-surface-container text-duo-bright-blue',
    dotClass: 'bg-duo-bright-blue',
    description:
      'Comprehensive on-site evaluations designed to assess legal safety adherence against current UK HSE regulations. We identify hidden liabilities, documentation deficits, and site vulnerabilities well before enforcement officers, prohibition notices, or severe financial penalties occur.',
    deliverables: [
      'Exhaustive legislative gap analysis benchmarked against UK Acts',
      'HSE regulatory penalty exposure report with severity rankings',
      'Subcontractor statutory documentation & competence verification',
      'Prioritised, time-bound legal rectification action plan',
    ],
    refCode: 'REF: DUO-AUD-02',
  },
  {
    id: 'site-inspections',
    category: 'site',
    numberLabel: 'Service 03 • Field Operations',
    title: 'SITE INSPECTIONS & MONITORING',
    badge: 'Physical Verification',
    badgeClass: 'bg-compliance-green/15 text-compliance-green',
    topBarClass: 'bg-compliance-green',
    icon: 'policy',
    iconBoxClass: 'bg-compliance-green/15 text-compliance-green',
    dotClass: 'bg-compliance-green',
    description:
      'Routine scheduled and unannounced physical site walk-throughs conducted by veteran safety inspectors. We capture empirical physical hazards, evaluate worker behavioural compliance, and deliver photographic evidence alongside actionable correction roadmaps within 24 hours.',
    deliverables: [
      'Photographic site walkthrough reports delivered within 24 hours',
      'Real-time hazard logging matrix with assigned close-out owners',
      'PPE compliance, welfare facilities & safe access reviews',
      'Site manager debriefings & signed rectification sign-offs',
    ],
    refCode: 'REF: DUO-SIM-03',
  },
  {
    id: 'workforce-training',
    category: 'training',
    numberLabel: 'Service 04 • Induction & Education',
    title: 'WORKFORCE TRAINING & INDUCTIONS',
    badge: 'Workforce Competence',
    badgeClass: 'bg-secondary-fixed text-duo-deep-blue',
    topBarClass: 'bg-duo-deep-blue',
    icon: 'co_present',
    iconBoxClass: 'bg-secondary-fixed text-duo-deep-blue',
    dotClass: 'bg-duo-deep-blue',
    description:
      'Targeted site-specific worker inductions, high-impact toolbox talks, and mandatory protocol briefs. We align operatives and subcontracted labor with legal health and safety obligations, site rules, emergency response plans, and environmental constraints prior to starting site work.',
    deliverables: [
      'Bespoke site safety induction video & slide decks with signed logs',
      'Weekly scheduled toolbox talk modules for multi-discipline trades',
      'Site emergency evacuation drills & fire warden briefing systems',
      'Induction passport registry & CSCS card verification checks',
    ],
    refCode: 'REF: DUO-TRN-04',
  },
  {
    id: 'risk-assessments',
    category: 'site',
    numberLabel: 'Service 05 • Technical Systems',
    title: 'WORKPLACE RISK ASSESSMENTS',
    badge: 'Method Statements',
    badgeClass: 'bg-secondary-fixed text-duo-deep-blue',
    topBarClass: 'bg-duo-bright-blue',
    icon: 'assessment',
    iconBoxClass: 'bg-surface-container text-duo-bright-blue',
    dotClass: 'bg-duo-bright-blue',
    description:
      'Meticulous task-based risk evaluations, Safe Systems of Work (SSOW), and customized Risk Assessment Method Statements (RAMS) engineered for complex and hazardous operations. We replace generic boilerplate documents with legally robust, activity-specific safety procedures.',
    deliverables: [
      'Activity-specific Risk Assessment Method Statements (RAMS)',
      'Safe Systems of Work (SSOW) manuals for high-risk trades',
      'COSHH hazard assessments & hazardous chemical control sheets',
      'Manual handling, noise & vibration statutory evaluations',
    ],
    refCode: 'REF: DUO-RAM-05',
  },
  {
    id: 'accident-investigation',
    category: 'technical',
    numberLabel: 'Service 06 • Forensic HSE',
    title: 'ACCIDENT INVESTIGATION & REPORTING',
    badge: 'Legal Defence',
    badgeClass: 'bg-error-container text-on-error-container',
    topBarClass: 'bg-error',
    icon: 'emergency',
    iconBoxClass: 'bg-error-container text-error',
    dotClass: 'bg-error',
    description:
      'Independent, forensic incident root-cause analysis and comprehensive reporting under the Reporting of Injuries, Diseases and Dangerous Occurrences Regulations (RIDDOR). We establish the legal chronology, collect vital witness testimony, and erect defensive preventive shields.',
    deliverables: [
      'Root-cause analysis (5-Whys / Fishbone methodology)',
      'Authoritative RIDDOR reporting submission guidance to the HSE',
      'Witness interview transcripts & forensic evidence preservation',
      'Corrective Prevention Roadmap to mitigate recurrent liability',
    ],
    refCode: 'REF: DUO-RID-06',
  },
  {
    id: 'working-at-height',
    category: 'technical',
    numberLabel: 'Service 07 • Structural Working',
    title: 'WORKING AT HEIGHT & SCAFFOLDING',
    badge: 'High Hazard',
    badgeClass: 'bg-secondary-fixed text-duo-deep-blue',
    topBarClass: 'bg-duo-deep-blue',
    icon: 'height',
    iconBoxClass: 'bg-secondary-fixed text-duo-deep-blue',
    dotClass: 'bg-duo-deep-blue',
    description:
      'Specialized height safety protocols under the Work at Height Regulations 2005. Complete oversight encompassing edge protection audits, TG20 compliant scaffolding handovers, harness fall-prevention assessments, and safe access tower verification across multi-storey projects.',
    deliverables: [
      'Scaffold handover & weekly statutory 7-day inspection audits',
      'Edge protection & barrier loading adequacy evaluations',
      'Fall arrest & restraint harness certification registers',
      'MEWP (cherry picker/scissor lift) safe operational zones review',
    ],
    refCode: 'REF: DUO-WAH-07',
  },
  {
    id: 'electrical-plant',
    category: 'technical',
    numberLabel: 'Service 08 • Heavy Engineering',
    title: 'ELECTRICAL & PLANT SAFETY',
    badge: 'PUWER & LOLER',
    badgeClass: 'bg-secondary-fixed text-duo-deep-blue',
    topBarClass: 'bg-duo-bright-blue',
    icon: 'precision_manufacturing',
    iconBoxClass: 'bg-surface-container text-duo-bright-blue',
    dotClass: 'bg-duo-bright-blue',
    description:
      'Technical equipment compliance reviews covering Provision and Use of Work Equipment Regulations (PUWER) and Lifting Operations (LOLER). We design safe plant-pedestrian segregation layouts, temporary electrical distribution grids, and rigorous lock-out / tag-out isolation protocols.',
    deliverables: [
      'PUWER 1998 machinery safety & guarding compliance checks',
      'LOLER lifting plans, thorough examination checks & banksman logs',
      'Temporary works electrical supply, 110V site stepping & RCD audits',
      'Lock-Out / Tag-Out (LOTO) high-voltage isolation validation',
    ],
    refCode: 'REF: DUO-PLT-08',
  },
]

const filterTabs: { key: CategoryKey; label: string }[] = [
  { key: 'all', label: 'All 8 Services' },
  { key: 'cdm', label: 'CDM & Statutory' },
  { key: 'site', label: 'Site Inspections & Risk' },
  { key: 'training', label: 'Inductions & Training' },
  { key: 'technical', label: 'Plant, Height & Incident' },
]

const deliverySteps = [
  {
    num: '01',
    icon: 'find_in_page',
    title: '1. Assessment',
    desc: 'Initial dutyholder diagnostics. We examine existing PCI, site parameters, trade scopes, and previous notice history to chart legal liabilities.',
    output: 'Statutory Risk Baseline Audit',
  },
  {
    num: '02',
    icon: 'construction',
    title: '2. Implementation',
    desc: 'Drafting and physical integration of Construction Phase Plans (CPPs), tailored RAMS, and high-hazard safe systems directly on site.',
    output: 'Approved CPP & Live SSOW',
  },
  {
    num: '03',
    icon: 'groups',
    title: '3. Induction & Training',
    desc: 'Workforce briefing through site-specific multimedia inductions, contractor competence checks, and routine high-risk toolbox talks.',
    output: 'Inducted & Competent Operatives',
  },
  {
    num: '04',
    icon: 'loop',
    title: '4. Continuous Audit',
    desc: 'Unannounced walk-throughs, photographic hazard tracking, and live Close-Out registers ensuring site discipline never degrades.',
    output: 'Periodic HSE Audit Certifications',
  },
]

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all')

  const filteredServices =
    activeCategory === 'all'
      ? servicesList
      : servicesList.filter((s) => s.category === activeCategory)

  return (
    <div className="flex flex-col w-full">
      {/* Top Regulatory Context Bar */}
      <section className="w-full bg-duo-navy text-white py-2.5 px-margin border-b border-white/10">
        <div className="max-w-[1240px] mx-auto flex flex-wrap items-center justify-between gap-space-sm">
          <div className="flex flex-wrap items-center gap-space-sm">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded bg-duo-bright-blue/30 text-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider">
              Statutory Advisory
            </span>
            <span className="text-secondary-fixed/80 font-label-sm text-label-sm">
              HSE Legal Compliance Framework • Construction (Design and Management) Regulations 2015
            </span>
          </div>
          <div className="flex items-center gap-space-md text-secondary-fixed/80 font-label-sm text-label-sm">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-compliance-green animate-pulse"></span>
              Active Field Inspections Available
            </span>
            <span className="hidden md:inline-block opacity-40">|</span>
            <span className="hidden md:inline-block">
              Merseyside &amp; Nationwide Deployment
            </span>
          </div>
        </div>
      </section>

      {/* Section Header */}
      <section className="w-full py-space-2xl px-margin bg-surface-canvas">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-end">
          <div className="lg:col-span-8 space-y-space-md">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-duo-deep-blue font-label-sm text-label-sm tracking-widest uppercase">
              <span className="material-symbols-outlined text-[16px]">
                verified_user
              </span>
              Statutory Services Portfolio
            </div>
            <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface uppercase tracking-tight">
              OUR SPECIALIST SERVICES
            </h1>
            <p className="font-headline-md text-headline-md text-duo-deep-blue">
              Comprehensive Health &amp; Safety, CDM 2015 Regulations, and Compliance Auditing
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Engineered for principal designers, main contractors, and operational site leaders. We eliminate non-compliance exposure, streamline HSE dutyholder statutory obligations, and enforce airtight site safety governance across all construction stages.
            </p>
          </div>

          {/* Quick Metrics Slate */}
          <div className="lg:col-span-4 bg-surface-container rounded-xl p-space-lg shadow-sm border border-surface-container-high">
            <div className="grid grid-cols-2 gap-space-md">
              <div className="p-space-sm bg-surface-card rounded-lg">
                <span className="block font-stat-counter text-3xl font-bold text-duo-deep-blue">
                  100%
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  HSE Legislative Alignment
                </span>
              </div>
              <div className="p-space-sm bg-surface-card rounded-lg">
                <span className="block font-stat-counter text-3xl font-bold text-on-surface">
                  24/7
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  RIDDOR Incident Support
                </span>
              </div>
              <div className="p-space-sm bg-surface-card rounded-lg">
                <span className="block font-stat-counter text-3xl font-bold text-compliance-green">
                  0
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Regulatory Breaches Tol.
                </span>
              </div>
              <div className="p-space-sm bg-surface-card rounded-lg">
                <span className="block font-stat-counter text-3xl font-bold text-duo-bright-blue">
                  48h
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Full Audit Turnaround
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Site Imagery Mosaic Strip */}
      <section className="w-full px-margin pb-space-2xl">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-space-lg">
          <div className="md:col-span-7 rounded-xl overflow-hidden shadow-md relative min-h-[280px] md:min-h-[340px] group bg-gradient-to-br from-duo-navy via-duo-deep-blue to-slate-900">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
            <div className="absolute top-6 right-6 w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-secondary-fixed group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[44px]">
                foundation
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-duo-navy/95 via-duo-navy/40 to-transparent flex flex-col justify-end p-space-lg text-white">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">
                Site Operations • Real-Time Scrutiny
              </span>
              <h3 className="font-headline-md text-headline-md text-white mt-1">
                Civil &amp; Structural Safety Governance
              </h3>
              <p className="font-body-sm text-body-sm text-secondary-fixed/80 max-w-lg mt-1">
                Groundworks, excavations, and plant separation audited under strict UK HSE statutory criteria.
              </p>
            </div>
          </div>

          <div className="md:col-span-5 rounded-xl overflow-hidden shadow-md relative min-h-[280px] md:min-h-[340px] group bg-gradient-to-br from-slate-900 via-duo-navy to-duo-bright-blue">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
            <div className="absolute top-6 right-6 w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-compliance-green group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[44px]">
                verified_user
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-duo-navy/95 via-duo-navy/40 to-transparent flex flex-col justify-end p-space-lg text-white">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-compliance-green">
                Independent Dutyholder Advisory
              </span>
              <h3 className="font-headline-md text-headline-md text-white mt-1">
                Principal Designer &amp; Contractor Auditing
              </h3>
              <p className="font-body-sm text-body-sm text-secondary-fixed/80 mt-1">
                On-site inspections ensuring complete alignment with statutory CDM 2015 frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Category Filter Bar */}
      <section className="w-full px-margin pb-space-lg">
        <div className="max-w-[1240px] mx-auto bg-surface-card rounded-xl p-space-md shadow-sm border border-surface-container flex flex-wrap items-center justify-between gap-space-md">
          <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
            <span className="material-symbols-outlined text-duo-deep-blue">
              tune
            </span>
            <span>Filter Specialisms:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => {
              const isSelected = activeCategory === tab.key
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveCategory(tab.key)}
                  className={`px-4 py-2 rounded-lg font-label-md text-label-md transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-duo-navy text-white shadow-sm'
                      : 'bg-surface-container hover:bg-surface-container-high text-on-surface'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>

          <div className="text-on-surface-variant font-body-sm text-body-sm">
            Showing{' '}
            <span className="font-bold text-duo-deep-blue">
              {filteredServices.length}
            </span>{' '}
            Core Disciplines
          </div>
        </div>
      </section>

      {/* The 8 Detailed Service Cards Grid */}
      <section className="w-full px-margin pb-space-3xl">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-space-xl">
          {filteredServices.map((srv) => (
            <article
              key={srv.id}
              className="bg-surface-card rounded-xl shadow-md border border-surface-container p-space-xl flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 ${srv.topBarClass}`}
              ></div>
              <div className="space-y-space-md">
                <div className="flex items-start justify-between">
                  <div
                    className={`w-14 h-14 rounded-xl ${srv.iconBoxClass} flex items-center justify-center shadow-sm`}
                  >
                    <span className="material-symbols-outlined text-[30px]">
                      {srv.icon}
                    </span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full ${srv.badgeClass} font-label-sm text-label-sm uppercase tracking-wider font-bold`}
                  >
                    {srv.badge}
                  </span>
                </div>

                <div>
                  <span className="font-label-sm text-label-sm text-duo-deep-blue uppercase tracking-widest block mb-1">
                    {srv.numberLabel}
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface group-hover:text-duo-deep-blue transition-colors">
                    {srv.title}
                  </h2>
                </div>

                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {srv.description}
                </p>

                <div className="bg-surface-canvas rounded-lg p-space-md space-y-2 border border-surface-container">
                  <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider block font-bold">
                    Statutory Deliverables:
                  </span>
                  <ul className="space-y-1.5 text-body-sm font-body-sm text-on-surface-variant">
                    {srv.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${srv.dotClass}`}
                        ></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-space-lg mt-space-md border-t border-surface-container flex items-center justify-between">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-label-md text-label-md text-duo-deep-blue hover:text-duo-bright-blue transition-colors font-bold"
                >
                  <span>Enquire About Service</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
                <span className="font-label-sm text-label-sm text-outline uppercase">
                  {srv.refCode}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4-Step Service Delivery Framework */}
      <section className="w-full bg-duo-navy text-white py-space-3xl px-margin relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto space-y-space-2xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-space-lg">
            <div className="space-y-space-xs max-w-2xl">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">
                Methodical Assurance Pipeline
              </span>
              <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-white uppercase tracking-tight">
                SERVICE DELIVERY FRAMEWORK
              </h2>
              <p className="font-body-md text-body-md text-secondary-fixed/80">
                A linear, verifiable operational cycle engineered to move projects from initial statutory liability diagnostics through to permanent site safety competence and proactive audit defense.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-compliance-green font-label-md text-label-md bg-white/10 px-4 py-2 rounded-lg border border-white/15">
              <span className="material-symbols-outlined text-[20px]">
                verified
              </span>
              <span>Approved HSE Continuous Delivery Model</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            {deliverySteps.map((step) => (
              <div
                key={step.num}
                className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-space-lg space-y-space-md flex flex-col justify-between"
              >
                <div className="space-y-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-stat-counter text-3xl font-bold text-secondary-fixed">
                      {step.num}
                    </span>
                    <span className="w-9 h-9 rounded-full bg-duo-bright-blue/30 flex items-center justify-center text-secondary-fixed">
                      <span className="material-symbols-outlined text-[18px]">
                        {step.icon}
                      </span>
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-white">
                    {step.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-secondary-fixed/80 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="pt-space-md border-t border-white/15">
                  <span className="font-label-sm text-label-sm text-compliance-green uppercase block font-bold">
                    Key Output:
                  </span>
                  <span className="font-body-sm text-body-sm text-white">
                    {step.output}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Engagement Spectrum Table */}
      <section className="w-full py-space-3xl px-margin bg-surface-canvas">
        <div className="max-w-[1240px] mx-auto space-y-space-xl">
          <div className="max-w-2xl space-y-space-xs">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-duo-deep-blue font-bold">
              Dutyholder Responsibilities
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface uppercase tracking-tight">
              REGULATORY ENGAGEMENT SPECTRUM
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              How DUO Safety supports key project stakeholders under the Construction (Design and Management) Regulations 2015.
            </p>
          </div>

          <div className="bg-surface-card rounded-xl shadow-md border border-surface-container overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container text-on-surface font-label-md text-label-md uppercase tracking-wider">
                  <th className="p-space-md">Dutyholder / Role</th>
                  <th className="p-space-md">Legal Responsibility (CDM 2015)</th>
                  <th className="p-space-md">Primary Risk Factor</th>
                  <th className="p-space-md">DUO Safety Deliverable</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container text-body-sm font-body-sm text-on-surface-variant">
                <tr className="hover:bg-surface-canvas transition-colors">
                  <td className="p-space-md font-semibold text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-duo-deep-blue text-[20px]">
                      domain
                    </span>
                    Commercial Clients
                  </td>
                  <td className="p-space-md">
                    Ensure suitable arrangements made to manage projects; appoint competent PD and PC.
                  </td>
                  <td className="p-space-md text-error font-medium">
                    Direct statutory liability for contractor failure
                  </td>
                  <td className="p-space-md text-on-surface font-medium">
                    Client H&amp;S Advisor support &amp; Competence Vetting
                  </td>
                </tr>
                <tr className="hover:bg-surface-canvas transition-colors">
                  <td className="p-space-md font-semibold text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-duo-bright-blue text-[20px]">
                      draw
                    </span>
                    Principal Designers
                  </td>
                  <td className="p-space-md">
                    Plan, manage, monitor health and safety in the pre-construction design phase.
                  </td>
                  <td className="p-space-md text-error font-medium">
                    Unaddressed buildability &amp; maintenance hazards
                  </td>
                  <td className="p-space-md text-on-surface font-medium">
                    PCI collation, Designer Risk Eliminator (ERIC-PD)
                  </td>
                </tr>
                <tr className="hover:bg-surface-canvas transition-colors">
                  <td className="p-space-md font-semibold text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-compliance-green text-[20px]">
                      engineering
                    </span>
                    Principal Contractors
                  </td>
                  <td className="p-space-md">
                    Plan, manage, monitor construction phase; ensure site-wide worker welfare &amp; safety.
                  </td>
                  <td className="p-space-md text-error font-medium">
                    HSE Prohibition notices, on-site fatal incidents
                  </td>
                  <td className="p-space-md text-on-surface font-medium">
                    Construction Phase Plans, Site Inspections &amp; Inductions
                  </td>
                </tr>
                <tr className="hover:bg-surface-canvas transition-colors">
                  <td className="p-space-md font-semibold text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-outline text-[20px]">
                      handyman
                    </span>
                    Trade Subcontractors
                  </td>
                  <td className="p-space-md">
                    Plan, manage their own trade tasks; follow site rules; provide competent workforce.
                  </td>
                  <td className="p-space-md text-error font-medium">
                    Non-compliant RAMS &amp; site access refusal
                  </td>
                  <td className="p-space-md text-on-surface font-medium">
                    Activity RAMS drafting &amp; Specialized Toolbox Briefs
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Compliance Caution Banner */}
      <section className="w-full px-margin pb-space-2xl">
        <div className="max-w-[1240px] mx-auto bg-alert-amber-soft rounded-xl p-space-lg shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md relative overflow-hidden">
          <div className="w-1.5 absolute left-0 top-0 bottom-0 bg-on-tertiary-container"></div>
          <div className="flex items-start md:items-center gap-space-md">
            <div className="w-12 h-12 rounded-xl bg-tertiary-container/10 flex items-center justify-center text-on-tertiary-container shrink-0">
              <span className="material-symbols-outlined text-[28px]">
                warning
              </span>
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-tertiary-container">
                Statutory Notice: Construction Site Legal Obligations
              </h4>
              <p className="font-body-sm text-body-sm text-on-tertiary-fixed-variant max-w-3xl mt-1">
                Under UK HSE Regulations, lack of an adequate Construction Phase Plan or insufficient worker inductions are immediate grounds for an HSE Inspector to issue an instantaneous Prohibition Notice, shutting down site operations immediately.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg bg-duo-navy text-white font-label-md text-label-md whitespace-nowrap shadow-sm hover:bg-duo-deep-blue transition-colors"
          >
            Request HSE Audit Review
          </Link>
        </div>
      </section>

      {/* Contact Inquiry Banner at Bottom */}
      <section className="w-full py-space-3xl px-margin bg-duo-navy text-white relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">
          <div className="lg:col-span-8 space-y-space-md">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-secondary-fixed text-duo-deep-blue font-label-sm text-label-sm uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">
                contact_support
              </span>
              Project Enquiries &amp; Retainers
            </div>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-white uppercase tracking-tight">
              DISCUSS YOUR SITE SAFETY &amp; CDM REQUIREMENTS
            </h2>
            <p className="font-body-lg text-body-lg text-secondary-fixed/85 max-w-2xl">
              Speak with our qualified safety advisors regarding immediate site inspections, principal designer support, or statutory compliance audits across your UK project portfolio.
            </p>
            <div className="flex flex-wrap items-center gap-space-lg text-body-sm font-body-sm text-white pt-space-xs">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                  phone_in_talk
                </span>
                <span>
                  Direct Line:{' '}
                  <strong className="text-white font-semibold">
                    Liverpool 0151 DUO-SAFE
                  </strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                  alternate_email
                </span>
                <span>
                  Email:{' '}
                  <strong className="text-white font-semibold">
                    info@duosafety.co.uk
                  </strong>
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white/10 backdrop-blur-md border border-white/15 p-space-xl rounded-xl space-y-space-md">
            <h3 className="font-headline-sm text-headline-sm text-white">
              Send a Service Enquiry
            </h3>
            <p className="font-body-sm text-body-sm text-secondary-fixed/80">
              Submit your project requirements for rapid advisory engagement and quotation.
            </p>
            <div className="space-y-space-sm">
              <Link
                href="/contact"
                className="w-full py-3.5 px-space-md rounded-lg bg-duo-bright-blue hover:bg-duo-deep-blue text-white font-label-md text-label-md flex items-center justify-center gap-2 shadow-md transition-colors text-center font-bold"
              >
                <span>Enquire About DUO Safety Services</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/location"
                className="w-full py-3 px-space-md rounded-lg bg-white/10 hover:bg-white/20 text-secondary-fixed hover:text-white font-label-md text-label-md flex items-center justify-center gap-2 transition-colors text-center"
              >
                <span>View Office Location &amp; Regional Coverage</span>
              </Link>
            </div>
            <div className="flex items-center justify-center gap-2 text-label-sm font-label-sm text-secondary-fixed/75 pt-space-xs">
              <span className="material-symbols-outlined text-[14px] text-compliance-green">
                lock
              </span>
              <span>Confidential HSE Legal Privilege Applies</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
