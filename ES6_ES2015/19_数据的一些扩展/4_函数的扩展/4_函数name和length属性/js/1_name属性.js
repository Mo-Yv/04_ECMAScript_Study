/* 
	函数的name属性，返回该函数的函数名
	这个属性早就被浏览器广泛支持，但是直到 ES6，才将其写入了标准

	需要注意的是，ES6 对这个属性的行为做出了一些修改。
	如果将一个匿名函数赋值给一个变量，
	ES5 的name属性，会返回空字符串，
	ES6 的name属性，会返回实际的函数名
 */
// 赋值匿名函数
const fun1 = function () {};
console.log("fun1.name =>", fun1.name);

// 赋值具名函数
const fun2 = function fun() {};
console.log("fun2.name =>", fun2.name);

// Function构造函数返回的函数实例，name属性的值为 anonymous
console.log("(new Function).name =>", new Function().name);

// bind返回的函数，name属性值会加上bound前缀
function fun3() {}
let funName = fun3.bind(fun1).name;
console.log(funName); //bound fun3

funName = function () {}.bind(fun1).name;
console.log(funName); //bound
