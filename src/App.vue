<template>
  <div id="app">
    <keep-alive exclude="goodsDetail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar v-show="showTab"></main-tab-bar>
  </div>
</template>
<script>
  import MainTabBar from "./components/content/mainTabBar/MainTabBar";
  export default {
    name: 'App',
    components: {MainTabBar},
    computed: {
      showTab() {
        return this.$route.meta.showTab
      }
    }
  }
</script>
<style lang="scss">
  @import "~normalize.css";
</style>
