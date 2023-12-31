/* 
	Reflect.deleteProperty方法等同于delete obj[name]，
	用于删除对象的属性

	该方法返回一个布尔值。
	如果删除成功，或者被删除的属性不存在，返回true；
	删除失败，被删除的属性依然存在，返回false。

	如果Reflect.deleteProperty()方法的第一个参数不是对象，
	会报错
*/
let myObj = { foo: "bar" };

// 旧写法
let result = delete myObj.foo;
console.log(result, Reflect.has(myObj, "foo"));

// 新写法
result = Reflect.deleteProperty(myObj, "foo");
console.log(result, Reflect.has(myObj, "foo"));

// 属性a不可删除
Object.defineProperty(myObj, "a", {
	configurable: false,
	value: 111
});

result = Reflect.deleteProperty(myObj, "a");
console.log(result, Reflect.has(myObj, "a"));
