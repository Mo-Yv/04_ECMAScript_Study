/* 
	该方法与Object.setPrototypeOf方法配套，
	用于读取并返回一个对象的原型对象

	如果参数不是对象，会被自动转为对象
	如果参数是undefined或null，它们无法转为对象，所以会报错
*/
const obj = {},
prototype = { a: "AAA" };

Object.setPrototypeOf(obj, prototype);

let result = Object.getPrototypeOf(obj);
console.log(result);
console.log(result === prototype); //true

console.log(obj);