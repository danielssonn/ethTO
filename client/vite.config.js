import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
/* eslint-disable no-undef */
export default defineConfig({
    define: {
        ALCHEMY_ID: JSON.stringify(process.env.ALCHEMY_API_KEY_MAINNET),
        CONTRACT_ETHEREUM_DEV: JSON.stringify(
            process.env.CONTRACT_ETHEREUM_DEV
        ),
    },
    plugins: [react()],
})
/* eslint-enable no-undef */
