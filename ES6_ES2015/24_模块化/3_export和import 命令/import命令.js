/* 
	import命令用于导入其他模块提供的功能

	使用export命令定义了模块的对外接口以后，
	其他JS文件就可以通过import命令加载这个模块

	import后面的from指定模块文件的位置，可以是相对路径，也可以是绝对路径。
	如果不带有路径，只是一个模块名，那么必须有配置文件，告诉JS引擎该模块的位置

	使用import导入时，必须与模块提供的接口名一样，否则报错
	但导入后再重新命名变量是没问题的, 对模块没有影响

	注意，import命令具有提升效果，会提升到整个模块的头部，首先执行
*/
// import命令有类似于变量提升的机制
console.log(module); //Module对象

/*
	写法一 整体加载
	语法: import * as 变量(对象)名 from "路径/模块名" 

	用as指定一个对象，所有输出值都加载在这个对象上面
*/
import * as module from "./modules/export命令.js";

console.log(module); //Module对象
module.fun();

// Module对象的属性是只读的
try {
	module.a = 999; //报错
	console.log(module.a);
} catch (err) {
	const d = Object.getOwnPropertyDescriptor(module, "a");
	console.error(d, err);
}

/* 
	写法二 逐一加载 
	语法: import { name1, name2, ... } from "路径/模块名"

	import后跟"{}", 而"{}"内引入模块中export的接口名
	这种写法也可以使用as为变量重命名 

	注意, "{}"中不能出现任何表达式, 哪怕是字符串拼接, 会报错
*/
import { a, b, c, fun, D, E, F as f } from "./modules/export命令.js";

console.log(a, b, c, D, E, f);
fun();

// import命令输入的变量都是只读的，因为它的本质是输入接口
try {
	a = 999;
} catch (err) {
	console.error(err);
}

// 如果是一个对象，修改对象的属性是允许的 
// 并且其他模块也可以读到改写后的值
// 但是! 如果因为某个模块加载文件修改数据, 而导致其他模块加载文件数据出错, 这种问题是非常难排查的
// 所以建议凡是输入的变量，都当作完全只读，不要轻易改变它的属性
c.cc = "CCCC";
console.log(c.cc);

/* 
	写法三 
	语法: import 变量名 from "路径/模块名"

	只适用于引入使用export default命令导出方式的模块
*/
import obj from "./modules/module.js";
console.log(obj);

/* 以下几种写法是错误的, 会报错 */
// 1.import后的{}内有表达式的
// import { 'f' + 'oo' } from 'my_module';

// 2.将变量作为模块路径或模块名放在from后的
// let module = 'my_module';
// import { foo } from module;

// 3.写在块级作用域内, 这一点与export命令一样
// if (isTrue) {
//   import { foo } from 'module';
// } else {
//   import { foo } from 'module2';
// }