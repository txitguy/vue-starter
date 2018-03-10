<template lang="pug">
  #site-container
    v-header
    .layout-main
      vbody
    v-footer
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import vHeader from 'views/layouts/header.vue'
import vBody from 'views/layouts/body.vue'
import vFooter from 'views/layouts/footer.vue'

@Component({
  components: {
    vHeader,
    vBody,
    vFooter
  }
})
export default class Home extends Vue {
}
</script>

