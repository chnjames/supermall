<template>
  <div class="goods-list">
    <goods-list-item v-for="(item, index) in goodsList" :key="index" :goodItem="item" />
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

    },
    components: {GoodsListItem}
  }
</script>

<style lang="scss" scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>