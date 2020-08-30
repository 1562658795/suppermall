<template>
  <div class="profile">
    <nav-bar class="profile-navbar"><div slot="center">我的</div></nav-bar>
    <profile-login></profile-login>
    <user-detail>
      <user-detail-item v-for="(item,index) in usermessage" :key="index" :usermessage=item></user-detail-item>
    </user-detail>
    <profile-set></profile-set>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  import ProfileLogin from './childComps/ProfileLogin.vue'
  import UserDetail from './childComps/UserDetail'
  import UserDetailItem from './childComps/UserDetailItem'
  import ProfileSet from './childComps/ProfileSet'

  export default {
    name:'Profile',
    components: {
      NavBar,
      ProfileLogin,
      UserDetail,
      UserDetailItem,
      ProfileSet
    },
    data() {
      return {
        usermessage: [
          {num: '0.00',unit:'元',title:'我的余额'},
          {num: 0,unit:'个',title:'我的优惠'},
          {num: 0,unit:'分',title:'我的积分'}
        ]
      }
    }
  }
</script>

<style scoped>
  .profile {
    height: 100vh;
  }
  .profile-navbar {
    background: var(--color-tint);
    color: #fff;
    /* font-weight: 500; */
  }
</style>
