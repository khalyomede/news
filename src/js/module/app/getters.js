export default {
	color: state => state.color,
	textColor: state => state.textColor,
	key: state => state.key,
	country: state => state.country,
	countries: state => state.countries,
	bookmarkedArticles: state => state.bookmarkedArticles,
	bookmarkedArticlesCount: state => state.bookmarkedArticles.length,
	language: state => state.language,
	languages: state => state.languages,
	toastDisplayDuration: state => state.toastDisplayDuration,
	toastAnimationDuration: state => state.toastAnimationDuration
};
