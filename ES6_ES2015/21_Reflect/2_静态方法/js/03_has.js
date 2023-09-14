/* 
	Reflect.has方法对应name in obj里面的in运算符
	如果Reflect.has()方法的第一个参数不是对象，会报错
*/
const obj = { a: 0 };

let result = "a" in obj;
console.log(result); //true

result = Reflect.has(obj, "a");
console.log(result); //true

result = Reflect.has(obj, "b");
console.log(result); //false