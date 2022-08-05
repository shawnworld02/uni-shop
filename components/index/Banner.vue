<template>
	<view class="banner"><image class="banner-img" :src="bigUrl"></image></view>
</template>

<script>
	export default{
		props:{
			bigUrl:String
		}
	}
</script>

<style scoped>
.banner {
	width: 100%;
	height: 400rpx;
}
.banner-img {
	width: 100%;
	height: 400rpx;
}
</style>
