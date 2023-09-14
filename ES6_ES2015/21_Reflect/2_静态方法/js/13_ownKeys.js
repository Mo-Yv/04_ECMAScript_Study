/* 
	Reflect.ownKeys方法用于返回对象的所有属性，
	基本等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和

	如果Reflect.ownKeys()方法的第一个参数不是对象，会报错
*/
let obj = {
	a: 1,
	b: 2,
	[Symbol.for("c")]: 3,
	[Symbol.for("d")]: 4,
};

let keys = Object.getOwnPropertyNames(obj);
console.log(keys); //['a', 'b']

keys = Object.getOwnPropertySymbols(obj);
console.log(keys); //[Symbol(c), Symbol(d)]

keys = Reflect.ownKeys(obj);
console.log(keys); //['a', 'b', Symbol(c), Symbol(d)]