import { registerMicroApps } from 'qiankun'

// 导入所有的微应用
import subAppConfig from '@/qiankun/subAppConfig' // 微应用的配置文件的路径

const { subApps } = subAppConfig

export function registerApps() {
  try {
    registerMicroApps(subApps, {
      beforeLoad: [
        (app) => {
          console.log('before load', app)
        },
      ],
      beforeMount: [
        (app) => {
          console.log('before mount', app)
        },
      ],
      afterUnmount: [
        (app) => {
          console.log('before unmount', app)
        },
      ],
    })
  } catch (err) {
    console.log(err)
  }
}
