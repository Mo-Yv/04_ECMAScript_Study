/* 
	WeakMap结构与Map结构类似，也是用于生成键值对的集合

	WeakMap与Map的区别有两点:
	1: WeakMap只接受对象（null除外）和 Symbol 值作为键名，不接受其他类型的值作为键名
	2: WeakMap的键名所指向的对象，不计入垃圾回收机制

	WeakMap的设计目的在于，有时我们想在某个对象上面存放一些数据，但是这会形成对于这个对象的引用

	WeakMap 与 Map 在 API 上的区别主要是两个:
	1: 没有遍历操作（即没有keys()、values()和entries()方法），也没有size属性。
		因为没有办法列出所有键名，某个键名是否存在完全不可预测，跟垃圾回收机制是否运行相关。
		这一刻可以取到键名，下一刻垃圾回收机制突然运行了，这个键名就没了，
		为了防止出现不确定性，就统一规定不能取到键名。
	2: 无法清空，即不支持clear方法。
	
	因此，WeakMap只有四个方法可用：get()、set()、has()、delete()。
 */
const wm = new WeakMap();
console.log(wm, typeof wm);
