# Arquitectura

Vista de alto nivel del servidor MCP (paquete `@0pvalencia/google-documents-mcp`).

## Capas

```text
Cliente MCP (Cursor, VS Code, …)
        │ stdio
        ▼
   server / transports
        │
        ├── tools/docs/*      ← acciones (validan y delegan)
        ├── prompts/*         ← plantillas para el agente
        └── resources/*       ← guías google-documents://…
                │
                ▼
   services/docs/*    ← Docs API + Drive API
                │
                ▼
   auth / sesión OAuth
```

Las tools solo validan parámetros y delegan en `services/`. Los prompts/resources orientan la orquestación (informes largos, repair, edición segura).

## Árbol relevante

```text
src/
├── auth/                 # OAuth, PKCE, sesión
├── cli/                  # login, logout, doctor, help
├── config/               # storage y rutas del SO
├── server/
│   ├── mcp.ts            # tools + services
│   └── stdio.ts          # transporte local
├── transports/
│   └── stdio.ts
├── services/
│   └── docs/             # documents, content, formatting, academic
├── tools/docs/
│   ├── documents/
│   ├── content/
│   ├── formatting/
│   └── academic/
├── schemas/
├── types/
└── utils/
```

## Transporte

Solo **stdio** en la versión actual: el cliente lanza el proceso local y comunica por JSON-RPC MCP.
