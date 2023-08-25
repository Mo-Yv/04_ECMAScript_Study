/* 
	扩展运算符"..."
	能将数组转换为逗号分隔的参数序列 

	扩展运算符"..."与函数rest参数的"...",
	两者的含义是完全不一样的

	扩展运算符"..." 可以理解为将集合内的元素拆解出来
	函数rest参数的"..." 是将任意个数的元素封装进一个集合内
	可以说两者的含义与作用是完全相反的
*/

const arr = [0, 1, 2, 3, 4, 5];

const fun1 = (...rest) => console.log(rest);
fun1(...arr);

const fun2 = function () {
	console.log(arguments);
};
fun2(...arr);
