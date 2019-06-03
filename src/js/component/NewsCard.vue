<template lang="pug">
  .card
    .card-image.waves-effect.waves-block.waves-light
      img.activator.lazy(v-bind:data-src="image" alt="Article illustration" v-if="image")
      a(v-bind:class="`btn-floating halfway-fab waves-effect waves-light ${color}`")
        i.material-icons(v-if="!bookmarked" v-on:click="bookmark") bookmark_outline
        i.material-icons(v-if="bookmarked" v-on:click="unbookmark") bookmark
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
        a(v-bind:href="link" rel="noreferer noopener" v-bind:class="`btn btn-large ${color}`") {{ $t("read more") }}
</template>
<script>
import isUrl from "is-url";
import moment from "moment";
import "moment/locale/ar";
import "moment/locale/be";
import "moment/locale/bg";
import "moment/locale/br";
import "moment/locale/ca";
import "moment/locale/de";
import "moment/locale/fr";
import "moment/locale/hu";
import "moment/locale/id";
import "moment/locale/it";
import "moment/locale/lt";
import "moment/locale/lv";
import "moment/locale/my";
import "moment/locale/nl";
import "moment/locale/pl";
import "moment/locale/pt";
import "moment/locale/ro";
import "moment/locale/ru";
import "moment/locale/se";
import "moment/locale/si";
import "moment/locale/sk";
import "moment/locale/th";
import "moment/locale/tr";
import { Toast } from "materialize-css";

export default {
  props: {
    image: {
      type: String,
      default: ""
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
  data() {
    return {
      bookmarked: false,
      delayBeforeToastCompletlyDisplayed: 300,
      toastDisplayDuration: 2000
    };
  },
  created() {
    this.bookmarked = this.$store.getters["app/bookmarkedArticles"].find(
      article => article.url === this.link
    );

    moment.locale(this.language);
  },
  computed: {
    elapsed() {
      return moment(this.publishedAt).fromNow();
    },
    cleanTitle() {
      return this.title.replace(/(-[\s\w.]+$)/gimu, "");
    },
    language() {
      return this.$store.getters["app/language"];
    }
  },
  watch: {
    language(newValue, oldValue) {
      moment.locale(newValue);
    }
  },
  methods: {
    bookmark() {
      new Toast({
        html: `Bookmarking...`,
        inDuration: this.delayBeforeToastCompletlyDisplayed,
        displayLength: this.toastDisplayDuration,
        classes: this.color
      });

      setTimeout(
        async function() {
          const article = this.$store.getters["home/articles"].find(
            article => article.url === this.link
          );

          await this.$store.dispatch("app/bookmarkArticle", article);

          this.bookmarked = true;

          new Toast({
            html: "Bookmarked.",
            inDuration: this.delayBeforeToastCompletlyDisplayed,
            displayLength: this.toastDisplayDuration,
            classes: this.color
          });
        }.bind(this),
        this.delayBeforeToastCompletlyDisplayed
      );
    },
    unbookmark() {
      new Toast({
        html: "Unbookmarking...",
        inDuration: this.delayBeforeToastCompletlyDisplayed,
        displayLength: this.toastDisplayDuration,
        classes: this.color
      });

      setTimeout(
        async function() {
          await this.$store.dispatch("app/unbookmarkArticle", this.link);

          this.bookmarked = false;

          new Toast({
            html: "Unbookmarked",
            inDuration: this.delayBeforeToastCompletlyDisplayed,
            displayLength: this.toastDisplayDuration,
            classes: this.color
          });
        }.bind(this),
        this.delayBeforeToastCompletlyDisplayed
      );
    }
  },
  mounted() {
    this.$store.getters["home/lazyload"].update();
  }
};
</script>
