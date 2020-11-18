<template lang="pug">
header.app-menu
  // TODO 导航内容
  nav
    ul
      li 框架
      li 项目
      li 环境
main.app-main
  p Node 版本号：{{nodeV}}
  p Npm 版本号：{{npmV}}
  button(@click="handleSend") 消息测试
  button: a(href="/workbench") 打开工作台
</template>
<script>
import { onMounted, getCurrentInstance } from 'vue'

export default {
  name: 'App',
  data () {
    return {
      nodeV: 'xx.xx.x',
      npmV: ''
    }
  },
  methods: {
    init() {
      console.log('self', this)
    },
    async handleSend() {
      let res = await this.$ipc.invoke('api:common/getEnv')
      if(res.success) {
        this.nodeV = res.data.nodeV
        this.npmV = res.data.npmV
      }
      console.log('res', res)
    },
    handleOpen() {

    }
  }
}
</script>

<style>
.logo-box {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
