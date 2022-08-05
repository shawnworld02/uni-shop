<template>
	<view>
		<view class="shop-title f-color">
			<view class="shop-item">
				<view>价格</view>
				<view class="arrow-group">
					<view class="iconfont icon-shangjiantou up"></view>
					<view class="iconfont icon-shanglajiantou down"></view>
				</view>
			</view>
			<view class="shop-item">
				<view>折扣</view>
				<view class="arrow-group">
					<view class="iconfont icon-shangjiantou up"></view>
					<view class="iconfont icon-shanglajiantou down"></view>
				</view>
			</view>
			<view class="shop-item">
				<view>品牌</view>
				<view class="arrow-group">
					<view class="iconfont icon-shangjiantou up"></view>
					<view class="iconfont icon-shanglajiantou down"></view>
				</view>
			</view>
		</view>
		<Lines></Lines>
		<CommodityList :dataList="dataList"></CommodityList>
	</view>
</template>

<script>
import Lines from '@/components/common/Lines.vue';
import CommodityList from '@/components/common/Commodity.vue';
export default {
	components: {
		Lines,
		CommodityList
	},
	data() {
		return {
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
	}
};
</script>

<style scoped>
.shop-title {
	display: flex;
	flex-direction: row;
	justify-content: center;
}
.shop-item {
	display: flex;
	flex: 1;
	height: 80rpx;
	justify-content: center;
	align-items: center;
}
.arrow-group {
	display: flex;
	flex-direction: column;
	position: relative;
	margin-left: 10rpx;
}
.iconfont {
	width: 16rpx;
	height: 8rpx;
	position: absolute;
	left: 0;
}
.up {
	top: -34rpx;
}
.down {
	top: -16rpx;
}
</style>
