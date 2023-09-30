import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

module.exports = {
  build: {
    outDir: 'dist',
  },
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
