<template>
  <div class="page-content">
    <nav-bar class="nav-bar">
      <template #navCenter>
        <div>购物车({{cartLength}})</div>
      </template>
    </nav-bar>
    <scroll class="content"
            ref="scroll"
            :probeType="3"
            :data="cartList">
      <div v-for="item in cartList" :key="item.id" class="item">
        <van-checkbox v-model="item.check">
          <div class="flex-c-b">
            <van-image class="item-img" width="100" height="100" fit="cover" radius="5" :src="item.image"/>
            <div class="item-info">
              <div class="item-info-title">{{item.title}}</div>
              <div class="item-spec">
                <div class="item-info-price">¥{{item.price}}</div>
                <div class="item-info-count">x{{item.count}}</div>
              </div>
            </div>
          </div>
        </van-checkbox>
      </div>
    </scroll>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navBar/NavBar";

  import {mapGetters} from 'vuex'
  import Scroll from "@/components/common/scroll/Scroll";

  export default {
    name: "Cart",
    components: {Scroll, NavBar},
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters([
        'cartLength',
        'cartList'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  .page-content {
    position: relative;
    height: 100vh;

    .nav-bar {
      background-color: #e89abe;
      color: #FFFFFF;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
    }

    .content {
      position: absolute;
      top: 44px;
      bottom: 49px;
      left: 0;
      right: 0;
      overflow: hidden;
    }
  }

  .item {
    padding: 10px;
    border-bottom: 1px solid #eeeeee;

    .item-info {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &-title {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      &-price {
        font-size: 16px;
        color: #fa2121;
      }
    }
    .item-spec{
      display: flex;
      justify-content: space-between;
    }

    .flex-c-b {
      display: flex;
    }

    .item-img {
      flex-shrink: 0;
    }
  }

</style>