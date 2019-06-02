import { src, dest, watch, series, parallel } from "gulp";
import plumber from "gulp-plumber";
import browserify from "gulp-bro";
import ifEnv from "gulp-if-env";
import pug from "gulp-pug";
import htmlmin from "gulp-htmlmin";
import sass from "gulp-sass";
import tildeImporter from "node-sass-tilde-importer";
import autoprefixer from "gulp-autoprefixer";
import cleanCss from "gulp-clean-css";
import rename from "gulp-rename";
import clean from "gulp-clean";
import browserSync from "browser-sync";

const browser = browserSync.create();

const js = () =>
	src("src/js/main.js")
		.pipe(plumber())
		.pipe(
			ifEnv.not(
				"production",
				browserify({
					transform: ["babelify", "vueify"],
					debug: true
				})
			)
		)
		.pipe(
			ifEnv(
				"production",
				browserify({
					transform: ["babelify", "vueify"],
					plugin: ["tinyify"]
				})
			)
		)
		.pipe(rename({ suffix: ".min" }))
		.pipe(dest("dist/js"))
		.pipe(browser.stream());

const html = () =>
	src("src/html/index.pug")
		.pipe(plumber())
		.pipe(pug())
		.pipe(
			ifEnv(
				"production",
				htmlmin({
					collapseBooleanAttributes: true,
					collapseInlineTagWhitespace: true,
					collapseWhitespace: true,
					decodeEntities: true,
					removeAttributeQuotes: true,
					removeComments: true,
					removeEmptyAttributes: true,
					removeRedundantAttributes: true
				})
			)
		)
		.pipe(dest("dist"))
		.pipe(browser.stream());

const css = () =>
	src("src/css/main.sass")
		.pipe(plumber())
		.pipe(
			sass({
				importer: tildeImporter
			})
		)
		.pipe(ifEnv("production", autoprefixer()))
		.pipe(
			ifEnv(
				"production",
				cleanCss({
					level: 2
				})
			)
		)
		.pipe(rename({ suffix: ".min" }))
		.pipe(dest("dist/css"))
		.pipe(browser.stream());

const clear = () =>
	src("dist", { allowEmpty: true })
		.pipe(plumber())
		.pipe(clean());

const fonts = () =>
	src("node_modules/simple-line-icons/fonts/*.{eot,svg,ttf,woff,woff2}")
		.pipe(plumber())
		.pipe(dest("dist/font"));

const reload = async done => {
	await browser.reload();
};

const start = () => {
	browser.init({
		server: {
			baseDir: "dist"
		}
	});

	watch("src/js/**/*.{js,vue}", series(js, reload));
	watch("src/html/**/*.pug", series(html, reload));
	watch("src/css/**/*.sass", series(css, reload));
};

const build = parallel(js, html, css, fonts);

export { start, build };
