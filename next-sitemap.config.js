/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://TU-DOMINIO-REAL.com', // <--- IMPORTANTE: Pon aquí tu dominio real (ej: https://myfootprint.com.co)
  generateRobotsTxt: true, // Esto generará el archivo robots.txt automáticamente
  
  // Opcional: Si quieres que el sitemap se regenere más rápido en entornos grandes
  // sitemapSize: 7000,

  // EXCLUIR rutas privadas del Sitemap (para que Google no las indexe)
  exclude: [
    '/appointmentsBaq',
    '/appoFacBaq',
    '/appointmentsPost',
    '/api/*'
  ],

  // Configuración del Robots.txt (Reemplaza al archivo manual)
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        // Aquí bloqueamos las mismas rutas privadas
        disallow: [
          '/appointmentsBaq', 
          '/appoFacBaq', 
          '/appointmentsPost', 
          '/api/*'
        ],
      },
    ],
  },
}