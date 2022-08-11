<template>
	<view>
		<Lines></Lines>
		<view class="list">
			<!-- 左侧移动 -->
			<scroll-view scroll-y="true" class="list-left" :style="'height:' + clientHeight + 'px;'">
				<view v-for="i in 50" class="left-item" @tap="clickLeft(i)">
					<view class="left-name" :class="activeIndex === i ? 'left-name-active' : ''">{{ i }}</view>
				</view>
			</scroll-view>

			<!-- 右侧滑动 -->
			<scroll-view scroll-y="true" class="list-right" :style="'height:' + clientHeight + 'px;'">
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
		return {
			clientHeight: 0,
			activeIndex: 1
		};
	},
	//获取可视高度
	onReady() {
		uni.getSystemInfo({
			success: res => {
				this.clientHeight = res.windowHeight - this.getContentBlockHeight();
			}
		});
	},
	methods: {
		//获取可视区域高度[兼容]
		getContentBlockHeight() {
			const res = uni.getSystemInfoSync();
			const system = res.platform;
			if (system === 'ios') {
				return 44 + res.statusBarHeight;
			} else if (system === 'android') {
				return 48 + res.statusBarHeight;
			} else {
				return 0;
			}
		},
		//点击左边的tab
		clickLeft(index) {
			this.activeIndex = index;
		}
	}
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

.list-title {
	font-weight: bold;
	padding: 30rpx 0;
}
.right-content {
	display: flex;
	flex-wrap: wrap;
}

.right-item {
	width: 150rpx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10rpx;
}

.right-name {
	padding: 16rpx 0;
}

.right-img {
	width: 150rpx;
	height: 150rpx;
}
</style>
