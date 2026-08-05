# Skill: informe-angelica

Skill de **contenido + formato** para informes académicos SI I / INF 342 (UAGRM, estilo Angélica).

No basta con “mucho texto”: el Doc debe verse como informe universitario (carátula, índice clicable, tablas, figuras).

En Google Docs: **obligatorio** combinar con [google-documents](./google-documents) y, cuando estén activos, la [suite de complementos](/complementos/).

## Cuándo activar

- Informe Angélica / SI I / INF 342 / perfil de proyecto
- EduGestión-like, Ishikawa, casos de uso, UML en Docs

## Suite MCP (obligatoria para cuotas visuales)

| Necesidad | Paquete npm | Tools |
| --- | --- | --- |
| Docs | `@0pvalencia/google-documents-mcp` | headings, TOC, tablas, `insert_diagram`, `insert_image` |
| UML / PlantUML / DOT / D2 | `@0pvalencia/diagram-studio-mcp` | `render_diagram` → PNG → Doc |
| Imágenes libres | `@0pvalencia/image-lab-mcp` | `search_images` → `insertUrl` |
| Pantallas UI | `@0pvalencia/app-screenshot-mcp` | `capture_url` / `capture_with_login` |
| ER Postgres | `@0pvalencia/db-introspector-mcp` | `er_dot` → diagram-studio |
| Gráficos | `@0pvalencia/chart-from-data-mcp` | `render_chart` |
| Citas APA 7 | `@0pvalencia/citation-lab-mcp` | `search_works`, `format_doi_apa7` |
| QA estructura | `@0pvalencia/academic-linter-mcp` | `lint_structure`, placeholders |

**Regla:** renderizar ≠ entregar. Todo PNG/APA/lint debe materializarse o corregirse en el Doc.

Detalle de pipelines en la skill local: `references/mcp-suite.md`.

## Benchmarks (informes buenos)

- **7 k–13 k palabras** + **31–80 imágenes** + **24–41 tablas** + TOC real
- Densidad típica: ~1 imagen / 160–260 palabras y ~1 tabla / 190–540 palabras

Un Doc largo **sin** esa densidad visual sigue siendo informe “malo”.

## Evitar

| Síntoma | En su lugar |
| --- | --- |
| Pared de párrafos | H2/H3, listas, tablas |
| Índice pegado como texto | `insert_table_of_contents` |
| Todo en HEADING_1 | H1 capítulo, H2 sección, H3 sub |
| Casi sin tablas/figuras | Cuotas (≥20 tablas / ≥25 figuras) + suite MCP |
| Inventar datos de portada | Preguntar requisitos |
| Diagrama solo en `/tmp` | `insert_image` / `insert_diagram` |

## Fase 0 — Intake (antes de redactar)

Preguntar si falta:

1. **Modo**: por partes (recomendado) | todo el informe  
2. **Portada**: título, universidad, grupo, integrantes, materia, docente, gestión, logo, colores  
3. **Alcance**: dominio, entrevista, capítulos, extensión, fuentes  
4. **Suite**: ¿URL del prototipo? ¿`DATABASE_URL`? ¿DOI/fuentes?

Sin datos mínimos de portada → **no crear el Doc todavía**.

## Estructura canónica

```text
PORTADA
ÍNDICE (auto)
1. PERFIL
2. ELEMENTOS DEL SISTEMA
3. TECNOLOGÍA
4. DISEÑO DE DATOS / MODELO DE DOMINIO
5. MODELO DE NEGOCIO
6. MÉTODO ISHIKAWA
7. CAPTURA DE REQUISITOS
8. ANÁLISIS
9. DISEÑO
10. IMPLEMENTACIÓN / PRUEBAS
CONCLUSIONES · RECOMENDACIONES · BIBLIOGRAFÍA · ANEXOS
```

## Flujo con suite

```text
Intake → Doc + carátula + TOC
Por sección: prosa + tablas + (diagram-studio | chart | screenshot | db) → insert_image
Cierre: citation-lab → bib · academic-linter → corregir · TOC final · enlace
```

## Definition of Done (informe completo)

- [ ] Carátula con datos reales  
- [ ] Índice automático regenerado  
- [ ] Jerarquía H1/H2/H3 coherente  
- [ ] ≥ 20 tablas  
- [ ] ≥ 25 imágenes/diagramas **insertados**  
- [ ] Ishikawa + CU + clases (+ secuencia/actividad/despliegue)  
- [ ] Bibliografía APA (citation-lab o fuentes reales)  
- [ ] `format_academic_document` / `repair_academic_document`  
- [ ] `academic-linter` sin errores bloqueantes  
- [ ] Entregar enlace  

## MCP útiles (docs del sitio)

| Necesidad | Guía |
| --- | --- |
| Docs | [google-documents-mcp](/guia/introduccion) |
| UML / Ishikawa | [diagram-studio](/complementos/diagram-studio) |
| Imágenes libres | [image-lab](/complementos/image-lab) |
| Pantallas | [app-screenshot](/complementos/app-screenshot) |
| ER desde Postgres | [db-introspector](/complementos/db-introspector) |
| Gráficos | [chart-from-data](/complementos/chart-from-data) |
| Citas | [citation-lab](/complementos/citation-lab) |
| QA estructura | [academic-linter](/complementos/academic-linter) |
