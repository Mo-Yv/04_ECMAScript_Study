/* 
	Number.isInteger()用来判断一个数值是否为整数
	如果参数不是数值，Number.isInteger返回false

	注意，由于JS采用 IEEE 754 标准，
	数值存储为64位双精度格式，
	数值精度最多可以达到 53 个二进制位（1 个隐藏位与 52 个有效位）。
	如果数值的精度超过这个限度，第54位及后面的位就会被丢弃，
	这种情况下，Number.isInteger可能会误判

	类似的情况还有，
	如果一个数值的绝对值小于Number.MIN_VALUE（5E-324），
	即小于JS能够分辨的最小值，会被自动转为 0。
	这时，Number.isInteger也会误判

	如果对数据精度的要求较高，
	不建议使用Number.isInteger()判断一个数值是否为整数
 */
const print = val => {
	console.table([
		{
			value: val,
			typeof: typeof val,
			isInteger: Number.isInteger(val),
		},
	]);
};

print(0); //true
// JS内部,整数和浮点数采用的是同样的储存方法
// 所以 0 和 0.0 被视为同一个值
print(0.0); //true
print(0.5); //false

// 因为这个小数的精度达到了小数点后16个十进制位，
// 转成二进制位超过了53个二进制位，
// 导致最后的那个1被丢弃了
const num1 = 1.0000000000000001,
	num2 = 1.0000000000000011,
	num3 = 1.000000000000001;

print(num1); //true
print(num2); //false
print(num3); //false

// console.log(num1 === 1); //true
// console.log(num2 === num3); //true

print(5e-324); //false
// 5E-325由于值太小，会被自动转为0，因此返回true
print(5e-325); //true
// console.log(5E-325 === 0); //true
