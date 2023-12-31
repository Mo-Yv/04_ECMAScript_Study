/* 
	函数的name属性，返回函数名。
	对象方法也是函数，因此也有name属性
 */
let obj = {
	fun() {},
	get property() {},
	set property(val) {},
};

// 方法的name属性返回函数名
console.log("fun.name =>", obj.fun.name); //fun

/* 
	如果对象的方法使用了取值函数（getter）和存值函数（setter），
	则name属性不是在该方法上面，
	而是该方法的属性的描述对象的get和set属性上面，
	返回值是方法名前加上get和set
*/
// console.log("property.name =>", obj.property.name); //报错

const descriptor = Object.getOwnPropertyDescriptor(obj, "property");

console.log("get.name =>", descriptor.get.name); //get property
console.log("set.name =>", descriptor.set.name); //set property

/* 
	有两种特殊情况：
	1. bind方法创造的函数，name属性返回bound加上原函数的名字
	2. Function构造函数创造的函数，name属性返回anonymous
*/
function fun() {}
let result = fun.bind().name;
console.log(result); //bound fun

result = new Function().name;
console.log(result); //anonymous

/* 如果对象的方法是一个 Symbol 值，那么name属性返回的是这个 Symbol 值的描述 */
const sym1 = Symbol(),
	sym2 = Symbol("Symbol2");

obj = {
	[sym1]() {},
	[sym2]() {},
};

console.log(obj[sym1].name); //""
console.log(obj[sym2].name); //[Symbol2]
