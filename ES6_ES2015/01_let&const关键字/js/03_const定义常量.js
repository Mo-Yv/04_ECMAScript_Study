/* 值不能修改的量就叫常量 */
/* 声明常量 */
// const a = "AAA";
// console.log(a); //AAA

/* 特性 */
/* 1.必须要赋初始值 */
// const a;
// console.log(a); //报错

/* 2.常量名一般大写(非硬性要求) */
// const a = 10;
// const B = 10;
// console.log(a, B); //10 10

/* 3.常量的值不能修改 */
// const a = 10;
// a = 20;
// console.log(a); //报错

/* 4.块级作用域 */
// {
// 	const a = 10;
// }
// console.log(a); //报错

/* 5.对于对象元素的属性的修改,不算对常量值的修改 */
const arr = [0, 1];
arr[2] = 22;
console.log(arr); //[0, 1, 22]

const obj = {
	a: "AAA",
	b: "BB",
};
obj.a = "aaaaa";
console.log(obj); //{a: 'aaaaa', b: 'BB'}

/* 6.同一常量名不能重复声明 */
// const a = 5;
// const a = 6; //报错
// console.log(a);

/* 7.没有变量提升 */
// console.log(str); //报错
// const str = "ABCD";
