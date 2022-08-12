<template>
	<view class="details">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item"><image class="swiper-img" :src="goodsContent.imgUrl" mode=""></image></view>
			</swiper-item>
		</swiper>
		<!-- 价格和名城 -->
		<view class="detail-goods">
			<view class="goods-pprice">¥{{ goodsContent.pprice }}</view>
			<view class="goods-oprice">¥{{ goodsContent.oprice }}</view>
			<view class="goods-name">{{ goodsContent.name }}</view>
		</view>
		<!-- 商品详情图 -->
		<view>
			<view><image class="details-img" src="../../static/img/3df7e2cb-2ffb-4880-aebb-cade9074aacc.jpeg" mode=""></image></view>
			<view><image class="details-img" src="../../static/img/3df7e2cb-2ffb-4880-aebb-cade9074aacc.jpeg" mode=""></image></view>
			<view><image class="details-img" src="../../static/img/3df7e2cb-2ffb-4880-aebb-cade9074aacc.jpeg" mode=""></image></view>
			<view><image class="details-img" src="../../static/img/3df7e2cb-2ffb-4880-aebb-cade9074aacc.jpeg" mode=""></image></view>
			<view><image class="details-img" src="../../static/img/3df7e2cb-2ffb-4880-aebb-cade9074aacc.jpeg" mode=""></image></view>
		</view>
		<!-- 商品列表 -->
		<Card cardTitle="看 了 又 看"></Card>
		<CommodityList :dataList="dataList"></CommodityList>
		<!-- 底部 -->
		<view class="detail-footer">
			<view class="iconfont icon-xiaoxizhongxin"></view>
			<view class="iconfont icon-gouwuchekong"></view>
			<view class="add-shopping-cart" @tap="showPop">加入购物车</view>
			<view class="purchase" @tap="showPop">立即购买</view>
		</view>
		<!-- 底部弹出层 -->
		<view class="pop" v-show="isShow" @touchmove.stop.prevent="">
			<!-- 蒙层 -->
			<view class="pop-mask" @tap="hidePop"></view>
			<!-- 内容块 -->
			<view class="pop-box" :animation="animationData">
				<view>
					<view><image class="pop-img" src="../../static/img/0f2b8182-0c81-49bf-b345-aa86b1efbac2_470x470_90.jpeg" mode=""></image></view>
					<view class="pop-num">
						<view>购买数量</view>
						<UniNumberBox :min="1"></UniNumberBox>
					</view>
					<view class="pop-sub">确定</view>
				</view>
			</view>
		</view>
		w
	</view>
</template>

<script>
import $http from '@/common/api/request.js';
import Card from '@/components/common/Card.vue';
import CommodityList from '@/components/common/CommodityList.vue';
import UniNumberBox from '@/components/uni/uni-number-box/components/uni-number-box/uni-number-box.vue';
import UniShare from '@/uni_modules/uni-share/js_sdk/uni-share.js';
const uniShare = new UniShare();
export default {
	data() {
		return {
			animationData: {},
			isShow: false,
			goodsContent: {},
			swiperList: [
				{ imgUrl: '../../static/img/0f2b8182-0c81-49bf-b345-aa86b1efbac2_470x470_90.jpeg' },
				{ imgUrl: '../../static/img/0f2b8182-0c81-49bf-b345-aa86b1efbac2_470x470_90.jpeg' },
				{ imgUrl: '../../static/img/0f2b8182-0c81-49bf-b345-aa86b1efbac2_470x470_90.jpeg' }
			],
			dataList: [
				{
					id: 1,
					imgUrl: '../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
					name: '风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
					pprice: '299',
					oprice: '59',
					discount: '4.9'
				},
				{
					id: 2,
					imgUrl: '../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
					name: '风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
					pprice: '299',
					oprice: '59',
					discount: '4.9'
				},
				{
					id: 3,
					imgUrl: '../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
					name: '风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
					pprice: '299',
					oprice: '59',
					discount: '4.9'
				},
				{
					id: 4,
					imgUrl: '../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
					name: '风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
					pprice: '299',
					oprice: '59',
					discount: '4.9'
				}
			]
		};
	},
	components: {
		Card,
		CommodityList,
		UniNumberBox
	},
	onLoad(e) {
		this.getData(e.id);
	},
	//修改默认返回行为
	onBackPress({ from }) {
		if (from === 'backbutton') {
			this.$nextTick(function() {
				uniShare.hide();
			});
			return uniShare.isShow;
		}
		if (this.isShow) {
			this.hidePop();
			return true;
		}
	},
	//点击分享
	onNavigationBarButtonTap(e) {
		if (e.type === 'share') {
			this.uniShare()
		}
	},
	methods: {
		//请求商品
		getData(id) {
			$http
				.request({
					url: '/goods/id',
					data: {
						id
					}
				})
				.then(res => {
					this.goodsContent = res[0];
				})
				.catch(() => {
					uni.showToast({
						title: '请求失败',
						icon: 'none'
					});
				});
		},
		showPop() {
			var animation = uni.createAnimation({
				duration: 200
			});
			animation.translateY(600).step();
			this.animationData = animation.export();
			this.isShow = true;
			setTimeout(() => {
				animation.translateY(0).step();
				this.animationData = animation.export();
			}, 200);
		},
		hidePop() {
			var animation = uni.createAnimation({
				duration: 200
			});
			animation.translateY(600).step();
			this.animationData = animation.export();
			setTimeout(() => {
				animation.translateY(0).step();
				this.isShow = false;
			}, 200);
		},
		uniShare() {
			uniShare.show(
				{
					content: {
						//公共的分享参数配置  类型（type）、链接（herf）、标题（title）、summary（描述）、imageUrl（缩略图）
						type: 0,
						href: 'https://uniapp.dcloud.io/',
						title: '标题',
						summary: '描述',
						imageUrl: 'https://img-cdn-aliyun.dcloud.net.cn/stream/icon/__UNI__HelloUniApp.png'
					},
					menus: [
						{
							img: '/static/app-plus/sharemenu/wechatfriend.png',
							text: '微信好友',
							share: {
								//当前项的分享参数配置。可覆盖公共的配置如下：分享到微信小程序，配置了type=5
								provider: 'weixin',
								scene: 'WXSceneSession'
							}
						},
						{
							img: '/static/app-plus/sharemenu/wechatmoments.png',
							text: '微信朋友圈',
							share: {
								provider: 'weixin',
								scene: 'WXSceneTimeline'
							}
						},
						{
							img: '/static/app-plus/sharemenu/mp_weixin.png',
							text: '微信小程序',
							share: {
								provider: 'weixin',
								scene: 'WXSceneSession',
								type: 5,
								miniProgram: {
									id: '123',
									path: '/pages/list/detail',
									webUrl: '/#/pages/list/detail',
									type: 0
								}
							}
						},
						{
							img: '/static/app-plus/sharemenu/weibo.png',
							text: '微博',
							share: {
								provider: 'sinaweibo'
							}
						},
						{
							img: '/static/app-plus/sharemenu/qq.png',
							text: 'QQ',
							share: {
								provider: 'qq'
							}
						},
						{
							img: '/static/app-plus/sharemenu/copyurl.png',
							text: '复制',
							share: 'copyurl'
						},
						{
							img: '/static/app-plus/sharemenu/more.png',
							text: '更多',
							share: 'shareSystem'
						}
					],
					cancelText: '取消分享'
				},
				e => {
					console.log(uniShare.isShow);
					console.log(e);
				}
			);
		}
	}
};
</script>

<style scoped>
swiper {
	width: 100%;
	height: 700rpx;
}
.swiper-img {
	width: 100%;
	height: 700rpx;
}
.detail-goods {
	text-align: center;
	font-weight: bold;
	font-size: 36rpx;
	padding: 10rpx 0;
}
.details-img {
	width: 100%;
}
.detail-footer {
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 90rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #ffffff;
}
.detail-footer .iconfont {
	width: 60rpx;
	height: 60rpx;
	border-radius: 100%;
	background-color: black;
	color: white;
	text-align: center;
	margin: 0 10rpx;
}
.add-shopping-cart {
	margin: 0 40rpx;
	padding: 6rpx 30rpx;
	background-color: black;
	color: white;
	border-radius: 40rpx;
}
.purchase {
	margin: 0 40rpx;
	padding: 6rpx 30rpx;
	background-color: #49bdfd;
	color: white;
	border-radius: 40rpx;
}
.details {
	padding-bottom: 90rpx;
}
.pop {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 9999;
}
.pop-mask {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3);
}
.pop-box {
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	background-color: #ffffff;
}
.pop-img {
	width: 260rpx;
	height: 260rpx;
}
.pop-sub {
	line-height: 80rpx;
	background-color: #49bdfd;
	color: #ffffff;
	text-align: center;
}
.pop-num {
	padding: 20rpx;
	display: flex;
	justify-content: space-around;
}
</style>
