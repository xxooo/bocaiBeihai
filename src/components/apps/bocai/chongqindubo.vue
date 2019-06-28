<template>
  <div id="chongqindubo" class="content-main duboBodyClass">

    <table class="table000" v-if="iskaipaning">
      <tbody>
        <tr>
          <td class="vertical-t">
            <div class="margin-r10 bet_box">
              <div id="round_content">

                <clock-time></clock-time>

                <bet-quick :orderDataList="orderDataList" v-on:childByReset="childByReset"></bet-quick>

              </div>

              <div id="errormsg" style=" display:none;"></div>


              <div id="mainPageData" class="orders">

                <template v-if="showOdds == '两面盘'">

                  <template v-for="(itemPa,index) in yiwuqiu_lmp"> 
                    <table class="DTable kuaijie" cellpadding="0" cellspacing="1" width="700" style="margin-top:2px;">     
                      <thead>
                        <tr class="DtrTitle" style="font-weight: bold;">
                          <td colspan="12" class="td_caption_1" align="center">{{itemPa.name}}</td>
                        </tr>
                      </thead>  
                      <tbody>    
                        <tr class="Dbgco1">
                          <template v-for="(item,index) in itemPa.list" v-if="['大','小','单','双'].findIndex((n) => n==item.oddsName)>-1"> 

                            <td class="betnum" :class="'yiwuqiu_lmp'+item.oddsId">{{item.oddsName}}</td>
                            <td class="oddsTdMin" :class="['yiwuqiu_lmp'+item.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(itemPa,item,'yiwuqiu_lmp')">
                              <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(itemPa,item,'yiwuqiu_lmp') : kuaijieInto(itemPa,item,'yiwuqiu_lmp')" class="betRateNum" :class="'yiwuqiu_lmp'+item.oddsId+'a'"> 
                                <span class="betRateNum">{{item.odds}}</span>
                              </a>
                              <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                            </td>

                            <td v-if="!kuaijiePay">
                              <input v-if="isOpenOdds" v-model="item.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(itemPa,item,'yiwuqiu_lmp',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                              <span v-else style="width:60px;">封盘</span>
                            </td>

                          </template>
                        </tr> 
                      </tbody>
                    </table>
                  </template>


                  <!-- 总和龙虎 -->
                  <table class="DTable kuaijie" cellpadding="0" cellspacing="1" border="0" width="700" style="margin-top: 2px;">
                    <tbody>
                      <tr class="Dbgco1">
                        <template v-for="(item,index) in longhuhe_lmp.list" v-if="index*1 < 4">

                          <td class="betnum" :class="'longhuhe_lmp'+item.oddsId">{{item.oddsName}}</td>
                          <td class="oddsTdMin" :class="['longhuhe_lmp'+item.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(longhuhe_lmp,item,'longhuhe_lmp')">
                            <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(longhuhe_lmp,item,'longhuhe_lmp') : kuaijieInto(longhuhe_lmp,item,'longhuhe_lmp')" class="betRateNum" :class="'longhuhe_lmp'+item.oddsId+'a'">
                              <span class="betRateNum">{{item.odds}}</span>
                            </a>
                            <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                          </td>

                          <td v-if="!kuaijiePay">
                            <input v-if="isOpenOdds" v-model="item.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(longhuhe_lmp,item,'longhuhe_lmp',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                            <span v-else style="width:60px;">封盘</span>
                          </td>

                        </template>
                      </tr>
                      <tr>
                        <template v-for="(item,index) in longhuhe_lmp.list" v-if="index*1 > 3">

                          <td class="betnum" :class="'longhuhe_lmp'+item.oddsId">{{item.oddsName}}</td>
                          <td class="oddsTdMin" :class="['longhuhe_lmp'+item.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(longhuhe_lmp,item,'longhuhe_lmp')">
                            <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(longhuhe_lmp,item,'longhuhe_lmp') : kuaijieInto(longhuhe_lmp,item,'longhuhe_lmp')" class="betRateNum" :class="'longhuhe_lmp'+item.oddsId+'a'">
                              <span class="betRateNum">{{item.odds}}</span>
                            </a>
                            <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                          </td>

                          <td v-if="!kuaijiePay">
                            <input v-if="isOpenOdds" v-model="item.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(longhuhe_lmp,item,'longhuhe_lmp',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                            <span v-else style="width:60px;">封盘</span>
                          </td>

                        </template>
                        <td colspan="3"></td>
                      </tr>
                    </tbody>
                  </table>

                </template>

                <template v-if="showOdds == '1~5'">

                  <table class="DTable_t kuaijie" cellpadding="0" cellspacing="0" width="700" id="Table1">

                    <thead>
                      <tr class="DtrTitle" style="font-weight: bold; height:13px; ">
                        <td v-for="(item_yiwu,index_yiwu) in oddsList" colspan="3" class="td_caption_1" align="center" style="text-align:center; height:13px;">{{item_yiwu.name}}</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colspan="3" style="border:0px;" valign="top" v-for="(itemPa,indexPa) in oddsList">

                          <table style="text-align:center; font-size:12px; margin-top:0px; border:0px;" class="DTable_t" cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                              <tr class="td_caption_1">
                                <td>号</td>
                                <td>赔率</td>
                                <td v-if="!kuaijiePay" class="title_jine">金额</td>
                              </tr>
                            </tbody>
                            <tbody>
                              <tr class="Dbgco1" align="center" v-for="(item,index) in itemPa.list" v-if="['0','1','2','3','4','5','6','7','8','9'].findIndex((n) => n==item.oddsName)>-1">
                                <td class="betnum1" align="center">
                                  <div :class="'CQNo_'+item.oddsName" style=" height:27px; width:27px;"></div>
                                </td>
                                <td class="oddsTdMin" :class="['item_yiwu'+item.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(itemPa,item,'item_yiwu')">
                                  <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(itemPa,item,'item_yiwu') : kuaijieInto(itemPa,item,'item_yiwu')" class="betRateNum" :class="'item_yiwu'+item.oddsId+'a'">
                                    <span class="betRateNum">{{item.odds}}</span>
                                  </a>
                                  <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                                </td>
                                <td v-if="!kuaijiePay">
                                  <input v-if="isOpenOdds" v-model="item.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(itemPa,item,'item_yiwu',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                                  <span v-else style="width:60px;">封盘</span>
                                </td>
                              </tr>

                            </tbody>
                          </table>

                        </td>
                      </tr>

                    </tbody>

                  </table>
                </template>


                <table v-if="showOdds == '和数'" class="DTable kuaijie" cellpadding="0" cellspacing="1" border="0" width="700" id="tblNowBet00" style="margin-top:0px;">
                  <thead>
                      <tr class="td_caption_1">
                          <td rowspan="2" style=" font-weight: bold;text-align:center;" align="center" class="td_caption_big">二码</td>
                          <td class="sd_hs title_two" :colspan="kuaijiePay?2:4"  style=" font-weight: bold;text-align:center;" align="center">和数</td>
                          <!-- <td class="sd_hs title_two" colspan="4" style=" font-weight: bold;text-align:center;" align="center">和数尾数</td> -->
                      </tr>
                      <tr class="td_caption_1">
                          <td :colspan="kuaijiePay?1:2" class="sd_hs1 title_two" style=" font-weight: bold;text-align:center;" align="center">单</td>
                          <td :colspan="kuaijiePay?1:2" class="sd_hs1 title_two" style=" font-weight: bold;text-align:center;" align="center">双</td>
                          <!-- <td colspan="2" class="sd_hs1 title_two" style=" font-weight: bold;text-align:center;" align="center">大</td>
                          <td colspan="2" class="sd_hs1 title_two" style=" font-weight: bold;text-align:center;" align="center">小</td> -->
                      </tr>
                  </thead>
                  <tbody>
                      <tr class="Dbgco1" align="center" v-for="(itemPa,index) in oddsList">
                          <td class="betnum" align="center" style="width:120px;">{{itemPa.name}}</td>

                          <template v-for="(item,index) in itemPa.list">
                            <td class="oddsTdMin" :class="['item_heshu'+item.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(itemPa,item,'item_heshu')">
                              <a v-if="isOpenOdds" title="按此下注"  @click.stop="!kuaijiePay ? IntoMtran(itemPa,item,'item_heshu') : kuaijieInto(itemPa,item,'item_heshu')" class="betRateNum" :class="'item_heshu'+item.oddsId+'a'">
                                <span class="betRateNum">{{item.odds}}</span>
                              </a>
                              <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                            </td>
                            <td v-if="!kuaijiePay">
                              <input v-if="isOpenOdds" v-model="item.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(itemPa,item,'item_heshu',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                              <span v-else style="width:60px;">封盘</span>
                            </td>
                          </template>

                      </tr>
                  </tbody>
                </table>

                <bet-quick :orderDataList="orderDataList" v-on:childByReset="childByReset"></bet-quick>

                <footer-bocai :curBocaiTypeId="+bocaiTypeId" :showOdds="showOdds"></footer-bocai>

              </div>

            </div>
          </td>

          <td valign="top">
            <chang-long :curBocaiTypeId="+bocaiTypeId"></chang-long>
          </td>

        </tr>
      </tbody>
    </table>


    <no-game v-if="!iskaipaning"></no-game>

  </div>
</template>

<script>
import BetQuick from '@/components/apps/bocai/components/betQuick';
import ClockTime from '@/components/apps/bocai/components/clockTime';
import FooterBocai from '@/components/apps/bocai/components/footerBocai';
import ChangLong from '@/components/apps/bocai/components/changLong';
import NoGame from '@/components/apps/bocai/components/noGame';
import { mapGetters } from 'vuex';

export default {
  components: {
    ClockTime,
    BetQuick,
    FooterBocai,
    ChangLong,
    NoGame
  },
  data () {
    return {
      iskaipaning: true,
      showOdds: '',
      isOpenOdds: true,
      orderDataList: [],
      shishiZiDatas: {},
      shishiZiDatasList: [],
      kuaijiePay: false,

      longhuhe_lmp: {},
      yiwuqiu_lmp: [],
      yizhiwu_lmp: {},
      qianhousan_lmp: []
    }
  },
  computed: {
    ...mapGetters({
        bocaiInfoData: 'getbocaiInfoData',
        oddsList: 'getoddsList',
        bocaiTypeId: 'getbocaiTypeId'
    }),
  },
  created() {
  },
  mounted(){
      bus.$on('getkuaijiePay', (data) => {
        this.kuaijiePay = data;
      });
      bus.$on('isOpenOdds', (data) => {
        this.isOpenOdds = data;
      });
      bus.$on('setNewOddsList', (data) => {
        //this.kuaijiePay = false;
        this.shuaiXuanDatas(data);
      });
      //切换二级菜单更新菠菜,以及切快捷更新菠菜
      bus.$on('getresetOddsCategory', (data) => {
        console.log('切换二级菜单更新菠菜,以及切快捷更新菠菜getresetOddsCategory');
        this.showOdds = data;
        this.resetOddsCategoryfromgam();
      });
  },
  methods: {
    IntoMtran(itemPa,item,oddEname) {

      store.commit('updatecurPeriods', this.bocaiInfoData.bocaiPeriods);
      bus.$emit('gettoLeftOdd', itemPa,item,oddEname); 

    },
    kuaijieInto(oddsObj,item,ids) {

      if(this.isOpenOdds) {

        if(this.kuaijiePay) {
          if($('.'+ids+item.oddsId).hasClass('selected')){

            console.log('取消你','.'+ids+item.oddsId);

              $('.'+ids+item.oddsId).removeClass('selected');
              _.remove(this.orderDataList, function(n) {
                return n.bocaiOddId == item.oddsId;
              });

          } else {
            $('.'+ids+item.oddsId).addClass('selected');

            let obj = {
              bocaiCategory2Id: oddsObj.id,//8225,//投注博彩分类2ID
              bocaiCategory2Name: oddsObj.name,//"混合",//投注博彩分类2名称
              bocaiOddId: item.oddsId,//5543,//投注博彩赔率ID
              bocaiOddName: item.oddsName,//"大",//投注博彩赔率名称
              bocaiValue:"",//投注内容,六合彩连肖/连尾
              normalMoney: item.normalMoney,//10000,//一般模式下，选择的金额
              orderNormal: !this.kuaijiePay,   //是快捷，还是一般投注
              bocaiOdds: item.odds,//1.90//赔率
              dewaterId: item.dewaterId
            };

            this.orderDataList.push(obj);
          }
        }
        
      }
    },
    qingkong() {
      $('.bet_box .orders td').removeClass('selected');
      this.orderDataList = [];
    },
    allQingkong() {
      $('.bet_box .orders td').removeClass('selected');
      this.orderDataList = [];
      $('.kuaixuanTable td').removeClass('active');
    },
    shishiZiGet(item,index) {
      this.allQingkong();
      $('.yiziThAct').removeClass('active');
      $('.shishiZi'+index).addClass('active');
      this.shishiZiDatas = item;

      if(['二字','一字','三字','二定位','三定位','组选三','组选六','跨度'].findIndex((n) => n == this.showOdds)>-1) {
        this.shishiZiDatasList = [];
        for(var i=0;i<item.list.length;i=i+5){
          this.shishiZiDatasList.push(item.list.slice(i,i+5));
        }
      }

    },
    childByReset(boon,data) {
      this.resetOddsCategory(boon,data);
      this.allQingkong();
    },
    inputFuncYiZi(item,ids,pay) {
      let oddsObj = this.shishiZiDatas;

      this.inputFunc(oddsObj,item,ids,pay);
    },
    inputFunc(oddsObj,item,ids,pay) {

        if(!this.kuaijiePay) {
          if(pay == '') {
            $('.'+ids+item.oddsId).removeClass('active');
            _.remove(this.orderDataList, function(n) {
              return n.bocaiOddId == item.oddsId;
                  });
          } else {

            $('.'+ids+item.oddsId).addClass('active');
                let ifHas = false;
                for(let n in this.orderDataList) {
                  if(this.orderDataList[n].bocaiOddId == item.oddsId) {
                    ifHas = true;
                    let obj = {
                      bocaiCategory2Id: oddsObj.id,//8225,//投注博彩分类2ID
                      bocaiCategory2Name: oddsObj.name,//"混合",//投注博彩分类2名称
                      bocaiOddId: item.oddsId,//5543,//投注博彩赔率ID
                      bocaiOddName: item.oddsName,//"大",//投注博彩赔率名称
                      bocaiValue:"",//投注内容,六合彩连肖/连尾
                      normalMoney: item.normalMoney,//10000,//一般模式下，选择的金额
                      orderNormal: !this.kuaijiePay,   //是快捷，还是一般投注
                      bocaiOdds: item.odds, //1.90//赔率
                      dewaterId: item.dewaterId
                    };

                    this.orderDataList[n] = obj;

                  }
                }

                if(!ifHas) {
                  let obj = {
                    bocaiCategory2Id: oddsObj.id,//8225,//投注博彩分类2ID
                    bocaiCategory2Name: oddsObj.name,//"混合",//投注博彩分类2名称
                    bocaiOddId: item.oddsId,//5543,//投注博彩赔率ID
                    bocaiOddName: item.oddsName,//"大",//投注博彩赔率名称
                    bocaiValue:"",//投注内容,六合彩连肖/连尾
                    normalMoney: item.normalMoney,//10000,//一般模式下，选择的金额
                    orderNormal: !this.kuaijiePay,   //是快捷，还是一般投注
                    bocaiOdds: item.odds, //1.90//赔率
                    dewaterId: item.dewaterId
                  };

                  this.orderDataList.push(obj);

                }
          }
        }
      
      
    },
    orderTdYiZi(item,ids) {
      let oddsObj = this.shishiZiDatas;

      this.orderTd(oddsObj,item,ids);
    },
    //更新菠菜默认非快捷
    async resetOddsCategoryfromgam() {
        this.orderDataList = [];
        this.kuaijiePay = false;

        bus.$emit('getkuaijiePay', false); 

        this.shuaiXuanDatas(this.oddsList);
    },
    //切换快捷更新菠菜
    async resetOddsCategory(boon,data) {

        this.orderDataList = [];
        this.kuaijiePay = boon;

        bus.$emit('getkuaijiePay', boon); 

        this.shuaiXuanDatas(data);
    },
    shuaiXuanDatas(dataList) {
      if(this.showOdds == '两面盘') {
        let yiwuqiuTemp = [];
        let qianhousanTemp = [];
        for(let m in dataList) {
          if(dataList[m].name == '总和-龙虎和') {
            this.longhuhe_lmp = dataList[m];
          }
          if(['第一球','第二球','第三球','第四球','第五球'].findIndex((n) => n == dataList[m].name)>-1) {
            yiwuqiuTemp.push(dataList[m]);
          }
          if(['前三','中三','后三'].findIndex((n) => n == dataList[m].name)>-1) {
            qianhousanTemp.push(dataList[m]);
          }
        }
        this.yiwuqiu_lmp = yiwuqiuTemp;
        this.qianhousan_lmp = qianhousanTemp;
      }

      if(['二字','一字','三字','二定位','三定位','组选三','组选六','跨度'].findIndex((n) => n == this.showOdds)>-1) {
          this.shishiZiDatas = dataList[0];

          let arry = [];

          for(var i=0;i<this.shishiZiDatas.list.length;i=i+5){
            arry.push(this.shishiZiDatas.list.slice(i,i+5));
          }

          this.shishiZiDatasList = arry;

          $('.yiziThAct').removeClass('active');
          $('.shishiZi0').addClass('active');
        }
    }

  }
}

</script>

<style scoped>


</style>
