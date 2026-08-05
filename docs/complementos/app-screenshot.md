# app-screenshot-mcp

Capturas de UI real con Playwright (Chromium).

- npm: [`@0pvalencia/app-screenshot-mcp`](https://www.npmjs.com/package/@0pvalencia/app-screenshot-mcp)
- GitHub: [0PValencia/app-screenshot-mcp](https://github.com/0PValencia/app-screenshot-mcp)

```bash
npx -y @0pvalencia/app-screenshot-mcp
# si hace falta:
npx playwright install chromium
```

## Tools

| Tool | Uso |
| --- | --- |
| `capture_url` | URL → PNG |
| `capture_with_login` | email/password + selectores → PNG |

## Flujo con Docs

```text
capture_url → subir/rehost → insert_image en el Doc
```

Útil para pantallas de prototipos / demos en informes tipo Angélica.
