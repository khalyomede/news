<template lang="pug">
  div
    .navbar-fixed#menu
      nav(v-bind:class="{ 'z-depth-2': !isAtTop }")
        div(v-bind:class="`nav-wrapper white`")
          .container
            .row
              .col.s12
                router-link(v-bind:class="`brand-logo title left ${textColor}`" to='/')
                  slot(name="brand")
                a(v-bind:class="`sidenav-trigger right ${textColor}`" href="javascript:;" data-target="mobile-menu")
                  i.material-icons menu
                ul#nav-mobile.right.hide-on-med-and-down
                  slot(name="right")
    ul.sidenav#mobile-menu
      slot(name="mobile")
    .fixed-action-btn
      a#scroll-to-menu(v-bind:class="`btn-floating btn-large waves-effect waves-light white`" v-show="!isAtTop" v-on:click="scrollToMenu")
        i(v-bind:class="`material-icons ${textColor}`") keyboard_arrow_up
</template>
<script>
import {
  Sidenav,
  FloatingActionButton
} from "materialize-css/dist/js/materialize";
export default {
  props: {
    color: {
      type: String,
      default: "white"
    },
    textColor: {
      type: String,
      default: "black-text"
    }
  },
  data() {
    return {
      isAtTop: true
    };
  },
  methods: {
    scrollToMenu() {
      document.querySelector("#menu").scrollIntoView({
        behavior: "smooth"
      });
    }
  },
  mounted() {
    var mobileMenu = Sidenav.init(document.querySelector("#mobile-menu"), {
      edge: "right"
    });

    this.$store.dispatch("home/setMobileMenu", mobileMenu);

    window.addEventListener("scroll", () => {
      this.isAtTop = window.scrollY === 0;
    });

    FloatingActionButton.init(document.querySelector("#scroll-to-menu"));
  }
};
</script>
