<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script scoped>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "HomeSwiper",
  data() {
    return {
      isLoad:false
    }
  },
  props: {
    banners: Array,
    default() {
      return [];
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imageLoad(){
      if (!this.isLoad) {
        this.$emit("swiperImageLoad")
        this.isLoad=true
      }
      
    }
  }
};
</script>

<style></style>
