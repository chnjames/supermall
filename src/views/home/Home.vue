<template>
  <div id="home">
    <nav-bar class="home-nav">
      <!--<template #navLeft>
        <div>返回</div>
      </template>-->
      <template #navCenter>
        <div>购物街</div>
      </template>
      <!--<template #navRight>
        <div>设置</div>
      </template>-->
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navBar/NavBar";
  import {getHomeMultidata} from "../../request/api";

  export default {
    name: "Home",
    components: {NavBar},
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      // 1.请求多个数据
      getHomeMultidata().then(res => {
        console.log(res.data);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style lang="scss" scoped>
  .home-nav{
    background-color: #ff8e97;
    color: #FFFFFF;
  }
</style>