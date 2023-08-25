/* 
	symbol 是一种基本数据类型（primitive data type）。
	Symbol() 函数会返回 symbol 类型的值，该类型具有静态属性和静态方法。
	它的静态属性会暴露几个内建的成员对象；它的静态方法会暴露全局的 symbol 注册，且类似于内建对象类，
	但作为构造函数来说它并不完整，因为它不支持语法："new Symbol()"。

	每个从 Symbol() 返回的 symbol 值都是唯一的。
	一个 symbol 值能作为对象属性的标识符；
	这是该数据类型仅有的目的

	注意，Symbol()函数前不能使用new命令，否则会报错。
	这是因为生成的 Symbol 是一个原始类型的值，不是对象，所以不能使用new命令来调用。
	另外，由于 Symbol 值不是对象，所以也不能添加属性。
	基本上，它是一种类似于字符串的数据类型。
*/
/* 创建Symbol类型数据 */
let s1 = Symbol();
console.log("s1 =", s1); //Symbol()
console.log("数据类型:", typeof s1); //symbol

/* Symbol()可以接收一个字符串作为描述 */
let s2 = Symbol("abc");
console.log("s2 =", s2); //Symbol(abc)
console.log("数据类型:", typeof s2); //symbol

/* 通过Symbol.prototype.description直接获取描述(ES2019) */
console.log("获取s2的描述:", s2.description);

console.log(Symbol() === Symbol()); //false
console.log(Symbol("abc") === Symbol("abc")); //false

/* 数据类型转换 */
// 不能进行Number转换
// console.log(Number(s1)); //报错,parseFloat和parseInt也是报错

// 能进行Boolean转换
// 且结果都是true
console.log("转boolean:", Boolean(s1)); //true

// 能进行String转换
console.log("转string:", String(s1));
console.log("转string:", s1.toString());

// 不能进行isNaN判断
// console.log(isNaN(s1)); //报错

/* 运算 */
// + - * / % 字符串拼接 都不行
// let a = s1 + "aaa";
// console.log(a); // 报错
