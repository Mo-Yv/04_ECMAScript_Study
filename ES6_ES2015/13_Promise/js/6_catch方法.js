// 相当于没有成功回调(第一个参数)的then方法

new Promise((resolve, reject) => {
	setTimeout(() => {
		false ? resolve("成功") : reject("失败");
	}, 1000);
}).catch(err => {
	console.log(err);
}).catch;
