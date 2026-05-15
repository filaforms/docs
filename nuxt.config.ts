import { readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const baseURL = process.env.NUXT_APP_BASE_URL || '/'

function collectContentRoutes(dir: string, prefix = ''): string[] {
    const routes: string[] = []

    for (const entry of readdirSync(dir)) {
        const fullPath = join(dir, entry)
        const segment = entry.replace(/^\d+\./, '')

        if (statSync(fullPath).isDirectory()) {
            routes.push(...collectContentRoutes(fullPath, `${prefix}/${segment}`))
            continue
        }

        if (!entry.endsWith('.md')) {
            continue
        }

        const filename = segment.replace(/\.md$/, '')

        if (filename === 'index') {
            routes.push(prefix || '/')
            continue
        }

        routes.push(`${prefix}/${filename}`)
    }

    return routes
}

const contentRoutes = collectContentRoutes('./content')

export default defineNuxtConfig({
    extends: 'docus',
    modules: ['@nuxt/image', 'nuxt-fathom'],
    fathom: {
        siteId: process.env.NUXT_PUBLIC_FATHOM_SITE_ID || '',
    },
    devtools: { enabled: true },
    site: {
        name: 'FilaForms Docs',
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
    routeRules: {
        '/': { redirect: '/getting-started/installation' },
    },
    nitro: {
        preset: 'github_pages',
        prerender: {
            // The index uses a meta-refresh redirect, which Nitro's crawler can't follow,
            // so it discovers zero content routes on its own. Feed every content/*.md path
            // explicitly so each page lands in the static build.
            routes: contentRoutes,
            crawlLinks: true,
            failOnError: false,
        },
    },
})
