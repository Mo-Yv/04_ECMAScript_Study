/* 
	JS能够准确表示的整数范围在-2^53到2^53之间（不含两个端点）
	超过这个范围，无法精确表示这个值

	ES6 引入了 Number.MAX_SAFE_INTEGER 和 Number.MIN_SAFE_INTEGER 这两个常量，
	用来表示这个范围的上下限
 */
let max = Math.pow(2, 53);
console.log(max);

max = max + 1;
console.log(max);

// console.log(Math.pow(2, 53) === Math.pow(2, 53) + 1); //true

// 上限,最大值-1
max = Number.MAX_SAFE_INTEGER;
console.log("MAX =>", max);
console.log("2^53 - MAX =", Math.pow(2, 53) - max); //1

// 下限,最小值+1
let min = Number.MIN_SAFE_INTEGER;
console.log("MIN =>", min);
console.log("2^-53 - MIN =", -Math.pow(2, 53) - min); //-1

/* 
	Number.isSafeInteger()
	Number.isSafeInteger()则是用来判断一个整数
	是否落在 Number.MIN_SAFE_INTEGER~Number.MAX_SAFE_INTEGER这个范围之内
*/
const print = val => {
	console.table([
		{
			value: val,
			typeof: typeof val,
			isSafeInteger: Number.isSafeInteger(val),
		},
	]);
};

print(123); //true
print(Number.MIN_SAFE_INTEGER); //true
print(Number.MAX_SAFE_INTEGER); //true
print(Number.MIN_SAFE_INTEGER - 1); //true
print(Number.MAX_SAFE_INTEGER + 1); //true
print(Infinity); //false
print(NaN); //false
print(1.2); //false

/* 这个函数的实现很简单，就是跟安全整数的两个边界值比较一下 */
function Num() {}

Num.__proto__.isSafeInteger = function (n) {
	return typeof n === "number" && Math.round(n) === n && n >= Number.MIN_SAFE_INTEGER && n <= Number.MAX_SAFE_INTEGER;
};

console.log(Num.isSafeInteger(Infinity));
