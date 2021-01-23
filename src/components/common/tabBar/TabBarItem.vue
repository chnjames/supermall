<template>
  <div class="tab-bar-item" @click="tabItemClick">
    <div v-if="!isActive">
      <slot name="itemIcon"></slot>
    </div>
    <div v-else>
      <slot name="itemIconActive"></slot>
    </div>
    <div :style="{color: tabActiveColor}">
      <slot name="itemText"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      tabPath: String,
      tabColor: {
        type: String,
        default: '#e89abe'
      }
    },
    data() {
      return {

      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.tabPath) !== -1
      },
      tabActiveColor() {
        return this.isActive ? this.tabColor : ''
      }
    },
    methods: {
      tabItemClick() {
        this.$router.replace(this.tabPath)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;

    img {
      width: 24px;
      height: 24px;
    }
    .active{
      color: red;
    }
  }
</style>