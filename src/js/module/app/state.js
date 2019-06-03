const bookmarkedArticles = localStorage.getItem("bookmarkedArticles");
const language = localStorage.getItem("newsLanguage");
const country = localStorage.getItem("country");

export default {
	color: "cyan darken-4",
	textColor: "cyan-text text-darken-4",
	key: "8fd924cccc8741929bbf592c1ed64569",
	country: "fr",
	bookmarkedArticles: bookmarkedArticles ? JSON.parse(bookmarkedArticles) : [],
	language: language ? language : "en",
	country: country ? country : "us",
	countries: [
		{
			value: "ae",
			text: "United Arab Emirates"
		},
		{ value: "ar", text: "Argentina" },
		{ value: "at", text: "Austria" },
		{ value: "au", text: "Australia" },
		{ value: "be", text: "Belgium" },
		{ value: "bg", text: "Bulgaria" },
		{ value: "br", text: "Brazil" },
		{ value: "us", text: "United States" },
		{ value: "fr", text: "France" }
	],
	languages: [
		{
			value: "fr",
			text: "French"
		},
		{
			value: "en",
			text: "English"
		}
	],
	toastDisplayDuration: 2000,
	toastAnimationDuration: 300
};
