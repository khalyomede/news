export default {
	bookmarkArticle: (state, article) => {
		state.bookmarkedArticles.push(article);

		localStorage.setItem(
			"bookmarkedArticles",
			JSON.stringify(state.bookmarkedArticles)
		);
	},
	unbookmarkArticle: (state, link) => {
		state.bookmarkedArticles = state.bookmarkedArticles.filter(
			article => article.url !== link
		);

		localStorage.setItem(
			"bookmarkedArticles",
			JSON.stringify(state.bookmarkedArticles)
		);
	}
};
