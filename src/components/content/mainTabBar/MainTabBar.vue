<template>
  <tab-bar>
    <tab-bar-item v-for="(item, index) in tabBar" :key="index" :tabColor="item.tabColor" :tabPath="item.tabPath">
      <template #itemIcon>
        <img :src="item.tabIcon" />
      </template>
      <template #itemIconActive>
        <img :src="item.iconActive" />
      </template>
      <template #itemText>
        <div>{{item.tabName}}</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "../../common/tabBar/TabBar";
  import TabBarItem from "../../common/tabBar/TabBarItem";
  export default {
    name: "MainTabBar",
    data() {
      return {
        tabBar: [
          {
            tabIcon: '~@/assets/images/tabbar/home.png',
            iconActive: '~@/assets/images/tabbar/home-active.png',
            tabName: '首页',
            tabColor: '#e89abe', // 设置TabBar文字颜色
            tabPath: '/home'
          },{
            tabIcon: '~@/assets/images/tabbar/class.png',
            iconActive: '~@/assets/images/tabbar/class-active.png',
            tabName: '分类',
            tabColor: '#e89abe',
            tabPath: '/category'
          },{
            tabIcon: '@/assets/images/tabbar/shop.png',
            iconActive: '@/assets/images/tabbar/shop-active.png',
            tabName: '购物车',
            tabColor: '#e89abe',
            tabPath: '/cart'
          },{
            tabIcon: '@/assets/images/tabbar/profile.png',
            iconActive: '@/assets/images/tabbar/profile-active.png',
            tabName: '我的',
            tabColor: '#e89abe',
            tabPath: '/profile'
          }
        ]
      }
    },
    components: {
      TabBarItem,
      TabBar
    }
  }
</script>

<style scoped>

</style>