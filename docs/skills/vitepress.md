# Skill `vitepress`

Skill de [Anthony Fu / antfu/skills](https://github.com/antfu/skills) para VitePress 1.x: configuración, tema por defecto, Markdown con Vue, búsqueda y despliegue.

## Cuándo usarla

Al editar `page-google-documents` (o cualquier sitio VitePress): `config.mts`, tema custom, CSS variables, slots de layout, clean URLs, search local.

## Instalación

```bash
npx skills add antfu/skills@vitepress
```

En Cursor suele quedar en `~/.agents/skills/vitepress` (y se puede copiar a `~/.cursor/skills/vitepress`).

## Qué aporta a esta docs

- Extender el tema en `docs/.vitepress/theme/` (`index.ts` + `custom.css`)
- Brand tokens (`--vp-c-brand-*`), hero y dark mode
- Slot `layout-top` (p. ej. skip link)
- Referencias en `references/` (config, routing, theme, deploy)

## Relación con el sitio

Esta documentación aplica un tema custom (marca teal/ink, `prefers-reduced-motion`, `scroll-margin` en headings, focus visible, safe-area). La skill evita reinventar la API de VitePress al seguir iterando.
