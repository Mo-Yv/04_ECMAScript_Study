/* 
	JavaScript 字符串允许直接输入字符，
	以及输入字符的转义形式。
	举例来说，“中”的 Unicode 码点是 U+4e2d，
	你可以直接在字符串里面输入这个汉字，
	也可以输入它的转义形式\u4e2d，两者是等价的

	但是，JavaScript 规定有5个字符，
	不能在字符串里面直接使用，
	只能使用转义形式:
		U+005C：反斜杠（reverse solidus)
		U+000D：回车（carriage return）
		U+2028：行分隔符（line separator）
		U+2029：段分隔符（paragraph separator）
		U+000A：换行符（line feed）

	这个规定本身没有问题，
	麻烦在于 JSON 格式允许字符串里面直接使用 U+2028（行分隔符）和 U+2029（段分隔符）。
	这样一来，服务器输出的 JSON 被JSON.parse解析，
	就有可能直接报错

	模板字符串现在就允许直接输入 U+2028（行分隔符）和 U+2029（段分隔符）。
	另外，正则表达式依然不允许直接输入这两个字符，
	这是没有问题的，
	因为 JSON 本来就不允许直接包含正则表达式
 */
let str = "\u4e2d";
console.log(str, str === "中");

str = '"\u005c"';
console.log(str);

// JSON.parse(str); //报错

console.log(JSON.parse('"\u4e2d"')); //可以解析

str = `A\u2028B,C\u2029D`;
console.log(str);
console.log(str.length);
