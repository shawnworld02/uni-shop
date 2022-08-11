<template>
	<view>
		<Lines></Lines>
		<view class="list">
			<!-- 左侧移动 -->
			<scroll-view scroll-y="true" class="list-left">
				<view v-for="i in 50" class="left-item">
					<view class="left-name">{{ i }}</view>
				</view>
			</scroll-view>

			<!-- 右侧滑动 -->
			<scroll-view scroll-y="true" class="list-right">
				<view class="right-block">
					<view class="list-title">家纺</view>
					<view class="right-content">
						<view class="right-item">
							<image class="right-img" src="../../static/img/鞋.jpeg" mode=""></image>
							<view clas="right-name">毛巾</view>
						</view>
						<view class="right-item">
							<image class="right-img" src="../../static/img/鞋.jpeg" mode=""></image>
							<view clas="right-name">毛巾</view>
						</view>
						<view class="right-item">
							<image class="right-img" src="../../static/img/鞋.jpeg" mode=""></image>
							<view clas="right-name">毛巾</view>
						</view>
						<view class="right-item">
							<image class="right-img" src="../../static/img/鞋.jpeg" mode=""></image>
							<view clas="right-name">毛巾</view>
						</view>
					</view>
				</view>
				<view class="right-block">
					<view class="list-title">家纺</view>
					<view class="right-content">
						<view class="right-item">
							<image class="right-img" src="../../static/img/鞋.jpeg" mode=""></image>
							<view clas="right-name">毛巾</view>
						</view>
					</view>
				</view>
				<view class="right-block">
					<view class="list-title">家纺</view>
					<view class="right-content">
						<view class="right-item">
							<image class="right-img" src="../../static/img/鞋.jpeg" mode=""></image>
							<view clas="right-name">毛巾</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import Lines from '@/components/common/Lines.vue';
export default {
	components: {
		Lines
	},
	data() {
		return {};
	},
	methods: {}
};
</script>

<style lang="scss">
.list {
	display: flex;
}
.list-left {
	width: 200rpx;
}
.list-right {
	flex: 1;
	padding-left: 30rpx;
}
.left-item {
	border-bottom: 2rpx solid #ffffff;
	font-size: 28rpx;
	font-weight: bold;
	background-color: #f7f7f7;
}
.left-name {
	padding: 30rpx 6rpx;
	text-align: center;
}
.left-name-active {
	border-left: 10rpx solid #49bdfb;
	background-color: #ffffff;
}

.list-title{
	font-weight: bold;
	padding: 30rpx 0;
}
.right-content{
	display: flex;
	flex-wrap: wrap;
}

.right-item{
	width: 150rpx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10rpx;
}

.right-name{
	padding: 16rpx 0;
}

.right-img{
	width: 150rpx;
	height: 150rpx;
}
</style>
