<template lang="pug">
  #site-container
    .layout-base-header
        h1 Super header
    .layout-base-body
        router-view
    .layout-base-footer
        h3 Super footer
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class Home extends Vue {
}
</script>

