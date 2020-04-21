import Mock from 'mockjs';

var users = [
    {loginName: 'admin', password: 'admin', id: 1}
]

Mock.mock(/\/login/, 'post', function(option){
    console.log(option)
    var loginUser = JSON.parse(option.body);       //将一个 JSON 字符串转换为对象
    var user = users.find(u => {
        return u.loginName === loginUser.username && u.password === loginUser.password
    })

    if(user){
        return{
            code:'0',
            message:'success',
            data:{
                access_token:'access_token',
                refresh_token: 'access_token',
                account: 'admin',
                user_name: '管理员',
                user_id: '1234567890',
                nick_name: '管理员昵称',
                avatar:'',
                //...
            }
        }
    }else{
        return {
            code:'-1',
            message: '用户名或密码错误',
            data: {}
        }
    }
})