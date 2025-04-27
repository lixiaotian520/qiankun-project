const subApps = [
  {
    name: 'SubAppName', // 子应用名称，保持唯一性。在微应用中会使用到。
    container: '#sub-container', // 微应用挂载的容器的id。   SubContainer组件中声明的id名
    activeRule: '/app/app-vue3', // 主应用响应的路由信息。 即当访问到这个路由下面的路由，都是微应用的路由。router.js文件配置的path
    entry: '//localhost:7788', // 子应用网址。 本地环境下指定端口。当主应用匹配到activeRule时，会被转发到当前设置的链接下面。
    props: {}, // 主应用与子应用通信传值
  },
]

export default {
  subApps,
}
