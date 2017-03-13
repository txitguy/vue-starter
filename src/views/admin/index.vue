<template>
  <div class="view-adminUser">
    <el-breadcrumb separator="/" class="bread_crumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path: '/adminUser'}">管理员</el-breadcrumb-item>
      <el-breadcrumb-item v-if="this.$route.name === 'adminUser.add'">新增</el-breadcrumb-item>
      <el-breadcrumb-item v-if="this.$route.name === 'adminUser.edit'">编辑</el-breadcrumb-item>
    </el-breadcrumb>
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    methods: {
      ...mapActions([
        'loadAdminRoles'
      ])
    },
    mounted () {
      this.loadAdminRoles()
    }
  }
</script>
