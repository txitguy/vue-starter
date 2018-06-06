<template lang="pug">
  #main
    .br-logo
      a(href='')
        img.img-fluid(src='/static/images/sgm-logo_accent@2x.png')
    .br-sideleft.overflow-y-auto
      label.sidebar-label.pd-x-10.mg-t-20.op-3 Navigation
      ul.br-sideleft-menu
        li.br-menu-item
          router-link.br-menu-link.active(to='/')
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
              router-link.sub-link(:to='{name: "accounts"}') View All
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
              i.icon.ion-ios-bell.tx-24
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
                        |  created a new account.
                      span June 12, 2018 8:45am
                  // media
                // loop ends here
                a.media-list-link.read(href='')
                  .media
                    img(src='http://via.placeholder.com/280x280', alt='')
                    .media-body
                      p.noti-text
                        strong Mellisa Brown
                        |  sent a support message.
                      span June 12, 2018 12:44am
                  // media
                a.media-list-link.read(href='')
                  .media
                    img(src='http://via.placeholder.com/280x280', alt='')
                    .media-body
                      p.noti-text
                        | 20+ new entries into
                        strong  Best Mortgage Companies
                        | .
                      span June 12, 2018 12:00am
                  // media
                a.media-list-link.read(href='')
                  .media
                    img(src='http://via.placeholder.com/280x280', alt='')
                    .media-body
                      p.noti-text
                        strong Julius Erving
                        |  has expressed interest in advertising.
                      span June 11, 2018 9:08pm
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
              span.logged-name.hidden-md-down Mark
              img.wd-32.rounded-circle(src='https://media.licdn.com/dms/image/C4E03AQHQ3uO2MWyVUQ/profile-displayphoto-shrink_200_200/0?e=1533772800&v=beta&t=7eyfCNQyY9TaQMuqNLGAVNU5m1U7SI-oOAYcYf9B3k4', alt='')
              span.square-10.bg-success
            .dropdown-menu.dropdown-menu-header.wd-250
              .tx-center
                a(href='')
                  img.wd-80.rounded-circle(src='https://media.licdn.com/dms/image/C4E03AQHQ3uO2MWyVUQ/profile-displayphoto-shrink_200_200/0?e=1533772800&v=beta&t=7eyfCNQyY9TaQMuqNLGAVNU5m1U7SI-oOAYcYf9B3k4', alt='')
                h6.logged-fullname Mark Roach
                h6 Sr. Software Engineer
                p markr@scotsmanguide.com
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
                    i.icon.ion-power
                    |  Sign Out
            // dropdown-menu
          // dropdown
        .navicon-right
          a#btnRightMenu.pos-relative(href='')
            i.icon.ion-ios-gear
        // navicon-right
      // br-header-right
    // br-header
    // ########## END: HEAD PANEL ##########
    // ########## START: RIGHT PANEL ##########
    .br-sideright
      // Tab panes
      .tab-content
        #settings.tab-pane.pos-absolute.a-0.overflow-y-auto.active(role='tabpanel')
          label.sidebar-label.pd-x-25.mg-t-25 Quick Settings
          p.pd-x-25.mg-5-25.tx-13 These settings are saved in your browser and not your account.  If you switch browsers or clear your cache you will have to update them again.
          .sidebar-settings-item
            h6.tx-13.tx-normal Dark Mode
            p.op-5.tx-13 Use the Dark Mode theme mode for your account.  This will make the page darker and easier to see for some people.
            .pos-relative
              input.switch-button(ref='darkMode', type='checkbox', :checked='isDarkMode', v-model='isDarkMode')
          .sidebar-settings-item
            h6.tx-13.tx-normal Small Navigation
            p.op-5.tx-13
              | Use small navigation (icons only except on hover).  This allows for more room to view content.
            .pos-relative
              input.switch-button(ref='smallNav', type='checkbox', :checked='isSmallNav', v-model='isSmallNav')
          .pd-y-20.pd-x-25
            h6.tx-13.tx-normal.tx-white.mg-b-20 More Settings
            a.btn.btn-block.btn-outline-secondary.tx-uppercase.tx-11.tx-spacing-2(href='') Account Settings
      // tab-content
    // br-sideright
    // ########## END: RIGHT PANEL ########## -
    // ########## START: MAIN PANEL ##########
    router-view
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Store from 'Services/store'

@Component
export default class Home extends Vue {
  year: number = (new Date()).getFullYear();
  isDarkMode: Boolean = false;
  isSmallNav: Boolean = false;

  beforeMount() {
    this.isDarkMode = Store.for('cookie').get('isDarkMode') === 'true';
    this.updateDarkMode();

    this.isSmallNav = Store.for('cookie').get('isSmallNav') === 'true';
    this.updateNav();
  }

  mounted() {
    let darkMode = this.$refs['darkMode'] as HTMLInputElement;
    darkMode.onchange = () => {
      this.isDarkMode = darkMode.checked;
      this.updateDarkMode();
    }

    let navIcons = this.$refs['smallNav'] as HTMLInputElement;
    navIcons.onchange = () => {
      this.isSmallNav = navIcons.checked;
      this.updateNav();
    }
  }

  updateDarkMode() {
    Store.for('cookie').set('isDarkMode', this.isDarkMode);
    let theme = this.isDarkMode ? 'dark' : 'oreo';
    $('body')
      .removeClass('dark')
      .removeClass('oreo')
      .addClass(theme);
  }

  updateNav() {
    Store.for('cookie').set('isSmallNav', this.isSmallNav);
    if (this.isSmallNav && !$('body').hasClass('collapsed-menu') ||
        !this.isSmallNav && $('body').hasClass('collapsed-menu')) {
      $('#btnLeftMenu').click();
    }
  }
}
</script>
