/* ES6允许使用箭头(=>)定义函数 */

// 原来的方法,不能简写,不能省略()
function funName(a, b) {
	return a + b;
}
console.log(funName(1, 2));

/* 箭头函数 */
/* 仅有一个参数时,可省略() */
// 没有参数,不能省略()
const fun1 = () => {
	const str = `fun1,没有参数`;
	console.log(str);
};
fun1();
// 一个参数,可省略()
const fun2 = a => {
	a = "AAA";
	console.log(a);
};
fun2();
// 两个及以上参数,不能省略()
const fun3 = (a, b) => {
	a = 10;
	b = 20;
	console.log(a + b);
};
fun3();

/* 
	当函数只有一条语句时可简写
	简写时,return关键字也必须省略
*/
// 简写:fun4 仅接收一个参数a,并return "Function " + a
const fun4 = a => "Function " + a;

// const fun4 = a => return "Function " + a; //报错

console.log(fun4("fun4简写"));

// fun4完整写法
// const fun4 = a => {
// 	return "Function " + a;
// }

// 简写fun5
const fun5 = () => console.log("fun5简写");
fun5();

// fun5完整写法
// const fun5 = () => {
// 	console.log("fun5简写");
// }
