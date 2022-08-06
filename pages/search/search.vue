<template>
	<view class="search">
		<Lines></Lines>
		<view class="search-item">
			<view class="search-title">
				<view class="f-color">最近搜索</view>
				<view class="iconfont icon-lajitong f-color" @tap="clearHistory"></view>
			</view>
			<view v-if="searchedData.length > 0">
				<view class="search-name f-color" v-for="(item, index) in searchedData" :key="index">{{ item }}</view>
			</view>
			<view v-else class="search-end">暂无搜索记录</view>
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
			//搜索的关键词
			keyword: '',
			//搜索过的词记录
			searchedData: []
		};
	},
	//页面加载的时候
	onLoad() {
		uni.getStorage({
			key: 'searchedData',
			success: res => {
				this.searchedData = JSON.parse(res.data);
			}
		});
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
					url: "/pages/search-list/search-list?keyword="+this.keyword+""
				});
			}
			uni.hideKeyboard();
			this.addSearch();
		},
		//记录最近搜索词
		addSearch() {
			//最近搜索过滤重复搜索词
			let idx = this.searchedData.indexOf(this.keyword);
			if (idx < 0) {
				this.searchedData.unshift(this.keyword);
			} else {
				this.searchedData.unshift(this.searchedData.splice(idx, 1)[0]);
			}
			uni.setStorage({
				key: 'searchedData',
				data: JSON.stringify(this.searchedData)
			});
		},
		//清除搜索记录
		clearHistory() {
			uni.showModal({
				title: '重要提示',
				content: '是否要清楚记录？',
				cancelText: '取消',
				confirmText: '确定',
				success: res => {
					console.log(res);
					if(res.confirm){
						//清除storage
						uni.removeStorage({
							key:"searchedData",
						})
						//清除视图层
						this.searchedData = [];
					}
				}
			});
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
.search-end {
	text-align: center;
}
</style>
