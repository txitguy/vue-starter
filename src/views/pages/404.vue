
<template lang="pug">
  .br-mainpanel
    .br-pageheader
      nav.breadcrumb.pd-0.mg-0.tx-12
        router-link.breadcrumb-item(to='/') Admin
        span.breadcrumb-item.active Error
    // br-pageheader
    .br-pagetitle
      i.icon.icon.ion-ios-home-outline
      div
        h4 Uh Oh!
        p.mg-b-0
          | Page Not Found
    // d-flex
    .br-pagebody
      // start you own content here
      .d-flex.align-items-center.justify-content-center
        .wd-lg-70p.wd-xl-50p.tx-center.pd-x-40
          h1.tx-100.tx-xs-140.tx-normal.tx-inverse.tx-roboto.mg-b-0 404!
          h5.tx-xs-24.tx-normal.tx-info.mg-b-30.lh-5 The page your are looking for has not been found.
          p.tx-16.mg-b-30
            | The page you are looking for might have been removed, had its name changed, or unavailable.
    // br-pagebody
  // br-mainpanel
  // ht-100v
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

@Component
export default class PageNotFound extends Vue {
}
</script>
