<template>
    <el-menu
      router
      unique-opened
      text-color="#fff"
      :collapse="isCollapse"
      :collapse-transition="false"
      background-color="#333744"
      active-text-color="#409EFF"
      :default-active="$route.path"
      mode="horizontal"
    >
      <el-menu-item index="home">首页</el-menu-item>
      <el-submenu :index="item.id + ''" v-for="item in menulist" :key="item.id">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{ item.authName }}</span>
        </template>
        <el-menu-item
          :index="'/' + subItem.path"
          v-for="subItem in item.children"
          :key="subItem.id"
        >
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>{{ subItem.authName }}</span>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
</template>
<script>
import { getmenu } from '../../api/user'
export default {
  data() {
    return {
      isCollapse: false,
      menulist: []
    }
  },
  created() {
    this.getMenuList()
  },
  methods: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    async getMenuList() {
      const { data } = await getmenu()
      console.log(data)
      if (data.code === 200) {
        this.menulist = data.data
      } else {
        this.$message({
          type: 'error',
          message: data.meta.msg
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-aside {
  background-color: #333744;
  .el-menu {
    border-right: none;
  }
}

.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
