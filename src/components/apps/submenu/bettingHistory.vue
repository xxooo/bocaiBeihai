<template>
  <div id="bettingHistory" class="duboBodyClass">

    <table width="95%" align="left" cellspacing="0" cellpadding="0" style="margin-top:10px;">
      <tbody>
        <tr>
          <td>
            &nbsp;&nbsp;
            彩种：
            <select id="ddlgame" @change="hisOrder"  v-model="bocaiTypeId">
                <option value="" selected="selected">全部</option>
                <option v-for="(item,index) in bocaiTypeList" :value="item.bocaiId">{{item.bocaiName}}</option>
            </select>

            &nbsp;
            类型：
            <select id="ddlstatus" @change="hisOrder" v-model="betHisType">
                <option value="1" selected="selected">已结算</option>
                <option value="6">作废单</option>
                <option value="2">未结算</option>
                <option value="3">已结算-不中</option>
                <option value="4">已结算-中奖</option>
                <option value="5">已结算-和</option>

            </select>
          </td>
        </tr>

        <tr>   
          <td id="tdlist" valign="top">
            <table width="700px" class="DTable" cellpadding="0" cellspacing="1" border="0">
              <tbody>
                <tr align="center" class="td_caption_1">
                  <td style="width:150px;">交易日期</td>
                  <td style="width:82px;">注单笔数</td>
                  <td style="width:130px;">下注金额</td>
                  <td style="width:120px;">输赢结果</td> 
                  <td style="width:90px;">退水</td>
                  <td style="width:120px;">退水后结果</td>
                </tr>
                <tr v-if="afterWeekPage.length != 0" height="20px" class="hoverTrclass" v-for="(item,index) in afterWeekPage">
                  <td style="width: 150px;">{{$timestampToTimeWeekJi(item.createDateStr)}}</td>     <!-- $timestampToTimeWeekJi(item.createDate) -->   
                  <td style="width: 82px;">{{item.orderCount}}</td>
                  <td style="width: 130px; padding-right: 5px;" align="right">{{item.betsMoneySum}}</td>
                  <td style="width: 120px; padding-right: 5px;" align="right">{{item.winnerMoneySum}}</td>
                  <td style="width: 90px; padding-right: 5px;" align="right">{{item.dewater}}</td>
                  <td style="width: 120px; padding-right: 5px;" align="right">{{item.dewaterMoney}}</td>
                </tr>
                <tr v-if="afterWeekPage.length == 0" height="20px">
                  <td style="width: 150px;"></td>
                  <td style="width: 82px;"></td>
                  <td style="width: 130px; padding-right: 5px;" align="right"></td>
                  <td style="width: 120px; padding-right: 5px;" align="right"></td>
                  <td style="width: 90px; padding-right: 5px;" align="right"></td>
                  <td style="width: 120px; padding-right: 5px;" align="right"></td>
                </tr>
                <tr class="t_list_bottom" style="font-weight:bold" height="20px">
                  <td>上周</td>
                  <td>{{orderAllAfter}}</td>
                  <td align="right" style="padding-right:5px;">{{betsAllAfter}}</td>
                  <td align="right" style="padding-right:5px;">{{winnerAllAfter}}</td>
                  <td align="right" style="padding-right:5px;">{{tuishuiAllAfter}}</td>
                  <td align="right" style="padding-right:5px;">{{tuisRuseltAllAfter}}</td>
                </tr>
              </tbody>
            </table>
            <table width="700px" class="DTable" cellpadding="0" cellspacing="1" border="0">
              <tbody>
                <tr align="center" class="td_caption_1">
                  <td style="width:150px;">交易日期</td>
                  <td style="width:82px;">注单笔数</td>
                  <td style="width:130px;">下注金额</td>
                  <td style="width:120px;">输赢结果</td> 
                  <td style="width:90px;">退水</td>
                  <td style="width:120px;">退水后结果</td>
                </tr>
                <tr v-if="nowWeekPage.length != 0" height="20px" class="hoverTrclass" v-for="(item,index) in nowWeekPage">
                  <td style="width: 150px;">{{$timestampToTimeWeekJi(item.createDateStr)}}</td>
                  <td style="width: 82px;">{{item.orderCount}}</td>
                  <td style="width: 130px; padding-right: 5px;" align="right">{{item.betsMoneySum}}</td>
                  <td style="width: 120px; padding-right: 5px;" align="right">{{item.winnerMoneySum}}</td>
                  <td style="width: 90px; padding-right: 5px;" align="right">{{item.dewater}}</td>
                  <td style="width: 120px; padding-right: 5px;" align="right">{{item.dewaterMoney}}</td>
                </tr>

                <!-- <tr height="20px" onmouseover="ModColor(this,'#FFFF66')" onmouseout="MoveColor(this)"><td style="width: 150px;">07-09  星期二</td><td style="width: 82px;">0</td><td style="width: 130px; padding-right: 5px;" align="right">0</td><td style="width: 120px; padding-right: 5px;" align="right">0.00</td><td style="width: 90px; padding-right: 5px;" align="right">0.00</td><td style="width: 120px; padding-right: 5px;" align="right">0.00</td></tr> -->
                
                <tr v-if="nowWeekPage.length == 0" height="20px">
                  <td style="width: 150px;"></td>
                  <td style="width: 82px;"></td>
                  <td style="width: 130px; padding-right: 5px;" align="right"></td>
                  <td style="width: 120px; padding-right: 5px;" align="right"></td>
                  <td style="width: 90px; padding-right: 5px;" align="right"></td>
                  <td style="width: 120px; padding-right: 5px;" align="right"></td>
                </tr>
                <tr class="t_list_bottom" style="font-weight:bold" height="20px">
                  <td>本周</td>
                  <td>{{orderAllNow}}</td>
                  <td align="right" style="padding-right:5px;">{{betsAllNow}}</td>
                  <td align="right" style="padding-right:5px;">{{winnerAllNow}}</td>
                  <td align="right" style="padding-right:5px;">{{tuishuiAllNow}}</td>
                  <td align="right" style="padding-right:5px;">{{tuisRuseltAllNow}}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>

    <table width="706px" class="DTable" cellpadding="0" cellspacing="1" border="0" id="tblist">
      <tbody>
        <tr>
            <td colspan="5" align="right">
              <input type="button" value="返回" onmouseover="this.className='button_bg2'" onmouseout="this.className='button_bg1'" class="button_bg1" onclick="backGo()">
            </td>
        </tr> 
        <tr>
          <td>28055134#<br>&nbsp;07-10 17:06:16&nbsp;三</td>
          <td>极速时时彩<br><span style="color:green;">11101814 期</span></td>
          <td><font color="blue">第二球大小&nbsp;大</font> @  <font color="red" style="font-weight: bold;">1.9876</font></td>
          <td>3.00</td>
          <td>0.02</td>
        </tr>
        <tr style="background-color: rgb(235, 215, 216);">
          <td colspan="2">合计:</td>
          <td style="text-align: right;">共 1笔</td>
          <td style="text-align: right;">3.00</td>
          <td style="text-align: right;">0.02</td>
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
      betHisType: '1',

      betInfo: {},
      currentPage: 1,
      dayStr: '',
      ifshowBetInfo: false,
      totalbetsMoney: 0,
      totalwinMoney: 0,
      totalpaicai: 0,
      bocaiTypeId: '',
      afterWeekPage: [],
      sumData: {},
      nowWeekPage: [],
      betsAllNow: '',
      winnerAllNow: '',
      orderAllNow: '',
      tuishuiAllNow: '',
      tuisRuseltAllNow: '',
      betsAllAfter: '',
      winnerAllAfter: '',
      orderAllAfter: '',
      tuishuiAllAfter: '',
      tuisRuseltAllAfter: '',


    }
  },
  created() {
    this.hisOrder();
  },
  computed: {
    ...mapGetters({
      bocaiTypeList: 'getbocaiTypeList'
    })
  },
  methods: {
    async hisOrder() {

      this.betsAllNow = '';
      this.winnerAllNow = '';
      this.orderAllNow = '';
      this.betsAllAfter = '';
      this.winnerAllAfter = '';
      this.orderAllAfter = '';

      this.tuishuiAllNow = '';
      this.tuisRuseltAllNow = '';
      this.tuishuiAllAfter = '';
      this.tuisRuseltAllAfter = '';


      let that = this;

      let objdatas = {
        bocaiTypeId: this.bocaiTypeId,
        status: this.betHisType
      }

      const loading = this.$loading({
        lock: true,
        background: 'rgba(0, 0, 0, 0.7)'
      });  
      await that.$post(`${window.url}/api/beihai/report`,objdatas).then((res) => {
        that.$handelResponse(res, (result) => {
          loading.close();
          if(result.code===200){

            this.nowWeekPage = res.nowWeekPage;

            for(let n in res.nowWeekPage) {
              this.orderAllNow = +this.orderAllNow + res.nowWeekPage[n].orderCount*1;
              this.betsAllNow = +this.betsAllNow + res.nowWeekPage[n].betsMoneySum*1;
              this.winnerAllNow = +this.winnerAllNow + res.nowWeekPage[n].winnerMoneySum*1;  
              this.tuishuiAllNow = +this.tuishuiAllNow + res.nowWeekPage[n].dewater*1;
              this.tuisRuseltAllNow = +this.tuisRuseltAllNow + res.nowWeekPage[n].dewaterMoney*1;
            }

            this.afterWeekPage = res.afterWeekPage;

            for(let n in res.afterWeekPage) {
              this.orderAllAfter = +this.orderAllAfter + res.afterWeekPage[n].orderCount*1;
              this.betsAllAfter = +this.betsAllAfter + res.afterWeekPage[n].betsMoneySum*1;
              this.winnerAllAfter = +this.winnerAllAfter + res.afterWeekPage[n].winnerMoneySum*1;
              this.tuishuiAllAfter = +this.tuishuiAllAfter + res.afterWeekPage[n].dewater*1;
              this.tuisRuseltAllAfter = +this.tuisRuseltAllAfter + res.afterWeekPage[n].dewaterMoney*1;
            }

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
  
</style>