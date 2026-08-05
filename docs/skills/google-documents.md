# Skill: google-documents

Skill operativa para agentes que usan el MCP **Google Documents**.

Objetivo: Docs reales, bien formateados, sin inventar `documentId` ni títulos markdown.

## Cuándo activar

- Pedidos con Google Docs / Documents / `documentId` / enlace `docs.google.com`
- Crear o editar informes académicos **en** Docs
- Auditar o reparar un Doc existente vía MCP

## Reglas de oro

1. Toda tool exige `documentId` real (no inventar).
2. Índices solo de `get_document_structure`; tras cada mutación, **releer**.
3. Nunca escribir títulos con `#` / `##` en el cuerpo → usa `apply_heading`.
4. `pages` en `generate_academic_document` **no rellena** contenido.
5. No inventar URLs de imágenes ni bibliografía.

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
   → create_table / insert_diagram / search_images+insert_image
8. append_bibliography
9. insert_table_of_contents + repair_academic_document
10. read_document + count_words + enlace
```

## Densidad

- Varias escrituras por sección; evitar un `append_text` gigante.
- Cada ~400–600 palabras: subtítulo, lista, tabla o figura.
- Índice solo con `insert_table_of_contents`.

## apply_heading

- Solo sobre el párrafo-título corto.
- Nunca HEADING sobre cuerpo o bibliografía entera.

## Imágenes

```text
search_images → insert_image(insertUrl=<exacta>)
```

Si Docs no puede fetch: `rehostViaDrive=true`. Diagramas: `insert_diagram` o [diagram-studio](/complementos/diagram-studio).

## Combinar

Si el contenido es SI I / UAGRM / Angélica → leer también [informe-angelica](./informe-angelica).

Para QA de estructura → [academic-linter](/complementos/academic-linter).
