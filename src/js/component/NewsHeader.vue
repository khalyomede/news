<template lang="pug">
  .navbar-fixed
    nav
      div(v-bind:class="`nav-wrapper ${color}`")
        router-link.brand-logo.title(to='/')
          slot(name="brand")
        ul#nav-mobile.right
          slot(name="right")
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: ""
    }
  }
};
</script>
