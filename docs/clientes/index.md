# Guías de clientes MCP

Cómo conectar **Google Documents MCP** en distintos entornos.

Paquete npm: [`@0pvalencia/google-documents-mcp`](https://www.npmjs.com/package/@0pvalencia/google-documents-mcp) · versión documentada **0.6.3**

## Antes de conectar cualquier cliente

```bash
npx -y @0pvalencia/google-documents-mcp login
npx -y @0pvalencia/google-documents-mcp doctor
```

Requisitos:

- Node.js 22+
- Estar en la lista de **test users** (beta cerrada)
- Sesión local guardada (`doctor` en verde)

::: tip Login en Windows
Desde **0.6.3** el login abre el navegador directamente y no imprime la URL OAuth en la terminal (evita errores 400 por `&` rotos). Detalle en [Beta / login](/guia/beta#error-400--navegador-en-windows).
:::

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
VS Code usa la clave `servers` (ver [VS Code](./vscode)).
