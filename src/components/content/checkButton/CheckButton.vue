<template>
  <div class="check-button" :class="{check:isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'CheckButtom',
  props: {
    isChecked: {
      type:Boolean,
      default() {
        return false
      }
    }
  }
}
</script>

<style scoped>
  .check-button {
    border-radius: 50%;
    border: 2px solid #aaa;
  }
  .check {
    border-color: red;
    background: red;
  }
</style>