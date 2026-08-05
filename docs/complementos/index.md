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

## Configuración (Cursor / Claude / VS Code)

### Local (recomendado si clonas los repos)

Usa `node` + `dist/cli.js` (evita el hang de `npx` al abrir el propio repo del MCP):

```json
{
  "mcpServers": {
    "academic-linter": {
      "command": "node",
      "args": ["/ABSOLUTE/PATH/TO/academic-linter-mcp/dist/cli.js"]
    },
    "diagram-studio": {
      "command": "node",
      "args": ["/ABSOLUTE/PATH/TO/diagram-studio-mcp/dist/cli.js"]
    },
    "image-lab": {
      "command": "node",
      "args": ["/ABSOLUTE/PATH/TO/image-lab-mcp/dist/cli.js"]
    },
    "app-screenshot": {
      "command": "node",
      "args": ["/ABSOLUTE/PATH/TO/app-screenshot-mcp/dist/cli.js"]
    },
    "db-introspector": {
      "command": "node",
      "args": ["/ABSOLUTE/PATH/TO/db-introspector-mcp/dist/cli.js"],
      "env": { "DATABASE_URL": "postgresql://user:pass@localhost:5432/db" }
    },
    "chart-from-data": {
      "command": "node",
      "args": ["/ABSOLUTE/PATH/TO/chart-from-data-mcp/dist/cli.js"]
    },
    "citation-lab": {
      "command": "node",
      "args": ["/ABSOLUTE/PATH/TO/citation-lab-mcp/dist/cli.js"]
    }
  }
}
```

Tras clonar cada repo: `npm install && npm run build`.

### npx (sin clonar)

```json
{
  "mcpServers": {
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

Si usas `npx` con el repo abierto en Cursor, asegúrate de `npm install && npm run build` para que exista el bin en `node_modules/.bin`.

## Requisitos

- Node.js ≥ 20
- `db-introspector`: variable `DATABASE_URL`
- `app-screenshot`: Chromium (`npx playwright install chromium` si hace falta)

## Skills de agente

Para que el modelo use bien Docs + la suite, activa las skills documentadas en [Skills](/skills/).
