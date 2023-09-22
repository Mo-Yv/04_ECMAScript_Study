/* 
	at()方法接受一个整数作为参数，返回参数指定位置的字符，
	支持负索引（即倒数的位置）
*/
let str = "Hello world",
	result;

result = str.at(1);
console.log(result); //e

result = str.at(-1);
console.log(result); //d

// 超出范围返回undefined
result = str.at(100);
console.log(result); //undefined

console.log(str.at(0) === str.at(-0)); //true

result = str.at(true);
console.log(result); //d