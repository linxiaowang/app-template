import { request } from '@/http'

export interface DemoSuccess {
  hint: string
}

/** 本地 mock 成功路径，接真实接口后删掉。 */
export function fetchDemoSuccess() {
  return request<DemoSuccess>({ url: '/demo/success' })
}

/** 本地 mock 失败路径，用来看统一 Toast。 */
export function fetchDemoFail() {
  return request<null>({ url: '/demo/fail' })
}
