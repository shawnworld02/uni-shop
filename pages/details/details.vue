<template>
	<view class="details">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item, index) in swiperList" :key="index">
				<view class="swiper-item"><image class="swiper-img" :src="item.imgUrl" mode=""></image></view>
			</swiper-item>
		</swiper>
		<!-- 价格和名城 -->
		<view class="detail-goods">
			<view class="goods-pprice">¥399.00</view>
			<view class="goods-oprice">¥599.00</view>
			<view class="goods-name">这是非常酷炫牛逼的衬衫！！！！</view>
		</view>
		<!-- 商品详情图 -->
		<view>
			<view><image class="details-img" src="../../static/img/3df7e2cb-2ffb-4880-aebb-cade9074aacc.jpeg" mode=""></image></view>
			<view><image class="details-img" src="../../static/img/3df7e2cb-2ffb-4880-aebb-cade9074aacc.jpeg" mode=""></image></view>
			<view><image class="details-img" src="../../static/img/3df7e2cb-2ffb-4880-aebb-cade9074aacc.jpeg" mode=""></image></view>
			<view><image class="details-img" src="../../static/img/3df7e2cb-2ffb-4880-aebb-cade9074aacc.jpeg" mode=""></image></view>
			<view><image class="details-img" src="../../static/img/3df7e2cb-2ffb-4880-aebb-cade9074aacc.jpeg" mode=""></image></view>
		</view>
		<!-- 商品列表 -->
		<Card cardTitle="看 了 又 看"></Card>
		<CommodityList :dataList="dataList"></CommodityList>
		<!-- 底部 -->
		<view class="detail-footer">
			<view class="iconfont icon-xiaoxizhongxin"></view>
			<view class="iconfont icon-gouwuchekong"></view>
			<view class="add-shopping-cart">加入购物车</view>
			<view class="purchase">立即购买</view>
		</view>
	</view>
</template>

<script>
import Card from '@/components/common/Card.vue';
import CommodityList from '@/components/common/CommodityList.vue';
export default {
	data() {
		return {
			swiperList: [
				{ imgUrl: '../../static/img/0f2b8182-0c81-49bf-b345-aa86b1efbac2_470x470_90.jpeg' },
				{ imgUrl: '../../static/img/0f2b8182-0c81-49bf-b345-aa86b1efbac2_470x470_90.jpeg' },
				{ imgUrl: '../../static/img/0f2b8182-0c81-49bf-b345-aa86b1efbac2_470x470_90.jpeg' }
			],
			dataList: [
				{
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
		};
	},
	components: {
		Card,
		CommodityList
	},
	methods: {}
};
</script>

<style scoped>
swiper {
	width: 100%;
	height: 700rpx;
}
.swiper-img {
	width: 100%;
	height: 700rpx;
}
.detail-goods {
	text-align: center;
	font-weight: bold;
	font-size: 36rpx;
	padding: 10rpx 0;
}
.details-img {
	width: 100%;
}
.detail-footer{
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 90rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #FFFFFF;
}
.detail-footer .iconfont{
	width: 60rpx;
	height: 60rpx;
	border-radius: 100%;
	background-color: black;
	color: white;
	text-align: center;
	margin: 0 10rpx;
}
.add-shopping-cart{
	margin: 0 40rpx;
	padding: 6rpx 30rpx;
	background-color: black;
	color: white;
	border-radius: 40rpx;
}
.purchase{
	margin: 0 40rpx;
	padding: 6rpx 30rpx;
	background-color: #49BDFD;
	color: white;
	border-radius: 40rpx;
}
.details{
	padding-bottom: 90rpx;
}
</style>
