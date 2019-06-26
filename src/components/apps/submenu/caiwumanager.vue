<template>
  <div id="caiwumanager" class="duboBodyClass">

    <table width="700" border="0" cellspacing="0" cellpadding="0">
      <tbody>
        <tr>
          <td width="auto" class="F_bold">&nbsp;帐务查询</td>
          <td height="30" align="right">

            <table border="0" cellpadding="0" cellspacing="0">
              <tbody>
                <tr> 
                  <td>日期区间</td>
                  <td class="startlefttime">
                    <DateBox  v-model="startTime" format="yyyy-MM-dd"></DateBox>

                  </td>
                  <td>至</td>
                  <td>
                    <DateBox v-model="endTime" format="yyyy-MM-dd"></DateBox>
                  </td>
                  <td align="right">
                   <input type="button" value="查询" @click="searchMembers()" class="searchcaiwu">  
                 </td>
               </tr>
             </tbody>
           </table>

         </td>
       </tr>

       <tr>
        <td colspan="3">

          <div id="div_main" style="width: 100%; margin: 0px auto;">
            <table  width="100%" class="DTable" border="0" cellspacing="1" cellpadding="0" style="margin-top:0px;">
              <tbody>
                <tr class="td_caption_1"> 
                  <td height="25">交易序号</td>
                  <td>时间</td>
                  <td>交易类型</td>
                  <td>交易金额</td>
                  <td>帐户余额</td>
                  <td>备注</td> 
                </tr> 
                <template v-if="hasDataList">
                  <tr class="caiwuListTr" v-for="(item,index) in historyDataList.list">
                    <td align="center">{{item.id}}</td>
                    <td align="center">{{$timestampToTime(item.createDate)}}</td>
                    <td align="center">{{item.quotaType =='1'?'充值' : '提现'}}</td>
                    <td align="right">{{item.quotaAmount}}</td>
                    <td align="right">{{item.balance}}</td>
                    <td align="center">{{item.quotaRemark}}</td>
                  </tr>
                  <tr>
                    <td colspan="3" align="right">总计：</td>
                    <td align="right">{{moneyAll}}</td>
                    <td align="center">--</td>
                    <td align="center">--</td>
                  </tr>
                </template>
              </tbody>
            </table>

            <table v-if="!hasDataList" width="100%" class="tableH" cellspacing="0" cellpadding="0" border="1" bordercolor="#78B8DE"  style="margin-top:10px; color:red; font-size:14px; line-height:30px; text-align:center;  background-color:White;">
              <tbody>
                <tr>
                  <td>此区间暂无数据</td>
                </tr>
              </tbody>
            </table>

          </div>

        </td> 
      </tr>
      

      <tr v-if="hasDataList">
        <td id="tdpage" style=" line-height:20px; text-align:left; height: 12px;" colspan="5">

           <pag-ination :resultList="resultList" v-on:getdataList="getdataList"></pag-ination>

        </td>
      </tr>

    </tbody>
  </table>

</div>

 

</template>

<script>
import PagInation from '@/components/common/pagination';
export default {

  components: {
    PagInation
  },
  data() {
    return {
      startTime: new Date(),
      endTime: new Date(),
      moneyAll: '',
      totalMoneyAll: '',
      resultList: [],
      dataList: [],

      historyDataList: {
        currPage: 1,
        list: [],
        pageSize: 10,
        totalCount: 0,
        totalPage: 0,
      }

    }
  },
  created() {
    this.searchMembers();
  },
  computed: {
    hasDataList() {
      return this.historyDataList.list.length != 0 ? true : false;
    }
  },
  methods: {
    getdataList(data) {
      this.dataList = data;
    },
    async searchMembers() {
      let that = this;


      let sstime = this.$timestampToTimeRi(this.startTime);
      let entime = this.$timestampToTimeRi(this.endTime);



      this.moneyAll = '';

      let objdata = {
        startDate: sstime,
        endDate: entime,
        currentPage: 1,
        pageSize: 100000
      }

      
      const loading = this.$loading({
        lock: true,
        background: 'rgba(0, 0, 0, 0.7)'
      });  
      await that.$post(`${window.url}/api/financeRechargeRecord`,objdata).then((res) => {
        that.$handelResponse(res, (result) => {
          loading.close();
          if(result.code===200){
            this.historyDataList = result.page;

            for(let n in this.historyDataList.list) {
              this.moneyAll = this.moneyAll + this.historyDataList.list[n].quotaAmount*1;
            }


            this.resultList = this.historyDataList.list;

            this.$emit('resetValue','');

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
#caiwumanager {

  .searchcaiwu {
    cursor:pointer;
    margin-right:5px;
    margin-left: 86px;
  } 

  .f-field.datebox.textbox {
    border-radius: 0px !important;
  }

}
</style>