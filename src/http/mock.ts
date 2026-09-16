import type { ApiResponse } from './types'

export const MOCK_DELAY_MS = import.meta.env.MODE === 'test' ? 0 : 400

const mocks: Record<string, ApiResponse> = {
  '/demo/success': {
    code: 0,
    message: 'ok',
    data: { hint: '示例请求成功，接到真实后端后删除 src/http/mock.ts' },
  },
  '/demo/fail': {
    code: 1,
    message: '这是一条示例失败',
    data: null,
  },
}

export function getMockResponse(url: string): ApiResponse | undefined {
  const path = url.replace(/^https?:\/\/[^/]+/, '')
  return mocks[path]
}

export function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
