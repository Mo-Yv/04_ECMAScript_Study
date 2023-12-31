/* 
	需求:
	按照先后顺序获取数据:
	用户数据 -> 订单数据 -> 商品数据
 */
const userInfo = {
	name: "张三",
	address: "河南省",
},
ordersInfo = [
	{
		id: 1,
		name: "订单1",
		goods: [
			{
				id: 1,
				name: "商品1",
				price: 100,
			},
			{
				id: 2,
				name: "商品2",
				price: 200,
			},
		],
	},
	{
		id: 2,
		name: "订单2",
		goods: [
			{
				id: 1,
				name: "商品1",
				price: 100,
			},
			{
				id: 3,
				name: "商品3",
				price: 300,
			},
		],
	},
];

// 生成器函数
function userData() {
	setTimeout(() => {
		// 调用next方法,将数据传入
		// 数据会作为第1个yield的返回结果
		iterator.next(userInfo);
	}, 1000);
}

function ordersData() {
	setTimeout(() => {
		const ordersCount = ordersInfo.length;
		// 数据会作为第2个yield的返回结果
		iterator.next(ordersCount);
	}, 1000);
}

function goodsData() {
	setTimeout(() => {
		// 汇总所有订单的所有商品
		let goodsInfoStr = [];
		for (const iterator of ordersInfo) {
			for (const i of iterator.goods) {
				goodsInfoStr.push({
					orderID: iterator.id,
					goodID: i.id,
					goodName: i.name,
					goodPrice: i.price,
				});
			}
		}
		// 数据会作为第3个yield的返回结果
		iterator.next(JSON.stringify(goodsInfoStr));
	}, 1000);
}

function* fun() {
	let user = yield userData();
	// 处理数据
	console.log(`姓名: ${user.name}, 地址: ${user.address}`);
	let order = yield ordersData();
	// 处理数据
	console.log(`订单数量: ${order}`);
	let good = yield goodsData();
	good = JSON.parse(good);
	// 处理数据
	for (const iterator of good) {
		console.log(`
			订单ID: ${iterator.orderID},
			商品ID: ${iterator.goodID},
			商品名称: ${iterator.goodName},
			商品价格: ${iterator.goodPrice}
		`.trim());
	}
}

const iterator = fun();
iterator.next();
