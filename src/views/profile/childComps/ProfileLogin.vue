<template>
  <div class="profilelogin">
    <img src="~assets/img/profile/avatar.svg" alt="" class="profileloginItem userimage">
    <div class="login profileloginItem">
      <div class="login-button">登录/注册</div>
      <div class="phonebind">
        <img src="~assets/img/profile/phone.svg" alt="">
        <span>暂无绑定手机号</span>
      </div>
    </div>
    <img src="~assets/img/common/arrow-left.svg" alt="" class="profileloginItem arrow-left">
  </div>
</template>

<script>
export default {
  name: 'ProfileLogin'
}
</script>

<style scoped>
  .profilelogin {
    height: 100px;
    background: var(--color-tint);
    /* display: flex; */
  }
  .profileloginItem {
    /* flex: 1; */
    float: left;
  }
  .userimage {
    width: 80px;
    height: 80px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 15px;
  }
  .login {
    color: #fff;
    font-size: 12px;
    width: 120px;
    height: 40px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 10px;
  }
  .login-button {
    font-weight: 500;
    font-size: 14px;
  }
  .login img {
    width: 20px;
    height: 18px;
  }
  .phonebind {
    width: 120px;
    height: 30px;
  }
  .phonebind span {
    position: relative;
    bottom: 5px;
    
  }
  .arrow-left {
    float: right;
    height: 15px;
    width: 15px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 15px;
  }
  
</style>