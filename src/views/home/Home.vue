<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control class="tab-control" 
        :titles="['流行','新款','精选']" 
        @tabClick = "tabClick"
        ref="tabControl1" v-show="isTabFixed"/>
    <scroll class="content" 
    ref="scroll" 
    :probe-type="3" 
    @scroll="contentScroll" 
    :pull-up-load = "true" 
    @pullingUp = "loadMore">
      <home-swiper :banners="banners" @swiperImageLoad = "swiperImageLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view />
      <tab-control :titles="['流行','新款','精选']" 
        @tabClick = "tabClick"
        ref="tabControl2" />
      <goods-list :goods="showGoods" />
    </scroll>
    <!-- 组件不能直接监听点击，如果要监听，需要在事件名后加.native -->
    <back-top @click.native="backClick" v-show = "isShowBackTop"/>
  </div>
</template>

<script>
  // 子组件
  import HomeSwiper from './childComps/HomeSwiper.vue'
  import RecommendView from './childComps/RecommendView.vue'
  import FeatureView from './childComps/FeatureView.vue'
  // 公共组件
  import NavBar from 'components/common/navbar/NavBar.vue'
  import TabControl from 'components/content/tabControl/TabControl.vue'
  import GoodsList from 'components/content/goods/GoodsList.vue'
  import Scroll from 'components/common/scroll/Scroll.vue'
  // js代码（方法）导入
  import {getHomeMultidata,getHomeGoods} from 'network/home.js'
  import {itemListenerMixin,backTopMixin} from 'common/mixin.js'



  export default {
    name:'Home',
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
    },
    mixins: [itemListenerMixin,backTopMixin],
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0,
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    // 活跃非活跃，只有使用keep-alive时才出现
    activated() {
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      // 1，保存Y值
      this.saveY = this.$refs.scroll.getScrollY()

      // 2，取消全局事件的监听
      this.$bus.$off('itemImgLoad',this.itemImgListener)
    },
    // created中最好只留业务相关的东西，所以这里再methods中再进行封装
    created() {
      // 1,请求多个数据
      // 函数调用 -> 压入函数栈（保存函数调用过程中所有变量）
      // 函数调用结束 -> 弹出函数栈（释放函数所有的变量）
      // 请求banner数据
      this.getHomeMultidata()
      // 2，请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {
    },
    methods: { 
     /*
      事件监听相关的方法
      */ 
      tabClick(index) {
        // console.log(index)
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      contentScroll(position) {
        // 1,判断BackTop是否显示
        this.isShowBackTop = (-position.y) > 1000
        
        // 决定tabControl是否吸顶（position： fixed）
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
      // 2，赋值(所有组件都有一个属性$el，用来获取组件中的元素)
      // this.tabOffsetTop = this.$refs.tabControl.offsetTop
      swiperImageLoad() {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      },

      /*
      网络监听相关的方法
      */
      getHomeMultidata() {
        getHomeMultidata().then((res) => {
          // this.result = res
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
          // console.log(res)
          // for (let n of res) {
          //   this.goods.pop.list.push(n)
          // }
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>


<style scoped>
/* scoped为作用域，设置了scoped后，则样式只对当前页面元素起作用 */
  #home {
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background: var(--color-tint);
    color: #FFFFFF;
    /* 在使用原生滚动时，为了不让导航不跟随一起滚动 */
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }

  .content {
    /* height: 300px; */
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  /* .content {
    css3中的属性calc可设置相对父元素的百分比高度 
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
  } */
  .tab-control {
    position: relative;
    z-index: 9;
  }
</style>
