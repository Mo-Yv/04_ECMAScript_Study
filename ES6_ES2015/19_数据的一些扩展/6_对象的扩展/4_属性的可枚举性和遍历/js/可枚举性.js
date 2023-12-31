/* 
	对象的每个属性都有一个描述对象（Descriptor），
	用来控制该属性的行为。
	Object.getOwnPropertyDescriptor方法
	可以获取该属性的描述对象
 */
const obj = { a: 10 };

let descriptor = Object.getOwnPropertyDescriptor(obj, "a");
console.log(descriptor);
// {
// 	value: 10, //属性值
// 	writable: true, //是否可修改
// 	enumerable: true, //是否可枚举
// 	configurable: true //是否可更改和删除
// }

/* 
	描述对象的enumerable属性，称为“可枚举性”，
	如果该属性为false，
	就表示某些操作会忽略当前属性

	目前，有四个操作会忽略enumerable为false的属性:
		for...in循环：
			只遍历对象自身的和继承的可枚举的属性。
		Object.keys()：
			返回对象自身的所有可枚举的属性的键名。
		JSON.stringify()：只
			串行化对象自身的可枚举的属性。
		Object.assign()： 
			忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。

	这四个操作之中，前三个是 ES5 就有的，
	最后一个Object.assign()是 ES6 新增的。
	其中，只有for...in会返回继承的属性，
	其他三个方法都会忽略继承的属性，只处理对象自身的属性。
	实际上，引入“可枚举”（enumerable）这个概念的最初目的，
	就是让某些属性可以规避掉for...in操作，
	不然所有内部属性和方法都会被遍历到。
	比如，对象原型的toString方法，以及数组的length属性，
	就通过“可枚举性”，从而避免被for...in遍历到
*/

/* 
	toString 和 length 属性的 enumerable 都是 false，
	因此 for...in 不会遍历到这两个继承自原型的属性 
*/
descriptor = Object.getOwnPropertyDescriptor(Object.prototype, "toString");
console.log(descriptor.enumerable); //false

descriptor = Object.getOwnPropertyDescriptor([], "length");
console.log(descriptor.enumerable); //false

/* ES6 规定，所有 Class 的原型的方法都是不可枚举的 */
class Person {
	printInfo() {}
}

descriptor = Object.getOwnPropertyDescriptor(Person.prototype, "printInfo");
console.log(descriptor.enumerable); //false
