import {defineConfigWithTheme} from "vitepress";
import type {ThemeConfig} from '@hempworks/pilgrim'
import config from '@hempworks/pilgrim/config'

export default defineConfigWithTheme<ThemeConfig>({
    extends: config,
    title: 'Next Laravel',
    description: 'A package which allows you to build scalable Laravel Application',
    base: '/',
    cleanUrls: false,
    srcDir: 'src',

    head: [
        ['link', {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: 'https://forge.laravel.com/apple-touch-icon.png',
        }],
        ['link', {
            rel: 'icon',
            sizes: '16x16',
            type: 'image/png',
            href: '/icons/16x16.png',
        }],
        ['link', {
            rel: 'icon',
            sizes: '32x32',
            type: 'image/png',
            href: '/icons/32x32.png',
        }],
        // ['link', {
        //     rel: 'manifest',
        //     href: 'https://forge.laravel.com/site.webmanifest',
        // }],
        /*['link', {
            rel: 'mask-icon',
            href: '/icons/32x32.png',
        }],*/
        ['meta', {
            name: 'msapplication-TileColor',
            content: '#18b69b',
        }],
        ['meta', {
            name: 'msapplication-TileImage',
            content: '/icons/144x144.png',
        }]
    ],

    themeConfig: {
        logo: {
            light: '/logo.svg',
            dark: '/logo.svg',
        },
        nav: [
            {text: 'Github', link: 'https://github.com/laranex/next-laravel'}
        ],
        sidebar: [
            {
                text: "Getting Started",
                items: [
                    {text: 'Introduction', link: '/introduction'},
                    {text: 'Principles', link: '/principles'},
                    {text: 'Installation', link: '/installation'},
                    {text: 'Configuration', link: '/configuration'}
                ],
            },
            {
                text: "Usage",
                items: [
                    {text: 'Route', link: '/usage/route'},
                    {text: 'Controller', link: '/usage/controller'},
                    {text: 'Feature', link: '/usage/feature'},
                    {text: 'Request', link: '/usage/request'},
                    {text: 'Operation', link: '/usage/operation'},
                    {text: 'Job', link: '/usage/job'},
                ],
            },
        ],
        search: {
            provider: 'local',
            options: {
                placeholder: 'Search ...',
            },
        }
    },
    vite: {
        server: {
            host: true,
            fs: {
                // for when developing with locally linked theme
                allow: ['../..']
            }
        },
    }
})
