import { describe, expect, it } from 'vitest'
import { HttpError } from '../src/http/types'
import { unwrapResponse } from '../src/http/unwrap'

describe('unwrapResponse', () => {
  it('code 为 0 时返回 data', () => {
    expect(unwrapResponse({ code: 0, data: { id: 1 }, message: 'ok' })).toEqual({ id: 1 })
  })

  it('业务失败抛出 HttpError', () => {
    try {
      unwrapResponse({ code: 1, data: null, message: '未登录' })
      expect.unreachable()
    }
    catch (error) {
      expect(error).toBeInstanceOf(HttpError)
      expect((error as HttpError).message).toBe('未登录')
      expect((error as HttpError).code).toBe(1)
    }
  })

  it('成功码可配置', () => {
    expect(unwrapResponse({ code: 200, data: 'yes', message: '' }, 200)).toBe('yes')
  })
})
