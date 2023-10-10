<template>
    <div class="container">
        <span class="top-word">
            Spokane
        </span>
        <span class="bottom-word">
            bins
        </span>
    </div>
</template>
  
<script>

export default {
    name: 'SpokaneBinsLogo',
    components: {},
}
</script>

<style scoped lang="scss">
    .container {
        font-family: var(--primary-font); 

        span {
            display: block;
            text-align: left;
        }
        .top-word {
            margin-bottom: 0;
            padding-bottom: 0;
        }
        .bottom-word {
            margin-top: 0;
            padding-top: 0;
            font-weight: var(--heavy-font-weight);
            font-size: 6em;
            font-style: normal;
        }
    }
</style>