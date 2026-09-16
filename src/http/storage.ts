/** pinia-plugin-persistedstate 用的 uni.storage 适配。 */
export const uniStorage = {
  getItem(key: string) {
    const value = uni.getStorageSync(key)
    return value === '' || value == null ? null : String(value)
  },
  setItem(key: string, value: string) {
    uni.setStorageSync(key, value)
  },
}
