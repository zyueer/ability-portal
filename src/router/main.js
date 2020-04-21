import VueRouter from 'vue-router'
import Vue from 'vue'


Vue.use(VueRouter)

var router = new VueRouter({
    routes:[
        {
            path:'/main',
            name:'main',
            component: ()=> import('src/views/main/index')
        }
    ]
})
export default router