# CLI

El binario del paquete es `google-documents-mcp` (vía `npx` o instalación global).

Versión documentada: **0.6.3**

## Comandos

| Comando | Descripción |
| --- | --- |
| `google-documents-mcp` | Inicia el servidor MCP (stdio) |
| `… login` | Inicia sesión OAuth con Google (abre el navegador) |
| `… logout` | Cierra la sesión local |
| `… doctor` | Verifica sesión y acceso a las APIs |
| `… version` | Muestra la versión |
| `… help` | Lista los comandos |

## Ejemplos

```bash
npx -y @0pvalencia/google-documents-mcp login
npx -y @0pvalencia/google-documents-mcp doctor
npx -y @0pvalencia/google-documents-mcp version
```

## Login

- Abre el navegador automáticamente (PKCE)
- No imprime la URL OAuth en la terminal (evita errores en Windows)
- En Windows usa `rundll32` para preservar los `&` de la query
- Si el opener falla, el proceso sigue esperando el callback del navegador

Más detalle: [Error 400 / Windows](/guia/beta#error-400--navegador-en-windows).

## Doctor

Comprueba, en orden:

1. Sesión local presente
2. Refresh token válido
3. Usuario autenticado
4. Docs API
5. Drive API
6. Permisos efectivos

Si `doctor` falla, arregla la sesión antes de depurar el cliente IDE.
