<template>
  <div class="userdetail">
    <slot class="user-detail-item"></slot>
  </div>
</template>

<script>
export default {
    name: 'UserDetail'
}
</script>

<style scoped>
  .userdetail {
    width: 100%;
    /* background: #cfb9b9; */
    height: 80px;
    display: flex;
  }
  .user-detail-item {
    flex: 1;
  }
  .userdetail > div:first-child {
    border-left: none;
  }
</style>