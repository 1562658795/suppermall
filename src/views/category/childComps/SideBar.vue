<template>
    <div class="sidebar">
        <scroll class="sidebar-scroll">
            <ul class="sidebar-box" v-for="(item,index) in categoryDate" :key="index">
                <li :class="{active:isActive === index}" @click="setisActive(index)">{{item.title}}</li>
            </ul>
        </scroll>
      
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
export default {
    name: 'SideBar',
    components: {
        Scroll,
    },
    data() {
        return {
            isActive: 0,
        }
    },
    props: {
        categoryDate: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        setisActive(index) {
            this.isActive = index;
            this.$emit('activeBar',index)
        }
    }
}
</script>

<style scoped>
    .sidebar {
        height: 100vh;
    }
    .sidebar-box {
        list-style: none;
        /* width: 80px; */
        text-align: center;
        background: #f6f6f6
    }
    .sidebar-box li {
        height: 40px;
        line-height: 40px;
    }
    .sidebar-scroll {
        height: calc(100% - 49px - 44px);
    }
    .active {
        background: #fff;
        color: var(--color-tint);
        font-weight: 600;
        border-left: solid 3px #f00;
    }
</style>