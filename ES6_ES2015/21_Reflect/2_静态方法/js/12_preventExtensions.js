/* 
	Reflect.preventExtensions对应Object.preventExtensions方法，
	用于让一个对象变为不可扩展。
	它返回一个布尔值，表示是否操作成功

	如果参数不是对象，
	Object.preventExtensions在ES5报错，在ES6返回传入的参数
	Reflect.preventExtensions会报错
*/
let obj = {};

// 旧写法
Object.preventExtensions(obj);

let extensible = Reflect.isExtensible(obj);
console.log(extensible); //false

obj = {};

extensible = Reflect.isExtensible(obj);
console.log(extensible); //true

// Reflect
Reflect.preventExtensions(obj);

extensible = Reflect.isExtensible(obj);
console.log(extensible); //false
