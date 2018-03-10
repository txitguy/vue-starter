<template>
  <div class="layout-header">
    <el-row type="flex" justify="space-between">
      <el-col :span="6"></el-col>
      <el-col :span="6">
        <h3 class="big-title"><router-link to="/">Link A</router-link></h3>
      </el-col>
      <el-col :span="6" class="text-right">
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            {{ loggedUser.bUserName }} <i class="caret"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="profile">Profile</el-dropdown-item>
            <el-dropdown-item command="logout">Logout</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>    

  </div>
</template>

<script>
  import _ from 'lodash'
  import session from 'services/session'
  export default {
    data () {
      return {
        loggedUser: {}
      }
    },
    methods: {
      handleCommand (command) {
        console.log(command)
        this[`handle${_.upperFirst(command)}`]()
      },
      handleProfile () {
        console.log('profile')
      },
      handleLogout () {
        console.log('logout')
      }
    },
    mounted () {
      this.loggedUser = session.get()
      console.log(this.loggedUser)
    }
  }
</script>

<style scoped>
  .layout-header {
    padding: 0 10px;
    color: #eee;
    line-height: 60px;
    background-color: #1F2D3D;
  }
  .layout-header a{
    color: #eee;
    text-decoration: none;
  }
  .layout-header .big-title{
    text-align: center;
  }
  .el-dropdown{
    cursor: pointer;
  }
  .el-dropdown-link{
    color: #eee;
  }
</style>
