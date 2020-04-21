import Axios from 'axios';

const baseUrl =  window.$website && window.$website.baseUrl ?  window.$website.baseUrl : '';
const axios = Axios.create({
    //请求配置项
    baseURL: baseUrl,    //  todo
    timeout: 20000,
    responseType: 'json',
    withCredentials: false, //表示跨域请求时是否需要使用凭证     是否允许 带 cookie 这些
    headers:{
        "X-Requested-With": "XMLHttpRequest",
        'Content-Type': 'application/json;charset=utf-8',
        // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    showModal: true,    //显示loading的配置，默认true显示，false不显示
    showError: true,    //是否弹框显示ajax请求的错误信息
})

export const request = axios;   //抛出接口请求方法