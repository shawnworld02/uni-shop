<template>
	<view class="recommend bg-color">
		<view class="recommend-item">
			<image class="item-big" src="../../static/ias_346751fea8f8bb556294ffbcdfd54342_1135x545_85.jpeg"></image>
			<view class="item-small">
				<image class="item-image" src="../../static/img/0f2b8182-0c81-49bf-b345-aa86b1efbac2_470x470_90.jpeg"></image>
				<image class="item-image" src="../../static/img/3df7e2cb-2ffb-4880-aebb-cade9074aacc.jpeg"></image>
				<image class="item-image" src="../../static/img/ee09e3e4-555d-44cb-b49c-9599ade11e99_470x470_90.jpeg"></image>
			</view>
		</view>
		<view class="recommend-item">
			<image class="item-big" src="../../static/img/ias_f6b6a528187c64556f849fc69a7374cf_1135x545_85.jpeg"></image>
			<view class="item-small">
				<image class="item-image" src="../../static/img/1199141606-731067386470727680-731067386470727682-1_470x470_90.jpeg"></image>
				<image class="item-image" src="../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg"></image>
				<image class="item-image" src="../../static/img/1849900164-2594994917693890560-2594994917693890562-1_470x470_90.jpeg"></image>
			</view>
		</view>
	</view>
</template>

<script></script>

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
