# Resumen de herramientas

El servidor expone **107** tools MCP organizadas en estas categorías.

| Categoría | Guía |
| --- | --- |
| Documentos y Drive | [documentos](./documentos.md) |
| Edición | [edicion](./edicion.md) |
| Formato | [formato](./formato.md) |
| Académicas | [academicas](./academicas.md) |

## Índice alfabético

| Tool | Categoría | Descripción |
| --- | --- | --- |
| `append_bibliography` | [Académicas](./academicas.md) | Añade entradas bibliográficas al final del documento. |
| `append_text` | [Documentos y Drive](./documentos.md) | Añade texto al final de un documento de Google Docs. |
| `apply_format` | [Formato](./formato.md) | Aplica negrita, cursiva, tachado, enlace (linkUrl), fuente, tamaño, alineación, color, interlineado, espaciado y sangría a un rango. Usa get_document_structure para índices. |
| `apply_heading` | [Formato](./formato.md) | Aplica TITLE, HEADING_1, HEADING_2, HEADING_3 o NORMAL_TEXT a un rango. |
| `clear_formatting` | [Formato](./formato.md) | Resetea textStyle (*) y párrafo a NORMAL_TEXT. |
| `copy_content` | [Edición](./edicion.md) | Extrae texto de un rango (sin clipboard SO). |
| `count_words` | [Edición](./edicion.md) | Estadísticas de caracteres/palabras/párrafos (cliente sobre documents.get). |
| `create_academic_structure` | [Académicas](./academicas.md) | Crea portada centrada (title/author/institution/date) + salto de página + secciones con encabezados reales para monografía, tesis o investigación. |
| `create_document` | [Documentos y Drive](./documentos.md) | Crea un documento vacío de Google Docs con el título indicado. |
| `create_document_revision` | [Documentos y Drive](./documentos.md) | Marca la revisión actual del documento como keepForever (punto de control en Drive). |
| `create_drive_comment` | [Documentos y Drive](./documentos.md) | Drive comments.create. |
| `create_footer` | [Formato](./formato.md) | createFooter DEFAULT; opcionalmente escribe text. |
| `create_footnote` | [Formato](./formato.md) | createFootnote en el índice; opcionalmente rellena text. |
| `create_header` | [Formato](./formato.md) | createHeader DEFAULT; opcionalmente escribe text en el header. |
| `create_named_range` | [Formato](./formato.md) | createNamedRange sobre un rango de índices. |
| `create_paragraph_bullets` | [Formato](./formato.md) | Aplica createParagraphBullets al rango (BULLET_* o NUMBERED_* presets de Docs API). |
| `create_permission` | [Documentos y Drive](./documentos.md) | Drive permissions.create (incl. transferOwnership). |
| `create_shortcut` | [Documentos y Drive](./documentos.md) | Drive files.create shortcut. |
| `create_table` | [Formato](./formato.md) | Inserta una tabla en el índice indicado. Pasa data:[[celda,...],...] para rellenar celdas (obligatorio si quieres contenido, no solo la grilla vacía). |
| `cut_content` | [Edición](./edicion.md) | Copia texto del rango y luego deleteContentRange (solo texto plano). |
| `delete_document` | [Documentos y Drive](./documentos.md) | Mueve un documento a la papelera de Google Drive. |
| `delete_document_permanently` | [Documentos y Drive](./documentos.md) | Drive files.delete (irreversible). |
| `delete_drive_comment` | [Documentos y Drive](./documentos.md) | Drive comments.delete. |
| `delete_footer` | [Formato](./formato.md) | deleteFooter por footerId. |
| `delete_header` | [Formato](./formato.md) | deleteHeader por headerId. |
| `delete_named_range` | [Formato](./formato.md) | deleteNamedRange por id o por name. |
| `delete_paragraph_bullets` | [Formato](./formato.md) | Elimina bullets del rango (deleteParagraphBullets). |
| `delete_permission` | [Documentos y Drive](./documentos.md) | Drive permissions.delete. |
| `delete_table_column` | [Formato](./formato.md) | deleteTableColumn. |
| `delete_table_row` | [Formato](./formato.md) | deleteTableRow. |
| `delete_text` | [Edición](./edicion.md) | Elimina el contenido entre startIndex y endIndex (índices UTF-16 del Docs API). |
| `duplicate_document` | [Documentos y Drive](./documentos.md) | Crea una copia de un documento (útil para plantillas de monografía, tesis, etc.). |
| `export_document` | [Documentos y Drive](./documentos.md) | Drive files.export (docx\|pdf\|odt\|txt\|html\|epub\|rtf\|markdown). Devuelve base64. |
| `find_text` | [Edición](./edicion.md) | Busca ocurrencias y devuelve índices Docs (sobre documents.get). |
| `format_academic_document` | [Académicas](./academicas.md) | Aplica APA 7 real: márgenes 1", Times New Roman 12, doble espacio, Nivel 1 centrado+negrita, sangría 0.5", sangría francesa en bibliografía. Ideal tras repair_academic_document. |
| `generate_academic_document` | [Académicas](./academicas.md) | Crea Doc con portada, estructura, APA 7 e índice. Parámetros: topic, type, pages, author?, institution?. |
| `get_document` | [Documentos y Drive](./documentos.md) | documents.get — JSON completo del Doc. |
| `get_document_folder` | [Documentos y Drive](./documentos.md) | Drive files.get parents. |
| `get_document_metadata` | [Documentos y Drive](./documentos.md) | Obtiene título, propietarios, fechas y enlace de un documento de Google Docs. |
| `get_document_owners` | [Documentos y Drive](./documentos.md) | Drive files.get owners. |
| `get_document_structure` | [Formato](./formato.md) | Devuelve bloques con startIndex/endIndex, estilos y encabezados. Úsalo antes de apply_format, apply_heading, create_table o insert_image. |
| `get_page_setup` | [Documentos y Drive](./documentos.md) | documents.get → documentStyle (márgenes, pageSize, fondo). |
| `get_permission` | [Documentos y Drive](./documentos.md) | Drive permissions.get. |
| `get_range_content` | [Edición](./edicion.md) | documents.get + extract texto [startIndex,endIndex). |
| `get_revision` | [Documentos y Drive](./documentos.md) | Drive revisions.get (+ exportLinks). |
| `insert_citation` | [Académicas](./academicas.md) | Inserta un marcador de cita en el índice indicado (APA, IEEE o Vancouver). |
| `insert_date` | [Formato](./formato.md) | insertDate (ISO date). |
| `insert_diagram` | [Formato](./formato.md) | Renderiza Mermaid (flowchart, sequence, class, er…) vía mermaid.ink, lo rehostea en Drive e inserta. Ejemplo: flowchart TD; A[Inicio] --> B[Fin] |
| `insert_image` | [Formato](./formato.md) | Inserta imagen https en el índice. Usa search_images → insertUrl (no inventes URLs). Si Docs no puede fetch (CORS/bloqueo), activa rehostViaDrive para subirla a Drive y reinsertar. PNG/JPEG/GIF; URI Docs ≤2KB. |
| `insert_page_break` | [Formato](./formato.md) | Inserta insertPageBreak en el índice (dentro de un párrafo del body). |
| `insert_person` | [Formato](./formato.md) | insertPerson (email). |
| `insert_section_break` | [Formato](./formato.md) | Inserta insertSectionBreak (CONTINUOUS o NEXT_PAGE). |
| `insert_table_column` | [Formato](./formato.md) | insertTableColumn. |
| `insert_table_of_contents` | [Académicas](./academicas.md) | Regenera el índice a partir de encabezados HEADING_1–3. Por defecto reemplaza la sección «Índice» existente (replaceSection=true). |
| `insert_table_row` | [Formato](./formato.md) | insertTableRow. tableStartIndex viene de get_document_structure. |
| `insert_text` | [Edición](./edicion.md) | Inserta texto en un índice UTF-16 del cuerpo del documento (el cuerpo empieza en 1). |
| `keep_revision_forever` | [Documentos y Drive](./documentos.md) | Drive revisions.update keepForever. |
| `list_documents` | [Documentos y Drive](./documentos.md) | Lista los 20 documentos de Google Docs modificados más recientemente. |
| `list_drive_comments` | [Documentos y Drive](./documentos.md) | Drive comments.list. |
| `list_images` | [Formato](./formato.md) | Lista inlineObjects (objectId, sourceUri, tamaño). Usa objectId con replace_image. |
| `list_named_ranges` | [Formato](./formato.md) | Lista namedRanges del documento. |
| `list_permissions` | [Documentos y Drive](./documentos.md) | Drive permissions.list. |
| `list_revisions` | [Documentos y Drive](./documentos.md) | Drive revisions.list. |
| `list_trashed_documents` | [Documentos y Drive](./documentos.md) | Drive files.list trashed Docs. |
| `merge_table_cells` | [Formato](./formato.md) | mergeTableCells (fila/col end exclusivos como en la API). |
| `move_content` | [Edición](./edicion.md) | Mueve un rango de texto plano a otro índice. No conserva tablas ni imágenes incrustadas. |
| `move_document` | [Documentos y Drive](./documentos.md) | Drive files.update addParents/removeParents. |
| `paste_content` | [Edición](./edicion.md) | insertText del texto proporcionado. |
| `pin_table_header_rows` | [Formato](./formato.md) | pinTableHeaderRows. |
| `read_document` | [Documentos y Drive](./documentos.md) | Lee todo el contenido de un documento de Google Docs y lo devuelve como texto plano. |
| `rename_document` | [Documentos y Drive](./documentos.md) | Drive files.update name. |
| `repair_academic_document` | [Académicas](./academicas.md) | Corrige fallos típicos de documentos académicos generados por LLM: promueve 'Capítulo N' a HEADING_1, convierte tablas Markdown, elimina andamiaje vacío y encabezados vacíos, reordena capítulos desordenados y regenera el Índice. |
| `replace_image` | [Formato](./formato.md) | Reemplaza una imagen existente (replaceImage API) por objectId de list_images. |
| `replace_named_range_content` | [Formato](./formato.md) | replaceNamedRangeContent: sustituye el texto del rango nombrado. |
| `replace_text` | [Edición](./edicion.md) | Busca y reemplaza todas las coincidencias de un texto en el documento. |
| `restore_from_trash` | [Documentos y Drive](./documentos.md) | Drive files.update trashed=false. |
| `search_images` | [Formato](./formato.md) | Busca en Wikimedia Commons (JPEG/PNG/GIF libres). Devuelve insertUrl lista para insert_image (no inventes enlaces). Incluye licencia/artista cuando existen. |
| `set_alignment_center` | [Formato](./formato.md) | updateParagraphStyle.alignment=CENTER |
| `set_alignment_justified` | [Formato](./formato.md) | updateParagraphStyle.alignment=JUSTIFIED |
| `set_alignment_left` | [Formato](./formato.md) | updateParagraphStyle.alignment=START |
| `set_alignment_right` | [Formato](./formato.md) | updateParagraphStyle.alignment=END |
| `set_background_color` | [Formato](./formato.md) | updateTextStyle.backgroundColor |
| `set_bold` | [Formato](./formato.md) | updateTextStyle.bold |
| `set_first_line_indent` | [Formato](./formato.md) | updateParagraphStyle.indentFirstLine |
| `set_font_family` | [Formato](./formato.md) | updateTextStyle.weightedFontFamily |
| `set_font_size` | [Formato](./formato.md) | updateTextStyle.fontSize |
| `set_foreground_color` | [Formato](./formato.md) | updateTextStyle.foregroundColor |
| `set_indent_start` | [Formato](./formato.md) | updateParagraphStyle.indentStart |
| `set_italic` | [Formato](./formato.md) | updateTextStyle.italic |
| `set_line_spacing` | [Formato](./formato.md) | updateParagraphStyle.lineSpacing (100=simple, 200=doble) |
| `set_link` | [Formato](./formato.md) | updateTextStyle.link |
| `set_small_caps` | [Formato](./formato.md) | updateTextStyle.smallCaps |
| `set_space_above` | [Formato](./formato.md) | updateParagraphStyle.spaceAbove |
| `set_space_below` | [Formato](./formato.md) | updateParagraphStyle.spaceBelow |
| `set_strikethrough` | [Formato](./formato.md) | updateTextStyle.strikethrough |
| `set_subscript` | [Formato](./formato.md) | updateTextStyle.baselineOffset=SUBSCRIPT |
| `set_superscript` | [Formato](./formato.md) | updateTextStyle.baselineOffset=SUPERSCRIPT |
| `set_underline` | [Formato](./formato.md) | updateTextStyle.underline |
| `star_document` | [Documentos y Drive](./documentos.md) | Drive files.update starred. |
| `trash_document` | [Documentos y Drive](./documentos.md) | Drive files.update trashed=true. |
| `unmerge_table_cells` | [Formato](./formato.md) | unmergeTableCells. |
| `update_document_style` | [Documentos y Drive](./documentos.md) | updateDocumentStyle: márgenes, pageSize, fondo, useFirstPageHeaderFooter. |
| `update_permission` | [Documentos y Drive](./documentos.md) | Drive permissions.update. |
| `update_table_cell_style` | [Formato](./formato.md) | updateTableCellStyle: fondo y bordes. |
| `update_table_column_width` | [Formato](./formato.md) | updateTableColumnProperties width FIXED. |
| `update_table_row_min_height` | [Formato](./formato.md) | updateTableRowStyle.minRowHeight. |
