<template>
  <header class="app_header" :style="{background:headerBg, color: titleColor}">
    <div class="header_left">
      <slot name="left"></slot>
    </div>
    <h1 class="app_title">{{title}}</h1>
    <div class="header_right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
export default {
  data() {},
  props: {
    title: String,
    titleColor: String,
    headerBg: String
  }
};
</script>

<style>
.app_header {
  position: relative;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  padding: 0 10px;
  height: 45px;
  line-height: 45px;
  display: flex;
}

.header_left,
.app_title,
.header_right {
  flex: 1;
}
.app_title {
  text-align: center;
  font-weight: 600;
}
</style>

