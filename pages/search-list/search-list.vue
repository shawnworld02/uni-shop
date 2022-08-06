<template>
	<view>
		<ShopList :keyword="keyword"></ShopList>
	</view>
</template>

<script>
	import ShopList from "@/components/common/ShopList.vue"
	export default {
		data(){
			return{
				keyword:""
			}
		},
		components:{
			ShopList
		},
		onLoad(e){
			this.keyword = e.keyword
			// #ifdef APP-PLUS
			var webView = this.$mp.page.$getAppWebview();
			webView.setTitleNViewSearchInputText(e.keyword); 
			// #endif
			
			// #ifdef H5
			var searchInputDom = document.querySelector(".uni-input-input[type=search]");
			var evt = new UIEvent('input', {
			bubbles: false,
			cancelable: false
			});
			searchInputDom.value = e.keyword;
			searchInputDom.dispatchEvent(evt);
			// #endif
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
