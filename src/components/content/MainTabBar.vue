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
  import TabBar from "../common/tabBar/TabBar";
  import TabBarItem from "../common/tabBar/TabBarItem";
  export default {
    name: "MainTabBar",
    data() {
      return {
        tabBar: [
          {
            tabIcon: 'https://img.icons8.com/material-outlined/24/000000/home--v2.png',
            iconActive: 'https://img.icons8.com/color/48/000000/home.png',
            tabName: '首页',
            tabColor: 'blue',
            tabPath: '/home'
          },{
            tabIcon: 'https://img.icons8.com/material-outlined/24/000000/home--v2.png',
            iconActive: 'https://img.icons8.com/color/48/000000/home.png',
            tabName: '分类',
            tabColor: 'blue',
            tabPath: '/category'
          },{
            tabIcon: 'https://img.icons8.com/material-outlined/24/000000/home--v2.png',
            iconActive: 'https://img.icons8.com/color/48/000000/home.png',
            tabName: '购物车',
            tabColor: 'blue',
            tabPath: '/cart'
          },{
            tabIcon: 'https://img.icons8.com/material-outlined/24/000000/home--v2.png',
            iconActive: 'https://img.icons8.com/color/48/000000/home.png',
            tabName: '我的',
            tabColor: 'blue',
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