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
	},
	setLanguage: (state, language) => {
		state.newsLanguage = language;
		localStorage.setItem("language", state.newsLanguage);
	},
	setCountry: (state, country) => {
		state.country = country;
		localStorage.setItem("country", state.country);
	}
};
