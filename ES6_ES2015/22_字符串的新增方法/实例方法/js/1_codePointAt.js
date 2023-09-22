/* 
	JS内部，字符以 UTF-16 的格式储存，每个字符固定为2个字节。
	对于那些需要4个字节储存的字符（Unicode 码点大于0xFFFF的字符），
	JS会认为它们是两个字符

	codePointAt()方法会正确返回 32 位的 UTF-16 字符的码点。
	对于那些两个字节储存的常规字符，它的返回结果与charCodeAt()方法相同

	codePointAt()方法的参数，是字符在字符串中的位置（从 0 开始）

	另外，codePointAt()方法返回的是码点的十进制值，
	如果想要十六进制的值，可以使用toString()方法转换一下
*/
// 汉字"𠮷"(不是“吉祥”的"吉")的码点是0x20BB7，
// UTF-16编码为0xD842 0xDFB7(十进制为55362 57271)，需要4个字节储存。
let str = "𠮷";

// 对于这种4个字节的字符，JS不能正确处理，字符串长度会误判为2，
// charAt()方法无法读取整个字符，
// charCodeAt()方法只能分别返回前两个字节和后两个字节的值
console.log(`
	"${str}".length = ${str.length},
	.charAt(0) = ${str.charAt(0)},
	.charAt(1) = ${str.charAt(1)},
	.charCodeAt(0) = ${str.charCodeAt(0)},
	.charCodeAt(1) = ${str.charCodeAt(1)}
`.trim()); 

// codePointAt()能够正确处理4个字节储存的字符，返回一个字符的码点
console.log(`
	"${str}".codePointAt(0) = ${str.codePointAt(0)},
	.codePointAt(1) = ${str.codePointAt(1)}
`.trim());

// JS将“𠮷a”视为三个字符，
// codePointAt()在第一个字符上，正确地识别了“𠮷”，返回了它的十进制码点 134071（即十六进制的20BB7）。
// 在第二个字符（"𠮷"的后两个字节)和第三个字符"a"上，codePointAt()的结果与charCodeAt()方法相同
str = "𠮷a";
console.log(`
	"${str}".codePointAt(2) = ${str.codePointAt(0)}
`.trim());

/* 
	codePointAt()方法的参数，仍然是不正确的。
	比如，上面代码中，字符a在字符串s的正确位置序号应该是 1，但是必须向codePointAt()方法传入 2。
	解决这个问题的一个办法是使用for...of循环，因为它会正确识别 32 位的 UTF-16 字符
*/
for (const it of str) {
	console.log(it.codePointAt(0).toString(16));
}

// 使用扩展运算符(...)进行展开运算也可以
let arr = [...str];
arr.forEach(it => console.log(it.codePointAt(0).toString(16)));

/* 
	codePointAt()方法是测试一个字符由两个字节还是由四个字节组成的最简单方法
*/
function bite(str) {
	return str.codePointAt(0) > 0xFFFF;
}

console.group("test");
{
	console.log(bite("𠮷")); //true
	console.log(bite("a")); //false
}
console.groupEnd();