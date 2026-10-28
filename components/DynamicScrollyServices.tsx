'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface PracticeStage {
  id: string
  stepNumber: string
  badge: string
  icon: string
  title: string
  subtitle: string
  description: string
  bullets: string[]
  image: string
  overlayTitle: string
  overlayMetric: string
  overlaySub: string
  livePills: { label: string; status: string }[]
  ctaText: string
}

const stages: PracticeStage[] = [
  {
    id: 'principal-contractor',
    stepNumber: '01',
    badge: 'CDM 2015 Statutory Dutyholder',
    icon: 'engineering',
    title: 'Principal Contractor & CDM 2015 Management',
    subtitle: 'Full Statutory Governance from Pre-Construction to Handover',
    description:
      'As appointed Principal Contractor or CDM 2015 Advisor, DUO Safety takes direct operational command of site health and safety. We author and enforce Construction Phase Plans (CPP), coordinate Pre-Construction Information (PCI), manage HSE F10 notifications, and chair multi-contractor design risk reviews.',
    bullets: [
      'Principal Contractor & Principal Designer Statutory Representation',
      'Construction Phase Plan (CPP) Authoring, Auditing & Sign-Off',
      'HSE F10 Notification Governance & Health and Safety File Handover',
      'Subcontractor PQQ Competence Vetting & Site Access Control',
    ],
    image: '/images/hero-construction-safety.jpg',
    overlayTitle: 'Principal Contractor Command',
    overlayMetric: '100% CDM 2015 Aligned',
    overlaySub: 'Active CPP, PCI & F10 Statutory Register',
    livePills: [
      { label: 'F10 Notification', status: 'Active & Displayed' },
      { label: 'Construction Phase Plan', status: 'Revision 4 Approved' },
      { label: 'Dutyholder Alignment', status: 'Verified' },
    ],
    ctaText: 'Explore Principal Contractor Scope',
  },
  {
    id: 'audits-inspections',
    stepNumber: '02',
    badge: 'Empirical Field Verification',
    icon: 'checklist_rtl',
    title: 'Statutory Site Audits, LOLER & PUWER Inspections',
    subtitle: 'Proactive Hazard Interception Before HSE Enforcement',
    description:
      'Scheduled and unannounced physical inspections across high-risk construction, automotive, and manufacturing facilities. Our advisors verify plant machinery guarding (PUWER), lifting operations (LOLER), temporary works, and work-at-height protocols—issuing photographic reports within 24 hours.',
    bullets: [
      'Unannounced Structural, Scaffolding & Edge Protection Audits',
      'LOLER Lifting Operations & PUWER Machinery Guarding Registers',
      'Real-Time Photographic Hazard Closeouts via DUO HS Tracker',
      'Immediate Stop-Work Authority & Remedial Action Roadmaps',
    ],
    image: '/images/sector-construction.jpg',
    overlayTitle: 'Empirical Site Audit Engine',
    overlayMetric: '24-Hour Report SLA',
    overlaySub: 'Photographic Evidence & Root-Cause Closeout',
    livePills: [
      { label: 'LOLER & MEWP Register', status: '219 Assets In-Date' },
      { label: 'Work at Height (WAH)', status: 'Zero Open Breaches' },
      { label: 'Corrective Closeout', status: 'Tamper-Evident Photo' },
    ],
    ctaText: 'View Audit & Inspection Protocols',
  },
  {
    id: 'workforce-inductions',
    stepNumber: '03',
    badge: '5,200+ Operatives Inducted',
    icon: 'co_present',
    title: 'Workforce Inductions & Digital Competency Vault',
    subtitle: 'Zero Unverified Operatives on Your Site',
    description:
      'We establish uncompromising site cultures from day one. Every operative undergoes structured CDM inductions while their CSCS, CPCS, IPAF, PASMA, and trade certificates are photographed, verified, and monitored for expiry inside our live competency matrix.',
    bullets: [
      'Digital Site Inductions with CSCS / CPCS / CISRS Card Verification',
      'Automated Bulk Competency Folder Matching & Expiry Alerts',
      'Task-Specific Toolbox Talks & Behavioural Safety Briefings',
      'Supervisor Accountability Tracking & Emergency Drill Governance',
    ],
    image: '/images/sector-automotive.jpg',
    overlayTitle: 'Workforce Competency Matrix',
    overlayMetric: '5,208+ Verified Profiles',
    overlaySub: 'Instant Photo & PDF Credential Validation',
    livePills: [
      { label: 'CSCS / CPCS Card Scans', status: '100% Mandatory' },
      { label: 'CDM Site Induction', status: 'Digitally Signed' },
      { label: 'Expiry Early-Warning', status: '30-Day Auto Alert' },
    ],
    ctaText: 'Review Induction Frameworks',
  },
  {
    id: 'rams-risk-engineering',
    stepNumber: '04',
    badge: 'Defensible Legal Shield',
    icon: 'assignment_turned_in',
    title: 'Dynamic RAMS, COSHH & High-Hazard Risk Engineering',
    subtitle: 'Bespoke Safe Systems of Work for Complex Operations',
    description:
      'Boilerplate paperwork fails under HSE scrutiny. We engineer activity-specific Risk Assessments and Method Statements (RAMS), COSHH chemical matrices, DSEAR explosive atmosphere controls, and forensic RIDDOR accident investigations that protect both your workforce and board of directors.',
    bullets: [
      'Legally Defensible Dynamic RAMS & Permit-to-Work Workflows',
      'COSHH Hazardous Substance & DSEAR Process Safety Assessments',
      'Regulatory Fire Risk Assessments (FRA) & Evacuation Strategies',
      'Forensic RIDDOR Root-Cause Investigation & Legal Defence Support',
    ],
    image: '/images/sector-chemical.jpg',
    overlayTitle: 'Dynamic RAMS & Risk Control',
    overlayMetric: '108+ Live Active RAMS',
    overlaySub: 'Subcontractor Vetting & Turnkey Method Statements',
    livePills: [
      { label: 'RAMS Review Cycle', status: 'Principal Advisor Vetted' },
      { label: 'COSHH & DSEAR', status: 'Statutory Compliant' },
      { label: 'RIDDOR Frequency', status: '0.00 Reportable Rate' },
    ],
    ctaText: 'Explore Risk & Compliance Services',
  },
]

export default function DynamicScrollyServices() {
  const [activeIndex, setActiveIndex] = useState(0)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    cardRefs.current.forEach((el, index) => {
      if (!el) return
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(index)
            }
          })
        },
        {
          root: null,
          rootMargin: '-30% 0px -45% 0px',
          threshold: 0.1,
        }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => {
      observers.forEach((o) => o.disconnect())
    }
  }, [])

  const activeStage = stages[activeIndex]

  return (
    <section className="max-w-[1240px] mx-auto px-margin pb-space-3xl w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
        <div>
          <div className="inline-flex items-center gap-1.5 text-duo-deep-blue font-label-sm text-label-sm uppercase tracking-widest mb-space-xs">
            <span className="material-symbols-outlined text-[16px]">
              shield
            </span>
            <span>Interactive Service Architecture • Scroll to Explore</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface uppercase tracking-tight">
            Principal Contractor &amp; Core Practice Areas
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          As you scroll through our four statutory pillars, watch how our field engineering and live digital governance adapt to protect your operations.
        </p>
      </div>

      {/* Quick Step Selector Bar for Direct Jumping */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-space-xl">
        {stages.map((st, idx) => {
          const isCurrent = idx === activeIndex
          return (
            <button
              key={st.id}
              type="button"
              onClick={() => {
                setActiveIndex(idx)
                cardRefs.current[idx]?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                })
              }}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                isCurrent
                  ? 'bg-duo-navy text-white border-duo-bright-blue shadow-md'
                  : 'bg-surface-card text-on-surface hover:bg-surface-container border-surface-container'
              }`}
            >
              <span
                className={`w-8 h-8 rounded-lg font-headline-sm text-xs font-bold flex items-center justify-center shrink-0 ${
                  isCurrent
                    ? 'bg-duo-bright-blue text-white'
                    : 'bg-surface-container text-duo-deep-blue'
                }`}
              >
                {st.stepNumber}
              </span>
              <div className="min-w-0">
                <div className="text-[11px] uppercase tracking-wider opacity-75 truncate">
                  {st.badge}
                </div>
                <div className="font-headline-sm text-xs font-bold truncate">
                  {st.title}
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Two-Column Scrollytelling Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
        {/* Left Column: Scrolling Narrative Cards */}
        <div className="lg:col-span-6 space-y-space-xl">
          {stages.map((stage, idx) => {
            const isActive = idx === activeIndex
            return (
              <div
                key={stage.id}
                ref={(el) => {
                  cardRefs.current[idx] = el
                }}
                onClick={() => setActiveIndex(idx)}
                className={`rounded-2xl p-space-xl transition-all duration-500 border cursor-pointer ${
                  isActive
                    ? 'bg-surface-card border-duo-bright-blue shadow-xl scale-[1.01]'
                    : 'bg-surface-card/70 border-surface-container opacity-70 hover:opacity-100'
                }`}
              >
                {/* Mobile Image Preview (shown only on small screens) */}
                <div className="relative h-52 w-full rounded-xl overflow-hidden mb-space-md lg:hidden">
                  <Image
                    src={stage.image}
                    alt={stage.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-duo-navy/90 via-duo-navy/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-xs font-bold bg-duo-bright-blue px-2.5 py-1 rounded">
                      {stage.overlayMetric}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 mb-space-md">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-duo-deep-blue font-label-sm text-label-sm uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[15px]">
                      {stage.icon}
                    </span>
                    {stage.badge}
                  </span>
                  <span className="font-stat-counter text-2xl font-bold text-duo-bright-blue/40">
                    {stage.stepNumber}
                  </span>
                </div>

                <h3 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight mb-space-xs">
                  {stage.title}
                </h3>
                <p className="font-label-md text-label-md text-duo-deep-blue mb-space-md">
                  {stage.subtitle}
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
                  {stage.description}
                </p>

                <ul className="space-y-space-sm mb-space-lg font-body-sm text-body-sm text-on-surface">
                  {stage.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-md bg-compliance-green/15 text-compliance-green flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[14px]">
                          check
                        </span>
                      </span>
                      <span className="font-medium">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-space-sm border-t border-surface-container flex items-center justify-between">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 font-label-md text-label-md text-duo-deep-blue hover:text-duo-bright-blue transition-colors"
                  >
                    <span>{stage.ctaText}</span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </Link>
                  {isActive && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-compliance-green">
                      <span className="w-2 h-2 rounded-full bg-compliance-green animate-ping" />
                      Active Stage
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Right Column: Sticky Dynamic Visual Stage */}
        <div className="hidden lg:block lg:col-span-6 sticky top-28">
          <div className="rounded-2xl overflow-hidden bg-duo-navy text-white shadow-2xl border border-duo-bright-blue/30 relative h-[610px] flex flex-col justify-between">
            {/* Cross-fading Background Photographs */}
            {stages.map((st, idx) => (
              <div
                key={st.id}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  idx === activeIndex
                    ? 'opacity-100 scale-100 z-0'
                    : 'opacity-0 scale-105 z-0 pointer-events-none'
                }`}
              >
                <Image
                  src={st.image}
                  alt={st.title}
                  fill
                  className="object-cover"
                  sizes="50vw"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-duo-navy via-duo-navy/55 to-duo-navy/25" />
              </div>
            ))}

            {/* Top HUD Bar inside Sticky Stage */}
            <div className="relative z-10 p-space-lg flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-duo-navy/85 backdrop-blur-md border border-white/15">
                <span className="w-2.5 h-2.5 rounded-full bg-compliance-green animate-pulse" />
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed">
                  Pillar {activeStage.stepNumber} / 04 • {activeStage.overlayTitle}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {stages.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    aria-label={`View pillar ${idx + 1}`}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      idx === activeIndex
                        ? 'w-8 bg-compliance-green'
                        : 'w-2 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Dynamic Telemetry Card inside Sticky Stage */}
            <div className="relative z-10 p-space-xl space-y-space-md">
              <div className="bg-duo-navy/90 backdrop-blur-md rounded-xl p-space-lg border border-white/15 shadow-xl space-y-space-md">
                <div className="flex items-center justify-between border-b border-white/10 pb-space-sm">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-secondary-fixed/80 font-semibold">
                      {activeStage.overlaySub}
                    </div>
                    <div className="font-headline-lg text-2xl font-bold text-white mt-0.5">
                      {activeStage.overlayMetric}
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-duo-bright-blue/30 border border-duo-bright-blue/50 flex items-center justify-center text-secondary-fixed">
                    <span className="material-symbols-outlined text-[28px]">
                      {activeStage.icon}
                    </span>
                  </div>
                </div>

                {/* 3 Live Status Indicators that change per stage */}
                <div className="grid grid-cols-3 gap-2.5">
                  {activeStage.livePills.map((pill) => (
                    <div
                      key={pill.label}
                      className="bg-white/5 rounded-lg p-2.5 border border-white/10"
                    >
                      <div className="text-[11px] text-secondary-fixed/75 truncate">
                        {pill.label}
                      </div>
                      <div className="text-xs font-bold text-compliance-green mt-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">
                          verified
                        </span>
                        <span className="truncate">{pill.status}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1 text-xs text-secondary-fixed/80">
                  <span>Liverpool HQ • UK-Wide Principal Deployment</span>
                  <a
                    href="https://hse-test.yoldaki.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:text-secondary-fixed inline-flex items-center gap-1 underline underline-offset-4"
                  >
                    <span>Tracked in DUO HS System</span>
                    <span className="material-symbols-outlined text-[14px]">
                      open_in_new
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
