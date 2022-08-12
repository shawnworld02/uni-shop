<template>
	<view class="shop-cart">
		<!-- 自定义导航栏 -->
		<uni-nav-bar title="购物车" :right-text="isNavBar ? '完成' : '编辑'" fixed="true" statusBar="true" @clickRight="isNavBar = !isNavBar"></uni-nav-bar>
	</view>
</template>

<script>
import uniNavBar from '@/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue';
export default {
	data() {
		return {
			isNavBar: false
		};
	},
	methods: {},
	components: {
		uniNavBar
	}
};
</script>

<style></style>
