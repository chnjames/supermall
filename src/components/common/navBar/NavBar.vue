<template>
  <div class="nav-bar">
    <div class="nav-left">
      <slot name="navLeft"></slot>
    </div>
    <div class="nav-center">
      <slot name="navCenter"></slot>
    </div>
    <div class="nav-right">
      <slot name="navRight"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style lang="scss" scoped>
 .nav-bar{
   display: flex;
   height: 44px;
   line-height: 44px; // 如果只写这个这个属性必须有内容才显示
   text-align: center;
   box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
   .nav-left,.nav-right{
     width: 60px;
   }
   .nav-center{
     flex: 1;
   }
 }
</style>