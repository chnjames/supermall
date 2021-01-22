<template>
  <div id="home">
    <!--顶部bar-->
    <nav-bar class="home-nav">
      <template #navCenter>
        <div>购物街</div>
      </template>
    </nav-bar>
    <!--滚动组件-->
    <scroll class="content"
            ref="scroll"
            @scroll="positionTop"
            :probeType="3"
            :listenScroll="listenScroll"
            :data="showGoods"
            :pullUp="pullUp"
            @scrollToEnd="pullingUp">
      <!--轮播图-->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in banners" :key="index">
          <img :src="item.image" alt="">
        </van-swipe-item>
      </van-swipe>
      <!--recommend-->
      <van-row type="flex" justify="space-between" class="recommend">
        <van-col span="6" v-for="(item, index) in recommends" :key="index" class="recommend-item" @click="recommendClick(item.link)">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </van-col>
      </van-row>
      <img src="https://img13.360buyimg.com/imgzone/jfs/t1/161676/39/3403/68176/60069bb2E72fdb806/0ce6cb8847b79c39.jpg" alt="">
      <!--tabcontrol-->
      <tab-control :tabList="tabList" @tabItem="tabItemClick"></tab-control>
      <!--产品列表-->
      <goods-list :goodsList="showGoods"></goods-list>
    </scroll>
    <!--返回顶部-->
    <transition name="fade">
      <div class="back-top" v-show="backTop" @click="backTopClick">
        <img src="~@/assets/images/back_top.png" alt="back-top" />
      </div>
    </transition>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navBar/NavBar";
  import Scroll from "../../components/common/scroll/Scroll";

  import TabControl from "../../components/content/tabControl/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";

  import {getHomeMultidata, getHomeGoods} from "../../request/api";

  export default {
    name: "Home",
    components: {Scroll, GoodsList, TabControl, NavBar},
    data() {
      return {
        tabList: ['流行', '新款', '秋冬'],
        banners: [],
        recommends: [],
        currentType: 'pop',
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        backTop: false,
        pullUp: true,
        listenScroll: true
      }
    },
    created() {
      // 1.请求多个数据
      this.getHomeMultidata();
      /*请求商品数据*/
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    methods: {
      recommendClick(val) {
        location.href = val
      },
      tabItemClick(index) {
        console.log(index)
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      // 子组件传滚动距离
      positionTop(value) {
        console.log(value)
        value = Math.abs(value.y)
        this.backTop = value > 350
      },
      /*点击返回页面顶部*/
      backTopClick() {
        this.$refs.scroll.scrollTo(0, 0, 300)
      },
      //上拉加载更多
      pullingUp() {
        this.getHomeGoods(this.currentType)
      },
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        let page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .fade-enter-active {
    transition: all .3s ease;
  }
  .fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-enter, .fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  #home {
    position: relative;
    height: 100vh;
  }
  .home-nav {
    background-color: #ff8e97;
    color: #FFFFFF;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  /*轮播图*/
  .my-swipe {
    /*padding-top: 44px;*/
    img {
      width: 100%;
    }
  }
  /*recommend*/
  .recommend {
    font-size: 14px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eeeeee;

    &-item {
      text-align: center;
    }

    img {
      width: 60px;
      margin-bottom: 10px;
    }
  }

  /*返回顶部*/
  .back-top{
    position: fixed;
    bottom: 80px;
    right: 10px;
    z-index: 10;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #FFFFFF;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>