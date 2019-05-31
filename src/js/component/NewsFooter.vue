<template lang="pug">
    div(v-bind:class="`page-footer ${color}`")
        .footer-copyright
            .container
                slot(name="bottom")
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
