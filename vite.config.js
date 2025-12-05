import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    base: "/my_home_page/",
    plugins: [react(), tailwindcss()],
    server: {
        host: '0.0.0.0',
        port: 3000,
    },
})
