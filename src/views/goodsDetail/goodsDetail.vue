<template>
  <div>
    <nav-bar class="detail-nav">
      <template #navLeft>
        <div class="detail-nav-left" @click="backClick">
          <van-icon size="20" name="arrow-left" />
        </div>
      </template>
      <template #navCenter>
        <div class="detail-nav-center">
          <div v-for="(item, index) in titles"
               :key="item.type"
               :class="{active: item.type === currentIndex}"
               @click="titleClick(item.type)">{{item.name}}
          </div>
        </div>
      </template>
    </nav-bar>
    <van-swipe class="my-swipe" :autoplay="3000" height="200">
      <van-swipe-item v-for="(item, index) in goodsSwipe" :key="index">
        <van-image :src="item" fit="cover" radius="5"></van-image>
      </van-swipe-item>
    </van-swipe>
    <div>
      <div>{{goodItem.title}}</div>
      <div>
        <div>{{goodItem.newPrice}}</div>
        <div>{{goodItem.oldPrice}}</div>
        <div>{{goodItem.discount}}</div>
      </div>
      <div v-for="item in goodItem.columns">{{item}}</div>
      <div v-for="item in goodItem.services">
        <van-icon :name="item.icon"></van-icon>
        <div>{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>

  import {getGoodsDetail, Goods} from "@/request/api";
  import NavBar from "@/components/common/navBar/NavBar";

  export default {
    name: "goodsDetail",
    components: {NavBar},
    data() {
      return {
        goodsId: null,
        titles: [{
          type: 1,
          name: '商品'
        }, {
          type: 2,
          name: '参数'
        }, {
          type: 3,
          name: '评论'
        }, {
          type: 4,
          name: '推荐'
        }],
        currentIndex: 1,
        goodsInfo: null,// 产品详情所有数据
        goodsSwipe: null, // 产品轮播数据
        goodItem: {}
      }
    },
    created() {
      this.goodsId = this.$route.params.id
      this.getGoodsDetail(this.goodsId)
    },
    methods: {
      //详情页顶部菜单栏
      titleClick(index) {
        this.currentIndex = index
      },
      //返回上一页
      backClick() {
        this.$router.back()
      },
      getGoodsDetail(id) {
        getGoodsDetail(id).then(res => {
          this.goodsInfo = res.result
          this.goodItem = new Goods(this.goodsInfo.itemInfo, this.goodsInfo.columns, this.goodsInfo.shopInfo.services);
          console.log(this.goodItem)
          this.goodsSwipe = this.goodsInfo.itemInfo.topImages
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .detail-nav {
    color: #333333;
    font-size: 14px;
    &-left {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &-center {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }

  .active {
    color: #e89abe;
  }
</style>