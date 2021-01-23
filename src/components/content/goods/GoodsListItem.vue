<template>
  <div class="goods-item">
    <img :src="goodItem.show.img">
    <div class="goods-item-title">{{goodItem.title}}</div>
    <div class="goods-flex">
      <div class="goods-item-price">¥{{goodItem.price}}</div>
      <div class="goods-item-favorites"><van-icon name="star-o" color="#e89abe" />{{goodItem.cfav}}</div>
    </div>
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
    /*瀑布流方法1*/
    break-inside: avoid;
    width: 100%;
    box-shadow: 1px 2px 3px #eeeeee;
    margin-bottom: 10px;
    border-radius: 5px;
    font-size: 11px;
    color: #000000;
    overflow: hidden;
    &-title {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      padding: 5px;
      box-sizing: border-box;
    }
    &-price {
      color: #F0250F;
      font-size: 14px;
    }
    &-favorites{
      color: #e89abe;
    }
    img {
      width: 100%;
    }
  }
  .goods-flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
  }
</style>