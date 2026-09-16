import { defineStore } from 'pinia'
import { uniStorage } from '@/http/storage'

export const useUserStore = defineStore('user', () => {
  const token = ref('')

  function setToken(value: string) {
    token.value = value
  }

  return { token, setToken }
}, {
  persist: {
    key: 'user',
    storage: uniStorage,
  },
})
