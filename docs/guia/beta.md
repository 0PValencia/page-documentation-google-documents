# Beta cerrada

El OAuth de Google está en modo **Testing**. Solo pueden autenticarse los usuarios añadidos manualmente como *test users* por el maintainer.

Paquete documentado: **`@0pvalencia/google-documents-mcp@0.6.3`**

## Si el login falla

1. Pide al maintainer que te añada como test user
2. Vuelve a ejecutar:

```bash
npx -y @0pvalencia/google-documents-mcp login
```

3. Comprueba con `doctor`

## Error 400 / navegador en Windows

Desde **0.6.3**:

- El login **abre el navegador directamente**
- **Nunca imprime la URL OAuth** en la terminal (copiar/pegar esa URL en Windows rompía los `&` de la query → error 400)
- En Windows usa `rundll32` para abrir el navegador sin truncar la query string
- El flujo no espera a que el opener termine antes de aceptar el callback (evita cuelgues si ya autorizaste en otra pestaña)

Si el navegador no abre solo, vuelve a ejecutar `login` o pide al maintainer soporte; no pegues URLs OAuth a mano desde logs antiguos.

## Qué implica

| Aspecto | Estado |
| --- | --- |
| Público general | No (lista cerrada) |
| Token lifetime | Sujeto a políticas de apps en Testing |
| Soporte | Reporta issues en el repositorio GitHub |

## Enlace del paquete

[`@0pvalencia/google-documents-mcp`](https://www.npmjs.com/package/@0pvalencia/google-documents-mcp)
