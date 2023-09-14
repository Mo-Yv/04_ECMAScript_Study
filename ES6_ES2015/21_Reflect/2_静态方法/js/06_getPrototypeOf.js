/* 
	Reflect.getPrototypeOf方法用于读取对象的__proto__属性，
	对应Object.getPrototypeOf(obj)

	Reflect.getPrototypeOf和Object.getPrototypeOf的一个区别是:
	如果参数不是对象，
	Object.getPrototypeOf会将这个参数转为对象，然后再运行
	Reflect.getPrototypeOf会直接报错
*/
const myObj = new Function();

// 旧写法
let isTrue = Object.getPrototypeOf(myObj) === Function.prototype;
console.log(isTrue);

// 新写法
isTrue = Reflect.getPrototypeOf(myObj) === Function.prototype;
console.log(isTrue);