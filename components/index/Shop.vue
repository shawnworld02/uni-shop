<template>
	<view class="shop">
		<view class="shop-item">
			<view class="shop-big"><image class="shop-big" src="../../static/img/首页头部图片1.jpeg"></image></view>
			<scroll-view scroll-x="true" class="scroll-content">
				<view class="scroll-item"><Commodity :dataList="shopList" wrap="no-wrap" itemWidth="200rpx" bigH="200rpx" nameSize="10rpx"></Commodity></view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import Commodity from '../common/Commodity.vue';
export default {
	data() {
		return {
			shopList: [
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
		Commodity
	}
};
</script>

<style scoped>
.shop-big {
	width: 100%;
	height: 350rpx;
}
.scroll-content {
	width: 100%;
	/* 不允许换行 */
	white-space: nowrap;
}
.scroll-item {
	display: inline-block;
	width: 300rpx;
	height: 500rpx;
}
</style>
