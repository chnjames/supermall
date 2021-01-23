<template>
  <div class="goods-item">
    <img :src="goodItem.show.img">
    <div class="goods-item-title">{{goodItem.title}}</div>
    <div class="goods-flex">
      <div class="goods-item-favorites"><van-icon name="star-o" color="#e89abe" />{{goodItem.cfav}}</div>
      <div class="goods-item-price">{{goodItem.price}}</div>
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
    break-inside: avoid;
    width: 100%;
    box-shadow: 1px 1px 3px #eeeeee;
    margin-bottom: 10px;
    border-radius: 5px;
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
  .goods-flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>