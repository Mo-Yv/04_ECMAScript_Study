/* 
	Reflect.isExtensible方法对应Object.isExtensible，返回一个布尔值，表示当前对象是否可扩展

	如果参数不是对象
	Object.isExtensible会返回false，因为非对象本来就是不可扩展的
	Reflect.isExtensible会报错
*/
let obj = {};

let extensible  = Object.isExtensible(obj);
console.log(extensible); //true

extensible = Reflect.isExtensible(obj);
console.log(extensible); //true

obj = Object.freeze({});
extensible = Reflect.isExtensible(obj);
console.log(extensible); //false
