import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import { createHtmlPlugin } from 'vite-plugin-html'
import viteImagemin from 'vite-plugin-imagemin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: false }),
    createHtmlPlugin({
      inject: {
        data: {
          dnsPrefetchLinks: `
            <link rel="dns-prefetch" href="https://static.jasonlidevelop.com" />
            <link rel="preconnect" href="https://static.jasonlidevelop.com" crossorigin />
          `,
        },
      },
      minify: true,
    }),
    viteImagemin({
      webp: {
        quality: 75, // 转换为 WebP 格式时的质量
      },
    }),
  ],
  build: {
    rollupOptions: {
      external: [new RegExp('/stories/.*')],
      output: {
        chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
        entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
        assetFileNames: '[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
        manualChunks(id) {
          // 遍历libraryChunkMap的键（即库名），查找与模块ID存在包含关系的库名
          const libraryChunkMap: Record<string, string> = {
            antd: 'antd',
            recharts: 'recharts',
            dnd: 'dnd',
            'react-dom': 'react-dom',
            react: 'react',
          }

          // 检查模块ID是否包含'node_modules'，即是否为第三方依赖
          if (id.includes('node_modules')) {
            // 遍历libraryChunkMap的键（即库名），查找与模块ID存在包含关系的库名
            const matchedLibrary = Object.keys(libraryChunkMap).find(library =>
              id.includes(library)
            )

            // 如果找到了匹配的库名，返回对应的chunk名称（从libraryChunkMap中获取）
            if (matchedLibrary) {
              return libraryChunkMap[matchedLibrary]
            } else {
              // 如果未找到匹配的库名，将该第三方依赖归入默认的'vendor' chunk
              return 'vendor'
            }
          } else {
            // 如果模块ID不包含'node_modules'，即不是第三方依赖，则将其归入'index' chunk
            return 'index'
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
