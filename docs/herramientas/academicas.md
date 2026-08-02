# Académicas

Portada, APA 7, citas, índice y reparación de monografías.

| Herramienta | Descripción | Parámetros requeridos |
| --- | --- | --- |
| `append_bibliography` | Añade entradas bibliográficas al final del documento. | `documentId`, `entries` |
| `create_academic_structure` | Crea portada centrada (title/author/institution/date) + salto de página + secciones con encabezados reales para monografía, tesis o investigación. | `documentId`, `type` |
| `format_academic_document` | Aplica APA 7 real: márgenes 1", Times New Roman 12, doble espacio, Nivel 1 centrado+negrita, sangría 0.5", sangría francesa en bibliografía. Ideal tras repair_academic_document. | `documentId` |
| `generate_academic_document` | Crea Doc con portada, estructura, APA 7 e índice. Parámetros: topic, type, pages, author?, institution?. | `topic`, `type`, `pages` |
| `insert_citation` | Inserta un marcador de cita en el índice indicado (APA, IEEE o Vancouver). | `documentId`, `index`, `citationKey` |
| `insert_table_of_contents` | Regenera el índice a partir de encabezados HEADING_1–3. Por defecto reemplaza la sección «Índice» existente (replaceSection=true). | `documentId` |
| `repair_academic_document` | Corrige fallos típicos de documentos académicos generados por LLM: promueve 'Capítulo N' a HEADING_1, convierte tablas Markdown, elimina andamiaje vacío y encabezados vacíos, reordena capítulos desordenados y regenera el Índice. | `documentId` |
