<template>
	<view>
		<view class="shop-title f-color">
			<view class="shop-item" v-for="(item, index) in shopList.data" :key="index" @tap="changTab(index)">
				<view :class="shopList.currentIndex === index ? 'f-active-color' : ''">{{ item.name }}</view>
				<view class="arrow-group">
					<view class="iconfont icon-shangjiantou up" :class="item.status === 1 ? 'f-active-color' : ''"></view>
					<view class="iconfont icon-shanglajiantou down" :class="item.status === 2 ? 'f-active-color' : ''"></view>
				</view>
			</view>
		</view>
		<Lines />
		<CommodityList :dataList="dataList"></CommodityList>
	</view>
</template>

<script>
import Lines from '@/components/common/Lines.vue';
import CommodityList from '@/components/common/Commodity.vue';
import $http from '@/common/api/request.js';
export default {
	props: {
		keyword: String
	},
	components: {
		Lines,
		CommodityList
	},
	data() {
		return {
			shopList: {
				currentIndex: 0,
				data: [{ name: '价格', status: 1 }, { name: '折扣', status: 0 }, { name: '品牌', status: 0 }]
			},
			dataList: []
		};
	},
	methods: {
		changTab(index) {
			//原来点击的title索引值
			let idx = this.shopList.currentIndex;
			//根据索引值取出具体哪一个title对象
			let item = this.shopList.data[idx];
			//如果点击的title和点过的title是同一个，切换上下箭头的状态
			if (idx === index) {
				return (item.status = item.status === 1 ? 2 : 1);
			}
			//点击的是新的title
			let newItem = this.shopList.data[index];
			//将点击过的title恢复状态
			item.status = 0;
			//将点击过的title记录下来
			this.shopList.currentIndex = index;
			//新点击的title上箭头激活
			newItem.status = 1;
		},
		//请求搜索数据的方法
		getData() {
			$http
				.request({
					url: '/goods/search',
					data:{
						name:this.keyword,
						pprice:"desc"
					}
				})
				.then((res) => {
					this.dataList = res
				})
				.catch(() => {
					uni.showToast({
						title: '请求失败',
						icon: 'none'
					});
				});
		}
	},
	mounted() {
		this.getData();
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
