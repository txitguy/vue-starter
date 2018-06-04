<template lang="pug">
  #main
    .br-logo
      a(href='')
        img.img-fluid(src='/static/images/sgm-logo_accent@2x.png')
    .br-sideleft.overflow-y-auto
      label.sidebar-label.pd-x-10.mg-t-20.op-3 Navigation
      ul.br-sideleft-menu
        li.br-menu-item
          a.br-menu-link(href='index.html')
            i.menu-item-icon.icon.ion-ios-home.tx-24
            span.menu-item-label Dashboard
          // br-menu-link
        // br-menu-item
        li.br-menu-item
          a.br-menu-link.with-sub(href='#')
            i.menu-item-icon.icon.ion-android-people.tx-20
            span.menu-item-label Accounts
          // br-menu-link
          ul.br-menu-sub
            li.sub-item
              a.sub-link(href='card-dashboard.html') View All
            li.sub-item
              a.sub-link(href='card-social.html') Create New
            li.sub-item
              a.sub-link(href='') Export
            li.sub-item
              a.sub-link(href='card-listing.html') Settings

        li.br-menu-item
          a.br-menu-link.with-sub(href='#')
            i.menu-item-icon.icon.ion-document.tx-24
            span.menu-item-label Content Admin
          // br-menu-link
          ul.br-menu-sub
            li.sub-item
              a.sub-link(href='accordion.html') View All
            li.sub-item
              a.sub-link(href='alerts.html') Create New
            li.sub-item
              a.sub-link(href='buttons.html') News
            li.sub-item
              a.sub-link(href='cards.html') Articles
            li.sub-item
              a.sub-link(href='carousel.html') Tags
            li.sub-item
              a.sub-link(href='dropdowns.html') Categories
            li.sub-item
              a.sub-link(href='icons.html') Settings
        // br-menu-item
        li.br-menu-item
          a.br-menu-link.with-sub(href='#')
            i.menu-item-icon.ion-stats-bars.tx-24
            span.menu-item-label Marketing
          ul.br-menu-sub
            li.sub-item
              a.sub-link(href='') Dashboard
            li.sub-item
              a.sub-link(href='') Email
            li.sub-item
              a.sub-link(href='') Forms
            li.sub-item
              a.sub-link(href='') Settings
        li.br-menu-item
          a.br-menu-link.with-sub(href='#')
            i.menu-item-icon.ion-ios-redo.tx-24
            span.menu-item-label Subscriptions
          // br-menu-link
          ul.br-menu-sub
            li.sub-item
              a.sub-link(href='navigation.html') View All
            li.sub-item
              a.sub-link(href='navigation-layouts.html') Create New
            li.sub-item
              a.sub-link(href='navigation-effects.html') Settings
        // br-menu-item
        li.br-menu-item
          a.br-menu-link.with-sub(href='#')
            i.menu-item-icon.ion-ios-paper-outline.tx-20
            span.menu-item-label Matrix
          // br-menu-link
          ul.br-menu-sub
            li.sub-item
              a.sub-link(href='chart-morris.html') View
            li.sub-item
              a.sub-link(href='chart-flot.html') Export
        // br-menu-item
        li.br-menu-item
          a.br-menu-link.with-sub(href='#')
            i.menu-item-icon.icon.ion-ios-gear.tx-24
            span.menu-item-label Settings
          // br-menu-link
          ul.br-menu-sub
            li.sub-item
              a.sub-link(href='form-elements.html') Users
            li.sub-item
              a.sub-link(href='form-layouts.html') Roles
            li.sub-item
              a.sub-link(href='form-validation.html') Global
    // ########## START: HEAD PANEL ##########
    .br-header
      .br-header-left
        .navicon-left.hidden-md-down
          a#btnLeftMenu(href='')
            i.icon.ion-navicon-round
        .navicon-left.hidden-lg-up
          a#btnLeftMenuMobile(href='')
            i.icon.ion-navicon-round

        // input-group
      // br-header-left
      .br-header-right
        nav.nav
          .dropdown
            a.nav-link.pd-x-7.pos-relative(href='', data-toggle='dropdown')
              i.icon.ion-ios-email-outline.tx-24
              // start: if statement
              span.square-8.bg-danger.pos-absolute.t-15.r-0.rounded-circle
              // end: if statement
            .dropdown-menu.dropdown-menu-header
              .dropdown-menu-label
                label Messages
                a(href='') + Add New Message
              // d-flex
              .media-list
                // loop starts here
                a.media-list-link(href='')
                  .media
                    img(src='http://via.placeholder.com/280x280', alt='')
                    .media-body
                      div
                        p Donna Seay
                        span 2 minutes ago
                      // d-flex
                      p
                        | A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.
                  // media
                // loop ends here
                a.media-list-link.read(href='')
                  .media
                    img(src='http://via.placeholder.com/280x280', alt='')
                    .media-body
                      div
                        p Samantha Francis
                        span 3 hours ago
                      // d-flex
                      p My entire soul, like these sweet mornings of spring.
                  // media
                a.media-list-link.read(href='')
                  .media
                    img(src='http://via.placeholder.com/280x280', alt='')
                    .media-body
                      div
                        p Robert Walker
                        span 5 hours ago
                      // d-flex
                      p I should be incapable of drawing a single stroke at the present moment...
                  // media
                a.media-list-link.read(href='')
                  .media
                    img(src='http://via.placeholder.com/280x280', alt='')
                    .media-body
                      div
                        p Larry Smith
                        span Yesterday
                      // d-flex
                      p
                        | When, while the lovely valley teems with vapour around me, and the meridian sun strikes...
                  // media
                .dropdown-footer
                  a(href='')
                    i.fa.fa-angle-down
                    |  Show All Messages
              // media-list
            // dropdown-menu
          // dropdown
          .dropdown
            a.nav-link.pd-x-7.pos-relative(href='', data-toggle='dropdown')
              i.icon.ion-ios-bell-outline.tx-24
              // start: if statement
              span.square-8.bg-danger.pos-absolute.t-15.r-5.rounded-circle
              // end: if statement
            .dropdown-menu.dropdown-menu-header
              .dropdown-menu-label
                label Notifications
                a(href='') Mark All as Read
              // d-flex
              .media-list
                // loop starts here
                a.media-list-link.read(href='')
                  .media
                    img(src='http://via.placeholder.com/280x280', alt='')
                    .media-body
                      p.noti-text
                        strong Suzzeth Bungaos
                        |  tagged you and 18 others in a post.
                      span October 03, 2017 8:45am
                  // media
                // loop ends here
                a.media-list-link.read(href='')
                  .media
                    img(src='http://via.placeholder.com/280x280', alt='')
                    .media-body
                      p.noti-text
                        strong Mellisa Brown
                        |  appreciated your work
                        strong The Social Network
                      span October 02, 2017 12:44am
                  // media
                a.media-list-link.read(href='')
                  .media
                    img(src='http://via.placeholder.com/280x280', alt='')
                    .media-body
                      p.noti-text
                        | 20+ new items added are for sale in your
                        strong Sale Group
                      span October 01, 2017 10:20pm
                  // media
                a.media-list-link.read(href='')
                  .media
                    img(src='http://via.placeholder.com/280x280', alt='')
                    .media-body
                      p.noti-text
                        strong Julius Erving
                        |  wants to connect with you on your conversation with
                        strong Ronnie Mara
                      span October 01, 2017 6:08pm
                  // media
                .dropdown-footer
                  a(href='')
                    i.fa.fa-angle-down
                    |  Show All Notifications
              // media-list
            // dropdown-menu
          // dropdown
          .dropdown
            a.nav-link.nav-link-profile(href='', data-toggle='dropdown')
              span.logged-name.hidden-md-down Katherine
              img.wd-32.rounded-circle(src='http://via.placeholder.com/500x500', alt='')
              span.square-10.bg-success
            .dropdown-menu.dropdown-menu-header.wd-250
              .tx-center
                a(href='')
                  img.wd-80.rounded-circle(src='http://via.placeholder.com/500x500', alt='')
                h6.logged-fullname Katherine P. Lumaad
                p youremail@domain.com
              hr
              .tx-center
                span.profile-earning-label Earnings After Taxes
                h3.profile-earning-amount
                  | $13,230
                  i.icon.ion-ios-arrow-thin-up.tx-success
                span.profile-earning-text Based on list price.
              hr
              ul.list-unstyled.user-profile-nav
                li
                  a(href='')
                    i.icon.ion-ios-person
                    |  Edit Profile
                li
                  a(href='')
                    i.icon.ion-ios-gear
                    |  Settings
                li
                  a(href='')
                    i.icon.ion-ios-download
                    |  Downloads
                li
                  a(href='')
                    i.icon.ion-ios-star
                    |  Favorites
                li
                  a(href='')
                    i.icon.ion-ios-folder
                    |  Collections
                li
                  a(href='')
                    i.icon.ion-power
                    |  Sign Out
            // dropdown-menu
          // dropdown
        .navicon-right
          a#btnRightMenu.pos-relative(href='')
            i.icon.ion-ios-chatboxes-outline
            // start: if statement
            span.square-8.bg-danger.pos-absolute.t-10.r--5.rounded-circle
            // end: if statement
        // navicon-right
      // br-header-right
    // br-header
    // ########## END: HEAD PANEL ##########
    // ########## START: RIGHT PANEL ##########
    .br-sideright
      ul.nav.nav-tabs.sidebar-tabs(role='tablist')
        li.nav-item
          a.nav-link.active(data-toggle='tab', role='tab', href='#contacts')
            i.icon.ion-ios-contact-outline.tx-24
        li.nav-item
          a.nav-link(data-toggle='tab', role='tab', href='#attachments')
            i.icon.ion-ios-folder-outline.tx-22
        li.nav-item
          a.nav-link(data-toggle='tab', role='tab', href='#calendar')
            i.icon.ion-ios-calendar-outline.tx-24
        li.nav-item
          a.nav-link(data-toggle='tab', role='tab', href='#settings')
            i.icon.ion-ios-gear-outline.tx-24
      // sidebar-tabs
      // Tab panes
      .tab-content
        #contacts.tab-pane.pos-absolute.a-0.mg-t-60.overflow-y-auto.active(role='tabpanel')
          label.sidebar-label.pd-x-25.mg-t-25 Online Contacts
          .contact-list.pd-x-10
            a.contact-list-link.new(href='')
              .d-flex
                .pos-relative
                  img(src='http://via.placeholder.com/280x280', alt='')
                  .contact-status-indicator.bg-success
                .contact-person
                  p Marilyn Tarter
                  span Clemson, CA
                span.tx-info.tx-12
                  span.square-8.bg-info.rounded-circle
                  |  1 new
              // d-flex
            // contact-list-link
            a.contact-list-link(href='')
              .d-flex
                .pos-relative
                  img(src='http://via.placeholder.com/280x280', alt='')
                  .contact-status-indicator.bg-success
                .contact-person
                  p.mg-b-0 Belinda Connor
                  span Fort Kent, ME
              // d-flex
            // contact-list-link
            a.contact-list-link.new(href='')
              .d-flex
                .pos-relative
                  img(src='http://via.placeholder.com/280x280', alt='')
                  .contact-status-indicator.bg-success
                .contact-person
                  p Britanny Cevallos
                  span Shiboygan Falls, WI
                span.tx-info.tx-12
                  span.square-8.bg-info.rounded-circle
                  |  3 new
              // d-flex
            // contact-list-link
            a.contact-list-link.new(href='')
              .d-flex
                .pos-relative
                  img(src='http://via.placeholder.com/280x280', alt='')
                  .contact-status-indicator.bg-success
                .contact-person
                  p Brandon Lawrence
                  span Snohomish, WA
                span.tx-info.tx-12
                  span.square-8.bg-info.rounded-circle
                  |  1 new
              // d-flex
            // contact-list-link
            a.contact-list-link(href='')
              .d-flex
                .pos-relative
                  img(src='http://via.placeholder.com/280x280', alt='')
                  .contact-status-indicator.bg-success
                .contact-person
                  p Andrew Wiggins
                  span Springfield, MA
              // d-flex
            // contact-list-link
            a.contact-list-link(href='')
              .d-flex
                .pos-relative
                  img(src='http://via.placeholder.com/280x280', alt='')
                  .contact-status-indicator.bg-success
                .contact-person
                  p Theodore Gristen
                  span Nashville, TN
              // d-flex
            // contact-list-link
            a.contact-list-link(href='')
              .d-flex
                .pos-relative
                  img(src='http://via.placeholder.com/280x280', alt='')
                  .contact-status-indicator.bg-success
                .contact-person
                  p Deborah Miner
                  span North Shore, CA
              // d-flex
            // contact-list-link
          // contact-list
          label.sidebar-label.pd-x-25.mg-t-25 Offline Contacts
          .contact-list.pd-x-10
            a.contact-list-link(href='')
              .d-flex
                .pos-relative
                  img(src='http://via.placeholder.com/280x280', alt='')
                  .contact-status-indicator.bg-gray-500
                .contact-person
                  p Marilyn Tarter
                  span Clemson, CA
              // d-flex
            // contact-list-link
            a.contact-list-link(href='')
              .d-flex
                .pos-relative
                  img(src='http://via.placeholder.com/280x280', alt='')
                  .contact-status-indicator.bg-gray-500
                .contact-person
                  p Belinda Connor
                  span Fort Kent, ME
              // d-flex
            // contact-list-link
            a.contact-list-link(href='')
              .d-flex
                .pos-relative
                  img(src='http://via.placeholder.com/280x280', alt='')
                  .contact-status-indicator.bg-gray-500
                .contact-person
                  p Britanny Cevallos
                  span Shiboygan Falls, WI
              // d-flex
            // contact-list-link
            a.contact-list-link(href='')
              .d-flex
                .pos-relative
                  img(src='http://via.placeholder.com/280x280', alt='')
                  .contact-status-indicator.bg-gray-500
                .contact-person
                  p Brandon Lawrence
                  span Snohomish, WA
              // d-flex
            // contact-list-link
            a.contact-list-link(href='')
              .d-flex
                .pos-relative
                  img(src='http://via.placeholder.com/280x280', alt='')
                  .contact-status-indicator.bg-gray-500
                .contact-person
                  p Andrew Wiggins
                  span Springfield, MA
              // d-flex
            // contact-list-link
            a.contact-list-link(href='')
              .d-flex
                .pos-relative
                  img(src='http://via.placeholder.com/280x280', alt='')
                  .contact-status-indicator.bg-gray-500
                .contact-person
                  p Theodore Gristen
                  span Nashville, TN
              // d-flex
            // contact-list-link
            a.contact-list-link(href='')
              .d-flex
                .pos-relative
                  img(src='http://via.placeholder.com/280x280', alt='')
                  .contact-status-indicator.bg-gray-500
                .contact-person
                  p Deborah Miner
                  span North Shore, CA
              // d-flex
            // contact-list-link
          // contact-list
        // #contacts
        #attachments.tab-pane.pos-absolute.a-0.mg-t-60.overflow-y-auto(role='tabpanel')
          label.sidebar-label.pd-x-25.mg-t-25 Recent Attachments
          .media-file-list
            .media
              .pd-10.bg-gray-500.bg-mojito.wd-50.ht-60.tx-center.d-flex.align-items-center.justify-content-center
                i.fa.fa-file-image-o.tx-28.tx-white
              .media-body
                p.mg-b-0.tx-13 IMG_43445
                p.mg-b-0.tx-12.op-5 JPG Image
                p.mg-b-0.tx-12.op-5 1.2mb
              // media-body
              a.more(href='')
                i.icon.ion-android-more-vertical.tx-18
            // media
            .media.mg-t-20
              .pd-10.bg-gray-500.bg-purple.wd-50.ht-60.tx-center.d-flex.align-items-center.justify-content-center
                i.fa.fa-file-video-o.tx-28.tx-white
              .media-body
                p.mg-b-0.tx-13 VID_6543
                p.mg-b-0.tx-12.op-5 MP4 Video
                p.mg-b-0.tx-12.op-5 24.8mb
              // media-body
              a.more(href='')
                i.icon.ion-android-more-vertical.tx-18
            // media
            .media.mg-t-20
              .pd-10.bg-gray-500.bg-reef.wd-50.ht-60.tx-center.d-flex.align-items-center.justify-content-center
                i.fa.fa-file-word-o.tx-28.tx-white
              .media-body
                p.mg-b-0.tx-13 Tax_Form
                p.mg-b-0.tx-12.op-5 Word Document
                p.mg-b-0.tx-12.op-5 5.5mb
              // media-body
              a.more(href='')
                i.icon.ion-android-more-vertical.tx-18
            // media
            .media.mg-t-20
              .pd-10.bg-gray-500.bg-firewatch.wd-50.ht-60.tx-center.d-flex.align-items-center.justify-content-center
                i.fa.fa-file-pdf-o.tx-28.tx-white
              .media-body
                p.mg-b-0.tx-13 Getting_Started
                p.mg-b-0.tx-12.op-5 PDF Document
                p.mg-b-0.tx-12.op-5 12.7mb
              // media-body
              a.more(href='')
                i.icon.ion-android-more-vertical.tx-18
            // media
            .media.mg-t-20
              .pd-10.bg-gray-500.bg-firewatch.wd-50.ht-60.tx-center.d-flex.align-items-center.justify-content-center
                i.fa.fa-file-pdf-o.tx-28.tx-white
              .media-body
                p.mg-b-0.tx-13 Introduction
                p.mg-b-0.tx-12.op-5 PDF Document
                p.mg-b-0.tx-12.op-5 7.7mb
              // media-body
              a.more(href='')
                i.icon.ion-android-more-vertical.tx-18
            // media
            .media.mg-t-20
              .pd-10.bg-gray-500.bg-mojito.wd-50.ht-60.tx-center.d-flex.align-items-center.justify-content-center
                i.fa.fa-file-image-o.tx-28.tx-white
              .media-body
                p.mg-b-0.tx-13 IMG_43420
                p.mg-b-0.tx-12.op-5 JPG Image
                p.mg-b-0.tx-12.op-5 2.2mb
              // media-body
              a.more(href='')
                i.icon.ion-android-more-vertical.tx-18
            // media
            .media.mg-t-20
              .pd-10.bg-gray-500.bg-mojito.wd-50.ht-60.tx-center.d-flex.align-items-center.justify-content-center
                i.fa.fa-file-image-o.tx-28.tx-white
              .media-body
                p.mg-b-0.tx-13 IMG_43447
                p.mg-b-0.tx-12.op-5 JPG Image
                p.mg-b-0.tx-12.op-5 3.2mb
              // media-body
              a.more(href='')
                i.icon.ion-android-more-vertical.tx-18
            // media
            .media.mg-t-20
              .pd-10.bg-gray-500.bg-purple.wd-50.ht-60.tx-center.d-flex.align-items-center.justify-content-center
                i.fa.fa-file-video-o.tx-28.tx-white
              .media-body
                p.mg-b-0.tx-13 VID_6545
                p.mg-b-0.tx-12.op-5 AVI Video
                p.mg-b-0.tx-12.op-5 14.8mb
              // media-body
              a.more(href='')
                i.icon.ion-android-more-vertical.tx-18
            // media
            .media.mg-t-20
              .pd-10.bg-gray-500.bg-reef.wd-50.ht-60.tx-center.d-flex.align-items-center.justify-content-center
                i.fa.fa-file-word-o.tx-28.tx-white
              .media-body
                p.mg-b-0.tx-13 Secret_Document
                p.mg-b-0.tx-12.op-5 Word Document
                p.mg-b-0.tx-12.op-5 4.5mb
              // media-body
              a.more(href='')
                i.icon.ion-android-more-vertical.tx-18
            // media
          // media-list
        // #history
        #calendar.tab-pane.pos-absolute.a-0.mg-t-60.overflow-y-auto(role='tabpanel')
          label.sidebar-label.pd-x-25.mg-t-25 Time & Date
          .pd-x-25
            h2#brTime.br-time
            h6#brDate.br-date
          label.sidebar-label.pd-x-25.mg-t-25 Events Calendar
          .datepicker.sidebar-datepicker
          label.sidebar-label.pd-x-25.mg-t-25 Event Today
          .pd-x-25
            .list-group.sidebar-event-list.mg-b-20
              .list-group-item
                div
                  h6 Roven's 32th Birthday
                  p 2:30PM
                a.more(href='')
                  i.icon.ion-android-more-vertical.tx-18
              // list-group-item
              .list-group-item
                div
                  h6 Regular Workout Schedule
                  p 7:30PM
                a.more(href='')
                  i.icon.ion-android-more-vertical.tx-18
              // list-group-item
            // list-group
            a.btn.btn-block.btn-outline-secondary.tx-uppercase.tx-12.tx-spacing-2(href='') + Add Event
            br
        #settings.tab-pane.pos-absolute.a-0.mg-t-60.overflow-y-auto(role='tabpanel')
          label.sidebar-label.pd-x-25.mg-t-25 Quick Settings
          .sidebar-settings-item
            h6.tx-13.tx-normal Sound Notification
            p.op-5.tx-13 Play an alert sound everytime there is a new notification.
            .pos-relative
              input.switch-button(type='checkbox', name='checkbox', checked='')
          .sidebar-settings-item
            h6.tx-13.tx-normal 2 Steps Verification
            p.op-5.tx-13
              | Sign in using a two step verification by sending a verification code to your phone.
            .pos-relative
              input.switch-button(type='checkbox', name='checkbox2')
          .sidebar-settings-item
            h6.tx-13.tx-normal Location Services
            p.op-5.tx-13 Allowing us to access your location
            .pos-relative
              input.switch-button(type='checkbox', name='checkbox3')
          .sidebar-settings-item
            h6.tx-13.tx-normal Newsletter Subscription
            p.op-5.tx-13 Enables you to send us news and updates send straight to your email.
            .pos-relative
              input.switch-button(type='checkbox', name='checkbox4', checked='')
          .sidebar-settings-item
            h6.tx-13.tx-normal Your email
            .pos-relative
              input.form-control(type='email', name='email', value='janedoe@domain.com')
          .pd-y-20.pd-x-25
            h6.tx-13.tx-normal.tx-white.mg-b-20 More Settings
            a.btn.btn-block.btn-outline-secondary.tx-uppercase.tx-11.tx-spacing-2(href='') Account Settings
            a.btn.btn-block.btn-outline-secondary.tx-uppercase.tx-11.tx-spacing-2(href='') Privacy Settings
      // tab-content
    // br-sideright
    // ########## END: RIGHT PANEL ########## -
    // ########## START: MAIN PANEL ##########
    .br-mainpanel
      .br-pageheader
        nav.breadcrumb.pd-0.mg-0.tx-12
          a.breadcrumb-item(href='/') Admin
          span.breadcrumb-item.active Dashboard
      // br-pageheader
      .br-pagetitle
        i.icon.icon.ion-ios-book-outline
        div
          h4 Blank Page (Default Layout)
          p.mg-b-0
            | Introducing Bracket Plus admin template, the most handsome admin template of all time.
      // d-flex
      .br-pagebody
        router-view
        // start you own content here
      // br-pagebody
    // br-mainpanel

</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Home extends Vue {

}
</script>
