<template lang="pug">
    .input-field.col.s12
        select(v-bind="$attrs" v-on="$listeners")
            option(value='', disabled='', selected='') select a value
            option(v-bind:value="option.value" v-for="(option, index) in options" v-bind:selected="selected === option.value") {{ option.text }}
        label
            slot
</template>
<script>
import { FormSelect } from "materialize-css";

export default {
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      default: [],
      validator: value =>
        value.filter(
          item =>
            typeof item !== "object" || !("value" in item) || !("text" in item)
        ).length === 0
    },
    selected: {
      type: String,
      default: ""
    }
  },
  mounted() {
    FormSelect.init(document.querySelectorAll("select"));
  }
};
</script>
