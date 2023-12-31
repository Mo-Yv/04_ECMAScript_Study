/* 
	ES6 的模块自动采用严格模式，不管你有没有在模块头部加上"use strict";。

	严格模式主要有以下限制:
		01. 变量必须声明后再使用
		02. 函数的参数不能有同名属性，否则报错
		03. 不能使用with语句
		04. 不能对只读属性赋值，否则报错
		05. 不能使用前缀 0 表示八进制数，否则报错
		06. 不能删除不可删除的属性，否则报错
		07. 不能删除变量delete prop，会报错，只能删除属性delete global[prop]
		08. eval不会在它的外层作用域引入变量
		09. eval和arguments不能被重新赋值
		10. arguments不会自动反映函数参数的变化
		11. 不能使用arguments.callee
		12. 不能使用arguments.caller
		13. 禁止this指向全局对象
		14. 不能使用fn.caller和fn.arguments获取函数调用的堆栈
		15. 增加了保留字（比如protected、static和interface）
	上面这些限制，模块都必须遵守。由于严格模式是 ES5 引入的，不属于 ES6，所以请参阅相关 ES5 书籍，本书不再详细介绍了。

	其中，尤其需要注意this的限制。
	ES6模块之中，顶层的this指向undefined，即不应该在顶层代码使用this
*/