# Instalación y primer uso

Paquete: [`@0pvalencia/google-documents-mcp`](https://www.npmjs.com/package/@0pvalencia/google-documents-mcp) **≥ 0.6.3** recomendado.

## 1. Autenticar

```bash
npx -y @0pvalencia/google-documents-mcp login
```

Se abre el navegador para el consentimiento OAuth (PKCE). No necesitas crear un proyecto en Google Cloud.

::: tip Scope Drive
Si ya tenías sesión con un scope anterior (`drive.metadata.readonly`), vuelve a ejecutar `login` para conceder `drive` (necesario para duplicar/eliminar).
:::

::: warning Windows / error 400
Desde 0.6.3 el CLI abre el navegador solo y **no imprime** la URL OAuth. No copies URLs de la terminal: en Windows los `&` se rompen y Google responde 400. Ver [Beta](/guia/beta#error-400--navegador-en-windows).
:::

## 2. Verificar

```bash
npx -y @0pvalencia/google-documents-mcp doctor
```

`doctor` comprueba: sesión, refresh token, usuario, Docs API, Drive API y permisos.

## 3. Conectar un cliente

Ejemplo típico (Cursor / Claude):

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

::: warning VS Code
En VS Code la clave es `servers`, no `mcpServers`. Ver [VS Code](/clientes/vscode).
:::

Guías por cliente:

- [Cursor](/clientes/cursor)
- [VS Code](/clientes/vscode)
- [Claude Desktop](/clientes/claude-desktop)
- [Claude Code](/clientes/claude-code)
- [OpenCode](/clientes/opencode)

## 4. Probar

En el chat del cliente, pide por ejemplo:

- “Lista mis documentos de Google Docs”
- “Crea un documento llamado Prueba MCP”

Deberías ver tools como `list_documents`, `create_document`, `read_document`.
