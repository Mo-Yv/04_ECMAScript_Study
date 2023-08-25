/* 
	尾调用（Tail Call）是函数式编程的一个重要概念，本身非常简单，
	一句话就能说清楚:
	就是指某个函数的最后一步是调用另一个函数

	尾调用不一定出现在函数尾部，只要是最后一步操作即可
 */
// 尾调用
function funA(a) {}
function funB(b) {}

function fun1(x) {
	return funA(x);
}

/* 以下三种情况，都不属于尾调用 */
// 调用函数g之后，还有赋值操作
function fun2(c) {
	const f = funA(c);
	return f;
}

// 调用后还有操作，即使写在一行内
function fun3(c) {
	return funA(c) + 1;
}

// 相当于先调用函数,最后return undefined
function fun4(c) {
	funA(c);
}

/* 下面这个属于尾调用 */
function fun5(d) {
	// return x > 0 ? funA(d) : funB(d);
	// 等同于下面的写法
	if (x > 0) return funA(d);
	return funB(d);
}
