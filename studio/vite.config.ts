import {defineConfig} from 'vite'
import {loadEnv} from 'vite'


export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), '')
    return {
        server: {
            port: 3333,
            open: true,
        },
        optimizeDeps: {
            exclude: ['@sanity/ui', 'sanity'],
        },
    }
})
