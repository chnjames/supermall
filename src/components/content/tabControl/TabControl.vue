<template>
  <div class="tab-control">
    <div class="tab-control-item"
         v-for="(item, index) in tabList"
         :key="index" :class="{active: index === currentIndex}"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      tabList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('tabItem', this.currentIndex)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tab-control {
    background-color: #FFFFFF;
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    position: sticky;
    top: 44px;

    &-item {
      flex: 1;
    }

    .active {
      color: #ff8e97;

      span {
        padding: 4px;
        border-bottom: 2px solid #ff8e97;
      }
    }
  }
</style>