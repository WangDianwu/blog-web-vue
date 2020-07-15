<template>
  <div class="heafer-contiter">
    <div class="header-img">
      <img src="../../assets/logo.png" class="header-img" />
      <a class="head-z">vue-ele-web</a>
    </div>
    <div>
      <HeaderMenu></HeaderMenu>
    </div>
    <div class="head-msg">
      <el-button class="bnt-exit" type="primary" @click="btnexit">
        退出登陆
      </el-button>
    </div>
  </div>
</template>
<script>
import HeaderMenu from './headermenu'
export default {
  components: { HeaderMenu },
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    btnexit() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
<style scoped>
.heafer-contiter {
  height: 100%;
  background-color: #373d41;
  color: white;
  display: flex;
}

.header-img {
  height: 100%;
  float: left;
  margin-left: 10px;
}

.class-menu {
  width: 100%;
}
.head-msg {
  float: right;
  display: -webkit-inline-box;
}
.header-msg {
  margin-right: 10px;
}

.header-peo {
  margin-right: 10px;
}

.head-z {
  margin-left: 20px;
}

.bnt-exit {
  float: right;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
  font-size: 10px;
  height: 35px;
  margin-top: 12px;
}
</style>
