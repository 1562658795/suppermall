<template>
  <div class="detailshowitem">
      <a :href="categoryDateil.link">
        <img :src="categoryDateil.image" alt="">
        <div>
          <span>{{categoryDateil.title}}</span>
        </div>
      </a>
  </div>
</template>

<script>
export default {
  name: 'DetailshowItem',
  props: {
    categoryDateil: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  created() {
  //  console.log(this.categoryDateil)
  }
}
</script>

<style scoped>
  .detailshowitem {
    width: 90px;
    height: 90px;
    text-align: center;
    margin-top: 20px;
  }
  .detailshowitem img {
    width: 70px;
    height: 70px;
  }
  detailshowitem div {
    text-align: center;
  }
  .detailshowitem span {
    font-size: 12px;
  }
</style>