import VueI18n from "vue-i18n";
import Vue from "vue/dist/vue.runtime";
import messages from "./i18n/messages";

Vue.use(VueI18n);

export default new VueI18n({
	locale: "us",
	fallbackLocale: "us",
	messages
});
