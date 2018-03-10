<template lang="pug">
  #layout-body
    router-view
</template>

<style lang="scss">
  .layout-body{
    padding: 0 20px;
    
    position: absolute;
    left: 170px;
    top: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;

    text-align: left;
    background-color: #f1f2f7;
  }
</style>
