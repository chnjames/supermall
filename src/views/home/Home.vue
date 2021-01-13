<template>
  <div id="home">
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
    <tab-control :tabList="tabList"></tab-control>
    <ul>
      <li v-for="item in 100">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navBar/NavBar";
  import TabControl from "../../components/content/tabControl/TabControl";

  import {getHomeMultidata} from "../../request/api";

  export default {
    name: "Home",
    components: {TabControl, NavBar},
    data() {
      return {
        tabList: ['流行', '新款', '秋冬'],
        banners: [],
        recommends: []
      }
    },
    created() {
      // 1.请求多个数据
      getHomeMultidata().then(res => {
        console.log(res.data);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    methods: {
      recommendClick(val){
        location.href = val
      },
      feature(e){
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
  .my-swipe{
    padding-top: 44px;
    img{
      width: 100%;
    }
  }
  /*recommend*/
  .recommend{
    font-size: 14px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eeeeee;
    &-item{
      text-align: center;
    }
    img {
      width: 60px;
      margin-bottom: 10px;
    }
  }
  /*feature*/
  .feature{
    width: 100%;
  }
</style>