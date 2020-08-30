<template>
  <div class="detailshow">
    <scroll class="detailshow-scroll">
      <div class="detailshow-item">
        <slot class="item"></slot>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
export default {
  name: 'Detailshow',
  components: {
    Scroll,
  }
}
</script>

<style scoped>
  .detailshow {
    /* border: solid 2px #f00; */
    height: 100vh;
    display: flex;
  }
  .detailshow-scroll {
    height: calc(100% - 49px - 44px);
  }
  .detailshow-item {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .item {
    flex: 1;
  }
</style>