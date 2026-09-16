import type { ApiResponse, RequestOptions } from './types'
import { useUserStore } from '@/stores/user'
import { beginLoading, endLoading, showErrorToast } from './feedback'
import { getMockResponse, MOCK_DELAY_MS, wait } from './mock'
import { HttpError } from './types'
import { unwrapResponse } from './unwrap'

function resolveUrl(url: string) {
  if (/^https?:\/\//.test(url))
    return url
  const base = import.meta.env.VITE_API_BASE_URL || ''
  if (!base)
    return url
  return `${base.replace(/\/$/, '')}/${url.replace(/^\//, '')}`
}

function authHeader(): Record<string, string> {
  const token = useUserStore().token
  if (!token)
    return {}
  return { Authorization: `Bearer ${token}` }
}

export async function request<T>(options: RequestOptions): Promise<T> {
  const loading = options.loading !== false
  const toast = options.toast !== false
  const url = resolveUrl(options.url)

  if (loading)
    beginLoading()

  try {
    const mock = getMockResponse(options.url) ?? getMockResponse(url)
    if (mock) {
      await wait(MOCK_DELAY_MS)
      return unwrapResponse(mock as ApiResponse<T>)
    }

    const data = await new Promise<ApiResponse<T>>((resolve, reject) => {
      uni.request({
        url,
        method: options.method || 'GET',
        data: options.data as AnyObject | undefined,
        header: {
          ...authHeader(),
          ...options.header,
        },
        success: (res) => {
          if (res.statusCode >= 200 && res.statusCode < 300)
            resolve(res.data as ApiResponse<T>)
          else
            reject(new HttpError('网络错误', res.statusCode))
        },
        fail: () => {
          reject(new HttpError('网络错误'))
        },
      })
    })

    return unwrapResponse(data)
  }
  catch (error) {
    if (toast) {
      const message = error instanceof HttpError ? error.message : '请求失败'
      showErrorToast(message)
    }
    throw error
  }
  finally {
    if (loading)
      endLoading()
  }
}
