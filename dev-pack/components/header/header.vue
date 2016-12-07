<template>
    <header>
        <div class="nav-view">
            <nav>
                <ul>
                    <li v-on:click="onClick" v-for="item in items">
                        {{item}}
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
<script>
    export default {
        data(){
            return {
                items:['HOME','SERVICES','ABOUT','BLOG']
            }
        },
        methods:{
            onClick:function(){
                console.log('click');
            }
        },
        created:function(){
            console.log('Header is Ok');
        }
    }
</script>
<style lang="sass" rel="stylesheet/scss" type="text/css">
    header{
        position: relative;
        .nav-view{
            position: fixed;
            width: 100%;
            height: 80px;
            -webkit-transition-duration: .5s;
            -moz-transition-duration: .5s;
            -o-transition-duration: .5s;
            transition-duration: .5s;
            /*background-color: rgba(0,0,0,.5);*/
            nav{
                max-width: 980px;
                margin:0 auto;
                height: 100%;
                ul{
                    color: rgb(255,255,255);
                    text-align: right;
                    font-size: 14px;
                    font-weight: 400;
                    letter-spacing: 1px;
                    li{
                        padding: 5px 15px;
                        display: inline-block;
                    }
                }
            }
        }
    }
</style>