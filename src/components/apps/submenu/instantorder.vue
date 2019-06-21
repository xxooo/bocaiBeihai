<template>
  <div id="instantorder" class="duboBodyClass" style="vertical-align:top;">
    <table width="706px" class="DTable" cellpadding="0" cellspacing="1" border="0" id="tblist"> 
      <tbody>
        <tr class="td_caption_1">
          <td style="width:125px;">注单号/时间</td>
          <td style="width:125px;">下注类型</td>
          <td style="width:240px;">注单明细</td>
          <td style="width:90px;">下注金额</td>
          <td style="width:120px;">可赢金额</td>
        </tr> 
        
        <tr>
          <td>1029333765#<br>06-21&nbsp;22:27:07&nbsp;五</td>
          <td>重庆时时彩<br>
            <span style="color:green;">20190621055 期</span>
          </td>
          <td>
            <font color="blue">第二球大小&nbsp;小</font> @  <font color="red" style="font-weight: bold;">1.9878</font>
          </td>
          <td style="text-align: right;">3.00</td>
          <td style="text-align: right;">2.96</td>
        </tr>
        <tr style="background-color: rgb(235, 215, 216);">
          <td colspan="2" style="text-align: center;">总计</td>
          <td>3笔</td>
          <td style="text-align: right;">9.00</td>
          <td style="text-align: right;">8.89</td>
        </tr>

      </tbody>
    </table>

    <table width="706px" class="DTable" cellpadding="0" cellspacing="1" border="0" style="margin-top:0px;"> 
      <tbody>
        <tr> 
          <td id="tdpage" style=" line-height:20px; text-align:left; height: 12px;" colspan="5">
            <table height="22" cellspacing="0" cellpadding="0" width="100%" border="0">
              <tbody>
                <tr class="t_list_bottom">
                  <td align="center">
                    <span style="color:red">当前没有数据。。。</span>
                  </td>
                </tr>

                <!-- <tr class="t_list_bottom">
                  <td align="left">&nbsp;共&nbsp;3&nbsp;期记录</td>
                  <td align="center">共&nbsp;1&nbsp;页</td>
                  <td align="right">
                    <span>前一页&nbsp;</span>『&nbsp;&nbsp;
                    <span class="current">1</span>&nbsp;』
                    <span> &nbsp;后一页 </span>
                  </td>
                </tr> -->

              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>




  <!-- <div class="content-main">
    <div class="right">
      <div id="submenuDiv">
        <div class="box">
          <div class="header">
            <p>即时注单</p>
          </div> 
          <div class="default-list">
            <p class="tar left">
              <a class="refresh l" @click="getnewdata"><i class="icon-refresh"></i>刷新</a>
            </p> 
            <table>
              <thead>
                <tr>
                  <th>编号</th> 
                  <th>注单号/投注日期</th> 
                  <th>投注类型</th> 
                  <th>内容</th> 
                  <th>投注额</th> 
                  <th>可赢金额</th>
                </tr>
              </thead> 

              <tbody v-for="(item,index) in nowOrder.list">
                <tr>
                  <td>{{index*1+1}}</td> 
                  <td>
                    <p>{{item.orderNum}}</p> 
                    <p>{{item.createDate}}</p>
                  </td> 
                  <td>
                    <p>{{item.bocaiTypeName}}</p> 
                    <p>{{item.periods}} 期</p>
                  </td> 
                  <td>
                    <p>
                    <span class="odds-font">{{item.bocaiOddName}}</span>
                              @
                    <span class="odds-font">{{item.odds}}</span>
                    </p>
                  </td> 
                  <td>{{item.betsMoney}}</td> 
                  <td>{{item.winMoney}}</td>
                </tr>
              </tbody> 

              <tr class="tab-footer">
                <td colspan="4" class="tar">此页面统计：</td> 
                <td>{{currentBetsMoney}}</td> 
                <td>{{currentWinMoney}}</td>
              </tr> 
              <tr class="tab-footer">
                <td colspan="4" class="tar">总计：</td> 
                <td>{{totalbetsMoney}}</td> 
                <td>{{totalwinMoney}}</td>
              </tr>
            </table>
            <div class="block" v-if="nowOrder.totalPage*1>1">
              <el-pagination
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="nowOrder.pageSize"
                layout="total, prev, pager, next"
                :total="nowOrder.totalCount*1">
              </el-pagination>
            </div>
          </div> 
        </div>
      </div>
    </div>
  </div> -->


</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      nowOrder: {},
      currentPage: 1,
      pageSize: 10,
      totalbetsMoney: 0,
      totalwinMoney: 0,
      currentBetsMoney: 0,
      currentWinMoney: 0
    }
  },
  created() {
      this.getnowOrder2();
      this.getnowOrder();
  },
  computed: {
  },
  methods: {
    getnewdata() {
      this.totalbetsMoney = 0;
      this.totalwinMoney = 0;
      this.currentPage = 1;
      this.getnowOrder2();
      this.getnowOrder();
    },
    handleCurrentChange(data) {
      this.currentPage = data;
      this.getnowOrder();
    },
    async getnowOrder() { 
      this.currentBetsMoney = 0;
      this.currentWinMoney = 0;

      // api/hisOrderInfo?currentPage=1&pageSize=10&dayStr=2018-10-23

      let res = await this.$get(`${window.url}/api/nowOrder?currentPage=`+this.currentPage+`&pageSize=`+this.pageSize);

          if(res.code===200){
            this.nowOrder = res.page;

            for(let n in this.nowOrder.list) {
              console.log('this.nowOrder[n].createDate',this.nowOrder);
              this.nowOrder.list[n].createDate = this.$timestampToTime(this.nowOrder.list[n].createDate);
              this.nowOrder.list[n].winMoney = this.nowOrder.list[n].odds*this.nowOrder.list[n].betsMoney*1;

              this.currentBetsMoney += this.nowOrder.list[n].betsMoney*1;
              this.currentWinMoney += this.nowOrder.list[n].winMoney*1;
            }

          }
    },              
    async getnowOrder2() { 
      let res = await this.$get(`${window.url}/api/nowOrder?currentPage=`+this.currentPage+`&pageSize=1000`);

          if(res.code===200){

            for(let n in res.page.list) {
              let winMoney = res.page.list[n].odds*res.page.list[n].betsMoney*1;

              this.totalbetsMoney += res.page.list[n].betsMoney*1;
              this.totalwinMoney += winMoney*1;
            }
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
  
</style>