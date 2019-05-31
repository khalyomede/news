import Vuex from "vuex";
import Vue from "vue/dist/vue.runtime";
import modules from "./modules";

Vue.use(Vuex);

export default new Vuex.Store({
	modules
});
