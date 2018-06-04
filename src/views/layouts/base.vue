<template lang="pug">
  #siteContainer
    BaseHeader
    #main-body.container.pt-4
      router-view
    BaseFooter
</template>

<style lang="scss" scoped>

  #siteContainer {
    width: 100%;
    display: flex;
    flex-flow: column;
  }

  #main-body {
    flex: 1 1 auto;
  }
</style>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import BaseFooter from './base/footer.vue'
import BaseHeader from './base/header.vue'

@Component({
  components: {
    BaseHeader,
    BaseFooter
  }
})
export default class Home extends Vue {}
</script>
