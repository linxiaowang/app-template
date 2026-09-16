<script setup lang="ts">
import { getAppInfo } from '@/utils/app-info'

definePage({
  style: {
    navigationBarTitleText: '我的',
  },
})

const info = getAppInfo()
const rows = [
  { label: '应用', value: info.name },
  { label: '版本', value: info.version },
  { label: '包名', value: info.bundleId },
  { label: '环境', value: info.env },
  { label: 'API', value: info.apiBaseUrl },
]
</script>

<template>
  <view class="page">
    <text class="title">
      运行信息
    </text>
    <text class="lead">
      克隆后改 `manifest.config.ts` 里的名称和包名，以及 `.env.*` 里的接口地址。
    </text>

    <wd-cell-group border>
      <wd-cell
        v-for="row in rows"
        :key="row.label"
        :title="row.label"
        :value="row.value"
      />
    </wd-cell-group>
  </view>
</template>

<style scoped>
.page {
  padding: 32rpx 0 40rpx;
  background: #f4efe6;
}
.title {
  display: block;
  padding: 8rpx 40rpx 0;
  font-size: 44rpx;
  font-weight: 650;
  color: #1a1814;
}
.lead {
  display: block;
  padding: 16rpx 40rpx 32rpx;
  font-size: 26rpx;
  line-height: 1.6;
  color: #6b645c;
}
</style>
