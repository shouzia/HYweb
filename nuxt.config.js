export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: '幻影官网',
        htmlAttrs: {
            lang: 'cn'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'Keywords', content: '幻影Pin官网,幻影官网，幻影WiFi,WiFi破解，幻影WiFi下载，幻影Pin下载' },
            { name: 'Keywords', content: '幻影WiFi - 真正无需网络让你免费连WiFi的神器！幻影wifi官网，幻影wifi最新版下载地址~幻影pin官网,幻影pin下载' },
            { name: 'Keywords', content: '幻影wifi,幻影wifi官网,幻影pin,幻影pin官网,幻影wifi3.0,幻影wifiios版,幻影wifi苹果版,幻影wifi-pin,wifi破解' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/logo.png' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/css/animate.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        'vue-scrollto/nuxt',

        // Or if you have custom options...
        ['vue-scrollto/nuxt', { duration: 300 }],
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}