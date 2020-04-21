import Vue from 'vue'
import Vuex from 'vuex'
import vuexPersistedState from 'vuex-persistedstate'

import module from './module/index'
import getters from "./getters";
import cachePlugin from './cache'
// import storePlugin from './store-plugin'

Vue.use(Vuex)

var store = new Vuex.Store({
    state:{},
    mutations:{ //方法

    },
    actions:{},
    modules: module,
    getters: getters,
    strict: process.env.NODE_ENV !== 'production', //开发模式下不启用严格模式
    plugins:[
        vuexPersistedState({
            // 定义需要缓存状态的模块
            paths:[
                // 'tags',
                'user',
                // 'dict'
            ]
        }),
        cachePlugin()
    ]
});

// storePlugin(store)

export default store;