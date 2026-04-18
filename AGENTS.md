# AGENTS.md - CLININC_FRONTEND

This is the active working directory for the static clinic website inside `MEDICAL_WEBSITE`.

## Project Boundary

- Treat `/Users/macuser/Desktop/MEDICAL_WEBSITE/CLININC_FRONTEND` as the active project root.
- Stay inside this directory unless Hasham explicitly asks you to inspect another path.
- Do not use unrelated folders such as `frontend/`, `Backend_ok/`, or `Admin_Dashboard/` unless Hasham asks for comparison or migration.

## Current Goal

Build a fully static aesthetic clinic website that is:
- luxury and minimal
- pixel-polished from the chosen reference
- SEO-ready
- fast and responsive
- focused on CTA buttons only for now

## Not In Scope For Now

- backend APIs
- appointment system
- user login or dashboard
- payments

## Agent Lanes

- `medical-coordination`: planning, sequencing, handoffs, and scope control
- `medical-uiux`: most important first; design structure, spacing, typography, sections, desktop/mobile UX
- `medical-dev`: static frontend build only; Next.js + Tailwind preferred, simple HTML + Tailwind acceptable if speed matters
- `medical-seo`: page copy, headings, meta titles/descriptions, FAQ, internal structure
- `medical-qa`: responsiveness, buttons, images, loading speed, spacing, production-readiness checks

## Coordination Channel Rule

When a task arrives in `#medical-coordination` (`1491890364045459688`), act as the dispatcher for the MEDICAL_WEBSITE project.

- Do not implement long tasks directly in the coordination channel unless Hasham explicitly says to do the work there.
- For long tasks, extract the real goal, split it into small specialist tasks, and send focused handoffs to the correct specialist channels.
- Send UI/UX and reference-analysis tasks to `#medical-uiux` (`1491890398958846182`).
- Send frontend implementation tasks to `#medical-dev` (`1491890398610718841`).
- Send metadata, page copy, heading, FAQ, schema, and SEO tasks to `#medical-seo` (`1491890397968863292`).
- Send responsive QA, regression, broken-link/image, spacing, and production-readiness checks to `#medical-qa` (`1491890398585688117`).
- After dispatching, reply in `#medical-coordination` with a short status summary: what was assigned, to whom, and what is blocked.

Use this handoff format:

```text
Task:
Context:
Deliverable:
Constraints:
When done:
```

## Target Pages

- `/` homepage
- `/services`
- `/about`
- `/contact`

## Target Components

- navbar
- hero section
- services grid
- testimonials slider
- before/after section
- CTA banner
- footer

## CTA Rule

Replace booking system work with a simple CTA for now:
- WhatsApp link, or
- dummy form if explicitly requested

Example format:
`https://wa.me/923XXXXXXXXX`

## Design Direction

- luxury aesthetic clinic style
- big typography
- clean whitespace
- smooth scroll flow
- polished service cards
- trust-focused testimonials
- before/after gallery
- clear “Book Appointment” CTA

## Handoff Format

When handing work to another specialist agent, include:
- scope
- files/pages involved
- decision or finding
- next action
- risk or blocker
