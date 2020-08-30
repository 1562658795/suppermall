<template>
  <div class="userdetailitem">
    <div class="message">
      <div class="usermessage">
        <span class="usermessage-num">{{usermessage.num}}</span>
        <span class="usermessage-unit">{{usermessage.unit}}</span>
      </div>
      <div class="usermessage-title">{{usermessage.title}}</div>
    </div>
  </div>
</template>

<script>
import {getFloattwo} from 'common/utils.js'
export default {
  name: 'UserDetailItem',
  props: {
    usermessage: {
      type: Object,
      default: {}
    }
  },
  computed: {
    // 展示0.00（四舍五入，保留两位小数）
    getnum() {
      return getFloattwo(this.usermessage.num)
    }
  }
}
</script>

<style scoped>
  .userdetailitem {
    width: 100%;
    /* height: 80px; */
    text-align: center;
    /* background: #aaa4a4; */
    border-left: #f1ebeb solid 1px;
  }
  .message {
    position: relative;
    top: 50%;
    transform: translateY(-50%)
  }
  .usermessage-num {
    font-size: 23px;
    color: #f00;
    font-weight: 600;
    
  }
  .usermessage-unit {
    font-size: 13px;
  }
  .usermessage-title {
    font-size: 12px;
  }
</style>