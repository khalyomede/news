import App from "./page/App.vue";
import VueMeta from "vue-meta";
import router from "./router";
import store from "./store";
import Vue from "vue/dist/vue.runtime";

Vue.use(VueMeta);

new Vue({
	el: "#app",
	router,
	store,
	render: h => h(App)
});
