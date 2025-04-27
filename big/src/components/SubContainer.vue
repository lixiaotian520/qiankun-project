<template>
  <!-- 容器的id。微应用配置的时候需要 -->
  <div id="sub-container"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { start } from 'qiankun'
// 引入qiankun
import { registerApps } from '@/qiankun/main.js' // qiankun主文件的路径

onMounted(() => {
  if (!window.qiankunStarted) {
    window.qiankunStarted = true
    registerApps()
    // 开启qiankun
    start({
      // sandbox: {
      //   // sandbox: { strictStyleIsolation: true } // 严格隔离
      //   // experimentalStyleIsolation: true // 样式隔离
      // }
    })
  }
})
</script>
