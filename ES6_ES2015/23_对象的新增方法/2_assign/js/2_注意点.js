/* 
	1.浅拷贝 
	Object.assign()方法实行的是浅拷贝，而不是深拷贝。
	也就是说，如果源对象某个属性的值是对象，
	那么目标对象拷贝得到的是这个对象的引用
*/
let obj1 = { a: { b: 1 } },
	obj2 = Object.assign({}, obj1);

// obj1的a属性的值是一个对象，Object.assign()拷贝得到的是这个对象的引用。
// 这个对象的任何变化，都会反映到目标对象上面
obj1.a.b = 2;
console.log(obj2.a.b); // 2

/* 
	2.同名属性的替换
	对于这种嵌套的对象，一旦遇到同名属性，Object.assign()的处理方法是替换，而不是添加
*/
let target = { a: { b: "c", d: "e" } };
let source = { a: { b: "hello" } };
Object.assign(target, source);
console.log(target); //{ a: { b: 'hello' } }

/* 
	3.数组的处理
	Object.assign()可以用来处理数组，但是会把数组视为对象
*/
// Object.assign()把数组视为属性名为 0、1、2 的对象，
// 因此源数组的 0号属性4 覆盖了 目标数组的 0号属性1
let result = Object.assign([1, 2, 3], [4, 5]);
console.log(result); //[4, 5, 3]

/* 
	4.取值函数的处理
	Object.assign()只能进行值的复制，如果要复制的值是一个取值函数，那么将求值后再复制
*/
// source对象的foo属性是一个取值函数，
// Object.assign()不会复制这个取值函数，
//  只会拿到值以后，将这个值复制过去
source = {
	get foo() {
		return 1;
	},
};
target = {};

result = Object.assign(target, source);
console.log(result); //{ foo: 1 }
