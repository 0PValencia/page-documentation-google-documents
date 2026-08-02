# Edición de texto

Inserción, reemplazo, búsqueda y manipulación de contenido dentro del documento.

| Herramienta | Descripción | Parámetros requeridos |
| --- | --- | --- |
| `copy_content` | Extrae texto de un rango (sin clipboard SO). | `documentId`, `startIndex`, `endIndex` |
| `count_words` | Estadísticas de caracteres/palabras/párrafos (cliente sobre documents.get). | `documentId` |
| `cut_content` | Copia texto del rango y luego deleteContentRange (solo texto plano). | `documentId`, `startIndex`, `endIndex` |
| `delete_text` | Elimina el contenido entre startIndex y endIndex (índices UTF-16 del Docs API). | `documentId`, `startIndex`, `endIndex` |
| `find_text` | Busca ocurrencias y devuelve índices Docs (sobre documents.get). | `documentId`, `query` |
| `get_range_content` | documents.get + extract texto [startIndex,endIndex). | `documentId`, `startIndex`, `endIndex` |
| `insert_text` | Inserta texto en un índice UTF-16 del cuerpo del documento (el cuerpo empieza en 1). | `documentId`, `text`, `index` |
| `move_content` | Mueve un rango de texto plano a otro índice. No conserva tablas ni imágenes incrustadas. | `documentId`, `startIndex`, `endIndex`, `destinationIndex` |
| `paste_content` | insertText del texto proporcionado. | `documentId`, `index`, `text` |
| `replace_text` | Busca y reemplaza todas las coincidencias de un texto en el documento. | `documentId`, `findText`, `replaceText` |
