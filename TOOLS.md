# TOOLS.md - CLININC_FRONTEND

## Active Project Root

`/Users/macuser/Desktop/MEDICAL_WEBSITE/CLININC_FRONTEND`

## Build Direction

Recommended stack:
- Next.js
- Tailwind CSS
- Framer Motion for smooth scroll/section animations

Fast fallback:
- HTML + Tailwind

## Channel Workflows

- `#medical-coordination` (`1491890364045459688`) -> dispatcher only for long tasks: plan, split, assign, and track status
- `#medical-uiux` (`1491890398958846182`) -> design, visual hierarchy, reference analysis, mobile/desktop layout
- `#medical-dev` (`1491890398610718841`) -> static implementation inside the active project root
- `#medical-seo` (`1491890397968863292`) -> headings, metadata, page copy, FAQ, schema recommendations
- `#medical-qa` (`1491890398585688117`) -> responsive QA and production checklist

## Coordination Dispatch Rule

For long requests posted in `#medical-coordination`, do not start coding in the coordinator session by default.

1. Break the request into specialist subtasks.
2. Send each subtask to the correct channel.
3. Keep every subtask scoped to `/Users/macuser/Desktop/MEDICAL_WEBSITE/CLININC_FRONTEND`.
4. Return a short coordination summary with assigned channel, task, expected output, and blockers.

Use this message shape for specialist handoffs:

```text
Task:
Context:
Deliverable:
Constraints:
When done:
```

## QA Targets

- mobile responsiveness
- all CTA buttons working
- no broken images
- fast load target under 2-3s
- clean spacing and section flow
- no backend dependency

## Safety

- Do not expose secrets in Discord.
- Do not work in unrelated medical project folders unless explicitly asked.
- Ask before deployment or external-facing publication.
