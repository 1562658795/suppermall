<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick = "titleClick" ref="nav"/>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probeType=3>
        <!-- <ul v-for="(i,index) in $store.state.cartList" :key="index">
          <li>{{i}}</li>
        </ul> -->
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @detailImageLoad="detailImageLoad"/>
      <detail-params-info :param-info="paramInfo" ref="param"/>
      <detail-comment-info :commentInfo="commentInfo" ref="comment"/> 
      <goods-list :goods="recommends" ref="recommend"/>
   
    </scroll>
    <detail-bottom-bar @addCart="addToCart"/>
    <back-top @click.native="backClick" v-show = "isShowBackTop"/>
    <!-- <toast :message="message" :show="show"></toast> -->
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamsInfo from './childComps/DetailParamInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
// import Toast from 'components/common/toast/Toast.vue'


import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail.js'
import {debounce} from 'common/utils'
import {itemListenerMixin,backTopMixin} from 'common/mixin.js'

import { mapActions } from 'vuex'

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    // Toast,
  },
  mixins: [itemListenerMixin,backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo:{},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
      // message: '',
      // show: false,
    }
  },
  created() {
    console.log(this.$store.state.cartList);
    // 1，保存传入的iid
    this.iid = this.$route.params.iid

    // 2，根据iid请求详情数据
    getDetail(this.iid).then(res => {
      // 1,获取顶部轮播数据
      const data = res.result
      this.topImages = data.itemInfo.topImages

      // 2，获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      // 3，创建店铺信息的对象
      this.shop = new Shop(data.shopInfo)

      // 4，保存商品的详情数据
      this.detailInfo = data.detailInfo

      // 5，获取商品的详情数据
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

      // 6，取出评论的信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
      // 第一次获取，值不对。
      // 原因：this.$refs.param.$el压根没有渲染
      // this.themeTopYs = []
      // this.themeTopYs.push(0);
      // this.themeTopYs.push(this.$refs.param.$el.offsetTop)
      // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      // console.log(this.themeTopYs);

      // this.$nextTick(() => {
      //   // 在dom渲染完成后，会回调一次$nextTick()这个函数
      //   // 2，,值依然不对，原因：dom渲染完成，但是内容还未加载完成
      //   this.themeTopYs = []
      //   this.themeTopYs.push(0);
      //   this.themeTopYs.push(this.$refs.param.$el.offsetTop)
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      //   console.log(this.themeTopYs);
      // })
    })

    // 3，请求推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list
    })
    // 4，给getThemeTopY赋值(对赋值的操作进行防抖)
      this.getThemeTopY = debounce(() =>  {
      this.themeTopYs = []
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.param.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)
    },300)
  },
  mounted() {
    console.log("detail");
  },
  updated() {
   
  },
  destroyed() {
    this.$bus.$off('itemImgLoad',this.itemImgListener)
  },
  methods: {
    // 除getters中的方法可以映射外，actions中的方法也可以映射
    ...mapActions(['addCart']),
    // 这里通过mixin（混入）的方式，来取到防抖函数，进行优化
    detailImageLoad() {
      this.newRefresh()
      this.getThemeTopY()
      },
    titleClick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],100)
      },
    contentScroll(position) {
      // 1,获取y值
      const positionY = - position.y
      // 2，positionY和主题中的值进行对比
      // console.log(Number.MAX_VALUE);
      let length = this.themeTopYs.length
      for (let i =0 ; i < length - 1; i++) {
        // if (positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) {
        //   console.log(i)
        // }
        if (this.currentIndex !== i && (positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i+1])) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
        // if (this.currentIndex !== i && ((i < length - 1 && positionY >= this.themeTopYs[i] && 
        //   positionY < this.themeTopYs[i+1]) || 
        //  (i === length - 1 && positionY >= this.themeTopYs[i]))) {
        //    this.currentIndex = i
        //    this.$refs.nav.currentIndex = this.currentIndex
        //  }
      }
      // 是否显示回到顶部
      this.isShowBackTop = (-position.y) > 1000
    },
    addToCart() {
      // 1,获取商品信息（购物车中需要展示的）
      const product = {}
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      // 2,将商品添加到购物车
      // this.$store.cartList.push(product)
      // this.$store.commit('addCart',product)
      // this.$store.dispatch('addCart',product).then(res => {
      //   console.log(res)
      // })
      this.addCart(product).then(res => {
        // this.show = true;
        // this.message = res;
        // console.log(res);

        // setTimeout(() => {
        //   this.show = false;
        //   this.message = '';
        // },1500)
        this.$toast.show(res,2000)
        console.log(res)

      })
    }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 1;
    background-color: #ffffff;
    height: 100vh;
  }
  .detail-nav {
    position: relative;
    z-index: 2;
    background-color: #ffffff;
    
  }
  .content {
    /* calc(100%),父元素的百分百高度 */
    height: calc(100% - 44px - 49px);
  }
</style>