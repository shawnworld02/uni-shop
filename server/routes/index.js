var express = require('express');
var router = express.Router();
var connection = require('../db/sql.js');
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});

// 首页推荐的数据
router.get('/api/index_list/data', (req, res, next) => {
	res.send({
		"code": 0,
		"data": {
			topBar: [{
				id: 1,
				name: '推荐'
			}, {
				id: 2,
				name: '运动户外'
			}, {
				id: 3,
				name: '服饰内衣'
			}, {
				id: 4,
				name: '鞋靴箱包'
			}, {
				id: 5,
				name: '美妆个护'
			}, {
				id: 6,
				name: '家居数码'
			}, {
				id: 7,
				name: '食品母婴'
			}],
			data: [{
					type: "swiperList",
					data: [{
							imgUrl: '../../static/img/首页头部图片1.jpeg'
						},
						{
							imgUrl: '../../static/img/首页头部图片2.jpeg'
						},
						{
							imgUrl: '../../static/img/首页头部图片3.jpeg'
						},
					]
				},
				{
					type: "recommendList",
					data: [{
						bigUrl: "../../static/ias_346751fea8f8bb556294ffbcdfd54342_1135x545_85.jpeg",
						data: [{
								imgUrl: "../../static/img/0f2b8182-0c81-49bf-b345-aa86b1efbac2_470x470_90.jpeg"
							},
							{
								imgUrl: "../../static/img/3df7e2cb-2ffb-4880-aebb-cade9074aacc.jpeg"
							},
							{
								imgUrl: "../../static/img/ee09e3e4-555d-44cb-b49c-9599ade11e99_470x470_90.jpeg"
							},
						]
					}]
				},
				{
					type: "CommodityList",
					data: [{
							id: 1,
							imgUrl: '../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
							name: '风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
							pprice: '299',
							oprice: '59',
							discount: '4.9'
						},
						{
							id: 2,
							imgUrl: '../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
							name: '风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
							pprice: '299',
							oprice: '59',
							discount: '4.9'
						},
						{
							id: 3,
							imgUrl: '../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
							name: '风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
							pprice: '299',
							oprice: '59',
							discount: '4.9'
						},
						{
							id: 4,
							imgUrl: '../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
							name: '风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
							pprice: '299',
							oprice: '59',
							discount: '4.9'
						}
					]
				}
			]
		},
	})
})
//运动户外第一次触底的数据
router.get("/api/index_list/2/data/2", (req, res, next) => {
	res.json({
		code: "0",
		data: [{
			type: "CommodityList",
			data: [{
					id: 1,
					imgUrl: '../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
					name: '风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
					pprice: '59',
					oprice: '299',
					discount: '4.9'
				},
				{
					id: 2,
					imgUrl: '../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
					name: '风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
					pprice: '59',
					oprice: '299',
					discount: '4.9'
				},
				{
					id: 3,
					imgUrl: '../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
					name: '风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
					pprice: '59',
					oprice: '299',
					discount: '4.9'
				},
				{
					id: 4,
					imgUrl: '../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
					name: '风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
					pprice: '59',
					oprice: '299',
					discount: '4.9'
				}
			]
		}]
	})
})
//运动户外第一次加载的数据
router.get("/api/index_list/2/data/1", (req, res, next) => {
	res.json({
		code: "0",
		data: [{
				type: "bannerList",
				imgUrl: "../../static/img/banner.jpeg"
			},
			{
				type: "iconsList",
				data: [{
						imgUrl: "../../static/img/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg",
						name: "服饰内衣"
					},
					{
						imgUrl: "../../static/img/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg",
						name: "服饰内衣"
					},
					{
						imgUrl: "../../static/img/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg",
						name: "服饰内衣"
					},
					{
						imgUrl: "../../static/img/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg",
						name: "服饰内衣"
					},
					{
						imgUrl: "../../static/img/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg",
						name: "服饰内衣"
					},
					{
						imgUrl: "../../static/img/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg",
						name: "服饰内衣"
					},
					{
						imgUrl: "../../static/img/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg",
						name: "服饰内衣"
					},
					{
						imgUrl: "../../static/img/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg",
						name: "服饰内衣"
					}
				]
			},
			{
				type: "hotList",
				data: [{
						id: 1,
						imgUrl: '../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
						name: '风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
						pprice: '299',
						oprice: '59',
						discount: '4.9'
					},
					{
						id: 2,
						imgUrl: '../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
						name: '风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
						pprice: '299',
						oprice: '59',
						discount: '4.9'
					},
					{
						id: 3,
						imgUrl: '../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
						name: '风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
						pprice: '299',
						oprice: '59',
						discount: '4.9'
					},
					{
						id: 4,
						imgUrl: '../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
						name: '风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
						pprice: '299',
						oprice: '59',
						discount: '4.9'
					}
				]
			},
			{
				type: "shopList",
				data: [{
					bigUrl: "../../static/img/首页头部图片1.jpeg",
					data: [{
							id: 1,
							imgUrl: '../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
							name: '风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
							pprice: '299',
							oprice: '59',
							discount: '4.9'
						},
						{
							id: 2,
							imgUrl: '../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
							name: '风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
							pprice: '299',
							oprice: '59',
							discount: '4.9'
						},
						{
							id: 3,
							imgUrl: '../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
							name: '风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
							pprice: '299',
							oprice: '59',
							discount: '4.9'
						},
						{
							id: 4,
							imgUrl: '../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
							name: '风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
							pprice: '299',
							oprice: '59',
							discount: '4.9'
						}
					]
				}]
			}
		]
	})
})
//服饰内衣第一次加载的数据
router.get("/api/index_list/3/data/1", (req, res, next) => {
	res.json({
		code: "0",
		data: [{
				type: "bannerList",
				imgUrl: "../../static/img/banner.jpeg"
			},
			{
				type: "iconsList",
				data: [{
						imgUrl: "../../static/img/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg",
						name: "服饰内衣"
					},
					{
						imgUrl: "../../static/img/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg",
						name: "服饰内衣"
					},
					{
						imgUrl: "../../static/img/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg",
						name: "服饰内衣"
					},
					{
						imgUrl: "../../static/img/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg",
						name: "服饰内衣"
					},
					{
						imgUrl: "../../static/img/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg",
						name: "服饰内衣"
					},
					{
						imgUrl: "../../static/img/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg",
						name: "服饰内衣"
					},
					{
						imgUrl: "../../static/img/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg",
						name: "服饰内衣"
					},
					{
						imgUrl: "../../static/img/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg",
						name: "服饰内衣"
					}
				]
			},
			{
				type: "hotList",
				data: [{
						id: 1,
						imgUrl: '../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
						name: '风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
						pprice: '299',
						oprice: '59',
						discount: '4.9'
					},
					{
						id: 2,
						imgUrl: '../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
						name: '风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
						pprice: '299',
						oprice: '59',
						discount: '4.9'
					},
					{
						id: 3,
						imgUrl: '../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
						name: '风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
						pprice: '299',
						oprice: '59',
						discount: '4.9'
					},
					{
						id: 4,
						imgUrl: '../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
						name: '风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
						pprice: '299',
						oprice: '59',
						discount: '4.9'
					}
				]
			},
			{
				type: "shopList",
				data: [{
					bigUrl: "../../static/img/首页头部图片1.jpeg",
					data: [{
							id: 1,
							imgUrl: '../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
							name: '风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
							pprice: '299',
							oprice: '59',
							discount: '4.9'
						},
						{
							id: 2,
							imgUrl: '../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
							name: '风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
							pprice: '299',
							oprice: '59',
							discount: '4.9'
						},
						{
							id: 3,
							imgUrl: '../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
							name: '风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
							pprice: '299',
							oprice: '59',
							discount: '4.9'
						},
						{
							id: 4,
							imgUrl: '../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
							name: '风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
							pprice: '299',
							oprice: '59',
							discount: '4.9'
						}
					]
				}]
			}
		]
	})
})

router.get('/api/goods/list', (req, res, next) => {
	res.json({
		code: 0,
		data: [{
				id: 1,
				name: "家居家纺",
				data: [{
						name: "家纺",
						list: [{
								id: 1,
								name: "毛巾/浴巾",
								imgUrl: 'file:///Users/shawnliang/Desktop/hb-project/app/static/img/首页头部图片1.jpeg'
							},
							{
								id: 2,
								name: "枕头",
								imgUrl: 'file:///Users/shawnliang/Desktop/hb-project/app/static/img/首页头部图片1.jpeg'
							}
						]
					},
					{
						name: "生活用品",
						list: [{
								id: 1,
								name: "毛巾/浴巾",
								imgUrl: 'file:///Users/shawnliang/Desktop/hb-project/app/static/img/首页头部图片1.jpeg'
							},
							{
								id: 2,
								name: "枕头",
								imgUrl: 'file:///Users/shawnliang/Desktop/hb-project/app/static/img/首页头部图片1.jpeg'
							},
							{
								id: 3,
								name: "浴室用品",
								imgUrl: 'file:///Users/shawnliang/Desktop/hb-project/app/static/img/首页头部图片1.jpeg'
							}
						]
					},
				]
			},
			{
				id: 1,
				name: "家居家纺",
				data: [{
						name: "家纺",
						list: [{
								id: 1,
								name: "毛巾/浴巾",
								imgUrl: 'file:///Users/shawnliang/Desktop/hb-project/app/static/img/首页头部图片1.jpeg'
							},
							{
								id: 2,
								name: "枕头",
								imgUrl: 'file:///Users/shawnliang/Desktop/hb-project/app/static/img/首页头部图片1.jpeg'
							}
						]
					},
					{
						name: "生活用品",
						list: [{
								id: 1,
								name: "毛巾/浴巾",
								imgUrl: 'file:///Users/shawnliang/Desktop/hb-project/app/static/img/首页头部图片1.jpeg'
							},
							{
								id: 2,
								name: "枕头",
								imgUrl: 'file:///Users/shawnliang/Desktop/hb-project/app/static/img/首页头部图片1.jpeg'
							},
							{
								id: 3,
								name: "浴室用品",
								imgUrl: 'file:///Users/shawnliang/Desktop/hb-project/app/static/img/首页头部图片1.jpeg'
							}
						]
					},
				]
			}
		]
	})
})

router.get("/api/goods/search", (req, res, next) => {
	//获取对象的key
	let [goodsName, oderName] = Object.keys(req.query);
	//name参数的值
	let name = req.query.name;
	//oderName的key值
	let order = req.query[oderName];
	connection.query(`select * from goods_search where name like '%${name}%' order by ${oderName} ${order}`,
		function(error,
			results, fields) {
			if (error) throw error;
			res.send({
				code: "0",
				data: results
			})
		})
})
module.exports = router;
