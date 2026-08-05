# image-lab-mcp

Búsqueda de imágenes con licencia abierta (Openverse + Wikimedia Commons) y atribución.

- npm: [`@0pvalencia/image-lab-mcp`](https://www.npmjs.com/package/@0pvalencia/image-lab-mcp)
- GitHub: [0PValencia/image-lab-mcp](https://github.com/0PValencia/image-lab-mcp)

```bash
npx -y @0pvalencia/image-lab-mcp
```

## Tools

| Tool | Uso |
| --- | --- |
| `search_images` | query → `insertUrl` + `attribution` |
| `format_attribution` | Formatea crédito para pie / bibliografía |

## Flujo con Docs

```text
search_images → insert_image(insertUrl=<exacta>)  [rehostViaDrive si Docs no puede fetch]
```

No inventes URLs: usa siempre la `insertUrl` devuelta.
