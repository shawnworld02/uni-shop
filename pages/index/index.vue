<template>
	<view class="index">
		<uni-nav-bar class="uni-nav-bar" :statusBar="true" title="百年奥莱">
			<template v-slot:left>
				<view class="iconfont icon-fangdajing"></view>
			</template>
			<template v-slot:right>
				<view class="iconfont icon-xiaoxizhongxin"></view>
			</template>
		</uni-nav-bar>

		<scroll-view scroll-x="true" class="scroll-content" :scroll-into-view="scrollIntoIndex">
			<view class="scroll-item" v-for="(item, index) in topBar" :key="index" @tap="changeTab(index)" :id="'top' + index">
				<text :class="topBarIndex === index ? 'f-active-color' : 'f-color'">{{ item.name }}</text>
			</view>
		</scroll-view>

		<swiper @change="onChangeTab" :current="topBarIndex" :style="'height:' + contentBlockHeight + 'px;'">
			<swiper-item v-for="(item, index) in newTopBar" :key="index">
				<scroll-view scroll-y="true" :style="'height:' + contentBlockHeight + 'px;'" @scrolltolower="loadMore(index)">
					<block v-if="item.data.length > 0">
						<block v-for="(k, i) in item.data" :key="i">
							<!--  首页推荐 -->
							<IndexSwiper v-if="k.type === 'swiperList'" :dataList="k.data"></IndexSwiper>
							<template v-if="k.type === 'recommendList'">
								<Recommend :dataList="k.data"></Recommend>
								<Card cardTitle="猜你喜欢"></Card>
							</template>

							<!-- 运动户外以及其他... -->
							<Banner v-if="k.type === 'bannerList'" :bigUrl="k.imgUrl"></Banner>
							<template v-if="k.type === 'iconsList'">
								<Icons :dataList="k.data"></Icons>
								<Card cardTitle="热 销 爆 品"></Card>
							</template>

							<template v-if="k.type === 'hotList'">
								<Hot :dataList="k.data"></Hot>
								<Card cardTitle="推 荐 店 铺"></Card>
							</template>

							<template v-if="k.type === 'shopList'">
								<Shop :dataList="k.data"></Shop>
								<Card cardTitle="为 您 推 荐"></Card>
							</template>
							<CommodityList v-if="k.type === 'CommodityList'" :dataList="k.data"></CommodityList>
						</block>
					</block>
					<view v-else>暂无数据</view>
					<view class="load-text f-color">{{ item.loadText }}</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import IndexSwiper from '@/components/index/IndexSwiper.vue';
import Recommend from '@/components/index/Recommend.vue';
import Card from '@/components/common/Card.vue';
import CommodityList from '@/components/common/CommodityList.vue';
import Banner from '@/components/index/Banner.vue';
import Icons from '@/components/index/Icons.vue';
import Hot from '@/components/index/Hot.vue';
import Shop from '@/components/index/Shop.vue';
//导入request.js
import $http from '@/common/api/request.js';
export default {
	data() {
		return {
			//选中的索引
			topBarIndex: 0,
			//顶栏跟随的索引id值
			scrollIntoIndex: 'top0',
			//顶栏数据
			topBar: [],
			//内容块的高度值
			contentBlockHeight: 0,
			//承载数据
			newTopBar: []
		};
	},
	components: {
		IndexSwiper,
		Recommend,
		Card,
		CommodityList,
		Banner,
		Icons,
		Hot,
		Shop
	},
	onLoad() {
		this.__init();
	},
	onReady() {
		//获取手机屏幕可视高度
		uni.getSystemInfo({
			success: res => {
				this.contentBlockHeight = res.windowHeight - uni.upx2px(80) - this.getContentBlockHeight(); //可视高度减去tabbar高度
			}
		});
	},
	methods: {
		__init() {
			$http
				.request({
					url: '/index_list/data'
				})
				.then(res => {
					this.topBar = res.topBar;
					this.newTopBar = this.initData(res);
				})
				.catch(() => {
					uni.showToast({
						title: '请求失败',
						icon: 'none'
					});
				});
		},
		initData(res) {
			let arr = [];
			for (let i = 0; i < this.topBar.length; i++) {
				let obj = {
					data: [],
					load: 'first',
					loadText: '上拉加载更多...'
				};
				//获取首次数据
				if (i === 0) {
					obj.data = res.data;
				}
				arr.push(obj);
			}
			return arr;
		},
		//点击顶栏
		changeTab(index) {
			if (this.topBarIndex === index) {
				return;
			}
			this.topBarIndex = index;
			this.scrollIntoIndex = 'top' + index;
			//每一次滑动 --> 赋值first
			if (this.newTopBar[this.topBarIndex].load === 'first') {
				this.addData();
			}
		},
		//对应滑动
		onChangeTab(e) {
			if (this.topBarIndex === e.detail.current) {
				return;
			}
			this.topBarIndex = e.detail.current;
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
		//对应显示不同数据
		addData(callback) {
			//拿到索引
			let index = this.topBarIndex;
			//拿到id ---> 不同的板块
			let id = this.topBar[index].id;
			//请求不同的数据
			let page = Math.ceil(this.newTopBar[index].data.length / 5) + 1;
			if (id === 1) {
				return;
			} else {
				//请求数据
				$http
					.request({
						url: '/index_list/' + id + '/data/' + page + ''
					})
					.then(res => {
						this.newTopBar[index].data = [...this.newTopBar[index].data, ...res];
					})
					.catch(() => {
						uni.showToast({
							title: '商品已经加载到底',
							icon: 'none'
						});
					});
				//当请求结束后，重新赋值
				this.newTopBar[index].load = 'last';
				if (typeof callback === 'function') {
					callback();
				}
			}
		},
		//上拉加载更多
		loadMore(index) {
			this.newTopBar[index].loadText = '加载中...';
			//请求数据结束后，文字提示信息又换回"上拉加载更多"
			this.addData(() => {
				this.newTopBar[index].loadText = '上拉加载更多...';
			});
		}
	}
};
</script>

<style scoped>
.scroll-content {
	width: 100%;
	height: 80rpx;
	white-space: nowrap;
}
.scroll-item {
	display: inline-block;
	padding: 10rpx 30rpx;
	font-size: 36rpx;
}
.f-active-color {
	padding: 10rpx 0;
	border-bottom: 4rpx solid #49bdfb;
}
.load-text {
	border-top: 2rpx solid #636263;
	line-height: 60rpx;
	text-align: center;
}
</style>
