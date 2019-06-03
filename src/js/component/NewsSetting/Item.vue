<template lang="pug">
    router-link.collection-item.avatar(v-bind:to="to" tag="li")
      i(v-bind:class="`material-icons circle ${color} white-text`") {{ icon }}
      span(v-bind:class="`title ${textColor}`") {{ title }}
      p
        slot
</template>
<script>
import snakeCase from "snake-case";

export default {
  props: {
    icon: {
      type: String,
      required: true,
      validator: value => value.trim().length > 0 && snakeCase(value) === value
    },
    title: {
      type: String,
      required: true,
      validator: value => value.trim().length > 0
    },
    to: {
      type: String,
      required: true,
      validator: value => value.trim().length > 0
    }
  },
  computed: {
    textColor() {
      return this.$store.getters["app/textColor"];
    },
    color() {
      return this.$store.getters["app/color"];
    }
  }
};
</script>
