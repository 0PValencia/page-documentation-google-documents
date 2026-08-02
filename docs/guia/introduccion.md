# Introducción

**Google Documents MCP** es un servidor [Model Context Protocol](https://modelcontextprotocol.io/) que conecta asistentes de IA con Google Docs.

Paquete npm: [`@0pvalencia/google-documents-mcp`](https://www.npmjs.com/package/@0pvalencia/google-documents-mcp) · **v0.6.3**

## Qué puedes hacer

- Gestionar documentos en Drive (crear, listar, renombrar, mover, exportar, papelera)
- Editar texto con índices UTF-16 reales del Docs API
- Aplicar formato, tablas, imágenes y diagramas Mermaid
- Generar y reparar documentos académicos en estilo APA 7

## Requisitos

| Requisito | Detalle |
| --- | --- |
| Node.js | 22+ |
| Cuenta Google | Con acceso a Docs / Drive |
| Beta | Debes estar como *test user* (OAuth en modo Testing) |
| Cliente MCP | Cursor, VS Code, Claude Desktop, Claude Code, OpenCode u otro stdio |

## Flujo mental

```text
login (una vez) → doctor → conectar cliente → usar tools
```

1. Autenticas con `login`
2. Verificas con `doctor`
3. Configuras el cliente MCP (stdio)
4. El modelo invoca tools como `list_documents` o `generate_academic_document`

## Siguiente paso

Sigue la [instalación y primer uso](./instalacion).
