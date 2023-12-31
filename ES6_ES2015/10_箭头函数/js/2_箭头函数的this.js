/* 	
	箭头函数的this是静态的,
	始终指向函数声明时所在作用域下的this的值
	call和apply方法也不能改变this指向

	function声明的函数的this是谁调用就指向谁
	call和apply方法可以改变this指向
*/
const name = "张三";

function fun1(str) {
	console.warn(str);
	console.log(this.name);
	console.log(this);
}

const fun2 = str => {
	console.warn(str);
	console.log(this.name);
	console.log(this);
};

// 在全局调用
fun1("function声明的函数,在全局调用"); //"张三" window对象
fun2("箭头函数,在全局调用"); //"张三" window对象

const obj = {
	name: "李四",
	fun1,
	fun2,
	fun3: str => {
		console.warn(str);
		console.log(this.name);
		console.log(this);
	},
	fun4: function () {
		return str => {
			console.warn(str);
			console.log(this.name);
			console.log(this);
		};
	},
	fun5: function () {
		return function (str) {
			console.warn(str);
			console.log(this.name);
			console.log(this);
		};
	},
};

// 作为对象的函数调用
obj.fun1("对象中的function声明的函数"); //"李四" obj对象
obj.fun2("在全局声明,作为对象的函数调用"); //"张三" window对象
obj.fun3("在对象中声明的箭头函数"); //"张三" window对象

// 作为对象的函数调用,并尝试使用call和apply方法改变this指向
obj.fun2.call(obj, "在全局声明,作为对象的函数调用,尝试使用call方法改变this指向"); //"张三" window对象
obj.fun3.apply(obj, ["在对象中声明的箭头函数,尝试使用apply方法改变this指向"]); //"张三" window对象

// 在全局调用,并尝试使用call和apply方法改变this指向
fun1.call(obj, "function声明的函数,在全局调用,尝试使用call方法改变this指向"); //"李四" obj对象
fun2.apply(obj, ["箭头函数,在全局调用,尝试使用apply方法改变this指向"]); //"张三" window对象

obj.fun4()("对象的function函数返回的箭头函数"); //"李四" obj对象
obj.fun5()("对象的function函数返回的function函数"); //"张三" window对象

obj.fun4().call(window, "对象的function函数返回的箭头函数,尝试使用call方法改变this指向"); //"李四" obj对象
obj.fun5().apply(obj, ["对象的function函数返回的function函数,尝试使用apply方法改变this指向"]); //"李四" obj对象

for (let i = 0; i < 3; i++) {
	const div = document.createElement("div");
	document.body.appendChild(div);
}

document.querySelectorAll("div").forEach(div => {
	div.onclick = () => {
		console.log("arrowFun", this); //window对象
	};
	div.onmousedown = function () {
		console.log("function", this); //点击的div
	};
});
