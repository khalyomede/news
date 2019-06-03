<template lang="pug">
  div.body
    header
      nav
        news-header(v-bind:color="color" v-bind:text-color="textColor")
          div(slot="brand") {{ $t("brand") }}
          div(slot="right")
            news-header-item(to="/setting") 
              | {{ $t("Settings") }}
              i.material-icons.left settings
            news-header-item(to="/bookmarked")
              i.material-icons.left bookmark
              | {{ $t("Bookmarked") }}
              span.badge(v-if="bookmarkedArticlesCount > 0") {{ bookmarkedArticlesCount }}
          div(slot="mobile")
            news-header-item(to="/setting") 
              i.material-icons settings
              | {{ $t("Settings") }}
            news-header-item(to="/bookmarked")
              i.material-icons bookmark
              | {{ $t("Bookmarked") }}
              span.badge.right(v-if="bookmarkedArticlesCount > 0") {{ bookmarkedArticlesCount }}
    main
      router-view
    footer
        news-footer(v-bind:color="color")
          div(slot="bottom") 
            | {{ $t("Made possible with") }} 
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
    },
    textColor() {
      return this.$store.getters["app/textColor"];
    },
    bookmarkedArticlesCount() {
      return this.$store.getters["app/bookmarkedArticlesCount"];
    },
    language() {
      return this.$store.getters["app/language"];
    }
  },
  watch: {
    language(newValue) {
      this.$i18n.locale = newValue;
    }
  },
  created() {
    this.$store.dispatch("home/setLazyload");

    this.$i18n.locale = this.language;
  },
  metaInfo: {
    title: "News",
    meta: [{ name: "theme-color", content: "#006064" }]
  }
};
</script>
