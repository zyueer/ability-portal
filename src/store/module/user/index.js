import {Message} from "element-ui";
import {loginByUserName} from 'src/request/login/index'
import {setToken, removeToken, setRefreshToken, removeRefreshToken} from 'src/utils/auth'

const user = {
 namespaced: true,
 state:{
  userInfo: {},
  token: '',
  refreshToken: '',
  },
 getters:{

 },
 mutations:{
    SET_TOKEN: (state, data)=>{
        if(data && data.token){
            setToken( data.token)
            state.token = data.token
        }else{
            state.token = '';
            removeToken();
        }
    },
     SET_REFRESH_TOKEN: (state, data)=>{
         if(data && data.token){
             setRefreshToken( data.token)
             state.refreshToken = data.token
         }else{
             state.refreshToken = '';
             removeRefreshToken();
         }
     },
     SET_USER_INFO: (state, userInfo)=>{
        Object.keys(userInfo).forEach(key=>{
            state.userInfo[key] = userInfo[key]
        })
     },
 },
 actions:{
  //根据  用户名/密码  登录
  LoginByUserName({commit}, userInfo){
    return new Promise((resolve, reject)=>{
      loginByUserName(userInfo).then(res=>{
        const data = res.data;
        if(data.message !== 'success'){
          return Message({
           message: data.message,
           type: "error"
          })
        }
        commit('SET_TOKEN', {token: data.data.access_token});
        commit('SET_REFRESH_TOKEN', {token: data.data.refresh_token});
        commit('SET_USER_INFO', data.data);
        window.location.href = window.location.protocol +'//'+ window.location.host + '/main.html#/main';
      }).catch(err=>{
         reject(err);
      })
    })
  }
 }
}

export default user