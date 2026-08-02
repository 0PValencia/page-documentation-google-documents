# Cursor

## 1. Autenticar (una vez)

```bash
npx -y @0pvalencia/google-documents-mcp login
npx -y @0pvalencia/google-documents-mcp doctor
```

## 2. Configurar MCP

Abre la configuración MCP de Cursor (`mcp.json`), por ejemplo:

- Global: `~/.cursor/mcp.json`
- O desde **Cursor Settings → MCP**

Añade:

```json
{
  "mcpServers": {
    "google-documents": {
      "command": "npx",
      "args": ["-y", "@0pvalencia/google-documents-mcp"]
    }
  }
}
```

## 3. Reiniciar

Reinicia los servidores MCP en Cursor (o reinicia Cursor).

## 4. Probar

En el chat pide, por ejemplo:

- “Lista mis documentos de Google Docs”
- “Crea un documento llamado Prueba MCP”

Deberías ver las herramientas:

- `list_documents`
- `read_document`
- `create_document`
- `append_text`

## Desarrollo local (sin npm)

Si aún no usas el paquete publicado:

```json
{
  "mcpServers": {
    "google-documents": {
      "command": "node",
      "args": ["/ABSOLUTE/PATH/TO/google-documents/dist/cli.js"]
    }
  }
}
```

Ejecuta `npm run build` antes.
