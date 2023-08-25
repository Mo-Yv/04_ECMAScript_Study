/* 
	Math.cbrt()方法用于计算一个数的立方根
	对于非数值，
	Math.cbrt()方法内部也是先使用Number()方法将其转为数值
 */
const print = val =>
	console.table([
		{
			value: val,
			typeof: typeof val,
			cbrt: Math.cbrt(val),
		},
	]);

print(-8); //-2
print(8); //2
print("64"); //4
print("hello"); //NaN

/* 模拟实现 */
function M() {}

M.__proto__.cbrt = function (n) {
	const num = Math.pow(Math.abs(n), 1 / 3);
	return n > 0 ? num : -num;
};

console.group("测试");
console.log(M.cbrt(-8));
console.log(M.cbrt("64"));
console.groupEnd();
