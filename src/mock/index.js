import {website} from "src/config/env";

//开发环境 并且 mock=true  才引入mock数据
process.env.NODE_ENV === 'development' && website.mock ? (function(){
    require('./login/index')
})() : {};