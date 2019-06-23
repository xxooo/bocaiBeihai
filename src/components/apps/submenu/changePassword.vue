<template>
  <div id="changePassword" class="duboBodyClass">

    <table class="DTable" cellpadding="0" cellspacing="1" border="0" style="margin: 5px auto 0px 50px; width: 600px;" id="tbadd">
      <tbody>
        <tr class="td_caption_1">
          <td align="center" colspan="3">
            变更密码
          </td>
        </tr>
        <tr>
          <td style="width:135px;height:25px;max-width:135px" width="135" height="25" align="right" class="betnum">
           原密码&nbsp;&nbsp;
          </td>
          <td width="159">
            <input type="password" class="box" v-model="oldPassWrod" maxlength="50" id="txtoldpwd">
          </td>
          <td width="298">
          </td>
        </tr>
        <tr>
          <td style="width:135px;height:25px;max-width:135px" height="25" align="right" class="betnum">
            新密码&nbsp;&nbsp;
          </td>
          <td>
            <input name="text" type="password" class="box" v-model="newPassWord" maxlength="50" id="txtnewpwd1">
          </td>
          <td>
            *(需8~20码，必须包含英文+数字，可另加符号组合，连续两位码不得相同)
          </td>
        </tr>
        <tr>
          <td style="width:135px;height:25px;max-width:135px" height="25" align="right" class="betnum">
            确认密码&nbsp;&nbsp;
          </td>
          <td>
            <input name="text2" type="password" class="box" v-model="newPassWordDb" maxlength="50" id="txtnewpwd2">
          </td>
          <td>
            &nbsp;
          </td>
        </tr>

      </tbody>
    </table>

    <table class="DTable" cellpadding="0" cellspacing="0" border="0" style="margin: 10px auto 10px  50px; width: 600px;">
      <tbody>
        <tr>
          <td height="30" style="line-height: 30px; text-align: center" colspan="3">
            <input type="button" value="确定修改" @click="updatePassWord" class="button_bg1">
          </td>
        </tr>
      </tbody>
    </table>


    <div tabindex="-1" class="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front ui-draggable ui-dialog-buttons"  style="position: absolute; height: auto; width: 400px;  z-index: 101;" v-if="orderOddsVisible" id="ui-dialog">
      <div class="ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix ui-draggable-handle">
        <span id="ui-id-1" class="ui-dialog-title">&nbsp;</span>
        <button type="button" class="ui-button ui-corner-all ui-widget ui-button-icon-only ui-dialog-titlebar-close" title="Close" @click="orderOddsVisible = false">
          <span class="ui-button-icon ui-icon ui-icon-closethick"></span>
          <span class="ui-button-icon-space"> </span>
          Close
        </button>
        <a href="#" class="ui-dialog-titlebar-max ui-corner-all" role="button" style="display: none;">
          <span class="ui-icon ui-icon-newwin"></span>
        </a>
      </div>

        <div id="dialog_win" style="margin: 0px; padding: 0px; width: auto; min-height: 79px; max-height: none; height: auto;" class="ui-dialog-content ui-widget-content">
            <div id="div_msg_win" style="margin:0; padding: 10px 10px 0px 10px; text-align:left; color:#000;max-height:550px">

              <template>
                {{dialogMessage}}
              </template>
            </div>
        </div>

      <div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
        <div class="ui-dialog-buttonset">

          <template>
            <button type="button" class="ui-button ui-corner-all ui-widget" @click="orderOddsVisible = false">关闭</button>
          </template>
        </div>
      </div>


    </div>

    <div class="ui-widget-overlay ui-front" style="z-index: 100;" v-if="orderOddsVisible"></div>

  </div>
</template>

<script>

export default {

  components: {
  },
  data() {
    return {
      oldPassWrod: '',
      newPassWord: '',
      newPassWordDb: '',
      orderOddsVisible: false

    }
  },
  created() {

  },
  computed: {
  },
  methods: {
    async updatePassWord() {

      let that = this;

      let reg = /^[\u2E80-\u9FFF]+$/;
      // if(reg.test(this.oldPassWrod*1) || this.oldPassWrod == ''){
      //   this.dialogMessage = '密码过于简单，请设定复杂化密码！';    // 新密码曾经使用过，请更换新密码!
      //   this.orderOddsVisible = true;
      // } else 
      if(this.oldPassWrod == '') {
        this.dialogMessage = '旧密码不能为空，请输入';  
        this.orderOddsVisible = true;
      } else if(this.newPassWord == '') {
        this.dialogMessage = '新密码不能为空，请输入';  
        this.orderOddsVisible = true;
      } else if(this.newPassWord != this.newPassWordDb) {
        this.dialogMessage = '两个密码输入不一致，请重新输入';  
        this.orderOddsVisible = true;
      } 
      // else if(this.newPassWord == 1) {
      //   this.dialogMessage = '用户密码：只能输入8-20个字符，必须包含字母和数字，可另加符号的组合，连续两位码不得相同，请正确填写';  
      //   this.orderOddsVisible = true;
      // } 
      else {

        let obj = {
          oldPassWrod: this.oldPassWrod,
          newPassWord: this.newPassWord
        }


        const loading = this.$loading({
          lock: true,
          background: 'rgba(0, 0, 0, 0.7)'
        });  
        await that.$post(`${window.url}/api/rePassWord`,obj).then((res) => {
          that.$handelResponse(res, (result) => {
            loading.close();
            if(result.code===200){

              that.oldPassWrod = '';
              that.newPassWord = '';
              that.newPassWordDb = '';
              that.dialogMessage = '密码修改成功';  
              that.orderOddsVisible = true;
            }
          })
        });

      }

      
      

    }
  },
  mounted() {
  },
  updated() {
  }
};
</script>
<style scoped>
</style>
<style lang="less">
#changePassword {

 
}
</style>