import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const { mockedToken } = vi.hoisted(() => ({ mockedToken: { value: '' } }))

vi.mock('@/stores/user', () => ({
  useUserStore: () => ({ token: mockedToken.value }),
}))

const uni = {
  showLoading: vi.fn(),
  hideLoading: vi.fn(),
  showToast: vi.fn(),
  request: vi.fn(),
}

vi.stubGlobal('uni', uni)

describe('request', () => {
  beforeEach(() => {
    mockedToken.value = ''
    vi.clearAllMocks()
    vi.stubEnv('VITE_API_BASE_URL', 'https://api.example.com')
  })

  afterEach(() => {
    vi.unstubAllEnvs()
  })

  it('mock 成功返回 data，并显示 loading', async () => {
    const { request } = await import('../src/http/request')
    const { resetLoadingCount } = await import('../src/http/feedback')
    resetLoadingCount()

    const data = await request<{ hint: string }>({ url: '/demo/success' })
    expect(data.hint).toContain('示例请求成功')
    expect(uni.showLoading).toHaveBeenCalledTimes(1)
    expect(uni.hideLoading).toHaveBeenCalledTimes(1)
    expect(uni.request).not.toHaveBeenCalled()
  })

  it('mock 失败 Toast 且抛错', async () => {
    const { request } = await import('../src/http/request')
    const { HttpError } = await import('../src/http/types')
    const { resetLoadingCount } = await import('../src/http/feedback')
    resetLoadingCount()

    await expect(request({ url: '/demo/fail' })).rejects.toBeInstanceOf(HttpError)
    expect(uni.showToast).toHaveBeenCalledWith(
      expect.objectContaining({ title: '这是一条示例失败', icon: 'none' }),
    )
  })

  it('toast: false 时不弹 Toast', async () => {
    const { request } = await import('../src/http/request')
    const { resetLoadingCount } = await import('../src/http/feedback')
    resetLoadingCount()

    await expect(request({ url: '/demo/fail', toast: false })).rejects.toBeTruthy()
    expect(uni.showToast).not.toHaveBeenCalled()
  })

  it('loading: false 时不显示 loading', async () => {
    const { request } = await import('../src/http/request')
    const { resetLoadingCount } = await import('../src/http/feedback')
    resetLoadingCount()

    await request({ url: '/demo/success', loading: false })
    expect(uni.showLoading).not.toHaveBeenCalled()
  })

  it('有 token 时带 Bearer', async () => {
    mockedToken.value = 'abc'
    uni.request.mockImplementation((options: UniNamespace.RequestOptions) => {
      expect(options.header?.Authorization).toBe('Bearer abc')
      options.success?.({
        data: { code: 0, data: { ok: true }, message: 'ok' },
        statusCode: 200,
        header: {},
        cookies: [],
      })
    })

    const { request } = await import('../src/http/request')
    const { resetLoadingCount } = await import('../src/http/feedback')
    resetLoadingCount()

    await expect(request({ url: '/real' })).resolves.toEqual({ ok: true })
  })
})
