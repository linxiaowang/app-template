# App Template

基于 [vitesse-uni-app](https://github.com/uni-helper/vitesse-uni-app) 的 **iOS / Android** 开工骨架。日常用 H5 预览，发包走 App。

## 约定

| 项 | 选择 |
| --- | --- |
| UI | UnoCSS + [Wot UI](https://wot-ui.cn/)（`@wot-ui/ui`） |
| 导航 | uni 原生 navigationBar / tabBar（首页、我的） |
| 请求 | `src/http` 薄封装 `uni.request`，`{ code, data, message }`，成功码 `0` |
| 状态 | Pinia，按 store persist 到 `uni.storage` |
| 鉴权 | `user.token` 有值才带 `Authorization: Bearer`，无登录页 |
| 环境 | `.env.development` / `.env.production` 的 `VITE_API_BASE_URL` |
| 提交 | Conventional Commits（`commitlint`） |
| 其它 | 不做 i18n、不做暗色模式 |

## 开始

```bash
pnpm i
pnpm dev        # 默认 H5
pnpm dev:app    # App
pnpm test
pnpm lint
```

克隆后请改：

1. `manifest.config.ts` 的应用名、`appid`、Android `packagename`、iOS `id`（现为 `com.example.app`）
2. `.env.development` / `.env.production` 的接口地址
3. 接到真实后端后删除 `src/http/mock.ts` 与 `src/api/demo.ts`

## 目录

```
src/
  api/       按模块的接口函数
  http/      请求封装、mock、成功码
  stores/    Pinia
  pages/     文件路由
  components/
  layouts/
  utils/
  static/
```

## 请求

```ts
import { request } from '@/http'

const data = await request<User>({ url: '/user/me' })
await request({ url: '/silent', loading: false, toast: false })
```

## Wot UI

页面里直接写 `wd-button`、`wd-cell` 等，不用 import。文档：https://wot-ui.cn/
