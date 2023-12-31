/* 
	Array.prototype.flat()
	当原数组的成员里面有一个数组时，
	flat 方法可以将子数组的成员取出来，
	并添加在原来的位置，变成一维的数组
	该方法返回一个新数组，不会修改原数组

	flat 方法默认只会“拉平”一层，
	如果想要“拉平”多层的嵌套数组，
	可以传递一个整数作为 flat 方法的参数，
	表示想要拉平的层数，默认值为 1

	Array.prototype.flatMap()
	flatMap()方法对原数组的每个成员执行一个函数,
	相当于执行Array.prototype.map()，
	然后对返回值组成的数组执行flat()方法。
	该方法返回一个新数组，不改变原数组
	flatMap()只能展开一层数组

	flatMap()方法的参数是一个遍历函数，
	该函数可以接受三个参数，
	分别是当前数组成员、当前数组成员的位置（从零开始）、原数组
 */
let arr = ["a", 0, [{}, 1]];
// arr = [[{}, 1], "a", 0];

let newArr = arr.flat();
console.log(newArr); //['a', 0, {}, 1]

arr = [[[3, 4], 1], "a", 0];

// 拉平2层
newArr = arr.flat(2);
console.log(newArr); //[3, 4, 1, 'a', 0]

// 即使参数大于数组层数也不会报错
newArr = arr.flat(5);
console.log(newArr);

// 如果原数组有空位，flat()方法会忽略空位
arr = [0, , , , , [1, 2, 3]];
console.log("length =", arr.length); //6

newArr = arr.flat();
console.log(newArr); //[0, 1, 2, 3]

// 如果不管有多少层嵌套，都要转成一维数组，可以用Infinity关键字作为参数
arr = [1, [2, [3, [4, [5, [6]]]]]];

newArr = arr.flat(Infinity);
console.log(newArr); //[1, 2, 3, 4, 5, 6]

/* flatMap方法 */
arr = [2, 3, 4];

// 相当于[[2, 4], [3, 6], [4, 8]].flat()
newArr = arr.flatMap(item => [item, item * 2]);
console.log(newArr); //[2, 4, 3, 6, 4, 8]

/* 
	flatMap()只能展开一层数组 
	遍历函数返回的是一个双层的数组，
	但是默认只能展开一层，
	因此flatMap()返回的还是一个嵌套数组
*/
// 相当于[[[2]], [[3]], [[4]]].flat()
newArr = arr.flatMap(item => [[item * 2]]);
console.log(newArr); //[[2], [3], [4]]
