/* 
	repeat方法返回一个新字符串，表示将原字符串重复n次
*/
console.log("a".repeat(5)); //aaaaa
console.log("Hello".repeat(2)); //HelloHello

// 0, 输出空字符
console.log("a".repeat(0)); //""

// 正小数, 会向下取整, 不是四舍五入
console.log("a".repeat(2.2)); //aa
console.log("a".repeat(2.9)); //aa
console.log("a".repeat(0.2)); //""

// 小于-1的负数或Infinity, 报错
try {
	console.log("a".repeat(-1));
} catch (err) {
	try {
		console.log("a".repeat(Infinity));
	} catch (e) {
		console.error(e); //输出报错
	}
	console.error(err); //输出报错
}

// -1~0之间的小数, 取0
console.log("a".repeat(-0.9)); //""

// NaN, 等同于0
console.log("a".repeat(NaN)); //""

// 非number, 会先转数字
console.log("a".repeat("3")); //aaa
console.log("a".repeat("a")); //""
console.log("a".repeat("")); //""
console.log("a".repeat(true)); //"a"
console.log("a".repeat(false)); //""
console.log("a".repeat(null)); //""

// 不传参数相当于传入undefined
console.log("a".repeat()); //""