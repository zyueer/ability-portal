import VueRouter from 'vue-router'
import Vue from 'vue'


Vue.use(VueRouter)

var router = new VueRouter({
    routes:[
        {
            path:'/login',
            name:'login',
            component: ()=> import('src/views/login/index')
        }
    ]
})
export default router