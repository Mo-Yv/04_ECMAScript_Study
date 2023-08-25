/* 
	一个数据结构只要部署了Symbol.iterator属性，
	就被视为具有 iterator 接口，就可以用for...of循环遍历它的成员。
	也就是说，for...of循环内部调用的是数据结构的Symbol.iterator方法。

	for...of循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象（比如arguments对象、DOM NodeList 对象）以及字符串。
	或者自定义[Symbol.iterator]属性的对象 
*/

/* 迭代数组 */
const arr = ["red", "green", "blue", "green"];

// for (const iterator of arr) {
// 	console.log(iterator); // red green blue green
// }

/* 迭代字符串 */
const str = "Hello world";
// for (const iterator of str) {
// 	console.log(iterator); // H e l l o " " w o r l d
// }

/* 迭代Map */
const map = new Map([
	["a", 1],
	["b", 2],
	["c", 3],
]);
console.log(map);

// for (const iterator of map) {
// 	console.log(iterator);
// }

/* 迭代set */
const set = new Set([arr]);
console.log(set);

// for (const iterator of set) {
// 	console.log(iterator);
// }

/* 迭代argument对象 */
function fun() {
	for (const iterator of arguments) {
		console.log(iterator);
	}
}
// fun(...arr); // red green blue green

/* 迭代rest */
const fun2 = (...rest) => {
	for (const iterator of rest) {
		console.log(iterator);
	}
};
fun2(...arr); // red green blue green

/* 迭代DOM NodeList */
const divs = document.querySelectorAll("div");

// for (const iterator of divs) {
// 	console.log(iterator);
// 	iterator.style.backgroundColor = "red";
// }
