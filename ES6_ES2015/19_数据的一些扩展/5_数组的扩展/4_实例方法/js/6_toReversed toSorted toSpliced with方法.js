/* 
	很多数组的传统方法会改变原数组，
	比如push()、pop()、shift()、unshift()等等。
	数组只要调用了这些方法，它的值就变了。
	现在有一个"提案"，允许对数组进行操作时，不改变原数组
	而返回一个原数组的拷贝

	这样的方法一共有四个:
		Array.prototype.toReversed() -> Array
		Array.prototype.toSorted(compareFn) -> Array
		Array.prototype.toSpliced(start, deleteCount, ...items) -> Array
		Array.prototype.with(index, value) -> Array

	它们分别对应数组的原有方法:
		toReversed() 对应 reverse()
			用来颠倒数组成员的位置
		toSorted() 对应 sort()
			用来对数组成员排序
		toSpliced() 对应 splice()
			用来在指定位置，删除指定数量的成员，并插入新成员
		with(index, value) 对应 splice(index, 1, value)
			用来将指定位置的成员替换为新的值

	上面是这四个新方法对应的原有方法，含义和用法完全一样，
	唯一不同的是不会改变原数组，而是返回原数组操作后的拷贝
 */
const arr = [2, 0, 4, 3, 1];
let newArr = [];

/* toReversed */
console.group("toReversed");

newArr = arr.toReversed();
console.log("newArr =>", newArr);
console.log("arr =>", arr);

console.groupEnd();

/* toSorted */
console.group("toSorted");

newArr = arr.toSorted();
console.log("newArr =>", newArr);
console.log("arr =>", arr);

console.groupEnd();

/* toSpliced */
console.group("toSpliced");

newArr = arr.toSpliced(1, 3, "z", "m", "y");
console.log("newArr =>", newArr);
console.log("arr =>", arr);

console.groupEnd();

/* with */
console.group("with");

newArr = arr.with(1, "zmy");
console.log("newArr =>", newArr);
console.log("arr =>", arr);

console.groupEnd();
