/* 	
	Symbol 值作为属性名，
	遍历对象的时候，该属性不会出现在for...in、for...of循环中，
	也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。

	但是，它也不是私有属性，
	有一个Object.getOwnPropertySymbols()方法，可以获取指定对象的所有 Symbol 属性名。
	该方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。
*/
const a = Symbol("a");
const b = Symbol("b");

const obj = {
	[a]: "Hello",
	[b]: "World",
	c: "CCC",
	d: 12345,
};

// for (const key in obj) {
// 	console.log(obj[key]); //"CCC" 12345
// }

console.log(Object.keys(obj)); //["c", "d"]
console.log(Object.getOwnPropertyNames(obj)); //["c", "d"]
console.log(JSON.stringify(obj)); //{"c":"CCC","d":12345}

/* Object.getOwnPropertySymbols返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。 */
console.log(Object.getOwnPropertySymbols(obj)); //[Symbol(a), Symbol(b)]

/* 另一个新的 API，Reflect.ownKeys()方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。 */
console.log(Reflect.ownKeys(obj)); //['c', 'd', Symbol(a), Symbol(b)]

// 作为数组元素时可以获取
// const arr = [b, a, 1, 5];
// for (const iterator of arr) {
// 	console.log(iterator); //Symbol(b) Symbol(a) 1 5
// }
