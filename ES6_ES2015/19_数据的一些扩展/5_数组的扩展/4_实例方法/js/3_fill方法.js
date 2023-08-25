/* 
	fill方法使用给定值，填充一个数组
	会修改原数组
 */
let arr = [0, 1, 2, 3, 4];

arr.fill("A");
console.log(arr); //['A', 'A', 'A', 'A', 'A']

arr.fill("b");
console.log(arr); //['b', 'b', 'b', 'b', 'b']

arr = new Array(5).fill(1);
console.log(arr); //[1, 1, 1, 1, 1]

/* 
	fill方法还可以接受第二个和第三个参数，
	用于指定填充的起始位置和结束位置 
*/
// 从1号位开始,向原数组填充2，到3号位之前结束
arr = arr.fill(2, 1, 3);
console.log(arr);

/* 
	注意，
	如果填充的类型为对象，
	那么被赋值的是同一个内存地址的对象，
	而不是深拷贝对象 
*/
arr = new Array(3).fill({ num: 3 });
console.log(arr);

arr[0].num = 999;
console.log(arr);

arr[0] = [];
arr[0].push("CC");
console.log(arr);

arr = new Array(3).fill([]);
console.log(arr);

arr[0].push("d");
console.log(arr);
