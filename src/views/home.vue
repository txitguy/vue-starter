<template>
  <div class="view-home">
    <v-header></v-header>
    <div class="layout-main">
      <v-sidebar></v-sidebar>
      <v-body>
        
      </v-body>
    </div>
  </div>
</template>

<script>
  import vHeader from 'views/layouts/header'
  import vSidebar from 'views/layouts/sidebar'
  import vBody from 'views/layouts/body'
  export default {
    components: {
      vHeader,
      vSidebar,
      vBody
    }
  }
</script>

<style>
  .view-home{
    height: 100%;
  }
  .view-home .layout-main{
    position: absolute;
    bottom: 0;
    top: 58px;
    width: 100%;
    overflow: hidden;
  }
</style>
