# academic-linter-mcp

Lint de estructura académica para agentes que usan Google Documents.

- npm: [`@0pvalencia/academic-linter-mcp`](https://www.npmjs.com/package/@0pvalencia/academic-linter-mcp)
- GitHub: [0PValencia/academic-linter-mcp](https://github.com/0PValencia/academic-linter-mcp)

```bash
npx -y @0pvalencia/academic-linter-mcp
```

## Tools

| Tool | Uso |
| --- | --- |
| `lint_structure` | JSON de `get_document_structure` → errores/avisos (H1 masivos, placeholders, numeración) |
| `compact_headings_view` | Vista compacta `[start-end] LEVEL "texto"` |
| `lint_text_placeholders` | Busca `[...]`, TODO, lorem en texto plano |

## Flujo

```text
get_document_structure → compact_headings_view / lint_structure → corregir con tools de Docs
```
