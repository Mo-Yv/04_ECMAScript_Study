/*
	ES6允许按照一定模式从数组和对象中提取值,对变量进行赋值
	这被称为解构赋值

	结构赋值有两种模式:
		1.绑定模式
		2.赋值模式
*/
/**
 *  1.绑定模式
 * 在绑定模式中，
 * 模式以声明关键字（var、let 或 const）开始。
 * 然后，每个单独的属性必须绑定到一个变量或进一步解构。
 */
/* 数组的解构赋值 */
// const arr = ["A", "BB", "CCC"];
// let [a, b, c] = arr;
// console.log(`a = ${a}, b = ${b}, c = ${c}`);

// 只提取部分的值
const newArr = ["A", "BB", "CCC", "DDDD"];
// 只提取前两个值
// let [a, b] = arr;
// 提取前前两个值并赋值给a,b
// 剩下的所有值都以数组的形式赋值给c
// 用于承接其他值的变量名前需要加"...",且后面不能有逗号
let [a, b, ...c] = newArr;
// let [a, b, ...c, d] = arr; //报错
console.log(`a = ${a}, b = ${b}`); //"A","BB"
console.log("c =", c); //["CCC", "DDDD"]

/* 对象的解构赋值 */
const myInfo = {
	name: "张三",
	age: 50,
	isMale: false,
	printInfo: function () {
		console.log("调用函数,this指向", this);
	},
};

// 方法名必须与对象中的方法名一样
// 基础数据类型的变量名可不一样
// let { str, num, boolean, printInfo } = myInfo;
// console.log(`str = ${str}, num = ${num}, boolean = ${boolean}, printInfo = ${printInfo}`);
// // 这个printInfo是let定义的变量名,this指向window对象
// // printInfo(); //window对象
// printInfo.call(myInfo); //myInfo对象
// // myInfo.printInfo(); //myInfo对象

// 单独解构
// let { printInfo } = myInfo;
// printInfo(); //window对象

// 如果基础数据类型的变量名和对象中的属性名一样
// 那么就可以直接提取对应属性名的属性值
// 即使顺序不一致也没问题
// let { age } = myInfo;
// let { isMale, name } = myInfo;
// console.log(age, isMale, name); //50 false "张三"

// 承接剩余属性,和数组一样
let { name, ...otherInfo } = myInfo;
console.log(name); //"张三"
console.log(otherInfo); //剩余属性

// 要承接剩余属性,那么变量名就需要跟属性名一致
// 否则就是undefined
// let { str, age, ...otherInfo } = myInfo;
// console.log(str); //undefined
// console.log(age); //50
// console.log(otherInfo); //除了age以外的其余属性

// const obj = {
// 	a: 1,
// 	b: {
// 		c: 3
// 	}
// };

// let { a, b: { c: d } } = obj;
// console.log(a, d); //1 3

// let { x, y: { m: n } } = obj; //报错
// console.log(x, n);

/**
 * 赋值模式
 * 在赋值模式中，模式不以关键字开头。
 * 每个解构属性都被赋值给一个赋值目标——
 * 这个赋值目标可以事先用 var 或 let 声明，也可以是另一个对象的属性
 * 一般来说，可以是任何可以出现在赋值表达式左侧的东西。
 */
const arr = [];
const obj = { a: 1, b: 2 };

// 必须在表达式最外层加上"()"
({ a: arr[0], b: arr[1] } = obj);
console.log(arr); //[1, 2]
