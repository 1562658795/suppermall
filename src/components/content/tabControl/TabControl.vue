
<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in titles"
      :key="item"
      class="tab-control-item"
      :class="{active:index===currentInde}"
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentInde: 0,
    };
  },
  methods:{
      itemClick(index){
          this.currentInde=index;
          this.$emit("tabClick",index)
      }
  }
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  text-shadow: 3px -3px #ccc;
  color: rgba(0, 0, 0, 0.6);
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-high-text);
}
.tab-control span {
  padding: 5px;
}
</style>