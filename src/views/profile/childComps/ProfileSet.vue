<template>
  <div class="profileset">
    <div class="profileset-vip">
      <div class="profileset-item">
        <img src="~assets/img/profile/message.svg" alt="">
        <span>我的消息</span>
      </div>
      <div class="profileset-item">
        <img src="~assets/img/profile/shopping.svg" alt="">
        <span>积分商城</span>
      </div>
      <div class="profileset-item">
        <img src="~assets/img/profile/vip.svg" alt="">
        <span>会员卡</span>
      </div>
    </div>

    <div class="profileset-cart">
      <div class="profileset-item">
        <img src="~assets/img/profile/cart.svg" alt="">
        <span>我的购物车</span>
      </div>
      <div class="profileset-item">
        <img src="~assets/img/profile/pointer.svg" alt="">
        <span>下载购物APP</span>
      </div>
    </div>

    <div class="profileset-more">
      <div class="profileset-item">
        <img src="~assets/img/profile/set.svg" alt="">
        <span>设置</span>
      </div>
      <div class="profileset-item">
        <img src="~assets/img/profile/more.svg" alt="">
        <span>更多</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileSet',

}
</script>

<style scoped>
  .profileset {
    width: 100vw;
    height: calc(100vh - 44px - 80px - 100px);
    background: #f2f2f2;
  }
  .profileset-vip {
    position: relative;
    top: 12px;
    /* margin-top: 20px; */
  }
  .profileset-cart {
    position: relative;
    top: 24px;
  }
  .profileset-more {
    position: relative;
    top: 36px;
  }
  .profileset-item {
    width:100%;
    height: 40px;
    background: #fff;
  }
  .profileset-item img{
    width: 23px;
    height: 23px;

    position: relative;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);

  }
  .profileset-item span {
    position: relative;
    left: 30px;;
  }
</style>