/* 1.数组合并 */
// const arr1 = [0, 1, 2, 3, 4, 5];
// const arr2 = ["a", "b", "c"];
// const newArr = [...arr1, ...arr2];
// console.log(newArr);

/* 2.数组克隆 */
const arr1 = [0, 1, 2, 3, 4, 5];
const arr2 = arr1;
const arr3 = [...arr1];
console.log(arr2 === arr1, arr2); //true
console.log(arr3 === arr1, arr3); //false

arr1.splice(0, 3);
console.log(arr1); //[3, 4, 5]
console.log(arr2); //[3, 4, 5]
console.log(arr3); //[0, 1, 2, 3, 4, 5]

/* 3.将伪数组转换为真数组 */
// 转换NodeList
const div = document.querySelectorAll("div");
console.log(div); //NodeList
const divArr = [...div];
console.log(divArr); //Array

// 转换arguments
function fun1() {
	console.log(arguments);
	const argus = [...arguments]; //Arguments
	console.log(argus); //Array
}
fun1(0, 1, 2, 3, 4, 5);
