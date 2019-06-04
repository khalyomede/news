<template lang="pug">
  .container
    .row
      .col.s12.m6.l6.xl4(v-for="(article, index) in articles" :key="index" v-if="!loading && success")
        news-card(v-bind:title="article.title" v-bind:link="article.url" v-bind:image="article.urlToImage" v-bind:source="article.source.name" v-bind:color="color" v-bind:published-at="article.publishedAt") {{ article.content || article.description }}
      .col.s12.center-align.valign-wrapper.preloader(v-if="loading")
        .preloader-wrapper.big.active
          .spinner-layer.spinner-blue-only
            .circle-clipper.left
              .circle
            .gap-patch
              .circle
            .circle-clipper.right
              .circle
      .col.s12.center-align.valign-wrapper.error(v-if="!loading && !success")
        .error-wrapper
          div
            i.material-icons error_outline
          div {{ $t(errorMessage) }}
</template>
<script>
import NewsCard from "../component/NewsCard.vue";
import "materialize-css/dist/js/materialize";

export default {
  components: {
    NewsCard
  },
  data() {
    return {
      loading: false,
      success: true,
      errorMessage: ""
    };
  },
  computed: {
    articles() {
      return this.$store.getters["home/articles"];
    },
    color() {
      return this.$store.getters["app/color"];
    }
  },
  created: async function() {
    this.loading = true;

    try {
      await this.$store.dispatch("home/setArticles");
    } catch (exception) {
      this.success = false;

      switch (exception) {
        case "rateLimited":
          this.errorMessage =
            "Too many attempt. Please wait a few minutes before trying again.";

          break;

        case "apiKeyExhausted":
          this.errorMessage = "No more credits available to fetch articles.";

          break;

        default:
          this.errorMessage =
            "Unable to fetch articles. Please try again in a few minutes.";

          break;
      }
    }

    this.loading = false;
  },
  metaInfo: {
    title: "News",
    meta: [
      {
        name: "description",
        content: "Find all the news recap and save them for later reading."
      }
    ],
    link: [
      {
        rel: "canonical",
        href:
          process.env.NODE_ENV === "production"
            ? "https://news.stellar-labs.io"
            : "http://localhost:3000"
      }
    ]
  }
};
</script>
