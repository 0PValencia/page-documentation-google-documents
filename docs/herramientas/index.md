# Herramientas MCP (Google Documents)

Este índice refleja el volcado en vivo del servidor MCP **Google Documents** (`@0pvalencia/google-documents-mcp@0.6.3`). Hay **107** herramientas registradas.

## Por categoría

| Categoría | Herramientas | Enlace |
| --- | ---: | --- |
| Documentos y Drive | 33 | [documentos](./documentos) |
| Edición de texto | 10 | [edicion](./edicion) |
| Formato y estructura | 56 | [formato](./formato) |
| Académicas | 7 | [academicas](./academicas) |

> **Nota:** `mcp_auth` no aparece en el índice alfabético; es la herramienta de autenticación del conector MCP y no forma parte del API de documentos.

## Índice alfabético

| Herramienta | Descripción | Parámetros requeridos |
| --- | --- | --- |
| `append_bibliography` | Añade entradas bibliográficas al final del documento. | `documentId`, `entries` |
| `append_text` | Añade texto al final de un documento de Google Docs. | `documentId`, `text` |
| `apply_format` | Aplica negrita, cursiva, tachado, enlace (linkUrl), fuente, tamaño, alineación, color, interlineado, espaciado y sangría a un rango. Usa get_document_structure para índices. | `documentId`, `startIndex`, `endIndex` |
| `apply_heading` | Aplica TITLE, HEADING_1, HEADING_2, HEADING_3 o NORMAL_TEXT a un rango. | `documentId`, `startIndex`, `endIndex`, `style` |
| `clear_formatting` | Resetea textStyle (*) y párrafo a NORMAL_TEXT. | `documentId`, `startIndex`, `endIndex` |
| `copy_content` | Extrae texto de un rango (sin clipboard SO). | `documentId`, `startIndex`, `endIndex` |
| `count_words` | Estadísticas de caracteres/palabras/párrafos (cliente sobre documents.get). | `documentId` |
| `create_academic_structure` | Crea portada centrada (title/author/institution/date) + salto de página + secciones con encabezados reales para monografía, tesis o investigación. | `documentId`, `type` |
| `create_document` | Crea un documento vacío de Google Docs con el título indicado. | `title` |
| `create_document_revision` | Marca la revisión actual del documento como keepForever (punto de control en Drive). | `documentId` |
| `create_drive_comment` | Drive comments.create. | `documentId`, `content` |
| `create_footer` | createFooter DEFAULT; opcionalmente escribe text. | `documentId` |
| `create_footnote` | createFootnote en el índice; opcionalmente rellena text. | `documentId`, `index` |
| `create_header` | createHeader DEFAULT; opcionalmente escribe text en el header. | `documentId` |
| `create_named_range` | createNamedRange sobre un rango de índices. | `documentId`, `name`, `startIndex`, `endIndex` |
| `create_paragraph_bullets` | Aplica createParagraphBullets al rango (BULLET_* o NUMBERED_* presets de Docs API). | `documentId`, `startIndex`, `endIndex` |
| `create_permission` | Drive permissions.create (incl. transferOwnership). | `documentId`, `type`, `role` |
| `create_shortcut` | Drive files.create shortcut. | `documentId` |
| `create_table` | Inserta una tabla en el índice indicado. Pasa data:[[celda,...],...] para rellenar celdas (obligatorio si quieres contenido, no solo la grilla vacía). | `documentId`, `rows`, `columns`, `index` |
| `cut_content` | Copia texto del rango y luego deleteContentRange (solo texto plano). | `documentId`, `startIndex`, `endIndex` |
| `delete_document` | Mueve un documento a la papelera de Google Drive. | `documentId` |
| `delete_document_permanently` | Drive files.delete (irreversible). | `documentId` |
| `delete_drive_comment` | Drive comments.delete. | `documentId`, `commentId` |
| `delete_footer` | deleteFooter por footerId. | `documentId`, `footerId` |
| `delete_header` | deleteHeader por headerId. | `documentId`, `headerId` |
| `delete_named_range` | deleteNamedRange por id o por name. | `documentId` |
| `delete_paragraph_bullets` | Elimina bullets del rango (deleteParagraphBullets). | `documentId`, `startIndex`, `endIndex` |
| `delete_permission` | Drive permissions.delete. | `documentId`, `permissionId` |
| `delete_table_column` | deleteTableColumn. | `documentId`, `tableStartIndex`, `columnIndex` |
| `delete_table_row` | deleteTableRow. | `documentId`, `tableStartIndex`, `rowIndex` |
| `delete_text` | Elimina el contenido entre startIndex y endIndex (índices UTF-16 del Docs API). | `documentId`, `startIndex`, `endIndex` |
| `duplicate_document` | Crea una copia de un documento (útil para plantillas de monografía, tesis, etc.). | `documentId` |
| `export_document` | Drive files.export (docx\|pdf\|odt\|txt\|html\|epub\|rtf\|markdown). Devuelve base64. | `documentId`, `format` |
| `find_text` | Busca ocurrencias y devuelve índices Docs (sobre documents.get). | `documentId`, `query` |
| `format_academic_document` | Aplica APA 7 real: márgenes 1", Times New Roman 12, doble espacio, Nivel 1 centrado+negrita, sangría 0.5", sangría francesa en bibliografía. Ideal tras repair_academic_document. | `documentId` |
| `generate_academic_document` | Crea Doc con portada, estructura, APA 7 e índice. Parámetros: topic, type, pages, author?, institution?. | `topic`, `type`, `pages` |
| `get_document` | documents.get — JSON completo del Doc. | `documentId` |
| `get_document_folder` | Drive files.get parents. | `documentId` |
| `get_document_metadata` | Obtiene título, propietarios, fechas y enlace de un documento de Google Docs. | `documentId` |
| `get_document_owners` | Drive files.get owners. | `documentId` |
| `get_document_structure` | Devuelve bloques con startIndex/endIndex, estilos y encabezados. Úsalo antes de apply_format, apply_heading, create_table o insert_image. | `documentId` |
| `get_page_setup` | documents.get → documentStyle (márgenes, pageSize, fondo). | `documentId` |
| `get_permission` | Drive permissions.get. | `documentId`, `permissionId` |
| `get_range_content` | documents.get + extract texto [startIndex,endIndex). | `documentId`, `startIndex`, `endIndex` |
| `get_revision` | Drive revisions.get (+ exportLinks). | `documentId`, `revisionId` |
| `insert_citation` | Inserta un marcador de cita en el índice indicado (APA, IEEE o Vancouver). | `documentId`, `index`, `citationKey` |
| `insert_date` | insertDate (ISO date). | `documentId`, `index`, `isoDate` |
| `insert_diagram` | Renderiza Mermaid (flowchart, sequence, class, er…) vía mermaid.ink, lo rehostea en Drive e inserta. Ejemplo: flowchart TD; A[Inicio] --> B[Fin] | `documentId`, `mermaidSource`, `index` |
| `insert_image` | Inserta imagen https en el índice. Usa search_images → insertUrl (no inventes URLs). Si Docs no puede fetch (CORS/bloqueo), activa rehostViaDrive para subirla a Drive y reinsertar. PNG/JPEG/GIF; URI Docs ≤2KB. | `documentId`, `uri`, `index` |
| `insert_page_break` | Inserta insertPageBreak en el índice (dentro de un párrafo del body). | `documentId`, `index` |
| `insert_person` | insertPerson (email). | `documentId`, `index`, `email` |
| `insert_section_break` | Inserta insertSectionBreak (CONTINUOUS o NEXT_PAGE). | `documentId`, `index` |
| `insert_table_column` | insertTableColumn. | `documentId`, `tableStartIndex`, `columnIndex` |
| `insert_table_of_contents` | Regenera el índice a partir de encabezados HEADING_1–3. Por defecto reemplaza la sección «Índice» existente (replaceSection=true). | `documentId` |
| `insert_table_row` | insertTableRow. tableStartIndex viene de get_document_structure. | `documentId`, `tableStartIndex`, `rowIndex` |
| `insert_text` | Inserta texto en un índice UTF-16 del cuerpo del documento (el cuerpo empieza en 1). | `documentId`, `text`, `index` |
| `keep_revision_forever` | Drive revisions.update keepForever. | `documentId`, `revisionId` |
| `list_documents` | Lista los 20 documentos de Google Docs modificados más recientemente. | — |
| `list_drive_comments` | Drive comments.list. | `documentId` |
| `list_images` | Lista inlineObjects (objectId, sourceUri, tamaño). Usa objectId con replace_image. | `documentId` |
| `list_named_ranges` | Lista namedRanges del documento. | `documentId` |
| `list_permissions` | Drive permissions.list. | `documentId` |
| `list_revisions` | Drive revisions.list. | `documentId` |
| `list_trashed_documents` | Drive files.list trashed Docs. | — |
| `merge_table_cells` | mergeTableCells (fila/col end exclusivos como en la API). | `documentId`, `tableStartIndex`, `startRowIndex`, `endRowIndex`, `startColumnIndex`, `endColumnIndex` |
| `move_content` | Mueve un rango de texto plano a otro índice. No conserva tablas ni imágenes incrustadas. | `documentId`, `startIndex`, `endIndex`, `destinationIndex` |
| `move_document` | Drive files.update addParents/removeParents. | `documentId` |
| `paste_content` | insertText del texto proporcionado. | `documentId`, `index`, `text` |
| `pin_table_header_rows` | pinTableHeaderRows. | `documentId`, `tableStartIndex`, `pinnedHeaderRowsCount` |
| `read_document` | Lee todo el contenido de un documento de Google Docs y lo devuelve como texto plano. | `documentId` |
| `rename_document` | Drive files.update name. | `documentId`, `title` |
| `repair_academic_document` | Corrige fallos típicos de documentos académicos generados por LLM: promueve 'Capítulo N' a HEADING_1, convierte tablas Markdown, elimina andamiaje vacío y encabezados vacíos, reordena capítulos desordenados y regenera el Índice. | `documentId` |
| `replace_image` | Reemplaza una imagen existente (replaceImage API) por objectId de list_images. | `documentId`, `imageObjectId`, `uri` |
| `replace_named_range_content` | replaceNamedRangeContent: sustituye el texto del rango nombrado. | `documentId`, `text` |
| `replace_text` | Busca y reemplaza todas las coincidencias de un texto en el documento. | `documentId`, `findText`, `replaceText` |
| `restore_from_trash` | Drive files.update trashed=false. | `documentId` |
| `search_images` | Busca en Wikimedia Commons (JPEG/PNG/GIF libres). Devuelve insertUrl lista para insert_image (no inventes enlaces). Incluye licencia/artista cuando existen. | `query` |
| `set_alignment_center` | updateParagraphStyle.alignment=CENTER | `documentId`, `startIndex`, `endIndex` |
| `set_alignment_justified` | updateParagraphStyle.alignment=JUSTIFIED | `documentId`, `startIndex`, `endIndex` |
| `set_alignment_left` | updateParagraphStyle.alignment=START | `documentId`, `startIndex`, `endIndex` |
| `set_alignment_right` | updateParagraphStyle.alignment=END | `documentId`, `startIndex`, `endIndex` |
| `set_background_color` | updateTextStyle.backgroundColor | `documentId`, `startIndex`, `endIndex`, `color` |
| `set_bold` | updateTextStyle.bold | `documentId`, `startIndex`, `endIndex` |
| `set_first_line_indent` | updateParagraphStyle.indentFirstLine | `documentId`, `startIndex`, `endIndex`, `indentPt` |
| `set_font_family` | updateTextStyle.weightedFontFamily | `documentId`, `startIndex`, `endIndex`, `fontFamily` |
| `set_font_size` | updateTextStyle.fontSize | `documentId`, `startIndex`, `endIndex`, `fontSize` |
| `set_foreground_color` | updateTextStyle.foregroundColor | `documentId`, `startIndex`, `endIndex`, `color` |
| `set_indent_start` | updateParagraphStyle.indentStart | `documentId`, `startIndex`, `endIndex`, `indentPt` |
| `set_italic` | updateTextStyle.italic | `documentId`, `startIndex`, `endIndex` |
| `set_line_spacing` | updateParagraphStyle.lineSpacing (100=simple, 200=doble) | `documentId`, `startIndex`, `endIndex`, `lineSpacing` |
| `set_link` | updateTextStyle.link | `documentId`, `startIndex`, `endIndex`, `url` |
| `set_small_caps` | updateTextStyle.smallCaps | `documentId`, `startIndex`, `endIndex` |
| `set_space_above` | updateParagraphStyle.spaceAbove | `documentId`, `startIndex`, `endIndex`, `spacePt` |
| `set_space_below` | updateParagraphStyle.spaceBelow | `documentId`, `startIndex`, `endIndex`, `spacePt` |
| `set_strikethrough` | updateTextStyle.strikethrough | `documentId`, `startIndex`, `endIndex` |
| `set_subscript` | updateTextStyle.baselineOffset=SUBSCRIPT | `documentId`, `startIndex`, `endIndex` |
| `set_superscript` | updateTextStyle.baselineOffset=SUPERSCRIPT | `documentId`, `startIndex`, `endIndex` |
| `set_underline` | updateTextStyle.underline | `documentId`, `startIndex`, `endIndex` |
| `star_document` | Drive files.update starred. | `documentId`, `starred` |
| `trash_document` | Drive files.update trashed=true. | `documentId` |
| `unmerge_table_cells` | unmergeTableCells. | `documentId`, `tableStartIndex`, `startRowIndex`, `endRowIndex`, `startColumnIndex`, `endColumnIndex` |
| `update_document_style` | updateDocumentStyle: márgenes, pageSize, fondo, useFirstPageHeaderFooter. | `documentId` |
| `update_permission` | Drive permissions.update. | `documentId`, `permissionId`, `role` |
| `update_table_cell_style` | updateTableCellStyle: fondo y bordes. | `documentId`, `tableStartIndex`, `startRowIndex`, `endRowIndex`, `startColumnIndex`, `endColumnIndex` |
| `update_table_column_width` | updateTableColumnProperties width FIXED. | `documentId`, `tableStartIndex`, `columnIndices`, `widthPt` |
| `update_table_row_min_height` | updateTableRowStyle.minRowHeight. | `documentId`, `tableStartIndex`, `rowIndices`, `minHeightPt` |
