/* 
	Object.setPrototypeOf(target, prototype)方法
	作用与__proto__相同，用来设置一个对象的原型对象（prototype），返回参数对象本身。
	它是 ES6 正式推荐的设置原型对象的方法

	如果第一个参数不是对象，会自动转为对象。
	但由于返回的还是第一个参数，所以这个操作不会产生任何效果
	undefined和null由于无法转为对象，所以如果作为第一个参数时会报错
*/
const obj = {},
	prototype = { a: "AAA" };

let result = Object.setPrototypeOf(obj, prototype);

console.log("obj =>", obj);
console.log("result =>", result);
console.log(result === obj);