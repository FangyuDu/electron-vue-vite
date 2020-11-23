<template lang="pug">
header.app-menu
  nav.menu-nav
    ul.flex
      li.nav-item(:class="{'active': item === activeMenu}" @click="activeMenu = item" v-for="item in menuList" :index="item") {{item}}
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
      activeMenu: menuList[1]
    }
  },
  methods: { }
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
  background-image: url(../../assets/nasa.jpg);
  background-size: 1920px 1080px;
  background-color: scale-color($menuitemBg, $lightness: -50%);
  color: #fff;

}
</style>