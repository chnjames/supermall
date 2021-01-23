<template>
  <div class="goods-list">
    <goods-list-item v-for="(item, index) in goodsList" @click.native="goodsDetail(item)" :key="index" :goodItem="item" />
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";
  export default {
    name: "goodsList",
    props: {
      goodsList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    created() {
      // console.log(this.goodsList);
    },
    methods: {
      goodsDetail(item) {
        this.$router.push('/goodsDetail/'+item.iid)
      }
    },
    components: {GoodsListItem}
  }
</script>

<style lang="scss" scoped>
.goods-list{
  /*display: flex;
  flex-wrap: wrap;
  justify-content: space-around;*/
  /*瀑布流方法1*/
  column-count: 2;
  column-gap: 10px;
  padding: 0 5px;
}
</style>