<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside width="220px">
        <nav_menu></nav_menu>
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav_header></nav_header>
        </el-header>
        <el-main class="page-content">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import nav_menu from '@/components/nav_menu'
import nav_header from '@/components/nav_header'

export default defineComponent({
  components: {
    nav_menu,
    nav_header
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.main-content,
.page {
  height: 100%;
}
.page-header {
  padding: 0px;
}
.page-content {
  height: calc(100% - 48px);
}
.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}
.el-header {
  height: 75px !important;
  background-color: #0086f6;
}
.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #eee;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none;
  }
}
.el-main {
  color: #333;
  background-color: #f0f2f5;
}
</style>
