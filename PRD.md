# Product Requirements Document (PRD)
## Project: Prashant Pal — Personal Portfolio Website (Apple-Inspired)

---

### 1. Overview & Executive Summary

* **Project Title**: Prashant Pal — Full Stack Developer & System Architect Portfolio
* **Target Role/Domain**: Senior / Full Stack Web Engineer (React, Next.js, Node.js, NestJS, Cloud Architecture)
* **Goal**: Build a high-converting, premium personal portfolio showcasing technical depth, enterprise-grade architecture, and quantifiable business impact.
* **Design Inspiration**: Apple (`apple.com/in`) Cupertino editorial aesthetic — full-viewport section rhythm, alternating monochromatic canvas, SF Pro typographic hierarchy, glassmorphism, and hardware-style UI telemetry mockups.

---

### 2. Target Audience & Personas

1. **Engineering Managers & Tech Leads**: Look for architecture patterns, distributed system understanding (NestJS, WebSocket, GeoIP), performance metrics, and clean code hygiene.
2. **Technical Recruiters / Talent Acquisition**: Seek rapid qualification: core tech stack (React, Node, Postgres, AWS), tenure, achievements, and frictionless contact paths.
3. **Clients & Founders**: Focus on reliability, speed, shipped product proof, and end-to-end delivery capabilities.

---

### 3. Core Objectives & Key Results (OKRs)

* **Objective 1: Establish High Engineering Authority**
  * *KR 1.1*: Display quantifiable production impact for all featured systems (e.g., 40% stability gain, 30% memory reduction, 15% fraud exposure mitigation).
  * *KR 1.2*: Visually communicate architecture maturity via realistic mockups and telemetry dashboards rather than generic stock imagery.
* **Objective 2: Maximize Recruiter & Client Conversion**
  * *KR 2.1*: Maintain 1-click access to direct communication (`mailto:palprashant156@gmail.com`, LinkedIn, GitHub, Resume).
  * *KR 2.2*: Guarantee sub-second perceived load time and pristine responsive readability across mobile and desktop.

---

### 4. Information Architecture & Page Structure

```
[Sticky Navbar] (Brandmark | About | Projects | Experience | Skills | Contact | CTA)
       │
       ▼
[1. Hero Section] (Headline, Core Value Prop, Primary CTA, Telemetry Pill Strip)
       │
       ▼
[2. Engineering Philosophy & Impact] (Pull-quote, Bio @ MediaNv Aidos, 4 Core Metric Bento Tiles)
       │
       ▼
[3. Featured Systems & Projects] (Full-bleed Apple showcase cards with interactive UI mockups)
   ├── 3.1 Digital Payment Fraud Monitoring System (Real-time telemetry, GeoIP, WebSockets)
   ├── 3.2 Doomscrolling Tracker Analytics App (MERN behavioral wellness dashboard)
   ├── 3.3 Daily Fuel Reservation Analytics (Logistics microservices & queue scheduling)
   └── 3.4 Quick Serve (High-concurrency on-demand contractor matching platform)
       │
       ▼
[4. Professional Experience Timeline] (MediaNv Aidos Pvt Ltd ➔ My Virtual Team)
       │
       ▼
[5. Capability Matrix & Technical Stack] (Frontend | Backend | Databases | Cloud & DevOps)
       │
       ▼
[6. Verified Credentials & Certifications Strip] (AWS Cloud, IBM Essentials, Pen Testing, Data Science)
       │
       ▼
[7. High-Conversion Contact CTA] (Apple-style "Let's build something great", Email chip, Social links)
       │
       ▼
[8. Cupertino Multi-Column Footer] (System Index, Core Architecture Stack, Legal & Sitemap)
```

---

### 5. Detailed Functional Specifications

#### 5.1 Navigation Header (Global Frame)
* **Visual**: Translucent frosted glass (`backdrop-blur-md`, subtle border-b `#2d2d30`/`#eaeaea`).
* **Elements**:
  * Brand wordmark ("Prashant Pal") on the left.
  * Anchor jump links: *About*, *Projects*, *Experience*, *Skills*, *Contact*.
  * Primary Action: High-contrast pill button ("Get in touch") anchored right.
* **Behavior**: Pinned sticky navigation with smooth scrolling behavior.

#### 5.2 Hero Showcase
* **Theme**: Deep space dark canvas (`#0e0e10` / `#131315`) with subtle radial ambient glow.
* **Content**:
  * Eyebrow badge: `FULL STACK ENGINEER & SYSTEM ARCHITECT`.
  * Headline: *"Prashant Pal."* (SF Pro Display bold, tight tracking).
  * Subheadline: *"Full Stack Developer — Building scalable web applications with React, Node.js & NestJS."*
  * CTAs: "View My Work" (filled accent blue pill `#0071e3`) + "palprashant156@gmail.com" secondary link.
  * Telemetry highlight pill: Quick proof-points (Backend Stability, Memory Overhead, Core Web Vitals).

#### 5.3 About & Core Performance Benchmarks
* **Theme**: Crisp high-contrast daylight canvas (`#ffffff`).
* **Content**:
  * Lead Statement: *"Speed is a feature. Reliability is the foundation."*
  * Bio: Focus on current tenure at MediaNv Aidos Pvt Ltd (Ahmedabad), microservices architecture, and mission-critical throughput.
  * 4 Stat Cards:
    1. **40%** Backend Stability (zero unhandled drop-offs under peak bursts).
    2. **30%** Memory Overhead Reduced (Node.js garbage collection & stream pipelines).
    3. **30%** User Engagement (sub-50ms reactive feedback).
    4. **40%** LCP Improvement (code splitting & edge hydration).

#### 5.4 Showcase Projects (System Deep-Dives)
* **Layout**: Alternating split layout (Text description + measurable impact metrics on one side, realistic high-fidelity telemetry / terminal / dashboard UI on the other).
* **Projects**:
  1. **Digital Payment Fraud Monitoring System**: Real-time telemetry, transaction risk graph, dynamic EMA filter, GeoIP, WebSockets (-15% fraud exposure).
  2. **Doomscrolling Tracker Analytics App**: Screen-time interception, circadian usage trends, behavioral interventions (+21% sustained retention).
  3. **Daily Fuel Reservation Analytics**: Automated invoice reconciliation, queue predictive analytics, pump allocation (+35% interactions).
  4. **Quick Serve Marketplace**: Geo-query matching, contractor direct booking, Stripe micro-payouts (+22% retention).

#### 5.5 Experience Timeline
* **Theme**: Studio Dark canvas (`#131315`).
* **Structure**: Clean vertical timeline with illuminated status node.
  * **MediaNv Aidos Pvt Ltd** (Dec 2025 – Present): Full Stack Engineer. Microservices, PostgreSQL scaling, automated CI/CD, AWS modernization.
  * **My Virtual Team** (May 2024 – Nov 2024): Full Stack Developer. SPAs in React, Express, MongoDB, multi-tenant UI component libraries.

#### 5.6 Technical Capability Matrix
* **4 Bento Categories**:
  * *Frontend*: React 19, Next.js, Angular, TypeScript, Tailwind CSS, HTML5/CSS3.
  * *Backend*: Node.js, NestJS, Express.js, REST APIs, WebSockets, JWT Auth.
  * *Databases*: PostgreSQL, MongoDB, Data Modeling, Query Plan Tuning, Index Optimization.
  * *Cloud & DevOps*: AWS (EC2, S3), Docker, GitHub Actions, Render, Vercel, Netlify.

#### 5.7 Contact Section & Cupertino Footer
* **Headline**: *"Let's build something great."*
* **Interactive Elements**:
  * One-click copy email chip (`palprashant156@gmail.com`).
  * Direct email trigger ("Send Email").
  * External profile pills (LinkedIn, GitHub).
* **Footer Columns**: Featured Systems, Core Engineering Stack, Connect & Dispatch, Copyright & Privacy.

---

### 6. Design System & Style Guide (Cupertino Editorial)

| Token | Specification / Value | Application |
|---|---|---|
| **Dark Canvas** | `#0e0e10` / `#131315` | Hero, Project 1 & 3, Experience, Footer |
| **Light Canvas** | `#ffffff` / `#f5f5f7` | About, Project 2 & 4, Capability Grid |
| **Accent Primary** | `#0071e3` (Apple Electric Blue) | CTAs, active states, pill buttons, metrics |
| **Typography** | Inter / SF Pro Display | Tight letter-spacing (`-0.03em`), bold headings |
| **Muted Copy** | `#86868b` (Dark) / `#6e6e73` (Light) | Subtext, labels, metadata, timestamps |
| **Border Radius** | 9999px (Pills) & 16px–24px (Cards) | Cupertino rounded cards & hardware mockups |
| **Glassmorphism** | `backdrop-blur-md` with 10% white/black border | Sticky navbar, floating status widgets |

---

### 7. Non-Functional & Technical Requirements

* **Responsiveness**: Mobile-first fluid breakdown (~390px mobile viewport up to 4K desktop).
* **Performance**: Lighthouse score ≥ 95 (Performance, Accessibility, SEO, Best Practices).
* **Accessibility (a11y)**: WCAG 2.1 AA compliant contrast ratios across both light and dark sections.
* **SEO**: OpenGraph meta tags, JSON-LD schema for Person / SoftwareEngineer profile, automated sitemap.
