# Skill `web-design-guidelines`

Skill de [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) que revisa UI contra las [Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md) (a11y, focus, motion, tipografía, touch, dark mode).

## Cuándo usarla

Antes de publicar cambios visuales en la docs (o cualquier frontend): focus visible, `prefers-reduced-motion`, skip link, contraste hover, `text-wrap: balance` en títulos, `…` tipográfico, etc.

## Instalación

```bash
npx skills add vercel-labs/agent-skills@web-design-guidelines
```

## Checklist aplicado en esta docs

| Área | Cambio en el tema |
| --- | --- |
| Acceso por teclado | Skip link «Saltar al contenido» |
| Focus | Outline brand en links/botones (`:focus-visible`) |
| Motion | Respeto a `prefers-reduced-motion` |
| Tipografía | `text-wrap: balance` / `pretty`; `tabular-nums` en tablas |
| Anchors | `scroll-margin-top` bajo la nav sticky |
| Touch | `touch-action: manipulation`; tap highlight controlado |
| Safe areas | `env(safe-area-inset-*)` en nav/footer |
| Dark | `color-scheme` light/dark; inputs nativos legibles |
| i18n | `translate: no` en `code` (nombres de paquetes) |

## Uso típico

Pide al agente: «revisa la UI de `docs/.vitepress` con web-design-guidelines» y aplica hallazgos priorizando a11y y motion.
