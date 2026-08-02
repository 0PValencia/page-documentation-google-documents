# Flujos académicos

El MCP incluye tools pensadas para monografías, tesis y trabajos con estilo APA 7.

## Flujo rápido (recomendado)

1. `generate_academic_document` — crea Doc con portada, estructura, APA e índice
2. Edita contenido con `insert_text` / `replace_text` (usa `get_document_structure` para índices)
3. `insert_citation` + `append_bibliography`
4. `repair_academic_document` si el LLM dejó capítulos o tablas rotas
5. `create_document_revision` — checkpoint `keepForever` en Drive

## Flujo por pasos

```text
create_document
  → create_academic_structure
  → format_academic_document
  → insert_table_of_contents
  → insert_citation / append_bibliography
  → repair_academic_document
```

## Tools clave

| Tool | Rol |
| --- | --- |
| `generate_academic_document` | One-shot: topic + type + pages |
| `create_academic_structure` | Portada centrada + secciones |
| `format_academic_document` | APA 7 real (márgenes 1", TNR 12, doble espacio…) |
| `insert_table_of_contents` | Regenera índice desde `HEADING_*` |
| `insert_citation` | Marcador APA / IEEE / Vancouver |
| `append_bibliography` | Entradas al final |
| `repair_academic_document` | Corrige fallos típicos de LLM |

## Tip de orquestación

Antes de formatear rangos concretos:

```text
get_document_structure → startIndex/endIndex → apply_format / apply_heading
```

Ver detalle en [Herramientas académicas](/herramientas/academicas).
