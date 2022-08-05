<template>
	<view class="hot"><Commodity :dataList="dataList" itemWidth="250rpx" bigH="250rpx"></Commodity></view>
</template>

<script>
import Commodity from '@/components/common/Commodity.vue';
export default {
	props: {
		dataList: Array
	},
	components: {
		Commodity
	}
};
</script>

<style></style>
