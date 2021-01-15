<template>
  <div id="home">
    <!--滚动组件-->
    <scroll></scroll>
    <!--顶部bar-->
    <nav-bar class="home-nav">
      <template #navCenter>
        <div>购物街</div>
      </template>
    </nav-bar>
    <!--轮播图-->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in banners" :key="index">
        <img :src="item.image" alt="">
      </van-swipe-item>
    </van-swipe>
    <!--recommend-->
    <van-row type="flex" justify="space-between" class="recommend">
      <van-col span="6" v-for="(item, index) in recommends" class="recommend-item" @click="recommendClick(item.link)">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </van-col>
    </van-row>
    <!--feature-->
    <!--tabcontrol-->
    <tab-control :tabList="tabList" @tabItem="tabItemClick"></tab-control>
    <!--产品列表-->
    <goods-list :goodsList="showGoods"></goods-list>
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
        }
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
      },
      feature(e) {
        console.log(e)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home-nav {
    background-color: #ff8e97;
    color: #FFFFFF;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }

  /*轮播图*/
  .my-swipe {
    padding-top: 44px;

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

  /*feature*/
  .feature {
    width: 100%;
  }
</style>