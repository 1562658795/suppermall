<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
// 第三方插件
import BScroll from "better-scroll";
export default {
  props: {
    //侦测 0和1都是不侦测,2手指离开后的惯性滚动过程中不侦测, 3，只要是滚动都侦测
    probeType: {
      type: Number,
      default: 0
    },
    // bindToWrapper: true,//手指离开不在滚动
    //点击
    click: {
      type: Boolean,
      default: true
    },
    //上拉
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    //下拉
    pullDownRefresh: {
      type: Object,
      default: () => {
        // threshold: 50;
        // stop: 0;
      }
    },
    //鼠标滚轮
    mouseWhell: {
      type: Boolean,
      default: false
    } //
  },
  name: "Scroll",
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    //document.querySelector(".content")
    //this.$refs.wrapper
    //创建scroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: this.click,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      pullDownRefresh: this.pullDownRefresh,
      mouseWhell: this.mouseWhell
    });
    console.log(this.scroll);
    //监听滚动
    if (this.probeType === 2 || this.probeType == 3) {
      this.scroll.on("scroll", positon => {
        //console.log(positon);
        this.$emit("scroll", positon);
      });
    }

    //下拉加载更多
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
    }
    
  },

  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      setTimeout(() => {
        this.scroll.finishPullUp();
      }, 2000);
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    getScrollY(){
      console.log(this.scroll.y);
      return this.scroll?this.scroll.y:0
    }
  }
};
</script>

<style scoped></style>
