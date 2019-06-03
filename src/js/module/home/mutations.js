export default {
	setArticles: (state, articles) => {
		articles.map(article => {
			if (typeof article.content === "string") {
				article.content = article.content.replace(/(\[\+\d+\schars\])$/, "");
			}

			return article;
		});

		state.articles = articles;
	},
	setLazyload: (state, instance) => (state.lazyload = instance),
	setMobileMenu: (state, menu) => (state.mobileMenu = menu)
};
