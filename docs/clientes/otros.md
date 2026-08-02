# Otros clientes MCP (stdio)

Si el cliente puede lanzar un servidor MCP local por **stdio**, usa esta plantilla.

## Prerrequisito

```bash
npx -y @0pvalencia/google-documents-mcp login
npx -y @0pvalencia/google-documents-mcp doctor
```

## Configuración genérica

| Campo | Valor |
| --- | --- |
| Command | `npx` |
| Args | `-y`, `@0pvalencia/google-documents-mcp` |
| Transport | `stdio` |
| Env | no hace falta |

Ejemplo estilo Cursor/Claude:

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

## Clientes habituales

| Cliente | ¿Suele soportar stdio? | Notas |
| --- | --- | --- |
| Windsurf | Sí | Clave `mcpServers` |
| Zed | Sí (según versión) | Revisar docs de Agent/MCP |
| Continue.dev | Sí | Panel propio de MCP |
| Cline / Roo | Sí | Config dentro de la extensión |

## Comprobar el binario fuera del IDE

```bash
npx -y @0pvalencia/google-documents-mcp version
npx -y @0pvalencia/google-documents-mcp doctor
```

Si `doctor` falla, el problema no es el IDE: arregla la sesión primero.
