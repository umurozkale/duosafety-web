'use client'

import { useState, FormEvent } from 'react'

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormSubmitted(true)
    e.currentTarget.reset()
  }

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO HEADER */}
      <section className="relative w-full overflow-hidden bg-duo-navy text-white py-space-3xl px-margin">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#137dc5_1.5px,transparent_1.5px)] [background-size:32px_32px]"></div>
        <div className="relative max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-space-xl">
          <div className="max-w-2xl space-y-space-sm">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-secondary-fixed text-label-sm font-label-sm uppercase tracking-widest backdrop-blur-md border border-white/15">
              <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
                shield
              </span>
              Statutory Regulatory Advisory
            </div>
            <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-white tracking-tight uppercase">
              GET IN TOUCH
            </h1>
            <p className="font-body-lg text-body-lg text-secondary-fixed/85 leading-relaxed">
              Connect with our Health &amp; Safety, CDM 2015, and Compliance Specialists for verified operational guidance and immediate technical assessment.
            </p>
          </div>
          <div className="flex flex-wrap md:flex-col items-start md:items-end gap-space-sm bg-white/10 border border-white/15 p-space-lg rounded-xl backdrop-blur-md shadow-sm">
            <div className="flex items-center gap-1.5 text-compliance-green font-label-md text-label-md">
              <span className="material-symbols-outlined text-[18px]">
                verified
              </span>
              <span>Duty Holder SLA: Active</span>
            </div>
            <div className="font-body-sm text-body-sm text-secondary-fixed/80">
              Merseyside Operational Hub • UK Wide Deployment
            </div>
          </div>
        </div>
      </section>

      {/* 2. URGENT SLA STRIP */}
      <div className="w-full bg-alert-amber-soft py-3 px-margin border-b border-tertiary-fixed-dim/40">
        <div className="max-w-[1240px] mx-auto flex items-center gap-space-md text-on-tertiary-fixed-variant">
          <span className="material-symbols-outlined text-[20px] text-on-tertiary-container shrink-0">
            emergency
          </span>
          <div className="font-label-md text-label-md">
            <span className="font-bold">
              Urgent Site Incident or Statutory Notice?
            </span>{' '}
            Our primary dispatch team triggers statutory protocols within the guaranteed 24-hour SLA framework.
          </div>
        </div>
      </div>

      {/* 3. FORM & CONTACT SIDEBAR */}
      <section className="w-full py-space-3xl px-margin">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* Left Form */}
          <div className="lg:col-span-8 bg-surface-card rounded-xl shadow-xl border border-surface-container p-space-xl relative">
            <div className="mb-space-xl">
              <div className="font-label-sm text-label-sm text-duo-deep-blue uppercase tracking-widest font-bold mb-space-xs">
                Direct Technical Inquiry
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Submit Operational Instructions
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                Complete the formal dispatch schedule below. Your brief is reviewed by an appointed CDM 2015 Consultant and Lead Auditor.
              </p>
            </div>

            <form className="space-y-space-lg" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="space-y-1">
                  <label
                    className="font-label-md text-label-md text-on-surface flex items-center justify-between"
                    htmlFor="first-name"
                  >
                    <span>First Name</span>
                    <span className="text-error font-body-sm">*</span>
                  </label>
                  <input
                    className="w-full bg-surface-canvas text-on-surface placeholder:text-outline font-body-md text-body-md px-4 py-2.5 rounded-lg border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-duo-deep-blue transition-all"
                    id="first-name"
                    placeholder="e.g. Alistair"
                    required
                    type="text"
                  />
                </div>
                <div className="space-y-1">
                  <label
                    className="font-label-md text-label-md text-on-surface flex items-center justify-between"
                    htmlFor="last-name"
                  >
                    <span>Last Name</span>
                    <span className="text-error font-body-sm">*</span>
                  </label>
                  <input
                    className="w-full bg-surface-canvas text-on-surface placeholder:text-outline font-body-md text-body-md px-4 py-2.5 rounded-lg border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-duo-deep-blue transition-all"
                    id="last-name"
                    placeholder="e.g. Vance"
                    required
                    type="text"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="space-y-1">
                  <label
                    className="font-label-md text-label-md text-on-surface flex items-center justify-between"
                    htmlFor="email"
                  >
                    <span>Email Address</span>
                    <span className="text-error font-body-sm">*</span>
                  </label>
                  <input
                    className="w-full bg-surface-canvas text-on-surface placeholder:text-outline font-body-md text-body-md px-4 py-2.5 rounded-lg border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-duo-deep-blue transition-all"
                    id="email"
                    placeholder="office@contractor.co.uk"
                    required
                    type="email"
                  />
                </div>
                <div className="space-y-1">
                  <label
                    className="font-label-md text-label-md text-on-surface flex items-center justify-between"
                    htmlFor="phone"
                  >
                    <span>Phone Number</span>
                    <span className="text-error font-body-sm">*</span>
                  </label>
                  <input
                    className="w-full bg-surface-canvas text-on-surface placeholder:text-outline font-body-md text-body-md px-4 py-2.5 rounded-lg border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-duo-deep-blue transition-all"
                    id="phone"
                    placeholder="+44 (0) 151 000 0000"
                    required
                    type="tel"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="space-y-1">
                  <label
                    className="font-label-md text-label-md text-on-surface flex items-center justify-between"
                    htmlFor="company"
                  >
                    <span>Company Name / Project Location</span>
                    <span className="text-error font-body-sm">*</span>
                  </label>
                  <input
                    className="w-full bg-surface-canvas text-on-surface placeholder:text-outline font-body-md text-body-md px-4 py-2.5 rounded-lg border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-duo-deep-blue transition-all"
                    id="company"
                    placeholder="Apex Developments / Dockside Sector 4"
                    required
                    type="text"
                  />
                </div>
                <div className="space-y-1">
                  <label
                    className="font-label-md text-label-md text-on-surface flex items-center justify-between"
                    htmlFor="service-area"
                  >
                    <span>Service Area Required</span>
                    <span className="text-error font-body-sm">*</span>
                  </label>
                  <select
                    className="w-full bg-surface-canvas text-on-surface font-body-md text-body-md px-4 py-2.5 rounded-lg border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-duo-deep-blue transition-all cursor-pointer"
                    id="service-area"
                    defaultValue=""
                    required
                  >
                    <option disabled value="">
                      Select service discipline
                    </option>
                    <option value="cdm">CDM 2015 Management</option>
                    <option value="audit">Statutory Compliance Audit</option>
                    <option value="inspection">Site Safety Inspections</option>
                    <option value="inductions">
                      Workforce Inductions &amp; Training
                    </option>
                    <option value="rams">Risk Assessments &amp; RAMS</option>
                    <option value="investigation">
                      Accident Investigation (RIDDOR)
                    </option>
                    <option value="tracker">
                      HSE Web Tracker™ Cloud Demo
                    </option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label
                  className="font-label-md text-label-md text-on-surface flex items-center justify-between"
                  htmlFor="message"
                >
                  <span>Project Details / Message</span>
                  <span className="text-error font-body-sm">*</span>
                </label>
                <textarea
                  className="w-full bg-surface-canvas text-on-surface placeholder:text-outline font-body-md text-body-md px-4 py-2.5 rounded-lg border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-duo-deep-blue transition-all"
                  id="message"
                  placeholder="Outline project scope, construction phase milestones, existing F10 notification status, or statutory audit requirements..."
                  required
                  rows={5}
                ></textarea>
              </div>

              <div className="pt-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-md">
                <button
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-duo-deep-blue to-duo-bright-blue text-white font-label-md text-label-md rounded-xl shadow-lg hover:brightness-110 transition-all cursor-pointer"
                  type="submit"
                >
                  <span>Send Message</span>
                  <span className="material-symbols-outlined text-[18px]">
                    send
                  </span>
                </button>
                <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-compliance-green text-[18px]">
                    verified_user
                  </span>
                  <span>Confidential project disclosure protected</span>
                </div>
              </div>

              {formSubmitted && (
                <div className="p-space-md bg-surface-container text-on-surface rounded-lg shadow-sm border border-compliance-green/40">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-compliance-green text-[24px]">
                      task_alt
                    </span>
                    <div>
                      <p className="font-headline-sm text-headline-sm">
                        Submission Transmitted
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Your documentation has been logged to the dispatch desk. An appointed HSE Specialist will reach out within the statutory 24-hour window.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-space-lg">
            <div className="bg-duo-navy text-white rounded-xl shadow-xl p-space-xl relative overflow-hidden">
              <div className="relative z-10 space-y-space-lg">
                <div>
                  <div className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-widest font-bold">
                    Operational Registry
                  </div>
                  <h3 className="font-headline-md text-headline-md text-white mt-space-xs">
                    Direct Contact
                  </h3>
                </div>

                <div className="space-y-space-md">
                  <div className="flex items-start gap-space-md">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-secondary-fixed">
                      <span className="material-symbols-outlined text-[20px]">
                        location_on
                      </span>
                    </div>
                    <div>
                      <div className="font-label-md text-label-md text-white font-semibold">
                        Registered Office
                      </div>
                      <address className="not-italic font-body-sm text-body-sm text-secondary-fixed/80 mt-0.5 leading-relaxed">
                        105 Boundary Street
                        <br />
                        Liverpool, England
                        <br />
                        UK, L5 9YJ
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-space-md">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-secondary-fixed">
                      <span className="material-symbols-outlined text-[20px]">
                        alternate_email
                      </span>
                    </div>
                    <div>
                      <div className="font-label-md text-label-md text-white font-semibold">
                        Statutory Email
                      </div>
                      <a
                        className="font-body-sm text-body-sm text-secondary-fixed hover:text-white transition-colors block mt-0.5 underline underline-offset-4"
                        href="mailto:info@duosafety.co.uk"
                      >
                        info@duosafety.co.uk
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-space-md">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-secondary-fixed">
                      <span className="material-symbols-outlined text-[20px]">
                        schedule
                      </span>
                    </div>
                    <div>
                      <div className="font-label-md text-label-md text-white font-semibold">
                        Advisory Hours
                      </div>
                      <p className="font-body-sm text-body-sm text-secondary-fixed/80 mt-0.5">
                        Monday – Friday
                        <br />
                        9:00 AM – 5:00 PM GMT
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-space-md bg-white/10 rounded-xl border border-white/15">
                  <div className="flex items-center justify-between mb-space-xs">
                    <div className="flex items-center gap-1.5 font-label-md text-label-md text-white font-semibold">
                      <span className="material-symbols-outlined text-compliance-green text-[18px]">
                        verified
                      </span>
                      Statutory Response SLA
                    </div>
                    <span className="px-2 py-0.5 rounded bg-compliance-green/20 text-compliance-green font-label-sm text-label-sm font-bold">
                      24 HR
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary-fixed/80 leading-snug">
                    Formal legal and technical evaluations guaranteed within 24 hours of receipt.
                  </p>
                </div>

                <div className="pt-1">
                  <a
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors font-label-md text-label-md border border-white/15"
                    href="https://www.linkedin.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 fill-current text-secondary-fixed"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.88 0-1.6.72-1.6 1.6s.72 1.6 1.6 1.6 1.6-.72 1.6-1.6-.71-1.6-1.6-1.6m1.39 10.74v-8.37H5.07v8.37h2.78z"></path>
                      </svg>
                      <span>Connect on LinkedIn</span>
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      open_in_new
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Liverpool Operations Base Card */}
            <div className="bg-surface-card rounded-xl shadow-md border border-surface-container p-space-md space-y-space-md">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">
                  Liverpool Operations Base
                </span>
                <span className="font-body-sm text-body-sm text-duo-deep-blue font-semibold">
                  Merseyside L5
                </span>
              </div>

              <div className="w-full h-40 bg-gradient-to-br from-duo-navy via-duo-deep-blue to-duo-bright-blue rounded-lg shadow-sm relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]"></div>
                <div className="relative z-10 bg-surface-card px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-on-surface font-label-md text-label-md">
                  <span className="material-symbols-outlined text-[18px] text-error">
                    pin_drop
                  </span>
                  <span>105 Boundary Street, L5 9YJ</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-space-sm pt-space-xs text-center font-body-sm text-body-sm">
                <div className="p-space-xs rounded bg-surface-container-low text-on-surface">
                  <span className="block font-headline-sm text-headline-sm font-bold text-duo-deep-blue">
                    M62 / M58
                  </span>
                  <span className="text-on-surface-variant font-label-sm text-label-sm">
                    Primary Corridor
                  </span>
                </div>
                <div className="p-space-xs rounded bg-surface-container-low text-on-surface">
                  <span className="block font-headline-sm text-headline-sm font-bold text-duo-bright-blue">
                    UK Wide
                  </span>
                  <span className="text-on-surface-variant font-label-sm text-label-sm">
                    Site Audits
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATUTORY PROTOCOL FRAMEWORK */}
      <section className="w-full bg-surface-container-low py-space-2xl px-margin">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-space-lg mb-space-lg">
            <div>
              <span className="font-label-sm text-label-sm text-duo-deep-blue uppercase tracking-widest font-bold">
                Standard Procedures
              </span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface mt-space-xs">
                Statutory Protocol Framework
              </h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-space-xs md:mt-0">
              Our standard client onboarding ensures continuous legal defensibility under UK Health and Safety legislation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            <div className="bg-surface-card p-space-lg rounded-xl shadow-sm border border-surface-container space-y-space-sm">
              <div className="w-10 h-10 rounded-lg bg-surface-container text-duo-deep-blue flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                01
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                Competence Assessment
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Immediate technical scoping against UK statutory requirements, project scale, and relevant duty-holder liabilities.
              </p>
            </div>
            <div className="bg-surface-card p-space-lg rounded-xl shadow-sm border border-surface-container space-y-space-sm">
              <div className="w-10 h-10 rounded-lg bg-surface-container text-duo-deep-blue flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                02
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                24-Hour SLA Brief
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Written formal deployment schedule, scope of audit, and appointed Principal Consultant documentation within 24 hours.
              </p>
            </div>
            <div className="bg-surface-card p-space-lg rounded-xl shadow-sm border border-surface-container space-y-space-sm">
              <div className="w-10 h-10 rounded-lg bg-surface-container text-duo-deep-blue flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                03
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                On-Site Execution
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Direct physical site inspection, RAMS verification, statutory notice inspection, and executive health and safety governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STATUTORY COMPLIANCE ADVISORY BAR */}
      <section className="w-full py-space-xl px-margin bg-surface-canvas">
        <div className="max-w-[1240px] mx-auto rounded-xl bg-surface-container p-space-lg shadow-sm border border-surface-container-high flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-lg bg-surface-card flex items-center justify-center text-duo-deep-blue shadow-sm shrink-0">
              <span className="material-symbols-outlined text-[28px]">
                gavel
              </span>
            </div>
            <div>
              <h5 className="font-headline-sm text-headline-sm text-on-surface">
                Statutory Compliance Advisory
              </h5>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                DUO Safety acts as retained advisors and Principal Designer coordinators under CDM 2015.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-space-sm shrink-0">
            <a
              className="px-6 py-2.5 bg-gradient-to-r from-duo-deep-blue to-duo-bright-blue text-white font-label-md text-label-md rounded-lg shadow hover:brightness-110 transition-all whitespace-nowrap"
              href="mailto:info@duosafety.co.uk?subject=Statutory%20Inquiry%20Brief"
            >
              Direct Dispatch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
