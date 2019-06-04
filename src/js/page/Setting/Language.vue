<template lang="pug">
    .container
        .row
            .col.s12
                news-form
                    news-form-select#test(v-bind:options="countries" v-bind:selected="country" v-on:change="onCountryChange") {{ $t("Country") }}
                    news-form-select(v-bind:options="languages" v-bind:selected="language" v-on:change="onLanguageChange") {{ $t("Language") }}
</template>
<script>
import NewsForm from "../../component/NewsForm.vue";
import NewsFormSelect from "../../component/NewsForm/Select.vue";
import { Toast } from "materialize-css";

export default {
  components: {
    NewsForm,
    NewsFormSelect
  },
  methods: {
    onCountryChange(event) {
      const country = event.target.value;

      const toast = new Toast({
        html: this.$t("Changing country to {country}...", { country }),
        inDuration: this.toastAnimationDuration,
        displayLength: this.toastDisplayDuration
      });

      setTimeout(
        async function() {
          await this.$store.dispatch("app/setCountry", country);

          toast.dismiss();

          new Toast({
            html: this.$t("Changed country to {country}.", { country }),
            inDuration: this.toastAnimationDuration,
            displayLength: this.toastDisplayDuration
          });
        }.bind(this),
        this.toastAnimationDuration
      );
    },
    onLanguageChange(event) {
      const language = event.target.value;

      const toast = new Toast({
        html: this.$t("Changing language to {language}...", { language }),
        inDuration: this.toastAnimationDuration,
        displayLength: this.toastDisplayDuration
      });

      setTimeout(
        async function() {
          await this.$store.dispatch("app/setLanguage", language);

          toast.dismiss();

          new Toast({
            html: this.$t("Changed language to {language}.", { language }),
            inDuration: this.toastAnimationDuration,
            displayLength: this.toastDisplayDuration
          });
        }.bind(this),
        this.toastAnimationDuration
      );
    }
  },
  computed: {
    languages() {
      return this.$store.getters["app/languages"];
    },
    language() {
      return this.$store.getters["app/language"];
    },
    country() {
      return this.$store.getters["app/country"];
    },
    countries() {
      return this.$store.getters["app/countries"];
    },
    toastDisplayDuration() {
      return this.$store.getters["app/toastDisplayDuration"];
    },
    toastAnimationDuration() {
      return this.$store.getters["app/toastAnimationDuration"];
    }
  }
};
</script>
