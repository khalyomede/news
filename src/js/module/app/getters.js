export default {
	color: state => state.color,
	textColor: state => state.textColor,
	key: state => state.key,
	country: state => state.country,
	bookmarkedArticles: state => state.bookmarkedArticles,
	bookmarkedArticlesCount: state => state.bookmarkedArticles.length
};
