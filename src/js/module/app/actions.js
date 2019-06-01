export default {
	bookmarkArticle: async (context, article) =>
		await context.commit("bookmarkArticle", article),
	unbookmarkArticle: async (context, link) =>
		await context.commit("unbookmarkArticle", link)
};
