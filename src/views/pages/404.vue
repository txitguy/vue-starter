
<template lang="pug">
  p.page-container 404
    br
    | Page Not Found
</template>

<style lang="scss" scoped>
  .page-container {
    margin-top: 100px;
    font-size: 40px;
    text-align: center;
    color: rgb(192, 204, 218);
  }
</style>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class PageNotFound extends Vue {
}
</script>
