export default {
	bookmarkArticle: async (context, article) =>
		await context.commit("bookmarkArticle", article),
	unbookmarkArticle: async (context, link) =>
		await context.commit("unbookmarkArticle", link),
	setLanguage: async (context, language) =>
		await context.commit("setLanguage", language),
	setCountry: async (context, country) =>
		await context.commit("setCountry", country)
};
