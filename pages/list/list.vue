<template>
	<view>
		<Lines></Lines>
		<view class="list">
			<!-- 左侧移动 -->
			<scroll-view scroll-y="true" class="list-left" :style="'height:' + clientHeight + 'px;'">
				<view v-for="(item, index) in leftData" @tap="clickLeft(index,item.id)" :key="index">
					<view class="left-name" :class="activeIndex === index ? 'left-name-active' : ''">{{ item.name }}</view>
				</view>
			</scroll-view>

			<!-- 右侧滑动 -->
			<scroll-view scroll-y="true" class="list-right" :style="'height:' + clientHeight + 'px;'">
				<view class="right-block" v-for="(item, index) in rightData" :key="index">
					<block v-for="(k,i) in item" :key="i">
						<view class="list-title">{{k.name}}</view>
						<view class="right-content">
							<view class="right-item" v-for="(j,idx) in k.list" :key="idx">
								<image class="right-img" :src="j.imgUrl" mode=""></image>
								<view clas="right-name">{{j.name}}</view>
							</view>
						</view>
					</block>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import Lines from '@/components/common/Lines.vue';
import $http from '@/common/api/request.js';
export default {
	components: {
		Lines
	},
	data() {
		return {
			clientHeight: 0,
			activeIndex: 0,
			//左侧数据
			leftData: [],
			//右侧的数据
			rightData: []
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
	onLoad() {
		this.getData();
	},
	methods: {
		//请求数据方法
		getData(id) {
			if (id === this.activeIndex + 1) {
				return;
			}
			$http
				.request({
					url: '/goods/list'
				})
				.then(res => {
					let leftData = [];
					let rightData = [];
					res.forEach(v => {
						leftData.push({
							id: v.id,
							name: v.name
						});
						//如果点击的id值相同
						if (v.id === this.activeIndex + 1) {
							rightData.push(v.data);
						}
					});
					this.leftData = leftData;
					this.rightData = rightData;
				})
				.catch(err => {
					uni.showToast({
						title: '请求失败',
						icon: 'none'
					});
				});
		},
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
		clickLeft(index,id) {
			this.getData(id);
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
