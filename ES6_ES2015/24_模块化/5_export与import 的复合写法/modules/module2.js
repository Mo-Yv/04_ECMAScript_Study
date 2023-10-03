/* 
	如果在一个模块之中，先输入后输出同一个模块，import语句可以与export语句写在一起
	但需要注意的是，写成一行以后，目标接口实际上并没有被导入当前模块，
	只是相当于对外转发了这两个接口，导致当前模块不能直接使用转发的接口
*/
export { fun, a } from "./module1.js";
/* 模块的接口改名 */
export { fun as callback, a as argument } from "./module1.js";
/* 整体输出 */
export * from "./module1.js";
/* 默认接口 */
export { default } from './module1.js';
/* 具名接口改为默认接口 */
// export { fun as default } from './module1.js';
/* 默认接口也可以改名为具名接口 */
export { default as fun } from './module1.js';

try {
	fun(a); //报错
} catch (err) {
	console.error(err);
}

// 可以简单理解为以下写法, 但并没有将接口导入到这个模块中
// import { fun, a } from './module1.js';
// export { fun, a };