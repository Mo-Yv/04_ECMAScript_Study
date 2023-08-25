/* 
	ES6 为字符串添加了遍历器接口，
	使得字符串可以被for...of循环遍历

	除了遍历字符串，
	这个遍历器最大的优点是可以识别大于0xFFFF的码点，
	传统的for循环无法识别这样的码点
 */
let str = "Hello world";

for (const iterator of str) {
	console.log(iterator);
}

// 识别大于0xFFFF的码点
str = String.fromCodePoint("0x20BB7");
// console.log(str);

// 正常输出一个字符
for (const iterator of str) {
	console.log(iterator); //𠮷
}

// for循环会认为它包含两个字符(乱码)
// for(let i = 0;i < str.length;i++){
// 	console.log(str[i]); //两个乱码
// }
