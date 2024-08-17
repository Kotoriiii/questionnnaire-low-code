import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), visualizer({ open: false })],
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
        entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
        assetFileNames: '[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
        manualChunks(id) {
          if (id.indexOf('node_modules') != -1) {
            // 让每个插件都打包成独立的文件
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        },
      },
    },
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  base:
    process.env.NODE_ENV === 'production' ? 'https://static.jasonlidevelop.com/lowcode/assets' : '',
})
