<template>
  <div v-if="qiankunWindow.__POWERED_BY_QIANKUN__">
    <RouterView />
  </div>
  <div v-else style="height: 100%; display: flex; flex-direction: column">
    <a-layout-header :style="headerStyle">Header</a-layout-header>
    <a-layout>
      <SiderMenu />
      <a-layout-content :style="contentStyle">
        <RouterView />
      </a-layout-content>
    </a-layout>
  </div>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import type { CSSProperties } from 'vue'
import SiderMenu from './SiderMenu.vue'
const headerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
}

const contentStyle: CSSProperties = {
  backgroundColor: '#e5e7eb',
  padding: '8px',
}
</script>
