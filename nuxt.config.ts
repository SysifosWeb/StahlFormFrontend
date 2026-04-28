// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT,
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
  },
  ssr: false,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxt/fonts', '@nuxtjs/tailwindcss', '@nuxt/icon'],
  fonts: {
    families: [
      {
        name: 'aktiv-grotesk',
        provider: 'none'
      }
    ]
  },
  css: [
    '~/assets/css/main.css'
  ],
  app: {
    head: {
      htmlAttrs: { lang: 'es-CL' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: '%s',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'canonical', href: 'https://www.stahlform.cl' }
      ],
      meta: [
        { name: 'author', content: 'StahlForm PyC Ltda.' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#003e49' },
        { name: 'geo.region', content: 'CL-CO' },
        { name: 'geo.placename', content: 'La Serena, Coquimbo' },
        { name: 'geo.position', content: '-29.9059;-71.2501' },
        { name: 'ICBM', content: '-29.9059, -71.2501' },
        // Open Graph defaults
        { property: 'og:site_name', content: 'StahlForm PyC' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'es_CL' },
        { property: 'og:image', content: 'https://www.stahlform.cl/img/og-stahlform.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:type', content: 'image/png' },
        // Twitter Card defaults
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://www.stahlform.cl/img/og-stahlform.png' }
      ]
    }
  }
})