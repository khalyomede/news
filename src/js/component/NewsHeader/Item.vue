<template lang="pug">
  li
    router-link(v-bind:to="to" v-bind:class="textColor")
      slot
</template>
<script>
import isRelativeUrl from "is-relative-url";

export default {
  props: {
    to: {
      type: String,
      required: true,
      validator: value => isRelativeUrl(value)
    }
  },
  computed: {
    textColor() {
      return this.$store.getters["app/textColor"];
    }
  }
};
</script>
