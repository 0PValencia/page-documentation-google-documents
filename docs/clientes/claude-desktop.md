# Claude Desktop

## 1. Autenticar (una vez)

```bash
npx -y @0pvalencia/google-documents-mcp login
npx -y @0pvalencia/google-documents-mcp doctor
```

## 2. Editar la configuración

Archivo según el sistema:

| SO | Ruta |
| --- | --- |
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` |
| Linux | `~/.config/Claude/claude_desktop_config.json` |

Contenido:

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

Si el archivo ya tiene otros servidores, fusiona dentro de `mcpServers` sin borrar entradas existentes.

## 3. Reiniciar Claude Desktop

Cierra completamente la app y ábrela de nuevo.

## 4. Probar

En un chat nuevo pide listar o crear un documento de Google Docs.

En ajustes / icono de herramientas MCP deberías ver `google-documents` con las 4 tools.

## Notas

- Claude Desktop lanza el proceso por **stdio** (igual que Cursor).
- Necesitas Node.js disponible en el `PATH` del usuario gráfico (a veces falla si Node solo está en el PATH de la terminal).
- Si no arranca, prueba la ruta absoluta a `node` + `dist/cli.js` tras `npm install -g @0pvalencia/google-documents-mcp`.
