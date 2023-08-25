/* 
	它的键名所引用的对象都是弱引用，即垃圾回收机制不将该引用考虑在内。
	因此，只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。
	也就是说，一旦不再需要，WeakMap 里面的键名对象和所对应的键值对会自动消失，不用手动删除引用。

	基本上，如果要往对象上添加数据，又不想干扰垃圾回收机制，就可以使用 WeakMap。
	一个典型应用场景是，在网页的 DOM 元素上添加数据，就可以使用WeakMap结构。
	当该 DOM 元素被清除，其所对应的WeakMap记录就会自动被移除
 */
/* 
	此案例中，
	document.querySelector("button")是一个 DOM 节点，每当发生click事件，就更新一下状态
	我们将这个状态作为键值放在 WeakMap 里，对应的键名就是这个节点对象
	一旦这个 DOM 节点删除，该状态就会自动消失，不存在内存泄漏风险
*/
const wm = new WeakMap();

wm.set(document.querySelector("button"), { num: 0 });

document.querySelector("button").onclick = function () {
	const wmGet = wm.get(document.querySelector("button"));
	this.innerHTML = `num = ${(wmGet.num += 1)}`;
};
