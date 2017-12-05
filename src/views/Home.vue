<template>
    <div class="apppage">
      <button @click="showGlobalModal">弹出层组件</button>
        <!-- 头部 -->
        <app-header title="呆逗商城" title-color="#FFF" header-bg="#ff6666"></app-header>

        <!-- banner -->
		    <banner :list="imglist" v-if="!loading"></banner>

        <!-- tab menu -->
        <div class="tab-menu v-flexbox" v-if="!loading">
          <div class="tab-item v-flexbox-item" v-for="item in tablist">
            <a>
              <i class="iconfont" v-html="item.iconUrl"></i>
              <div>{{item.title}}</div>
            </a>
          </div>
        </div>

        <!-- content -->
        <section v-if="!loading">

        </section>

        <!-- loading -->
        <loading :show="loading"></loading>

         <!--模态框-->
        <globalmodal :globalmodal.sync="globalModal"></globalmodal>

    </div>
</template>

<script>
import AppHeader from "./common/Header.vue";
import Banner from "../components/banner.vue";
import Loading from "../components/Loading.vue";
import Globalmodal from "../components/globalmodal.vue";
import '../assets/font/iconfont.css';

import Mock from "mockjs";

// 生成商品列数据
Mock.mock("shoplist.json", {
  retcode: 1,
  retmsg: "查询成功",
  data: {
    total: 1,
    records: 10,
    page: 1,
    "rows|10": [
      {
        "id|+1": 1,
        "sid|+1": 1,
        remainmember: "@natural(100, 1000)",
        joinedmember: "@natural(100, 1000)",
        totalmember: "@natural(100, 1000)",
        title: "@title(6, 50)",
        cover: "@image(200x200, #ff6666, Hello)"
      }
    ]
  }
});

// 生成轮播数据
const imgdata = Mock.mock({
  "list|3": [
    {
      "id|+1": 1,
      src: "@image(640x400, #ffcc33, #333,Banner)"
    }
  ]
});

export default {
  data() {
    return {
      isflag: false,
      scroll: true,
      activeIndex: 0,
      page: 1,
      mark: {
        up: false,
        down: false
      },
      shoplist: [], //商品列表
      imglist: [], //图片列表
      tablist: [
        { title: "票券", key: "1", iconUrl: "&#xe602;" },
        { title: "设备", key: "2", iconUrl: "&#xe611;" },
        { title: "饮品", key: "3", iconUrl: "&#xe604;" },
        { title: "周边", key: "4", iconUrl: "&#xe626;" }
      ], //tab数据
      globalModal: {}, //自定义弹窗组件
      loading: false //加载提示
    };
  },
  route: {
    data() {
      let self = this;
      self.imgSwiper();
    }
  },
  methods: {
    /**获取数据 */
    getAjaxData() {
      let me = this;
      me.$http.get("shoplist.json").then(
        function(response) {
          me.scroll = true;
          let data = response.data;
          if (data.retcode == 1) {
            me.loading = false;
            let jsonData = data.data.rows;

            if (me.page == 1) {
              me.shoplist = jsonData;
            } else {
              me.shoplist = me.shoplist.concat(jsonData);
            }
          }
        },
        function() {}
      );
    },
    /**轮播 */
    imgSwiper() {
      var me = this;
      me.$nextTick(() => {
        me.$set("imglist", imgdata.list);
        console.log(imgdata.list);
      });
    },
    /**
      * 弹出层组件
      * @return {[type]} [description]
      */
    showGlobalModal() {
      this.globalModal = {
        rd: Math.random(),
        title: "title",
        content: "content",
        confirmBtnText: "我知道了",
        cancelBtnText: "取消",
        alert: true,
        confirmFn() {
          console.log("自定义confirmFn" + Math.random());
        },
        cancelFn() {
          console.log("自定义cancelFn" + Math.random());
        }
      };
    }
  },
  components: {
    AppHeader,
    Banner,
    Loading,
    Globalmodal
  }
};
</script>

<style>
.app-pagination {
  bottom: 5px !important;
  padding-right: 10px;
  text-align: right;
}

.app-pagination span {
  width: 25px;
  height: 5px;
  background: #888;
  border-radius: 0;
  margin: 0 2px !important;
}

/* tab切换 */
.tab-menu {
  position: relative;
  padding: 10px 0;
  background: #fff;
}

.active a {
  color: #ff6666;
}

.tab-menu::before {
  position: absolute;
  top: 0;
  left: 0;
  left: 0;
  width: 100%;
  height: 1px;
  border-top: 1px solid #d9d9d9;
  color: #d9d9d9;
  content: " ";
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}

.tab-item a{
  display: block;
}
</style>


