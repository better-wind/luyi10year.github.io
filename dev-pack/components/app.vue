<template>
    <div class="app">
        <HeaderNav></HeaderNav>
        <section>
            <Home :demoData="demoData"></Home>
            <About></About>
        </section>

    </div>
</template>
<script>
    import HeaderNav from './header/header.vue'
    import Home from './home/home.vue';
    import About from './about/about.vue'
    export default {
        data(){
          return {
              demoData:'Man,I believe I can fly!',
          }
        },
        components:{
            Home,
            HeaderNav,
            About
        }
    }
</script>