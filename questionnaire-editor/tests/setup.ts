import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'

expect.extend(matchers) // 对 expect 的能力增强，不用可注释

// 清屏：解决单个文件内多个 test 多次 render，后面的 render 会累积前面 render 产生的 DOM 节点问题
afterEach(() => {
  cleanup()
})

// 如果遇到 window.matchMedia undefined is not a function 可以开启
// window.matchMedia = vi.fn().mockImplementation((query) => ({
//   matches: false,
//   media: query,
//   onchange: null,
//   addListener: vi.fn(),
//   removeListener: vi.fn(),
// }))
