# Skill: informe-angelica

Skill de **contenido + formato** para informes académicos SI I / INF 342 (UAGRM, estilo Angélica).

No basta con “mucho texto”: el Doc debe verse como informe universitario (carátula, índice clicable, tablas, figuras).

En Google Docs: **obligatorio** combinar con [google-documents](./google-documents).

## Cuándo activar

- Informe Angélica / SI I / INF 342 / perfil de proyecto
- EduGestión-like, Ishikawa, casos de uso, UML en Docs

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
| Casi sin tablas/figuras | Cuotas (≥20 tablas / ≥25 figuras en informe completo) |
| Inventar datos de portada | Preguntar requisitos |

## Fase 0 — Intake (antes de redactar)

Preguntar si falta:

1. **Modo**: por partes (recomendado) | todo el informe  
2. **Portada**: título, universidad, grupo, integrantes, materia, docente, gestión, logo, colores  
3. **Alcance**: dominio, entrevista, capítulos, extensión, fuentes  

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

## Definition of Done (informe completo)

- [ ] Carátula con datos reales  
- [ ] Índice automático regenerado  
- [ ] Jerarquía H1/H2/H3 coherente  
- [ ] ≥ 20 tablas  
- [ ] ≥ 25 imágenes/diagramas insertados  
- [ ] Ishikawa + CU + clases (+ secuencia/actividad/despliegue)  
- [ ] Bibliografía APA  
- [ ] `format_academic_document` / `repair_academic_document`  
- [ ] Entregar enlace  

## MCP útiles

| Necesidad | MCP |
| --- | --- |
| Docs | [google-documents-mcp](/guia/introduccion) |
| UML / Ishikawa | [diagram-studio](/complementos/diagram-studio) |
| Pantallas | [app-screenshot](/complementos/app-screenshot) |
| ER desde Postgres | [db-introspector](/complementos/db-introspector) |
| Gráficos | [chart-from-data](/complementos/chart-from-data) |
| Citas | [citation-lab](/complementos/citation-lab) |
| QA estructura | [academic-linter](/complementos/academic-linter) |
