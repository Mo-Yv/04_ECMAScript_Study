/* 
	Math.sign方法用来判断一个数到底是正数、负数、还是零。
	对于非数值，会先将其转换为数值

	它会返回五种值。
		1.参数为正数，返回+1
		2.参数为负数，返回-1
		3.参数为 0，返回 0
		4.参数为-0，返回-0
		5.其他值，返回 NaN
 */
const print = val =>
	console.table([
		{
			value: val,
			typeof: typeof val,
			sign: Math.sign(val),
		},
	]);

print(5); // 1
print(-5); //-1
print(0); //0
print(-0); //-0
print(Infinity); //1
print(Number.EPSILON); //1
print("123"); //1
print("a"); //NaN
print(true); //1
print(false); //0
print(null); //0
print(undefined); //NaN
print(NaN); //NaN

/* 模拟实现 */
function M() {}
M.__proto__.sign = function (num) {
	num = Number(num);
	if (num === 0 || isNaN(num)) return num;
	return num > 0 ? 1 : -1;
};

console.group("测试");
console.log(M.sign(0));
console.log(M.sign(-0));
console.log(M.sign(-5));
console.log(M.sign("123"));
console.log(M.sign(false));
console.groupEnd();
