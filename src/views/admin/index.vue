<template>
  <div class="view-adminUser">
    <el-breadcrumb separator="/" class="bread_crumb">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path: '/adminUser'}">Admin User</el-breadcrumb-item>
      <el-breadcrumb-item v-if="this.$route.name === 'adminUser.add'">Add USer</el-breadcrumb-item>
      <el-breadcrumb-item v-if="this.$route.name === 'adminUser.edit'">Edit User</el-breadcrumb-item>
    </el-breadcrumb>
    <router-view></router-view>
  </div>
</template>

<script>
  // import { mapActions } from 'vuex'
  export default {
    methods: {
      // ...mapActions([
      //   'loadAdminRoles'
      // ])
    },
    mounted () {
      // this.loadAdminRoles()
    }
  }
</script>
