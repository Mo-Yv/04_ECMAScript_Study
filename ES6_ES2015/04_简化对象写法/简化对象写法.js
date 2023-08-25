/* 
	ES6允许在大括号里,直接写入变量和函数,作为对象的属性和方法
	更加简洁 
*/

let name = "张三";
const isMale = true;
const fun = function () {
	console.log(this);
};

function fun1() {
	console.log(`这是fun1`);
}

// 简写
const info = {
	name,
	age: 50,
	isMale,
	fun,
	fun1,
};

// 完整写法
const obj = {
	name: name,
	age: 50,
	isMale: isMale,
	fun: fun,
	fun1,
};

console.log(info);
console.log(obj);

fun(); //window对象
info.fun(); //info对象

// isMale = false;
// console.log(isMale); //报错
info.isMale = false;
console.log(isMale); //true
console.log(info.isMale); //false
