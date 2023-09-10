/* 
	deleteProperty方法用于拦截delete操作，
	如果这个方法抛出错误或者返回false，
	当前属性就无法被delete命令删除

	注意，目标对象自身的不可配置（configurable）的属性，
	不能被deleteProperty方法删除，否则报错。
*/
let handler = {
	deleteProperty(target, key) {
		invariant(key, "delete");
		delete target[key];
		return true;
	},
};

function invariant(key, action) {
	if (key[0] === "_") {
		throw new Error(`Invalid attempt to ${action} private "${key}" property`);
	}
}

let target = { _prop: "foo" };
let proxy = new Proxy(target, handler);

// delete proxy._prop; //报错