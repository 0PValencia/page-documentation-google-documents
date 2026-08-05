# Skill: google-documents

Skill operativa para agentes que usan el MCP **@0pvalencia/google-documents-mcp** y la suite complementaria `@0pvalencia/*-mcp`.

Objetivo: Docs reales, bien formateados, sin inventar `documentId` ni títulos markdown.

## Cuándo activar

- Pedidos con Google Docs / Documents / `documentId` / enlace `docs.google.com`
- Crear o editar informes académicos **en** Docs
- Auditar o reparar un Doc existente vía MCP
- Orquestar visuales/citas/lint de la suite hacia un Doc

## Reglas de oro

1. Toda tool de Docs exige `documentId` real (no inventar).
2. Índices solo de `get_document_structure`; tras cada mutación, **releer**.
3. Nunca escribir títulos con `#` / `##` en el cuerpo → usa `apply_heading`.
4. `pages` en `generate_academic_document` **no rellena** contenido.
5. No inventar URLs de imágenes ni bibliografía.
6. Artefacto de la suite (PNG/APA/lint) ≠ Doc: hay que insertar o corregir.

## Flujo canónico

```text
1. Intake (si es Angélica → skill informe-angelica)
2. create_document → documentId + URL
3. Carátula + salto de página
4. create_academic_structure O headings reales
5. insert_table_of_contents
6. format_academic_document (APA 7)
7. Por sección:
   get_document_structure → insert/append (sin #) → apply_heading
   → create_table
   → diagram-studio / insert_diagram / chart / screenshot / db-ER
   → insert_image
8. citation-lab → append_bibliography
9. academic-linter → repair + TOC
10. read_document + count_words + enlace
```

## Densidad

- Varias escrituras por sección; evitar un `append_text` gigante.
- Cada ~400–600 palabras: subtítulo, lista, tabla o figura.
- Índice solo con `insert_table_of_contents`.

## apply_heading

- Solo sobre el párrafo-título corto.
- Nunca HEADING sobre cuerpo o bibliografía entera.

## Imágenes y diagramas

```text
image-lab.search_images (o Docs search_images) → insert_image(insertUrl)
insert_diagram          → Mermaid corto
diagram-studio.render_diagram → PNG → insert_image (PlantUML/DOT/D2)
app-screenshot.capture_* → PNG → insert_image
chart-from-data.render_chart → PNG → insert_image
```

Si Docs no puede fetch: `rehostViaDrive=true`.

## Suite complementaria

| MCP | Guía |
| --- | --- |
| diagram-studio | [complementos/diagram-studio](/complementos/diagram-studio) |
| image-lab | [complementos/image-lab](/complementos/image-lab) |
| app-screenshot | [complementos/app-screenshot](/complementos/app-screenshot) |
| db-introspector | [complementos/db-introspector](/complementos/db-introspector) |
| chart-from-data | [complementos/chart-from-data](/complementos/chart-from-data) |
| citation-lab | [complementos/citation-lab](/complementos/citation-lab) |
| academic-linter | [complementos/academic-linter](/complementos/academic-linter) |

## Combinar

Si el contenido es SI I / UAGRM / Angélica → leer también [informe-angelica](./informe-angelica).

Para QA de estructura → [academic-linter](/complementos/academic-linter).
