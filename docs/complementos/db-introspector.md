# db-introspector-mcp

Introspección de PostgreSQL para informes grounded (esquema real).

- npm: [`@0pvalencia/db-introspector-mcp`](https://www.npmjs.com/package/@0pvalencia/db-introspector-mcp)
- GitHub: [0PValencia/db-introspector-mcp](https://github.com/0PValencia/db-introspector-mcp)

```bash
export DATABASE_URL=postgresql://user:pass@localhost:5432/dbname
npx -y @0pvalencia/db-introspector-mcp
```

## Tools

| Tool | Uso |
| --- | --- |
| `list_tables` | Listar tablas |
| `describe_table` | Columnas / tipos |
| `list_foreign_keys` | FKs |
| `schema_summary` | Resumen del esquema |
| `er_dot` | DOT para diagrama ER |

## Flujo

```text
er_dot → diagram-studio (engine=graphviz) → insert_image en Docs
describe_table → tablas de datos en el informe (create_table)
```
