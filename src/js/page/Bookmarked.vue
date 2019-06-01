<template lang="pug">
    .container
        .row
            .col.s12
                br
        .row
            .col.s12.m6.l6.xl4(v-for="(article, index) in bookmarkedArticles" :key="index")
                news-card(v-bind:title="article.title" v-bind:link="article.url" v-bind:image="article.urlToImage" v-bind:source="article.source.name" v-bind:published-at="article.publishedAt" v-bind:color="color" v-bind:text-color="textColor") {{ article.content || article.description }}
</template>
<script>
import NewsCard from "../component/NewsCard.vue";

export default {
  components: {
    NewsCard
  },
  computed: {
    bookmarkedArticles() {
      return this.$store.getters["app/bookmarkedArticles"];
    },
    color() {
      return this.$store.getters["app/color"];
    },
    textColor() {
      return this.$store.getters["app/textColor"];
    }
  }
};
</script>
