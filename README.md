# DUO Safety Consultancy — Official Corporate Web Platform (`duosafety.co.uk`)

Authoritative digital presence for **DUO Safety Consultancy Ltd**, a UK-based Occupational Health & Safety (HSE) and **CDM 2015** Compliance Consultancy headquartered in **Liverpool, Merseyside (105 Boundary Street, L5 9YJ)** and operating nationwide across Great Britain.

---

## 🏛️ Architecture & Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Language:** TypeScript (`strict` mode)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/turbopack` + custom `Precision Safety & Compliance` design tokens)
- **Typography:** `Outfit` / `Space Grotesk` (Display & Structural Headings) + `Inter` (Technical Body & Statutory Documentation) via `next/font/google`
- **Icons:** Google Material Symbols Outlined
- **Deployment & CI/CD:** GitHub (`main` branch) $\rightarrow$ **Vercel** Automatic Production Deployment

---

## 🎨 Brand Identity & Color System

| Token | Hex Code | Usage |
| :--- | :--- | :--- |
| `duo-deep-blue` (`secondary`) | `#0f5f96` | Primary Brand Deep Blue, Navigation, Core Badges |
| `duo-bright-blue` (`accent-electric`) | `#137dc5` | Primary Action CTAs, Interactive Highlights |
| `duo-navy` (`surface-dark`) | `#0a3c5f` | Authoritative Hero, Dark Sections & Corporate Footer |
| `compliance-green` | `#10B981` | Statutory Verification Badges, SLA Status Indicators |
| `surface-canvas` | `#F8FAFC` | Crisp Architectural Slate Canvas Background |

---

## 📄 Site Structure (App Router)

- **`/` (`app/page.tsx`) — Home:**
  - Industrial Grid Hero Section + 3 Statutory Metric Cards (`100% Statutory HSE Adherence`, `CDM 2015 Principal Specialists`, `Site-Ready Comprehensive Audits`)
  - Corporate Executive Overview
  - 4 Core Practice Domains
  - **HSE Web Tracker™ Platform** (9 Digital Governance Modules)
  - Multi-Industry Safe Operations (Construction & Civil, Manufacturing, Chemical & Process, Automotive)
- **`/about` (`app/about/page.tsx`) — About Us:**
  - Institutional Profile, Statutory Dutyholder Overview, Mission & Core Philosophy (`Zero Harm Benchmark`, `Statutory Absolute`, `Live Operational Reality`), Key Expertise Areas, and Why Choose DUO Safety.
- **`/services` (`app/services/page.tsx`) — Services Portfolio:**
  - Interactive React Category Filtering (`All 8 Services`, `CDM & Statutory`, `Site Inspections & Risk`, `Inductions & Training`, `Plant, Height & Incident`)
  - 8 Detailed Statutory Service Cards (`DUO-CDM-01` through `DUO-PLT-08`)
  - 4-Step Methodical Service Delivery Framework
  - CDM 2015 Dutyholder Regulatory Engagement Spectrum Table
- **`/location` (`app/location/page.tsx`) — Location & UK Coverage:**
  - Registered Facility Details (`105 Boundary Street, Liverpool, L5 9YJ`) & Transit Proximity
  - Interactive UK Geospatial Coverage Vector Map (Tier 1 Merseyside, Tier 2 North West Corridor, Tier 3 National UK)
  - Direct Site Visit & Meeting Dispatch Form
- **`/contact` (`app/contact/page.tsx`) — Contact & Dispatch:**
  - 24-Hour Urgent Statutory SLA Banner
  - Operational Instructions & Technical Inquiry Form
  - Registered Office Sidebar & Statutory Protocol Framework

---

## 🚀 Development & Deployment Workflow

```bash
# Install dependencies
npm install

# Run production build check locally
npm run build

# Push changes to trigger automatic Vercel deployment
git add .
git commit -m "Update DUO Safety web platform"
git push
```
