export default defineNuxtConfig({
    modules: [
        "@vueuse/nuxt",
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
