<template>
  <div class="category">
      <nav-bar class="category-navbar"><div slot="center">分类</div></nav-bar>
      <div class="category-detail">
      <side-bar :categoryDate="categoryDate" @activeBar='setCategoryDetail' class="side-bar"></side-bar>
        <detailshow class="detailshow">
          <detailshow-item v-for="(item,index) in categoryDateil" :key="index" :categoryDateil="item"></detailshow-item>
        </detailshow>
      </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import SideBar from './childComps/SideBar.vue'
  import Detailshow from './childComps/Detailshow'
  import DetailshowItem from './childComps/DetailshowItem'

  import {getCategory,getCategoryDetail} from 'network/category.js'

  export default {
    name:'Catefory',
    components: {
      NavBar,
      SideBar,
      Detailshow,
      DetailshowItem
    },
    data() {
      return {
        categoryDate: [],
        maitKey: '',
        categoryDateil: [],
      }
    },
    methods: {
      //  接收bar点击后的index，以便查询maitKey值
      setCategoryDetail(index) {
        this.maitKey = this.categoryDate[index].maitKey
        // console.log(this.maitKey)
         getCategoryDetail(this.maitKey).then(res => {
        this.categoryDateil = res.data.list
        // console.log(this.categoryDateil);
      })
      }
    },
    mounted() {
      // 获取分类title等数据
      getCategory().then(res => {
        this.categoryDate = res.data.category.list
        // console.log(this.categoryDate);  

      // 获取分类详情数据
      this.maitKey = this.categoryDate[0].maitKey
      getCategoryDetail(this.maitKey).then(res => {
        this.categoryDateil = res.data.list
        // console.log(this.categoryDateil);
      })
    })
      
  }
}
</script>

<style scoped>
  .category {
    height: 100vh;
  }
  .category-navbar {
    background: var(--color-tint);
    color: #fff;
  }
  .category-detail {
    display: flex;
    overflow: hidden;
    width: 100vw;
    height: calc(100% - 44px - 49px);
  }
  .side-bar {
    width: 30vw;
  }
  .detailshow {
    width: 80vw;
  }
</style>
