<template>
  <div class="goods-item">
    <img :src="goodItem.show.img">
    <div class="goods-item-title">{{goodItem.title}}</div>
    <div class="goods-item-favorites">{{goodItem.cfav}}</div>
    <div class="goods-item-price">{{goodItem.price}}</div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    created() {
      // console.log(this.goodItem)
    }
  }
</script>

<style lang="scss" scoped>
  .goods-item {
    width: 46%;
    &-title {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    img {
      width: 100%;
    }
  }
</style>