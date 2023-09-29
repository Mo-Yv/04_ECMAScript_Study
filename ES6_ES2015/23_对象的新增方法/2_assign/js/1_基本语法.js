/*
	Object.assign()方法用于对象的合并，
	将源对象（source）的所有可枚举属性，
	复制到目标对象（target）

	Object.assign()拷贝的属性是有限制的，
	只拷贝源对象的自身属性（不拷贝继承属性），
	也不拷贝不可枚举的属性
*/
let obj = { a: 1 },
	obj1 = { b: 2 };

Object.assign(obj, obj1);
console.log(obj); //{a: 1, b: 2}

let obj2 = { a: 10, b: 20 };
// 重复属性会被后来的覆盖掉
Object.assign(obj, obj2);
console.log(obj); //{a: 10, b: 20}

Object.defineProperty(obj1, "c", {
	value: "CCC",
	enumerable: false
});

// 不可枚举的属性不会被复制
Object.assign(obj, obj1);
console.log(obj); //{a: 10, b: 2}

// 字符串会以数组形式，拷贝入目标对象
Object.assign(obj, "d");
console.log(obj); //{0: 'd', a: 10, b: 2}

// 其他值都不会产生效果,包括null和undefined
Object.assign(obj, undefined);
Object.assign(obj, null);
Object.assign(obj, 10);
console.log(obj); //{0: 'd', a: 10, b: 2}

/* 只有一个参数时 */
// 如果参数是对象就直接返回该对象
let result = Object.assign(obj1);
console.log(result, result === obj1); //{b: 2, c: 'CCC'} true
result.d = 555;
console.log(obj1); //{b: 2, d: 555, c: 'CCC'}

// 如果参数不是对象则先转换为对象
result = Object.assign(0);
console.log(result); //Number对象

result = Object.assign(Symbol("A"));
console.log(result); //Symbol对象

result = Object.assign([]);
console.log(result); //[]

// null和undefined作为第一参数都会报错
try {
	result = Object.assign(null);
} catch (err) {
	try {
		result = Object.assign(undefined);
	} catch (e) {
		console.error(e);
	}
	console.error(err);
}
