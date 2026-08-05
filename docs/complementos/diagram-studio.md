# diagram-studio-mcp

Render de diagramas vía [Kroki](https://kroki.io) (Mermaid, Graphviz, PlantUML, D2, ERD).

- npm: [`@0pvalencia/diagram-studio-mcp`](https://www.npmjs.com/package/@0pvalencia/diagram-studio-mcp)
- GitHub: [0PValencia/diagram-studio-mcp](https://github.com/0PValencia/diagram-studio-mcp)

```bash
npx -y @0pvalencia/diagram-studio-mcp
```

Opcional: `KROKI_URL` (default `https://kroki.io`).

## Tools

| Tool | Uso |
| --- | --- |
| `render_diagram` | source + engine → PNG/SVG (+ path/base64) |
| `list_engines` | Engines disponibles |

## Flujo con Docs

```text
render_diagram → insert_image (o rehostViaDrive) en google-documents-mcp
```

También puedes usar `insert_diagram` (Mermaid) del propio google-documents-mcp para casos simples.
