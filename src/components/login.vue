<template>
  <div id="loginDiv">

    <form name="form1" id="form1">
        <table width="100%" height="600px" border="0" cellspacing="0" cellpadding="0" class="login_mbbg">
          <tbody>
            <tr>    
                <td valign="top">
                    <table width="969px" align="center" border="0" cellspacing="0" cellpadding="0">
                        <tbody>
                            <tr>
                                <td height="228px" class="login_1">&nbsp;</td>
                            </tr>
                            <tr>
                                <td height="113" class="login_2">
                                    <div style="position:relative; width:969px; height:113px;">
                                        <div style="position:absolute; left:515px;">
                                            <input  v-model="ruleForm.username" name="txt_U_name" id="txt_U_name" tabindex="1" style="border: 1px rgb(128, 128, 128) solid; width: 170px; height: 25px; color: rgb(0,0,0); font-size: 18px; font-weight: bold; background-color: rgb(255, 255, 255);" type="text">
                                        </div>
                                        <div style="position:absolute; left:515px; top:30px;">
                                            <input  v-model="ruleForm.password" name="txt_U_Password" id="txt_U_Password" tabindex="2" style="border: 1px rgb(128, 128, 128) solid; width: 170px; height: 25px; color: rgb(0,0,0); font-size: 18px; font-weight: bold; background-color: rgb(255, 255, 255);" type="password">
                                        </div>
                                        <div style="position:absolute; left:515px; top:60px;">
                                            <input v-model="ruleForm.yanzhengma" name="txt_validate" id="txt_validate" tabindex="3" style="border: 1px rgb(128, 128, 128) solid; width: 60px; height: 25px; color: rgb(0,0,0); font-size: 18px; font-weight: bold; background-color: rgb(255, 255, 255);" type="text" maxlength="5">
                                        </div>
                                        <div style="position:absolute; left:585px; top:62px;">
                                          <img class="yanzhengimg"  @click="getyanzheng" :src="'data:image/png;base64,'+tupian">
                                            <!-- <img id="imgCheckNum" style="cursor: pointer;" alt="点击更新校验码" onclick="ChangeValidate();" src="checknum.aspx?ts=1559136809236"> -->
                                        </div>
                                        <div style="position:absolute; left:515px; top:90px;">
                                            <input @click="login()" id="longinbtn" tabindex="4" class="btn" type="button" >
                                        </div>
                                        <div style="position:absolute; left:580px; top:90px;">
                                            <input type="checkbox" name="ismobile" id="ismobile" value="1" style="cursor:pointer"><a id="a_ismobile" style="display: inline-block; height: 25px; line-height: 20px; font-size: 12px; cursor:pointer;">手机登入</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td height="259"  class="login_3" >&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
      </table>
    </form>

  </div>
</template>

<script>
import cookieParser from './../assets/js/cookie';

export default {
  data () {
    let vm = this;
    return {
      password: '',
      username: '',
      securitycode: '',
      tupian: '',
      yanzhengma: '',
      ruleForm: {
          username: '',
          password: '',
          yanzhengma: ''
        },
        rules: {
          username: [
            { required: true, message: '必填', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '必填', trigger: 'blur' }
          ],
          yanzhengma: [
            { required: true, message: '必填', trigger: 'blur' },
            {
              validator:function(rule, value, callback){

                console.log('value',value);
                console.log('this.yanzhengma',vm.yanzhengma);
                if(value != vm.yanzhengma){
                  callback('验证码输入不正确!');
                }
                callback();
              },
              trigger: 'blur'
            }
          ]
        }
    }
  },
  created() {
    this.getyanzheng();
    
    if (window.ENV == 'dev') {
      //console.log('研发自动登录');

      this.logindev();

    } else {
      //普通用户登录
       //this.$router.push({name: 'login'});
    }
  },
  methods: {
    async logindev() {
      let that = this;

              let obj = {
                // username: 'axuyao1',
                // password: 'a111111'
                // username: 'aaa88',
                // password: 'aaa888'

                username: 'a4m3huiyuan1',
                password: 'a111111'

                // username: 'a4m28dhy',
                // password: 'a123'

                // username: 'dxuhuiiyuan1',
                // password: 'a111111'

                // username: 'xianjinzs2',
                // password: '123456'


                // username: 'hih0759',
                // password: 'aaa888'
              };

              let ret = await this.$post(`${window.url}/api/login`, obj);
              if(ret.code === 200) {
                cookieParser.setCookie("accesstoken", ret.token);
                this.$router.push({name: 'userAgreement'});
              }

    },
    async getyanzheng() {
      let res = await this.$get(`${window.url}/api/captcha.jpg`);

      if(res.code===200){
        this.tupian = res.tupian;
        this.yanzhengma = res.yanzhengma;
      }
    },
    async login() {
      let that = this; 

      console.log('this.yanzhengma');

      if(this.ruleForm.username == '') {
        alert('密码不能为空，请输入');
      } else if(this.ruleForm.password == '') {    
        alert('密码不能为空，请输入');
      } else if(this.yanzhengma != this.ruleForm.yanzhengma) {
        alert('验证码不正确，请重新输入');
      } else if(this.ruleForm.yanzhengma == '') {
        alert('校验码不能为空，请正确输入');
      } else {
        let obj = {
                username: this.ruleForm.username,
                password: this.ruleForm.password
              };

              let ret = await this.$post(`${window.url}/api/login`, obj);
              if(ret.code === 200) {
                cookieParser.setCookie("accesstoken", ret.token);
                this.$router.push({name: 'userAgreement'});
              }
      }

              


    }
  }
}
</script>

<style scoped>
body {
    margin-left: 0px;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    background-color: #FFFFFF;
    overflow: hidden;
    background-repeat: repeat-x;
}

form {
    margin-block-end: 1em;
}

table {
    white-space: normal;
    line-height: normal;
    font-weight: normal;
    font-size: medium;
    font-style: normal;
    color: -internal-quirk-inherit;
    text-align: start;
    font-variant: normal;
}

.yanzhengimg {
    cursor: pointer;
    width: 70px;
    height: 30px;
}

.btn, .btn_m {
    width: 60px;
    height: 26px;
    border: 0px solid #FF9224;
    background-color: #FFFFFF;
    background-image: url(../../static/img/Login_butmb.jpg);
    cursor: pointer;
    background-position: 0px 0;
}

.btn {
    background-position: 0px 0;
}

.btn:hover {
    cursor: pointer;
    background-position: 60px 0;
}

input:not([type="image" i]) {
    box-sizing: border-box;
}


.btn_m {
            cursor:pointer;
            background-position: 60px 0;
        }


.login_3 {
  background-image: url(../../static/img/login_3.jpg);
}

.login_2 {
  background-image: url(../../static/img/login_2.jpg);
}

.login_1 {
  background-image: url(../../static/img/login_1.jpg);
}
.login_mbbg {
  background-image: url(../../static/img/login_mbbg.jpg);
}
</style>
<style lang="less">
</style>

