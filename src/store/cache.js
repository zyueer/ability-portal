/*
缓存管理插件，用于自动触发所有模块的缓存清理方法
清理缓存只需要触发store里面的清理方法就可以清理各个子模块的清理方法
需要地洞清理缓存的模块只需要在mutations里面添加 CLEAR 方法即可
* */
import module from './module/index'

export default function cachePlugin() {
    return store => {
        store.subscribe((mutation) => {
            if(mutation.type !== 'CLEAR'){
                return
            }
            Object.keys(module).forEach(key=>{
                if(module[key].mutations && module[key].mutations.CLEAR){
                    store.commit(key+'/CLEAR')
                }
            })
        })
    }
}