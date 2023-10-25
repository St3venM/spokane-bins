<template>
  <div class="container">
    <TopNav class="top-nav"></TopNav>
    <router-view></router-view>
    <BottomNav></BottomNav>
  </div>
  
</template>

<script>
  import TopNav    from './components/nav-bars/TopNav.vue'
  import BottomNav from './components/nav-bars/BottomNav.vue'
  
export default {
  name: 'App',
  components: {
    TopNav,
    BottomNav,
  },
}
</script>

<style scoped lang="scss">

.container {
  position: relative;

  .top-nav {
    position: fixed;
  }
}
  
</style>
