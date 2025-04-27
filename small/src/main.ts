import './assets/reset.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

import router from './router'

import Layout from './components/layout/index.vue'

let app = null

const render = (container) => {
  app = createApp(Layout)
  app.use(createPinia())
  app.use(router)
  app.use(Antd)
  app.mount(container ? container.querySelector('#app') : '#app')
}

const initQianKun = () => {
  renderWithQiankun({
    mount(props) {
      const { container } = props
      render(container)
    },
    bootstrap() {},
    unmount() {
      app.unmount()
    },
  })
}

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()
