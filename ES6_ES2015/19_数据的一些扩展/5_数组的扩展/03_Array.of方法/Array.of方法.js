/* 
	Array.of()方法用于将一组值，转换为数组

	这个方法的主要目的，是弥补数组构造函数Array()的不足。
	因为参数个数的不同，会导致Array()的行为有差异

	Array.of()基本上可以用来替代Array()或new Array()，
	并且不存在由于参数不同而导致的重载。
	它的行为非常统一
 */
let arr = Array.of("", 0, [], {});
console.log(arr);

console.group("Array方法");
// Array会因参数个数不同,返回不同的结果
// 只有当参数个数不少于 2 个时，Array()才会返回由参数组成的新数组
arr = Array();
console.log(arr); //[]

arr = Array(3);
console.log(arr); //返回一个length=3,内容为空的数组

arr = Array(0, 1, 2);
console.log(arr); //[0, 1, 2]

arr = Array(undefined);
console.log(arr); //[undefined]
console.groupEnd();

arr = Array.of();
console.log(arr); //[]

arr = Array.of(3);
console.log(arr); //[3]

arr = Array.of(undefined);
console.log(arr); //[undefined]
