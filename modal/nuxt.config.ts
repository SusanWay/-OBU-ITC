export default defineNuxtConfig({
    // Extending from modal nuxt.config.ts!
    app: {
        head: {
            meta: [
                { name: 'description', content: 'I am using the extends feature in nuxt 3!' }
            ],
        }
    }
})