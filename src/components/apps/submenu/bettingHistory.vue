<template>
  <div id="bettingHistory" class="duboBodyClass">

    <table v-if="ifshowBetInfo" width="95%" align="left" cellspacing="0" cellpadding="0" style="margin-top:10px;">
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
                  <td :class="item.createDateStr != ''? 'hasBule':''" style="width: 150px;">{{$timestampToTimeWeekJi(item.createDateStr)}}</td>
                  <td style="width: 82px;">{{item.orderCount}}</td>
                  <td style="width: 130px; padding-right: 5px;" align="right">{{item.betsMoneySum}}</td>
                  <td style="width: 120px; padding-right: 5px;" align="right">{{item.winnerMoneySum}}</td>
                  <td style="width: 90px; padding-right: 5px;" align="right">{{item.dewater}}</td>
                  <td :class="item.dewaterMoney != ''? 'hasRed':''" style="width: 120px; padding-right: 5px;" align="right" @click="getbetInfo(item.createDateStr)">{{item.dewaterMoney}}</td>
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
                  <td align="right" style="padding-right:5px;">{{betsAllAfter==''?0.00:betsAllAfter.toFixed(2)}}</td>
                  <td align="right" style="padding-right:5px;">{{winnerAllAfter==''?0.00:winnerAllAfter.toFixed(2)}}</td>
                  <td align="right" style="padding-right:5px;">{{tuishuiAllAfter==''?0.00:tuishuiAllAfter.toFixed(2)}}</td>
                  <td align="right" style="padding-right:5px;">{{tuisRuseltAllAfter==''?0.00:tuisRuseltAllAfter.toFixed(2)}}</td>
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
                  <td :class="item.createDateStr != ''? 'hasBule':''" style="width: 150px;">{{$timestampToTimeWeekJi(item.createDateStr)}}</td>
                  <td style="width: 82px;">{{item.orderCount}}</td>
                  <td style="width: 130px; padding-right: 5px;" align="right">{{item.betsMoneySum}}</td>
                  <td style="width: 120px; padding-right: 5px;" align="right">{{item.winnerMoneySum}}</td>
                  <td style="width: 90px; padding-right: 5px;" align="right">{{item.dewater}}</td>
                  <td :class="item.dewaterMoney != ''? 'hasRed':''" style="width: 120px; padding-right: 5px;" align="right" @click="getbetInfo(item.createDateStr)">{{item.dewaterMoney}}</td>
                </tr>

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
                  <td align="right" style="padding-right:5px;">{{betsAllNow==''?0.00:betsAllNow.toFixed(2)}}</td>
                  <td align="right" style="padding-right:5px;">{{winnerAllNow==''?0.00:winnerAllNow.toFixed(2)}}</td>
                  <td align="right" style="padding-right:5px;">{{tuishuiAllNow==''?0.00:tuishuiAllNow.toFixed(2)}}</td>
                  <td align="right" style="padding-right:5px;">{{tuisRuseltAllNow==''?0.00:tuisRuseltAllNow.toFixed(2)}}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>


    <table v-else width="706px" class="DTable" cellpadding="0" cellspacing="1" border="0" id="tblist">
      <tbody>
        <tr>
            <td colspan="5" align="right">
              <input type="button" value="返回" class="button_bg1" @click="backGo()">
            </td>
        </tr> 
        <tr v-if="dataList.length != 0" v-for="(item,index) in dataList">
          <td>{{item.orderNum}}#<br>&nbsp;{{$timestampToTimeWeek(item.createDateStr)}}</td>
          <td>{{item.bocaiTypeName}}<br><span style="color:green;">{{item.periods}} 期</span></td>
          <td><font color="blue">{{item.bocaiCategory2Name}}&nbsp;{{item.bocaiOddName}}</font> @  <font color="red" style="font-weight: bold;">{{item.bocaiOdds}}</font></td>
          <td>{{item.betsMoney}}</td>
          <td :class="item.winnerStatus == 0? 'red' : ''">{{item.winnerStatus == 0 ? -item.betsMoney*1 : +item.betsMoney*item.bocaiOdds*1 - item.betsMoney*1}}</td>
        </tr>

        <tr style="background-color: rgb(235, 215, 216);">
          <td colspan="2">合计:</td>
          <td style="text-align: right;">共 {{betInfo.totalCount}}笔</td>
          <td style="text-align: right;">{{sumData.betsMoneySum}}</td>
          <td style="text-align: right;">{{sumData.winnerMoneyResultSum}}</td>
        </tr>

      </tbody>

    </table>

    <table width="706px" class="DTable" cellpadding="0" cellspacing="1" border="0" style="margin-top:0px;"> 
      <tbody>
        <tr v-if="resultList.length > 0"> 
          <td id="tdpage" style=" line-height:20px; text-align:left; height: 12px;" colspan="5">
            <pag-ination :resultList="resultList" v-on:getdataList="getdataList"></pag-ination>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PagInation from '@/components/common/pagination';

export default {
  components: {
    PagInation
  },
  data() {
    return {
      betHisType: '1',
      sumData: {},
      betInfo: {},
      currentPage: 1,
      dayStr: '',
      ifshowBetInfo: false,
      totalbetsMoney: 0,
      totalwinMoney: 0,
      totalpaicai: 0,
      bocaiTypeId: '',
      afterWeekPage: [],
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
      resultList: [],
      ifshowBetInfo: true,
      dataList: []

    }
  },
  created() {
    this.hisOrder();
  },
  computed: {
    ...mapGetters({
      bocaiTypeList: 'getbocaiTypeList'
    }),
    totalNum() {
      return this.resultList.length != 0 ? this.resultList.length : 0; 
    },
    orderTotal() {
      let total = 0;
      for(let n in this.resultList) {
        total = total + this.resultList[n].betsMoney*1;
      }
      return this.resultList.length != 0 ? total : 0; 
    },
    canWinTotal() {
      let total = 0;
      for(let n in this.resultList) {
        total = total + this.resultList[n].betsMoney*this.resultList[n].odds*1-this.resultList[n].betsMoney*1;
      }
      return this.resultList.length != 0 ? total : 0; 
    }
  },
  methods: {
    getdataList(data) {
      this.dataList = data;
    },
    backGo() {
      this.hisOrder();
      this.ifshowBetInfo = true;
    },
    async getbetInfo(daytime) {

      let res = await this.$get(`${window.url}/api/hisOrderInfo?currentPage=1&pageSize=100000&dayStr=`+daytime);
      if(res.code===200){
        this.betInfo = res.page;
        this.resultList = res.page.list;
        this.sumData = res.sumData[0];


      }

      this.ifshowBetInfo = false;

    },
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