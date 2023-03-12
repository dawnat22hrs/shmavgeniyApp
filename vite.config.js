import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// module.exports ={
//   pablicPath: process.env.Node
// }
// https://vitejs.dev/config/
export default defineConfig({
  base: '/shmavgeniyApp/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
