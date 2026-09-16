/// <reference types="vite/client" />
/// <reference types="pinia-plugin-persistedstate" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
