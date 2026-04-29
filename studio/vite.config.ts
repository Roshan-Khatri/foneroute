import {defineConfig, loadEnv} from 'vite'

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), '')
    return {
        define: {
            'process.env': env
        },
        server: {
            port: 10001,
            open: true,
        },
        optimizeDeps: {
            exclude: ['@sanity/ui', 'sanity'],
        },
    }
})
