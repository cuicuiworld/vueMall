<template>
  <div v-show="show" class="loading app-content">
    <div class="load-box">
      <div class="spinner"></div>
      <div>{{title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    replace: true,
    title: {
      type: String,
      default: "正在加载中"
    },
    show: {
      type: Boolean,
      default: true
    }
  }
};
</script>


<style>
.loading {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 10001;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
}

.load-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  text-align: center;
  font-size: 12px;
  color: #fff;
}

.spinner {
  position: relative;
  width: 60px;
  height: 60px;
  margin: 10px auto 0;
  background: url("../assets/images/loading.png") center center no-repeat;
  background-size: cover;
  animation: spin 1500ms infinite linear;
}

@keyframes spin {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
