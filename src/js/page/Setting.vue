<template lang="pug">
    .container
        .row
            .col.s12
                news-setting
                    news-setting-item(icon="g_translate" v-bind:title="$t('Language')" to="/setting/language") {{ $t("Change the language for the news and the displayed text.") }}
</template>
<script>
import NewsSetting from "../component/NewsSetting.vue";
import NewsSettingItem from "../component/NewsSetting/Item.vue";

export default {
  components: {
    NewsSetting,
    NewsSettingItem
  },
  metaInfo: {
    title: "Settings — News",
    meta: [
      {
        name: "description",
        content: "Configure your news reading experience."
      }
    ]
  }
};
</script>
