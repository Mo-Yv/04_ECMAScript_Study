/* 
	Math.trunc方法用于去除一个数的小数部分，返回整数部分
	对于非数值，Math.trunc内部使用Number方法将其先转为数值
	对于空值和无法截取整数的值，返回NaN
 */
const print = val =>
	console.table([
		{
			value: val,
			typeof: typeof val,
			trunc: Math.trunc(val),
		},
	]);

print(4.1); //4
print(-4.9); //-4
print(Infinity); //Infinity
print(Number.EPSILON); //0
print(Number.MAX_SAFE_INTEGER);
print(Number.MIN_SAFE_INTEGER);

// 先通过Number()转为数值
print("4.9"); //4
print(true); //1
print(false); //0
print(null); //0
print(""); //0

// 对于空值和无法截取整数的值，返回NaN
print(undefined); //NaN
print("Hello"); //NaN
print(NaN); //NaN

/* 模拟实现 */
function M() {}
M.__proto__.trunc = function (val) {
	return val < 0 ? Math.ceil(val) : Math.floor(val);
};

// 测试
console.group("测试");
console.log(M.trunc(4.1));
console.log(M.trunc(4.9));
console.log(M.trunc("4.9"));
console.log(M.trunc("Hello"));
console.groupEnd();
