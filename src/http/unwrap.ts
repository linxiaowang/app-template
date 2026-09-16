import { type ApiResponse, HttpError, SUCCESS_CODE } from './types'

export function unwrapResponse<T>(payload: ApiResponse<T>, successCode = SUCCESS_CODE): T {
  if (payload.code !== successCode) {
    throw new HttpError(payload.message || '请求失败', payload.code)
  }
  return payload.data
}
