import './assets/reset.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

import router from './router'

import Layout from './components/layout/index.vue'

const app = createApp(Layout)

app.use(createPinia())
app.use(router)
app.use(Antd)
app.mount('#app')
