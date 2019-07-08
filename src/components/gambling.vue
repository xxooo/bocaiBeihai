<template>
  <div id="main">

    <div id="maintop" style="height: 108px">
        <!-- <div id="logo" style="display:none;"></div> -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tbody><tr>
                <td valign="top" width="10%">
                    <table width="100%" border="0">
                        <tbody>
                            <tr>
                            <td class="TopLogo_225">
                                 <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,22,0" width="231" height="76" id="T"><param name="wmode" value="transparent"><param name="movie" value="./static/img/lx.swf"><param name="FlashVars" value="page" id="0"><param name="quality" value="high"><param name="menu" value="false"><embed src="./static/img/lx.swf" name="T" quality="high" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?p1_prod_version=shockwaveflash" width="231" height="76"></object>
                                </td>
                            </tr>
                            <tr>
                                <td><img alt="" src="../../static/img/TopMenu_Top2.jpg" width="231" height="29"></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td width="90%" style="background-image: url(./static/img/TopMenu_Top.jpg);">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td height="43">
                                    <div id="odds_marquee">
                                      <p id="oc_left" style="width: 1135px;">
                                        <a id="oddsshow" style="top: 0px;">
                                          <!-- <span class="oc_red">广东快乐十分：选三前组&nbsp;01</span>
                                          <span class="oc_blue">-20</span>|
                                          <span class="oc_red">广东快乐十分：选三前组&nbsp;01</span>
                                          <span class="oc_blue">-20</span> -->
                                        </a>
                                      </p>
                                      <span id="oc_right">
                                        <a class="odds-c oc-up" title="點擊向上顯示最新變化的賠率" id="oddsup">&nbsp;</a>
                                        <a  class="odds-c oc-down" title="點擊向下顯示最新變化的賠率" id="oddsdown">&nbsp;</a>
                                      </span>
                                    </div>
                                </td>
                            </tr>
                        <tr>
                            <td height="33">
                                <table border="0" cellpadding="0" cellspacing="0" width="1070">
                                    <tbody>
                                        <tr>
                                        <td width="19" height="36">
                                            <img alt="" src="../../static/img/TopMenu_2Left.jpg" width="19" height="36">
                                        </td>
                                        <td style="width:150px;">
                                            <ul class="navOne-new clearfix" @mouseenter="overShow()" @mouseleave="outHide()">
                                                <li id="bankLi" class="czBtn overShowLi">
                                                  <span id="currentType">{{bocaiName!=''?bocaiName:bocaiTypeList.length!=0?bocaiTypeList[0].bocaiName:''}}</span>
                                                </li>
                                            </ul>

                                        </td>

                                            
                                        <td> 
                                            <div id="div_title">
                                                <center>
                                                    <div id="div_title_personalinfo" class="bST_1" @click="goRightMenu('personalinfo')">信用资料</div>
                                                    <div id="div_title_caiwumanager" class="bST_1" @click="goRightMenu('caiwumanager')">帐务查询</div>
                                                    <div id="div_title_instantorder" class="bST_1" @click="goRightMenu('instantorder')">下注明细</div>
                                                    <div id="div_title_bettingHistory" class="bST_1" @click="goRightMenu('bettingHistory')">结算报表</div>
                                                    <div id="div_title_lotteryResults" class="bST_1" @click="goRightMenu('lotteryResults')">历史开奖</div>
                                                    <div id="div_title_gameRule" class="bST_1" @click="goRightMenu('gameRule')">规则</div>
                                                    <div id="div_title_changePassword" class="bST_1" @click="goRightMenu('changePassword')">修改密码</div>
                                                    <div id="div_title_exit" class="bST_1" @click="exit()">退出</div>
                                                </center>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            </td>
                        </tr>
                        <tr>
                            <td height="29">
                                <div id="menuLv03">
                                    <div id="div_menu_group_1">  
                                        <template v-for="(item,index) in bocaiCategoryList">
                                            <a class="OddsCategoryA" :class="['OddsCategory'+item.id,index == 0 ? 'selected':'']" @click="getOddsCategory(item)">{{item.name}}</a>&nbsp;{{(index+1) == bocaiCategoryList.length*1 ? '' : '|&nbsp;'}}
                                        </template>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody></table>
    </div>

    <div class="middleContent" style=" width:100%; position: fixed;">
      <table width="100%" height="100%" border="0" cellpadding="0" cellspacing="1">
      <tbody><tr>
          <td id="tduser" valign="top" style="width:228px;min-width:228px; text-align:left; vertical-align:top;background: url(./static/img/l_backdrop.jpg);">
            <left-panel></left-panel>
          </td>
          <td id="tdbody" valign="top" style="padding-left: 17px;">
            <router-view></router-view>
          </td>
       </tr>
       </tbody></table>
    </div>

    <div style=" width:100%;" id="footer">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tbody>
            <tr>
              <td width="100%" background="./static/img/Down_B.jpg" style="line-height: 26px;">
                <marquee style="position: relative; top: 1px;color:#5d5d5d; left: 0px;" id="showMynews" scrollamount="9" scrolldelay="160" onmouseover="this.stop()" onmouseout="this.start()" whdth="100%">
                  尊敬的各级代理（会员）：本公司{{userInfo.notice}}
                </marquee> 
              </td>
            </tr>
          </tbody>
        </table> 
     </div>

    <div class="navOne-newDown" v-show="showSubMenu" @mouseenter="overShow()" @mouseleave="outHide()">
      <div id="bankLi-down" class="clearfix" style="top: 78px;left: 250px;overflow: hidden auto;display:block;">
        <ul>
          <li v-for="(item,index) in bocaiTypeList" :class="'div_gameno_'+item.bocaiId" style="cursor: pointer;"  @click="getOdds(item,index)">
            <a>{{item.bocaiName}}</a>
          </li>
          <li class="div_gameno_10001" style="cursor: pointer;"  @click="getOdds({bocaiName:'幸运农场'},101)"><a>{{'幸运农场'}}</a></li>
          <li class="div_gameno_10002" style="cursor: pointer;"  @click="getOdds({bocaiName:'EPS赛马'},102)"><a>{{'EPS赛马'}}</a></li>
          <li class="div_gameno_10003" style="cursor: pointer;"  @click="getOdds({bocaiName:'超级快5'},103)"><a>{{'超级快5'}}</a></li>
          <li class="div_gameno_10004" style="cursor: pointer;"  @click="getOdds({bocaiName:'澳洲幸运5'},104)"><a>{{'澳洲幸运5'}}</a></li>
          <li class="div_gameno_10005" style="cursor: pointer;"  @click="getOdds({bocaiName:'澳洲幸运10'},105)"><a>{{'澳洲幸运10'}}</a></li>
        </ul>
      </div>
    </div>


    <VueAudio />

  </div>
</template>

<script>
import VueAudio from '@/components/common/VueAudio';
import LeftPanel from '@/components/common/leftpanel';
import PageFooter from '@/components/common/pagefooter';
import MessageDialog from '@/components/common/messagedialog';
import { mapGetters } from 'vuex';


export default {
  components: {
    LeftPanel,
    PageFooter,
    MessageDialog,
    VueAudio
  },
  data() {
    return {
      showSubMenu: false,
      iskaipaning: true,

      dialogMessage: '',
      min : 0, //生成的最小的数字，比如200
      max : 9, //生成的最大的数字，比如500
      imgUrl: 0,
      t1: null, //轮询  博彩信息
      t2: null, //轮询  开奖结果
      t3: null, //轮询  动画
      t4: null, //轮询  开奖结果 快速
      resultList: [],
      submenu: '',
      hasResult: false,
      messageinfo: '',
      centerDialogVisible: false,
      bocaiCategoryList: []

    }
  },
  async created() {

    if(this.bocaiTypeList.length == 0) {
      console.log('????111111?');
      this.getBocai();
    } else {
      console.log('????2222?');
      this.getOddsInfo();
    }
    

    this.openPrizeTime = this.$timestampToTimeRi(new Date());

    this.getbocaoName();

    this.getcUserInfo();

    //只循环一个
    this.getBocaiInfo5sOnce();

  },
  computed: {
    ...mapGetters({
      userInfo: 'getuserInfo',
      bocaiTypeList: 'getbocaiTypeList',
      bocaiTypeId: 'getbocaiTypeId',
      bocaiName: 'getbocaiName',
      preResult: 'getpreResult'
    }),
    bocaiPathName: function() {
      return this.$route.name
    }
  },
  beforeDestroy: function() {
      this.clearTime();
  },
  methods: {
    outHide() {
      //console.log('outHide');
      $('.overShowLi').removeClass('active');
      this.showSubMenu = false;
    },
    overShow() {
      //console.log('overShow');
      $('.overShowLi').addClass('active');
      this.showSubMenu = true;

      //console.log('bocaiTypeId',this.bocaiTypeId);

      $('.div_gameno_'+this.bocaiTypeId).addClass('active').siblings().removeClass('active');
    },
    async exit() {
      this.$router.push({name: 'login'});
      
      let ret = await this.$get(`${window.url}/api/exitLogin`);
      if(ret.code===200) {
        
      } else {
      }
      
    },
    clearTime() {
      if (this.t1) {
        clearTimeout(this.t1)
      }
      if (this.t2) {
        clearTimeout(this.t2)
      }
      if (this.t3) {
        clearTimeout(this.t3)
      }
      if (this.t4) {
        clearTimeout(this.t4)
      }
    },
    async getcUserInfo() {
      let res = await this.$get(`${window.url}/api/cUserInfo`);

      if(res.code===200){
        store.commit('updateuserInfo',res.data);
      }
    },
    goRightMenu(path) {
      $('#div_title_'+path).addClass('bST_1_s active').siblings().removeClass('bST_1_s active');
      this.$router.push({name: path});
    },
    async bocaiInfo() {
        //console.log('this.bocaiTypeId666666',this.bocaiTypeId);

        //console.log('this.preResult',this.preResult);

        let res = await this.$get(`${window.url}/api/bocaiInfo?bocaiTypeId=`+this.bocaiTypeId);

            if(res.code===200){

              //if("companyIsOpenSet": "",//该会员上级公司对该期博彩的封盘状态。状态：0删除，1封盘，2开盘。只有开盘才能投注。)   未做
               //if("isOpenSet": "",//管理员对于当期博彩的开关设置) 

              if(res.data.companyIsOpenSet == 2) {
                if(res.data.isOpenSet == 1) {
                  bus.$emit('iskaipaning', true);

                  bus.$emit('getbocaiInfoData', res.data);

                  store.commit('updatebocaiInfoData',res.data);

                  store.commit('updatepreResult',res.data.preResult);

                  if(res.data.preResult != '') {

                    //开奖了
                    bus.$emit('kaijianglaaa', '');
                  }

                  console.log('this.preResult',this.preResult);
                } else {
                  bus.$emit('iskaipaning', false);
                }
              } else {
                bus.$emit('iskaipaning', false);
              }

            }
        

    },
    async getBocai() {
      let res = await this.$get(`${window.url}/api/getBocai`);

          if(res.code===200){
            //console.log('第一次刷新调取默认菠菜',res.bocaiTypeList[0]);
            //store.commit('updatebocaiName',res.bocaiTypeList[0].bocaiName);
            //store.commit('updatebocaiTypeId', res.bocaiTypeList[0].bocaiId); 
            store.commit('updatebocaiTypeList',res.bocaiTypeList);
            this.getOddsInfo();

          }
    },
    async getBocaiInfo5sOnce() { 
      //console.log('5秒调一次','this.preResult',this.preResult,'this.iskaipaning',this.iskaipaning);

       if(this.preResult == '' || !this.iskaipaning) {

        let res = await this.$get(`${window.url}/api/bocaiInfo?bocaiTypeId=`+this.bocaiTypeId);

            if(res.code===200){

              //if("companyIsOpenSet": "",//该会员上级公司对该期博彩的封盘状态。状态：0删除，1封盘，2开盘。只有开盘才能投注。)   未做
               //if("isOpenSet": "",//管理员对于当期博彩的开关设置) 

              if(res.data.companyIsOpenSet == 2) {
                if(res.data.isOpenSet == 1) {
                  bus.$emit('iskaipaning', true);

                  bus.$emit('getbocaiInfoData', res.data);

                  store.commit('updatebocaiInfoData',res.data);

                  store.commit('updatepreResult',res.data.preResult);


                  if(res.data.preResult != '') {

                    //开奖了
                    bus.$emit('kaijianglaaa', '');
                  }

                  console.log('this.preResult',this.preResult);
                } else {
                  bus.$emit('iskaipaning', false);
                }
              } else {
                bus.$emit('iskaipaning', false);
              }

            }

       }

        this.t2 = setTimeout(this.getBocaiInfo5sOnce, window.refreshTimeFast);
    },
    getbocaoName() {

      let typeid = '';
      let name = '';

        switch (this.bocaiPathName) {
          case 'chongqindubo':
            typeid = '1';
            name = '重庆时时彩';
            break;
          case 'luckyairship':
            typeid = '8555';
            name = '幸运飞艇';
            break;
          case 'beijingpk10':
            typeid = '8806';
            name = '北京赛车';
            break;
          case 'shandong11xuan5':
            typeid = '8811';
            name = '山东11选5';
            break;
          case 'guangdong11xuan5':
            typeid = '8374';
            name = '广东11选5';
            break;
          case 'jiangxi11xuan5':
            typeid = '8813';
            name = '极速时时彩';
            break;
          case 'pcdandan':
            typeid = '8223';
            name = 'PC蛋蛋';
            break;
          case 'jiangsukuaisan':
            typeid = '8498';
            name = '江苏快3';
            break;
          case 'beijingkuaile8':
            typeid = '8266';
            name = '北京快乐8';
            break;
          case 'jisusaiche':
            typeid = '9057';
            name = '极速赛车';
            break;
          case 'jisudubo':
            typeid = '8815';
            name = '极速时时彩';
            break;
          case 'guangdongkuaile10':
            typeid = '8809';
            name = '广东快乐十分';
            break;
        }

        store.commit('updatebocaiName',name);

        store.commit('updatebocaiTypeId', typeid);

    },
    async getOddsCategory(item) {

      let that = this;

      store.commit('updatebocaiCategory',item);

      $('.OddsCategory'+item.id).addClass('selected').siblings().removeClass('selected');

      const loading = this.$loading({
                lock: true,
                background: 'rgba(0, 0, 0, 0.7)'
              });

          await that.$get(`${window.url}/api/getOdds?bocaiTypeId=`+this.bocaiTypeId+`&bocaiCategoryId=`+item.id).then((res) => {
            that.$handelResponse(res, (result) => {
              loading.close();

              if(result.code===200){

                store.commit('updateoddsList',result.oddsList);

                bus.$emit('getresetOddsCategory', item.name);

              } else {
                store.commit('updatehasError',true);
                store.commit('updatehasErrorMessage',result.msg);
                store.commit('updateorderOddsVisible',true);
              }
            })
          });
    },
    //切换菠菜获取菠菜二级菜单并调数据接口
    async getOddsInfo() {

      let that = this;

          const loading = this.$loading({
                lock: true,
                background: 'rgba(0, 0, 0, 0.7)'
              });

          await that.$get(`${window.url}/api/getOdds?bocaiTypeId=`+this.bocaiTypeId).then((res) => {
            that.$handelResponse(res, (result) => {

              loading.close();
              if(result.code===200){

                that.bocaiCategoryList = result.bocaiCategoryList;

                if([1,8815].findIndex((n) => n==this.bocaiTypeId)>-1) {
                  that.bocaiCategoryList.push({
                    id: 100001,
                    name: "牛牛、梭哈"
                  },{
                    id: 100002,
                    name: "整合"
                  });
                } else if([9057,8806,8555].findIndex((n) => n==this.bocaiTypeId)>-1) {
                  that.bocaiCategoryList.push({
                    id: 100001,
                    name: "三、四、五、六名"
                  },{
                    id: 100002,
                    name: "七、八、九、十名"
                  });
                } else if([8809].findIndex((n) => n==this.bocaiTypeId)>-1) {
                  that.bocaiCategoryList.push({
                    id: 100001,
                    name: "单球1~8"
                  },{
                    id: 100002,
                    name: "总和、龙虎"
                  });
                }

                store.commit('updatebocaiCategory',result.bocaiCategoryList[0]);

                //获取菠菜数据
                this.getOddsCategory(result.bocaiCategoryList[0]);

                //获取菠菜信息
                this.bocaiInfo();

              }
            })
          });

    },
    async getOdds(item,index) {

      $('.bST_1').siblings().removeClass('bST_1_s active');

      if(['重庆时时彩','极速时时彩','广东快乐十分','极速赛车','幸运飞艇','北京赛车','江苏快3'].findIndex((n) => n==item.bocaiName)>-1) {

        $('.div_gameno_'+item.bocaiId).addClass('active').siblings().removeClass('active');


        let path = '';
          switch (item.bocaiName) {
            case '重庆时时彩':
              path = 'chongqindubo';
              break;
            case '幸运飞艇':
              path = 'luckyairship';
              break;
            case '北京赛车':
              path = 'beijingpk10';
              break;
            case '山东11选5':
              path = 'shandong11xuan5';
              break;
            case '广东11选5':
              path = 'guangdong11xuan5';
              break;
            case '江西11选5':
              path = 'jiangxi11xuan5';
              break;
            case 'PC蛋蛋':
              path = 'pcdandan';
              break;
            case '江苏快3':
              path = 'jiangsukuaisan';
              break;
            case '北京快乐8':
              path = 'beijingkuaile8';
              break;
            case '极速赛车':
              path = 'jisusaiche';
              break;
            case '极速时时彩':
              path = 'jisudubo';
              break;
            case '广东快乐十分':
              path = 'guangdongkuaile10';
              break;
          }

        store.commit('updatebocaiTypeId',item.bocaiId);

        this.bocaiInfo();

        //this.clearTime();

        store.commit('updatebocaiName',item.bocaiName);

        this.$router.push({name: path});

        this.getOddsInfo();


      } else {
        bus.$emit('iskaipaning', false);
        store.commit('updatebocaiTypeId','');
        store.commit('updatebocaiName',item.bocaiName);
        this.$router.push({name: 'testbocai'});
      }

      
    }
  },
  mounted() {
    bus.$on('getbocaiInfo', (data) => {
        this.bocaiInfo();
    });
    bus.$on('getcUserInfo', (data) => {
        this.getcUserInfo();
    });
    bus.$on('iskaipaning', (data) => {
        this.iskaipaning = data;
    });
  },
  updated() {
  }
};


</script>
<style scoped lang="less">

#main {
  #maintop {
    * {
        margin: 0;
        padding: 0;
    }
  }

  body, div, span, p, b, textarea, input, select, form, table, tr, td {
        margin: 0;
        padding: 0;
        list-style-type: none;
        font-size: 12px;
        z-index: auto;
        color: #511e02;
    }

    font-family: Verdana,"宋体",Arial,Sans;
    font-size: 12px;
    margin: 0 auto;
    text-align: left;
    overflow: hidden;

    #logo {
        background-image: url(../../static/img/logo.jpg);
        height: 80px;
        left: 0;
        position: absolute;
        top: 0;
        width: 250px;
        z-index: 2;
    }

    img, table {
        border: 0 none;
        border-collapse: collapse;
    }

    td {
        cursor: default;
    }

    img, table {
        border: 0 none;
        border-collapse: collapse;
    }

    a {
        color: #4f260d;
        text-decoration: none;
    }

    a {
        color: white;
        cursor: pointer;
        text-decoration: none;
    }

    #odds_marquee {
        height: 20px;
        line-height: 20px;
    }

    #oc_left {
        height: 20px;
        overflow: hidden;
        position: relative;
        width: 640px;
    }

    #oc_right {
        display: block;
        float: right;
        margin: -16px 10px 0 0;
        padding-left: 10px;
    }

    .odds-c {
        background: #aaa url(../../static/img/odds.png) repeat scroll 0 0;
        display: inline-block;
        height: 13px;
        line-height: 13px;
        width: 13px;
    }

    .oc-down {
        background-position: 0 -13px;
    }

    .bST_1, .bST_1_s {
        border: 0px solid #FF9224;
        background-color: #B3C5EF;
        background-image: url(../../static/img/But1.jpg);
        width: 95px;
        height: 33px;
        font-weight: bold !important;
        margin-right: 5px !important;
    }

    .bST_1 {
        background-position: 0px;
        color: #fff5d7;
        cursor: pointer;
    }
    #div_title div {
        float: left;
        font-family: Verdana,"宋体",Arial,Sans;
        font-size: 13px;
        font-weight: bold;
        line-height: 33px;
        text-align: center;
    }

    .navOne-new {
        display: inline;
        float: right;
    }

    .clearfix {
        overflow: hidden;
    }

    

    .navOne-new .czBtn, .navOne-new .czBtnOn {
      background: url(../../static/img/TopBg.png) no-repeat scroll 0 0;
      color: #fff5d7;
      cursor: pointer;
      display: block;
      float: left;
      font-size: 14px;
      font-weight: bold;
      height: 36px;
      line-height: 36px;
      margin-right: 10px !important;
      padding-right: 10px !important;
      text-align: center;
      text-decoration: none;
      width: 130px;
    }

    .navOne-new .czBtn {
      background: url(../../static/img/TopBg1.png) repeat scroll 0 0;
      width: 140px;
    }

    .navOne-new .czBtn.active {
        background: url(../../static/img/TopBg1.png) repeat scroll 140px 0;
        width: 140px;
    }

    .navOne-new .czBtn, .navOne-new .czBtnOn {
        color: #fff5d7;
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
        line-height: 36px;
        text-align: center;
    }

    #currentType {
        color: #fff5d7;
        height: 33px;
        line-height: 33px;
        display: inline-block;
    }

    #menuLv03 div {
        color: #fed7ad;
    }

    #menuLv03 div a {
        color: #4f260d;
        cursor: pointer;
    }

    .TopLogo_225 {
        background-image: url(../../static/img/TopLogo_225.jpg);
        width:231px;
        height:79px
    }


}

body {
    font-family: Verdana,"宋体",Arial,Sans;
    font-size: 12px;
    margin: 0 auto;
    text-align: left;
}

#footer {
            position: fixed;
            left: 0px;
            bottom: 0px;
            width: 100%;
            height: 26px;
            background-color: #eee;
            z-index: 9999;

        }
</style>
<style lang="less">
#main {
    .el-menu.el-menu--horizontal {
        border-bottom: solid 0px #e6e6e6;
        margin-bottom: 3px;
    }

    .el-submenu__title {
        color: #fff5d7;
        height: 36px;
        line-height: 36px;
        display: inline-block;
    }

    .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
        border-bottom: 0px solid #FCEFC2;
    }

    .el-submenu__title {
        float: left;
        font-family: Verdana, "\5B8B\4F53", Arial, Sans;
        font-size: 13px;
        font-weight: bold;
        line-height: 36px;
        text-align: center;

        cursor: pointer;
        -webkit-transition: border-color .3s,background-color .3s,color .3s;
        transition: border-color .3s,background-color .3s,color .3s;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    .middleContent {
        width: 100%;
        position: fixed;
        width: 100%;
        width: 100%;
        overflow: auto;
        bottom: 26px;
        top: 108px;
        _height: 100%;
        _border-top: 50px solid #eee;
        _border-bottom: 50px solid #eee;
        _top: 0px;
    }

    #oddsshow {
      color: #aaa;
      position: absolute;
  }


  .navOne-new.clearfix {
    width: 150px;
    margin-bottom: 3px !important;
  }


  .navOne-newDown {
    left: 0;
    overflow: visible;
    position: absolute;
    top: 0;
    z-index: 1000;
  }

  a:hover {
    text-decoration: none;
    color: #f1ad45;
    font-weight: bold;
  }

  .navOne-newDown #bankLi-down {
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    background-color: rgb(255, 255, 255);
    border-color: -moz-use-text-color #412500 #412500;
    border-image: none;
    border-radius: 0 0 4px 4px;
    border-style: none solid solid;
    border-width: medium 1px 1px;
    box-shadow: 0 2px 8px #454545;
    display: none;
    position: absolute;
    width: 138px;
  }

  .navOne-newDown ul {
    float: left;
    margin: 0;
    overflow: hidden;
    padding: 0;
    width: 148px;
  }

  .navOne-newDown li {
    border-bottom: 1px dashed #d1d1d1;
    float: left;
    height: 28px;
    line-height: 28px;
    margin-top: 1px;
    list-style: none;
  }

  a {
    color: white;
    cursor: pointer;
    text-decoration: none;
  }

  .navOne-newDown a {
    background: url(../../static/img/TopBg.png) repeat scroll 5px -176px;
    color: rgb(101, 101, 101);
    display: block;
    float: left;
    font-size: 12px;
    height: 27px;
    line-height: 27px;
    padding-left: 35px;
    width: 148px;
  }

   a:hover {
      color: white;
      text-decoration: none;
  }

  .navOne-newDown a:hover {
    background-color: #f7f0e1;
    color: rgb(255, 99, 41);
  }

  .ui-dialog-title {
    font-size: 12px !important;
    color: #511e02 !important;
  }

  .bST_1_s {
    background-position: -120px !important;
    color: #4f260d;
  }

  li.active {
    color: red !important;
    cursor: inherit !important;
    font-weight: bold;
  }

  .bST_1.active {
    color: red !important;
    cursor: inherit !important;
  }

}

</style>