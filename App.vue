<script>
export default {};
</script>

<style>
/*每个页面公共css */
@import '@/common/common.css';
@import '@/common/uni.css';
@import 'common/iconfont.css';

/* #ifdef H5 */
uni-scroll-view .uni-scroll-view::-webkit-scrollbar {
	/* 隐藏滚动条，但依旧具备可以滚动的功能 */
	display: none;
}
/* #endif */
</style>
