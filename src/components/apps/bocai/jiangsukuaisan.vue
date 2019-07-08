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

                <table v-if="sanjundaxiao.list" class="DTable kuaijie" cellpadding="0" cellspacing="0" border="0" width="700" style=" margin-top:2px;"> 
                  <tbody>
                    <tr>
                      <td colspan="15">
                        <table style="text-align: center; font-size: 12px; margin-top: 0px;border-left:1px solid #e9a884;border-right:1px solid #e9a884;border-top:1px solid #e9a884;" class="DTable" cellpadding="0" cellspacing="0" width="700">
                          <tbody>
                            <tr class="DtrTitle">
                              <td class="td_caption_1">{{sanjundaxiao.name}}【赔率说明：一同骰＝(赔率-1)×1、二同骰＝(赔率-1)×2、三同骰＝(赔率-1)×3】、大小</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                     <td colspan="15">
                      <table style="text-align:center; font-size:12px; margin-top:0px;" class="DTable" cellpadding="0" cellspacing="1" width="700">
                        <tbody>

                          <tr class="Dbgco1">

                            <template v-for="(item,index) in sanjundaxiao.list.slice(0,3)">
                                <td class="betnum" align="center">
                                  <div :class="'JSNo_'+item.oddsName" style=" height:27px; width:27px;"></div>
                                </td>
                                <td class="oddsTdMin" :class="['sanjundaxiao'+item.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(sanjundaxiao,item,'sanjundaxiao')">
                                  <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(sanjundaxiao,item,'sanjundaxiao') : kuaijieInto(sanjundaxiao,item,'sanjundaxiao')" class="betRateNum" :class="'sanjundaxiao'+item.oddsId+'a'"> 
                                    <span class="betRateNum">{{item.odds}}</span>
                                  </a>
                                  <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                                </td>

                                <td v-if="!kuaijiePay">
                                  <input v-if="isOpenOdds" v-model="item.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(sanjundaxiao,item,'sanjundaxiao',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                                  <span v-else style="width:60px;">封盘</span>
                                </td>
                              </template>

                              <td class="betnum">{{sanjundaxiao.list[6].oddsName}}</td>
                              <td class="oddsTdMin" :class="['sanjundaxiao'+sanjundaxiao.list[6].oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(sanjundaxiao,sanjundaxiao.list[6],'sanjundaxiao')">
                                <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(sanjundaxiao,sanjundaxiao.list[6],'sanjundaxiao') : kuaijieInto(sanjundaxiao,sanjundaxiao.list[6],'sanjundaxiao')" class="betRateNum" :class="'sanjundaxiao'+sanjundaxiao.list[6].oddsId+'a'"> 
                                  <span class="betRateNum">{{sanjundaxiao.list[6].odds}}</span>
                                </a>
                                <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                              </td>

                              <td v-if="!kuaijiePay">
                                <input v-if="isOpenOdds" v-model="sanjundaxiao.list[6].normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(sanjundaxiao,sanjundaxiao.list[6],'sanjundaxiao',sanjundaxiao.list[6].normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                                <span v-else style="width:60px;">封盘</span>
                              </td>

                            </tr> 

                            <tr class="Dbgco1">

                            <template v-for="(item,index) in sanjundaxiao.list.slice(3,6)">
                                <td class="betnum" align="center">
                                  <div :class="'JSNo_'+item.oddsName" style=" height:27px; width:27px;"></div>
                                </td>
                                <td class="oddsTdMin" :class="['sanjundaxiao'+item.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(sanjundaxiao,item,'sanjundaxiao')">
                                  <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(sanjundaxiao,item,'sanjundaxiao') : kuaijieInto(sanjundaxiao,item,'sanjundaxiao')" class="betRateNum" :class="'sanjundaxiao'+item.oddsId+'a'"> 
                                    <span class="betRateNum">{{item.odds}}</span>
                                  </a>
                                  <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                                </td>

                                <td v-if="!kuaijiePay">
                                  <input v-if="isOpenOdds" v-model="item.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(sanjundaxiao,item,'sanjundaxiao',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                                  <span v-else style="width:60px;">封盘</span>
                                </td>
                              </template>

                              <td class="betnum">{{sanjundaxiao.list[7].oddsName}}</td>
                              <td class="oddsTdMin" :class="['sanjundaxiao'+sanjundaxiao.list[7].oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(sanjundaxiao,sanjundaxiao.list[7],'sanjundaxiao')">
                                <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(sanjundaxiao,sanjundaxiao.list[7],'sanjundaxiao') : kuaijieInto(sanjundaxiao,sanjundaxiao.list[7],'sanjundaxiao')" class="betRateNum" :class="'sanjundaxiao'+sanjundaxiao.list[7].oddsId+'a'"> 
                                  <span class="betRateNum">{{sanjundaxiao.list[7].odds}}</span>
                                </a>
                                <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                              </td>

                              <td v-if="!kuaijiePay">
                                <input v-if="isOpenOdds" v-model="sanjundaxiao.list[7].normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(sanjundaxiao,sanjundaxiao.list[7],'sanjundaxiao',sanjundaxiao.list[7].normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                                <span v-else style="width:60px;">封盘</span>
                              </td>

                            </tr> 

                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>


                    <table  v-if="weishaiquanshai.list" class="DTable kuaijie" cellpadding="0" cellspacing="0" border="0" width="700" style=" margin-top:2px;">
                     <tbody>
                      <tr>
                       <td colspan="15">
                         <table style="text-align:center; font-size:12px; margin-top:0px;" class="DTable" cellpadding="0" cellspacing="1" width="700">
                          <thead>
                            <tr class="DtrTitle">
                              <td colspan="9" class="td_caption_1">{{weishaiquanshai.name}}</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="Dbgco1" >

                                <template v-for="(item,index) in weishaiquanshai.list.slice(0,3)">
                                    <td class="betnum" align="left" style="width:83px;min-width:83px;max-width:83px;">
                                      <div :class="'JSNo_'+item.oddsName.slice(0,1)" style=" height:27px; width:27px;float: left;"></div>
                                      <div :class="'JSNo_'+item.oddsName.slice(2,3)" style=" height:27px; width:27px;float: left;"></div>
                                      <div :class="'JSNo_'+item.oddsName.slice(4,5)" style=" height:27px; width:27px;float: left;"></div>
                                    </td>
                                    <td class="oddsTdMin" :class="['weishaiquanshai'+item.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(weishaiquanshai,item,'weishaiquanshai')">
                                      <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(weishaiquanshai,item,'weishaiquanshai') : kuaijieInto(weishaiquanshai,item,'weishaiquanshai')" class="betRateNum" :class="'weishaiquanshai'+item.oddsId+'a'"> 
                                        <span class="betRateNum">{{item.odds}}</span>
                                      </a>
                                      <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                                    </td>

                                    <td v-if="!kuaijiePay">
                                      <input v-if="isOpenOdds" v-model="item.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(weishaiquanshai,item,'weishaiquanshai',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                                      <span v-else style="width:60px;">封盘</span>
                                    </td>
                                  </template>
                            </tr>

                            <tr class="Dbgco1">

                                <template v-for="(item,index) in weishaiquanshai.list.slice(3,6)">
                                    <td class="betnum" align="left" style="width:83px;min-width:83px;max-width:83px;">
                                      <div :class="'JSNo_'+item.oddsName.slice(0,1)" style=" height:27px; width:27px;float: left;"></div>
                                      <div :class="'JSNo_'+item.oddsName.slice(2,3)" style=" height:27px; width:27px;float: left;"></div>
                                      <div :class="'JSNo_'+item.oddsName.slice(4,5)" style=" height:27px; width:27px;float: left;"></div>
                                    </td>
                                    <td class="oddsTdMin" :class="['weishaiquanshai'+item.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(weishaiquanshai,item,'weishaiquanshai')">
                                      <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(weishaiquanshai,item,'weishaiquanshai') : kuaijieInto(weishaiquanshai,item,'weishaiquanshai')" class="betRateNum" :class="'weishaiquanshai'+item.oddsId+'a'"> 
                                        <span class="betRateNum">{{item.odds}}</span>
                                      </a>
                                      <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                                    </td>

                                    <td v-if="!kuaijiePay">
                                      <input v-if="isOpenOdds" v-model="item.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(weishaiquanshai,item,'weishaiquanshai',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                                      <span v-else style="width:60px;">封盘</span>
                                    </td>
                                  </template>
                            </tr>

                            <tr class="Dbgco1">

                              <td class="betnum">{{weishaiquanshai.list[6].oddsName}}</td>
                              <td class="oddsTdMin" :class="['weishaiquanshai'+weishaiquanshai.list[6].oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(weishaiquanshai,weishaiquanshai.list[6],'weishaiquanshai')">
                                <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(weishaiquanshai,weishaiquanshai.list[6],'weishaiquanshai') : kuaijieInto(weishaiquanshai,weishaiquanshai.list[6],'weishaiquanshai')" class="betRateNum" :class="'weishaiquanshai'+weishaiquanshai.list[6].oddsId+'a'"> 
                                  <span class="betRateNum">{{weishaiquanshai.list[6].odds}}</span>
                                </a>
                                <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                              </td>

                              <td v-if="!kuaijiePay">
                                <input v-if="isOpenOdds" v-model="weishaiquanshai.list[6].normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(weishaiquanshai,weishaiquanshai.list[6],'weishaiquanshai',weishaiquanshai.list[6].normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                                <span v-else style="width:60px;">封盘</span>
                              </td>

                              <td class="betnum"></td>
                              <td class="oddsTdMin"></td>
                              <td v-if="!kuaijiePay"></td>
                              <td class="betnum"></td>
                              <td class="oddsTdMin"></td>
                              <td v-if="!kuaijiePay"></td>
                            </tr>

                          </tbody>
                        </table>

                        </td>
                        </tr>
                      </tbody>
                    </table>

                    <table  v-if="dianshu.list" class="DTable kuaijie" cellpadding="0" cellspacing="0" border="0" width="700" style=" margin-top:2px;">
                     <tbody>
                      <tr>
                       <td colspan="12">
                         <table style="text-align:center; font-size:12px; margin-top:0px;" class="DTable" cellpadding="0" cellspacing="1" width="700">
                          <thead>
                            <tr class="DtrTitle">
                              <td colspan="12" class="td_caption_1">{{dianshu.name}}</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="Dbgco1" >

                              <template v-for="(item,index) in dianshu.list.slice(0,4)">
                                <td class="betnum">{{item.oddsName}}</td>
                                <td class="oddsTdMin" :class="['dianshu'+item.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(dianshu,item,'dianshu')">
                                  <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(dianshu,item,'dianshu') : kuaijieInto(dianshu,item,'dianshu')" class="betRateNum" :class="'dianshu'+item.oddsId+'a'"> 
                                    <span class="betRateNum">{{item.odds}}</span>
                                  </a>
                                  <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                                </td>

                                <td v-if="!kuaijiePay">
                                  <input v-if="isOpenOdds" v-model="item.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(dianshu,item,'dianshu',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                                  <span v-else style="width:60px;">封盘</span>
                                </td>
                              </template>
                            </tr>
                            <tr class="Dbgco1" >

                              <template v-for="(item,index) in dianshu.list.slice(4,8)">
                                <td class="betnum">{{item.oddsName}}</td>
                                <td class="oddsTdMin" :class="['dianshu'+item.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(dianshu,item,'dianshu')">
                                  <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(dianshu,item,'dianshu') : kuaijieInto(dianshu,item,'dianshu')" class="betRateNum" :class="'dianshu'+item.oddsId+'a'"> 
                                    <span class="betRateNum">{{item.odds}}</span>
                                  </a>
                                  <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                                </td>

                                <td v-if="!kuaijiePay">
                                  <input v-if="isOpenOdds" v-model="item.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(dianshu,item,'dianshu',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                                  <span v-else style="width:60px;">封盘</span>
                                </td>
                              </template>
                            </tr>
                            <tr class="Dbgco1" >

                              <template v-for="(item,index) in dianshu.list.slice(8,12)">
                                <td class="betnum">{{item.oddsName}}</td>
                                <td class="oddsTdMin" :class="['dianshu'+item.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(dianshu,item,'dianshu')">
                                  <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(dianshu,item,'dianshu') : kuaijieInto(dianshu,item,'dianshu')" class="betRateNum" :class="'dianshu'+item.oddsId+'a'"> 
                                    <span class="betRateNum">{{item.odds}}</span>
                                  </a>
                                  <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                                </td>

                                <td v-if="!kuaijiePay">
                                  <input v-if="isOpenOdds" v-model="item.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(dianshu,item,'dianshu',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                                  <span v-else style="width:60px;">封盘</span>
                                </td>
                              </template>
                            </tr>

                            <tr class="Dbgco1">

                              <template v-for="(item,index) in dianshu.list.slice(12,14)">
                                <td class="betnum">{{item.oddsName}}</td>
                                <td class="oddsTdMin" :class="['dianshu'+item.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(dianshu,item,'dianshu')">
                                  <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(dianshu,item,'dianshu') : kuaijieInto(dianshu,item,'dianshu')" class="betRateNum" :class="'dianshu'+item.oddsId+'a'"> 
                                    <span class="betRateNum">{{item.odds}}</span>
                                  </a>
                                  <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                                </td>

                                <td v-if="!kuaijiePay">
                                  <input v-if="isOpenOdds" v-model="item.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(dianshu,item,'dianshu',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                                  <span v-else style="width:60px;">封盘</span>
                                </td>
                              </template>

                              <td class="betnum"></td>
                              <td class="oddsTdMin"></td>
                              <td v-if="!kuaijiePay"></td>
                              <td class="betnum"></td>
                              <td class="oddsTdMin"></td>
                              <td v-if="!kuaijiePay"></td>
                            </tr>


                          </tbody>
                        </table>

                      </td>
                    </tr>
                  </tbody>
                </table>


                <table  v-if="changpai.list" class="DTable kuaijie" cellpadding="0" cellspacing="0" border="0" width="700" style=" margin-top:2px;">
                 <tbody>
                  <tr>
                   <td colspan="15">
                     <table style="text-align:center; font-size:12px; margin-top:0px;" class="DTable" cellpadding="0" cellspacing="1" width="700">
                      <thead>
                        <tr class="DtrTitle">
                          <td colspan="9" class="td_caption_1">{{changpai.name}}</td>
                        </tr>
                      </thead>
                      <tbody>

                        <tr class="Dbgco1" v-for="(itemPa,indexPa) in changpai.list">

                            <template v-for="(item,index) in itemPa" v-if="item">

                                <td class="betnum" align="left" style="width:55px;min-width:55px;max-width:55px;">
                                  <div v-if="item.oddsName" :class="'JSNo_'+item.oddsName.slice(0,1)" style=" height:27px; width:27px;float: left;"></div>
                                  <div v-if="item.oddsName":class="'JSNo_'+item.oddsName.slice(2,3)" style=" height:27px; width:27px;float: left;"></div>
                                </td>

                                <td class="oddsTdMin" :class="['changpai'+item.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(changpai,item,'changpai')">
                                  <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(changpai,item,'changpai') : kuaijieInto(changpai,item,'changpai')" class="betRateNum" :class="'changpai'+item.oddsId+'a'"> 
                                    <span class="betRateNum">{{item.odds}}</span>
                                  </a>
                                  <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                                </td>

                                <td v-if="!kuaijiePay">
                                  <input v-if="isOpenOdds" v-model="item.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(changpai,item,'changpai',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                                  <span v-else style="width:60px;">封盘</span>
                                </td>
                              </template>
                        </tr>

                      </tbody>
                    </table>

                    </td>
                    </tr>
                  </tbody>
                </table>

                <table  v-if="duanpai.list" class="DTable kuaijie" cellpadding="0" cellspacing="0" border="0" width="700" style=" margin-top:2px;">
                 <tbody>
                  <tr>
                   <td colspan="15">
                     <table style="text-align:center; font-size:12px; margin-top:0px;" class="DTable" cellpadding="0" cellspacing="1" width="700">
                      <thead>
                        <tr class="DtrTitle">
                          <td colspan="9" class="td_caption_1">{{duanpai.name}}</td>
                        </tr>
                      </thead>
                      <tbody>

                        <tr class="Dbgco1" v-for="(itemPa,indexPa) in duanpai.list">

                            <template v-for="(item,index) in itemPa">

                                <td class="betnum" align="left" style="width:55px;min-width:55px;max-width:55px;">
                                  <div v-if="item.oddsName" :class="'JSNo_'+item.oddsName.slice(0,1)" style=" height:27px; width:27px;float: left;"></div>
                                  <div v-if="item.oddsName" :class="'JSNo_'+item.oddsName.slice(2,3)" style=" height:27px; width:27px;float: left;"></div>
                                </td>

                                <td class="oddsTdMin" :class="['duanpai'+item.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(duanpai,item,'duanpai')">
                                  <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(duanpai,item,'duanpai') : kuaijieInto(duanpai,item,'duanpai')" class="betRateNum" :class="'duanpai'+item.oddsId+'a'"> 
                                    <span class="betRateNum">{{item.odds}}</span>
                                  </a>
                                  <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                                </td>

                                <td v-if="!kuaijiePay">
                                  <input v-if="isOpenOdds" v-model="item.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(duanpai,item,'duanpai',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                                  <span v-else style="width:60px;">封盘</span>
                                </td>
                              </template>
                        </tr>

                      </tbody>
                    </table>

                    </td>
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

      sanjundaxiao: {},
      weishaiquanshai: {},
      dianshu: {},
      changpai: {},
      duanpai: {},
      changpaiList: [],
      duanpaiList: []
    }
  },
  computed: {
    ...mapGetters({
        bocaiInfoData: 'getbocaiInfoData',
        oddsList: 'getoddsList',
        bocaiTypeId: 'getbocaiTypeId'
    })
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

      for(let m in dataList) {
        if(dataList[m].name == '三军、大小') {
            this.sanjundaxiao = dataList[m];
        }
        if(dataList[m].name == '围骰、全骰') {
            this.weishaiquanshai = dataList[m];
        }
        if(dataList[m].name == '点数') {
            this.dianshu = dataList[m];
        }
        if(dataList[m].name == '长牌') {

            this.changpai = dataList[m];
            this.changpai.list = _.chunk(this.changpai.list,3); 
        }
        if(dataList[m].name == '短牌') {
            this.duanpai = dataList[m];
            this.duanpai.list = _.chunk(this.duanpai.list,3); 
        }
      }

      console.log('sanjundaxiao',this.sanjundaxiao);



    }




  }
}

</script>

<style scoped>


</style>
