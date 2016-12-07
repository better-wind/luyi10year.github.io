<template>
    <div class="app">
        <Header></Header>
        <section>
            <Home :clientVal="clientVal"></Home>
        </section>

    </div>

</template>
<script>
    import Header from './header/header.vue'
    import Home from './home/home.vue';
    export default {
        data(){
          return {
              clientVal: {
                  width:(document.body.clientWidth || document.documentElement.clientWidth),
                  height:(document.body.clientHeight || document.documentElement.clientHeight)
              }
          }
        },
        components:{
            Home,
            Header
        }
    }
</script>