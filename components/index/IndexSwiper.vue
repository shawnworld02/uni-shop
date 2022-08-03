<template>
	<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
		<swiper-item>
			<view class="swiper-item"><image class="swiper-image" src="../../static/img/首页头部图片1.jpeg"></image></view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item"><image class="swiper-image" src="../../static/img/首页头部图片2.jpeg"></image></view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item"><image class="swiper-image" src="../../static/img/首页头部图片3.jpeg"></image></view>
		</swiper-item>
	</swiper>
</template>

<script></script>

<style scoped>
swiper{
	width: 100%;
	height: 400rpx;
}
.swiper-image {
	width: 100%;
	height: 400rpx;
}
</style>
