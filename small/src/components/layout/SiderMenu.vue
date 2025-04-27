<template>
  <a-layout-sider :style="siderStyle">
    <a-menu mode="inline">
      <a-menu-item key="1">
        <user-outlined />
        <router-link to="/table">nav 1</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <video-camera-outlined />
        <router-link to="/table2">nav 2</router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <upload-outlined />
        <router-link to="/table3">nav 3</router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<script setup lang="ts">
const siderStyle: CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#fff',
}
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue'
import { RouterLink, RouterView } from 'vue-router'
</script>
