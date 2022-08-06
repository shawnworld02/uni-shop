<template>
	<view class="search">
		<Lines></Lines>
		<view class="search-item">
			<view class="search-title">
				<view class="f-color">最近搜索</view>
				<view class="iconfont icon-lajitong f-color"></view>
			</view>
			<view>
				<view class="search-name f-color">四件套</view>
				<view class="search-name f-color">面膜</view>
			</view>
		</view>
		<view class="search-item">
			<view class="search-title"><view class="f-color">热门搜索</view></view>
			<view>
				<view class="search-name f-color">四件套</view>
				<view class="search-name f-color">面膜</view>
			</view>
		</view>
	</view>
</template>

<script>
import Lines from '@/components/common/Lines.vue';
export default {
	data() {
		return {
			keyword: ''
		};
	},
	//点击顶栏中的搜索按钮
	onNavigationBarButtonTap(e) {
		this.search();
	},
	//监听input输入内容
	onNavigationBarSearchInputChanged(e) {
		this.keyword = e.text;
	},
	//监听软键盘的搜索按钮
	onNavigationBarSearchInputConfirmed() {
		this.search();
	},
	methods: {
		//判断关键词是否为空，否则跳转页面
		search() {
			if (this.keyword === '') {
				return uni.showToast({
					title: '关键词不能为空',
					icon: 'none'
				});
			} else {
				uni.navigateTo({
					url: '/pages/search-list/search-list'
				});
			}
			uni.hideKeyboard();
		}
	},
	components: {
		Lines
	}
};
</script>

<style scoped>
.search-item {
	padding: 20rpx;
}
.search-title {
	display: flex;
	justify-content: space-between;
}
.search-name {
	padding: 4rpx 24rpx;
	background-color: #e1e1e1;
	display: inline-block;
	border-radius: 26rpx;
	margin: 10rpx;
}
</style>
