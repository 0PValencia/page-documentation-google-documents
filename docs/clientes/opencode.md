# OpenCode

## 1. Autenticar (una vez)

Antes de conectar el MCP en OpenCode:

```bash
npx -y @0pvalencia/google-documents-mcp login
npx -y @0pvalencia/google-documents-mcp doctor
```

## 2. Añadir el MCP (recomendado)

### Con `opencode mcp add` (interactivo)

```bash
opencode mcp add
```

Cuando te pregunte, usa algo así:

| Pregunta | Respuesta |
| --- | --- |
| Tipo / local vs remote | **local** |
| Nombre | `google-documents` |
| **Command to run** | `npx -y @0pvalencia/google-documents-mcp` |

Ese comando es el que inicia el servidor MCP por stdio. Cópialo tal cual:

```text
npx -y @0pvalencia/google-documents-mcp
```

No pongas solo el nombre del paquete (`@0pvalencia/google-documents-mcp`): OpenCode necesita el comando completo (`npx -y …`).

Comprueba:

```bash
opencode mcp list
```

### Alternativa: editar `opencode.json`

Ubicaciones habituales:

- Proyecto: `./opencode.json`
- Global: `~/.config/opencode/opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "google-documents": {
      "type": "local",
      "command": ["npx", "-y", "@0pvalencia/google-documents-mcp"],
      "enabled": true
    }
  }
}
```

Docs oficiales: [MCP servers | OpenCode](https://opencode.ai/docs/mcp-servers/)

## 3. Reiniciar

Cierra y vuelve a abrir OpenCode (o recarga la sesión) para que cargue el servidor.

## 4. Probar

Pide, por ejemplo:

- “Lista mis documentos de Google Docs”
- “Crea una monografía sobre X con formato APA”

## Desarrollo local (sin npm)

Si trabajas desde el repo clonado:

**Command to run** en `opencode mcp add`:

```text
node /ABSOLUTE/PATH/TO/google-documents/dist/cli.js
```

O en JSON:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "google-documents": {
      "type": "local",
      "command": ["node", "/ABSOLUTE/PATH/TO/google-documents/dist/cli.js"],
      "enabled": true
    }
  }
}
```

Ejecuta `npm run build` antes.
