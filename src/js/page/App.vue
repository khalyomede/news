<template lang="pug">
    div.body
        header
            nav
                news-header(v-bind:color="color")
                    div(slot="brand") News
                    div(slot="right")
                        news-header-item(to="/setting")
                            i.icon-more-vert
        main
            router-view
        footer
            news-footer(v-bind:color="color")
                div(slot="bottom") 
                    | Made possible with 
                    a(href="https://newsapi.org" target="blank" rel="noreferer noopenener") https://newsapi.org
                    | .
</template>
<script>
import NewsHeader from "../component/NewsHeader.vue";
import NewsHeaderItem from "../component/NewsHeader/Item.vue";
import NewsFooter from "../component/NewsFooter.vue";

export default {
  components: {
    NewsHeader,
    NewsHeaderItem,
    NewsFooter
  },
  computed: {
    color() {
      return this.$store.getters["app/color"];
    }
  },
  created() {
    this.$store.dispatch("home/setLazyload");
  },
  metaInfo: {
    meta: [{ name: "theme-color", content: "#006064" }]
  }
};
</script>
