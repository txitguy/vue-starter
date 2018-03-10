<template>
  <div class="view-home">
    <v-header></v-header>
    <div class="layout-main">
      <v-body>
        
      </v-body>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import vHeader from 'views/layouts/header.vue'
import vBody from 'views/layouts/body.vue'

@Component({
  components: {
    vHeader,
    vBody
  }
})
export default class Home extends Vue {
}
</script>

