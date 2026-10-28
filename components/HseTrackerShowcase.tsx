'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type TabKey = 'tracker' | 'inductions' | 'rams' | 'sitewalk'

const navTabs: {
  id: TabKey
  label: string
  badge: string
  icon: string
  routeLabel: string
}[] = [
  {
    id: 'tracker',
    label: 'Project & Man-Hours Tracker',
    badge: '3.73M+ Hrs',
    icon: 'Analytics',
    routeLabel: '#/dashboard • Live Telemetry',
  },
  {
    id: 'inductions',
    label: 'People & Competency Matrix',
    badge: '5,208 Active',
    icon: 'badge',
    routeLabel: '#/people • CSCS & Card Vault',
  },
  {
    id: 'rams',
    label: 'Dynamic RAMS & LOLER/PUWER',
    badge: '108 Live RAMS',
    icon: 'description',
    routeLabel: '#/rams • Statutory Registers',
  },
  {
    id: 'sitewalk',
    label: 'Site Walk, Observations & F10',
    badge: 'Offline-Ready',
    icon: 'troubleshoot',
    routeLabel: '#/sitewalk • Field Inspections',
  },
]

// Realistic 12-month heatmap simulation inspired by hse-test.yoldaki.com Activity Calendar
const heatmapMonths = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
const heatmapCells = [
  [2, 3, 1, 4, 2, 0, 3, 4, 2, 3, 1, 4],
  [3, 2, 4, 3, 3, 2, 4, 3, 3, 2, 4, 3],
  [1, 4, 2, 2, 4, 4, 2, 1, 4, 3, 2, 4],
  [4, 1, 3, 4, 2, 3, 3, 4, 2, 4, 3, 2],
]

const anonymizedRams = [
  {
    urn: 'URN-1972',
    company: 'Vanguard Industrial Systems',
    area: 'Assembly Hall B • Automated Line',
    task: 'Skid Guide Structural Modifications & Guardrail Installation',
    status: 'Approved & Active',
    due: 'Renewal in 4d',
    tone: 'amber',
  },
  {
    urn: 'URN-2027',
    company: 'Thermacore Process Engineering',
    area: 'Process Plant • Thermal Zone 2',
    task: 'Internal Burner & Pressurised Chamber Statutory Inspection',
    status: 'Approved & Active',
    due: 'Valid (30d+)',
    tone: 'green',
  },
  {
    urn: 'URN-1861',
    company: 'Apex HV Power / Grid Solutions',
    area: 'North Substation Compound',
    task: '11kV Switchgear, Transformer & GRP Enclosure Commissioning',
    status: 'Permit Linked',
    due: 'Valid (18d)',
    tone: 'green',
  },
  {
    urn: 'URN-1674',
    company: 'Meridian Access Scaffolding',
    area: 'Main Structural Steel Frame',
    task: 'High-Load Access Tower & Edge Protection for Truss Strengthening',
    status: 'Principal Review',
    due: 'Action Today',
    tone: 'amber',
  },
]

const anonymizedPeople = [
  {
    id: 'IND-4891',
    name: 'M. Henderson',
    company: 'Vanguard Industrial Systems',
    role: 'Appointed Lifting Supervisor',
    cdm: 'CDM Verified',
    certs: ['CSCS Gold', 'CPCS A62 Crane', 'SSSTS', 'IPAF 3a/3b'],
    status: 'Valid',
  },
  {
    id: 'IND-4884',
    name: 'S. Kowalski',
    company: 'Meridian Access Scaffolding',
    role: 'Advanced Scaffolder',
    cdm: 'CDM Verified',
    certs: ['CISRS Advanced', 'Work at Height', 'PASMA', 'Face Fit'],
    status: 'Valid',
  },
  {
    id: 'IND-4872',
    name: 'D. O’Connor',
    company: 'Apex HV Power Ltd',
    role: 'Senior Authorised Electrical Person',
    cdm: 'CDM Verified',
    certs: ['ECS Gold', '18th Edition', 'HV Switching', 'First Aid'],
    status: 'Expiring 14d',
  },
  {
    id: 'IND-4865',
    name: 'R. Patel',
    company: 'North West Civil Groundworks',
    role: 'Site Engineer & Temporary Works',
    cdm: 'CDM Verified',
    certs: ['CSCS Black Manager', 'SMSTS', 'TWC Certified', 'CAT & Genny'],
    status: 'Valid',
  },
]

const anonymizedObservations = [
  {
    ref: 'OBS-2241',
    date: 'Today • 09:40',
    area: 'Zone A • Structural Mezzanine',
    category: 'WAH (Work at Height)',
    contractor: 'Tier-1 Steelwork Subcontractor',
    desc: 'Walkthrough inspection across Zone A & B focusing on MEWPs and edge protection. All LOLER certificates verified in-date; immediate briefing held for tag visibility.',
    status: 'Closed with Photo',
  },
  {
    ref: 'OBS-2186',
    date: 'Yesterday • 14:15',
    area: 'East Logistics Corridor',
    category: 'FGB (Fencing & Segregation)',
    contractor: 'Industrial Flooring Package',
    desc: 'Pedestrian segregation barrier realigned and reinforced around curing zone. Full Chapter 8 signage and high-visibility hazard boards deployed.',
    status: 'Verified by Advisor',
  },
  {
    ref: 'OBS-2107',
    date: '26 Oct • 11:20',
    area: 'Roof Plant Deck • Sector 4',
    category: 'LOLER & Lifting Plan',
    contractor: 'Mechanical HVAC Contractor',
    desc: 'Lifting operation paused proactively by DUO Principal Advisor to upgrade anchor point configuration and crawl-board layout under Work at Height Regs 2005.',
    status: 'RAMS Amended & Safe',
  },
]

export default function HseTrackerShowcase() {
  const [activeTab, setActiveTab] = useState<TabKey>('tracker')
  const [selectedProject, setSelectedProject] = useState<0 | 1>(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [autoCycle, setAutoCycle] = useState(true)

  useEffect(() => {
    if (!autoCycle) return
    const timer = setInterval(() => {
      setActiveTab((prev) => {
        const order: TabKey[] = ['tracker', 'inductions', 'rams', 'sitewalk']
        return order[(order.indexOf(prev) + 1) % order.length]
      })
    }, 8500)
    return () => clearInterval(timer)
  }, [autoCycle])

  const projects = [
    {
      code: 'NW-AUTO-P1',
      title: 'North West Automotive Plant Expansion (All Operations)',
      start: '17/10/2022',
      manhoursTakeover: '3,443,770',
      manhoursTotal: '3,731,336',
      lastWeek: '+20,450 hrs this week',
      continuousYears: '≈ 393 years of non-stop 24h work tracked',
      days: 1472,
      weeks: 210,
      months: 48,
      years: 4,
    },
    {
      code: 'MERSEY-CIV-02',
      title: 'Merseyside Industrial Logistics & Substation Programme',
      start: '25/11/2025',
      manhoursTakeover: '284,660',
      manhoursTotal: '284,660',
      lastWeek: '+6,120 hrs this week',
      continuousYears: '≈ 32 years of continuous safe operations',
      days: 337,
      weeks: 48,
      months: 11,
      years: 1,
    },
  ]

  const activeProj = projects[selectedProject]

  return (
    <section className="max-w-[1240px] mx-auto px-margin pb-space-3xl w-full">
      <div className="bg-duo-navy text-white rounded-2xl border border-duo-bright-blue/30 shadow-2xl overflow-hidden relative">
        {/* Ambient Background Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-duo-bright-blue/20 blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-compliance-green/10 blur-[110px] pointer-events-none" />

        {/* Top Section Header */}
        <div className="p-space-xl md:p-space-2xl border-b border-white/10 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
            <div className="max-w-3xl space-y-space-sm">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15">
                <span className="w-2.5 h-2.5 rounded-full bg-compliance-green animate-pulse" />
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">
                  Proprietary Principal Contractor Cloud Software
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-white uppercase tracking-tight">
                DUO HS Tracking System™ —{' '}
                <span className="text-secondary-fixed">Live Site Intelligence</span>
              </h2>
              <p className="font-body-md text-body-md text-secondary-fixed/85 leading-relaxed">
                Unlike traditional consultancies relying on static spreadsheets, DUO Safety deploys its own live cloud platform across client sites. Track jutaan man-hours, verify 5,000+ worker competency cards with instant photo/PDF proof, audit active RAMS, and execute offline-capable mobile site walks in real time.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://hse-test.yoldaki.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-compliance-green hover:bg-emerald-500 text-duo-navy font-label-md text-label-md font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-compliance-green/25 transform hover:-translate-y-0.5"
              >
                <span className="material-symbols-outlined text-[20px]">
                  login
                </span>
                <span>Launch Live Portal</span>
                <span className="material-symbols-outlined text-[16px]">
                  open_in_new
                </span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-label-md text-label-md px-5 py-3.5 rounded-xl transition-all"
              >
                <span>Book Client Demo</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          {/* Interactive Module Switcher Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-space-xl">
            {navTabs.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.id)
                    setAutoCycle(false)
                  }}
                  className={`text-left p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-duo-bright-blue text-white border-secondary-fixed shadow-lg scale-[1.01]'
                      : 'bg-white/5 hover:bg-white/10 text-secondary-fixed/80 border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="material-symbols-outlined text-[22px]">
                      {tab.icon}
                    </span>
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-duo-navy/40 text-white'
                          : 'bg-white/10 text-secondary-fixed'
                      }`}
                    >
                      {tab.badge}
                    </span>
                  </div>
                  <div>
                    <div className="font-headline-sm text-sm font-bold text-white">
                      {tab.label}
                    </div>
                    <div
                      className={`text-[11px] mt-0.5 ${
                        isActive ? 'text-white/90' : 'text-secondary-fixed/60'
                      }`}
                    >
                      {tab.routeLabel}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Browser / Application Cockpit Window Replica */}
        <div className="p-space-md md:p-space-xl bg-[#071829] relative z-10">
          <div className="rounded-xl border border-white/15 bg-[#f4f6fa] text-on-surface shadow-2xl overflow-hidden">
            {/* Simulated Top Application Bar matching hse-test.yoldaki.com */}
            <div className="bg-[#1b365d] text-white px-4 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-mono bg-black/25 px-3 py-1 rounded-md text-secondary-fixed flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-compliance-green" />
                  https://hse-test.yoldaki.com/{activeTab === 'tracker' ? '#/dashboard' : `#/${activeTab}`}
                </span>
              </div>

              {/* Simulated App Menu Pills */}
              <div className="hidden xl:flex items-center gap-1.5 text-xs font-medium">
                {['Home', 'People', 'Companies', 'RAMS', 'Inspections', 'Observations', 'Incidents', 'Toolbox', 'Man-hours', 'Daily Diary', 'F10 Tracker'].map(
                  (item, idx) => (
                    <span
                      key={item}
                      className={`px-2.5 py-1 rounded ${
                        (activeTab === 'tracker' && idx === 0) ||
                        (activeTab === 'inductions' && idx === 1) ||
                        (activeTab === 'rams' && idx === 3) ||
                        (activeTab === 'sitewalk' && idx === 5)
                          ? 'bg-duo-bright-blue text-white font-semibold'
                          : 'text-white/70'
                      }`}
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-semibold">
                  ● Online &amp; Synced (Excel + Cloud)
                </span>
                <span className="hidden sm:inline text-white/75 font-medium">
                  Advisor: Principal H&amp;S Lead
                </span>
              </div>
            </div>

            {/* Universal Search Bar & Top KPI Strip */}
            <div className="p-4 md:p-6 space-y-5 bg-[#f4f6fa]">
              {/* Search Everything Bar */}
              <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-200/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 flex-1 px-2">
                  <span className="material-symbols-outlined text-duo-deep-blue text-[20px]">
                    search
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search everything — 5,208 people, companies, RAMS URNs, inspections, observations, incidents, toolbox talks…"
                    className="w-full text-sm text-on-surface placeholder:text-slate-400 focus:outline-none bg-transparent"
                  />
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 text-slate-600">
                    Anonymized Live Preview
                  </span>
                  <a
                    href="https://hse-test.yoldaki.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold bg-duo-deep-blue hover:bg-duo-bright-blue text-white px-3.5 py-1.5 rounded-lg transition-colors inline-flex items-center gap-1"
                  >
                    <span>Open Full System</span>
                    <span className="material-symbols-outlined text-[14px]">
                      open_in_new
                    </span>
                  </a>
                </div>
              </div>

              {/* 6 Live KPI Tiles matching dashboard.js */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                <div
                  onClick={() => {
                    setActiveTab('inductions')
                    setAutoCycle(false)
                  }}
                  className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs hover:border-duo-bright-blue cursor-pointer transition-all"
                >
                  <div className="text-2xl font-extrabold text-duo-navy">5,208</div>
                  <div className="text-xs font-bold text-slate-700 mt-0.5">Inducted People</div>
                  <div className="text-[11px] text-emerald-600 font-medium mt-1">
                    +150 this month • CSCS verified
                  </div>
                </div>

                <div
                  onClick={() => {
                    setActiveTab('rams')
                    setAutoCycle(false)
                  }}
                  className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs hover:border-duo-bright-blue cursor-pointer transition-all"
                >
                  <div className="text-2xl font-extrabold text-duo-deep-blue">108</div>
                  <div className="text-xs font-bold text-slate-700 mt-0.5">Active RAMS</div>
                  <div className="text-[11px] text-amber-600 font-medium mt-1">
                    14 due for review this week
                  </div>
                </div>

                <div
                  onClick={() => {
                    setActiveTab('sitewalk')
                    setAutoCycle(false)
                  }}
                  className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs hover:border-duo-bright-blue cursor-pointer transition-all"
                >
                  <div className="text-2xl font-extrabold text-duo-navy">43</div>
                  <div className="text-xs font-bold text-slate-700 mt-0.5">Monthly Inspections</div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    100% digital close-out trail
                  </div>
                </div>

                <div
                  onClick={() => {
                    setActiveTab('rams')
                    setAutoCycle(false)
                  }}
                  className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs hover:border-duo-bright-blue cursor-pointer transition-all"
                >
                  <div className="text-2xl font-extrabold text-duo-navy">219</div>
                  <div className="text-xs font-bold text-slate-700 mt-0.5">Plant &amp; MEWPs on Site</div>
                  <div className="text-[11px] text-emerald-600 font-medium mt-1">
                    Zone A (188) • Zone B (24) • Paint (7)
                  </div>
                </div>

                <div
                  onClick={() => {
                    setActiveTab('tracker')
                    setAutoCycle(false)
                  }}
                  className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs hover:border-duo-bright-blue cursor-pointer transition-all"
                >
                  <div className="text-2xl font-extrabold text-emerald-600">616,620</div>
                  <div className="text-xs font-bold text-slate-700 mt-0.5">Man-Hours (YTD)</div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Zero RIDDOR lost-time events
                  </div>
                </div>

                <div
                  onClick={() => {
                    setActiveTab('sitewalk')
                    setAutoCycle(false)
                  }}
                  className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs hover:border-duo-bright-blue cursor-pointer transition-all"
                >
                  <div className="text-2xl font-extrabold text-duo-bright-blue">100%</div>
                  <div className="text-xs font-bold text-slate-700 mt-0.5">F10 &amp; PCI Statutory</div>
                  <div className="text-[11px] text-emerald-600 font-medium mt-1">
                    Principal Contractor Aligned
                  </div>
                </div>
              </div>

              {/* TAB 1: LIVE PROJECT & MAN-HOURS TRACKER */}
              {activeTab === 'tracker' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                  {/* Left: Project Tracker Card with rotating cogs feel */}
                  <div className="lg:col-span-7 bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between relative overflow-hidden">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-duo-deep-blue text-[20px]">
                            precision_manufacturing
                          </span>
                          <h3 className="font-headline-sm text-base font-bold text-duo-navy">
                            Project Man-Hours &amp; Duration Tracker
                          </h3>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {activeProj.title} · Running since {activeProj.start}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-lg self-start">
                        <button
                          type="button"
                          onClick={() => setSelectedProject(0)}
                          className={`px-2.5 py-1 rounded text-xs font-bold transition-colors cursor-pointer ${
                            selectedProject === 0
                              ? 'bg-duo-deep-blue text-white shadow-xs'
                              : 'text-slate-600 hover:text-duo-navy'
                          }`}
                        >
                          NW-AUTO-P1
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedProject(1)}
                          className={`px-2.5 py-1 rounded text-xs font-bold transition-colors cursor-pointer ${
                            selectedProject === 1
                              ? 'bg-duo-deep-blue text-white shadow-xs'
                              : 'text-slate-600 hover:text-duo-navy'
                          }`}
                        >
                          MERSEY-CIV-02
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-4">
                      <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/70">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                          Man-Hours Under Principal Oversight
                        </div>
                        <div className="text-3xl md:text-4xl font-extrabold text-duo-deep-blue mt-1 tracking-tight">
                          {activeProj.manhoursTakeover}
                        </div>
                        <div className="text-xs text-slate-600 mt-2 flex items-center justify-between">
                          <span>Total Cumulative Project Hours:</span>
                          <strong className="text-duo-navy">{activeProj.manhoursTotal}</strong>
                        </div>
                        <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                          <span className="material-symbols-outlined text-[14px]">
                            trending_up
                          </span>
                          <span>{activeProj.lastWeek}</span>
                        </div>
                        <div className="text-[11px] text-slate-500 mt-2">
                          {activeProj.continuousYears}
                        </div>
                      </div>

                      <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/70 flex flex-col justify-between">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                          Continuous Safe Programme Duration
                        </div>
                        <div className="grid grid-cols-2 gap-2.5 my-2">
                          <div className="bg-white p-2.5 rounded-lg border border-slate-200/80 text-center">
                            <div className="text-xl font-extrabold text-duo-navy">
                              {activeProj.days.toLocaleString()}
                            </div>
                            <div className="text-[11px] text-slate-500 font-medium">Total Days</div>
                          </div>
                          <div className="bg-white p-2.5 rounded-lg border border-slate-200/80 text-center">
                            <div className="text-xl font-extrabold text-duo-navy">
                              {activeProj.weeks}
                            </div>
                            <div className="text-[11px] text-slate-500 font-medium">Active Weeks</div>
                          </div>
                          <div className="bg-white p-2.5 rounded-lg border border-slate-200/80 text-center">
                            <div className="text-xl font-extrabold text-duo-navy">
                              {activeProj.months}
                            </div>
                            <div className="text-[11px] text-slate-500 font-medium">Months</div>
                          </div>
                          <div className="bg-white p-2.5 rounded-lg border border-slate-200/80 text-center">
                            <div className="text-xl font-extrabold text-compliance-green">
                              {activeProj.years} Yrs+
                            </div>
                            <div className="text-[11px] text-slate-500 font-medium">Zero Prohibition</div>
                          </div>
                        </div>
                        <div className="text-[11px] text-slate-500 flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px] text-duo-bright-blue">
                            sync
                          </span>
                          Auto-synced with weekly contractor timesheets &amp; gate logs
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: 12-Month Activity Calendar Heatmap & Findings */}
                  <div className="lg:col-span-5 bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                        <div>
                          <h3 className="font-headline-sm text-base font-bold text-duo-navy">
                            12-Month Inspection Activity Heatmap
                          </h3>
                          <p className="text-xs text-slate-500">
                            Daily empirical verification logs across active zones
                          </p>
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded bg-secondary-fixed/50 text-duo-deep-blue">
                          448 Site Audits
                        </span>
                      </div>

                      {/* Heatmap Grid */}
                      <div className="mt-4">
                        <div className="grid grid-cols-12 gap-1 text-[10px] text-slate-400 font-medium mb-1 text-center">
                          {heatmapMonths.map((m) => (
                            <span key={m}>{m}</span>
                          ))}
                        </div>
                        <div className="space-y-1.5">
                          {heatmapCells.map((row, rIdx) => (
                            <div key={rIdx} className="grid grid-cols-12 gap-1.5">
                              {row.map((val, cIdx) => {
                                const bg =
                                  val === 0
                                    ? 'bg-slate-100'
                                    : val === 1
                                    ? 'bg-sky-200'
                                    : val === 2
                                    ? 'bg-sky-400'
                                    : val === 3
                                    ? 'bg-duo-bright-blue'
                                    : 'bg-duo-deep-blue'
                                return (
                                  <div
                                    key={cIdx}
                                    className={`h-5 rounded-xs ${bg} transition-transform hover:scale-110`}
                                    title={`${val * 3 + 2} safety logs recorded`}
                                  />
                                )
                              })}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Findings by Category Bar */}
                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <div className="text-xs font-bold text-slate-700 mb-2">
                        Proactive Hazard Prevention Categories (Closed Out)
                      </div>
                      <div className="grid grid-cols-5 gap-2 text-center">
                        {[
                          { code: 'Good Practice', n: 784, color: 'bg-emerald-500' },
                          { code: 'Housekeeping', n: 152, color: 'bg-duo-bright-blue' },
                          { code: 'PPE Checks', n: 86, color: 'bg-duo-deep-blue' },
                          { code: 'Work at Height', n: 75, color: 'bg-amber-500' },
                          { code: 'Guarding/FGB', n: 43, color: 'bg-indigo-500' },
                        ].map((cat) => (
                          <div
                            key={cat.code}
                            className="bg-slate-50 p-2 rounded-lg border border-slate-200/70"
                          >
                            <div className="text-sm font-extrabold text-duo-navy">{cat.n}</div>
                            <div className="text-[10px] text-slate-500 truncate">{cat.code}</div>
                            <div className={`h-1 rounded-full mt-1.5 ${cat.color}`} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: WORKFORCE INDUCTIONS & COMPETENCY MATRIX */}
              {activeTab === 'inductions' && (
                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                    <div>
                      <h3 className="font-headline-sm text-base font-bold text-duo-navy">
                        Digital Induction Registry &amp; Photographic Competency Vault
                      </h3>
                      <p className="text-xs text-slate-500">
                        Every operative’s CSCS, IPAF, PASMA, CPCS &amp; Asbestos certificates are photographed, verified, and tracked for expiry before site access.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                        ✓ Bulk Competency .ZIP Auto-Matcher Active
                      </span>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[11px]">
                          <th className="py-2.5 px-3">Ref ID</th>
                          <th className="py-2.5 px-3">Operative (Anonymized)</th>
                          <th className="py-2.5 px-3">Contractor Package</th>
                          <th className="py-2.5 px-3">Role &amp; CDM Status</th>
                          <th className="py-2.5 px-3">Verified Card Scans (Photo / PDF)</th>
                          <th className="py-2.5 px-3 text-right">Access Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {anonymizedPeople.map((person) => (
                          <tr key={person.id} className="hover:bg-slate-50/80">
                            <td className="py-3 px-3 font-mono font-bold text-duo-deep-blue">
                              {person.id}
                            </td>
                            <td className="py-3 px-3 font-bold text-duo-navy">{person.name}</td>
                            <td className="py-3 px-3 text-slate-600">{person.company}</td>
                            <td className="py-3 px-3">
                              <div className="font-medium text-slate-800">{person.role}</div>
                              <div className="text-[10px] text-emerald-600 font-semibold">
                                ● {person.cdm}
                              </div>
                            </td>
                            <td className="py-3 px-3">
                              <div className="flex flex-wrap gap-1">
                                {person.certs.map((c) => (
                                  <span
                                    key={c}
                                    className="px-2 py-0.5 rounded bg-secondary-fixed/60 text-duo-deep-blue font-semibold text-[11px] inline-flex items-center gap-1"
                                  >
                                    <span className="material-symbols-outlined text-[12px]">
                                      photo_camera
                                    </span>
                                    {c}
                                  </span>
                                ))}
                              </div>
                            </td>
                            <td className="py-3 px-3 text-right">
                              <span
                                className={`px-2.5 py-1 rounded-full font-bold text-[11px] ${
                                  person.status === 'Valid'
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : 'bg-amber-100 text-amber-800'
                                }`}
                              >
                                {person.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* TAB 3: DYNAMIC RAMS & LOLER / PUWER COMPLIANCE */}
              {activeTab === 'rams' && (
                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                    <div>
                      <h3 className="font-headline-sm text-base font-bold text-duo-navy">
                        Live RAMS Register, LOLER Lifting &amp; PUWER Plant Compliance
                      </h3>
                      <p className="text-xs text-slate-500">
                        Automated expiry tracking for Risk Assessments, Method Statements, and statutory plant examinations across all contractors.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="px-3 py-1 rounded-lg bg-duo-navy text-white font-semibold">
                        108 Active RAMS
                      </span>
                      <span className="px-3 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-semibold">
                        LOLER &amp; PUWER Linked
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {anonymizedRams.map((item) => (
                      <div
                        key={item.urn}
                        className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between gap-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-duo-deep-blue bg-secondary-fixed/60 px-2.5 py-0.5 rounded">
                            {item.urn}
                          </span>
                          <span
                            className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                              item.tone === 'green'
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-amber-100 text-amber-800'
                            }`}
                          >
                            {item.status} • {item.due}
                          </span>
                        </div>
                        <div>
                          <div className="font-bold text-sm text-duo-navy">{item.task}</div>
                          <div className="text-xs text-slate-500 mt-0.5">
                            <strong>{item.company}</strong> — {item.area}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: MOBILE SITE WALK & OBSERVATIONS */}
              {activeTab === 'sitewalk' && (
                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                    <div>
                      <h3 className="font-headline-sm text-base font-bold text-duo-navy">
                        Mobile Site Walk (Offline-Capable) &amp; Live Hazard Closeouts
                      </h3>
                      <p className="text-xs text-slate-500">
                        Advisors log observations directly on phones/tablets even in zero-signal plant rooms; records auto-sync with photographic closeout proof.
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-duo-bright-blue/15 text-duo-deep-blue text-xs font-bold">
                      📷 Instant Camera &amp; F10 Tracker Integrated
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {anonymizedObservations.map((obs) => (
                      <div
                        key={obs.ref}
                        className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between gap-3"
                      >
                        <div>
                          <div className="flex items-center justify-between text-xs mb-1.5">
                            <span className="font-mono font-bold text-duo-deep-blue">
                              {obs.ref}
                            </span>
                            <span className="text-slate-400">{obs.date}</span>
                          </div>
                          <div className="text-xs font-bold text-duo-navy uppercase tracking-wide">
                            {obs.area}
                          </div>
                          <div className="inline-block mt-1 px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-[10px] font-bold">
                            {obs.category} • {obs.contractor}
                          </div>
                          <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                            {obs.desc}
                          </p>
                        </div>
                        <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between text-[11px] font-bold text-emerald-700">
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">
                              verified
                            </span>
                            {obs.status}
                          </span>
                          <span className="text-duo-deep-blue">Audit Trail →</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
