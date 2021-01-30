
<style scoped>
.layui {
    width: 100%;
    min-height: 782px;
    background-color: #42b983;
    /* background: url("../../assets/images/background.png") no-repeat; */
    background-size: 100% auto;
    position: relative;
}
.login-from {
    width: 384px;
    background: #fff;
    padding: 65px 0 87px 0;
    border-radius: 6px;
    position: absolute;
    right: 128px;
    top: 125px;
}
.login-from-content {
    margin: 0 auto;
    width: 240px;
}

.login-from-title {
    text-align: center;
    color: #373737;
    font-size: 22px;
    line-height: 31px;
}
.verification-code {
    width: 105px;
    margin-left: 7px;
    height: 40px;
    border-radius: 4px;
    background: #dadada;
}
</style>
<style>
.el-form-item {
    margin-bottom: 20px;
}
</style>
<template>
    <div>
        <div class="layui">
            <div class="login-from">
                <div class="login-from-content">
                    <el-form ref="form" :model="form" :rules="rules">
                        <el-form-item style="margin-bottom: 27px">
                            <div class="login-from-title">欢迎登录</div>
                        </el-form-item>
                        <el-form-item prop="username">
                            <el-input
                                v-model="form.username"
                                placeholder="请输入账号"
                            ></el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input
                                v-model="form.password"
                                type="password"
                                placeholder="请输入密码"
                            ></el-input>
                        </el-form-item>
                        <el-form-item prop="verificationCode">
                            <el-input
                                v-model="form.verificationCode"
                                placeholder="请输入验证码"
                                style="width: 128px; float: left"
                            ></el-input>
                            <img src="" alt="" class="verification-code" />
                        </el-form-item>
                        <el-form-item style="margin-top: 30px">
                            <el-button
                                type="primary"
                                @click="login"
                                style="width: 240px"
                                >登录</el-button
                            >
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: "",
                password: "",
                verificationCode: "",
            },
            rules: {
                username: [
                    {
                        required: true,
                        message: "请输入账号",
                        trigger: "blur",
                    },
                ],
                password: [
                    {
                        required: true,
                        message: "请输入密码",
                        trigger: "blur",
                    },
                ],
                verificationCode: [
                    {
                        required: true,
                        message: "请输入验证码",
                        trigger: "blur",
                    },
                ],
            },
        };
    },
    computed: {},
    mounted() {},
    methods: {
        login() {
            this.$refs["form"].validate((valid) => {
                if (valid) {
                    this.doLogin();
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        doLogin() {
            var data = {
                userName: this.form.username,
                password: this.form.password,
            };
            this.$axios({
                method: "post",
                url: "http://8.131.74.190:8080/grade-web/api/user/login",
                headers: { "Content-Type": "application/json;charset=UTF-8" },
                data: JSON.stringify(data),
            })
                .then((response) => {
                    if (response.data.success) {
                        this.$cookies.set('userName',response.data.currentUser.userName);
                        this.$cookies.set('userType',response.data.currentUser.userType);
                        this.$cookies.set('token',response.data.token);
                        this.$router.push("/home");
                    } else {
                        this.$message({
                            message: response.data.errorInfo,
                            type: "error",
                        });
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    components: {},
};
</script>

