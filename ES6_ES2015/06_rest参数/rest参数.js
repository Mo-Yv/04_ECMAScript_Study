/* 
	ES6引入rest参数,用于获取函数的实参,代替arguments 
*/

// argument
function fun1() {
	console.log(arguments);
}
fun1(1, 2, 3, 4, 5);

// rest参数
// 命名不是固定的(不是一定要叫rest)
// 使用rest参数必须带括号,哪怕只有一个参数
const fun2 = (...rest) => console.log(rest);
fun2(1, 2, 3, 4, 5);

// rest参数必须放在所有参数的最后一个
const fun3 = (a, b, ...args) => console.log(a, b, args);
fun3(1, 2, 3, 4, 5);
