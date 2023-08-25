/* 
	Array.from()方法用于将两类对象转为真正的数组：
		1.类似数组的对象（array-like object）
		2.可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）

	所谓类似数组的对象，本质特征只有一点，即必须有length属性
 */
/* 类似数组的对象 */
const likeArr = {
	0: "z",
	1: "m",
	2: "y",
	length: 3,
};

// ES5
let arr = [].slice.call(likeArr);
console.log(arr); //['z', 'm', 'y']

// ES6
arr = Array.from(likeArr);
console.log(arr); //['z', 'm', 'y']

// NodeList集合
const divs = document.querySelectorAll("div");
const nodeList = Array.from(divs);
console.log(nodeList);

// 函数arguments对象
function fun() {
	const arr = Array.from(arguments);
	console.log(arr);
}

fun("a", 2, [0], { b: 0 });

// rest参数
const test = (...rest) => {
	const arr = Array.from(rest);
	console.log(arr);
};

test("a", 2, [0], { b: 0 });

/* 只要是部署了 Iterator 接口的数据结构，Array.from()都能将其转为数组 */
let str = "Hello world";
str = Array.from(str);
console.log(str);
