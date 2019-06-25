<template>
  <div class="duboBodyClass" id="lotteryResults">
    彩种：
    <select id="ddlgame" @change="getPrizeResult"  v-model="bocaiType">
      <option v-for="(item,index) in bocaiTypeList" :value="item.bocaiId">{{item.bocaiName}}</option>
    </select>

    <span class="vis_date">结账日期：</span>

    <DateBox  v-model="jizhangTime" format="yyyy-MM-dd" @selectionChange="selectionChange2"></DateBox>


    <div id="tblist" style="width: 710px; text-align: center; height: 450px;">


      <table v-if="[1,8815].findIndex((n) => n==bocaiType)>-1" class="DTable" cellpadding="0" cellspacing="1" border="0" style="margin-top:5px; text-align:center; width:100%;">
        <tbody>
          <tr class="td_caption_1">
            <td style="width:100px;">期数</td>
            <td style="width:124px;">开奖时间</td>
            <td colspan="5" style="width:135px;">开出号码</td>
            <td colspan="3" style="width:77px;">总和</td>
            <td style="width:50px;">龙虎和</td>
            <td style="width:35px;">前三</td>
            <td style="width:35px;">中三</td>
            <td style="width:35px;">后三</td>
          </tr>
          <tr v-for="item in dataList" class="hoverTrclass">
            <td>{{item.periods}}</td>
            <td>{{$timestampToTimeWeek(item.openPrizetime)}}</td>
            <template v-if="!item.result || item.result == ''">
              <td colspan="12" ><span>暂未开奖</span></td>
            </template>
            <template v-else>
              <td align="center"><div class="CQREDiv" :class="'CQNo_'+item.num1"></div></td>
              <td align="center"><div class="CQREDiv" :class="'CQNo_'+item.num2"></div></td>
              <td align="center"><div class="CQREDiv" :class="'CQNo_'+item.num3"></div></td>
              <td align="center"><div class="CQREDiv" :class="'CQNo_'+item.num4"></div></td>
              <td align="center"><div class="CQREDiv" :class="'CQNo_'+item.num5"></div></td>
              <td align="center">{{item.zonghe}}</td>
              <td><span :class="item.zonghedanshuang == '双' ? 'red' : ''">{{item.zonghedanshuang}}</span></td>
              <td><span :class="item.zonghedaxiao == '大' ? 'red' : ''">{{item.zonghedaxiao}}</span></td>
              <td><span :class="item.longhu == '龙' ? 'red' : item.longhu == '虎' ? 'blue' : ''">{{item.longhu}}</span></td> 
              <td><span>{{item.qiansan}}</span></td> 
              <td><span>{{item.zhongsan}}</span></td> 
              <td><span>{{item.housan}}</span></td>
            </template>
          </tr>
        </tbody>
      </table>

      <table v-if="[8555,8806,9057].findIndex((n) => n==bocaiType)>-1" class="DTable" cellpadding="0" cellspacing="1" border="0" style="margin-top:5px; text-align:center; width:100%;">
        <tbody>
          <tr class="td_caption_1">
            <td rowspan="1" style="width:56px;">期数</td>
            <td rowspan="1" style="width:124px;">开奖时间</td>
            <td colspan="10" style="width:270px;">开出号码</td>
            <td colspan="3" style="width:77px;">冠亚军和</td>
            <td colspan="5" style="width:154px;">1~5 龙虎</td>
          </tr>
          <tr v-for="item in dataList" class="hoverTrclass">
            <td>{{item.periods}}</td>
            <td>{{$timestampToTimeWeek(item.openPrizetime)}}</td>
            <template v-if="!item.result || item.result == ''">
              <td colspan="18" ><span>暂未开奖</span></td>
            </template>
            <template v-else>
              <td align="center"><div :class="'BJNo_'+item.num1" style=" height:27px; width:27px;"></div></td>
              <td align="center"><div :class="'BJNo_'+item.num2" style=" height:27px; width:27px;"></div></td>
              <td align="center"><div :class="'BJNo_'+item.num3" style=" height:27px; width:27px;"></div></td>
              <td align="center"><div :class="'BJNo_'+item.num4" style=" height:27px; width:27px;"></div></td>
              <td align="center"><div :class="'BJNo_'+item.num5" style=" height:27px; width:27px;"></div></td>
              <td align="center"><div :class="'BJNo_'+item.num6" style=" height:27px; width:27px;"></div></td>
              <td align="center"><div :class="'BJNo_'+item.num7" style=" height:27px; width:27px;"></div></td>
              <td align="center"><div :class="'BJNo_'+item.num8" style=" height:27px; width:27px;"></div></td>
              <td align="center"><div :class="'BJNo_'+item.num9" style=" height:27px; width:27px;"></div></td>
              <td align="center"><div :class="'BJNo_'+item.num10" style=" height:27px; width:27px;"></div></td>
              <td align="center"><span>{{item.guanyajunhe}}</span></td>
              <td align="center"><span :class="item.guanyajundaxiao == '大' ? 'red' : ''">{{item.guanyajundaxiao}}</span></td>
              <td align="center"><span :class="item.guanyajundanshuang == '双' ? 'red' : ''">{{item.guanyajundanshuang}}</span></td>
              <td align="center"><span :class="item.yilonghu == '龙' ? 'red' : item.yilonghu == '虎' ? 'blue' : ''">{{item.yilonghu}}</span></td>
              <td align="center"><span :class="item.erlonghu == '龙' ? 'red' : item.erlonghu == '虎' ? 'blue' : ''">{{item.erlonghu}}</span></td>
              <td align="center"><span :class="item.sanlonghu == '龙' ? 'red' : item.sanlonghu == '虎' ? 'blue' : ''">{{item.sanlonghu}}</span></td>
              <td align="center"><span :class="item.silonghu == '龙' ? 'red' : item.silonghu == '虎' ? 'blue' : ''">{{item.silonghu}}</span></td>
              <td align="center"><span :class="item.wulonghu == '龙' ? 'red' : item.wulonghu == '虎' ? 'blue' : ''">{{item.wulonghu}}</span></td>
            </template>

          </tr>
        </tbody>
      </table>

      <table v-if="[8809].findIndex((n) => n==bocaiType)>-1" class="DTable" cellpadding="0" cellspacing="1" border="0" style="margin-top:5px; text-align:center; width:100%;">
        <tbody>
          <tr class="td_caption_1">
            <td rowspan="1" style="width:100px;">期数</td>
            <td rowspan="1" style="width:124px;">开奖时间</td>
            <td colspan="8" style="width:216px;">开出号码</td>
            <td colspan="4" style="width:113px;">总和</td>
            <td rowspan="1" style="width:30px;">龙虎</td>
          </tr>
          <tr v-for="item in dataList" class="hoverTrclass">
            <td>{{item.periods}}</td>
            <td>{{$timestampToTimeWeek(item.openPrizetime)}}</td>
            <template v-if="!item.result || item.result == ''">
              <td colspan="13" ><span>暂未开奖</span></td>
            </template>
            <template v-else>
              <td align="center"><div :class="'No_'+item.num1" style=" height:27px; width:27px;"></div></td>
              <td align="center"><div :class="'No_'+item.num2" style=" height:27px; width:27px;"></div></td>
              <td align="center"><div :class="'No_'+item.num3" style=" height:27px; width:27px;"></div></td>
              <td align="center"><div :class="'No_'+item.num4" style=" height:27px; width:27px;"></div></td>
              <td align="center"><div :class="'No_'+item.num5" style=" height:27px; width:27px;"></div></td>
              <td align="center"><div :class="'No_'+item.num6" style=" height:27px; width:27px;"></div></td>
              <td align="center"><div :class="'No_'+item.num7" style=" height:27px; width:27px;"></div></td>
              <td align="center"><div :class="'No_'+item.num8" style=" height:27px; width:27px;"></div></td>
              <td align="center">{{item.zonghe}}</td>
              <td align="center"><span :class="item.zonghedanshuang == '单' ? 'red' : ''">{{item.zonghedanshuang}}</span></td>
              <td align="center"><span :class="item.zonghedaxiao == '大' ? 'red' : ''">{{item.zonghedaxiao}}</span></td>
              <td align="center"><span :class="item.zongheweidaweixiao == '尾大' ? 'red' : ''">{{item.zongheweidaweixiao}}</span></td>
              <td align="center"><span :class="item.onelonghu == '龙' ? 'red' : ''">{{item.onelonghu}}</span></td>
            </template>
          </tr>
        </tbody>
      </table>


      <div id="tdpage" style=" line-height:22px; text-align:left; height: 22px; border:1px solid #e9a884;  border-top-width:0px;">
        <pag-ination :resultList="resultList" v-on:getdataList="getdataList"></pag-ination>
      </div>
    </div>

  </div>

  <!-- <div class="content-main" id="lotteryResults">
    <div class="right">
      <div id="submenuDiv">
        <div class="box">
          <div class="header">
            <p>开奖结果</p>
          </div> 

          <div class="default-list" style="min-height: 316px;">
            <div class="">
              游戏类型：
              <el-select v-model="bocaiType" placeholder="请选择" size="mini" @change="changeboType">
                    <el-option label="全部" :value="''"></el-option>
                    <el-option
                      v-for="item in bocaiTypeList"
                      :key="item.value"
                      :label="item.bocaiName"
                      :value="item.bocaiId">
                    </el-option>
              </el-select> 

              <span>
                  日期：
                  <el-date-picker
                  size="mini"
                  value-format="yyyy-MM-dd"
                  @change="gettime"
                  v-model="openPrizeTime"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </span>
            </div> 

            <div>
              <table v-if="[1,8815].findIndex((n) => n==bocaiType)>-1">
                <thead>
                  <tr>
                    <th>期数</th> 
                    <th>开奖时间</th> 
                    <th colspan="5">开出号码</th> 
                    <th colspan="3">总和</th> 
                    <th>龙虎</th> 
                    <th>前三</th> 
                    <th>中三</th> 
                    <th>后三</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in resultList">
                    <td>{{item.periods}}</td> 
                    <td>{{$timestampToTime(item.openPrizetime)}}</td>
                    <template v-if="!item.result || item.result == ''">
                      <td colspan="12" >
                        <span>暂未开奖</span>
                      </td>
                    </template>
                    <template v-else>
                      <td><div class="ball-icon">{{item.num1}}</div></td>
                      <td><div class="ball-icon">{{item.num2}}</div></td>
                      <td><div class="ball-icon">{{item.num3}}</div></td>
                      <td><div class="ball-icon">{{item.num4}}</div></td>
                      <td><div class="ball-icon">{{item.num5}}</div></td> 
                      <td>{{item.zonghe}}</td> 
                      <td><span :class="item.zonghedaxiao == '大' ? 'red' : ''">{{item.zonghedaxiao}}</span></td> 
                      <td><span :class="item.zonghedanshuang == '双' ? 'red' : ''">{{item.zonghedanshuang}}</span></td> 
                      <td><span :class="item.longhu == '龙' ? 'red' : item.longhu == '虎' ? 'blue' : ''">{{item.longhu}}</span></td> 
                      <td><span>{{item.qiansan}}</span></td> 
                      <td><span>{{item.zhongsan}}</span></td> 
                      <td><span>{{item.housan}}</span></td>
                    </template>
                  </tr>
                </tbody>
              </table>

              <table v-if="bocaiType == '8811'">
                <thead>
                  <tr>
                    <th>期数</th> 
                    <th>开奖时间</th> 
                    <th colspan="5">开出号码</th> 
                    <th colspan="4">总和</th> 
                    <th>龙虎</th> 
                    <th colspan="5">1~5大小</th> 
                    <th colspan="5">1~5单双</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in resultList">
                    <td>{{item.periods}}</td> 
                    <td>{{$timestampToTime(item.openPrizetime)}}</td>
                    <template v-if="!item.result || item.result == ''">
                      <td colspan="20" >
                        <span>暂未开奖</span>
                      </td>
                    </template>
                    <template v-else>
                      <td><div class="ball-icon">{{item.num1}}</div></td>
                      <td><div class="ball-icon">{{item.num2}}</div></td>
                      <td><div class="ball-icon">{{item.num3}}</div></td>
                      <td><div class="ball-icon">{{item.num4}}</div></td>
                      <td><div class="ball-icon">{{item.num5}}</div></td> 
                      <td>{{item.zonghe}}</td> 
                      <td><span :class="item.zonghedaxiaohe == '大' ? 'red' : ''">{{item.zonghedaxiaohe}}</span></td> 
                      <td><span :class="item.zonghedanshuang == '双' ? 'red' : ''">{{item.zonghedanshuang}}</span></td> 
                      <td><span :class="item.zongheweidaweixiao == '尾大' ? 'red' : ''">{{item.zongheweidaweixiao}}</span></td> 
                      <td><span :class="item.longhu == '龙' ? 'red' : item.longhu == '虎' ? 'blue' : ''">{{item.longhu}}</span></td> 
                      <td><span :class="item.yidaxiaohe == '大' ? 'red' : item.yidaxiaohe == '小' ? 'blue' : ''">{{item.yidaxiaohe}}</span></td> 
                      <td><span :class="item.erdaxiaohe == '大' ? 'red' : item.erdaxiaohe == '小' ? 'blue' : ''">{{item.erdaxiaohe}}</span></td> 
                      <td><span :class="item.sandaxiaohe == '大' ? 'red' : item.sandaxiaohe == '小' ? 'blue' : ''">{{item.sandaxiaohe}}</span></td> 
                      <td><span :class="item.sidaxiaohe == '大' ? 'red' : item.sidaxiaohe == '小' ? 'blue' : ''">{{item.sidaxiaohe}}</span></td> 
                      <td><span :class="item.wudaxiaohe == '大' ? 'red' : item.wudaxiaohe == '小' ? 'blue' : ''">{{item.wudaxiaohe}}</span></td> 
                      <td><span :class="item.yidanshuang == '双' ? 'red' : item.yidanshuang == '单' ? 'blue' : ''">{{item.yidanshuang}}</span></td> 
                      <td><span :class="item.erdanshuang == '双' ? 'red' : item.erdanshuang == '单' ? 'blue' : ''">{{item.erdanshuang}}</span></td> 
                      <td><span :class="item.sandanshuang == '双' ? 'red' : item.sandanshuang == '单' ? 'blue' : ''">{{item.sandanshuang}}</span></td> 
                      <td><span :class="item.sidanshuang == '双' ? 'red' : item.sidanshuang == '单' ? 'blue' : ''">{{item.sidanshuang}}</span></td> 
                      <td><span :class="item.wudanshuang == '双' ? 'red' : item.wudanshuang == '单' ? 'blue' : ''">{{item.wudanshuang}}</span></td>
                    </template>
                  </tr>
                </tbody>
              </table>

              <table v-if="bocaiType == '8498'">
                <thead>
                  <tr>
                    <th>期数</th> 
                    <th>开奖时间</th> 
                    <th colspan="3">开出号码</th> 
                    <th colspan="2">总和</th>
                  </tr>
                </thead> 
                <tbody>
                  <tr v-for="item in resultList">
                    <td>{{item.periods}}</td> 
                    <td>{{$timestampToTime(item.openPrizetime)}}</td>

                    <template v-if="!item.result || item.result == ''">
                      <td colspan="5">
                        <span>暂未开奖</span>
                      </td>
                    </template>
                    <template v-else>
                      <td><i :class="'jsk3-icon-'+item.num1" style="margin-top: 6px;"></i></td>
                      <td><i :class="'jsk3-icon-'+item.num2" style="margin-top: 6px;"></i></td>
                      <td><i :class="'jsk3-icon-'+item.num3" style="margin-top: 6px;"></i></td>
                      <td><span>{{item.zonghe}}</span></td> 
                      <td><span class="red">{{item.zonghedaxiao}}</span></td>
                    </template>
                  </tr>
                </tbody>
              </table>


              <table v-if="[8555,8806,9057].findIndex((n) => n==bocaiType)>-1">
                <thead>
                  <tr>
                    <th>期数</th> 
                    <th>开奖时间</th> 
                    <th colspan="10">开出号码</th> 
                    <th colspan="3">冠亚军和</th> 
                    <th colspan="5">1~5龙虎</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in resultList">
                    <td>{{item.periods}}</td> 
                    <td>{{$timestampToTime(item.openPrizetime)}}</td>
                    <template v-if="!item.result || item.result == ''">
                      <td colspan="18">
                        <span>暂未开奖</span>
                      </td>
                    </template>
                    <template v-else>
                      <td><div :class="'ball-fang ball-fang'+item.num1">{{item.num1}}</div></td> 
                      <td><div :class="'ball-fang ball-fang'+item.num2">{{item.num2}}</div></td> 
                      <td><div :class="'ball-fang ball-fang'+item.num3">{{item.num3}}</div></td> 
                      <td><div :class="'ball-fang ball-fang'+item.num4">{{item.num4}}</div></td> 
                      <td><div :class="'ball-fang ball-fang'+item.num5">{{item.num5}}</div></td> 
                      <td><div :class="'ball-fang ball-fang'+item.num6">{{item.num6}}</div></td> 
                      <td><div :class="'ball-fang ball-fang'+item.num7">{{item.num7}}</div></td> 
                      <td><div :class="'ball-fang ball-fang'+item.num8">{{item.num8}}</div></td> 
                      <td><div :class="'ball-fang ball-fang'+item.num9">{{item.num9}}</div></td> 
                      <td><div :class="'ball-fang ball-fang'+item.num10">{{item.num10}}</div></td> 
                      <td>{{item.guanyajunhe}}</td> 
                      <td><span :class="item.guanyajundaxiao == '大' ? 'red' : ''">{{item.guanyajundaxiao}}</span></td> 
                      <td><span :class="item.guanyajundanshuang == '双' ? 'red' : ''">{{item.guanyajundanshuang}}</span></td> 
                      <td><span :class="item.yilonghu == '龙' ? 'red' : item.yilonghu == '虎' ? 'blue' : ''">{{item.yilonghu}}</span></td> 
                      <td><span :class="item.erlonghu == '龙' ? 'red' : item.erlonghu == '虎' ? 'blue' : ''">{{item.erlonghu}}</span></td> 
                      <td><span :class="item.sanlonghu == '龙' ? 'red' : item.sanlonghu == '虎' ? 'blue' : ''">{{item.sanlonghu}}</span></td> 
                      <td><span :class="item.silonghu == '龙' ? 'red' : item.silonghu == '虎' ? 'blue' : ''">{{item.silonghu}}</span></td> 
                      <td><span :class="item.wulonghu == '龙' ? 'red' : item.wulonghu == '虎' ? 'blue' : ''">{{item.wulonghu}}</span></td> 
                    </template>
                  </tr>
                </tbody>
              </table>


              <table v-if="[8266].findIndex((n) => n==bocaiType)>-1">
                <thead>
                  <tr>
                    <th>期数</th> 
                    <th width="100px">开奖时间</th> 
                    <th>开出号码</th> 
                    <th colspan="4">总和</th> 
                    <th colspan="2">比数量</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in resultList">
                    <td>{{item.periods}}</td> 
                    <td>{{$timestampToTime(item.openPrizetime)}}</td>
                    <template v-if="!item.result || item.result == ''">
                      <td colspan="7">
                        <span>暂未开奖</span>
                      </td>
                    </template>
                    <template v-else>
                      <td width="360px">
                        <div v-for="(itemsub,index) in item.result.slice(0,11)" :class="itemsub*1 > 40 ? 'ballda' : 'ballxiao'">{{itemsub}}</div>
                        <br>
                        <div v-for="(itemsub,index) in item.result.slice(11)" :class="itemsub*1 > 40 ? 'ballda' : 'ballxiao'">{{itemsub}}</div>
                      </td> 
                      <td>{{item.zonghe}}</td> 
                      <td><span :class="item.zonghedaxiao == '大' ? 'red' : ''">{{item.zonghedaxiao}}</span></td> 
                      <td><span :class="item.zonghedanshuang == '双' ? 'red' : ''">{{item.zonghedanshuang}}</span></td> 
                      <td>{{item.wuxing}}</td>
                      <td><span :class="item.bishulianghouqianhe == '前(多)' ? 'red' : item.bishulianghouqianhe == '后(多)' ? 'blue' : ''">{{item.bishulianghouqianhe}}</span></td>
                      <td><span :class="item.bishuliangdanshuanghe == '双(多)' ? 'red' : item.bishuliangdanshuanghe == '单(多)' ? 'blue' : ''">{{item.bishuliangdanshuanghe}}</span></td>
                    </template>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div> -->


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
      bocaiType: '',
      openPrizeTime: '',
      currentPage: 1,
      pageSize: 15,
      resultList: [],
      maxPage: 10,
      firstPage: 1,
      endPage: 10,

      dataList: [],

      jizhangTime: new Date()
    }
  },
  created() {
    this.getPrizeResult();
    console.log('this.bocaiTypeList',this.bocaiTypeList);

    if(this.bocaiType == '') {
      this.getBocai();
    }
  },
  computed: {
    ...mapGetters({
      bocaiTypeList: 'getbocaiTypeList'
    })
  },
  methods: {
    getdataList(data) {
      this.dataList = data;
    },
    selectionChange2() {
      this.getPrizeResult();
    },
    async getBocai() {
      let res = await this.$get(`${window.url}/api/getBocai`);

          if(res.code===200){
            store.commit('updatebocaiTypeList',res.bocaiTypeList);
            this.bocaiType = res.bocaiTypeList[0].bocaiId;
            this.getPrizeResult();
          }
    },
    async getPrizeResult() { 
      let that = this;

      console.log('this.bocaiTypeList222',this.bocaiTypeList);

      let jizhangt = this.$timestampToTimeRi(this.jizhangTime);

      
      const loading = this.$loading({
        lock: true,
        background: 'rgba(0, 0, 0, 0.7)'
      });  
      await that.$get(`${window.url}/api/openPrizeResult?bocaiTypeId=`+this.bocaiType+`&currentPage=1&pageSize=1000&dayStr=`+jizhangt).then((res) => {
        that.$handelResponse(res, (result) => {
          loading.close();
          if(result.code===200){

            if(that.bocaiType == '8266') {
              for(let n in result.list) {

                if(result.list[n].result) {
                  result.list[n].result = result.list[n].result.split(','); 
                }
              }
            }

            bus.$emit('resetValue','');

            that.resultList = result.list;

            that.firstPage = 1;
            that.endPage = 10;
            
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

#lotteryResults {
  .f-field.datebox.textbox {
    border-radius: 0px !important;
  }
}
  
</style>