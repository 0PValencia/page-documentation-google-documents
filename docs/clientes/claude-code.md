# Claude Code (CLI)

## 1. Autenticar (una vez)

```bash
npx -y @0pvalencia/google-documents-mcp login
npx -y @0pvalencia/google-documents-mcp doctor
```

## 2. Añadir el servidor

Según la versión de Claude Code, puedes usar el CLI o el archivo de config.

### CLI (si está disponible)

```bash
claude mcp add google-documents -- npx -y @0pvalencia/google-documents-mcp
```

### Archivo de configuración

Añade en `~/.claude.json` (o el `.mcp.json` del proyecto, según tu versión):

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

## 3. Probar

```bash
claude
```

Dentro de la sesión, pide listar documentos de Google Docs o usa el comando de inspección MCP de Claude Code si está disponible.

## Notas

- Transporte: **stdio** local (compatible de inmediato).
- Misma sesión OAuth que Cursor/VS Code/Claude Desktop en esa máquina.
