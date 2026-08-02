# Desarrollo

Notas para maintainers del paquete MCP (no de este sitio de docs).

## Setup

```bash
npm install
cp .env.example .env
npm run dev login
npm run check
npm test
```

## Scripts habituales

| Script | Uso |
| --- | --- |
| `npm run build` | Compila TypeScript a `dist/` |
| `npm run dev` | CLI en desarrollo con `tsx` |
| `npm run check` | `tsc --noEmit` |
| `npm test` | Build + tests |

## Convenciones

1. Tipado estricto, sin `any`
2. Nuevas herramientas solo vía `services/` + `tools/`
3. `npm run check` y `npm test` antes del PR
4. Fork + rama descriptiva

## Este sitio (docs)

El sitio vive en `page-google-documents` (VitePress) y **no modifica** el código del paquete MCP.

```bash
npm install
npm run dev
npm run build
```
