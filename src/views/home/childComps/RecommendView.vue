<template>
  <div>
      <div class="recommend">
          <div v-for="item in recommends" :key="item.title" class="recommend-item">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                    <div>{{item.title}}</div>
                </a>
          </div>
      </div>
  </div>
</template>

<script>
export default {
name:"RecommendView",
props:{
    recommends:{
        type:Array,
        default(){
            return []
        }
        }
}
}
</script>

<style scoped>
.recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 15px 0 30px;
    border-bottom: 8px solid #eee;
}
.recommend-item{
        flex: 1;
    }
 .recommend-item img{
     margin: 5px;
     width: 90%;
     padding-bottom: 8px;
    }
</style>