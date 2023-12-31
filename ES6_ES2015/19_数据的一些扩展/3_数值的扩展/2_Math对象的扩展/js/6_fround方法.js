/* 
	Math.fround方法返回一个数的32位单精度浮点数形式

	对于32位单精度格式来说，
	数值精度是24个二进制位（1 位隐藏位与 23 位有效位），
	所以对于 -224 至 224 之间的整数（不含两个端点），
	返回结果与参数本身一致

	Math.fround方法的主要作用，
	是将64位双精度浮点数转为32位单精度浮点数。
	如果小数的精度超过24个二进制位，
	返回值就会不同于原值，
	否则返回值不变（即与64位双精度值一致）

	对于 NaN 和 Infinity，此方法返回原值。
	对于其它类型的非数值，
	Math.fround 方法会先将其转为数值，
	再返回单精度浮点数
 */
const print = val =>
	console.table([
		{
			value: val,
			typeof: typeof val,
			fround: Math.fround(val),
		},
	]);

print(0); //0
print(2 ** 24); //16777216

// 如果参数的绝对值大于2^24，返回的结果便开始丢失精度
print(2 ** 24 + 1); //16777216

// 未丢失精度
print(1.125);
print(7.25);

// 丢失精度
print(7.26); //7.260000228881836
print(1.124); //1.1239999532699585
print(1.00000001); //1
