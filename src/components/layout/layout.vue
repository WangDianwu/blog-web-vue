<template>
  <el-container>
    <div class="cn-header"></div>
    <el-header>
      <MyHeader></MyHeader>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <!-- <el-container>
        <Menu></Menu>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container> -->
    <!-- <el-footer>Footer</el-footer> -->
  </el-container>
</template>
<script>
import MyHeader from '@/components/layout/header'
import Menu from './menu'

export default {
  components: { MyHeader, Menu },
  name: 'App'
}
</script>
<style lang="scss">
.cn-header{
  height: 100px;
  background-color: aqua;
}
body {
  margin: 0 auto;
}

.el-header,
.el-footer {
  width: 1366px;
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0;
  margin: 0 auto;
}

.el-container {
  // position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0;
  bottom: 0;
}
.el-header {
  width: 1366px;
  padding: 0;
  z-index: 1000;
}

.el-main {
  margin: 0 auto;
  width: 1366px;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  > div {
    height: 100%;
  }
}
</style>
