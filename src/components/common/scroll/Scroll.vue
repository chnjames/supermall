<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import PullUp from '@better-scroll/pull-up'
  BScroll.use(PullUp)
  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.$nextTick(() => {
        const wrapper = this.$refs.wrapper
        this.scroll = new BScroll(wrapper, {
          scrollY: true,
          click: true,
          probeType: 3,
          pullUpLoad: true
        })
        console.log(this.scroll)
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>