<template>
    <header>
        <div v-bind:class="['nav-view',fixed ? 'nav-fixed' : '']">
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
                items:['HOME','SERVICES','ABOUT','BLOG'],
                fixed:false
            }
        },
        methods:{
            onClick:function(e){
                console.log(e);
            },
            scrollNav:function(){
                let self = this;
//                let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame ||
//                    function(callback) {
//                        setTimeout(callback, 1000 / 60);
//                    };
//                requestAnimationFrame(function(){
//                    if(document.body.scrollTop > 100){
//                        self.fixed = true;
//                    }
//                    else{
//                        self.fixed = false;
//                    }
//                });

                window.onscroll = function(){
                    if(document.body.scrollTop > 100){
                        self.fixed = true;
                    }
                    else{
                        self.fixed = false;
                    }
                }
            },
        },
        created:function(){
            console.log('Header is Ok');
            this.scrollNav();
        }
    }
</script>
<style lang="sass" rel="stylesheet/scss" type="text/css">
    header{
        position: relative;
        .nav-view{
            position: fixed;
            width: 100%;
            padding: 20px 0;
            font-size: 14px;
            font-weight: 400;
            letter-spacing: 1px;
            -webkit-transition-duration: .5s;
            -moz-transition-duration: .5s;
            -o-transition-duration: .5s;
            transition-duration: .5s;
            &.nav-fixed{
                background-color: rgba(0,0,0,.5);
                padding: 15px 0;
                font-size: 12px;
            }
            nav{
                max-width: 980px;
                margin:0 auto;
                height: 100%;
                ul{
                    color: rgb(255,255,255);
                    text-align: right;
                    li{
                        padding: 5px 15px;
                        display: inline-block;
                    }
                }
            }
        }
    }
</style>