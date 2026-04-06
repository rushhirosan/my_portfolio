# CLAUDE.md

## Project
This is a personal portfolio website built with Astro and deployed on Vercel.

The purpose of this site is:
- introduce my products
- provide links to my writing and social accounts
- keep the site simple, fast, and easy to maintain

## Product Goals
Prioritize:
1. clarity
2. simplicity
3. fast load time
4. maintainability

Avoid:
- over-designed UI
- heavy animations
- unnecessary dependencies
- complex state management

## Tech Stack
- Astro
- TypeScript
- CSS or minimal utility-based styling
- Vercel for deployment

## Architecture Rules
- Use Astro components by default
- Prefer static pages unless SSR is clearly necessary
- Keep pages thin and move reusable UI into components
- Keep layouts shared through `src/layouts`
- Keep presentational components in `src/components`
- Keep route files in `src/pages`

## Content Rules
The site should mainly contain:
- hero section
- product/project section
- writing section
- about section
- links section

If project data becomes repetitive, move it into a shared data file or Astro content collection.

## Design & Styling Rules
- Keep the visual style minimal and clean with generous spacing
- Prefer readable typography over visual effects
- Use subtle hover states only; avoid flashy gradients
- Maintain consistent card styles, section spacing, border radius, and shadows
- Keep colors limited
- Mobile-first responsive design
- Accessibility and readability come before aesthetics

## Coding Rules
- Use TypeScript where practical
- Prefer small reusable components
- Do not introduce a library unless necessary
- Do not duplicate markup if it can be componentized
- Keep code easy for a solo developer to update later
- Favor explicit props and simple interfaces

## Performance Rules
- Minimize client-side JavaScript
- Prefer Astro islands only when interaction is actually needed
- Optimize images
- Avoid unnecessary third-party scripts

## Deployment Rules
- The site is deployed on Vercel
- Prefer implementation choices that work cleanly on Vercel
- Keep environment variables minimal
- If SSR is introduced, explain why in comments or PR notes

## When Making Changes
When editing this project:
- preserve the simple portfolio direction
- do not redesign the whole site unless asked
- make the smallest clean change that solves the problem
- explain important structural decisions briefly