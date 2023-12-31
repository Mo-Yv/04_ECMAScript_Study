/* 
	尾调用之所以与其他调用不同，
	就在于它的特殊的调用位置。

	函数调用会在内存形成一个"调用记录"，
	又称"调用帧"(call frame)，保存调用位置和内部变量等信息
	如果在函数A的内部调用函数B，那么在A的调用帧上方，还会形成一个B的调用帧
	等到B运行结束，将结果返回到A，B的调用帧才会消失
	如果函数B内部还调用函数C,那就还有一个C的调用帧,以此类推......
	所有的调用帧，就形成一个"调用栈"(call stack)

	尾调用由于是函数的最后一步操作，
	所以不需要保留外层函数的调用帧，
	因为调用位置、内部变量等信息都不会再用到了，
	只要直接用内层函数的调用帧，
	取代外层函数的调用帧就可以了

	注意:
	只有不再用到外层函数的内部变量，
	内层函数的调用帧才会取代外层函数的调用帧，
	否则就无法进行尾调用优化
 */
/* 
	如果函数 funA 不是尾调用，
	函数 fun1 就需要保存内部变量x和y的值、funA 的调用位置等信息。
	但由于调用 funA 之后，函数 fun1 就结束了，
	所以执行到最后一步，
	完全可以删除 fun1 的调用帧，
	只保留 funA 的调用帧

	这就叫做"尾调用优化"(Tail call optimization)，
	即只保留内层函数的调用帧

	ES6 的尾调用优化只在严格模式下开启，
	正常模式是无效的。
	这是因为在正常模式下，函数内部有两个变量，可以跟踪函数的调用栈。
		func.arguments：返回调用时函数的参数。
		func.caller：返回调用当前函数的那个函数。
	尾调用优化发生时，函数的调用栈会改写，因此上面两个变量就会失真。
	严格模式禁用这两个变量，所以尾调用模式仅在严格模式下生效
*/
const funA = a => a * 10;
const fun1 = () => {
	let x = (y = 10);
	return funA(x * y);
};

console.log("fun1 =>", fun1());

// 等同于
const fun2 = () => funA(100);
console.log("fun2 =>", fun2());

//  等同于
console.log("funA =>", funA(100));

// 函数 funTest 不会进行尾调用优化，
// 因为内层函数 funInner 用到了外层函数 funTest 的内部变量b
// 换句话说就是 funTest 内含有关于 funTest 的内部变量b的操作
// funTest 离开了 funTest 的作用域就无法获取变量b,从而报错
function funTest(a) {
	let b = 5;
	const funInner = c => {
		b = b * 20;
		return c * b;
	};
	return funInner(a);
}

console.log("funTest =>", funTest(10));
