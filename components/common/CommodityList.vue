<template>
	<view class="commodity-list">
		<!-- 商品列表组件 -->
		<Commodity :dataList="commodityList"></Commodity>
	</view>
	
</template>

<script>
	import Commodity from '@/components/common/Commodity.vue'
	export default{
		data(){
			return{
				commodityList:[
					{
						id:1,
						imgUrl:'../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
						name:'风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
						pprice:'299',
						oprice:'59',
						discount:'4.9'
					},
					{
						id:2,
						imgUrl:'../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
						name:'风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
						pprice:'299',
						oprice:'59',
						discount:'4.9'
					},
					{
						id:3,
						imgUrl:'../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
						name:'风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
						pprice:'299',
						oprice:'59',
						discount:'4.9'
					},
					{
						id:4,
						imgUrl:'../../static/img/1640921044-1545374753243254788-1545374753243254791-1_470x470_90.jpeg',
						name:'风情迷人小短裙，夏季爆款，限时折扣，走过路过千万不要错过，不然会后悔一辈子！！',
						pprice:'299',
						oprice:'59',
						discount:'4.9'
					}
				]
			}
		},
		components:{
			Commodity
		}
	}
</script>

<style>
</style>