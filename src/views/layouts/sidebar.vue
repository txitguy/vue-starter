<template>
  <div class="v-sidebar">
    <el-menu default-active="2" class="el-menu-vertical-demo" theme="dark">
      <el-submenu index="1">
        <template slot="title">APP</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">test</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
    </el-menu>
  </div>
</template>

<style>
  .v-sidebar{
    width: 170px;
    height: 100%;
    position: absolute;
    background-color: #0499AF;
  }
</style>
