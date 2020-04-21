<template>
    <div class="login-container">
        <el-form class="login-form"
                 ref="loginForm"
                 :rules="loginRules"
                 :model="loginForm"
                 label-position="left"
                 label-width="80px">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="loginForm.username" @keyup.enter.native="handleLogin" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="loginForm.password" @keyup.enter.native="handleLogin" type="password" auto-complete="off" show-password></el-input>
            </el-form-item>
            <el-form-item class="error">
              <span v-show="errorMsg">{{errorMsg}}</span>
            </el-form-item>
            <el-form-item>
                <el-button @click.native.prevent="handleLogin">登录</el-button>  <!-- @click.native.prevent  -->
            </el-form-item>
            <el-form-item class="goto-home">
                <span @click="gotoHome"> 返回首页 </span>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    // let Base64 = require('js-base64').Base64;
    import hash from 'src/utils/hash'
    export default {
        name: "login",
        data(){
            return{
                loginForm:{
                    username:'',
                    password:''
                },
                errorMsg:'',
                loginRules:{
                    username:[
                        {required: true, message:'请输入用户名', trigger:'blur'},
                    ],
                    password:[
                        {required: true, message:'请输入密码', trigger:'blur'},
                    ]
                }
            }
        },
        methods:{
            handleLogin(){
                this.$refs.loginForm.validate(valid => {
                    if(valid){
                        let loginParam = {
                            username: this.loginForm.username,
                            password: this.loginForm.password,      //Base64.encode(this.loginForm.password)
                        }
                        this.$store.dispatch('user/LoginByUserName', Object.assign({}, loginParam)).then((res)=>{
                            console.log(res)
                            let cacheHref = hash.getCacheHref()
                            if(cacheHref) {
                                hash.clearCache()
                                window.location.href = cacheHref
                            }else{
                                window.location.href = window.location.protocol +'//'+ window.location.host + this.$website.home;
                            }
                    console.log("sasasas")
                        }).catch((err)=>{
                            console.log(err)
                            this.errorMsg = '用户名或密码不正确'
                        })
                        console.log("dada")
                    }
                })
            },
            gotoHome(){
                window.location.href = window.location.protocol +'//'+ window.location.host + '/main.html';
            }
        }
    }
</script>

<style lang="stylus" src="./login.styl">

</style>