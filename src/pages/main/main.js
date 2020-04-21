import Vue from 'vue'
import router from "../../router/main"
import store from 'src/store/store'
import 'src/mock/index'

import index from './main.vue'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'




Vue.use(ElementUI)

new Vue({
    store,
    router,
    render: h=>h(index),
}).$mount('#app');