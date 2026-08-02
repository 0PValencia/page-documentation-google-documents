# Visual Studio Code (GitHub Copilot)

VS Code soporta MCP de forma nativa con Copilot en **modo Agent**.

## 1. Autenticar (una vez)

```bash
npx -y @0pvalencia/google-documents-mcp login
npx -y @0pvalencia/google-documents-mcp doctor
```

## 2. Configurar MCP

### Opción A — Workspace

Crea `.vscode/mcp.json` en tu proyecto:

```json
{
  "servers": {
    "google-documents": {
      "command": "npx",
      "args": ["-y", "@0pvalencia/google-documents-mcp"]
    }
  }
}
```

### Opción B — Usuario (todos los workspaces)

1. `Ctrl+Shift+P` / `Cmd+Shift+P`
2. Ejecuta **MCP: Open User Configuration**
3. Añade el mismo bloque bajo `"servers"`

### Opción C — Asistente

1. Command Palette → **MCP: Add Server**
2. Elige comando local / npm
3. Command: `npx`
4. Args: `-y` `@0pvalencia/google-documents-mcp`

## Importante

| Detalle | Valor |
| --- | --- |
| Clave JSON | `servers` (**no** `mcpServers`) |
| Uso de herramientas | Solo en **Agent** mode de Copilot Chat |
| VS Code | 1.102+ recomendado |

Si copias la config de Cursor sin cambiar `mcpServers` → `servers`, no cargará.

## 3. Probar

1. Abre Copilot Chat
2. Cambia a **Agent**
3. Pide: “Lista mis documentos de Google Docs”

## Referencia

- [Add and manage MCP servers in VS Code](https://code.visualstudio.com/docs/agent-customization/mcp-servers)
