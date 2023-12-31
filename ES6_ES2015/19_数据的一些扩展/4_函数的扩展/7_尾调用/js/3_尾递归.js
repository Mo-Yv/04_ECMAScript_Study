/* 
	函数调用自身，称为递归。
	如果尾调用自身，就称为尾递归

	递归非常耗费内存，
	因为需要同时保存成千上百个调用帧，
	很容易发生"栈溢出"(stack overflow)错误。
	但对于尾递归来说，由于只存在一个调用帧，
	所以永远不会发生"栈溢出"错误
 */
const num = 9;

// 计算n的阶乘，最多需要保存n个调用记录，复杂度 O(n)
const funA = n => (n === 1 ? 1 : n * funA(n - 1));

console.log(`funA: ${num}! = ${funA(num)}`);

// 如果改写成尾递归，只保留一个调用记录，复杂度 O(1)
const factorial = (n, val = 1) => (n === 1 ? val : factorial(n - 1, n * val));
console.log(`factorial: ${num}! = ${factorial(num)}`);

// 计算斐波拉契数列,非尾递归
const funB = n => (n <= 1 ? 1 : funB(n - 1) + funB(n - 2));
console.log(`funB: 斐波拉契数列第${num + 1}项 = ${funB(num)}`);
// 当n非常大时，递归调用可能会导致栈的深度非常大，从而导致栈溢出
// console.log(funB(100)); //超时未响应

// 尾递归
const fibonacci = (n, first = 1, second = 1) => (n <= 1 ? second : fibonacci(n - 1, second, first + second));

console.log(`fibonacci: 斐波拉契数列第${num + 1}项 = ${fibonacci(num)}`);
console.log(`fibonacci: 斐波拉契数列第100项 = ${fibonacci(100)}`); //正常输出
console.log(`fibonacci: 斐波拉契数列第1000项 = ${fibonacci(1000)}`); //正常输出
console.log(fibonacci(6957)); //正常输出

try {
	console.log(`fibonacci: 斐波拉契数列第6958项 = ${fibonacci(6958)}`); //正常输出
} catch (err) {
	console.warn(6958, "超过最大调用堆栈大小");
}

try {
	// Edge正常输出
	console.log(`fibonacci: 斐波拉契数列第6959项 = ${fibonacci(6959)}`);
} catch (err) {
	// Chrome执行catch
	console.warn(6959, "超过最大调用堆栈大小");
}

try {
	// Chrome正常输出
	console.log(`fibonacci: 斐波拉契数列第7157项 = ${fibonacci(7157)}`);
} catch (err) {
	// Edge执行catch
	console.warn(6959, "超过最大调用堆栈大小");
}
