<template lang="pug">
  .card
    .card-image.waves-effect.waves-block.waves-light
        img.activator.lazy(v-bind:src="image" alt="Article illustration")
    .card-content
      div
        span(v-bind:class="`chip ${color} white-text`") {{ source }}
        span.chip.right.white.black-text {{ elapsed }}
      div
        br
      span.card-title.activator.grey-text.text-darken-4
        | {{ cleanTitle }}
    .card-reveal
      span.card-title.grey-text.text-darken-4
        | {{ cleanTitle }}
      p.flow-text
        slot
      .card-action.center-align
        a(v-bind:href="link" rel="noreferer noopener" v-bind:class="`btn btn-large ${color}`") read more
</template>
<script>
import isUrl from "is-url";
import moment from "moment";

export default {
  props: {
    image: {
      type: String,
      required: true,
      validator: value => isUrl(value)
    },
    title: {
      type: String,
      required: true,
      validator: value => value.trim().length > 0
    },
    link: {
      type: String,
      required: true,
      validator: value => isUrl(value)
    },
    color: {
      type: String,
      default: ""
    },
    source: {
      type: String,
      required: true,
      validator: value => value.trim().length > 0
    },
    publishedAt: {
      type: String,
      required: true,
      validator: value => !isNaN(new Date(value))
    }
  },
  computed: {
    elapsed() {
      return moment(this.publishedAt).fromNow();
    },
    cleanTitle() {
      return this.title.replace(/(-[\s\w.]+$)/gimu, "");
    }
  },
  mounted() {
    this.$store.getters["home/lazyload"].update();
  }
};
</script>
