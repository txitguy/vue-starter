<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import shell from 'views/layouts/shell'
  export default {
    name: 'app',
    components: {
      shell
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
  }
</style>
