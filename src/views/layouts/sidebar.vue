<template>
  <div class="v-sidebar">
    <el-menu default-active="2" class="el-menu-vertical-demo" theme="dark" router unique-opened>
      <el-submenu index="1">
        <template slot="title">Website Title</template>
        <el-menu-item-group>
          <el-menu-item index="/about">About</el-menu-item>
          <el-menu-item index="/admin">Admin</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<style >
  .v-sidebar{
    width: 170px;
    height: 100%;
    position: absolute;
    background-color: #324157;
  }
  .v-sidebar .el-menu-item-group__title{
    padding: 0;
  }
</style>
