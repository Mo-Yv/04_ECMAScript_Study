/* 
	本人注: 本节与其说是知识点, 不如说是一个关于跨文件共享数据的技巧或方式
	大致思路:
		每个数据依旧放在对应的模块中
		创建一个total.js，用于合并其他模块的数据
		将其他模块中的数据一起导入进total.js中, 然后导出
		使用的时候，直接加载total.js就可以了
*/
import * as param from "./modules/total.js";

console.log(param);

let sum = Object.values(param).reduce((item, next) => item + next);
console.log(sum);
