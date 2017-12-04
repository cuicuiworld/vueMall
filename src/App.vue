<template>
	<div id="app">
		<!-- 路由 -->
		<div class="wrap">
			<router-view class="v" :transition="effect" keep-alive></router-view>
			<!-- :transition="effect" keep-alive -->
		</div>

		<!-- 导航 -->
		<navbar></navbar>

		<!-- loading -->
		<loading :show="loadshow"></loading>

	</div>
</template>

<script>
import Navbar from "./views/common/Navbar.vue";
import Loading from "./components/Loading.vue";

export default {
	data(){
		return {
			loadshow:false
		}
	},
  components: {
    Navbar,
		Loading
  }
};
</script>

<style>
[v-cloak] {
  display: none;
}
</style>