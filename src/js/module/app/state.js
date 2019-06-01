const bookmarkedArticles = localStorage.getItem("bookmarkedArticles");

export default {
	color: "cyan darken-4",
	textColor: "cyan-text text-darken-4",
	key: "8fd924cccc8741929bbf592c1ed64569",
	country: "fr",
	bookmarkedArticles: bookmarkedArticles ? JSON.parse(bookmarkedArticles) : []
};
