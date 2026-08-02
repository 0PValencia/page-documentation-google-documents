# Sesión

La sesión OAuth se guarda en el directorio de configuración estándar del sistema operativo.

## Ubicación

| Sistema | Ruta |
| --- | --- |
| Linux | `~/.config/google-documents-mcp/` |
| macOS | `~/Library/Application Support/google-documents-mcp/` |
| Windows | `%APPDATA%\google-documents-mcp\` |

## Ciclo de vida

```bash
# crear / renovar sesión
npx -y @0pvalencia/google-documents-mcp login

# comprobar
npx -y @0pvalencia/google-documents-mcp doctor

# borrar sesión local
npx -y @0pvalencia/google-documents-mcp logout
```

## Notas

- Un solo login sirve para todos los clientes stdio en la misma máquina
- No hace falta configurar variables de entorno de API key del proveedor Google en el cliente
- Si cambias de cuenta Google, haz `logout` y luego `login` de nuevo
