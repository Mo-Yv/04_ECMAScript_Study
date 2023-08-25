/* 
	ES6 一共有 5 种方法可以遍历对象的属性:
		for...in
			循环遍历对象自身的和继承的可枚举属性(不含Symbol属性)。
		Object.keys(obj)
			返回一个数组，
			包括对象自身的(不含继承的)所有可枚举属性(不含Symbol属性)的键名。
		Object.getOwnPropertyNames(obj)
			返回一个数组，
			包含对象自身的所有属性(不含Symbol属性,但是包括不可枚举属性)的键名。
		Object.getOwnPropertySymbols(obj)
			返回一个数组，
			包含对象自身的所有Symbol属性的键名。
		Reflect.ownKeys(obj)
			返回一个数组，
			包含对象自身的(不含继承的)所有键名，
			不管键名是Symbol或字符串，也不管是否可枚举。

	以上的 5 种方法遍历对象的键名，都遵守同样的属性遍历的次序规则:
		首先遍历所有数值键，按照数值升序排列。
		其次遍历所有字符串键，按照加入时间升序排列。
		最后遍历所有 Symbol 键，按照加入时间升序排列。
 */
const c = Symbol("c"),
	d = Symbol("d");

class Human {
	x = "x";
	humanFun() {}
}

class Person extends Human {
	y = "y";
	[c] = "Symbol";
	5 = 55;
	[d]() {}
	personFun() {}
}

const person = new Person();
console.log("person =>", person);

// 添加一个不可枚举的属性
Object.defineProperty(person, "z", {
	value: "z",
	enumerable: false,
});

// for in
for (const key in person) {
	console.log("for in =>", key); //5 x y
}

// Object.keys
let arr = Object.keys(person);
console.log("Object.keys =>", arr); //['5', 'x', 'y']

// Object.getOwnPropertyNames
arr = Object.getOwnPropertyNames(person);
console.log(arr); //['5', 'x', 'y', 'z']

// Object.getOwnPropertySymbols
arr = Object.getOwnPropertySymbols(person);
console.log(arr); //[Symbol(c)]

// Reflect.ownKeys
arr = Reflect.ownKeys(person);
console.log(arr); //['5', 'x', 'y', 'z', Symbol(c)]
