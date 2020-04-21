import merge from 'lodash/merge';       //todo 了解
import ws from './website';

const website = merge({}, window.$website || {}, ws);

export {
    website
}

export default {
    install(Vue) {
        Object.defineProperty(Vue.prototype, '$website', {
            value: website
        })
    }
}
