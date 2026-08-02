# Beta cerrada

El OAuth de Google está en modo **Testing**. Solo pueden autenticarse los usuarios añadidos manualmente como *test users* por el maintainer.

## Si el login falla

1. Pide al maintainer que te añada como test user
2. Vuelve a ejecutar:

```bash
npx -y @0pvalencia/google-documents-mcp login
```

3. Comprueba con `doctor`

## Qué implica

| Aspecto | Estado |
| --- | --- |
| Público general | No (lista cerrada) |
| Token lifetime | Sujeto a políticas de apps en Testing |
| Soporte | Reporta issues en el repositorio GitHub |

## Enlace del paquete

[`@0pvalencia/google-documents-mcp`](https://www.npmjs.com/package/@0pvalencia/google-documents-mcp)
