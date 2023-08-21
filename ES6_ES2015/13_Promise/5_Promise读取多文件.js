// 引入fs模块
const fs = require("fs");

// fs.readFile("./docs/笔记.txt", "utf-8", (err, data1) => {
// 	fs.readFile("./docs/文本.txt", "utf-8", (err, data2) => {
// 		fs.readFile("./docs/doc.txt", "utf-8", (err, data3) => {
// 			console.log(`
// 				${data1},
// 				${data2},
// 				${data3}
// 			`);
// 		});
// 	});
// });

new Promise((resolve, reject) => {
	fs.readFile("./docs/笔记.txt", "utf-8", (err, data) => {
		const arr = new Array(data);
		resolve(arr);
	});
}).then(value => {
	return new Promise((resolve, reject) => {
		fs.readFile("./docs/文本.txt", "utf-8", (err, data) => {
			value.push(data);
			resolve(value);
		});
	});
}).then(value => {
	return new Promise((resolve, reject) => {
		fs.readFile("./docs/doc.txt", "utf-8", (err, data) => {
			value.push(data);
			resolve(value);
		});
	});
}).then(data => {
	data.forEach(item => console.log(item));
});
