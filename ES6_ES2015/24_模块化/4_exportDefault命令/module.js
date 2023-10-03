/* 
	从前面的例子可以看出，使用import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载。
	但是，未必所有用户愿意翻文档，去了解模块有哪些属性和方法，希望快速上手
	为了给用户提供方便，让他们不用阅读文档就能加载模块，就要用到export default命令，为模块指定默认输出

	export default命令用于指定模块的默认输出。
	注意，一个模块只能有一个默认输出，在一个模块中export default命令只能使用一次。
	因此，import命令后面才不用加大括号，因为只可能唯一对应export default命令

	本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字
	export default写法:
		导出时: export default xxx;
		导入时: import name from 'moduleName';
	等价于:
		导出时: export {xxx as default};
		导入时: import { default as name } from 'moduleName';
*/
// 可以导出匿名函数
export default function(...rest) {
	console.log("This is a Function", rest);
}

// 也可以导出具名函数, 但没什么用
// export default function fun() {
// 	console.log("This is a Function");
// }

// 等价于
// function fun() {
// 	console.log("This is a Function");
// }
// export default fun;

/* 因为export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句 */
// 其实是将a的值赋值给default
// export default var a = 10; //报错

/* 也因为export default命令的本质是将后面的值，赋给default变量，所以可以直接将一个值写在export default之后 */
// export default 0;

// 如果是export命令就不行了
// export 0; //报错

/* 也可以用来输出类 */
// export default class MyClass {}