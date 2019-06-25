<template>
  <div id="personalinfo" class="duboBodyClass">

    <table width="700px" class="DTable" cellpadding="0" cellspacing="1" border="0" style="margin-top: 0px;" bgcolor="white">
      <tbody>
        <tr>
          <td width="22%" align="right" style="line-height: 17px;" class="t_td_caption_1">会员帐号</td>
          <td width="78%" align="left"><span style="margin-left:5px;">{{userInfo.username}}({{userInfo.handicap}}盘)</span></td>
        </tr>
        <tr style="height: 22px;" id="tr_cashremaining">
          <td align="right" class="t_td_caption_1">帐户余额 </td>
          <td align="left"><span style="font-size: 13px; margin-left:5px;">{{keyongBalance}}</span></td>
        </tr> 
        <tr style="height: 22px;display:none;" id="tr_creditquota">
          <td align="right" class="t_td_caption_1">信用额度 </td>
          <td align="left"><span id="con_creditquota" style="font-size: 13px; margin-left:5px;">{{keyongBalance}}</span></td>
        </tr>
        <tr id="tr_allowcreditquota">
          <td align="right" class="t_td_caption_1">可用金额</td>
          <td align="left"><span id="con_allowcreditquota" style="font-size: 13px;margin-left:5px;">{{userInfo.cashBalance}}</span></td>
        </tr> 
      </tbody>
    </table>


    <table width="700px" border="0" cellpadding="0" cellspacing="0" class="DTable">
      <tbody>
        <tr>
          <td valign="top" class="t17">
            <table width="100%" class="DTable_new" cellpadding="0" cellspacing="0" border="0" style="text-align:left; margin-left:3px;">
              <tbody class="biaoti_tbody">
                <tr class="td_caption_1">
                  <td height="25" align="center">交易类型</td> 
                  <td align="center">{{handicap}}盘退水</td>
                  <td align="center">最高单注限额</td>
                  <td align="center">单期限额</td>
                  <td height="25" align="center">交易类型</td>          
                  <td align="center">{{handicap}}盘退水</td>
                  <td align="center">最高单注限额</td>
                  <td align="center">单期限额</td>
                </tr> 

                <tr id="zhangkai_tr" v-if="stateType != 3">
                  <td colspan="8">
                    <span v-if="stateType == 2">正在加载，请稍后...</span>
                    <a v-if="stateType == 1" id="jczk_a" @click="cUserdewater">+点此展开信用资料</a>
                  </td>
                </tr>
                <tr style="display:none"><td>禁止频繁请求数据,下单机器人开发商请直接联系本网,我们将协助提供安全的连接方案</td></tr>

                <template v-if="stateType == 3">
                  <template v-for="(itemPa,index) in infoList">
                    <tr class="td_caption_1">
                      <td align="center" colspan="8" class="gtitle_td">{{itemPa.bocaiTypeName}}</td>
                    </tr>
                    <tr height="22" align="center" v-for="(item,index) in itemPa.dewaterList">
                      <td align="center">{{item[0].deWaterName}}</td>
                      <td align="center">{{handicap=='a'?item[0].handicapaDewaterRate:handicap=='b'?item[0].handicapbDewaterRate:handicap=='c'?item[0].handicapcDewaterRate:item[0].handicapdDewaterRate}}</td>
                      <td align="right" style="padding-right:5px;">{{item[0].danzhuXiane}}</td>
                      <td align="right" style="padding-right:5px;">{{item[0].danqiXiane}}</td>
                      <template v-if="item[1]">
                        <td align="center">{{item[1].deWaterName}}</td>
                        <td align="center">{{handicap=='a'?item[1].handicapaDewaterRate:handicap=='b'?item[1].handicapbDewaterRate:handicap=='c'?item[1].handicapcDewaterRate:item[1].handicapdDewaterRate}}</td>
                        <td align="right" style="padding-right:5px;">{{item[1].danzhuXiane}}</td>
                        <td align="right" style="padding-right:5px;">{{item[1].danqiXiane}}</td>
                      </template>
                      <template v-else>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </template>
                    </tr>

                  </template>
                  
                </template>
                

                </tbody> 
              </table>
            </td>
          </tr> 
        </tbody>
    </table>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  components: {
  },
  data() {
    return {
      stateType: 1,
      infoList: [],
      handicap: ''
    }
  },
  created() {
  },
  computed: {
    ...mapGetters({
        userInfo: 'getuserInfo'
    }),
    keyongBalance() {
        return this.userInfo ? (this.userInfo.cashBalance*1 + this.userInfo.alreadyBalance*1).toFixed(3) : 0;
    }
  },
  methods: {
    async cUserdewater(id) {

      let that = this;

      this.stateType = 2;

      await that.$get(`${window.url}/api/beihai/credit`).then((res) => {
        that.$handelResponse(res, (result) => {
          this.stateType = 3;
          if(result.code===200){

            this.infoList = result.data.data;
            for(let n in this.infoList) {
              this.infoList[n].dewaterList = _.chunk(this.infoList[n].dewaterList,2);
            }
            this.handicap = result.data.handicap;


            console.log('this.infoList',this.infoList);
          }
        })
      });


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
#personalinfo {
  margin-top: 10px;

  font-family: Verdana,宋体,微軟正黑體, Arial, Sans;
  font-size: 12px;
  color:#511e02;
  text-align:left;
  margin:0 auto;


}
</style>