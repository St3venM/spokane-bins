<template>
  <div>
    <TopNav class="top-nav"></TopNav>
    <HomePage></HomePage>
    <BottomNav></BottomNav>
  </div>
  
</template>

<script>
  import TopNav    from './components/nav-bars/TopNav.vue'
  import BottomNav from './components/nav-bars/BottomNav.vue'
  import HomePage  from './components/HomePage.vue'
  
export default {
  name: 'App',
  components: {
    TopNav,
    BottomNav,
    HomePage,
  },
}
</script>

<style>
  .top-nav {
    /* position: fixed; */
  }
</style>
