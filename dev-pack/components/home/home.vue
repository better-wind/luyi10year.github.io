<template>
    <section class="home" v-bind:style="{height:clientVal.height+'px'}">
    </section>
</template>
<script>
    export default {
        props:['clientVal'],

    }
</script>
<style lang="sass" rel="stylesheet/scss" type="text/css">
    .home{
        background: url("/dist/image/index/working-on-laptop.jpg") no-repeat center center/cover;
        min-height: 400px;
    }
</style>