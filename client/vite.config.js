import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    define: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'process.env.SWING_API_URL': JSON.stringify(''),
        'process.env.SDK_SENTRY_DSN': JSON.stringify(''),
    },
    plugins: [react()],
})
