<template>
	<view class="index">
		<uni-nav-bar :statusBar="true" title="百年奥莱">
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
			<swiper-item v-for="(item, index) in topBar" :key="index">
				<view class="home-data">
					<IndexSwiper></IndexSwiper>
					<Recommend></Recommend>
					<Card cardTitle="猜你喜欢"></Card>
					<CommodityList></CommodityList>
				</view>
			</swiper-item>
		</swiper>

		<!-- 推荐模版 -->
		<!-- <IndexSwiper></IndexSwiper>
		<Recommend></Recommend>
		<Card cardTitle="猜你喜欢"></Card>
		<CommodityList></CommodityList> -->

		<!-- 其他模板：运动户外、美妆 -->
		<!-- <Banner></Banner>
		<Icons></Icons>
		<Card cardTitle="热 销 爆 品"></Card>
		<Hot></Hot>
		<Card cardTitle="推 荐 店 铺"></Card>
		<Shop></Shop>
		<Card cardTitle="为 您 推 荐"></Card>
		<CommodityList></CommodityList> -->
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
export default {
	data() {
		return {
			//选中的索引
			topBarIndex: 0,
			//顶栏跟随的索引id值
			scrollIntoIndex: 'top0',
			//顶栏数据
			topBar: [{ name: '推荐' }, { name: '运动户外' }, { name: '服饰内衣' }, { name: '鞋靴箱包' }, { name: '美妆个护' }, { name: '家居数码' }, { name: '食品母婴' }],
			//内容块的高度值
			contentBlockHeight: 0
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
		uni.request({
			url:"/api/index_list/data",
			success: res => {
				console.log(res);
			}
		});
	},
	onReady() {
		let view = uni.createSelectorQuery().select('.home-data');
		//获取view节点的属性
		view
			.boundingClientRect(data => {
				this.contentBlockHeight = data.height;
			})
			.exec();
	},
	methods: {
		changeTab(index) {
			if (this.topBarIndex === index) {
				return;
			}
			this.topBarIndex = index;
			this.scrollIntoIndex = 'top' + index;
		},
		onChangeTab(e) {
			if (this.topBarIndex === e.detail.current) {
				return;
			}
			this.topBarIndex = e.detail.current;
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
</style>
