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
                <option value="" selected="selected">已结算</option>
                <option value="0">作废单</option>
                <option value="1">未结算</option>
                <option value="2">已结算-不中</option>
                <option value="3">已结算-中奖</option>
                <option value="4">已结算-和</option>
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
                <tr height="20px" class="bethisTrclass">
                  <td style="width: 150px;">06-10  星期一</td>
                  <td style="width: 82px;">0</td>
                  <td style="width: 130px; padding-right: 5px;" align="right">0</td>
                  <td style="width: 120px; padding-right: 5px;" align="right">0.00</td>
                  <td style="width: 90px; padding-right: 5px;" align="right">0.00</td>
                  <td style="width: 120px; padding-right: 5px;" align="right">0.00</td>
                </tr>
                <tr class="t_list_bottom" style="font-weight:bold" height="20px">
                  <td>上周</td>
                  <td>0</td>
                  <td align="right" style="padding-right:5px;">0</td>
                  <td align="right" style="padding-right:5px;">0</td>
                  <td align="right" style="padding-right:5px;">0</td>
                  <td align="right" style="padding-right:5px;">0</td>
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
                <tr height="20px" class="bethisTrclass">
                  <td style="width:150px;">06-17  星期一</td>
                  <td style="width:82px;">0</td>
                  <td style="width:130px;padding-right:5px;" align="right">0</td>
                  <td style="width:120px;padding-right:5px;" align="right">0.00</td>
                  <td style="width:90px;padding-right:5px;" align="right">0.00</td>
                  <td style="width:120px;padding-right:5px;" align="right">0.00</td>
                </tr>
                <tr class="t_list_bottom" style="font-weight:bold" height="20px">
                  <td>本周</td>
                  <td>3</td>
                  <td align="right" style="padding-right:5px;">9.00</td>
                  <td align="right" style="padding-right:5px;">-5.02</td>
                  <td align="right" style="padding-right:5px;">0.05</td>
                  <td align="right" style="padding-right:5px;">-4.97</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>


    <!-- <div class="right">
      <div id="submenuDiv">
        <div class="box">

          <div class="header">
            <p>下注历史概要</p>
          </div> 
          <div class="default-list">

            <div v-if="!ifshowBetInfo">
              <p>
                游戏：
                <el-select v-model="bocaiTypeId" placeholder="请选择" size="mini" @change="changeboType">
                  <el-option label="全部" :value="''"></el-option>
                  <el-option
                    v-for="item in bocaiTypeList"
                    :key="item.value"
                    :label="item.bocaiName"
                    :value="item.bocaiId">
                  </el-option>
                </el-select>
                <a class="refresh r">刷新</a>
              </p> 
              <table class="sum_tab">
                <caption><i class="icon-calendar"></i> 本周</caption> 
                <thead>
                  <tr>
                    <th>日期</th> 
                    <th>投注额</th> 
                    <th>派彩结果</th> 
                    <th>注数</th>
                  </tr>
                </thead> 
                <tbody>
                  <tr v-if="nowWeekPage.length*1 == '0'">
                    <td style="line-height: 26px;" colspan="4">{{"暂无数据"}}</td> 
                  </tr>
                  <tr v-else v-for="item in nowWeekPage">
                    <td style="line-height: 26px;"><a title="历史详情" class="link" @click="goBetInfo(item.createDateStr)">{{item.createDateStr}}</a></td>
                    <td style="line-height: 26px;">{{item.betsMoneySum}}</td> 
                    <td style="line-height: 26px;">{{item.winnerMoneySum}}</td> 
                    <td style="line-height: 26px;">{{item.orderCount}}</td>
                  </tr>
                </tbody> 
                <tr class="tab-footer">
                  <td>总计：</td> 
                  <td>{{betsAllNow}}</td> 
                  <td>{{winnerAllNow}}</td> 
                  <td>{{orderAllNow}}</td>
                </tr>
              </table>

              <table class="sum_tab">
                <caption><i class="icon-calendar"></i> 上周</caption> 
                <thead>
                  <tr>
                    <th>日期</th> 
                    <th>投注额</th> 
                    <th>派彩结果</th> 
                    <th>注数</th>
                  </tr>
                </thead> 
                <tbody>
                  <tr v-if="afterWeekPage.length*1 == '0'">
                    <td style="line-height: 26px;" colspan="4">{{"暂无数据"}}</td> 
                  </tr>
                  <tr v-else v-for="item in afterWeekPage">
                    <td style="line-height: 26px;"><a title="历史详情" class="link" @click="getbetInfo(item.createDateStr)">{{item.createDateStr}}</a></td>
                    <td style="line-height: 26px;">{{item.betsMoneySum}}</td> 
                    <td style="line-height: 26px;">{{item.winnerMoneySum}}</td> 
                    <td style="line-height: 26px;">{{item.orderCount}}</td>
                  </tr>
                </tbody> 
                <tr class="tab-footer">
                  <td>总计：</td> 
                  <td>{{betsAllAfter}}</td> 
                  <td>{{winnerAllAfter}}</td> 
                  <td>{{orderAllAfter}}</td>
                </tr>
              </table>
            </div>

            <div v-else>
              <p><a class="back" @click="ifshowBetInfo = false">返回</a></p> 
              <table>
                <thead>
                  <tr>
                    <th>编号</th> 
                    <th>注单号/投注日期</th> 
                    <th>投注类型</th> 
                    <th>内容</th> 
                    <th>投注额</th> 
                    <th>可赢金额</th> 
                    <th>派彩</th> 
                    <th>注单状态</th>
                  </tr>
                </thead> 
                <tbody>
                  <tr v-for="(item,index) in betInfo.list">
                    <td>{{index*1 +1}}</td> 
                    <td><p>{{item.orderNum}}</p> <p>{{$timestampToTime(item.createDate)}}</p></td> 
                    <td><p>{{item.bocaiTypeName}}</p> <p>{{item.periods}} 期</p></td> 
                    <td><p><span class="odds-font">{{item.bocaiCategory2Name}} {{item.bocaiOddName}}</span>@<span class="odds-font">{{item.bocaiOdds}}</span></p></td> 
                    <td>{{item.betsMoney}}</td> 
                    <td>{{item.winnerMoney}}</td> 
                    <td class="red">{{item.paicai}}</td> 
                    <td><span>{{item.status=='1'?'已结算' : '未结算'}}</span></td>
                  </tr>

                </tbody> 
                <tr class="tab-footer">
                  <td colspan="4" class="tar">此页面统计：</td> 
                  <td>{{totalbetsMoney}}</td> 
                  <td>{{totalwinMoney}}</td> 
                  <td>{{totalpaicai}}</td> 
                  <td>&nbsp;</td>
                </tr> 
                <tr class="tab-footer">
                  <td colspan="4" class="tar">总计：</td> 
                  <td>{{sumData.betsMoneySum}}</td> 
                  <td>{{sumData.winnerMoneySum}}</td> 
                  <td>{{sumData.winnerMoneyResultSum}}</td> 
                  <td>&nbsp;</td>
                </tr>
              </table> 

              <div class="block" v-if="betInfo.totalPage > 1">
                  <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-size="betInfo.pageSize"
                    layout="total, prev, pager, next"
                    :total="betInfo.totalCount*1">
                  </el-pagination>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div> -->


  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  components: {
  },
  data() {
    return {
      betHisType: '',

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
      betsAllAfter: '',
      winnerAllAfter: '',
      orderAllAfter: ''
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
    GetReportList() {

    },

    handleCurrentChange(cpage) {
      this.currentPage = cpage;
      this.getbetInfo();
    },
    goBetInfo(daytime) {
      this.dayStr = daytime;

      this.getbetInfo();
    },
    async getbetInfo() {

      let res = await this.$get(`${window.url}/api/hisOrderInfo?currentPage=`+this.currentPage+`&pageSize=10&dayStr=`+this.dayStr);
      if(res.code===200){
        this.betInfo = res.page;
        this.sumData = res.sumData[0];

        for(let n in this.betInfo.list) {
          // this.betInfo.list[n].winMoney =  this.betInfo.list[n].betsMoney*this.betInfo.list[n].bocaiOdds*1 - this.betInfo.list[n].betsMoney*1;
          if(this.betInfo.list[n].winnerStatus == 0) {
            this.betInfo.list[n].paicai = this.betInfo.list[n].betsMoney*(-1);
          } else if(this.betInfo.list[n].winnerStatus == 1) {
            this.betInfo.list[n].paicai = this.betInfo.list[n].winnerMoney;
          } else {
            this.betInfo.list[n].paicai = 0;
          }
          this.totalbetsMoney += this.betInfo.list[n].betsMoney*1;
          this.totalwinMoney += this.betInfo.list[n].betsMoney*1*this.betInfo.list[n].bocaiOdds*1 - this.betInfo.list[n].betsMoney*1;
          this.totalpaicai += this.betInfo.list[n].paicai*1;
        }

      }

      this.ifshowBetInfo = true;

    },
    changeboType(data) {
      this.hisOrder();
    },
    async hisOrder() {

      this.betsAllNow = '';
      this.winnerAllNow = '';
      this.orderAllNow = '';
      this.betsAllAfter = '';
      this.winnerAllAfter = '';
      this.orderAllAfter = '';


      let that = this;

      let objdatas = {
        bocaiTypeId: this.bocaiTypeId,
        status: this.betHisType
      }

      // const loading = this.$loading({
      //   lock: true,
      //   background: 'rgba(0, 0, 0, 0.7)'
      // });  
      await that.$post(`${window.url}/api/beihai/report`,objdatas).then((res) => {
        that.$handelResponse(res, (result) => {
          //loading.close();
          if(result.code===200){
            this.historyDataList = result.page;

            for(let n in this.historyDataList) {
              this.moneyAll += this.historyDataList[n].money*1;
              this.totalMoneyAll += this.historyDataList[n].totalMoney*1;
            }

          }
        })
      });


      // let res = await this.$get(`${window.url}/api/hisOrder?bocaiTypeId=`+this.bocaiTypeId);

      //   if(res.code===200){
      //       this.nowWeekPage = res.page.nowWeekPage;

      //       for(let n in res.page.nowWeekPage) {
      //         this.betsAllNow += res.page.nowWeekPage[n].betsMoneySum*1;
      //         this.winnerAllNow += res.page.nowWeekPage[n].winnerMoneySum*1;
      //         this.orderAllNow += res.page.nowWeekPage[n].orderCount*1;
      //       }

      //       this.afterWeekPage = res.page.afterWeekPage;

      //       for(let n in res.page.afterWeekPage) {
      //         this.betsAllAfter += res.page.afterWeekPage[n].betsMoneySum*1;
      //         this.winnerAllAfter += res.page.afterWeekPage[n].winnerMoneySum*1;
      //         this.orderAllAfter += res.page.afterWeekPage[n].orderCount*1;
      //       }

      //       console.log('afterWeekPage.length*1',this.afterWeekPage.length*1);
      //       console.log('nowWeekPage.length*1',this.nowWeekPage.length*1);
      //   } 
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
  #bettingHistory {
    .bethisTrclass:hover td {
      background-color: rgb(255,255,102);
    }
  }
</style>