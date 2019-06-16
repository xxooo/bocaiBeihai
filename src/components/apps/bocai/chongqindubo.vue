<template>
  <div id="chongqindubo" class="content-main duboBodyClass">

    <table class="table000">
      <tbody>
        <tr>
          <td class="vertical-t">
            <div class="margin-r10 bet_box">
              <div id="round_content">

                <clock-time></clock-time>

                <bet-quick :orderDataList="orderDataList" :canOrder="canOrder" v-on:childByReset="childByReset"></bet-quick>

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
                                  <div :class="'CQNo_'+index" style=" height:27px; width:27px;"></div>
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

          <bet-quick :orderDataList="orderDataList" :canOrder="canOrder" v-on:childByReset="childByReset"></bet-quick>

          <footer-Bocai :curBocaiTypeId="curBocaiTypeId" :showOdds="showOdds"></footer-Bocai>

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
              <bet-quick :orderDataList="orderDataList" :canOrder="canOrder" :bocaiCategory="bocaiCategory" v-on:childByReset="childByReset"></bet-quick>
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
              <bet-quick :orderDataList="orderDataList" :canOrder="canOrder" :bocaiCategory="bocaiCategory" v-on:childByReset="childByReset"></bet-quick>
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
import { mapGetters } from 'vuex';

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
      showOdds: '',
      submenu: '更多',
      isOpenOdds: true,
      longhuhe_lmp: {},
      yiwuqiu_lmp: [],
      yizhiwu_lmp: {},
      qianhousan_lmp: [],
      orderDataList: [],
      bocaiCategory: {},
      kuaixuanList: ['0','1','2','3','4','5','6','7','8','9'],
      shishiZiDatas: {},
      shishiZiDatasList: [],
      kuaixuanTouList:[],
      kuaixuanWeiList:[],
      tempList:[],
      selectedZiTd:[],
      canOrder: true,


      noOpenPrizeList: [],
      openPrizeList: [],


      kuaijiePay: false,
    }
  },
  computed: {
    ...mapGetters({
        bocaiInfoData: 'getbocaiInfoData',
        bocaiName: 'getbocaiName',
        userInfo: 'getuserInfo',
        bocaiTypeId: 'getbocaiTypeId',
        curPeriods: 'getcurPeriods',
        oddsList: 'getoddsList'
    }),
  },
  created() {
    this.getchanglong();
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
      //第一次登录要显示的菠菜
      bus.$on('getOddsInfo', (data) => {
        this.showOdds = data.bocaiCategoryList[0].name;
        this.shuaiXuanDatas(this.oddsList);
      });
      //切换二级菜单更新菠菜,以及切快捷更新菠菜
      bus.$on('getresetOddsCategory', (data) => {
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
    async getchanglong() {

        this.openPrizeList = [];
        this.noOpenPrizeList = [];

          let that = this;
          await that.$get(`${window.url}/api/changlong?bocaiTypeId=`+this.curBocaiTypeId+'&showNum=10').then((res) => {
            that.$handelResponse(res, (result) => {
              if(result.code===200){

                for(let n in result.openPrizeMap) {
                  let obj = {};
                  obj.content = n;
                  obj.num = result.openPrizeMap[n];
                  this.openPrizeList.push(obj);
                }

                for(let n in result.noOpenPrizeMap) {
                  let obj = {};
                  obj.content = n;
                  obj.num = result.noOpenPrizeMap[n];
                  this.noOpenPrizeList.push(obj);
                }

                //console.log('this.openPrizeMap',this.openPrizeMap);
                //更新用户信息
                // bus.$emit('getcUserInfo', ''); 
                // that.orderDatas.list = [];
                // that.$success('下注成功！');
                // that.reset();
              }
            })
          });
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
