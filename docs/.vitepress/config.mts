import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'es-ES',
  title: 'Google Documents MCP',
  description:
    'Documentación del servidor MCP para Google Docs — asistente documental académico.',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#3451b2' }],
  ],

  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'Google Documents MCP',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Buscar', buttonAriaLabel: 'Buscar' },
          modal: {
            noResultsText: 'Sin resultados',
            resetButtonTitle: 'Limpiar',
            footer: {
              selectText: 'seleccionar',
              navigateText: 'navegar',
              closeText: 'cerrar',
            },
          },
        },
      },
    },

    nav: [
      { text: 'Guía', link: '/guia/introduccion' },
      { text: 'Herramientas', link: '/herramientas/' },
      { text: 'Clientes', link: '/clientes/' },
      { text: 'Proyecto', link: '/proyecto/arquitectura' },
      {
        text: 'npm',
        link: 'https://www.npmjs.com/package/@0pvalencia/google-documents-mcp',
      },
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/0PValencia/google-workspace-mcp',
      },
    ],

    sidebar: [
      {
        text: 'Guía',
        items: [
          { text: 'Introducción', link: '/guia/introduccion' },
          { text: 'Instalación y primer uso', link: '/guia/instalacion' },
          { text: 'CLI', link: '/guia/cli' },
          { text: 'Sesión', link: '/guia/sesion' },
          { text: 'Beta cerrada', link: '/guia/beta' },
        ],
      },
      {
        text: 'Academic Assistant',
        items: [
          { text: 'Flujos académicos', link: '/guia/academic-assistant' },
        ],
      },
      {
        text: 'Herramientas MCP',
        items: [
          { text: 'Resumen', link: '/herramientas/' },
          { text: 'Documentos y Drive', link: '/herramientas/documentos' },
          { text: 'Edición', link: '/herramientas/edicion' },
          { text: 'Formato', link: '/herramientas/formato' },
          { text: 'Académicas', link: '/herramientas/academicas' },
        ],
      },
      {
        text: 'Clientes MCP',
        items: [
          { text: 'Índice', link: '/clientes/' },
          { text: 'Cursor', link: '/clientes/cursor' },
          { text: 'VS Code', link: '/clientes/vscode' },
          { text: 'Claude Desktop', link: '/clientes/claude-desktop' },
          { text: 'Claude Code', link: '/clientes/claude-code' },
          { text: 'OpenCode', link: '/clientes/opencode' },
          { text: 'Otros (stdio)', link: '/clientes/otros' },
        ],
      },
      {
        text: 'Proyecto',
        items: [
          { text: 'Arquitectura', link: '/proyecto/arquitectura' },
          { text: 'Desarrollo', link: '/proyecto/desarrollo' },
          { text: 'Roadmap', link: '/proyecto/roadmap' },
        ],
      },
    ],

    outline: {
      label: 'En esta página',
      level: [2, 3],
    },

    docFooter: {
      prev: 'Anterior',
      next: 'Siguiente',
    },

    lastUpdated: {
      text: 'Actualizado',
      formatOptions: { dateStyle: 'medium' },
    },

    returnToTopLabel: 'Volver arriba',
    sidebarMenuLabel: 'Menú',
    darkModeSwitchLabel: 'Tema',
    lightModeSwitchTitle: 'Modo claro',
    darkModeSwitchTitle: 'Modo oscuro',

    footer: {
      message: 'Documentación de @0pvalencia/google-documents-mcp',
      copyright: 'MIT License',
    },
  },
})
