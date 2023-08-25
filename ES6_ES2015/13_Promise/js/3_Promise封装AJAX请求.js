// 创建一个Promise对象
const p = new Promise((resolve, reject) => {
	// 创建XML对象
	const xhr = new XMLHttpRequest();
	// 初始化
	xhr.open("POST", "https://example.org/api/dogs"); //https://api.apiopen.top/getJoke
	// 发送请求
	xhr.send();
	// 监听状态改变
	xhr.onreadystatechange = function () {
		// 判断readyState
		if (xhr.readyState === 4) {
			// 判断status
			if (xhr.status >= 200 && xhr.status < 300) {
				resolve(xhr.response);
			} else {
				reject("请求失败,xhr.status = " + xhr.status);
			}
		}
	};
}).then(
	res => {
		console.log(res);
	},
	err => {
		console.log(err);
	}
);
