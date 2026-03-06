const baseURL = process.env.NUXT_APP_BASE_URL || '/'

export default defineNuxtConfig({
    extends: 'docus',
    modules: ['@nuxt/image'],
    devtools: { enabled: true },
    site: {
        name: 'FilaForms Integrations',
    },
    app: {
        baseURL,
        buildAssetsDir: 'assets',
        head: {
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: baseURL + 'favicon.ico',
                },
            ],
        },
    },
    image: {
        provider: 'none',
    },
    content: {
        build: {
            markdown: {
                highlight: {
                    langs: ['php', 'blade', 'bash'],
                },
            },
        },
    },
    nitro: {
        preset: 'github_pages',
    },
})
