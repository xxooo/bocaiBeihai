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
        
        <tr v-if="dataList.length != 0" v-for="(item,index) in dataList">
          <td>{{item.orderNum}}#<br>{{$timestampToTimeWeek(item.createDate)}}</td>
          <td>{{item.bocaiTypeName}}<br>
            <span style="color:green;">{{item.periods}} 期</span>
          </td>
          <td>
            <font color="blue">{{item.bocaiCategory2Name}}&nbsp;{{item.bocaiOddName}}</font> @  <font color="red" style="font-weight: bold;">{{item.odds}}</font>
          </td>
          <td style="text-align: right;">{{item.betsMoney}}</td>
          <td style="text-align: right;">{{+item.betsMoney*item.odds*1-item.betsMoney*1}}</td>
        </tr>

        <tr style="background-color: rgb(235, 215, 216);">
          <td colspan="2" style="text-align: center;">总计</td>
          <td>{{totalNum}}笔</td>
          <td style="text-align: right;">{{orderTotal}}</td>
          <td style="text-align: right;">{{canWinTotal}}</td>
        </tr>
      </tbody>
    </table>

    <table width="706px" class="DTable" cellpadding="0" cellspacing="1" border="0" style="margin-top:0px;"> 
      <tbody>
        <tr> 

          <td id="tdpage" style=" line-height:20px; text-align:left; height: 12px;" colspan="5">
            <table height="22" cellspacing="0" cellpadding="0" width="100%" border="0">
              <tbody>

                <tr  v-if="resultList.length != 0">
                  <td id="tdpage" style=" line-height:20px; text-align:left; height: 12px;" colspan="5">
                    <pag-ination :resultList="resultList" v-on:getdataList="getdataList"></pag-ination>
                  </td>
                </tr>

                <tr class="t_list_bottom" v-else> 
                  <td align="center">
                    <span style="color:red">当前没有数据。。。</span>
                  </td>
                </tr>

              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
import PagInation from '@/components/common/pagination';
import { mapGetters } from 'vuex';
export default {
  components: {
    PagInation
  },
  data() {
    return {
      nowOrder: {},
      currentPage: 1,
      pageSize: 10,
      totalbetsMoney: 0,
      totalwinMoney: 0,
      currentBetsMoney: 0,
      currentWinMoney: 0,
      resultList: [],
      dataList: []
    }
  },
  created() {
      this.getnowOrder();
  },
  computed: {
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
    async getnowOrder() { 
      let res = await this.$get(`${window.url}/api/nowOrder?currentPage=1&pageSize=100000`);

      if(res.code===200){
        this.resultList = res.page.list;

        this.$emit('resetValue','');

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