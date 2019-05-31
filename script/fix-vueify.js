const { readFile, writeFile } = require("fs");

const files = [
	__dirname + "/../node_modules/vueify/lib/compiler.js",
	__dirname + "/../node_modules/vueify/lib/compilers/babel.js"
];

for (const file of files) {
	readFile(file, (error, data) => {
		writeFile(
			file,
			data.toString().replace("babel-core", "@babel/core"),
			error => {
				if (error) {
					throw error;
				}
			}
		);
	});
}
