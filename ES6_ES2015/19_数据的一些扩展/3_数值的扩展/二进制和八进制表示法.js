/* 
	ES6 提供了二进制和八进制数值的新的写法，
	分别用前缀0b（或0B）和0o（或0O）表示

	从 ES5 开始，在严格模式之中，
	八进制就不再允许使用前缀0表示，
	ES6 进一步明确，要使用前缀0o表示
 */
let num = 0b111110111;
console.log(num, typeof num, num === 503);

num = 0o767;
console.log(num, typeof num, num === 503);

console.log(0b111110111 === 0o767);

// 非严格模式
(function () {
	// 编辑器报错,但浏览器可正常输出
	// console.log(0o11 === 011); //true
	console.log(0o11); //true
})();

// 严格模式
// (function () {
// 	"use strict";
// 	console.log(0o11 === 011); //报错
// })();
