import Vue from 'vue'
import router from "../../router/login"
import store from 'src/store/store'
import 'src/mock/index'

import index from './index.vue'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'




Vue.use(ElementUI)

new Vue({
   store,
   router,
   render: h=>h(index),
}).$mount('#app');