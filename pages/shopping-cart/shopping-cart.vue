<template>
	<view class="shop-cart">
		<!-- 自定义导航栏 -->
		<uni-nav-bar title="购物车" :right-text="isNavBar ? '完成' : '编辑'" fixed="true" status-bar="true" @clickRight="isNavBar = !isNavBar"></uni-nav-bar>
		<!-- 商品内容 -->
		<view class="shop-list">
			<view class="shop-item" v-for="(item, index) in list" :key="item.id">
				<label class="radio">
					<radio value="" color="#FF3333" />
					<text></text>
				</label>
				<image class="shop-image" :src="item.imgUrl" mode="" />
				<view class="shop-text">
					<view class="shop-name">{{ item.name }}</view>
					<view class="shop-color f-color">颜色分类:{{ item.color }}</view>
					<view class="shop-price">
						<view>¥{{ item.pprice }}</view>
						<view>x{{ item.num }}</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 底部 -->
		<view class="shop-footer">
			<label class="radio foot-radio">
				<radio value="" color="#FF3333" />
				<text>全选</text>
			</label>
			<view class="foor-total">
				<view class="foot-count">
					合计：
					<view class="f-active-color">¥0</view>
				</view>
				<view class="foot-num">结算（0）</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniNavBar from '@/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue';
export default {
	data() {
		return {
			isNavBar: false,
			list: [
				{
					checked: false,
					id: 1,
					color: '纯灰色',
					name: '非常牛逼无敌宇宙天下第一的衬衫',
					imgUrl: '../../static/img/ee09e3e4-555d-44cb-b49c-9599ade11e99_470x470_90.jpeg',
					pprice: '27',
					num: 1
				},
				{
					checked: false,
					id: 2,
					color: '纯灰色',
					name: '非常牛逼无敌宇宙天下第一的衬衫',
					imgUrl: '../../static/img/ee09e3e4-555d-44cb-b49c-9599ade11e99_470x470_90.jpeg',
					pprice: '27',
					num: 1
				}
			]
		};
	},
	methods: {},
	components: {
		uniNavBar
	}
};
</script>

<style scoped>
.shop-item {
	display: flex;
	padding: 20rpx;
	align-items: center;
	background-color: #f7f7f7;
	margin-bottom: 10rpx;
}
.shop-image {
	width: 200rpx;
	height: 200rpx;
}
.shop-color {
	font-size: 24rpx;
}
.shop-price {
	display: flex;
	justify-content: space-between;
}
.shop-text {
	flex: 1;
	padding-left: 20rpx;
}
.shop-footer {
	border-top: 2rpx solid #f7f7f7;
	background-color: #ffffff;
	display: flex;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100rpx;
	position: fixed;
	justify-content: space-between;
	align-items: center;
}
.foot-radio {
	padding-left: 20rpx;
}
.foor-total {
	display: flex;
}
.foot-count {
	line-height: 100rpx;
	padding: 0 20rpx;
	font-size: 32rpx;
	display: flex;
	align-items: center;
}
.foot-num {
	background-color: #49bdfb;
	color: #ffffff;
	padding: 0 60rpx;
	line-height: 100rpx;
}
</style>
