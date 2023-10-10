<template>
  <TopNav></TopNav>
  <HomePage></HomePage>
  <BottomNav></BottomNav>
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
  .logo {
    max-width: 50%;
    max-height: 50%;
  }
</style>
