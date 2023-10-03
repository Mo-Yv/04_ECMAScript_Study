/* 
	需要加载该模块时，import命令可以为该匿名函数指定任意名字 
	这时就不需要知道原模块输出的函数名

	需要注意的是，这时import命令后面，不使用"{}"
*/
import fun from "./module.js";

fun();