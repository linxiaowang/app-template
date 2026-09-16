<script setup lang="ts">
import { fetchDemoFail, fetchDemoSuccess } from '@/api/demo'

definePage({
  type: 'home',
  style: {
    navigationBarTitleText: '首页',
  },
})

const hint = ref('')

async function onSuccess() {
  hint.value = (await fetchDemoSuccess()).hint
}

async function onFail() {
  try {
    await fetchDemoFail()
  }
  catch {
    // Toast 由请求层处理
  }
}
</script>

<template>
  <view class="page">
    <view class="hero">
      <text class="kicker">
        Starter
      </text>
      <text class="title">
        把请求跑通再写业务
      </text>
      <text class="lead">
        下面两个按钮走本地 mock，用来看 loading 和失败 Toast。接到真实后端后删掉 `src/http/mock.ts` 和 `src/api/demo.ts`。
      </text>
    </view>

    <view class="actions">
      <wd-button block type="primary" @click="onSuccess">
        示例成功
      </wd-button>
      <wd-button plain block @click="onFail">
        示例失败
      </wd-button>
    </view>

    <view v-if="hint" class="card">
      <text class="card-label">
        上次成功
      </text>
      <text class="card-body">
        {{ hint }}
      </text>
    </view>
  </view>
</template>

<style scoped>
.page {
  padding: 32rpx 40rpx 40rpx;
  background: #f4efe6;
}
.hero {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
  margin-bottom: 48rpx;
}
.kicker {
  font-size: 22rpx;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #2f5d56;
}
.title {
  font-size: 48rpx;
  line-height: 1.25;
  font-weight: 650;
  color: #1a1814;
}
.lead {
  font-size: 28rpx;
  line-height: 1.6;
  color: #6b645c;
}
.actions {
  display: flex;
  flex-direction: column;
  gap: 24rpx;
}
.card {
  margin-top: 48rpx;
  padding: 32rpx;
  border: 1px solid #ddd4c4;
  background: #fffdf8;
}
.card-label {
  display: block;
  font-size: 22rpx;
  color: #2f5d56;
  margin-bottom: 12rpx;
}
.card-body {
  font-size: 28rpx;
  color: #1a1814;
  line-height: 1.5;
}
</style>
