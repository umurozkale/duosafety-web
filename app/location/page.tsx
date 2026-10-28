'use client'

import { useState, FormEvent } from 'react'
import Image from 'next/image'

export default function LocationPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="flex flex-col w-full relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-margin pt-space-xl pb-space-3xl w-full">
        {/* 1. Section Title & Geographic Positioning */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg mb-space-2xl">
          <div className="space-y-space-xs max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-duo-deep-blue font-label-sm text-label-sm tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-compliance-green animate-pulse"></span>
              Operational Hub • United Kingdom Network
            </div>
            <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface tracking-tight uppercase">
              OUR LOCATION &amp; COVERAGE
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant font-medium">
              Based in Liverpool, Serving Construction and Commercial Clients Across the UK
            </p>
          </div>

          <div className="flex items-center gap-space-sm bg-surface-card p-space-sm rounded-xl shadow-sm border border-surface-container">
            <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-duo-deep-blue">
              <span className="material-symbols-outlined text-[22px]">
                radar
              </span>
            </div>
            <div>
              <div className="font-label-sm text-label-sm uppercase text-outline tracking-wider">
                HSE Response Status
              </div>
              <div className="font-headline-sm text-headline-sm text-on-surface">
                Active Deployments UK-Wide
              </div>
            </div>
          </div>
        </div>

        {/* 2. Bento Grid: Headquarters Core + Facility Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-3xl">
          {/* Primary HQ Card */}
          <div className="lg:col-span-7 bg-surface-card rounded-xl p-space-xl shadow-md border border-surface-container relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10 space-y-space-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <span className="px-3 py-1 rounded bg-duo-deep-blue text-white font-label-sm text-label-sm uppercase tracking-wider">
                    National HQ
                  </span>
                  <span className="text-outline font-label-md text-label-md">
                    Merseyside Operations Centre
                  </span>
                </div>
                <span className="material-symbols-outlined text-duo-deep-blue text-[28px]">
                  corporate_fare
                </span>
              </div>

              <div className="space-y-space-xs">
                <div className="font-label-sm text-label-sm uppercase text-duo-deep-blue tracking-widest">
                  Registered Facility
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface leading-tight">
                  105 Boundary Street
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Liverpool, England, UK •{' '}
                  <span className="font-semibold text-on-surface">L5 9YJ</span>
                </p>
              </div>

              {/* Key Metrics Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-sm">
                <div className="p-space-md rounded-lg bg-surface-container-low border border-surface-container">
                  <div className="flex items-center gap-1.5 text-duo-deep-blue mb-space-xs">
                    <span className="material-symbols-outlined text-[18px]">
                      schedule
                    </span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider">
                      Operating Hours
                    </span>
                  </div>
                  <div className="font-headline-sm text-headline-sm text-on-surface">
                    Monday – Friday
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    9:00 AM – 5:00 PM GMT
                  </div>
                  <div className="mt-space-xs inline-flex items-center gap-1 text-[11px] font-semibold text-compliance-green">
                    <span className="material-symbols-outlined text-[14px]">
                      shield
                    </span>
                    Emergency Site Support Available 24/7
                  </div>
                </div>

                <div className="p-space-md rounded-lg bg-surface-container-low border border-surface-container">
                  <div className="flex items-center gap-1.5 text-duo-deep-blue mb-space-xs">
                    <span className="material-symbols-outlined text-[18px]">
                      alternate_email
                    </span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider">
                      Primary Dispatch
                    </span>
                  </div>
                  <a
                    className="font-headline-sm text-headline-sm text-duo-deep-blue hover:underline block truncate"
                    href="mailto:info@duosafety.co.uk"
                  >
                    info@duosafety.co.uk
                  </a>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    Direct Advisory &amp; Notice Desk
                  </div>
                  <div className="mt-space-xs text-[11px] font-semibold text-outline">
                    Statutory CDM &amp; Site Dispatch Line
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Transit Proximity */}
            <div className="relative z-10 mt-space-lg bg-surface-canvas rounded-lg p-space-md border border-surface-container">
              <div className="font-label-sm text-label-sm uppercase text-outline tracking-wider mb-space-xs">
                Strategic Transit Proximity
              </div>
              <div className="grid grid-cols-3 gap-space-sm text-center">
                <div className="bg-surface-card p-space-xs rounded border border-surface-container">
                  <div className="font-headline-sm text-headline-sm text-duo-deep-blue">
                    8 min
                  </div>
                  <div className="text-[11px] text-on-surface-variant uppercase font-medium">
                    Liverpool City Centre
                  </div>
                </div>
                <div className="bg-surface-card p-space-xs rounded border border-surface-container">
                  <div className="font-headline-sm text-headline-sm text-duo-deep-blue">
                    12 min
                  </div>
                  <div className="text-[11px] text-on-surface-variant uppercase font-medium">
                    M62 Junction 4
                  </div>
                </div>
                <div className="bg-surface-card p-space-xs rounded border border-surface-container">
                  <div className="font-headline-sm text-headline-sm text-duo-deep-blue">
                    5 min
                  </div>
                  <div className="text-[11px] text-on-surface-variant uppercase font-medium">
                    Mersey Docks / Port
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Architectural Facility Card */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="relative h-full min-h-[340px] rounded-xl overflow-hidden shadow-md bg-duo-navy p-space-xl flex flex-col justify-between text-white">
              <Image
                src="/images/about-liverpool-hq.jpg"
                alt="DUO Safety Boundary Street Liverpool Facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-duo-navy via-duo-navy/55 to-duo-navy/30"></div>
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded bg-duo-bright-blue text-white font-label-sm text-label-sm font-bold uppercase tracking-wider">
                  Merseyside Operations
                </span>
                <span className="material-symbols-outlined text-[32px] text-compliance-green">
                  location_city
                </span>
              </div>

              <div className="relative z-10 bg-duo-navy/85 backdrop-blur-md p-space-md rounded-lg border border-white/15">
                <p className="font-headline-sm text-headline-sm text-white">
                  105 Boundary Street Advisory Facility (L5 9YJ)
                </p>
                <p className="font-body-sm text-body-sm text-secondary-fixed/85 mt-1">
                  Strategic corridor access to Atlantic Gateway, Mersey Docks, and North West motorway networks (M62 / M57 / M58).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. UK Coverage Architecture & Vector Map */}
        <div className="bg-surface-card rounded-xl p-space-xl shadow-lg border border-surface-container mb-space-3xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mb-space-xl">
            <div>
              <span className="font-label-sm text-label-sm uppercase text-duo-deep-blue tracking-widest font-bold">
                UK Coverage Architecture
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Strategic Deployment Radii &amp; Jurisdiction
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Centralised deployment based out of Liverpool with structured SLA dispatch tiers across Great Britain.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-space-sm">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-surface-container-low text-on-surface font-label-sm text-label-sm">
                <span className="w-3 h-3 rounded-full bg-duo-bright-blue"></span>
                Tier 1: Merseyside &amp; Port (Immediate)
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-surface-container-low text-on-surface font-label-sm text-label-sm">
                <span className="w-3 h-3 rounded-full bg-duo-deep-blue"></span>
                Tier 2: North West Corridor (&lt;2h)
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-surface-container-low text-on-surface font-label-sm text-label-sm">
                <span className="w-3 h-3 rounded-full bg-duo-navy"></span>
                Tier 3: National UK Deployments
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            {/* Vector Map */}
            <div className="lg:col-span-7 bg-duo-navy rounded-xl p-space-lg relative overflow-hidden text-white shadow-inner min-h-[440px] flex flex-col justify-between">
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#93ccff_1px,transparent_1px)] [background-size:24px_24px]"></div>
              <div className="relative z-10 flex items-center justify-between border-b border-white/15 pb-space-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-compliance-green"></span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed">
                    DUO Safety • Geospatial Coverage Vector
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-secondary-fixed font-mono">
                  LAT 53.4241° N / LON -2.9902° W
                </span>
              </div>

              <div className="relative z-10 py-space-md flex items-center justify-center">
                <svg
                  className="w-full max-w-[440px] h-auto drop-shadow"
                  viewBox="0 0 500 420"
                >
                  <path
                    d="M 220 30 L 260 25 L 290 60 L 260 90 L 290 120 L 270 150 L 285 180 L 240 185 L 260 240 L 310 270 L 330 330 L 300 370 L 260 380 L 210 390 L 170 365 L 195 330 L 165 310 L 190 280 L 195 240 L 170 230 L 205 190 L 210 140 L 195 100 L 220 30 Z"
                    fill="#132a46"
                    stroke="#3b82f6"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="215"
                    cy="225"
                    fill="none"
                    opacity="0.4"
                    r="160"
                    stroke="#93ccff"
                    strokeDasharray="4 4"
                    strokeWidth="1"
                  />
                  <text
                    fill="#93ccff"
                    fontFamily="Inter"
                    fontSize="9"
                    letterSpacing="1"
                    x="280"
                    y="75"
                  >
                    NATIONAL COVERAGE: UK WIDE
                  </text>
                  <circle
                    cx="215"
                    cy="225"
                    fill="#137dc5"
                    fillOpacity="0.12"
                    r="95"
                    stroke="#137dc5"
                    strokeDasharray="2 2"
                    strokeWidth="1.2"
                  />
                  <text
                    fill="#5bb8fe"
                    fontFamily="Inter"
                    fontSize="9"
                    fontWeight="600"
                    x="245"
                    y="145"
                  >
                    M62 / M6 NORTH WEST CORRIDOR
                  </text>
                  <circle
                    cx="215"
                    cy="225"
                    fill="#0f5f96"
                    fillOpacity="0.35"
                    r="42"
                    stroke="#5bb8fe"
                    strokeWidth="1.5"
                  />
                  <circle cx="215" cy="225" fill="#10B981" r="6" />
                  <circle cx="215" cy="225" fill="#ffffff" r="2.5" />
                  <line
                    stroke="#93ccff"
                    strokeLinecap="round"
                    strokeWidth="1.2"
                    x1="215"
                    x2="250"
                    y1="225"
                    y2="220"
                  />
                  <circle cx="250" cy="220" fill="#93ccff" r="3" />
                  <text fill="#eaf1ff" fontFamily="Inter" fontSize="9" x="256" y="223">
                    Manchester Hub
                  </text>
                  <line
                    stroke="#93ccff"
                    strokeLinecap="round"
                    strokeWidth="1.2"
                    x1="215"
                    x2="220"
                    y1="225"
                    y2="190"
                  />
                  <circle cx="220" cy="190" fill="#93ccff" r="3" />
                  <text fill="#eaf1ff" fontFamily="Inter" fontSize="9" x="226" y="192">
                    Lancashire
                  </text>
                  <line
                    stroke="#93ccff"
                    strokeDasharray="3 3"
                    strokeWidth="1.2"
                    x1="215"
                    x2="235"
                    y1="225"
                    y2="275"
                  />
                  <circle cx="235" cy="275" fill="#93ccff" r="3" />
                  <text fill="#eaf1ff" fontFamily="Inter" fontSize="9" x="242" y="278">
                    Midlands
                  </text>
                  <line
                    stroke="#93ccff"
                    strokeDasharray="3 3"
                    strokeWidth="1.2"
                    x1="215"
                    x2="280"
                    y1="225"
                    y2="330"
                  />
                  <circle cx="280" cy="330" fill="#93ccff" r="3" />
                  <text fill="#eaf1ff" fontFamily="Inter" fontSize="9" x="288" y="333">
                    London / SE
                  </text>
                  <rect
                    fill="#0a2540"
                    height="22"
                    rx="4"
                    stroke="#137dc5"
                    strokeWidth="1"
                    width="82"
                    x="123"
                    y="212"
                  />
                  <text
                    fill="#ffffff"
                    fontFamily="Inter"
                    fontSize="9"
                    fontWeight="700"
                    x="130"
                    y="226"
                  >
                    HQ: LIVERPOOL
                  </text>
                </svg>
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pt-space-xs text-secondary-fixed/80 font-label-sm text-label-sm">
                <span className="flex items-center gap-1.5 text-secondary-fixed">
                  <span className="material-symbols-outlined text-[16px]">
                    navigation
                  </span>
                  L5 9YJ Coordinates Verified
                </span>
                <span>Full Territorial Cover: England • Wales • Scotland</span>
              </div>
            </div>

            {/* Right Territory Summary */}
            <div className="lg:col-span-5 space-y-space-md">
              <div className="p-space-lg bg-surface-container rounded-xl border border-surface-container-high space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-headline-sm text-headline-sm text-on-surface">
                    Boundary St Station Corridor
                  </span>
                  <span className="material-symbols-outlined text-duo-deep-blue text-[24px]">
                    pin_drop
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  105 Boundary Street, Vauxhall / Kirkdale Border, Liverpool, L5 9YJ — 5 minutes from Sandhills Merseyrail Station.
                </p>
              </div>

              <div className="p-space-md bg-surface-container-low rounded-xl border border-surface-container flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-duo-deep-blue text-[22px] mt-0.5">
                  commute
                </span>
                <div>
                  <div className="font-label-md text-label-md text-on-surface font-semibold">
                    Immediate Regional Response
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Within 60 minutes for high-risk Merseyside, Wirral, Prescot, St Helens, Cheshire, and Greater Manchester priority sites.
                  </div>
                </div>
              </div>

              <div className="p-space-md bg-surface-container-low rounded-xl border border-surface-container flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-duo-bright-blue text-[22px] mt-0.5">
                  flight_takeoff
                </span>
                <div>
                  <div className="font-label-md text-label-md text-on-surface font-semibold">
                    Nationwide Field Deployment
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Scheduled multi-day site audits, CDM Principal Designer inspections, and project monitoring across Great Britain.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3.5 Regional Deployment Highlights & Visiting Protocols */}
        <div className="mb-space-3xl space-y-space-3xl">
          <div>
            <div className="mb-space-lg">
              <span className="font-label-sm text-label-sm uppercase text-duo-deep-blue tracking-widest font-bold">
                Field Operations
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Regional Deployment Highlights
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Specialised compliance delivery tailored to key industrial environments and construction corridors.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
              <div className="bg-surface-card rounded-xl p-space-lg shadow-sm border border-surface-container flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-space-md">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-duo-deep-blue">
                    <span className="material-symbols-outlined text-[26px]">
                      anchor
                    </span>
                  </div>
                  <div className="space-y-space-xs">
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm uppercase tracking-wide">
                      Waterfront &amp; Logistics
                    </span>
                    <h3 className="font-headline-md text-headline-md text-on-surface">
                      Liverpool Port, Mersey &amp; Merseyside Commercial Hubs
                    </h3>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Direct statutory oversight across the Mersey maritime corridor, freight logistics parks, Bramley-Moore dock developments, and Liverpool One commercial masterplans.
                  </p>
                  <div className="space-y-1 pt-space-xs text-body-sm font-body-sm text-on-surface">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-duo-deep-blue"></span>
                      Dockland &amp; marine engineering compliance
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-duo-deep-blue"></span>
                      High-density urban regeneration zones
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-duo-deep-blue"></span>
                      Merseyside warehousing &amp; bulk transshipment
                    </div>
                  </div>
                </div>
                <div className="mt-space-lg bg-surface-canvas rounded-lg p-space-sm text-label-sm font-label-sm text-outline flex items-center justify-between border border-surface-container">
                  <span>Primary Sector: Marine &amp; Logistics</span>
                  <span className="text-duo-deep-blue font-bold">
                    Priority Zone
                  </span>
                </div>
              </div>

              <div className="bg-surface-card rounded-xl p-space-lg shadow-sm border border-surface-container flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-space-md">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-duo-deep-blue">
                    <span className="material-symbols-outlined text-[26px]">
                      apartment
                    </span>
                  </div>
                  <div className="space-y-space-xs">
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm uppercase tracking-wide">
                      Infrastructure &amp; Civils
                    </span>
                    <h3 className="font-headline-md text-headline-md text-on-surface">
                      Greater Manchester &amp; North West Construction Corridors
                    </h3>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Daily deployment along the M62, M6, and M56 arterial ribbons servicing major commercial developments, distribution warehouses in Warrington, and high-rise civil projects in Manchester.
                  </p>
                  <div className="space-y-1 pt-space-xs text-body-sm font-body-sm text-on-surface">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-duo-deep-blue"></span>
                      Tier 1 &amp; Tier 2 contractor site supervision
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-duo-deep-blue"></span>
                      Multi-storey structural frames and civils
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-duo-deep-blue"></span>
                      Preston, Cheshire, and Lancashire hubs
                    </div>
                  </div>
                </div>
                <div className="mt-space-lg bg-surface-canvas rounded-lg p-space-sm text-label-sm font-label-sm text-outline flex items-center justify-between border border-surface-container">
                  <span>Primary Sector: Commercial &amp; Infrastructure</span>
                  <span className="text-duo-deep-blue font-bold">
                    Daily Coverage
                  </span>
                </div>
              </div>

              <div className="bg-surface-card rounded-xl p-space-lg shadow-sm border border-surface-container flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-space-md">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-duo-deep-blue">
                    <span className="material-symbols-outlined text-[26px]">
                      public
                    </span>
                  </div>
                  <div className="space-y-space-xs">
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm uppercase tracking-wide">
                      Great Britain Wide
                    </span>
                    <h3 className="font-headline-md text-headline-md text-on-surface">
                      Nationwide On-Site Audits and CDM Advisory Deployments
                    </h3>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Full legal and technical capability covering multi-asset property portfolios, national retail chains, civil infrastructure frameworks, and renewable energy sites throughout Scotland, England, and Wales.
                  </p>
                  <div className="space-y-1 pt-space-xs text-body-sm font-body-sm text-on-surface">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-duo-deep-blue"></span>
                      Principal Designer statutory advisor duties
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-duo-deep-blue"></span>
                      Standardised multi-site audit schedules
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-duo-deep-blue"></span>
                      National client representation at HSE reviews
                    </div>
                  </div>
                </div>
                <div className="mt-space-lg bg-surface-canvas rounded-lg p-space-sm text-label-sm font-label-sm text-outline flex items-center justify-between border border-surface-container">
                  <span>Primary Sector: Nationwide Portfolio CDM</span>
                  <span className="text-duo-deep-blue font-bold">UK Scope</span>
                </div>
              </div>
            </div>
          </div>

          {/* Office Access Notes & Visiting Protocols */}
          <div className="bg-surface-card rounded-xl p-space-xl shadow-md border border-surface-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
              <div className="lg:col-span-5 space-y-space-md">
                <span className="font-label-sm text-label-sm uppercase text-duo-deep-blue tracking-widest font-bold">
                  Visitor Governance
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  Office Access Notes &amp; Visiting Protocols
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  In accordance with statutory building management and client consultation protocols, all client meetings at our 105 Boundary Street headquarters are conducted under structured visiting arrangements.
                </p>
                <div className="p-space-md rounded-lg bg-surface-container-low border border-surface-container space-y-space-xs">
                  <div className="flex items-center gap-1.5 text-on-surface font-headline-sm text-headline-sm">
                    <span className="material-symbols-outlined text-duo-deep-blue">
                      verified_user
                    </span>
                    Pre-Booking Requirement
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    To guarantee the availability of senior CDM advisors and compliance consultants, face-to-face office consultations must be scheduled with a minimum of 24 hours advance notice.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="p-space-md rounded-lg bg-surface-canvas border border-surface-container flex flex-col justify-between">
                  <div className="space-y-space-xs">
                    <div className="w-8 h-8 rounded bg-surface-card flex items-center justify-center text-duo-deep-blue mb-space-xs shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">
                        local_parking
                      </span>
                    </div>
                    <div className="font-label-md text-label-md text-on-surface font-bold">
                      Dedicated Visitor Parking
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Designated client parking bays are clearly demarcated directly outside the facility entrance on Boundary Street. EV charging points available upon prior request.
                    </p>
                  </div>
                  <div className="text-[11px] font-semibold text-outline uppercase tracking-wider mt-space-sm">
                    Access: Barrier Monitored
                  </div>
                </div>

                <div className="p-space-md rounded-lg bg-surface-canvas border border-surface-container flex flex-col justify-between">
                  <div className="space-y-space-xs">
                    <div className="w-8 h-8 rounded bg-surface-card flex items-center justify-center text-duo-deep-blue mb-space-xs shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">
                        how_to_reg
                      </span>
                    </div>
                    <div className="font-label-md text-label-md text-on-surface font-bold">
                      Reception &amp; Induction Log
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      All visitors must check in with building reception on Level 1. Photographic ID is required, followed by a brief fire safety and emergency egress briefing.
                    </p>
                  </div>
                  <div className="text-[11px] font-semibold text-outline uppercase tracking-wider mt-space-sm">
                    Required: Photo ID
                  </div>
                </div>

                <div className="p-space-md rounded-lg bg-surface-canvas border border-surface-container flex flex-col justify-between">
                  <div className="space-y-space-xs">
                    <div className="w-8 h-8 rounded bg-surface-card flex items-center justify-center text-duo-deep-blue mb-space-xs shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">
                        accessible
                      </span>
                    </div>
                    <div className="font-label-md text-label-md text-on-surface font-bold">
                      Accessibility &amp; DDA Standard
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Full step-free ground floor and elevator access across all meeting suites. Accessible sanitisation stations and acoustic loop systems fitted in boardrooms.
                    </p>
                  </div>
                  <div className="text-[11px] font-semibold text-outline uppercase tracking-wider mt-space-sm">
                    Full Step-Free Access
                  </div>
                </div>

                <div className="p-space-md rounded-lg bg-surface-canvas border border-surface-container flex flex-col justify-between">
                  <div className="space-y-space-xs">
                    <div className="w-8 h-8 rounded bg-surface-card flex items-center justify-center text-duo-deep-blue mb-space-xs shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">
                        train
                      </span>
                    </div>
                    <div className="font-label-md text-label-md text-on-surface font-bold">
                      Rail &amp; Public Transit
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      5-minute walk from Sandhills Station (Merseyrail Northern Line, direct connections from Liverpool Central and Moorfields stations).
                    </p>
                  </div>
                  <div className="text-[11px] font-semibold text-outline uppercase tracking-wider mt-space-sm">
                    Transit: Sandhills Rail
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Arrange a Site Visit or Meeting Form */}
        <div className="bg-duo-navy text-white rounded-xl p-space-xl shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl relative z-10">
            <div className="lg:col-span-5 space-y-space-md">
              <div>
                <span className="px-3 py-1 rounded bg-duo-bright-blue text-white font-label-sm text-label-sm uppercase font-bold tracking-wider">
                  Direct Dispatch • UK Wide
                </span>
                <h2 className="font-headline-lg text-headline-lg text-white mt-space-sm tracking-tight">
                  Arrange a Site Visit or Meeting
                </h2>
                <p className="font-body-md text-body-md text-secondary-fixed/85 mt-2">
                  Coordinate an on-site safety assessment, Principal Designer advisor mobilization, or an in-person meeting at 105 Boundary Street.
                </p>
              </div>

              <div className="space-y-space-sm bg-white/10 border border-white/15 p-space-md rounded-lg">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary-fixed text-[22px]">
                    mail
                  </span>
                  <div>
                    <div className="text-secondary-fixed/70 font-label-sm text-label-sm uppercase tracking-wider">
                      Official Inquiries &amp; Site Notices
                    </div>
                    <a
                      className="text-white font-headline-sm text-headline-sm hover:text-secondary-fixed transition-colors"
                      href="mailto:info@duosafety.co.uk"
                    >
                      info@duosafety.co.uk
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-space-sm pt-space-xs">
                  <span className="material-symbols-outlined text-compliance-green text-[22px]">
                    pin_drop
                  </span>
                  <div>
                    <div className="text-secondary-fixed/70 font-label-sm text-label-sm uppercase tracking-wider">
                      Headquarters Reception
                    </div>
                    <div className="text-white font-body-md text-body-md">
                      105 Boundary Street, Liverpool, L5 9YJ
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <div className="lg:col-span-7 bg-surface-card text-on-surface rounded-xl p-space-lg shadow-lg">
              {!submitted ? (
                <form className="space-y-space-md" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="space-y-1">
                      <label className="font-label-md text-label-md text-on-surface block font-medium">
                        Contact Name *
                      </label>
                      <input
                        className="w-full px-3.5 py-2.5 rounded-lg bg-surface-canvas border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-duo-deep-blue text-body-md text-on-surface"
                        placeholder="Full Name"
                        required
                        type="text"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-label-md text-label-md text-on-surface block font-medium">
                        Company / Principal Contractor *
                      </label>
                      <input
                        className="w-full px-3.5 py-2.5 rounded-lg bg-surface-canvas border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-duo-deep-blue text-body-md text-on-surface"
                        placeholder="Organisation Name"
                        required
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="space-y-1">
                      <label className="font-label-md text-label-md text-on-surface block font-medium">
                        Corporate Email *
                      </label>
                      <input
                        className="w-full px-3.5 py-2.5 rounded-lg bg-surface-canvas border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-duo-deep-blue text-body-md text-on-surface"
                        placeholder="name@company.co.uk"
                        required
                        type="email"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-label-md text-label-md text-on-surface block font-medium">
                        Contact Telephone *
                      </label>
                      <input
                        className="w-full px-3.5 py-2.5 rounded-lg bg-surface-canvas border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-duo-deep-blue text-body-md text-on-surface"
                        placeholder="0151 ... or mobile"
                        required
                        type="tel"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="space-y-1">
                      <label className="font-label-md text-label-md text-on-surface block font-medium">
                        Engagement Type *
                      </label>
                      <select className="w-full px-3.5 py-2.5 rounded-lg bg-surface-canvas border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-duo-deep-blue text-body-md text-on-surface">
                        <option value="site_visit">
                          On-Site Safety Assessment (Client Site)
                        </option>
                        <option value="boundary_meeting">
                          Client Meeting at Liverpool HQ (105 Boundary St)
                        </option>
                        <option value="cdm_advisory">
                          CDM 2015 Project Briefing
                        </option>
                        <option value="urgent_inspection">
                          Urgent Incident / Statutory Inspection
                        </option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="font-label-md text-label-md text-on-surface block font-medium">
                        Site Postcode / Project Territory *
                      </label>
                      <input
                        className="w-full px-3.5 py-2.5 rounded-lg bg-surface-canvas border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-duo-deep-blue text-body-md text-on-surface"
                        placeholder="e.g. L3 1BP or M1 2WD"
                        required
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-label-md text-label-md text-on-surface block font-medium">
                      Project Scope &amp; Proposed Date
                    </label>
                    <textarea
                      className="w-full px-3.5 py-2.5 rounded-lg bg-surface-canvas border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-duo-deep-blue text-body-md text-on-surface"
                      placeholder="Provide project stage, site address, and preferred inspection dates..."
                      rows={3}
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md pt-space-xs">
                    <div className="text-[12px] text-outline font-body-sm">
                      Submissions routed securely to{' '}
                      <span className="font-medium text-on-surface">
                        info@duosafety.co.uk
                      </span>
                    </div>
                    <button
                      className="px-6 py-3 rounded-lg bg-duo-deep-blue text-white font-label-md text-label-md hover:bg-duo-bright-blue transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                      type="submit"
                    >
                      <span>Submit Site Request</span>
                      <span className="material-symbols-outlined text-[18px]">
                        send
                      </span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-space-xl text-center space-y-space-md">
                  <div className="w-16 h-16 rounded-full bg-compliance-green/15 text-compliance-green mx-auto flex items-center justify-center">
                    <span className="material-symbols-outlined text-[36px]">
                      check_circle
                    </span>
                  </div>
                  <div className="space-y-space-xs">
                    <h3 className="font-headline-md text-headline-md text-on-surface">
                      Site Request Dispatched
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">
                      Your deployment request has been logged with the DUO Safety operations desk at 105 Boundary Street. A senior advisor will confirm schedules shortly via email.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors"
                  >
                    Send Another Notice
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
