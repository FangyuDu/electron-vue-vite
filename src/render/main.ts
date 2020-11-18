import Vue, { createApp, h, markRaw } from 'vue'

import routes from './router'
import page from 'page'
// vite 会编译 import 的形式；所以 electron 及 node.js 内置模块用 require 形式
const { ipcRenderer } = require('electron')
import { store, isdev } from '/utils/index'

import './index.css'

console.log('ipcRenderer:', ipcRenderer)
console.log('Store', store)
console.log('electron is dev', isdev)


const DefaultRaw = markRaw({
  render: () => h('div', 'Loading...')
})

interface IApp {
  [p: string]: any
}

const AppPage: IApp = {
  data () {
    return {
      ViewComponent: null
    }
  },
  render ():Vue.Component {
    return h(this.ViewComponent || DefaultRaw)
  },
  created() {
    for(let route in routes) {
      console.log('route', route)
      page(route, () => {
        this.ViewComponent = markRaw(routes[route])
      })
    }
    page()
  }
}

const app = createApp(AppPage)
app.mount('#app')
app.config.globalProperties.$ipc = ipcRenderer