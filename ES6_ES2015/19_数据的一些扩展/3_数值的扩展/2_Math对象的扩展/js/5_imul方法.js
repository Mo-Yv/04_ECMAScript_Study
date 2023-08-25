/* 
	Math.imul方法返回两个数以 32 位带符号整数形式相乘的结果，
	返回的也是一个 32 位的带符号整数

	如果只考虑最后 32 位，
	大多数情况下，Math.imul(a, b)与a * b的结果是相同的，
	即该方法等同于(a * b)|0的效果（超过 32 位的部分溢出）。
	之所以需要部署这个方法，是因为 JavaScript 有精度限制，
	超过 2 的 53 次方的值无法精确表示。
	这就是说，对于那些很大的数的乘法，
	低位数值往往都是不精确的，
	Math.imul方法可以返回正确的低位数值
 */
const print = (a, b) =>
	console.table([
		{
			value: `${a} , ${b}`,
			typeof: `${typeof a} , ${typeof b}`,
			imul: Math.imul(a, b),
		},
	]);

print(2, 4); //8
print(0, 4); //0
print(-2, 4); //-8
