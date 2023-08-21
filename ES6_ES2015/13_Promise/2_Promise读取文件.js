/* 需要通过 node <文件名.js> 执行 */
// 引入fs模块
const fs = require("fs");

// 调用方法读取文件
// fs.readFile('./docs/笔记.txt', 'utf8', function (err, data) {
// 	// 如果出错,则抛出异常
// 	if (err) throw err;
// 	// 输出读取结果
// 	console.log(data);
// });

// 使用Promise封装
const promise = new Promise((resolve, reject) => {
	fs.readFile("./docs/笔记.txt", "utf8", function (err, data) {
		// 如果出错,则抛出异常
		if (err) reject(err);
		// 输出读取结果
		resolve(data);
	});
});

promise.then(
	data => {
		console.log(data);
	},
	err => {
		console.log(err);
	}
);
