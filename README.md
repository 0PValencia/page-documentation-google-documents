# Google Documents MCP — Docs

Sitio de documentación **VitePress** para [`@0pvalencia/google-documents-mcp`](https://www.npmjs.com/package/@0pvalencia/google-documents-mcp).

Este proyecto documenta el MCP; no modifica el código de `google-documents/`.

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Salida: `docs/.vitepress/dist`

## Deploy en Render

Configurado como **Static Site** vía [`render.yaml`](./render.yaml).

| Campo | Valor |
| --- | --- |
| Runtime | Static |
| Build Command | `npm ci && npm run build` |
| Publish Directory | `docs/.vitepress/dist` |
| Node | `22.14.0` (`NODE_VERSION`) |

### Opción A — Blueprint (recomendado)

1. Sube este directorio a un repo Git (GitHub/GitLab/Bitbucket).
2. En [Render Dashboard](https://dashboard.render.com/) → **New** → **Blueprint**.
3. Conecta el repo; Render lee `render.yaml` y crea el Static Site.
4. Confirma el deploy.

### Opción B — Manual

1. **New** → **Static Site** → conecta el repo.
2. Si el sitio vive en un monorepo, pon **Root Directory** = `page-google-documents`.
3. Build Command: `npm ci && npm run build`
4. Publish Directory: `docs/.vitepress/dist`
5. Environment → `NODE_VERSION` = `22.14.0`

### Monorepo

Si el repo raíz es el padre (`MCP/`) y no esta carpeta:

- En el dashboard: **Root Directory** = `page-google-documents`
- O en un `render.yaml` del monorepo:

```yaml
services:
  - type: web
    name: google-documents-mcp-docs
    runtime: static
    rootDir: page-google-documents
    buildCommand: npm ci && npm run build
    staticPublishPath: docs/.vitepress/dist
    envVars:
      - key: NODE_VERSION
        value: "22.14.0"
```

## Estructura

```text
docs/
├── .vitepress/config.mts
├── guia/
├── herramientas/
├── clientes/
├── proyecto/
├── public/
└── index.md
render.yaml
```
