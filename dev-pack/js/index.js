import '../style/common/reset.scss'
import '../style/index.scss'
import Vue from 'vue'
import App from '../components/app.vue'
new Vue({
    el: 'App',
    render: (createElement) => {
        return createElement(App,{
            props:{

            }
        })
    },
    created:function(){

    }
});