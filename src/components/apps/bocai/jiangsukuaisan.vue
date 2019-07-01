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

                <table v-if="showOdds == '两面盘'" class="DTable kuaijie" cellpadding="0" cellspacing="1" border="0" width="700" style="margin-top:0px;">
                  
                  <thead>
                    <tr class="DtrTitle">
                      <td :colspan="kuaijiePay?9:12" class="td_caption_1" style=" font-weight: bold;">{{zongheData.name}}</td>
                    </tr>
                  </thead>
                  <tbody>

                    <tr class="Dbgco1" v-for="(itemPa,indexPa) in zongheData.list">
                      <template v-for="(item,index) in itemPa" v-if="item">
                        <td class="betnum" style=" width:60px;max-width:60px;">{{item.oddsName}}</td>
                        <td class="oddsTdMin" :class="['zongheData'+item.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(zongheData,item,'zongheData')">
                          <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(zongheData,item,'zongheData') : kuaijieInto(zongheData,item,'zongheData')" class="betRateNum" :class="'zongheData'+item.oddsId+'a'"> 
                            <span class="betRateNum">{{item.odds}}</span>
                          </a>
                          <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                        </td>

                        <td v-if="!kuaijiePay">
                          <input v-if="isOpenOdds" v-model="item.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(zongheData,item,'zongheData',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                          <span v-else style="width:60px;">封盘</span>
                        </td>
                      </template>
                      <td :colspan="kuaijiePay?2:3"></td>
                    </tr>

                    <tr class="td_caption_1">
                      <td :colspan="kuaijiePay?2:3" style=" font-weight: bold;" class="title_colspan">{{liangmianpan_lmp[1].name}}</td>
                      <td :colspan="kuaijiePay?2:3" style=" font-weight: bold;" class="title_colspan">{{liangmianpan_lmp[2].name}}</td>
                      <td :colspan="kuaijiePay?2:3" style=" font-weight: bold;" class="title_colspan">{{liangmianpan_lmp[3].name}}</td>
                      <td :colspan="kuaijiePay?2:3" style=" font-weight: bold;" class="title_colspan">{{liangmianpan_lmp[4].name}}</td>
                    </tr>

                    <tr class="Dbgco1" v-for="(itemPa,indexPa) in yidaosiqiu">
                      <template v-for="(item,index) in itemPa" v-if="item">
                        
                        <td class="betnum" style=" width:60px;max-width:60px;">{{item.odd.oddsName}}</td>
                        <td class="oddsTdMin" :class="['yidaosiqiu'+item.odd.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(item,item.odd,'yidaosiqiu')">
                          <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(item,item.odd,'yidaosiqiu') : kuaijieInto(item,item.odd,'yidaosiqiu')" class="betRateNum" :class="'yidaosiqiu'+item.odd.oddsId+'a'"> 
                            <span class="betRateNum">{{item.odd.odds}}</span>
                          </a>
                          <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                        </td>

                        <td v-if="!kuaijiePay">
                          <input v-if="isOpenOdds" v-model="item.odd.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(item,item.odd,'yidaosiqiu',item.odd.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                          <span v-else style="width:60px;">封盘</span>
                        </td>

                      </template>
                    </tr>

                    <tr class="td_caption_1">
                      <td :colspan="kuaijiePay?2:3" style=" font-weight: bold;" class="title_colspan">{{liangmianpan_lmp[5].name}}</td>
                      <td :colspan="kuaijiePay?2:3" style=" font-weight: bold;" class="title_colspan">{{liangmianpan_lmp[6].name}}</td>
                      <td :colspan="kuaijiePay?2:3" style=" font-weight: bold;" class="title_colspan">{{liangmianpan_lmp[7].name}}</td>
                      <td :colspan="kuaijiePay?2:3" style=" font-weight: bold;" class="title_colspan">{{liangmianpan_lmp[8].name}}</td>
                    </tr>

                    <tr class="Dbgco1" v-for="(itemPa,indexPa) in sidaobaqiu">
                      <template v-for="(item,index) in itemPa" v-if="item">

                        <td class="betnum" style=" width:60px;max-width:60px;">{{item.odd.oddsName}}</td>
                        <td class="oddsTdMin" :class="['sidaobaqiu'+item.odd.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(item,item.odd,'sidaobaqiu')">
                          <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(item,item.odd,'sidaobaqiu') : kuaijieInto(item,item.odd,'sidaobaqiu')" class="betRateNum" :class="'sidaobaqiu'+item.odd.oddsId+'a'"> 
                            <span class="betRateNum">{{item.odd.odds}}</span>
                          </a>
                          <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                        </td>

                        <td v-if="!kuaijiePay">
                          <input v-if="isOpenOdds" v-model="item.odd.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(item,item.odd,'sidaobaqiu',item.odd.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                          <span v-else style="width:60px;">封盘</span>
                        </td>

                      </template>
                    </tr>

                  </tbody>
                </table>

                <table v-if="['第一球','第二球','第三球','第四球','第五球','第六球','第七球','第八球'].findIndex((n) => n == showOdds)>-1" class="DTable kuaijie" cellpadding="0" cellspacing="1" border="0" width="700" style="margin-top:0px;">
                  <thead>
                    <tr class="td_caption_1">
                      <td style=" font-weight: bold;text-align:center;" align="center">号</td>
                      <td style=" font-weight: bold;text-align:center;min-width:41px;" align="center">赔率</td>
                      <td style=" font-weight: bold;text-align:center;min-width:41px;" align="center" class="title_jine" v-if="!kuaijiePay">金额</td>
                      <td style=" font-weight: bold;text-align:center;" align="center">号</td>
                      <td style=" font-weight: bold;text-align:center;min-width:41px;" align="center">赔率</td>
                      <td style=" font-weight: bold;text-align:center;min-width:41px;" align="center" class="title_jine" v-if="!kuaijiePay">金额</td>
                      <td style=" font-weight: bold;text-align:center;" align="center">号</td>
                      <td style=" font-weight: bold;text-align:center;min-width:41px;" align="center">赔率</td>
                      <td style=" font-weight: bold;text-align:center;min-width:41px;" align="center" class="title_jine" v-if="!kuaijiePay">金额</td>
                      <td style=" font-weight: bold;text-align:center;" align="center">号</td>
                      <td style=" font-weight: bold;text-align:center;min-width:41px;" align="center">赔率</td>
                      <td style=" font-weight: bold;text-align:center;min-width:41px;" align="center" class="title_jine" v-if="!kuaijiePay">金额</td>
                    </tr> 
                  </thead>
                  <tbody>

                    <tr class="Dbgco1" v-for="(itemPa,indexPa) in qidaobaqiuObjL.slice(0,5)">
                      <template v-for="(item,index) in itemPa" v-if="item.odd">
                        <td class="betnum" align="center">
                          <div :class="'No_'+item.odd.oddsName" style=" height:27px; width:27px;"></div>
                        </td>

                        <td class="oddsTdMin" :class="['qidaobaqiuObjL'+item.odd.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(item,item.odd,'qidaobaqiuObjL')">
                          <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(item,item.odd,'qidaobaqiuObjL') : kuaijieInto(item,item.odd,'qidaobaqiuObjL')" class="betRateNum" :class="'qidaobaqiuObjL'+item.odd.oddsId+'a'"> 
                            <span class="betRateNum">{{item.odd.odds}}</span>
                          </a>
                          <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                        </td>

                        <td v-if="!kuaijiePay">
                          <input v-if="isOpenOdds" v-model="item.odd.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(item,item.odd,'qidaobaqiuObjL',item.odd.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                          <span v-else style="width:60px;">封盘</span>
                        </td>

                      </template>


                    </tr>

                     <tr class="Dbgco1" v-for="(itemPa,indexPa) in qidaobaqiuObjL.slice(5,8)">

                      <template v-for="(item,index) in itemPa" v-if="item.odd">

                        <td class="betnum">{{item.odd.oddsName}}</td>

                        <td class="oddsTdMin" :class="['qidaobaqiuObjL'+item.odd.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(item,item.odd,'qidaobaqiuObjL')">
                          <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(item,item.odd,'qidaobaqiuObjL') : kuaijieInto(item,item.odd,'qidaobaqiuObjL')" class="betRateNum" :class="'qidaobaqiuObjL'+item.odd.oddsId+'a'"> 
                            <span class="betRateNum">{{item.odd.odds}}</span>
                          </a>
                          <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                        </td>

                        <td v-if="!kuaijiePay">
                          <input v-if="isOpenOdds" v-model="item.odd.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(item,item.odd,'qidaobaqiuObjL',item.odd.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                          <span v-else style="width:60px;">封盘</span>
                        </td>

                      </template>

                    </tr>
                    <tr class="Dbgco1" v-for="(itemPa,indexPa) in qidaobaqiuObjL.slice(8)">

                      <template v-for="(item,index) in itemPa" v-if="item.odd">

                        <td class="betnum">{{item.odd.oddsName}}</td>

                        <td class="oddsTdMin" :class="['qidaobaqiuObjL'+item.odd.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(item,item.odd,'qidaobaqiuObjL')">
                          <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(item,item.odd,'qidaobaqiuObjL') : kuaijieInto(item,item.odd,'qidaobaqiuObjL')" class="betRateNum" :class="'qidaobaqiuObjL'+item.odd.oddsId+'a'"> 
                            <span class="betRateNum">{{item.odd.odds}}</span>
                          </a>
                          <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                        </td>

                        <td v-if="!kuaijiePay">
                          <input v-if="isOpenOdds" v-model="item.odd.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(item,item.odd,'qidaobaqiuObjL',item.odd.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                          <span v-else style="width:60px;">封盘</span>
                        </td>

                      </template>

                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td class="title_jine" v-if="!kuaijiePay">&nbsp;</td>

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
      qianhousan_lmp: [],

      liangmianpan_lmp: [],

      zongheData: {},
      yidaosiqiu: [],
      sidaobaqiu: [],
      qidaobaqiuObjL: []
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
      bus.$on('iskaipaning', (data) => {
        this.iskaipaning = data;
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

        let arry1 = [];
        let arry2 = [];
        let arry3 = [];
        let arry4 = [];
        let arry5 = [];
        let arry6 = [];
        let arry7 = [];
        let arry8 = [];

        let arry9 = [];

        let barry1 = [];
        let barry2 = [];
        let barry3 = [];
        let barry4 = [];
        let barry5 = [];
        let barry6 = [];
        let barry7 = [];
        let barry8 = [];

        console.log('dataList',dataList);

        this.liangmianpan_lmp = dataList;

        this.yidaosiqiu = [];
        this.sidaobaqiu = [];


        for(let m in dataList) {

          if(dataList[m].name == '总和') {

            dataList[m].list = _.chunk(dataList[m].list,2);
            let arr1 = [];
            let arr2 = [];

            for(let n in dataList[m].list) {
              arr1.push(dataList[m].list[n][0]);
              arr2.push(dataList[m].list[n][1]);
            }

            this.zongheData.id = dataList[m].id;
            this.zongheData.name = dataList[m].name;
            this.zongheData.list = [];
            this.zongheData.list.push(arr1);
            this.zongheData.list.push(arr2);
          }

          if(['第一球','第二球','第三球','第四球'].findIndex((n) => n == dataList[m].name)>-1) {
            let obj1 = {
              id: dataList[m].id,
              name: dataList[m].name,
              odd: dataList[m].list[0]
            }
            arry1.push(obj1);
            let obj2 = {
              id: dataList[m].id,
              name: dataList[m].name,
              odd: dataList[m].list[1]
            }
            arry2.push(obj2);
            let obj3 = {
              id: dataList[m].id,
              name: dataList[m].name,
              odd: dataList[m].list[2]
            }
            arry3.push(obj3);
            let obj4 = {
              id: dataList[m].id,
              name: dataList[m].name,
              odd: dataList[m].list[3]
            }
            arry4.push(obj4);
            let obj5 = {
              id: dataList[m].id,
              name: dataList[m].name,
              odd: dataList[m].list[4]
            }
            arry5.push(obj5);
            let obj6 = {
              id: dataList[m].id,
              name: dataList[m].name,
              odd: dataList[m].list[5]
            }
            arry6.push(obj6);
            let obj7 = {
              id: dataList[m].id,
              name: dataList[m].name,
              odd: dataList[m].list[6]
            }
            arry7.push(obj7);
            let obj8 = {
              id: dataList[m].id,
              name: dataList[m].name,
              odd: dataList[m].list[7]
            }
            arry8.push(obj8);
          }

          if(['第五球','第六球','第七球','第八球'].findIndex((n) => n == dataList[m].name)>-1) {
            let obj1 = {
              id: dataList[m].id,
              name: dataList[m].name,
              odd: dataList[m].list[0]
            }
            barry1.push(obj1);
            let obj2 = {
              id: dataList[m].id,
              name: dataList[m].name,
              odd: dataList[m].list[1]
            }
            barry2.push(obj2);
            let obj3 = {
              id: dataList[m].id,
              name: dataList[m].name,
              odd: dataList[m].list[2]
            }
            barry3.push(obj3);
            let obj4 = {
              id: dataList[m].id,
              name: dataList[m].name,
              odd: dataList[m].list[3]
            }
            barry4.push(obj4);
            let obj5 = {
              id: dataList[m].id,
              name: dataList[m].name,
              odd: dataList[m].list[4]
            }
            barry5.push(obj5);
            let obj6 = {
              id: dataList[m].id,
              name: dataList[m].name,
              odd: dataList[m].list[5]
            }
            barry6.push(obj6);
            let obj7 = {
              id: dataList[m].id,
              name: dataList[m].name,
              odd: dataList[m].list[6]
            }
            barry7.push(obj7);
            let obj8 = {
              id: dataList[m].id,
              name: dataList[m].name,
              odd: dataList[m].list[7]
            }
            barry8.push(obj8);
          }



        }

        this.yidaosiqiu.push(arry1);
        this.yidaosiqiu.push(arry2);
        this.yidaosiqiu.push(arry3);
        this.yidaosiqiu.push(arry4);
        this.yidaosiqiu.push(arry5);
        this.yidaosiqiu.push(arry6);
        this.yidaosiqiu.push(arry7);
        this.yidaosiqiu.push(arry8);

        this.sidaobaqiu.push(barry1);
        this.sidaobaqiu.push(barry2);
        this.sidaobaqiu.push(barry3);
        this.sidaobaqiu.push(barry4);
        this.sidaobaqiu.push(barry5);
        this.sidaobaqiu.push(barry6);
        this.sidaobaqiu.push(barry7);
        this.sidaobaqiu.push(barry8);


        //console.log('this.yidaosiqiu',this.yidaosiqiu);
        //console.log('this.sidaobaqiu',this.sidaobaqiu);

        console.log('zongheData',this.zongheData);
        
      }

      if(['第一球','第二球','第三球','第四球','第五球','第六球','第七球','第八球'].findIndex((n) => n == this.oddsList[0].name)>-1) {

        this.qidaobaqiuObjL = [];
        
        let arry1 = [];
        let arry2 = [];
        let arry3 = [];
        let arry4 = [];
        let arry5 = [];
        let arry6 = [];
        let arry7 = [];
        let arry8 = [];

        let arry9 = [];

        let barry1 = [];
        let barry2 = [];
        let barry3 = [];
        let barry4 = [];
        let barry5 = [];
        let barry6 = [];
        let barry7 = [];
        let barry8 = [];

        let tempOddList = this.oddsList[0];

        console.log('tempOddList',tempOddList);

        let arrytemp1 = tempOddList.list.slice(0,20);
        let arrytemp2 = tempOddList.list.slice(20,35);

        arrytemp1 = _.chunk(arrytemp1,5);  
        arrytemp2 = _.chunk(arrytemp2,4);  

        console.log('arrytemp1',arrytemp1);
        console.log('arrytemp2',arrytemp2);

        for(let n in arrytemp1) {
          let obj1 = {
            id: tempOddList.id,
            name: tempOddList.name,
            odd: arrytemp1[n][0]
          }
          arry1.push(obj1);
          let obj2 = {
            id: tempOddList.id,
            name: tempOddList.name,
            odd: arrytemp1[n][1]
          }
          arry2.push(obj2);
          let obj3 = {
            id: tempOddList.id,
            name: tempOddList.name,
            odd: arrytemp1[n][2]
          }
          arry3.push(obj3);
          let obj4 = {
            id: tempOddList.id,
            name: tempOddList.name,
            odd: arrytemp1[n][3]
          }
          arry4.push(obj4);
          let obj5 = {
            id: tempOddList.id,
            name: tempOddList.name,
            odd: arrytemp1[n][4]
          }
          arry5.push(obj5);
        }

        this.qidaobaqiuObjL.push(arry1);
        this.qidaobaqiuObjL.push(arry2);
        this.qidaobaqiuObjL.push(arry3);
        this.qidaobaqiuObjL.push(arry4);
        this.qidaobaqiuObjL.push(arry5);

        for(let n in arrytemp2) {
          let obj1 = {
            id: tempOddList.id,
            name: tempOddList.name,
            odd: arrytemp2[n][0]
          }
          barry1.push(obj1);
          let obj2 = {
            id: tempOddList.id,
            name: tempOddList.name,
            odd: arrytemp2[n][1]
          }
          barry2.push(obj2);
          let obj3 = {
            id: tempOddList.id,
            name: tempOddList.name,
            odd: arrytemp2[n][2]
          }
          barry3.push(obj3);
          let obj4 = {
            id: tempOddList.id,
            name: tempOddList.name,
            odd: arrytemp2[n][3]
          }
          barry4.push(obj4);
        }

        this.qidaobaqiuObjL.push(barry1);
        this.qidaobaqiuObjL.push(barry2);
        this.qidaobaqiuObjL.push(barry3);
        this.qidaobaqiuObjL.push(barry4);

        console.log('this.qidaobaqiuObjL',this.qidaobaqiuObjL);
        
      }





    }




  }
}

</script>

<style scoped>


</style>
