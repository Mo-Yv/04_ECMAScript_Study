/* 
	WeakSet 结构与 Set 类似，也是不重复的值的集合。
	但是，它与 Set 有两个区别:
	1: WeakSet 的成员只能是对象和 Symbol 值，而不能是其他类型的值
	2: WeakSet 中的对象都是弱引用，
		即垃圾回收机制不考虑 WeakSet 对该对象的引用，
		也就是说，如果其他对象都不再引用该对象，
		那么垃圾回收机制会自动回收该对象所占用的内存，
		不考虑该对象还存在于 WeakSet 之中。
 */
const ws = new WeakSet();

const arr = [0, 1, 2];
ws.add(arr);
console.log(ws, typeof ws);

// const str = "Hello";
// ws.add(str); //报错
// console.log(ws);
