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

		<!-- <IndexSwiper></IndexSwiper>
		<Recommend></Recommend>
		<Card cardTitle="猜你喜欢"></Card>
		<CommodityList></CommodityList> -->
		<Banner></Banner>
		<Icons></Icons>
		<Card cardTitle="热 销 爆 品"></Card>
		<Hot></Hot>
		<Card cardTitle="推 荐 店 铺"></Card>
		<Shop></Shop>
	</view>
</template>

<script>
import IndexSwiper from '@/components/index/IndexSwiper.vue';
import Recommend from '@/components/index/Recommend.vue';
import Card from '@/components/common/Card.vue';
import CommodityList from '@/components/common/CommodityList.vue'
import Banner from '@/components/index/Banner.vue';
import Icons from '@/components/index/Icons.vue';
import Hot from '@/components/index/Hot.vue';
import Shop from '@/components/index/Shop.vue'
export default {
	data() {
		return {};
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
	onLoad() {},
	methods: {}
};
</script>

<style scoped></style>
