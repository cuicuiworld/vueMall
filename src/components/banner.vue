<template>
  <div class="swiper-container appSwiper">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in list">
          <a href="javascript:;">
            <img :src="item.src" :style="{height:height}">
          </a>
        </div>
    </div>
    <div class="swiper-pagination" :class="classpage" v-if="showpage"></div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  ready() {
    let me = this;
    if (!(me.list && me.list.length === 0)) {
      me.renderSwiper();
    }
  },
  methods: {
    /**背景图片路径 */
    buildBackgroundUrl() {},
    renderSwiper() {
      let me = this;
      me.swiper = new Swiper(me.$el, {
        direction: me.direction,
        autoplay: me.autoplay,
        speed: me.speed,
        loop: me.loop,
        autoplayDisableOnInteraction: me.autoplayDisableOnInteraction,
        pagination: ".swiper-pagination",
        paginationClickable: true
      });
    }
  },
  props: {
    // 接口数据
    list: {
      type: Array,
      required: false
    },
    //滑动方向 水平(horizontal)或垂直(vertical)
    derection: {
      type: String,
      default: "horizontal"
    },
    //自动切换
    autoplay: {
      type: Number,
      default: 3000
    },
    //滑动速度
    speed: {
      type: Number,
      default: 600
    },
    /*循环切换*/
    loop: {
      type: Boolean,
      default: true
    },
    /*重新启动autoplay,默认为false：启动*/
    autoplayDisableOnInteraction: {
      type: Boolean,
      default: false
    },
    /*显示分页容器*/
    showpage: {
      type: Boolean,
      default: true
    },
    /*分页样式*/
    classpage: String,
    /*高度*/
    height: {
      type: String,
      default: "200px"
    }
  },
  watch: {
    list: function(val) {
      this.renderSwiper();
    }
  }
};
</script>

<style>
.appSwiper {
  width: 100%;
}

.swiper-slide {
  text-align: center;
  background: #fff;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  background: center no-repeat;
  background-size: cover;
}

.swiper-slide a {
  display: block;
}

.swiper-slide img {
  width: 100%;
}
</style>

