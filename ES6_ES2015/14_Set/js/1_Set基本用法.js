/* 
	ES6 提供了新的数据结构 Set。
	它类似于数组，但是成员的值都是唯一的，没有重复的值。
	Set本身是一个构造函数，用来生成 Set 数据结构。
	Set()函数接收一个数组或其他含有iterator接口的数据结构

	Set对象是值的集合，你可以按照插入的顺序迭代它的元素。
	Set 中的元素只会出现一次，即 Set 中的元素是唯一的。

	因为 Set 中的值总是唯一的，所以需要判断两个值是否相等。
	在 ECMAScript 规范的早期版本中，这不是基于和===操作符中使用的算法相同的算法。
	具体来说，对于 Set，+0 和 -0 是不同的值[(+0 === -0) = true]。
	但在 ECMAScript 2015 规范中这点已被更改。
 */
let set = new Set();
// console.log(set, typeof set);

/* 数组 */
const arr = [2, 0, 0, 2, 0, 5, 1, 4];
set = new Set(arr);
// console.log("size =", set.size);
// 扩展运算符解析
// console.log(...set);

/* DOM NodeList */
const divs = document.querySelectorAll("div");
set = new Set(divs);

/* 字符串 */
const str = "Hello world";
set = new Set(str);

/* arguments */
function fun() {
	set = new Set(arguments);
}
// 另外,就算传入两个NaN,也会被认定为相同的数据
// 即使 NaN === NaN 为 false
fun("A", "a", NaN, NaN);

/* rest */
const fn = (...rest) => (set = new Set(rest));
fn(2, 0, 0, 2, 0, 5, 1, 4);

/* Map */
const map = new Map([
	["a", 1],
	["b", 2],
	["c", 3],
]);
set = new Set(map);

/* 另一个Set */
const newSet = new Set("this is new Set");
set = new Set(newSet);

/* 自身,类似于 a = a + 1 */
// let set1 = new Set();
// set1 = new Set(set1);
// console.log(set1);

/* 没有iterator的对象 */
const obj = {
	a: 1,
	b: 2,
};
// set =new Set(obj); //报错

// 给对象添加Symbol.iterator
obj[Symbol.iterator] = function () {
	return Object.keys(this)[Symbol.iterator]();
};
set = new Set(obj);

console.log(set);

// set原型上包含Symbol.iterator,所以可以使用for of遍历
for (const iterator of set) {
	console.log(iterator); //2 0 5 1 4
}
