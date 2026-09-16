/** 请求层用 uni Toast / Loading，不依赖页面挂载 wot 组件。 */

let loadingCount = 0

export function resetLoadingCount() {
  loadingCount = 0
}

export function beginLoading() {
  loadingCount++
  if (loadingCount === 1)
    uni.showLoading({ title: '加载中', mask: true })
}

export function endLoading() {
  loadingCount = Math.max(0, loadingCount - 1)
  if (loadingCount === 0)
    uni.hideLoading()
}

export function showErrorToast(message: string) {
  uni.showToast({
    title: message || '请求失败',
    icon: 'none',
  })
}
