export const SUCCESS_CODE = 0

export interface ApiResponse<T = unknown> {
  code: number
  data: T
  message: string
}

export interface RequestOptions {
  url: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  data?: unknown
  header?: Record<string, string>
  /** 默认 true */
  loading?: boolean
  /** 默认 true */
  toast?: boolean
}

export class HttpError extends Error {
  code?: number

  constructor(message: string, code?: number) {
    super(message)
    this.name = 'HttpError'
    this.code = code
  }
}
