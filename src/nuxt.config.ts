// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],
  extends: [
    '../modal',
  ],
  alias: {
    '~modal': '../modal',
  },
  svgoLoader: {
    svgoConfig: {
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              convertColors: {
                currentColor: true,
              },
              removeViewBox: false,
            },
          },
        },
      ],
    },
  },
  googleFonts: {
    families: {
      Roboto: [400, 500, 800],
    },
  },
})
