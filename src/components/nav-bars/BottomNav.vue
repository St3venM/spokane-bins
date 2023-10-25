<template>
    <footer>
        <div class="icons-container">
        <object 
            class="icon" 
            :data="require('@/assets/icons/instagram.svg')" 
            type="image/svg+xml" 
        />
        <object 
            class="icon" 
            :data="require('@/assets/icons/facebook.svg')" 
            type="image/svg+xml"
        />
        </div>
    </footer>
</template>
  
<script>

export default {
    name: 'BottomNav',
    components: {}
}
</script>

<style scoped lang="scss">
    .icons-container {
        display: flex;
        align-items: center;

        .icon {
            width: 4em;
            height: 4em;
            margin: 0.5em;
        }
    }
</style>