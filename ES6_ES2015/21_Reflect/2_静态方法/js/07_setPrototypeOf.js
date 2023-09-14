/* 
	Reflect.setPrototypeOf方法用于设置目标对象的原型（prototype），
	对应Object.setPrototypeOf(obj, newProto)方法。
	它返回一个布尔值，表示是否设置成功

	如果无法设置目标对象的原型（比如，目标对象禁止扩展），
	Reflect.setPrototypeOf方法返回false

	如果第一个参数不是对象，
	Object.setPrototypeOf会返回第一个参数本身
	Reflect.setPrototypeOf会报错

	如果第一个参数是undefined或null
	Object.setPrototypeOf和Reflect.setPrototypeOf都会报错
*/
const obj = {};

function fun() {};

fun.prototype.name = "fun.name";

console.log(Reflect.has(obj.__proto__, "name")); //false

Reflect.setPrototypeOf(obj, fun.prototype);

console.log(Reflect.has(obj.__proto__, "name")); //true

console.log(obj.name); //fun.name