import LazyLoad from "vanilla-lazyload";

export default {
	setArticles: context =>
		new Promise(async (resolve, reject) => {
			const country = context.rootGetters["app/country"];
			const key = context.rootGetters["app/key"];

			try {
				const request = await fetch(
					`https://newsapi.org/v2/top-headlines?country=${country}`,
					{
						headers: {
							Authorization: `Bearer ${key}`
						}
					}
				);

				const response = await request.json();

				console.log("response", response);

				if (response.status === "ok") {
					context.commit("setArticles", response.articles);
				} else {
					if (response.code !== "maximumResultsReached") {
						throw new Error(response.code);
					}
				}

				resolve();
			} catch (exception) {
				reject(exception);
			}
		}),
	setLazyload: context =>
		new Promise(resolve => {
			context.commit(
				"setLazyload",
				new LazyLoad({
					elements_selector: ".lazy"
				})
			);

			resolve();
		}),
	setMobileMenu: (context, menu) =>
		new Promise(resolve => {
			context.commit("setMobileMenu", menu);

			resolve();
		})
};
