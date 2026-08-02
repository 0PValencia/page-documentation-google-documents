# Guías de clientes MCP

Cómo conectar **Google Documents MCP** en distintos entornos.

Paquete npm: [`@0pvalencia/google-documents-mcp`](https://www.npmjs.com/package/@0pvalencia/google-documents-mcp)

## Antes de conectar cualquier cliente

```bash
npx -y @0pvalencia/google-documents-mcp login
npx -y @0pvalencia/google-documents-mcp doctor
```

Requisitos:

- Node.js 22+
- Estar en la lista de **test users** (beta cerrada)
- Sesión local guardada (`doctor` en verde)

## Compatibilidad

| Cliente | Guía |
| --- | --- |
| [Cursor](./cursor) | Listo (stdio) |
| [VS Code + Copilot](./vscode) | Listo (modo Agent) |
| [Claude Desktop](./claude-desktop) | Listo |
| [Claude Code](./claude-code) | Listo |
| [OpenCode](./opencode) | Listo (`mcp` local) |
| [Otros clientes stdio](./otros) | Si el cliente lanza procesos locales |

## Configuración típica

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

Cursor / Claude usan la clave `mcpServers`.  
VS Code usa la clave `servers` (ver [vscode](./vscode)).
