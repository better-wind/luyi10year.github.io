<template>
    <section class="about" v-bind:style="{height:clientVal.height+'px'}">
        {{msg}}
    </section>
</template>
<script>
    export default {
        data(){
            return {
                clientVal: {},
                msg:'No more ....'
            }
        },
        created:function(){
            console.log('ABOUT is Ok');
            this.fetchData();
        },
        methods:{
            fetchData:function(){
                this.clientVal = {
                    width:(document.body.clientWidth || document.documentElement.clientWidth),
                    height:(document.body.clientHeight || document.documentElement.clientHeight)
                }
                console.log('About Data is OK');
            }
        }

    }
</script>
<style lang="sass" rel="stylesheet/scss" type="text/css">
    .about{
        background-color: rgb(255,0,255);
        min-height: 400px;
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 400px;
        text-align: center;
    }
</style>