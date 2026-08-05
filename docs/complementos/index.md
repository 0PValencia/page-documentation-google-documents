# MCP complementarios

Suite de servidores MCP hermanos de [`@0pvalencia/google-documents-mcp`](https://www.npmjs.com/package/@0pvalencia/google-documents-mcp).

No sustituyen a Google Documents: lo **complementan** con linter, diagramas, imágenes, capturas, DB, gráficos y citas.

## Flujo típico

```text
1. Contenido / estructura  →  google-documents-mcp
2. Datos / figuras / QA    →  estos MCP
3. Insertar en el Doc      →  insert_image / insert_diagram / append_bibliography
```

## Catálogo

| Paquete npm | Rol | Guía |
| --- | --- | --- |
| `@0pvalencia/academic-linter-mcp` | Lint APA / estructura | [academic-linter](./academic-linter) |
| `@0pvalencia/diagram-studio-mcp` | Mermaid / Graphviz / PlantUML / D2 (Kroki) | [diagram-studio](./diagram-studio) |
| `@0pvalencia/image-lab-mcp` | Openverse + Commons + atribución | [image-lab](./image-lab) |
| `@0pvalencia/app-screenshot-mcp` | Capturas UI (Playwright) | [app-screenshot](./app-screenshot) |
| `@0pvalencia/db-introspector-mcp` | Postgres → tablas / FKs / DOT ER | [db-introspector](./db-introspector) |
| `@0pvalencia/chart-from-data-mcp` | Gráficos bar/line/pie → PNG | [chart-from-data](./chart-from-data) |
| `@0pvalencia/citation-lab-mcp` | Crossref → APA 7 | [citation-lab](./citation-lab) |

## Configuración npx (Cursor / Claude / VS Code)

```json
{
  "mcpServers": {
    "google-documents": {
      "command": "npx",
      "args": ["-y", "@0pvalencia/google-documents-mcp"]
    },
    "academic-linter": {
      "command": "npx",
      "args": ["-y", "@0pvalencia/academic-linter-mcp"]
    },
    "diagram-studio": {
      "command": "npx",
      "args": ["-y", "@0pvalencia/diagram-studio-mcp"]
    },
    "image-lab": {
      "command": "npx",
      "args": ["-y", "@0pvalencia/image-lab-mcp"]
    },
    "app-screenshot": {
      "command": "npx",
      "args": ["-y", "@0pvalencia/app-screenshot-mcp"]
    },
    "db-introspector": {
      "command": "npx",
      "args": ["-y", "@0pvalencia/db-introspector-mcp"],
      "env": { "DATABASE_URL": "postgresql://user:pass@localhost:5432/db" }
    },
    "chart-from-data": {
      "command": "npx",
      "args": ["-y", "@0pvalencia/chart-from-data-mcp"]
    },
    "citation-lab": {
      "command": "npx",
      "args": ["-y", "@0pvalencia/citation-lab-mcp"]
    }
  }
}
```

## Requisitos

- Node.js ≥ 22
- `db-introspector`: variable `DATABASE_URL`
- `app-screenshot`: Chromium (`npx playwright install chromium` si hace falta)

## Skills de agente

Para que el modelo use bien Docs + la suite, activa las skills documentadas en [Skills](/skills/).
