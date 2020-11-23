<template lang="pug">
.com-xm.flex.full
  //- TODO 左侧内容
  .left
    button 创建页面
  .flex-1
    button(@click="openWorkbench") 打开工作台
</template>
<script>
import { openWorkbench } from '/utils/ipc.ts'

export default {
  name: '项目',
  methods: {
    openWorkbench
  }
}
</script>
<style lang="scss" scoped>
.left {
  width: 200px;
  background-color: rgba(0, 0, 0, .5);
}
</style>