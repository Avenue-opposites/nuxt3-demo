import { resolve } from "path"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@unocss/nuxt','@nuxt/content'],
    css: [
        "assets/global.scss"
    ],
})
