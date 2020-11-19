<template lang="pug">
.com-hj
  p Node 版本号：{{nodeV}}
  p Npm 版本号：{{npmV}}
</template>
<script>
export default {
  name: '环境',
  data() {
    return {
      nodeV: '检测中...',
      npmV: '检测中...'
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.handleSend()
    },
    async handleSend() {
      let res = await this.$ipc.invoke('api:common/getEnv')
      if(res.success) {
        this.nodeV = res.data.nodeV
        this.npmV = res.data.npmV
      }
    },
    handleMenuClick(item) {
      this.activeMenu = item
    },
    handleOpen() {

    }
  }  
}
</script>
<style lang="scss" scoped>
.com-hj {
  padding: 20px;
}
</style>