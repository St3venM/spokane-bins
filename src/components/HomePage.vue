<template>
  <div class="background-image">
    <div class="logo-container">
      <SpokaneBinsLogo class="logo"/>
    </div>
  </div>
</template>

<script>
import SpokaneBinsLogo from '@/components/shared/SpokaneBinsLogo.vue'

export default {
  name: 'HomePage',
  components: {
    SpokaneBinsLogo,
  },
  props: {},
  data() {
    return {
      
      MESSAGE: 'WELCOME TO SPOKANE BINS!'
    }
  },
}
</script>

<style scoped lang="scss">
  .background-image {
    background-image: url('@/assets/images/backgrounds/background2.png');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    min-height: 100vh;

    .logo-container {
      padding-top: 5em;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }


</style>
