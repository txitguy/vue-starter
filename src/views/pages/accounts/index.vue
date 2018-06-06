<template lang="pug">
  .br-mainpanel
    .br-pageheader
      nav.breadcrumb.pd-0.mg-0.tx-12
        router-link.breadcrumb-item(to='/') Admin
        router-link.breadcrumb-item(:to='{name: "accounts"}') Accounts
        span.breadcrumb-item.active View All
    // br-pageheader
    .br-pagetitle
      i.icon.icon.ion-ios-home-outline
      div
        h4 Accounts
        p.mg-b-0
          | This area is for managing client accounts.  This includes disabling, locking, resetting passwords, sending email, and much more.
    // d-flex
    .br-pagebody
      // start you own content here
      router-view
    // br-pagebody
  // br-mainpanel
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component
export default class AccountsIndex extends Vue {

}
</script>
