# Prompts y resources

Desde **`@0pvalencia/google-documents-mcp@0.6.4`** el servidor no solo expone tools: también registra **resources** (guías de solo lectura) y **prompts** (plantillas parametrizadas) para que otros agentes orquesten bien los informes largos.

## Por qué importan

`generate_academic_document({ pages: 20 })` **no escribe 20 páginas**. Solo crea portada, secciones, APA 7 e índice. El contenido hay que rellenarlo capítulo a capítulo. Los prompts/resources enseñan ese flujo.

## Resources

URI base: `google-documents://guides/…`

| Resource | URI | Qué aporta |
| --- | --- | --- |
| Playbook informes largos | `…/long-report-playbook` | Presupuesto de palabras, fases A–D, checkpoints |
| Orquestación | `…/tool-orchestration` | Orden de tools (estructura → mutación → verificar) |
| Anti-patrones | `…/anti-patterns` | Errores que rompen Docs |
| Catálogo | `…/tools-overview` | Mapa de categorías |

En clientes que soporten resources MCP, el agente puede leerlos con `resources/read` antes de actuar.

## Prompts

| Prompt | Args principales | Uso |
| --- | --- | --- |
| `long_academic_report` | topic, type, pages, author? | Informe largo desde cero |
| `fill_report_to_length` | documentId, pages | Llenar un scaffold existente |
| `expand_section` | documentId, sectionHeading, targetWords | Ampliar un capítulo |
| `repair_broken_report` | documentId | Reparar TOC/headings/tablas |
| `safe_edit` | documentId, task | Edición puntual segura |

`type` acepta: `monograph` | `thesis` | `research`.

## Cómo usarlos en un cliente

1. Lista prompts del servidor MCP (UI de prompts / `prompts/list`).
2. Elige `long_academic_report` e introduce topic + pages.
3. El cliente inyecta el mensaje del prompt; el agente sigue las instrucciones y llama tools.
4. Opcional: adjunta el resource `long-report-playbook` al contexto.

## Regla de oro para ~20 páginas

1. Scaffold con `generate_academic_document`
2. `count_words` + presupuesto por sección (~320 palabras/página × N)
3. Ampliar **una sección por ciclo** hasta el presupuesto
4. `repair_academic_document` + índice + revisión final
