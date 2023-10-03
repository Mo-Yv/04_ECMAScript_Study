/* 
	export命令用于规定模块的对外接口

	一个模块就是一个独立的文件。
	该文件内部的所有变量，外部无法直接获取。
	若希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量

	需要特别注意的是，export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系

	目前，export命令能够对外输出的就是三种接口：函数(Functions)， 类(Classes)，var、let、const声明的变量(Variables)

	export命令可以出现在模块的任何位置，只要处于模块全局作用域就可以。
	如果处于块级作用域内，就会报错，import命令也是如此。
	这是因为处于条件代码块之中，就没法做静态优化了，违背了 ES6 模块的设计初衷

	export语句输出的接口，与其对应的值是动态绑定关系
	即通过该接口，可以取到模块内部实时的值
	如果模块中的变量值发生变化，导入处不需要做任何处理，值也会实时变化
*/
/* 写法一 分开导出 */
export var a = 10;
export let b = "B";
export const c = { d: true };
export function fun() {
	console.log("This is a function");
}

/* 写法二 导出为对象 */
var d = 999;
let e = "Hello";
const f = Symbol("world");
export { d, e, f };

/* 写法二也可以 导出为对象, 并重命名接口名 */
export { 
	d as D,
	e as E,
	f as F
};

/* export命令必须在全局环境中, 否则报错 */
// {
// 	export a; //报错
// }