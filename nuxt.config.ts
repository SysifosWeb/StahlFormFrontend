// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT,
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
  },
  ssr: true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxt/fonts', '@nuxtjs/tailwindcss', '@nuxt/icon'],
  fonts: {
    families: [
      {
        name: 'Poppins',
        weights: [400, 500, 600, 700]
      }
    ]
  },
  css: [
    '~/assets/css/main.css'
  ],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  }
})