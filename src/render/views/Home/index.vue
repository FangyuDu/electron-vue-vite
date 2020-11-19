<template lang="pug">
header.app-menu
  nav.menu-nav
    ul.flex
      li.nav-item(:class="{'active': item === activeMenu}" @click="handleMenuClick(item)" v-for="item in menuList" :index="item") {{item}}
main.app-main.flex-1
  keep-alive: component(:is="activeMenu")
</template>
<script>
import 环境 from './components/hj.vue'
import 框架 from './components/kj.vue'
import 项目 from './components/xm.vue'

export default {
  name: 'App',
  components: {
    环境,
    框架,
    项目
  },
  data () {
    const menuList = ['框架', '项目', '环境']
    return {
      menuList,
      activeMenu: menuList[1],
      nodeV: 'xx.xx.x',
      npmV: ''
    }
  },
  mounted () {
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
$menuitemBg: #555;
.app-menu {
  color: #fff;
  font-size: 14px;
  line-height: 30px;
  background-color: scale-color($menuitemBg, $lightness: -30%);
  padding-top: 2px;
  padding-left: 80px;
  .nav-item {
    text-align: center;
    width: 100px;
    cursor: pointer;
    background-color: $menuitemBg;
    border-top: 2px solid scale-color($menuitemBg, $lightness: +25%);
    user-select: none;
    &.active, &:hover {
      background-color: scale-color($menuitemBg, $lightness: +15%);
      border-top-color: lightblue;
    }
  }
  .nav-item + .nav-item {
    margin-left: 1px;
  }
}
.app-main {
  background-color: scale-color($menuitemBg, $lightness: -50%);
  color: #fff;

}
</style>