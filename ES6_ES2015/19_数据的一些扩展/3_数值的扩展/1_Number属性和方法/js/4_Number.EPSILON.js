/* 
	ES6 在Number对象上面，
	新增一个极小的常量Number.EPSILON。
	根据规格，它表示 1 与大于 1 的最小浮点数之间的差。
	对于 64 位浮点数来说，
	大于 1 的最小浮点数相当于二进制的1.00..001，小数点后面有连续 51 个零。
	这个值减去 1 之后，就等于 2 的 -52 次方

	Number.EPSILON实际上是JS能够表示的最小精度。
	误差如果小于这个值，就可以认为已经没有意义了，即不存在误差了

	引入一个这么小的量的目的
	在于为浮点数计算，设置一个误差范围
	因为浮点数计算是不精确的

	Number.EPSILON可以用来设置“能够接受的误差范围”。
	比如，误差范围设为 2 的-50 次方,即Number.EPSILON * Math.pow(2, 2)
	即如果两个浮点数的差小于这个值，我们就认为这两个浮点数相等

	因此，Number.EPSILON的实质是一个可以接受的最小误差范围
 */
let num = Number.EPSILON;
console.log(num);
console.log(num === Math.pow(2, -52)); //true
console.log(Number.isFinite(num)); //true
console.log(Number.isInteger(num)); //false

// 浮点数计算是不精确的
// num = 0.1 + 0.2;
// console.log(num);

// num = num - 0.3;
// console.log(num);

// console.log(num.toFixed(20));

console.log(0.1 + 0.2 - 0.3 < Number.EPSILON); //true
