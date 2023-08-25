/* 
	这样规定的原因是，
	函数内部的严格模式，同时适用于函数体和函数参数。
	但是，函数执行的时候，先执行函数参数，然后再执行函数体。
	这样就有一个不合理的地方，只有从函数体之中，
	才能知道参数是否应该以严格模式执行，
	但是参数却应该先于函数体执行
 */
// 从 ES5 开始，函数内部可以设定为严格模式
function fun1() {
	"use strict";
	console.log(this); //undefined
}
fun1();

/* 
	ES2016 做了一点修改，
	规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，
	那么函数内部就不能显式设定为严格模式，
	否则会报错
*/
// const fun2 = (a, b = "B") => {
// 	"use strict"; //报错
// 	console.log(a, b);
// }

// const fun2 = ({a, b}) => {
// 	"use strict"; //报错
// 	console.log(a, b);
// }

// const fun3 = (...rest) => {
// 	"use strict"; //报错
// 	console.log(rest);
// }

// 对象方法也不行
// const obj = {
// 	fun4(a, b= "B"){
// 		"use strict"; //报错
// 		console.log(a,b);
// 	}
// }

/* 两种方法可以规避这种限制 */
// 第一种是设定全局性的严格模式，这是合法的
("use strict");
const fun5 = (a, b = "B") => {
	console.log(a, b);
};
fun5("A"); //A B

// 第二种是把函数包在一个无参数的立即执行函数里面
const fun6 = (function () {
	"use strict";
	return function (a = "AAA") {
		console.log(a);
	};
})();
fun6(); //AAA
