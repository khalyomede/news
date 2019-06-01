export default {
	articles: state => state.articles,
	lazyload: state => state.lazyload,
	mobileMenu: state => state.mobileMenu,
	mobileMenuInitialized: state => state.mobileMenu !== null
};
