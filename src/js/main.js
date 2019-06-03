import App from "./page/App.vue";
import i18n from "./i18n";
import VueMeta from "vue-meta";
import router from "./router";
import store from "./store";
import Vue from "vue/dist/vue.runtime";

Vue.use(VueMeta);

new Vue({
	el: "#app",
	router,
	store,
	i18n,
	render: h => h(App)
});
