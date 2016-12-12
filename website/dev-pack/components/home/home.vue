<template>
    <section class="home" v-bind:style="{height:clientVal.height+'px'}">
        {{demoData}}
    </section>
</template>
<script>
    export default {
        props:['demoData'],
        //    父组件数据{{demoData}}
        data(){
            return {
                clientVal: {}
            }
        },
        created:function(){
            console.log('Home is Ok');
            this.fetchData();
        },
        methods:{
            fetchData:function(){
                this.clientVal = {
                    width:(document.body.clientWidth || document.documentElement.clientWidth),
                    height:(document.body.clientHeight || document.documentElement.clientHeight)
                }
                console.log('Home Data is OK');

            }
        }

    }
</script>
<style lang="sass" rel="stylesheet/scss" type="text/css">
    .home{
        background: url("/website/dist/image/index/working-on-laptop.jpg") no-repeat center center/cover;
        min-height: 400px;
    }
</style>