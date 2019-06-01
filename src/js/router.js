import VueRouter from "vue-router";
import Vue from "vue/dist/vue.runtime";
import routes from "./routes";
import store from "./store";

Vue.use(VueRouter);

const router = new VueRouter({
	mode: "history",
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { x: 0, y: 0 };
		}
	}
});

router.afterEach((to, from) => {
	if (store.getters["home/mobileMenuInitialized"]) {
		store.getters["home/mobileMenu"].close();
	}
});

export default router;
