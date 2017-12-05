
<template>
  <nav class="app-nav">
    <div class="nav-bar">
      <a class="bar-item" v-link="{path:'home'}">
        <i class="iconfont">&#xe65f;</i>
        <p>呆逗商城</p>
      </a>
      <a class="bar-item" v-link="{path:'partnermall'}">
        <i class="iconfont icon_partner">&#xe649;</i>
        <p>合作商城</p>
      </a>
    </div>
  </nav>
</template>

<<script>
import '../../assets/font/iconfont.css';
export default {}
</script>


<style scoped>
.app-nav {
  z-index: 9999;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #fff;
}

.app-nav::before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  height: 1px;
  width: 100%;
  border-top: solid 1px #d9d9d9;
  color: #d9d9d9;
  transform-origin: 0 0;
  transform: scaleY(0.5);
}

.nav-bar {
  display: flex;
  padding-top: 2px;
  width: 100%;
  height: 55px;
}

.bar-item {
  font-size: 14px;
}

.bar-item {
  flex: 1;
  text-align: center;
}

.app-nav .iconfont {
  font-size: 16px;
  margin-top: 5px;
  display: block;
}

.app-nav .icon_partner {
  font-size: 22px;
  margin-top: 0px;
}

.custom-active {
    color: #ff6666 !important;
}
</style>
