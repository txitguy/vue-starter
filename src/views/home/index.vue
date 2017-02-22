<template>
  <div class="view-home">
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <v-body>
      
    </v-body>
    <v-footer></v-footer>

  </div>
</template>

<script>
  import vHeader from 'views/layouts/header'
  import vFooter from 'views/layouts/footer'
  import vSidebar from 'views/layouts/sidebar'
  import vBody from 'views/layouts/body'
  export default {
    components: {
      vHeader,
      vFooter,
      vSidebar,
      vBody
    }
  }
</script>

<style>
  .home-view{
    height: 100%;
  }
</style>
