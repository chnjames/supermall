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
    props: {
      /**
       * 纵向滚动事件
       */
      scrollY: {
        type: Boolean,
        default: true
      },
      /**
       * 1 滚动的时候会派发scroll事件，会截流。
       * 2 滚动的时候实时派发scroll事件，不会截流。
       * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
       */
      probeType: {
        type: Number,
        default: 1
      },
      /**
       * 点击列表是否派发click事件
       */
      click: {
        type: Boolean,
        default: true
      },
      /**
       * 是否开启横向滚动
       */
      scrollX: {
        type: Boolean,
        default: false
      },
      /**
       * 是否派发滚动事件
       */
      listenScroll: {
        type: Boolean,
        default: false
      },
      /**
       * 列表的数据
       */
      data: {
        type: Array,
        default() {
          return []
        }
      },
      /**
       * 是否派发滚动到底部的事件，用于上拉加载
       */
      pullUp: {
        type: Boolean,
        default: false
      },
      /**
       * 是否派发顶部下拉的事件，用于下拉刷新
       */
      pullDown: {
        type: Boolean,
        default: false
      },
      /**
       * 是否派发列表滚动开始的事件
       */
      beforeScroll: {
        type: Boolean,
        default: false
      },
      /**
       * 当数据更新后，刷新scroll的延时。
       */
      refreshDelay: {
        type: Number,
        default: 20
      }
    },
    mounted() {
      // 保证在DOM渲染完毕后初始化better-scroll
      setTimeout(() => {
        this._initScroll()
      }, 20)
    },
    methods: {
      _initScroll() {
        const wrapper = this.$refs.wrapper
        const options = {
          scrollY: this.scrollY,
          click: this.click,
          probeType: this.probeType,
          pullUpLoad: this.pullUpLoad, // 上拉加载
        }
        if(!wrapper) return
        // better-scroll的初始化
        this.scroll = new BScroll(wrapper, options)
        // 是否派发滚动事件
        if(this.listenScroll) {
          this.scroll.on('scroll', (position) => {
            this.$emit('scroll', position)
          })
        }
        // 是否派发滚动到底部事件，用于上拉加载
        if(this.pullUp) {
          this.scroll.on('scrollEnd', () => {
            // 滚动到底部
            if(this.scroll.y <= (this.scroll.maxScrollY + 49)) {
              this.$emit('scrollToEnd')
            }
          })
        }
        // 是否派发顶部下拉事件，用于下拉刷新
        if (this.pullDown) {
          this.scroll.on('scroll', (position) => {
            // 下拉动作
            if (position.y > 49) {
              this.$emit('pullDown')
            }
          })
        }
        // 是否派发列表滚动开始的事件
        if (this.beforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit('beforeScroll')
          })
        }
      },
      disable() {
        // 代理better-scroll的disable方法
        this.scroll && this.scroll.disable()
      },
      enable() {
        // 代理better-scroll的enable方法
        this.scroll && this.scroll.enable()
      },
      refresh() {
        // 代理better-scroll的refresh方法
        this.scroll && this.scroll.refresh()
      },
      scrollTo() {
        // 代理better-scroll的scrollTo方法
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        // 代理better-scroll的scrollToElement方法
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      }
    },
    watch: {
      // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
      data() {
        setTimeout(() => {
          this.refresh()
        }, this.refreshDelay)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>