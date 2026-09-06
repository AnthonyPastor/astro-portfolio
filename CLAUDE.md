# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` / `npm start` — start the Astro dev server
- `npm run build` — type-check (`astro check`) then build for production; run this before considering a task done, since there is no separate lint/test script
- `npm run preview` — preview the production build locally
- `npm run astro -- <command>` — run arbitrary Astro CLI commands (e.g. `npm run astro -- add <integration>`)

There is no test suite and no linter configured in this repo.

## Architecture

This is an Astro portfolio site (`output: "server"`, deployed on Vercel via `@astrojs/vercel/serverless`, configured in `astro.config.mjs`), styled with Tailwind.

### Page structure / i18n

- Routing is Astro's built-in i18n: `defaultLocale: 'en'` with `prefixDefaultLocale: false`, and `es` as the other locale. `src/pages/index.astro` (English, unprefixed) and `src/pages/es/index.astro` both just render `<AppPage />` — all real content lives in `src/components/pages/AppPage.astro`, which composes the section components (`Hero`, `Experience`, `Projects`, `AboutMe`, `Contact`) inside `Layout.astro`.
- Copy is not hardcoded in components. `src/i18n/en.json` and `src/i18n/es.json` hold all strings, typed by `src/i18n/lang-interface.ts` (`LangInterface`). `getI18N({ currentLocale })` in `src/i18n/index.ts` picks the right JSON based on `Astro.currentLocale`. Every section component calls `getI18N` itself rather than receiving strings as props — when adding a new piece of UI copy, add the key to `LangInterface` and to **both** `en.json` and `es.json`, or type errors / `astro check` will fail.
- The `src/i18n/locales.astro` module (note: `.astro`, not `.ts`) exports `LOCALES` (locale metadata: code, href, name, flag icon) used by `LanguageSwitch.astro` to render the language-switch dropdown and build links between locale variants of the current page.
- Structured/repeated content that isn't pure translated text (project list with tags/images/links, work-experience entries) lives inline as arrays in the component itself (e.g. `PROJECTS` in `Projects.astro`, `EXPERIENCE` in `Experience.astro`), pulling only the translatable fields (titles, descriptions) from `i18n`. Add new projects/jobs by editing these arrays plus the corresponding `proj_N`/`work_N` i18n keys.

### Components

- `src/components/pages/AppPage.astro` is the single-page layout: it stacks `SectionContainer`-wrapped sections (`experience`, `projects`, `about-me`, `contact`) as anchor targets for the header nav.
- `src/components/header/Header.astro` renders the fixed nav and uses an `IntersectionObserver` (client-side `<script>`, re-registered on `astro:page-load` for View Transitions) to highlight the nav item matching the section currently in view.
- Icons are individual `.astro` components under `src/icons/` (one file per icon/logo), used as component references (e.g. `tag.icon` in `Projects.astro`, `locale.flag` in `LanguageSwitch.astro`) rather than a single icon-sprite/library.
- `Layout.astro` sets up the global `<head>`, dark theme, Onest variable font, and Astro `ViewTransitions`.

### Contact form

`Contact.astro` posts to itself (`Astro.request.method === "POST"` handled in the component frontmatter) and sends mail via `resend` using `RESEND_API_KEY` from `import.meta.env`. The submit button is currently `disabled` in the markup — re-enabling contact requires removing that attribute.

### Path alias

`@/*` maps to `src/*` (configured in `tsconfig.json`); use this alias for imports instead of relative paths, matching the existing codebase.
