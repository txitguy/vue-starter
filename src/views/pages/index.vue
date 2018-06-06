<template lang="pug">
  .br-mainpanel
    .br-pageheader
      nav.breadcrumb.pd-0.mg-0.tx-12
        router-link.breadcrumb-item(to='/') Admin
        span.breadcrumb-item.active Dashboard
    // br-pageheader
    .br-pagetitle
      i.icon.icon.ion-ios-home-outline
      div
        h4 Dashboard
        p.mg-b-0
          | Welcome to Scotsman Guide Media
    // d-flex
    .br-pagebody
      .row.row-sm
        .col-sm-6.col-xl-3
          .bg-info.rounded.overflow-hidden
            .pd-x-20.pd-t-20.d-flex.align-items-center
              i.ion.ion-earth.tx-60.lh-0.tx-white.op-7
              .mg-l-20
                p.tx-10.tx-spacing-1.tx-mont.tx-semibold.tx-uppercase.tx-white-8.mg-b-10 Today's Visits
                p.tx-24.tx-white.tx-lato.tx-bold.mg-b-0.lh-1 1,975,224
                span.tx-11.tx-roboto.tx-white-8 24% higher yesterday
            #ch1.ht-50.tr-y-1
        // col-3
        .col-sm-6.col-xl-3.mg-t-20.mg-sm-t-0
          .bg-purple.rounded.overflow-hidden
            .pd-x-20.pd-t-20.d-flex.align-items-center
              i.ion.ion-bag.tx-60.lh-0.tx-white.op-7
              .mg-l-20
                p.tx-10.tx-spacing-1.tx-mont.tx-semibold.tx-uppercase.tx-white-8.mg-b-10 Today Sales
                p.tx-24.tx-white.tx-lato.tx-bold.mg-b-0.lh-1 $329,291
                span.tx-11.tx-roboto.tx-white-8 $390,212 before tax
            #ch3.ht-50.tr-y-1
        // col-3
        .col-sm-6.col-xl-3.mg-t-20.mg-xl-t-0
          .bg-teal.rounded.overflow-hidden
            .pd-x-20.pd-t-20.d-flex.align-items-center
              i.ion.ion-monitor.tx-60.lh-0.tx-white.op-7
              .mg-l-20
                p.tx-10.tx-spacing-1.tx-mont.tx-semibold.tx-uppercase.tx-white-8.mg-b-10 % Unique Visits
                p.tx-24.tx-white.tx-lato.tx-bold.mg-b-0.lh-1 54.45%
                span.tx-11.tx-roboto.tx-white-8 23% average duration
            #ch2.ht-50.tr-y-1
        // col-3
        .col-sm-6.col-xl-3.mg-t-20.mg-xl-t-0
          .bg-primary.rounded.overflow-hidden
            .pd-x-20.pd-t-20.d-flex.align-items-center
              i.ion.ion-clock.tx-60.lh-0.tx-white.op-7
              .mg-l-20
                p.tx-10.tx-spacing-1.tx-mont.tx-semibold.tx-uppercase.tx-white-8.mg-b-10 Bounce Rate
                p.tx-24.tx-white.tx-lato.tx-bold.mg-b-0.lh-1 32.16%
                span.tx-11.tx-roboto.tx-white-8 65.45% on average time
            #ch4.ht-50.tr-y-1
        // col-3
      // row
      .row.row-sm.mg-t-20
        .col-lg-8
          .card.bd-0.shadow-base
            .d-md-flex.justify-content-between.pd-25
              div
                h6.tx-13.tx-uppercase.tx-inverse.tx-semibold.tx-spacing-1 How Engaged Our Users Daily
                p Past 30 Days — Last Updated Oct 14, 2017
              .d-sm-flex
                div
                  p.mg-b-5.tx-uppercase.tx-10.tx-mont.tx-semibold Bounce Rate
                  h4.tx-lato.tx-inverse.tx-bold.mg-b-0 23.32%
                  span.tx-12.tx-success.tx-roboto 2.7% increased
                .bd-sm-l.pd-sm-l-20.mg-sm-l-20.mg-t-20.mg-sm-t-0
                  p.mg-b-5.tx-uppercase.tx-10.tx-mont.tx-semibold Page Views
                  h4.tx-lato.tx-inverse.tx-bold.mg-b-0 38.20%
                  span.tx-12.tx-danger.tx-roboto 4.65% decreased
                .bd-sm-l.pd-sm-l-20.mg-sm-l-20.mg-t-20.mg-sm-t-0
                  p.mg-b-5.tx-uppercase.tx-10.tx-mont.tx-semibold Time On Site
                  h4.tx-lato.tx-inverse.tx-bold.mg-b-0 12:30
                  span.tx-12.tx-success.tx-roboto 1.22% increased
              // d-flex
            // d-flex
            .pd-l-25.pd-r-15.pd-b-25
              #ch5.ht-250.ht-sm-300
          // card
        // col-8
        .col-lg-4.mg-t-20.mg-lg-t-0
          .card.shadow-base.bd-0.overflow-hidden
            .pd-x-25.pd-t-25
              h6.tx-13.tx-uppercase.tx-inverse.tx-semibold.tx-spacing-1.mg-b-20 Storage Overview
              p.tx-10.tx-spacing-1.tx-mont.tx-semibold.tx-uppercase.mg-b-0 As of Today
              h1.tx-56.tx-light.tx-inverse.mg-b-0
                | 755
                span.tx-teal.tx-24 gb
              p
                span.tx-primary 80%
                |  of free space remaining
            // pd-x-25
            #ch6.ht-115.mg-r--1
            .bg-teal.pd-x-25.pd-b-25.d-flex.justify-content-between
              .tx-center
                h3.tx-lato.tx-white.mg-b-5
                  | 989
                  span.tx-light.op-8.tx-20 gb
                p.tx-10.tx-spacing-1.tx-mont.tx-medium.tx-uppercase.mg-b-0.tx-white-8 Total Space
              .tx-center
                h3.tx-lato.tx-white.mg-b-5
                  | 234
                  span.tx-light.op-8.tx-20 gb
                p.tx-10.tx-spacing-1.tx-mont.tx-medium.tx-uppercase.mg-b-0.tx-white-8 Used Space
              .tx-center
                h3.tx-lato.tx-white.mg-b-5
                  | 80
                  span.tx-light.op-8.tx-20 %
                p.tx-10.tx-spacing-1.tx-mont.tx-medium.tx-uppercase.mg-b-0.tx-white-8 Free Space
          // card
        // col-4
      // row
      // br-pagebody
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Index extends Vue {

}
</script>
