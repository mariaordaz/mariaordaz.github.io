import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Cambia esto a '/mariaordaz.github.io/' si usas un repo de proyecto (no de usuario)
})