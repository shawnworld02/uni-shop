<template>
	<view class="recommend bg-color">
		<view class="recommend-item" v-for="(item,index) in dataList" :key="index">
			<image class="item-big" :src="item.bigUrl"></image>
			<view class="item-small">
				<block v-for="(k,i) in item.data" :key="i">
					<image class="item-image" :src="k.imgUrl"></image>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			dataList:Array
		}
	}
</script>

<style scoped>
.recommend {
	padding: 20rpx;
}
.recommend-item{
	display: flex;
	flex-direction: column;
	border-radius: 20rpx;
	border: 2rpx solid #CCCCCC;
	overflow: hidden;
	margin: 20rpx 0;
}
.item-big{
	width: 100%;
	height: 340rpx;
}
.item-small{
	width: 100%;
	height: 240rpx;
}
.item-image{
	width: 33.3%;
	height: 240rpx;
}
</style>
