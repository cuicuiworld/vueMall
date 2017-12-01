<template>
	<div id="app">
		<!-- 路由 -->
		<div class="wrap">
			<router-view class="v" :transition="effect" keep-alive></router-view>
			<!-- :transition="effect" keep-alive -->
		</div>

		<!-- 导航 -->
		<navbar></navbar>
	</div>
</template>

<script>
import Navbar from "./views/common/Navbar.vue";

export default {
  data() {
    return {};
  },
  components: {
    Navbar
  }
};
</script>

<style>
[v-cloak] {
  display: none;
}
</style>