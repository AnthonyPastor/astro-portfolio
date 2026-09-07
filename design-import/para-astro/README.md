# Para portar al Astro

Tres archivos listos para copiar al repo `astro-portfolio`.

## 1. `public/robots.txt`

Copiar tal cual a `public/robots.txt`.

Permite explícitamente a GPTBot, ClaudeBot, PerplexityBot, Google-Extended,
Applebot-Extended y CCBot. Sin estas líneas algunos asistentes no leen el sitio
y responden de memoria (o inventan).

Ajustar la línea `Sitemap:` si no usás `@astrojs/sitemap`. Si no lo tenés
instalado, vale la pena: `npx astro add sitemap`.

## 2. `public/llms.txt`

Copiar tal cual a `public/llms.txt`.

Es el resumen en texto plano, sin markup ni JavaScript de por medio. Cuando
alguien le pasa tu link a un asistente, esto es lo más fácil de leer y citar
correctamente. Mantenelo actualizado a mano cuando cambie tu experiencia — es
el archivo que más rinde por línea escrita.

Convención opcional: agregar también `public/llms-full.txt` con el CV completo
si querés dar más detalle.

## 3. `src/components/Seo.astro`

Copiar a `src/components/Seo.astro` y usarlo en `src/layouts/Layout.astro`:

```astro
---
import Seo from "@/components/Seo.astro";
---
<html lang={Astro.currentLocale === "es" ? "es" : "en"}>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <Seo />
    <!-- resto del head -->
  </head>
```

Al pegarlo hay que **borrar de `Layout.astro` el `<title>`, el
`<meta name="description">`, el canonical y los Open Graph que ya tenga**, para
que no queden duplicados.

Puntos a revisar al portarlo:

- `SITE` está fijo en `https://anthony.pastor.dev`. Si preferís, cambialo por
  `Astro.site` y definí `site` en `astro.config.mjs`.
- El clúster `hreflang` asume las rutas `/` (inglés) y `/es/`. Si tu i18n usa
  otras rutas, corregí las tres líneas — un clúster que apunta a URLs
  inexistentes se ignora entero.
- Confirmá el nombre exportado de `getYearsOfExperience` en
  `src/utils/getYearsOfExperience.ts` y el de `getI18N`.
- El `<html lang>` es lo que más pesa para un modelo que decide en qué idioma
  está el contenido, y hoy tu layout no lo cambia por locale.

## Lo que ya está bien en tu Astro

El contenido se renderiza en el servidor, así que un fetcher que no ejecuta
JavaScript ve todo el texto. Eso es la mitad de la batalla y ya lo tenés.
Mantené la traducción en el servidor con rutas por idioma; no la pases a un
toggle en cliente.
