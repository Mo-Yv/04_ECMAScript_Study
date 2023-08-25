/* ES6允许给函数参数赋初始值 */
// 1.形参初始值,具有默认值的参数(一般情况下放置位置靠后)
const fun1 = (a, b, c = 10) => {
	console.log(a + b + c);
};
fun1(1, 2);
fun1(1, 2, 20);

// 2.与解构赋值配合
const fun2 = ({ a = "aaaa", b, c, d }) => {
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(d);
};

fun2({
	// a: "AAA",
	b: "BBB",
	c: "CCC",
	d: "DDD",
});
