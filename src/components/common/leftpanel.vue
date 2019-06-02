<template>
  <div id="leftpanel" class="betQuick">

    <div align="left" style="overflow: hidden;" id="div_commond">
        <table width="100%" class="DTable" cellpadding="0" cellspacing="1" border="0" style="margin-top: 0px; display: block;" bgcolor="white" id="tb_memberinfo">
            <tbody><tr style="height: 33px; text-align: left; background: url(./static/img/tb_bg.jpg); color: Black; font-size: 14px;">
                <td colspan="2" style="width: 230px;" align="center"><span style="font-size: 14px; font-weight: bold;">请核对您的帐户</span></td>
            </tr>
            <tr>
                <td width="70px" align="left" style="line-height: 17px;" class="t_td_caption_1">会员帐号</td>
                <td align="left"><span style="margin-left: 5px;" id="left_memberno">nj5m22d(A盘)</span><input id="hid_wagerroundno" type="hidden" value="A"></td>
            </tr>
            <tr style="height: 22px;" id="tr_cashremaining">
                <td align="right" class="t_td_caption_1">帐户余额 </td>
                <td align="left"><span id="con_cashremaining" style="font-size: 13px; margin-left: 5px;">0</span></td>
            </tr>
            <tr style="height: 22px; display: none;" id="tr_creditquota">
                <td align="left" class="t_td_caption_1">信用额度 </td>
                <td align="left"><span id="sp_creditquota" style="font-size: 13px; margin-left: 5px;">0</span></td>
            </tr>
            <tr id="tr_allowcreditquota">
                <td align="left" class="t_td_caption_1">可用金额</td>
                <td align="left"><span id="sp_allowcreditquota" style="font-size: 13px; margin-left: 5px;">0</span></td>
            </tr>
            <tr id="tr_8" style="">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://yun.ngk77.com/ui-02/detail.aspx?g=8','廣東快樂十分','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“广东快乐十分”开奖网</span></a>&nbsp;
                </td>
            </tr>
            <tr id="tr_6" style="">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://yun.ngk77.com/ui-02/detail.aspx?g=6','重慶時時彩','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“重庆时时彩”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>
            <tr id="tr_11" style="">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://yun.ngk77.com/ui-02/detail.aspx?g=11','北京賽車','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“北京赛车(PK10)”官方网</span></a>&nbsp;&nbsp;
                </td>
            </tr>
            <tr id="tr_12" style="">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://yun.ngk77.com/ui-02/detail.aspx?g=12','江苏骰寶','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“江苏骰寶(快3)”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>
            <tr id="tr_13" style="">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://yun.ngk77.com/ui-02/detail.aspx?g=13','快乐8','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“北京快乐8”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>
            <tr id="tr_20" style="">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://yun.ngk77.com/ui-02/detail.aspx?g=20','幸运农场','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“幸运农场”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>
            <tr id="tr_21" style="">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://yun.ngk77.com/ui-02/detail.aspx?g=21','幸运飞艇','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“幸运飞艇”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>
            <tr id="tr_10" style="display:none">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://yun.ngk77.com/ui-02/detail.aspx?g=10','新疆时时彩','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“新疆时时彩”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>
            <tr id="tr_14" style="display:none">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://yun.ngk77.com/ui-02/detail.aspx?g=14','天津时时彩','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“天津时时彩”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>
            <tr id="tr_22" style="">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://speedylottos.com/speedy10-result.php','极速赛车','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“极速赛车”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>
            <tr id="tr_18" style="display:none">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://www.gdlottery.cn/odata/zst11xuan5.jspx','广东11选五','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“广东11选五”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>
            <tr id="tr_26" style="">
                <td class="t_list_caption" colspan="2">
                    <span style="color: #4a1a04;">“EPS赛马”</span>&nbsp;&nbsp;
                    <a href="javascript:void(0);" onclick="window.open('http://www.epsbet.com','EPS赛马')"><span style="color: #4a1a04;">网址1</span></a>
                    <a href="javascript:void(0);" onclick="window.open('http://www.cvk66.com','EPS赛马')"><span style="color: #4a1a04;">网址2</span></a>
                    <a href="javascript:void(0);" onclick="window.open('http://yun.ngk77.com','EPS赛马')"><span style="color: #4a1a04;">网址3</span></a>
                </td>
            </tr>
            <tr id="tr_27" style="">
                <td class="t_list_caption" colspan="2">
                    <span style="color: #4a1a04;">“超级快5”</span>&nbsp;&nbsp;
                    <a href="javascript:void(0);" onclick="window.open('http://www.super-pick5.com','超级快5')"><span style="color: #4a1a04;">网址1</span></a>
                    <a href="javascript:void(0);" onclick="window.open('http://www.cvk66.com','超级快5')"><span style="color: #4a1a04;">网址2</span></a>
                    <a href="javascript:void(0);" onclick="window.open('http://yun.ngk77.com','超级快5')"><span style="color: #4a1a04;">网址3</span></a>
                </td>
            </tr> 
             <tr id="tr_38" style="">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://auluckylottery.com/results/lucky-ball-5','澳洲幸运5','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“澳洲幸运5”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>
             <tr id="tr_39" style="display:none">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://auluckylottery.com/results/lucky-ball-8','澳洲幸运8','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“澳洲幸运8”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>
            <tr id="tr_40" style="">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://auluckylottery.com/results/lucky-ball-10','澳洲幸运10','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“澳洲幸运10”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>
            <tr id="tr_41" style="display:none">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://auluckylottery.com/results/lucky-ball-20','澳洲幸运20','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“澳洲幸运20”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>
            <tr id="tr_41" style="display:none">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://auluckylottery.com/results/lucky-ball-20','澳洲幸运20','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“澳洲幸运20”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>  
            <tr id="tr_41" style="display:none">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://auluckylottery.com/results/lucky-ball-20','澳洲幸运20','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“澳洲幸运20”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>  
            <tr id="tr_41" style="display:none">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://auluckylottery.com/results/lucky-ball-20','澳洲幸运20','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“澳洲幸运20”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>  

        </tbody></table>

        <table width="100%" cellpadding="0" cellspacing="0" id="tb_xd" style="display: none;">
            <tbody><tr>
                <td id="mtranlist"></td>
            </tr>
        </tbody></table>

        <table width="100%" cellpadding="0" cellspacing="0" id="tb_xd_single" style="display: none;">
            <tbody><tr>
                <td id="td_mtransingle"></td>
            </tr>
        </tbody></table>

        <table width="100%" cellpadding="0" cellspacing="0" id="tb_xd_single_lianma" style="display: none;">
            <tbody><tr>
                <td id="td_mtransingle_lianma"></td>
            </tr>

        </tbody></table>
    </div>



    <!-- <div class="leftList">
      <div id="userInfo" class="userInfo">
        <p class="title">
          账户信息
          <a title="刷新" class="refresh" @click="getcUserInfo()">
            <i class="icon-refresh"></i>
          </a>
        </p> 
        <div class="info">
          <div class="info-box">
            <p><label>账户：</label><span>{{userInfo.username}}</span>({{userInfo.handicap}}盘)</p> 
            <p><label>现金余额：</label>{{userInfo.cashBalance}}</p> 
            <p><label>锁定金额：</label><span style="color: #f42222;">{{userInfo.lockBalance}}</span></p> 
            <p><label>已下金额：</label><span style="color: #f42222;">{{userInfo.alreadyBalance}}</span></p>
          </div> 
          <div class="login-out">
            <div><el-button class="loginoutbtn" type="primary" size="mini" @click="exit()">登出</el-button></div>
            <div><el-button class="changepassbtn" type="primary" size="mini" @click="toUpdatePass">修改密码</el-button></div>
          </div>
          <div class="jinbibg"></div>
        </div>
      </div>
      <div class="long-dragon">
        <div class="gonggaotab">
          <a>公告</a>
        </div>
        <div class="cont">
          <div class="gonggaocont">
            <p v-if="userInfo.notice">{{userInfo.notice}}</p>
            <p v-else>暂无公告</p>
          </div>
        </div>
      </div>
      <div class="long-dragon">
        <div class="tabmenuPa  active">
          <a>长龙排行榜</a>
        </div>
        <div @click="openPrize" class="tabmenu openPrize active">
          <a>连续开奖</a>
        </div>
        <div @click="noOpenPrize" class="tabmenu noOpenPrize">
          <a>连续未开</a>
        </div>
        <div class="cont">
          <div class="sum">
            <div class="table">
              <table v-if="showOpen">
                <tr v-for="(item,index) in openPrizeList">
                  <td class="type"></td> 
                  <td class="name"><a>{{item.content}}</a></td> 
                  <td class="period">{{item.num}} 期</td>
                </tr>
              </table>
              <table v-if="!showOpen">
                <tr v-for="(item,index) in noOpenPrizeList">
                  <td class="type"></td> 
                  <td class="name"><a>{{item.content}}</a></td> 
                  <td class="period">{{item.num}} 期</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- <el-dialog
      title="修改密码"
      :visible.sync="orderOddsVisible"
      center>
      
        <div class="popup-body" style="max-height: 300px;">
          <div class="default-list">
            <div class="table">
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="旧密码：" prop="oldPassWrod">
                  <el-input size="mini" type="password" v-model="ruleForm.oldPassWrod"></el-input>
                </el-form-item>
                <el-form-item label="新密码：" prop="newPassWord">
                  <el-input size="mini" type="password" v-model="ruleForm.newPassWord"></el-input>
                </el-form-item>
                <el-form-item label="确认密码：" prop="newPassWordDb">
                  <el-input size="mini" type="password" v-model="ruleForm.newPassWordDb"></el-input>
                </el-form-item>
                <el-form-item style="text-align: center;">
                  <el-button size="mini" @click="orderOddsVisible = false">取 消</el-button>
                  <el-button size="mini" type="primary" @click="updatePassWord('ruleForm')">确 定</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div> 

    </el-dialog> -->

  </div>
</template>
<script>
//import {mapGetters} from 'vuex';

export default {
  data() {
    let vm = this;
    return {
      bocaiTypeId: '',
      showOpen: true,
      noOpenPrizeList: [],
      openPrizeList: [],
      userInfo: {},
      orderOddsVisible: false,
      ruleForm: {
          oldPassWrod: '',
          newPassWord: '',
          newPassWordDb: ''
        },
        rules: {
          oldPassWrod: [
            { required: true, message: '请输入您的旧密码', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ],
          newPassWord: [
            { required: true, message: '请输入您的新密码', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' },
            {
              validator:function(rule, value, callback){
                let reg = /^[a-zA-Z]\w{5,15}$/;
                if(!reg.test(value)){
                  callback('密码以字母开头，长度在6~16之间，只能包含字母、数字和下划线');
                }
                callback();
              },
              trigger: 'blur'
            }
          ],
          newPassWordDb: [
            { required: true, message: '请再次输入新密码', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' },
            {
              validator:function(rule, value, callback){
                let reg = /^[a-zA-Z]\w{5,15}$/;
                if(!reg.test(value)){
                  callback('密码以字母开头，长度在6~16之间，只能包含字母、数字和下划线');
                }
                callback();
              },
              trigger: 'blur'
            },
            {
              validator:function(rule, value, callback){

                console.log('vm.ruleForm',vm.ruleForm);
                if(value != vm.ruleForm.newPassWord){
                  callback('新密码两次输入不一致!');
                }
                callback();
              },
              trigger: 'blur'
            }
          ]
        }

    };
  },
  computed: {
    // ...mapGetters({
    // })
  },
  async created() {
    this.getcUserInfo();
  },
  mounted(){
      bus.$on('getcUserInfo', (data) => {
        this.getcUserInfo();
      });
      bus.$on('getbocaiTypeId', (data) => {
        this.bocaiTypeId = data;
        this.getchanglong();
      });
  },
  methods: {
    async exit() {

      let ret = await this.$get(`${window.url}/api/exitLogin`);
              if(ret.code===200) {
                    this.$success('退出登录!');
                    
                  } else {
              }
      this.$router.push({name: 'login'});
    },
    openPrize() {
      this.showOpen = true;
      $('.openPrize').addClass('active').siblings().removeClass('active');
    },
    noOpenPrize() {
      this.showOpen = false;
      $('.noOpenPrize').addClass('active').siblings().removeClass('active');
    },
    async getchanglong() {

        this.openPrizeList = [];
        this.noOpenPrizeList = [];

          let that = this;
          await that.$get(`${window.url}/api/changlong?bocaiTypeId=`+this.bocaiTypeId+'&showNum=10').then((res) => {
            that.$handelResponse(res, (result) => {
              if(result.code===200){

                for(let n in result.openPrizeMap) {
                  let obj = {};
                  obj.content = n;
                  obj.num = result.openPrizeMap[n];
                  this.openPrizeList.push(obj);
                }

                for(let n in result.noOpenPrizeMap) {
                  let obj = {};
                  obj.content = n;
                  obj.num = result.noOpenPrizeMap[n];
                  this.noOpenPrizeList.push(obj);
                }

                //console.log('this.openPrizeMap',this.openPrizeMap);
                //更新用户信息
                // bus.$emit('getcUserInfo', ''); 
                // that.orderDatas.list = [];
                // that.$success('下注成功！');
                // that.reset();
              }
            })
          });
    },
    async updatePassWord(formName) {
        let that = this;

          this.$refs[formName].validate(async (valid) => {

          if (valid) {

              let obj = {
                oldPassWrod: this.ruleForm.oldPassWrod,
                newPassWord: this.ruleForm.newPassWord
              }

              let ret = await this.$post(`${window.url}/api/rePassWord`, obj);
              if(ret.code===200) {
                    this.$success('修改密码成功!');
                    this.orderOddsVisible = false;
                  } else {
              }

              this.$refs[formName].resetFields();

          } else {

            return false;
          }
        });
    },
    toUpdatePass() {
      this.orderOddsVisible = true;
    },
    handleClick(tab, event) {
      //console.log(tab, event);  notice
    },
    async getcUserInfo() {
      let res = await this.$get(`${window.url}/api/cUserInfo`);

      if(res.code===200){
        //store.commit('updatecashBalance',res.data.cashBalance);
        this.userInfo = res.data;

        //console.log('要给现金了',res.data.cashBalance);

        bus.$emit('getcashBalance', res.data.cashBalance);
        bus.$emit('getcuserId', res.data.id);

        // "currentPage": 0,
        // "pageSize": 10,
        // "startDate": null,
        // "endDate": null,
        // "id": "51",//用户ID
        // "username": "aydwhuiyuan1",//用户注册名称
        // "nickname": "ydwhuiyuan1",//用户昵称
        // "password": "",
        // "cashBalance": 20421200,//可用金额
        // "lockBalance": 0,//锁定金额
        // "alreadyBalance": 800,//已下注金额
        // "ruleId": 13,
        // "bankName": "1111",
        // "bankNum": "1111",
        // "bankUserName": "1111",
        // "phone": "1111",
        // "weixin": "1111",
        // "zhifubao": "1111",
        // "putForwardPassword": "1234",
        // "cashCredit": 0,
        // "creditType": null,
        // "quota": 0,
        // "handicap": "a",//用户盘口：a,b,c,d
        // "companyid": "159",
        // "pid": "164",
        // "userClass": "1-2-159-160-163-164-51",
        // "isFrozen": 0,
        // "tingyaShouya": 0,
        // "userType": 1,
        // "status": 1,
        // "createDate": 1532001115000,
        // "updateDate": 1534748779000,
        // "lockingQuota": null,
        // "isOnline": 1,
        // "quotaInfo": null,
        // "aUserOccupied": null,
        // "isHide": 1,
        // "bindingIp": "192.168.1.75",
        // "loginIp": "0:0:0:0:0:0:0:1",
        // "loginWebsite": null,
        // "teamId": 1,
        // "loginTime": 1533883022000,
        // "systemStr": null,
        // "phandicapA": null,
        // "phandicapB": null,
        // "phandicapC": null,
        // "phandicapD": null,
        // "pAllotOccupied": null,
        // "pCashCredit": null,
        // "pnickname": null,
        // "pusername": null,
        // "pquota": null

      }
    }
  }
};
</script>
<style scoped lang="less">

#leftpanel {
    font-size: 12px;
    line-height: 20px;
    font-family: Verdana, 宋体, 細明體, 微軟正黑體, Arial, Sans;
    color: #511e02;
    text-align: left;
    margin: 0 auto;
    font-size: 12px;
    scrollbar-face-color: #9ad4fc;
    scrollbar-shadow-color: #006699;
    scrollbar-base-color: #ffffff;
    scrollbar-highlight-color: #006699;
    scrollbar-3dlight-color: #ffffff;
    scrollbar-darkshadow-color: #ffffff;
    scrollbar-track-color: #f8f8f8;
    scrollbar-arrow-color: #006699;

    width: 228px;
    background-image: url(../../../static/img/l_backdrop.jpg);
    background-repeat: repeat-y;
    overflow-x: hidden;
    float: left;
    margin: 0px;

    .DTable {
      margin-top: 5px;
      text-align: center;
      font-size: 12px;
      background-color: #e9a884;
    }

    .DTable tr {
      height: 25px;
      background-color: White;
    }

    .t_td_caption_1 {
      HEIGHT: 25px;
      TEXT-ALIGN: center;
      LINE-HEIGHT: 17px;
      BACKGROUND-COLOR: #fdf8f2;
  }

  .t_list_caption {
    BACKGROUND-IMAGE: url(../../../static/img/tb_bg.jpg);
    FONT-WEIGHT: bold;
    COLOR: #000000;
    TEXT-ALIGN: center;
    LINE-HEIGHT: 33px;
  }

  a {
    color: #5E5E5E;
    text-decoration: none;
  }


}



</style>
<style lang="less">


</style>
