<template>
  <div id="chongqindubo" class="content-main duboBodyClass">

    <table class="table000">
      <tbody>
        <tr>
          <td class="vertical-t">
            <div class="margin-r10">
              <div id="round_content">
                <table class="table000 width700">
                  <tbody>
                    <tr>
                      <td class="bocaiNameTd">
                        <b class="b_title">重庆时时彩</b>
                        <span class="todayWinSpan">今天输赢：</span>
                        <span class="font_r" id="UserResult">
                          <span class="black">0</span>
                        </span>
                      </td>
                      <td width="55%" colspan="1" class="vertical-r">
                        <table width="100%" class="table000">
                          <tbody>
                            <tr>
                              <td class="height27">
                                <div class="head_f2" id="div_betno">
                                  <div class="versionKJDiv">
                                    <span class="floatL"></span>
                                    <span class="floatL"><div class="CQNo_03 CQREDiv"></div></span>
                                    <span class="floatL"><div class="CQNo_07 CQREDiv"></div></span>
                                    <span class="floatL"><div class="CQNo_06 CQREDiv"></div></span>
                                    <span class="floatL"><div class="CQNo_06 CQREDiv"></div></span>
                                    <span class="floatL"><div class="CQNo_08 CQREDiv"></div></span>
                                  </div>
                                    <span class="versionKJSpan"><span id="span_roundno">20190602035</span>期开奖&nbsp;</span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table class="table000 width700">
                  <tbody>
                    <tr>
                      <td class="h24w28">
                        <b id="t_LID" class="green">20190602036</b>期　<b class="bocaiSubName">两面盘</b>
                      </td>
                      <td class="alrwd25"><span id="hClockTime_C">距离封盘：<b>13</b>:<b>53</b></span></td>
                      <td class="alrwd25"><span id="hClockTime_O">距离开奖：<b class="red">15</b>:<b class="red">33</b></span></td>
                      <td class="vertical-r" width="22%"><span id="Update_Time"></span></td>
                     </tr>
                  </tbody>
                </table>

                <div class="btnDivArea" id="btnDivArea11">  
                  <input id="chk_qcstake" type="checkbox">
                  <span class="kuaijieSpan" @click="QCheckShow()">快捷下注</span>
                  <span id="sp_qcstake" class="yibanSpan" v-if="normalPay">金额：
                    <input id="txtqcstake" type="text" class="wid60">
                    <span @click="QCExplain()" class="shuomiSpan">说明</span>
                  </span>
                  <input type="reset" value="重 填" class="button_bg1" onclick="SetOrderOddsString();"> 
                  <input id="btn_order2" type="button" value="下 注" class="button_bg1">
                </div> 


                <div class="btnDivArea" id="btnDivArea22" style="display:none;">  
                  <span style="color:red">下注中,请等待。。。</span>
                </div> 
              </div>


            <div id="errormsg" style=" display:none;"></div>

          <div id="mainPageData" v-if="showOdds == '两面盘'">

          1: {name: "第一球",…}
            id: 116
            list: [{oddsName: "大", oddsId: 8, normalMoney: "", odds: 2, id: 1371397, dewaterId: 3},…]
            0: {oddsName: "大", oddsId: 8, normalMoney: "", odds: 2, id: 1371397, dewaterId: 3}
            dewaterId: 3
            id: 1371397
            normalMoney: ""
            odds: 2
            oddsId: 8
            oddsName: "大"

            0: {name: "总和-龙虎和",…}
id: 115
list: [{oddsName: "总和大", oddsId: 1, normalMoney: "", odds: 2, id: 1371390, dewaterId: 5},…]
0: {oddsName: "总和大", oddsId: 1, normalMoney: "", odds: 2, id: 1371390, dewaterId: 5}
dewaterId: 5
id: 1371390
normalMoney: ""
odds: 2
oddsId: 1
oddsName: "总和大"
1: {oddsName: "总和小", oddsId: 2, normalMoney: "", odds: 2, id: 1371391, dewaterId: 5}
2: {oddsName: "总和单", oddsId: 3, normalMoney: "", odds: 2, id: 1371392, dewaterId: 6}
3: {oddsName: "总和双", oddsId: 4, normalMoney: "", odds: 2, id: 1371393, dewaterId: 6}
4: {oddsName: "龙", oddsId: 5, normalMoney: "", odds: 2, id: 1371394, dewaterId: 7}
5: {oddsName: "虎", oddsId: 6, normalMoney: "", odds: 2, id: 1371395, dewaterId: 7}
6: {oddsName: "和", oddsId: 7, normalMoney: "", odds: 2, id: 1371396, dewaterId: 7}
name: "总和-龙虎和"



            <table class="DTable kuaijie" cellpadding="0" cellspacing="1" border="0" width="700" style="margin-top: 0px;">
              <thead>
                <tr class="DtrTitle">
                  <td colspan="12" class="td_caption_1" style="font-weight: bold;">{{longhuhe_lmp.name}}</td>
                </tr>
              </thead>
              <tbody>
                <tr class="Dbgco1">
                  <template v-for="(item,index) in longhuhe_lmp.list" v-if="index*1 < 4">

                    <td class="betnum" :class="'longhuhe_lmp'+item.oddsId">{{item.oddsName}}</td>
                    <td :class="'longhuhe_lmp'+item.oddsId" @click="orderTd(longhuhe_lmp,item,'longhuhe_lmp')" @mouseenter="overShow(item,'longhuhe_lmp')" @mouseleave="outHide(item,'longhuhe_lmp')">
                      <a v-if="isOpenOdds" title="按此下注" @click.stop="normalPay ? IntoMtran(item) : ''" class="betRateNum" :class="'longhuhe_lmp'+item.oddsId+'a'">
                        <span class="betRateNum">{{item.odds}}</span>
                      </a>
                      <span v-else style="width:41px;color:red;font-weight:bold;" id="hengan_536_1">&nbsp;-&nbsp;</span>
                      <input type="hidden" name="odds_536_1" value="1.9874">
                    </td>
                    <td v-if="normalPay">
                      <input v-if="isOpenOdds" v-model="item.normalMoney" type="text" name="r536_2" size="3" class="inp1" v-on:input ="inputFunc(longhuhe_lmp,item,'longhuhe_lmp',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                      <span v-else style="width:60px;" id="fenpan_536_2">封盘</span>
                    </td>

                  </template>
                </tr>
                <tr>
                  <template v-for="(item,index) in longhuhe_lmp.list" v-if="index*1 > 3">

                    <td class="betnum" :class="'longhuhe_lmp'+item.oddsId">{{item.oddsName}}</td>
                    <td :class="'longhuhe_lmp'+item.oddsId" @click="orderTd(longhuhe_lmp,item,'longhuhe_lmp')" @mouseenter="overShow(item,'longhuhe_lmp')" @mouseleave="outHide(item,'longhuhe_lmp')">
                      <a v-if="isOpenOdds" title="按此下注" @click.stop="normalPay ? IntoMtran(item) : ''" class="betRateNum" :class="'longhuhe_lmp'+item.oddsId+'a'">
                        <span class="betRateNum">{{item.odds}}</span>
                      </a>
                      <span v-else style="width:41px;color:red;font-weight:bold;" id="hengan_536_1">&nbsp;-&nbsp;</span>
                      <input type="hidden" name="odds_536_1" value="1.9874">
                    </td>
                    <td v-if="normalPay">
                      <input v-if="isOpenOdds" v-model="item.normalMoney" type="text" name="r536_2" size="3" class="inp1" v-on:input ="inputFunc(longhuhe_lmp,item,'longhuhe_lmp',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                      <span v-else style="width:60px;" id="fenpan_536_2">封盘</span>
                    </td>

                  </template>
                </tr>
              </tbody>
            </table>

            <div class="eball" v-for="(itemPa,index) in yiwuqiu_lmp">
                    <div class="order-table">
                      <table>
                        <tr>
                          <th colspan="2">{{itemPa.name}}</th>
                        </tr>
                        <tr v-for="(item,index) in itemPa.list">
                          <td class="tdLeft" :class="'yiwuqiu_lmp'+item.oddsId" @click="orderTd(itemPa,item,'yiwuqiu_lmp')" @mouseenter="overShow(item,'yiwuqiu_lmp')" @mouseleave="outHide(item,'yiwuqiu_lmp')">{{item.oddsName}}</td>
                          <td class="tdRight" :class="'yiwuqiu_lmp'+item.oddsId" @click="orderTd(itemPa,item,'yiwuqiu_lmp')" @mouseenter="overShow(item,'yiwuqiu_lmp')" @mouseleave="outHide(item,'yiwuqiu_lmp')">
                            <ul>
                              <li>
                                <span class="odds-font">{{item.odds}}</span>
                              </li>
                              <li v-if="normalPay"><input type="text" v-model="item.normalMoney" v-on:input ="inputFunc(itemPa,item,'yiwuqiu_lmp',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/"></li>
                            </ul>
                          </td>
                        </tr>
                      </table>
                    </div>
                </div>


                <table class="DTable kuaijie" cellpadding="0" cellspacing="1" border="0" width="700" id="tblNowBet02" style="margin-top: 5px;">
                            <tbody>
                            <tr class="td_caption_1">
                                <td colspan="3" style="font-weight: bold;" class="title_colspan">第一球</td>
                                <td colspan="3" style="font-weight: bold;" class="title_colspan">第二球</td>
                                <td colspan="3" style="font-weight: bold;" class="title_colspan">第三球</td>
                                <td colspan="3" style="font-weight: bold;" class="title_colspan">第四球</td>
                                <td colspan="3" style="font-weight: bold;" class="title_colspan">第五球</td>
                            </tr>
                            <tr class="Dbgco1">
                                <td class="betnum" id="thnum_r511_1" align="center">大</td>
                                <td id="td_r511_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('511,,1,,1.9394,511_1',this)" class="betRateNum" id="oid_511_1"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_511_1" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_511_1">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r511_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_511_1">封盘</span></td>
                                <td class="betnum" id="thnum_r512_1" align="center">大</td>
                                <td id="td_r512_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('512,,1,,1.9394,512_1',this)" class="betRateNum" id="oid_512_1"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_512_1" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_512_1">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r512_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_512_1">封盘</span></td>
                                <td class="betnum" id="thnum_r513_1" align="center">大</td>
                                <td id="td_r513_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('513,,1,,1.9394,513_1',this)" class="betRateNum" id="oid_513_1"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_513_1" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_513_1">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r513_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_513_1">封盘</span></td>
                                <td class="betnum" id="thnum_r514_1" align="center">大</td>
                                <td id="td_r514_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('514,,1,,1.9394,514_1',this)" class="betRateNum" id="oid_514_1"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_514_1" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_514_1">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r514_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_514_1">封盘</span></td>
                                <td class="betnum" id="thnum_r515_1" align="center">大</td>
                                <td id="td_r515_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('515,,1,,1.9394,515_1',this)" class="betRateNum" id="oid_515_1"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_515_1" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_515_1">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r515_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_515_1">封盘</span></td>
                            </tr>
                            <tr class="Dbgco1">
                                <td class="betnum" id="thnum_r511_2" align="center">小</td>
                                <td id="td_r511_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('511,,2,,1.9394,511_2',this)" class="betRateNum" id="oid_511_2"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_511_2" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_511_2">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r511_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_511_2">封盘</span></td>
                                <td class="betnum" id="thnum_r512_2" align="center">小</td>
                                <td id="td_r512_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('512,,2,,1.9394,512_2',this)" class="betRateNum" id="oid_512_2"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_512_2" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_512_2">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r512_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_512_2">封盘</span></td>
                                <td class="betnum" id="thnum_r513_2" align="center">小</td>
                                <td id="td_r513_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('513,,2,,1.9394,513_2',this)" class="betRateNum" id="oid_513_2"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_513_2" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_513_2">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r513_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_513_2">封盘</span></td>
                                <td class="betnum" id="thnum_r514_2" align="center">小</td>
                                <td id="td_r514_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('514,,2,,1.9394,514_2',this)" class="betRateNum" id="oid_514_2"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_514_2" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_514_2">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r514_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_514_2">封盘</span></td>
                                <td class="betnum" id="thnum_r515_2" align="center">小</td>
                                <td id="td_r515_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('515,,2,,1.9394,515_2',this)" class="betRateNum" id="oid_515_2"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_515_2" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_515_2">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r515_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_515_2">封盘</span></td>                                  
                            </tr>
                            <tr class="Dbgco1">
                                <td class="betnum" id="thnum_r506_1" align="center">单</td>
                                <td id="td_r506_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('506,,1,,1.9394,506_1',this)" class="betRateNum" id="oid_506_1"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_506_1" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_506_1">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r506_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_506_1">封盘</span></td>
                                <td class="betnum" id="thnum_r507_1" align="center">单</td>
                                <td id="td_r507_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('507,,1,,1.9394,507_1',this)" class="betRateNum" id="oid_507_1"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_507_1" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_507_1">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r507_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_507_1">封盘</span></td>
                                <td class="betnum" id="thnum_r508_1" align="center">单</td>
                                <td id="td_r508_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('508,,1,,1.9394,508_1',this)" class="betRateNum" id="oid_508_1"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_508_1" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_508_1">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r508_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_508_1">封盘</span></td>
                                <td class="betnum" id="thnum_r509_1" align="center">单</td>
                                <td id="td_r509_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('509,,1,,1.9394,509_1',this)" class="betRateNum" id="oid_509_1"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_509_1" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_509_1">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r509_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_509_1">封盘</span></td>
                                <td class="betnum" id="thnum_r510_1" align="center">单</td>
                                <td id="td_r510_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('510,,1,,1.9394,510_1',this)" class="betRateNum" id="oid_510_1"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_510_1" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_510_1">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r510_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_510_1">封盘</span></td>
                            </tr>
                            <tr class="Dbgco1">
                                <td class="betnum" id="thnum_r506_2" align="center">双</td>
                                <td id="td_r506_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('506,,2,,1.9394,506_2',this)" class="betRateNum" id="oid_506_2"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_506_2" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_506_2">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r506_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_506_2">封盘</span></td>
                                <td class="betnum" id="thnum_r507_2" align="center">双</td>
                                <td id="td_r507_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('507,,2,,1.9394,507_2',this)" class="betRateNum" id="oid_507_2"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_507_2" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_507_2">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r507_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_507_2">封盘</span></td>
                                <td class="betnum" id="thnum_r508_2" align="center">双</td>
                                <td id="td_r508_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('508,,2,,1.9394,508_2',this)" class="betRateNum" id="oid_508_2"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_508_2" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_508_2">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r508_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_508_2">封盘</span></td>
                                <td class="betnum" id="thnum_r509_2" align="center">双</td>
                                <td id="td_r509_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('509,,2,,1.9394,509_2',this)" class="betRateNum" id="oid_509_2"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_509_2" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_509_2">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r509_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_509_2">封盘</span></td>
                                <td class="betnum" id="thnum_r510_2" align="center">双</td>
                                <td id="td_r510_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('510,,2,,1.9394,510_2',this)" class="betRateNum" id="oid_510_2"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_510_2" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_510_2">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r510_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_510_2">封盘</span></td>
                            </tr>
                            <tr class="Dbgco1">
                                <td class="betnum" id="thnum_r521_1" align="center">尾大</td>
                                <td id="td_r521_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('521,,1,,1.9394,521_1',this)" class="betRateNum" id="oid_521_1"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_521_1" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_521_1">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r521_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_521_1">封盘</span></td>
                                <td class="betnum" id="thnum_r522_1" align="center">尾大</td>
                                <td id="td_r522_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('522,,1,,1.9394,522_1',this)" class="betRateNum" id="oid_522_1"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_522_1" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_522_1">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r522_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_522_1">封盘</span></td>
                                <td class="betnum" id="thnum_r523_1" align="center">尾大</td>
                                <td id="td_r523_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('523,,1,,1.9394,523_1',this)" class="betRateNum" id="oid_523_1"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_523_1" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_523_1">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r523_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_523_1">封盘</span></td>
                                <td class="betnum" id="thnum_r524_1" align="center">尾大</td>
                                <td id="td_r524_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('524,,1,,1.9394,524_1',this)" class="betRateNum" id="oid_524_1"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_524_1" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_524_1">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r524_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_524_1">封盘</span></td>
                                <td class="betnum" id="thnum_r525_1" align="center">尾大</td>
                                <td id="td_r525_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('525,,1,,1.9394,525_1',this)" class="betRateNum" id="oid_525_1"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_525_1" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_525_1">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r525_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_525_1">封盘</span></td>
                            </tr>
                            <tr class="Dbgco1">
                                <td class="betnum" id="thnum_r521_2" align="center">尾小</td>
                                <td id="td_r521_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('521,,2,,1.9394,521_2',this)" class="betRateNum" id="oid_521_2"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_521_2" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_521_2">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r521_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_521_2">封盘</span></td>
                                <td class="betnum" id="thnum_r522_2" align="center">尾小</td>
                                <td id="td_r522_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('522,,2,,1.9394,522_2',this)" class="betRateNum" id="oid_522_2"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_522_2" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_522_2">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r522_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_522_2">封盘</span></td>
                                <td class="betnum" id="thnum_r523_2" align="center">尾小</td>
                                <td id="td_r523_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('523,,2,,1.9394,523_2',this)" class="betRateNum" id="oid_523_2"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_523_2" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_523_2">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r523_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_523_2">封盘</span></td>
                                <td class="betnum" id="thnum_r524_2" align="center">尾小</td>
                                <td id="td_r524_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('524,,2,,1.9394,524_2',this)" class="betRateNum" id="oid_524_2"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_524_2" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_524_2">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r524_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_524_2">封盘</span></td>
                                <td class="betnum" id="thnum_r525_2" align="center">尾小</td>
                                <td id="td_r525_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('525,,2,,1.9394,525_2',this)" class="betRateNum" id="oid_525_2"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_525_2" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_525_2">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r525_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_525_2">封盘</span></td>
                            </tr>
                            <tr class="Dbgco1">
                                <td class="betnum" id="thnum_r516_1" align="center">合单</td>
                                <td id="td_r516_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('516,,1,,1.9394,516_1',this)" class="betRateNum" id="oid_516_1"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_516_1" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_516_1">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r516_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_516_1">封盘</span></td>
                                <td class="betnum" id="thnum_r517_1" align="center">合单</td>
                                <td id="td_r517_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('517,,1,,1.9394,517_1',this)" class="betRateNum" id="oid_517_1"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_517_1" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_517_1">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r517_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_517_1">封盘</span></td>
                                <td class="betnum" id="thnum_r518_1" align="center">合单</td>
                                <td id="td_r518_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('518,,1,,1.9394,518_1',this)" class="betRateNum" id="oid_518_1"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_518_1" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_518_1">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r518_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_518_1">封盘</span></td>
                                <td class="betnum" id="thnum_r519_1" align="center">合单</td>
                                <td id="td_r519_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('519,,1,,1.9394,519_1',this)" class="betRateNum" id="oid_519_1"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_519_1" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_519_1">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r519_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_519_1">封盘</span></td>
                                <td class="betnum" id="thnum_r520_1" align="center">合单</td>
                                <td id="td_r520_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('520,,1,,1.9394,520_1',this)" class="betRateNum" id="oid_520_1"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_520_1" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_520_1">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r520_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_520_1">封盘</span></td>
                            </tr>
                            <tr class="Dbgco1">
                                <td class="betnum" id="thnum_r516_2" align="center">合双</td>
                                <td id="td_r516_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('516,,2,,1.9394,516_2',this)" class="betRateNum" id="oid_516_2"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_516_2" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_516_2">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r516_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_516_2">封盘</span></td>
                                <td class="betnum" id="thnum_r517_2" align="center">合双</td>
                                <td id="td_r517_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('517,,2,,1.9394,517_2',this)" class="betRateNum" id="oid_517_2"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_517_2" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_517_2">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r517_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_517_2">封盘</span></td>
                                <td class="betnum" id="thnum_r518_2" align="center">合双</td>
                                <td id="td_r518_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('518,,2,,1.9394,518_2',this)" class="betRateNum" id="oid_518_2"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_518_2" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_518_2">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r518_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_518_2">封盘</span></td>
                                <td class="betnum" id="thnum_r519_2" align="center">合双</td>
                                <td id="td_r519_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('519,,2,,1.9394,519_2',this)" class="betRateNum" id="oid_519_2"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_519_2" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_519_2">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r519_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_519_2">封盘</span></td>
                                <td class="betnum" id="thnum_r520_2" align="center">合双</td>
                                <td id="td_r520_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('520,,2,,1.9394,520_2',this)" class="betRateNum" id="oid_520_2"><span class="betRateNum">1.9394</span></a><input type="hidden" name="odds_520_2" value="1.9394"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_520_2">&nbsp;-&nbsp;</span></td>
                                <td><input type="text" name="r520_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_520_2">封盘</span></td>
                            </tr>
                        </tbody>
                    </table>

            <template v-for="(itemPa,index) in yiwuqiu_lmp"> 
              <table class="DTable kuaijie" cellpadding="0" cellspacing="1" width="700" style="margin-top:0px;">
                <thead>
                  <tr class="DtrTitle" style="font-weight: bold;">
                    <td colspan="12" class="td_caption_1" align="center">{{itemPa.name}}</td>
                  </tr>
                </thead>  
                <tbody>
                  <tr class="Dbgco1">
                    <td class="betnum" id="thnum_r210_1" align="center">大</td>
                    <td id="td_r210_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('210,,1,,1.9399,210_1',this)" class="betRateNum" id="oid_210_1"><span class="betRateNum">1.9399</span></a><input type="hidden" name="odds_210_1" value="1.9399"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_210_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r210_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_210_1">封盘</span></td> 
                    <td class="betnum" id="thnum_r210_2" align="center">小</td>
                    <td id="td_r210_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('210,,2,,1.9399,210_2',this)" class="betRateNum" id="oid_210_2"><span class="betRateNum">1.9399</span></a><input type="hidden" name="odds_210_2" value="1.9399"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_210_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r210_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_210_2">封盘</span></td>
                    <td class="betnum" id="thnum_r215_1" align="center">单</td>
                    <td id="td_r215_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('215,,1,,1.9399,215_1',this)" class="betRateNum" id="oid_215_1"><span class="betRateNum">1.9399</span></a><input type="hidden" name="odds_215_1" value="1.9399"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_215_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r215_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_215_1">封盘</span></td>
                    <td class="betnum" id="thnum_r215_2" align="center">双</td>
                    <td id="td_r215_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('215,,2,,1.9399,215_2',this)" class="betRateNum" id="oid_215_2"><span class="betRateNum">1.9399</span></a><input type="hidden" name="odds_215_2" value="1.9399"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_215_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r215_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_215_2">封盘</span></td> 
                  </tr> 
                </tbody>
              </table>
            </template>

            

            <table  class="DTable kuaijie" cellpadding="0" cellspacing="1" width="700" id="tblNowBet01" style="margin-top:0px;">
              <thead>
                <tr class="DtrTitle" style="font-weight: bold;">
                  <td colspan="12" class="td_caption_1" align="center">{{longhuhe_lmp.name}}</td>
                </tr>
              </thead>  
              <tbody>
                <tr class="Dbgco1">
                  <td class="betnum" id="thnum_r210_1" align="center">大</td>
                  <td id="td_r210_1">
                    <a title="按此下注" @click="IntoMtran()" class="betRateNum" id="oid_210_1"><span class="betRateNum">1.9879</span></a>
                    <input type="hidden" name="odds_210_1" value="1.9879">
                    <span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_210_1">&nbsp;-&nbsp;</span>
                  </td>
                  <td>
                    <input type="text" name="r210_1" size="3" class="inp1">
                    <span style="width:60px;" id="fenpan_210_1" v-if="!isOpenOdds">封盘</span>
                  </td> 
                  <td class="betnum" id="thnum_r210_2" align="center">小</td>
                  <td id="td_r210_2">
                    <a title="按此下注" @click="IntoMtran()" class="betRateNum" id="oid_210_2"><span class="betRateNum">1.9879</span></a>
                    <input type="hidden" name="odds_210_2" value="1.9879">
                    <span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_210_2">&nbsp;-&nbsp;</span>
                  </td>
                  <td>
                    <input type="text" name="r210_2" size="3" class="inp1">
                    <span style="width:60px;" id="fenpan_210_2" v-if="!isOpenOdds">封盘</span>
                  </td>
                  <td class="betnum" id="thnum_r210_1" align="center">单</td>
                  <td id="td_r210_1">
                    <a title="按此下注" @click="IntoMtran()" class="betRateNum" id="oid_210_1"><span class="betRateNum">1.9879</span></a>
                    <input type="hidden" name="odds_210_1" value="1.9879">
                    <span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_210_1">&nbsp;-&nbsp;</span>
                  </td>
                  <td>
                    <input type="text" name="r210_1" size="3" class="inp1">
                    <span style="width:60px;" id="fenpan_210_1" v-if="!isOpenOdds">封盘</span>
                  </td> 
                  <td class="betnum" id="thnum_r210_2" align="center">双</td>
                  <td id="td_r210_2">
                    <a title="按此下注" @click="IntoMtran()" class="betRateNum" id="oid_210_2"><span class="betRateNum">1.9879</span></a>
                    <input type="hidden" name="odds_210_2" value="1.9879">
                    <span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_210_2">&nbsp;-&nbsp;</span>
                  </td>
                  <td>
                    <input type="text" name="r210_2" size="3" class="inp1">
                    <span style="width:60px;" id="fenpan_210_2" v-if="!isOpenOdds">封盘</span>
                  </td> 
                </tr> 
              </tbody>

            </table>

            <table>

              <tbody>
                <tr class="Dbgco1">
                <td class="betnum" id="thnum_r458_1">总和大</td><td id="td_r458_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('458,,1,,1.9877,458_1',this)" class="betRateNum" id="oid_458_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_458_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_458_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r458_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_458_1">封盘</span></td> 
                <td class="betnum" id="thnum_r457_1">总和单</td><td id="td_r457_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('457,,1,,1.9877,457_1',this)" class="betRateNum" id="oid_457_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_457_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_457_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r457_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_457_1">封盘</span></td>
                <td class="betnum" id="thnum_r459_1" style=" width:60px;max-width:60px;">总和尾大</td><td id="td_r459_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('459,,1,,1.9877,459_1',this)" class="betRateNum" id="oid_459_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_459_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_459_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r459_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_459_1">封盘</span></td> 
                <td class="betnum" id="thnum_r460_1">龙</td><td id="td_r460_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('460,,1,,1.9877,460_1',this)" class="betRateNum" id="oid_460_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_460_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_460_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r460_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_460_1">封盘</span></td>
                </tr>
                 <tr class="Dbgco1">
                 <td class="betnum" id="thnum_r458_2">总和小</td><td id="td_r458_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('458,,2,,1.9877,458_2',this)" class="betRateNum" id="oid_458_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_458_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_458_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r458_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_458_2">封盘</span></td> 
                 <td class="betnum" id="thnum_r457_2">总和双</td><td id="td_r457_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('457,,2,,1.9823,457_2',this)" class="betRateNum" id="oid_457_2" style=""><span class="betRateNum">1.9823</span></a><input type="hidden" name="odds_457_2" value="1.9823"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_457_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r457_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_457_2">封盘</span></td>
                 <td class="betnum" id="thnum_r459_2" style=" width:60px;max-width:60px;">总和尾小</td><td id="td_r459_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('459,,2,,1.9863,459_2',this)" class="betRateNum" id="oid_459_2" style=""><span class="betRateNum">1.9863</span></a><input type="hidden" name="odds_459_2" value="1.9863"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_459_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r459_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_459_2">封盘</span></td> 
                 <td class="betnum" id="thnum_r460_2">虎</td><td id="td_r460_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('460,,2,,1.9877,460_2',this)" class="betRateNum" id="oid_460_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_460_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_460_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r460_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_460_2">封盘</span></td>
                </tr>

                <tr class="td_caption_1">
                <td colspan="3" style=" font-weight: bold;" class="title_colspan">第一球</td>
                <td colspan="3" style=" font-weight: bold;" class="title_colspan">第二球</td>
                <td colspan="3" style=" font-weight: bold;" class="title_colspan">第三球</td>
                <td colspan="3" style=" font-weight: bold;" class="title_colspan">第四球</td>
                </tr>

                <tr class="Dbgco1">
                <td class="betnum" id="thnum_r417_1" align="center">大</td><td id="td_r417_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('417,,1,,1.9877,417_1',this)" class="betRateNum" id="oid_417_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_417_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_417_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r417_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_417_1">封盘</span></td> 
                <td class="betnum" id="thnum_r418_1" align="center">大</td><td id="td_r418_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('418,,1,,1.9877,418_1',this)" class="betRateNum" id="oid_418_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_418_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_418_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r418_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_418_1">封盘</span></td> 
                <td class="betnum" id="thnum_r419_1" align="center">大</td><td id="td_r419_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('419,,1,,1.9877,419_1',this)" class="betRateNum" id="oid_419_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_419_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_419_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r419_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_419_1">封盘</span></td> 
                <td class="betnum" id="thnum_r420_1" align="center">大</td><td id="td_r420_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('420,,1,,1.9877,420_1',this)" class="betRateNum" id="oid_420_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_420_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_420_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r420_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_420_1">封盘</span></td> 
                </tr>
                 <tr class="Dbgco1">
                <td class="betnum" id="thnum_r417_2" align="center">小</td><td id="td_r417_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('417,,2,,1.9877,417_2',this)" class="betRateNum" id="oid_417_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_417_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_417_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r417_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_417_2">封盘</span></td> 
                <td class="betnum" id="thnum_r418_2" align="center">小</td><td id="td_r418_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('418,,2,,1.9877,418_2',this)" class="betRateNum" id="oid_418_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_418_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_418_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r418_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_418_2">封盘</span></td> 
                <td class="betnum" id="thnum_r419_2" align="center">小</td><td id="td_r419_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('419,,2,,1.9877,419_2',this)" class="betRateNum" id="oid_419_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_419_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_419_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r419_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_419_2">封盘</span></td> 
                <td class="betnum" id="thnum_r420_2" align="center">小</td><td id="td_r420_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('420,,2,,1.9877,420_2',this)" class="betRateNum" id="oid_420_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_420_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_420_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r420_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_420_2">封盘</span></td> 
                </tr>
                <tr class="Dbgco1">
                <td class="betnum" id="thnum_r409_1" align="center">单</td><td id="td_r409_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('409,,1,,1.9877,409_1',this)" class="betRateNum" id="oid_409_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_409_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_409_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r409_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_409_1">封盘</span></td> 
                <td class="betnum" id="thnum_r410_1" align="center">单</td><td id="td_r410_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('410,,1,,1.9877,410_1',this)" class="betRateNum" id="oid_410_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_410_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_410_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r410_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_410_1">封盘</span></td> 
                <td class="betnum" id="thnum_r411_1" align="center">单</td><td id="td_r411_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('411,,1,,1.9877,411_1',this)" class="betRateNum" id="oid_411_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_411_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_411_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r411_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_411_1">封盘</span></td> 
                <td class="betnum" id="thnum_r412_1" align="center">单</td><td id="td_r412_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('412,,1,,1.9877,412_1',this)" class="betRateNum" id="oid_412_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_412_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_412_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r412_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_412_1">封盘</span></td> 
                </tr>
                <tr class="Dbgco1">
                <td class="betnum" id="thnum_r409_2" align="center">双</td><td id="td_r409_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('409,,2,,1.9877,409_2',this)" class="betRateNum" id="oid_409_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_409_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_409_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r409_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_409_2">封盘</span></td> 
                <td class="betnum" id="thnum_r410_2" align="center">双</td><td id="td_r410_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('410,,2,,1.9877,410_2',this)" class="betRateNum" id="oid_410_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_410_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_410_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r410_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_410_2">封盘</span></td> 
                <td class="betnum" id="thnum_r411_2" align="center">双</td><td id="td_r411_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('411,,2,,1.9877,411_2',this)" class="betRateNum" id="oid_411_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_411_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_411_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r411_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_411_2">封盘</span></td> 
                <td class="betnum" id="thnum_r412_2" align="center">双</td><td id="td_r412_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('412,,2,,1.9877,412_2',this)" class="betRateNum" id="oid_412_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_412_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_412_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r412_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_412_2">封盘</span></td> 
                </tr>
                <tr class="Dbgco1">
                <td class="betnum" id="thnum_r433_1" align="center">尾大</td><td id="td_r433_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('433,,1,,1.9877,433_1',this)" class="betRateNum" id="oid_433_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_433_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_433_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r433_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_433_1">封盘</span></td> 
                <td class="betnum" id="thnum_r434_1" align="center">尾大</td><td id="td_r434_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('434,,1,,1.9877,434_1',this)" class="betRateNum" id="oid_434_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_434_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_434_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r434_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_434_1">封盘</span></td> 
                <td class="betnum" id="thnum_r435_1" align="center">尾大</td><td id="td_r435_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('435,,1,,1.9877,435_1',this)" class="betRateNum" id="oid_435_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_435_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_435_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r435_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_435_1">封盘</span></td> 
                <td class="betnum" id="thnum_r436_1" align="center">尾大</td><td id="td_r436_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('436,,1,,1.9877,436_1',this)" class="betRateNum" id="oid_436_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_436_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_436_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r436_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_436_1">封盘</span></td> 
                </tr>
                <tr class="Dbgco1">
                <td class="betnum" id="thnum_r433_2" align="center">尾小</td><td id="td_r433_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('433,,2,,1.9877,433_2',this)" class="betRateNum" id="oid_433_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_433_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_433_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r433_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_433_2">封盘</span></td> 
                <td class="betnum" id="thnum_r434_2" align="center">尾小</td><td id="td_r434_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('434,,2,,1.9877,434_2',this)" class="betRateNum" id="oid_434_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_434_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_434_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r434_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_434_2">封盘</span></td> 
                <td class="betnum" id="thnum_r435_2" align="center">尾小</td><td id="td_r435_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('435,,2,,1.9877,435_2',this)" class="betRateNum" id="oid_435_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_435_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_435_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r435_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_435_2">封盘</span></td> 
                <td class="betnum" id="thnum_r436_2" align="center">尾小</td><td id="td_r436_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('436,,2,,1.9877,436_2',this)" class="betRateNum" id="oid_436_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_436_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_436_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r436_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_436_2">封盘</span></td> 
                </tr>
                <tr class="Dbgco1">
                <td class="betnum" id="thnum_r425_1" align="center">合数单</td><td id="td_r425_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('425,,1,,1.9877,425_1',this)" class="betRateNum" id="oid_425_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_425_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_425_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r425_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_425_1">封盘</span></td> 
                <td class="betnum" id="thnum_r426_1" align="center">合数单</td><td id="td_r426_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('426,,1,,1.9877,426_1',this)" class="betRateNum" id="oid_426_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_426_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_426_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r426_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_426_1">封盘</span></td> 
                <td class="betnum" id="thnum_r427_1" align="center">合数单</td><td id="td_r427_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('427,,1,,1.9877,427_1',this)" class="betRateNum" id="oid_427_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_427_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_427_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r427_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_427_1">封盘</span></td> 
                <td class="betnum" id="thnum_r428_1" align="center">合数单</td><td id="td_r428_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('428,,1,,1.9877,428_1',this)" class="betRateNum" id="oid_428_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_428_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_428_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r428_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_428_1">封盘</span></td> 
                </tr>
                <tr class="Dbgco1">
                <td class="betnum" id="thnum_r425_2" align="center">合数双</td><td id="td_r425_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('425,,2,,1.9877,425_2',this)" class="betRateNum" id="oid_425_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_425_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_425_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r425_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_425_2">封盘</span></td> 
                <td class="betnum" id="thnum_r426_2" align="center">合数双</td><td id="td_r426_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('426,,2,,1.9877,426_2',this)" class="betRateNum" id="oid_426_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_426_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_426_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r426_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_426_2">封盘</span></td> 
                <td class="betnum" id="thnum_r427_2" align="center">合数双</td><td id="td_r427_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('427,,2,,1.9877,427_2',this)" class="betRateNum" id="oid_427_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_427_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_427_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r427_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_427_2">封盘</span></td> 
                <td class="betnum" id="thnum_r428_2" align="center">合数双</td><td id="td_r428_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('428,,2,,1.9877,428_2',this)" class="betRateNum" id="oid_428_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_428_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_428_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r428_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_428_2">封盘</span></td> 
                </tr> 
                <tr class="td_caption_1">
                <td colspan="3" style=" font-weight: bold;" class="title_colspan">第五球</td>
                <td colspan="3" style=" font-weight: bold;" class="title_colspan">第六球</td>
                <td colspan="3" style=" font-weight: bold;" class="title_colspan">第七球</td>
                <td colspan="3" style=" font-weight: bold;" class="title_colspan">第八球</td>
                </tr>

                <tr class="Dbgco1">
                <td class="betnum" id="thnum_r421_1" align="center">大</td><td id="td_r421_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('421,,1,,1.9877,421_1',this)" class="betRateNum" id="oid_421_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_421_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_421_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r421_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_421_1">封盘</span></td> 
                <td class="betnum" id="thnum_r422_1" align="center">大</td><td id="td_r422_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('422,,1,,1.9877,422_1',this)" class="betRateNum" id="oid_422_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_422_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_422_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r422_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_422_1">封盘</span></td> 
                <td class="betnum" id="thnum_r423_1" align="center">大</td><td id="td_r423_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('423,,1,,1.9877,423_1',this)" class="betRateNum" id="oid_423_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_423_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_423_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r423_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_423_1">封盘</span></td> 
                <td class="betnum" id="thnum_r424_1" align="center">大</td><td id="td_r424_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('424,,1,,1.9877,424_1',this)" class="betRateNum" id="oid_424_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_424_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_424_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r424_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_424_1">封盘</span></td> 
                </tr>
                <tr class="Dbgco1">
                <td class="betnum" id="thnum_r421_2" align="center">小</td><td id="td_r421_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('421,,2,,1.9877,421_2',this)" class="betRateNum" id="oid_421_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_421_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_421_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r421_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_421_2">封盘</span></td> 
                <td class="betnum" id="thnum_r422_2" align="center">小</td><td id="td_r422_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('422,,2,,1.9877,422_2',this)" class="betRateNum" id="oid_422_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_422_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_422_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r422_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_422_2">封盘</span></td> 
                <td class="betnum" id="thnum_r423_2" align="center">小</td><td id="td_r423_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('423,,2,,1.9877,423_2',this)" class="betRateNum" id="oid_423_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_423_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_423_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r423_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_423_2">封盘</span></td> 
                <td class="betnum" id="thnum_r424_2" align="center">小</td><td id="td_r424_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('424,,2,,1.9877,424_2',this)" class="betRateNum" id="oid_424_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_424_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_424_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r424_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_424_2">封盘</span></td> 
                </tr>
                <tr class="Dbgco1">
                <td class="betnum" id="thnum_r413_1" align="center">单</td><td id="td_r413_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('413,,1,,1.9877,413_1',this)" class="betRateNum" id="oid_413_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_413_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_413_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r413_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_413_1">封盘</span></td> 
                <td class="betnum" id="thnum_r414_1" align="center">单</td><td id="td_r414_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('414,,1,,1.9877,414_1',this)" class="betRateNum" id="oid_414_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_414_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_414_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r414_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_414_1">封盘</span></td> 
                <td class="betnum" id="thnum_r415_1" align="center">单</td><td id="td_r415_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('415,,1,,1.9877,415_1',this)" class="betRateNum" id="oid_415_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_415_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_415_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r415_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_415_1">封盘</span></td> 
                <td class="betnum" id="thnum_r416_1" align="center">单</td><td id="td_r416_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('416,,1,,1.9877,416_1',this)" class="betRateNum" id="oid_416_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_416_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_416_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r416_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_416_1">封盘</span></td> 
                </tr>
                <tr class="Dbgco1">
                <td class="betnum" id="thnum_r413_2" align="center">双</td><td id="td_r413_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('413,,2,,1.9877,413_2',this)" class="betRateNum" id="oid_413_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_413_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_413_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r413_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_413_2">封盘</span></td> 
                <td class="betnum" id="thnum_r414_2" align="center">双</td><td id="td_r414_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('414,,2,,1.9877,414_2',this)" class="betRateNum" id="oid_414_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_414_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_414_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r414_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_414_2">封盘</span></td> 
                <td class="betnum" id="thnum_r415_2" align="center">双</td><td id="td_r415_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('415,,2,,1.9877,415_2',this)" class="betRateNum" id="oid_415_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_415_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_415_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r415_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_415_2">封盘</span></td> 
                <td class="betnum" id="thnum_r416_2" align="center">双</td><td id="td_r416_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('416,,2,,1.9877,416_2',this)" class="betRateNum" id="oid_416_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_416_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_416_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r416_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_416_2">封盘</span></td> 
                </tr>
                <tr class="Dbgco1">
                <td class="betnum" id="thnum_r437_1" align="center">尾大</td><td id="td_r437_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('437,,1,,1.9877,437_1',this)" class="betRateNum" id="oid_437_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_437_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_437_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r437_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_437_1">封盘</span></td> 
                <td class="betnum" id="thnum_r438_1" align="center">尾大</td><td id="td_r438_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('438,,1,,1.9877,438_1',this)" class="betRateNum" id="oid_438_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_438_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_438_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r438_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_438_1">封盘</span></td> 
                <td class="betnum" id="thnum_r439_1" align="center">尾大</td><td id="td_r439_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('439,,1,,1.9877,439_1',this)" class="betRateNum" id="oid_439_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_439_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_439_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r439_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_439_1">封盘</span></td> 
                <td class="betnum" id="thnum_r440_1" align="center">尾大</td><td id="td_r440_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('440,,1,,1.9877,440_1',this)" class="betRateNum" id="oid_440_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_440_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_440_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r440_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_440_1">封盘</span></td> 
                </tr>
                <tr class="Dbgco1">
                <td class="betnum" id="thnum_r437_2" align="center">尾小</td><td id="td_r437_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('437,,2,,1.9877,437_2',this)" class="betRateNum" id="oid_437_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_437_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_437_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r437_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_437_2">封盘</span></td> 
                <td class="betnum" id="thnum_r438_2" align="center">尾小</td><td id="td_r438_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('438,,2,,1.9877,438_2',this)" class="betRateNum" id="oid_438_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_438_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_438_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r438_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_438_2">封盘</span></td> 
                <td class="betnum" id="thnum_r439_2" align="center">尾小</td><td id="td_r439_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('439,,2,,1.9877,439_2',this)" class="betRateNum" id="oid_439_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_439_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_439_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r439_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_439_2">封盘</span></td> 
                <td class="betnum" id="thnum_r440_2" align="center">尾小</td><td id="td_r440_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('440,,2,,1.9877,440_2',this)" class="betRateNum" id="oid_440_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_440_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_440_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r440_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_440_2">封盘</span></td> 
                </tr>
                <tr class="Dbgco1">
                <td class="betnum" id="thnum_r429_1" align="center">合数单</td><td id="td_r429_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('429,,1,,1.9877,429_1',this)" class="betRateNum" id="oid_429_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_429_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_429_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r429_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_429_1">封盘</span></td> 
                <td class="betnum" id="thnum_r430_1" align="center">合数单</td><td id="td_r430_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('430,,1,,1.9877,430_1',this)" class="betRateNum" id="oid_430_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_430_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_430_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r430_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_430_1">封盘</span></td> 
                <td class="betnum" id="thnum_r431_1" align="center">合数单</td><td id="td_r431_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('431,,1,,1.9877,431_1',this)" class="betRateNum" id="oid_431_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_431_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_431_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r431_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_431_1">封盘</span></td> 
                <td class="betnum" id="thnum_r432_1" align="center">合数单</td><td id="td_r432_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('432,,1,,1.9877,432_1',this)" class="betRateNum" id="oid_432_1" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_432_1" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_432_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r432_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_432_1">封盘</span></td> 
                 </tr>
                <tr class="Dbgco1">
                <td class="betnum" id="thnum_r429_2" align="center">合数双</td><td id="td_r429_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('429,,2,,1.9877,429_2',this)" class="betRateNum" id="oid_429_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_429_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_429_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r429_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_429_2">封盘</span></td> 
                <td class="betnum" id="thnum_r430_2" align="center">合数双</td><td id="td_r430_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('430,,2,,1.9877,430_2',this)" class="betRateNum" id="oid_430_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_430_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_430_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r430_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_430_2">封盘</span></td> 
                <td class="betnum" id="thnum_r431_2" align="center">合数双</td><td id="td_r431_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('431,,2,,1.9877,431_2',this)" class="betRateNum" id="oid_431_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_431_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_431_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r431_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_431_2">封盘</span></td> 
                <td class="betnum" id="thnum_r432_2" align="center">合数双</td><td id="td_r432_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('432,,2,,1.9877,432_2',this)" class="betRateNum" id="oid_432_2" style=""><span class="betRateNum">1.9877</span></a><input type="hidden" name="odds_432_2" value="1.9877"><span style="width: 41px; color: red; font-weight: bold; display: none;" id="hengan_432_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r432_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';" style=""><span style="width: 60px; display: none;" id="fenpan_432_2">封盘</span></td> 
                </tr> 
                </tbody>

            </table> 



            <div class="btnDivArea" id="btnDivArea11">  
              <input id="chk_qcstake" type="checkbox">
              <span class="kuaijieSpan" @click="QCheckShow_fu()">快捷下注</span>
              <span id="sp_qcstake" class="yibanSpan" v-if="normalPay">金额：
                <input id="txtqcstake" type="text" class="wid60">
                <span @click="QCExplain()" class="shuomiSpan">说明</span>
              </span>
              <input type="reset" value="重 填" class="button_bg1" onclick="SetOrderOddsString();"> 
              <input id="btn_order2" type="button" value="下 注" class="button_bg1">
            </div> 



          <div class="btnDivArea" id="btnDivArea2" style="display:none;">  
            <span style="color:red">下注中,请等待。。。</span>
          </div> 

          <div id="lotteryno">

            <table class="Ball_List" border="0" cellspacing="1" cellpadding="0" width="700" id="BallList">
              <tbody>
                <tr>
                  <td id="sRB_1" class="td_caption_1 td_caption_2"><a>总和大小</a></td>
                  <td id="sRB_2" class="td_caption_1"><a>总和单双</a></td>
                  <td id="sRB_3" class="td_caption_1"><a>龙虎和</a></td>    
                </tr>
              <tr class="Ball_tr_H">
                <td colspan="3">
                  <table class="Ball_List" border="0" cellspacing="0" cellpadding="0" width="698">
                    <tbody>
                    <tr class="Ball_tr_H" valign="top" id="lotteryno_tr1" style="display: block; height: auto; min-height: 25px;">
                      <td width="28"></td>
                      <td width="28" class="Jut_caption_1">小</td>
                      <td width="28">大</td>
                      <td width="28" class="Jut_caption_1">小<br>小</td>
                      <td width="28">大<br>大</td>
                      <td width="28" class="Jut_caption_1">小<br>小</td>
                      <td width="28">大<br>大</td>
                      <td width="28" class="Jut_caption_1">小<br>小</td>
                      <td width="28">大</td>
                      <td width="28" class="Jut_caption_1">小</td>
                      <td width="28">大<br>大</td>
                      <td width="28" class="Jut_caption_1">小<br>小</td>
                      <td width="28">大<br>大<br>大</td>
                      <td width="28" class="Jut_caption_1">小<br>小<br>小</td>
                      <td width="28">大<br>大<br>大</td>
                      <td width="28" class="Jut_caption_1">小<br>小<br>小</td>
                      <td width="28">大</td>
                      <td width="28" class="Jut_caption_1">小</td>
                      <td width="28">大<br>大</td>
                      <td width="28" class="Jut_caption_1">小<br>小<br>小</td>
                      <td width="28">大</td>
                      <td width="28" class="Jut_caption_1">小</td>
                      <td width="28">大<br>大</td>
                      <td width="28" class="Jut_caption_1">小<br>小<br>小<br>小<br>小<br>小</td>
                      <td width="28" style="min-height: 25px;">大<br>大<br>大</td>
                    </tr>

                    <tr class="Ball_tr_H" valign="top" id="lotteryno_tr2" style=" display:none;height:auto;min-height:25px;">
                      <td width="28">双</td>
                      <td width="28" class="Jut_caption_1">单</td>
                      <td width="28">双</td>
                      <td width="28" class="Jut_caption_1">单</td>
                      <td width="28">双<br>双<br>双<br>双</td>
                      <td width="28" class="Jut_caption_1">单<br>单</td>
                      <td width="28">双</td>
                      <td width="28" class="Jut_caption_1">单</td>
                      <td width="28">双</td>
                      <td width="28" class="Jut_caption_1">单</td>
                      <td width="28">双<br>双<br>双</td>
                      <td width="28" class="Jut_caption_1">单</td>
                      <td width="28">双<br>双</td>
                      <td width="28" class="Jut_caption_1">单<br>单<br>单</td>
                      <td width="28">双<br>双</td>
                      <td width="28" class="Jut_caption_1">单<br>单</td>
                      <td width="28">双<br>双</td>
                      <td width="28" class="Jut_caption_1">单</td>
                      <td width="28">双<br>双<br>双<br>双<br>双</td>
                      <td width="28" class="Jut_caption_1">单</td>
                      <td width="28">双<br>双</td>
                      <td width="28" class="Jut_caption_1">单</td>
                      <td width="28">双<br>双<br>双<br>双</td>
                      <td width="28" class="Jut_caption_1">单</td>
                      <td width="28" style="min-height: 25px;">双</td>
                    </tr>
                    <tr class="Ball_tr_H" valign="top" id="lotteryno_tr3" style=" display:none;height:auto;min-height:25px;">
                      <td width="28">龙</td>
                      <td width="28" class="Jut_caption_1">虎<br>虎</td>
                      <td width="28">和</td>
                      <td width="28" class="Jut_caption_1">龙</td>
                      <td width="28">虎</td>
                      <td width="28" class="Jut_caption_1">龙<br>龙<br>龙</td>
                      <td width="28">虎</td>
                      <td width="28" class="Jut_caption_1">龙</td>
                      <td width="28">虎</td>
                      <td width="28" class="Jut_caption_1">和</td>
                      <td width="28">虎<br>虎<br>虎<br>虎<br>虎</td>
                      <td width="28" class="Jut_caption_1">龙<br>龙</td>
                      <td width="28">和</td>
                      <td width="28" class="Jut_caption_1">虎<br>虎<br>虎<br>虎<br>虎<br>虎<br>虎</td>
                      <td width="28">龙</td>
                      <td width="28" class="Jut_caption_1">虎</td>
                      <td width="28">龙</td>
                      <td width="28" class="Jut_caption_1">虎<br>虎</td>
                      <td width="28">龙<br>龙</td>
                      <td width="28" class="Jut_caption_1">虎</td>
                      <td width="28">龙</td>
                      <td width="28" class="Jut_caption_1">虎<br>虎<br>虎<br>虎</td>
                      <td width="28">和</td>
                      <td width="28" class="Jut_caption_1">龙</td>
                      <td width="28" style="min-height: 25px;">虎</td>
                    </tr>   
                    </tbody>
                  </table>
                </td>
              </tr>
              </tbody>
            </table>

       
            </div>

          </div>

  </div>
</td>

    <td valign="top">
      <div id="maintwssides" style="display: block;">
        <table class="Ball_List" border="0" cellspacing="1" cellpadding="0" width="150" id="tbtwssides">
          <tbody id="TwoSides">
            <tr>
              <td class="td_caption_1" colspan="2" style="width:150px;">两面长龙排行</td>
            </tr> 
            <tr class="t_list_tr_0">
              <td class="f_left TDb_B">第五球 - 双</td>
              <td class="TDb_R">&nbsp;5 期&nbsp;</td>
            </tr> 
            <tr class="t_list_tr_0">
              <td class="f_left TDb_B">第二球 - 大</td>
              <td class="TDb_R">&nbsp;3 期&nbsp;</td>
            </tr> 
            <tr class="t_list_tr_0">
              <td class="f_left TDb_B">第四球 - 双</td>
              <td class="TDb_R">&nbsp;3 期&nbsp;</td>
            </tr> 
            <tr class="t_list_tr_0">
              <td class="f_left TDb_B">总和 - 大</td>
              <td class="TDb_R">&nbsp;3 期&nbsp;</td>
            </tr> 
            <tr class="t_list_tr_0">
              <td class="f_left TDb_B">第一球 - 小</td>
              <td class="TDb_R">&nbsp;2 期&nbsp;</td>
            </tr> 
            <tr class="t_list_tr_0">
              <td class="f_left TDb_B">第三球 - 大</td>
              <td class="TDb_R">&nbsp;2 期&nbsp;</td>
            </tr> 
            <tr class="t_list_tr_0">
              <td class="f_left TDb_B">第四球 - 大</td>
              <td class="TDb_R">&nbsp;2 期&nbsp;</td>
            </tr> 
            <tr class="t_list_tr_0">
              <td class="f_left TDb_B">第一球 - 单</td>
              <td class="TDb_R">&nbsp;2 期&nbsp;</td>
            </tr> 
            <tr class="t_list_tr_0">
              <td class="f_left TDb_B">第二球 - 单</td>
              <td class="TDb_R">&nbsp;2 期&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </td>

</tr>
</tbody>
</table>


    
    <!-- <div class="right">
      <div>
        <div>
          <div id="submenu">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-subnav"
              mode="horizontal"
              @select="handleSelect"
              text-color="#ebcb80"
              active-text-color="#f6e9c7">
              <el-menu-item v-for="(item,index) in bocaiCategoryList" :key="index" :index="item.name" @click="getOddsCategory(item,index)" v-if="index*1 < 11">{{item.name}}</el-menu-item>
              <el-submenu v-if="bocaiCategoryList.length*1 > 11" key="submenu" index="submenu">
                <template slot="title">{{submenu}}</template>
                <el-menu-item v-for="(item,index) in bocaiCategoryList" :key="index" :index="item.name" @click="getOddsCategory(item,index)" v-if="index*1 > 10">{{item.name}}</el-menu-item>
              </el-submenu>
            </el-menu>
          </div>
          
          <clock-time></clock-time>
        </div>
        <div class="bet_box">
          <div class="orders oodsBodyDiv">
            <div class="order-info">
              <bet-quick :orderDataList="orderDataList" :canOrder="canOrder" :bocaiCategory="bocaiCategory" v-on:childByReset="childByReset" v-on:childByChangePay="childByChangePay"></bet-quick>
            </div>

            <template v-if="showOdds == '两面盘'">

                <div>
                  <div class="order-table">
                      <table>
                        <tr>
                          <th colspan="8">{{longhuhe_lmp.name}}</th>
                        </tr>
                          <tr>
                            <template v-for="(item,index) in longhuhe_lmp.list" v-if="index*1 < 4">
                              <td class="tdLeft ordersTdOver" width="8%" :class="'longhuhe_lmp'+item.oddsId" @click="orderTd(longhuhe_lmp,item,'longhuhe_lmp')" @mouseenter="overShow(item,'longhuhe_lmp')" @mouseleave="outHide(item,'longhuhe_lmp')">{{item.oddsName}}</td>
                              <td class="tdRight" :class="'longhuhe_lmp'+item.oddsId" @click="orderTd(longhuhe_lmp,item,'longhuhe_lmp')" @mouseenter="overShow(item,'longhuhe_lmp')" @mouseleave="outHide(item,'longhuhe_lmp')">
                                <ul>
                                  <li ><span class="odds-font">{{item.odds}}</span></li>
                                  <li v-if="normalPay"><input type="text" v-model="item.normalMoney" v-on:input ="inputFunc(longhuhe_lmp,item,'longhuhe_lmp',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/"></li>
                                </ul>
                              </td>
                            </template>
                          </tr>
                          <tr>
                            <template v-for="(item,index) in longhuhe_lmp.list" v-if="index*1 > 3">
                              <td class="tdLeft" width="8%" :class="'longhuhe_lmp'+item.oddsId" @click="orderTd(longhuhe_lmp,item,'longhuhe_lmp')" @mouseenter="overShow(item,'longhuhe_lmp')" @mouseleave="outHide(item,'longhuhe_lmp')">{{item.oddsName}}</td>
                              <td class="tdRight" :class="'longhuhe_lmp'+item.oddsId" @click="orderTd(longhuhe_lmp,item,'longhuhe_lmp')" @mouseenter="overShow(item,'longhuhe_lmp')" @mouseleave="outHide(item,'longhuhe_lmp')"> 
                                <ul>
                                  <li>
                                    <span class="odds-font">{{item.odds}}</span>
                                  </li>
                                  <li v-if="normalPay"><input type="text" v-model="item.normalMoney" v-on:input ="inputFunc(longhuhe_lmp,item,'longhuhe_lmp',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/"></li>
                                </ul>
                              </td>
                            </template>
                          </tr>
                      </table>
                  </div>
                </div>

              <div class="qiu15_body">

                <div class="eball" v-for="(itemPa,index) in yiwuqiu_lmp">
                    <div class="order-table">
                      <table>
                        <tr>
                          <th colspan="2">{{itemPa.name}}</th>
                        </tr>
                        <tr v-for="(item,index) in itemPa.list">
                          <td class="tdLeft" :class="'yiwuqiu_lmp'+item.oddsId" @click="orderTd(itemPa,item,'yiwuqiu_lmp')" @mouseenter="overShow(item,'yiwuqiu_lmp')" @mouseleave="outHide(item,'yiwuqiu_lmp')">{{item.oddsName}}</td>
                          <td class="tdRight" :class="'yiwuqiu_lmp'+item.oddsId" @click="orderTd(itemPa,item,'yiwuqiu_lmp')" @mouseenter="overShow(item,'yiwuqiu_lmp')" @mouseleave="outHide(item,'yiwuqiu_lmp')">
                            <ul>
                              <li>
                                <span class="odds-font">{{item.odds}}</span>
                              </li>
                              <li v-if="normalPay"><input type="text" v-model="item.normalMoney" v-on:input ="inputFunc(itemPa,item,'yiwuqiu_lmp',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/"></li>
                            </ul>
                          </td>
                        </tr>
                      </table>
                    </div>
                </div>

              </div>

              <div>

                <div class="order-table" v-for="(itemPa,index) in qianhousan_lmp">
                    <table>
                      <tr>
                        <th colspan="10">{{itemPa.name}}</th>
                      </tr>
                      <tr>
                        <template v-for="(item,index) in itemPa.list">
                          <td class="tdLeft" :class="'qianhousan_lmp'+item.oddsId" @click="orderTd(itemPa,item,'qianhousan_lmp')" @mouseenter="overShow(item,'qianhousan_lmp')" @mouseleave="outHide(item,'qianhousan_lmp')">{{item.oddsName}}</td>
                          <td class="tdRight" :class="'qianhousan_lmp'+item.oddsId" @click="orderTd(itemPa,item,'qianhousan_lmp')" @mouseenter="overShow(item,'qianhousan_lmp')" @mouseleave="outHide(item,'qianhousan_lmp')">
                            <ul>
                              <li>
                                <span class="odds-font">{{item.odds}}</span>
                              </li>
                              <li v-if="normalPay"><input type="text" v-model="item.normalMoney" v-on:input ="inputFunc(itemPa,item,'qianhousan_lmp',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/"></li>
                            </ul>
                          </td>
                        </template>
                      </tr>
                    </table>
                </div>
              </div>

            </template>

            <template v-if="showOdds == '1~5'">
              <div>
                <div class="qiu15_body">
                  <div class="nball" v-for="(item_yiwu,index_yiwu) in oddsList">
                    <div class="order-table">
                      <table>
                        <tr><th colspan="2">{{item_yiwu.name}}</th></tr>
                        <tr v-for="(item,index) in item_yiwu.list">
                            <td v-if="isNaN(item.oddsName*1)" class="oddsNtd tdLeft" :class="'item_yiwu'+item.oddsId" @click="orderTd(item_yiwu,item,'item_yiwu')" @mouseenter="overShow(item,'item_yiwu')" @mouseleave="outHide(item,'item_yiwu')">{{item.oddsName}}</td>
                            <td v-else class="oddsNtd tdLeft" :class="'item_yiwu'+item.oddsId" @click="orderTd(item_yiwu,item,'item_yiwu')" @mouseenter="overShow(item,'item_yiwu')" @mouseleave="outHide(item,'item_yiwu')"><div class="ball-icon" >{{item.oddsName}}</div></td> 
                            <td class="oddsUltd" :class="'item_yiwu'+item.oddsId" @click="orderTd(item_yiwu,item,'item_yiwu')" @mouseenter="overShow(item,'item_yiwu')" @mouseleave="outHide(item,'item_yiwu')">
                              <ul>
                                <li><span class="odds-font" >{{item.odds}}</span></li>
                                <li v-if="normalPay"><input type="text" v-model="item.normalMoney" v-on:input ="inputFunc(item_yiwu,item,'item_yiwu',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/"></li>
                              </ul>
                            </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div> 
            </template>

            <template v-if="['二字','一字','三字','二定位','三定位','组选三','组选六','跨度'].findIndex((n) => n == showOdds)>-1">
              <div class="order-table yiziType">
                <table class="title">
                  <tr>
                    <th v-for="(item,index) in oddsList" class="pointerDom yiziThAct" :class="['shishiZi'+index,index == '0' ? 'active' : '']" @click="shishiZiGet(item,index)">{{item.name}}</th> 
                  </tr>
                </table> 

                <table  class="kuaixuanTable" v-if="['二字','二定位'].findIndex((n) => n == this.showOdds)>-1">
                  <tr >
                    <td colspan="11">快选</td>
                  </tr> 
                  <tr>
                    <td style="background-color: rgb(228, 231, 241);">头</td> 
                    <td v-for="(item,index) in kuaixuanList" :class="'kuaixuantou'+item" @click="kuaixuanOdd(item,'tou')">{{item}}</td>
                  </tr> 
                  <tr>
                    <td style="background-color: rgb(228, 231, 241);">尾</td> 
                    <td v-for="(item,index) in kuaixuanList" :class="'kuaixuanwei'+item" @click="kuaixuanOdd(item,'wei')">{{item}}</td>
                  </tr> 
                </table>

                <table>
                  <tr>
                    <th>号码</th> 
                    <th>赔率</th>
                    <th>号码</th> 
                    <th>赔率</th>
                    <th>号码</th> 
                    <th>赔率</th>
                    <th>号码</th> 
                    <th>赔率</th>
                    <th>号码</th> 
                    <th>赔率</th>
                  </tr>     
                  <tr v-for="(itemPa,index) in shishiZiDatasList">
                    <template v-for="(item,index) in itemPa">
                      <td class="pointerDom" :class="'item_yizi'+item.oddsId" @click="orderTdYiZi(item,'item_yizi')" @mouseenter="overShow(item,'item_yizi')" @mouseleave="outHide(item,'item_yizi')">{{item.oddsName}}</td> 
                      <td class="pointerDom" :class="'item_yizi'+item.oddsId" @click="orderTdYiZi(item,'item_yizi')" @mouseenter="overShow(item,'item_yizi')" @mouseleave="outHide(item,'item_yizi')">
                        <ul>
                          <li><span class="odds-font">{{item.odds}}</span></li>
                          <li v-if="normalPay"><input type="text" v-model="item.normalMoney" v-on:input ="inputFuncYiZi(item,'item_yizi',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/"></li>
                        </ul>
                      </td> 
                    </template>
                  </tr> 
                </table>

              </div>
            </template>

            <template v-if="['和数'].findIndex((n) => n == showOdds)>-1">
              <div>
                <div class="order-table">
                  <table>
                    <tr>
                      <th colspan="5">{{showOdds}}</th>
                    </tr> 
                    <tr v-for="(itemPa,index) in oddsList">
                      <td width="20%"><b>{{itemPa.name}}</b></td>
                      <template v-for="(item,index) in itemPa.list">
                        <td class="pointerDom" :class="'item_heshu'+item.oddsId" @click="orderTd(itemPa,item,'item_heshu')" @mouseenter="overShow(item,'item_heshu')" @mouseleave="outHide(item,'item_heshu')">{{item.oddsName}}</td> 
                        <td class="pointerDom" :class="'item_heshu'+item.oddsId" @click="orderTd(itemPa,item,'item_heshu')" @mouseenter="overShow(item,'item_heshu')" @mouseleave="outHide(item,'item_heshu')">
                          <ul>
                            <li><span class="odds-font">{{item.odds}}</span></li>
                            <li v-if="normalPay"><input type="text" v-model="item.normalMoney" v-on:input ="inputFunc(itemPa,item,'item_heshu',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/"></li>
                          </ul>
                        </td>
                      </template>
                    </tr>
                  </table>
                </div>
              </div>
            </template>

            <div class="order-info">
              <bet-quick :orderDataList="orderDataList" :canOrder="canOrder" :bocaiCategory="bocaiCategory" v-on:childByReset="childByReset" v-on:childByChangePay="childByChangePay"></bet-quick>
            </div>

            <footer-Bocai :curBocaiTypeId="curBocaiTypeId"></footer-Bocai>

          </div>


        </div>
      </div>
    </div>
    <p style="clear: both;"></p> -->
  </div>
</template>

<script>
import BetQuick from '@/components/apps/bocai/components/betQuick';
import ClockTime from '@/components/apps/bocai/components/clockTime';
import FooterBocai from '@/components/apps/bocai/components/footerBocai';

export default {
  components: {
    ClockTime,
    BetQuick,
    FooterBocai
  },
  data () {
    return {
      curBocaiTypeId: '1',
      curactiveIndex: '重庆时时彩',
      bocaiCategoryList: [],
      oddsList: [],
      showOdds: '',
      submenu: '更多',
      isOpenOdds: true,
      longhuhe_lmp: {},
      yiwuqiu_lmp: [],
      qianhousan_lmp: [],
      orderDataList: [],
      normalPay: true,
      bocaiCategory: {},
      kuaixuanList: ['0','1','2','3','4','5','6','7','8','9'],
      shishiZiDatas: {},
      shishiZiDatasList: [],
      kuaixuanTouList:[],
      kuaixuanWeiList:[],
      tempList:[],
      selectedZiTd:[],
      canOrder: true
    }
  },
  computed: {
  },
  created() {
    //this.getOdds(this.curBocaiTypeId);
  },
  mounted(){
      bus.$on('isOpenOdds', (data) => {
        this.isOpenOdds = data;
      });
      bus.$on('setNewOddsList', (data) => {
        this.normalPay = false;
        this.oddsList = data;
        this.shuaiXuanDatas(data);
      });
      bus.$on('getOddsInfo', (data) => {
        this.getOdds(data);
      });
      bus.$on('getresetOddsCategory', (data) => {
        this.resetOddsCategory(data);
      });
  },
  methods: {
    QCheckShow_fu() {

    },
    IntoMtran() {

    },
    QCheckShow() {

    },
    QCExplain() {

    },



    kuaixuanOdd(item,type) {
      this.qingkong();
      let list = this.shishiZiDatas.list;

      //console.log('item',item,'type',type);

      if($('.kuaixuan'+type+item).hasClass('active')){
        $('.kuaixuan'+type+item).removeClass('active');

        if(type == 'tou') {
          _.remove(this.kuaixuanTouList, function(n) {
            let m = {type,item};
            return JSON.stringify(n) == JSON.stringify(m);
          });
        } else {
          _.remove(this.kuaixuanWeiList, function(n) {
            let m = {type,item};
            return JSON.stringify(n) == JSON.stringify(m);
          });
        }

      } else {
        $('.kuaixuan'+type+item).addClass('active');
        if(type == 'tou') {
          this.kuaixuanTouList.push({type,item});
        } else {
          this.kuaixuanWeiList.push({type,item});
        }
      }

      let temlist = [];
      let temlistSub = [];

      //console.log('this.kuaixuanTouList',this.kuaixuanTouList);
      //console.log('this.kuaixuanWeiList',this.kuaixuanWeiList);

      if(this.kuaixuanTouList.length != 0 && this.kuaixuanWeiList.length != 0) {

        console.log('item111',item,'type',type);
        for(let n in list) {
          for(let m in this.kuaixuanTouList) {
            if(list[n].oddsName.charAt(0) == this.kuaixuanTouList[m].item) {
              temlist.push(list[n]);
            } 
          }
        }

        for(let n in temlist) {
            for(let m in this.kuaixuanWeiList) {
              if(temlist[n].oddsName.charAt(list[n].oddsName.length*1 - 1) == this.kuaixuanWeiList[m].item) {
                temlistSub.push(temlist[n]);
              } 
            }
          }
          
      } 
      if(this.kuaixuanTouList.length != 0 && this.kuaixuanWeiList.length == 0) {

        //console.log('item222',item,'type',type);

        for(let n in list) {
          for(let m in this.kuaixuanTouList) {
            if(list[n].oddsName.charAt(0) == this.kuaixuanTouList[m].item) {
              temlistSub.push(list[n]);
            } 
          }
        }
      } 
      if(this.kuaixuanTouList.length == 0 && this.kuaixuanWeiList.length != 0) {

        //console.log('item333',item,'type',type);

        for(let n in list) {
            for(let m in this.kuaixuanWeiList) {
              if(list[n].oddsName.charAt(list[n].oddsName.length*1 - 1) == this.kuaixuanWeiList[m].item) {
                temlistSub.push(list[n]);
              } 
            }
          }
      } 

      this.selectedZiTd = temlistSub;

      //console.log('temlistSub',temlistSub);

      let oddsObj = this.shishiZiDatas;

      if(!this.normalPay) {
        for(let n in this.selectedZiTd ) {
          this.orderTd(oddsObj,this.selectedZiTd[n],'item_yizi');
        }
      } else {
        for(let n in this.shishiZiDatasList){
          for(let m in this.shishiZiDatasList[n]) {
            this.inputFuncYiZi(this.shishiZiDatasList[n][m],'item_yizi',this.shishiZiDatasList[n][m].normalMoney);
          }
        }
        for(let n in this.selectedZiTd ) {
          $('.item_yizi'+this.selectedZiTd[n].oddsId).addClass('selected');
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
      this.kuaixuanTouList = [];
      this.kuaixuanWeiList = [];
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
    childByChangePay(data) {
      if(this.normalPay != data) {
        this.orderDataList = [];
        $('.bet_box .orders td').removeClass('selected');
        this.allQingkong();
      }
      this.normalPay = data;
    },
    childByReset(data) {
      this.resetOddsCategory(this.bocaiCategory);
      this.allQingkong();
    },
    outHide(item,ids) {
      $('.'+ids+item.oddsId).removeClass('overTd');
    },
    overShow(item,ids) {
      $('.'+ids+item.oddsId).addClass('overTd');
    },
    inputFuncYiZi(item,ids,pay) {
      let oddsObj = this.shishiZiDatas;

      this.inputFunc(oddsObj,item,ids,pay);
    },
    inputFunc(oddsObj,item,ids,pay) {

      let reg = /^[\u2E80-\u9FFF]+$/;
      if(reg.test(this.moneyOrder)){
        this.$alertMessage('请确认注单!', '温馨提示');
      } else {
        if(this.normalPay) {
          if(pay == '') {
            $('.'+ids+item.oddsId).removeClass('selected');
            _.remove(this.orderDataList, function(n) {
                    return n.bocaiOddName == item.oddsName;
                  });
          } else {

            $('.'+ids+item.oddsId).addClass('selected');
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
                      orderNormal: this.normalPay,   //是快捷，还是一般投注
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
                    orderNormal: this.normalPay,   //是快捷，还是一般投注
                    bocaiOdds: item.odds, //1.90//赔率
                    dewaterId: item.dewaterId
                  };

                  this.orderDataList.push(obj);
                }
          }
        }
      }

      
      
    },
    orderTdYiZi(item,ids) {
      let oddsObj = this.shishiZiDatas;

      this.orderTd(oddsObj,item,ids);
    },
    orderTd(oddsObj,item,ids) {

      if(this.isOpenOdds) {

        if(!this.normalPay) {
          if($('.'+ids+item.oddsId).hasClass('selected')){

              $('.'+ids+item.oddsId).removeClass('selected');
              _.remove(this.orderDataList, function(n) {
                return n.bocaiOddName == item.oddsName;
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
              orderNormal: this.normalPay,   //是快捷，还是一般投注
              bocaiOdds: item.odds, //1.90//赔率
              dewaterId: item.dewaterId
            };

            this.orderDataList.push(obj);
          }
        }
        
      }
      
    },
    handleSelect(key, keyPath) {
        //console.log(key, keyPath);
    },
    async resetOddsCategory(result) {
      let that = this;

      if(result.code===200){
        that.oddsList = result.oddsList;

        that.orderDataList = [];
        that.normalPay = false;
        bus.$emit('getnormalPay', false); 

        that.shuaiXuanDatas(result.oddsList);
      }
    },
    async getnotice() {
      let res = await this.$get(`${window.url}/api/notice`);

          if(res.code===200){

            bus.$emit('getmessage', res.data);
          } else {
          }

    },
    async getOddsCategory(item,index) {

      bus.$emit('getbocaiCategoryId', item.id);

      //this.getnotice();

      // if(index*1 > 9) {
      //   this.submenu = item.name;
      // } else {
      //   this.submenu = '更多';
      // }

      this.resetOddsCategory(item);

    },
    async getOdds(result) {
      let that = this;
      
      if(result.code===200){
        that.oddsList = result.oddsList;
        that.showOdds = result.bocaiCategoryList[0].name;
        that.bocaiCategory = result.bocaiCategoryList[0];
        that.shuaiXuanDatas(result.oddsList);
      }

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
