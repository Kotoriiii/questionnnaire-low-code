import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: './tests/setup.ts',
    environment: 'jsdom',
    coverage: {
      thresholds: {
        branches: 20, // 自行设置合理值
        functions: 20,
        lines: 20,
      },
      include: ['src/'], // 只计算 src 内文件覆盖率
    },
  },
})
