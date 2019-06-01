export default {
	setArticles: (state, articles) => (state.articles = articles),
	setLazyload: (state, instance) => (state.lazyload = instance),
	setMobileMenu: (state, menu) => (state.mobileMenu = menu)
};
