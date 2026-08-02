# Formato

Estilos, tablas, imágenes, rangos nombrados, encabezados y saltos.

| Herramienta | Descripción | Parámetros requeridos |
| --- | --- | --- |
| `apply_format` | Aplica negrita, cursiva, tachado, enlace (linkUrl), fuente, tamaño, alineación, color, interlineado, espaciado y sangría a un rango. Usa get_document_structure para índices. | `documentId`, `startIndex`, `endIndex` |
| `apply_heading` | Aplica TITLE, HEADING_1, HEADING_2, HEADING_3 o NORMAL_TEXT a un rango. | `documentId`, `startIndex`, `endIndex`, `style` |
| `clear_formatting` | Resetea textStyle (*) y párrafo a NORMAL_TEXT. | `documentId`, `startIndex`, `endIndex` |
| `create_footer` | createFooter DEFAULT; opcionalmente escribe text. | `documentId` |
| `create_footnote` | createFootnote en el índice; opcionalmente rellena text. | `documentId`, `index` |
| `create_header` | createHeader DEFAULT; opcionalmente escribe text en el header. | `documentId` |
| `create_named_range` | createNamedRange sobre un rango de índices. | `documentId`, `name`, `startIndex`, `endIndex` |
| `create_paragraph_bullets` | Aplica createParagraphBullets al rango (BULLET_* o NUMBERED_* presets de Docs API). | `documentId`, `startIndex`, `endIndex` |
| `create_table` | Inserta una tabla en el índice indicado. Pasa data:[[celda,...],...] para rellenar celdas (obligatorio si quieres contenido, no solo la grilla vacía). | `documentId`, `rows`, `columns`, `index` |
| `delete_footer` | deleteFooter por footerId. | `documentId`, `footerId` |
| `delete_header` | deleteHeader por headerId. | `documentId`, `headerId` |
| `delete_named_range` | deleteNamedRange por id o por name. | `documentId` |
| `delete_paragraph_bullets` | Elimina bullets del rango (deleteParagraphBullets). | `documentId`, `startIndex`, `endIndex` |
| `delete_table_column` | deleteTableColumn. | `documentId`, `tableStartIndex`, `columnIndex` |
| `delete_table_row` | deleteTableRow. | `documentId`, `tableStartIndex`, `rowIndex` |
| `get_document_structure` | Devuelve bloques con startIndex/endIndex, estilos y encabezados. Úsalo antes de apply_format, apply_heading, create_table o insert_image. | `documentId` |
| `insert_date` | insertDate (ISO date). | `documentId`, `index`, `isoDate` |
| `insert_diagram` | Renderiza Mermaid (flowchart, sequence, class, er…) vía mermaid.ink, lo rehostea en Drive e inserta. Ejemplo: flowchart TD; A[Inicio] --> B[Fin] | `documentId`, `mermaidSource`, `index` |
| `insert_image` | Inserta imagen https en el índice. Usa search_images → insertUrl (no inventes URLs). Si Docs no puede fetch (CORS/bloqueo), activa rehostViaDrive para subirla a Drive y reinsertar. PNG/JPEG/GIF; URI Docs ≤2KB. | `documentId`, `uri`, `index` |
| `insert_page_break` | Inserta insertPageBreak en el índice (dentro de un párrafo del body). | `documentId`, `index` |
| `insert_person` | insertPerson (email). | `documentId`, `index`, `email` |
| `insert_section_break` | Inserta insertSectionBreak (CONTINUOUS o NEXT_PAGE). | `documentId`, `index` |
| `insert_table_column` | insertTableColumn. | `documentId`, `tableStartIndex`, `columnIndex` |
| `insert_table_row` | insertTableRow. tableStartIndex viene de get_document_structure. | `documentId`, `tableStartIndex`, `rowIndex` |
| `list_images` | Lista inlineObjects (objectId, sourceUri, tamaño). Usa objectId con replace_image. | `documentId` |
| `list_named_ranges` | Lista namedRanges del documento. | `documentId` |
| `merge_table_cells` | mergeTableCells (fila/col end exclusivos como en la API). | `documentId`, `tableStartIndex`, `startRowIndex`, `endRowIndex`, `startColumnIndex`, `endColumnIndex` |
| `pin_table_header_rows` | pinTableHeaderRows. | `documentId`, `tableStartIndex`, `pinnedHeaderRowsCount` |
| `replace_image` | Reemplaza una imagen existente (replaceImage API) por objectId de list_images. | `documentId`, `imageObjectId`, `uri` |
| `replace_named_range_content` | replaceNamedRangeContent: sustituye el texto del rango nombrado. | `documentId`, `text` |
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
| `unmerge_table_cells` | unmergeTableCells. | `documentId`, `tableStartIndex`, `startRowIndex`, `endRowIndex`, `startColumnIndex`, `endColumnIndex` |
| `update_table_cell_style` | updateTableCellStyle: fondo y bordes. | `documentId`, `tableStartIndex`, `startRowIndex`, `endRowIndex`, `startColumnIndex`, `endColumnIndex` |
| `update_table_column_width` | updateTableColumnProperties width FIXED. | `documentId`, `tableStartIndex`, `columnIndices`, `widthPt` |
| `update_table_row_min_height` | updateTableRowStyle.minRowHeight. | `documentId`, `tableStartIndex`, `rowIndices`, `minHeightPt` |

## Tip

No inventes URLs de imagen: usa `search_images` → `insertUrl` → `insert_image`.
