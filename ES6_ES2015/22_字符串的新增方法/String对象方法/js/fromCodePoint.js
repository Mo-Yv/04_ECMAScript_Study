/* 
	ES5 提供String.fromCharCode()方法，
	用于从 Unicode 码点返回对应字符，
	但是这个方法不能识别码点大于0xFFFF的字符

	ES6 提供了String.fromCodePoint()方法，
	可以识别大于0xFFFF的字符，
	弥补了String.fromCharCode()方法的不足。
	在作用上，正好与实例方法codePointAt()相反

	注意，fromCodePoint方法定义在String对象上，
	而codePointAt方法定义在字符串的实例对象上
*/
// fromCharCode
let str = String.fromCharCode(0x20BB7);
console.log(str); //"ஷ"

// fromCodePoint
str = String.fromCodePoint(0x20BB7);
console.log(str); //"𠮷"

// 如果String.fromCodePoint方法有多个参数，则它们会被合并成一个字符串返回
str = String.fromCodePoint(0x78, 0x1f680, 0x79);
console.log(str);
console.log(str === 'x\uD83D\uDE80y'); //true