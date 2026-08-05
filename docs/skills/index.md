# Skills de agente

Además de los MCP (tools/prompts/resources), hay **Agent Skills** que enseñan al modelo *cómo* orquestar informes de calidad.

Las skills no reemplazan a los servidores MCP: los **dirigen**.

## Catálogo

| Skill | Cuándo usarla | Guía |
| --- | --- | --- |
| `google-documents` | Crear/editar Docs vía MCP (índices, headings, TOC, imágenes) | [google-documents](./google-documents) |
| `informe-angelica` | Informes SI I / INF 342 (UAGRM, estilo Angélica) | [informe-angelica](./informe-angelica) |
| `vitepress` | Configurar y personalizar esta documentación (tema, Markdown) | [vitepress](./vitepress) |
| `web-design-guidelines` | Revisar UX/a11y de la UI (focus, motion, tipografía) | [web-design-guidelines](./web-design-guidelines) |

## Cómo se combinan

```text
informe-angelica  →  qué escribir y cómo debe verse
google-documents  →  cómo llamar tools (documentId, índices, TOC)
MCP complementarios →  linter, diagramas, capturas, citas, DB
google-documents-mcp →  materializar en el Doc
```

## Instalación en Cursor

Copia las carpetas de skill a tu directorio de skills del agente (p. ej. `~/.cursor/skills/` o el path que use tu runtime):

- `google-documents/` (`SKILL.md` + `references/`)
- `informe-angelica/` (`SKILL.md` + `references/`)
- `vitepress/` y `web-design-guidelines/` (UX de esta docs; vía `npx skills`)

El agente las activa por `description` cuando el pedido coincide (Google Docs, informe Angélica, SI I, VitePress, revisión UI, etc.).

## Relación con prompts MCP

Desde **0.6.4**, el propio `@0pvalencia/google-documents-mcp` registra prompts (`long_academic_report`, `expand_section`, …) y resources (`google-documents://guides/…`).

| Capa | Rol |
| --- | --- |
| Skill | Política editorial + checklist del agente |
| Prompt MCP | Plantilla parametrizada inyectada por el cliente |
| Resource MCP | Playbook de solo lectura |
| Tools | Acciones sobre Docs / complementos |

Ver también [Prompts y resources](/guia/prompts-resources).
