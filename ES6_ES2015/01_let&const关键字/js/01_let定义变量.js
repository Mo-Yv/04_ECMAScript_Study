/* 声明变量 */
// let a;
// let b, c, d;
// let e = 1;
// let f = 2,
// 	g = "abc",
// 	h = [0, 1, 2];

// console.log(a, b, c, d, e, f, g, h);

/* 特性 */
/* 1.同一变量名不能重复声明 */
// let num = 1;
// let num = 2; //报错
// var num = 3; //报错
// console.log(num);

/* 2.块级作用域 */
// {
// 	let a = "zmy";
// 	var b = 50;
// }
// console.log("a =", a); //报错
// console.log("b =", b); //50

/* 3.没有变量提升 */
// console.log(a); //undefined
// console.log(b); //报错
// var a = "ABCD";
// let b = "武装直升机";

/* 4.不影响作用域链 */
{
	let a = "AAAA";
	function fun() {
		console.log(a);
	}
}
fun(); //AAAA
