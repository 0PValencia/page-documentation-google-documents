# Documentos y Drive

Crear, listar, mover, exportar, permisos, revisiones y comentarios en Drive.

| Herramienta | Descripción | Parámetros requeridos |
| --- | --- | --- |
| `append_text` | Añade texto al final de un documento de Google Docs. | `documentId`, `text` |
| `create_document` | Crea un documento vacío de Google Docs con el título indicado. | `title` |
| `create_document_revision` | Marca la revisión actual del documento como keepForever (punto de control en Drive). | `documentId` |
| `create_drive_comment` | Drive comments.create. | `documentId`, `content` |
| `create_permission` | Drive permissions.create (incl. transferOwnership). | `documentId`, `type`, `role` |
| `create_shortcut` | Drive files.create shortcut. | `documentId` |
| `delete_document` | Mueve un documento a la papelera de Google Drive. | `documentId` |
| `delete_document_permanently` | Drive files.delete (irreversible). | `documentId` |
| `delete_drive_comment` | Drive comments.delete. | `documentId`, `commentId` |
| `delete_permission` | Drive permissions.delete. | `documentId`, `permissionId` |
| `duplicate_document` | Crea una copia de un documento (útil para plantillas de monografía, tesis, etc.). | `documentId` |
| `export_document` | Drive files.export (docx\|pdf\|odt\|txt\|html\|epub\|rtf\|markdown). Devuelve base64. | `documentId`, `format` |
| `get_document` | documents.get — JSON completo del Doc. | `documentId` |
| `get_document_folder` | Drive files.get parents. | `documentId` |
| `get_document_metadata` | Obtiene título, propietarios, fechas y enlace de un documento de Google Docs. | `documentId` |
| `get_document_owners` | Drive files.get owners. | `documentId` |
| `get_page_setup` | documents.get → documentStyle (márgenes, pageSize, fondo). | `documentId` |
| `get_permission` | Drive permissions.get. | `documentId`, `permissionId` |
| `get_revision` | Drive revisions.get (+ exportLinks). | `documentId`, `revisionId` |
| `keep_revision_forever` | Drive revisions.update keepForever. | `documentId`, `revisionId` |
| `list_documents` | Lista los 20 documentos de Google Docs modificados más recientemente. | — |
| `list_drive_comments` | Drive comments.list. | `documentId` |
| `list_permissions` | Drive permissions.list. | `documentId` |
| `list_revisions` | Drive revisions.list. | `documentId` |
| `list_trashed_documents` | Drive files.list trashed Docs. | — |
| `move_document` | Drive files.update addParents/removeParents. | `documentId` |
| `read_document` | Lee todo el contenido de un documento de Google Docs y lo devuelve como texto plano. | `documentId` |
| `rename_document` | Drive files.update name. | `documentId`, `title` |
| `restore_from_trash` | Drive files.update trashed=false. | `documentId` |
| `star_document` | Drive files.update starred. | `documentId`, `starred` |
| `trash_document` | Drive files.update trashed=true. | `documentId` |
| `update_document_style` | updateDocumentStyle: márgenes, pageSize, fondo, useFirstPageHeaderFooter. | `documentId` |
| `update_permission` | Drive permissions.update. | `documentId`, `permissionId`, `role` |
