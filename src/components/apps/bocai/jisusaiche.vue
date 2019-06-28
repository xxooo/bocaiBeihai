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
                  <tbody>

                    <tr class="td_caption_1">
                      <td :colspan="kuaijiePay?2:3" style=" font-weight: bold;" class="title_colspan">{{liangmianpan_lmp[1].name}}</td>
                      <td :colspan="kuaijiePay?2:3" style=" font-weight: bold;" class="title_colspan">{{liangmianpan_lmp[2].name}}</td>
                      <td :colspan="kuaijiePay?2:3" style=" font-weight: bold;" class="title_colspan">{{liangmianpan_lmp[3].name}}</td>
                      <td :colspan="kuaijiePay?2:3" style=" font-weight: bold;" class="title_colspan">{{liangmianpan_lmp[4].name}}</td>
                    </tr>

                    <tr class="Dbgco1" v-for="(itemPa,indexPa) in yidaosiqiu">
                      <template v-for="(item,index) in itemPa.slice(0,4)">

                        <td class="betnum">{{item.odd.oddsName}}</td>
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

                      <template v-for="(item,index) in itemPa.slice(1,5)">

                        <td class="betnum">{{item.odd.oddsName}}</td>
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

                    <tr class="Dbgco1">

                      <td class="betnum">{{yidaosiqiu[4][4].odd.oddsName}}</td>
                      <td class="oddsTdMin" :class="['yidaosiqiu'+yidaosiqiu[4][4].odd.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(yidaosiqiu[4][4],yidaosiqiu[4][4].odd,'yidaosiqiu')">
                        <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(yidaosiqiu[4][4],yidaosiqiu[4][4].odd,'yidaosiqiu') : kuaijieInto(yidaosiqiu[4][4],yidaosiqiu[4][4].odd,'yidaosiqiu')" class="betRateNum" :class="'yidaosiqiu'+yidaosiqiu[4][4].odd.oddsId+'a'"> 
                          <span class="betRateNum">{{yidaosiqiu[4][4].odd.odds}}</span>
                        </a>
                        <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                      </td>

                      <td v-if="!kuaijiePay">
                        <input v-if="isOpenOdds" v-model="yidaosiqiu[4][4].odd.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(yidaosiqiu[4][4],yidaosiqiu[4][4].odd,'yidaosiqiu',yidaosiqiu[4][4].odd.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                        <span v-else style="width:60px;">封盘</span>
                      </td>

                      <td align="center" class="td_caption_1 title_colspan" colspan="3" style=" font-weight: bold;">{{liangmianpan_lmp[9].name}}</td>
                      <td align="center" class="td_caption_1 title_colspan" colspan="3" style=" font-weight: bold;">{{liangmianpan_lmp[10].name}}</td>
                      <td colspan="3" class="td_caption_1 title_colspan" style=" font-weight: bold;" align="center">{{liangmianpan_lmp[0].name}}</td>
                    </tr>

                    <tr class="Dbgco1">

                      <td class="betnum">{{yidaosiqiu[5][4].odd.oddsName}}</td>
                      <td class="oddsTdMin" :class="['yidaosiqiu'+yidaosiqiu[5][4].odd.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(yidaosiqiu[5][4],yidaosiqiu[5][4].odd,'yidaosiqiu')">
                        <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(yidaosiqiu[5][4],yidaosiqiu[5][4].odd,'yidaosiqiu') : kuaijieInto(yidaosiqiu[5][4],yidaosiqiu[5][4].odd,'yidaosiqiu')" class="betRateNum" :class="'yidaosiqiu'+yidaosiqiu[5][4].odd.oddsId+'a'"> 
                          <span class="betRateNum">{{yidaosiqiu[5][4].odd.odds}}</span>
                        </a>
                        <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                      </td>
                      <td v-if="!kuaijiePay">
                        <input v-if="isOpenOdds" v-model="yidaosiqiu[5][4].odd.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(yidaosiqiu[5][4],yidaosiqiu[5][4].odd,'yidaosiqiu',yidaosiqiu[5][4].odd.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                        <span v-else style="width:60px;">封盘</span>
                      </td>


                      <td class="betnum">{{sidaobaqiu[0][5].odd.oddsName}}</td>
                      <td class="oddsTdMin" :class="['sidaobaqiu'+sidaobaqiu[0][5].odd.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(sidaobaqiu[0][5],sidaobaqiu[0][5].odd,'sidaobaqiu')">
                        <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(sidaobaqiu[0][5],sidaobaqiu[0][5].odd,'sidaobaqiu') : kuaijieInto(sidaobaqiu[0][5],sidaobaqiu[0][5].odd,'sidaobaqiu')" class="betRateNum" :class="'sidaobaqiu'+sidaobaqiu[0][5].odd.oddsId+'a'"> 
                          <span class="betRateNum">{{sidaobaqiu[0][5].odd.odds}}</span>
                        </a>
                        <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                      </td>
                      <td v-if="!kuaijiePay">
                        <input v-if="isOpenOdds" v-model="sidaobaqiu[0][5].odd.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(sidaobaqiu[0][5],sidaobaqiu[0][5].odd,'sidaobaqiu',sidaobaqiu[0][5].odd.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                        <span v-else style="width:60px;">封盘</span>
                      </td>

                      <td class="betnum">{{sidaobaqiu[0][6].odd.oddsName}}</td>
                      <td class="oddsTdMin" :class="['sidaobaqiu'+sidaobaqiu[0][6].odd.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(sidaobaqiu[0][6],sidaobaqiu[0][6].odd,'sidaobaqiu')">
                        <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(sidaobaqiu[0][6],sidaobaqiu[0][6].odd,'sidaobaqiu') : kuaijieInto(sidaobaqiu[0][6],sidaobaqiu[0][6].odd,'sidaobaqiu')" class="betRateNum" :class="'sidaobaqiu'+sidaobaqiu[0][6].odd.oddsId+'a'"> 
                          <span class="betRateNum">{{sidaobaqiu[0][6].odd.odds}}</span>
                        </a>
                        <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                      </td>
                      <td v-if="!kuaijiePay">
                        <input v-if="isOpenOdds" v-model="sidaobaqiu[0][6].odd.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(sidaobaqiu[0][6],sidaobaqiu[0][6].odd,'sidaobaqiu',sidaobaqiu[0][6].odd.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                        <span v-else style="width:60px;">封盘</span>
                      </td>

                      <td class="betnum">{{sidaobaqiu[0][0].odd.oddsName}}</td>
                      <td class="oddsTdMin" :class="['sidaobaqiu'+sidaobaqiu[0][0].odd.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(sidaobaqiu[0][0],sidaobaqiu[0][0].odd,'sidaobaqiu')">
                        <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(sidaobaqiu[0][0],sidaobaqiu[0][0].odd,'sidaobaqiu') : kuaijieInto(sidaobaqiu[0][0],sidaobaqiu[0][0].odd,'sidaobaqiu')" class="betRateNum" :class="'sidaobaqiu'+sidaobaqiu[0][0].odd.oddsId+'a'"> 
                          <span class="betRateNum">{{sidaobaqiu[0][0].odd.odds}}</span>
                        </a>
                        <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                      </td>
                      <td v-if="!kuaijiePay">
                        <input v-if="isOpenOdds" v-model="sidaobaqiu[0][0].odd.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(sidaobaqiu[0][0],sidaobaqiu[0][0].odd,'sidaobaqiu',sidaobaqiu[0][0].odd.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                        <span v-else style="width:60px;">封盘</span>
                      </td>

                    </tr>


                    <tr class="Dbgco1">

                      <td class="betnum"></td>
                      <td class="oddsTdMin">
                      </td>
                      <td v-if="!kuaijiePay">
                      </td>

                      <td class="betnum">{{sidaobaqiu[1][5].odd.oddsName}}</td>
                      <td class="oddsTdMin" :class="['sidaobaqiu'+sidaobaqiu[1][5].odd.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(sidaobaqiu[1][5],sidaobaqiu[1][5].odd,'sidaobaqiu')">
                        <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(sidaobaqiu[1][5],sidaobaqiu[1][5].odd,'sidaobaqiu') : kuaijieInto(sidaobaqiu[1][5],sidaobaqiu[1][5].odd,'sidaobaqiu')" class="betRateNum" :class="'sidaobaqiu'+sidaobaqiu[1][5].odd.oddsId+'a'"> 
                          <span class="betRateNum">{{sidaobaqiu[1][5].odd.odds}}</span>
                        </a>
                        <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                      </td>
                      <td v-if="!kuaijiePay">
                        <input v-if="isOpenOdds" v-model="sidaobaqiu[1][5].odd.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(sidaobaqiu[1][5],sidaobaqiu[1][5].odd,'sidaobaqiu',sidaobaqiu[1][5].odd.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                        <span v-else style="width:60px;">封盘</span>
                      </td>

                      <td class="betnum">{{sidaobaqiu[1][6].odd.oddsName}}</td>
                      <td class="oddsTdMin" :class="['sidaobaqiu'+sidaobaqiu[1][6].odd.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(sidaobaqiu[1][6],sidaobaqiu[1][6].odd,'sidaobaqiu')">
                        <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(sidaobaqiu[1][6],sidaobaqiu[1][6].odd,'sidaobaqiu') : kuaijieInto(sidaobaqiu[1][6],sidaobaqiu[1][6].odd,'sidaobaqiu')" class="betRateNum" :class="'sidaobaqiu'+sidaobaqiu[1][6].odd.oddsId+'a'"> 
                          <span class="betRateNum">{{sidaobaqiu[1][6].odd.odds}}</span>
                        </a>
                        <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                      </td>
                      <td v-if="!kuaijiePay">
                        <input v-if="isOpenOdds" v-model="sidaobaqiu[1][6].odd.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(sidaobaqiu[1][6],sidaobaqiu[1][6].odd,'sidaobaqiu',sidaobaqiu[1][6].odd.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                        <span v-else style="width:60px;">封盘</span>
                      </td>

                      <td class="betnum">{{sidaobaqiu[1][0].odd.oddsName}}</td>
                      <td class="oddsTdMin" :class="['sidaobaqiu'+sidaobaqiu[1][0].odd.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(sidaobaqiu[1][0],sidaobaqiu[1][0].odd,'sidaobaqiu')">
                        <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(sidaobaqiu[1][0],sidaobaqiu[1][0].odd,'sidaobaqiu') : kuaijieInto(sidaobaqiu[1][0],sidaobaqiu[1][0].odd,'sidaobaqiu')" class="betRateNum" :class="'sidaobaqiu'+sidaobaqiu[1][0].odd.oddsId+'a'"> 
                          <span class="betRateNum">{{sidaobaqiu[1][0].odd.odds}}</span>
                        </a>
                        <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                      </td>
                      <td v-if="!kuaijiePay">
                        <input v-if="isOpenOdds" v-model="sidaobaqiu[1][0].odd.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(sidaobaqiu[1][0],sidaobaqiu[1][0].odd,'sidaobaqiu',sidaobaqiu[1][0].odd.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                        <span v-else style="width:60px;">封盘</span>
                      </td>

                    </tr>

                    <tr class="Dbgco1">

                      <td class="betnum"></td>
                      <td class="oddsTdMin">
                      </td>
                      <td v-if="!kuaijiePay">
                      </td>

                      <td class="betnum">{{sidaobaqiu[2][5].odd.oddsName}}</td>
                      <td class="oddsTdMin" :class="['sidaobaqiu'+sidaobaqiu[2][5].odd.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(sidaobaqiu[2][5],sidaobaqiu[2][5].odd,'sidaobaqiu')">
                        <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(sidaobaqiu[2][5],sidaobaqiu[2][5].odd,'sidaobaqiu') : kuaijieInto(sidaobaqiu[2][5],sidaobaqiu[2][5].odd,'sidaobaqiu')" class="betRateNum" :class="'sidaobaqiu'+sidaobaqiu[2][5].odd.oddsId+'a'"> 
                          <span class="betRateNum">{{sidaobaqiu[2][5].odd.odds}}</span>
                        </a>
                        <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                      </td>
                      <td v-if="!kuaijiePay">
                        <input v-if="isOpenOdds" v-model="sidaobaqiu[2][5].odd.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(sidaobaqiu[2][5],sidaobaqiu[2][5].odd,'sidaobaqiu',sidaobaqiu[2][5].odd.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                        <span v-else style="width:60px;">封盘</span>
                      </td>

                      <td class="betnum">{{sidaobaqiu[2][6].odd.oddsName}}</td>
                      <td class="oddsTdMin" :class="['sidaobaqiu'+sidaobaqiu[2][6].odd.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(sidaobaqiu[2][6],sidaobaqiu[2][6].odd,'sidaobaqiu')">
                        <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(sidaobaqiu[2][6],sidaobaqiu[2][6].odd,'sidaobaqiu') : kuaijieInto(sidaobaqiu[2][6],sidaobaqiu[2][6].odd,'sidaobaqiu')" class="betRateNum" :class="'sidaobaqiu'+sidaobaqiu[2][6].odd.oddsId+'a'"> 
                          <span class="betRateNum">{{sidaobaqiu[2][6].odd.odds}}</span>
                        </a>
                        <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                      </td>
                      <td v-if="!kuaijiePay">
                        <input v-if="isOpenOdds" v-model="sidaobaqiu[2][6].odd.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(sidaobaqiu[2][6],sidaobaqiu[2][6].odd,'sidaobaqiu',sidaobaqiu[2][6].odd.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                        <span v-else style="width:60px;">封盘</span>
                      </td>

                      <td class="betnum">{{sidaobaqiu[2][0].odd.oddsName}}</td>
                      <td class="oddsTdMin" :class="['sidaobaqiu'+sidaobaqiu[2][0].odd.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(sidaobaqiu[2][0],sidaobaqiu[2][0].odd,'sidaobaqiu')">
                        <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(sidaobaqiu[2][0],sidaobaqiu[2][0].odd,'sidaobaqiu') : kuaijieInto(sidaobaqiu[2][0],sidaobaqiu[2][0].odd,'sidaobaqiu')" class="betRateNum" :class="'sidaobaqiu'+sidaobaqiu[2][0].odd.oddsId+'a'"> 
                          <span class="betRateNum">{{sidaobaqiu[2][0].odd.odds}}</span>
                        </a>
                        <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                      </td>
                      <td v-if="!kuaijiePay">
                        <input v-if="isOpenOdds" v-model="sidaobaqiu[2][0].odd.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(sidaobaqiu[2][0],sidaobaqiu[2][0].odd,'sidaobaqiu',sidaobaqiu[2][0].odd.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                        <span v-else style="width:60px;">封盘</span>
                      </td>

                    </tr>

                    <tr class="Dbgco1">

                      <td class="betnum"></td>
                      <td class="oddsTdMin">
                      </td>
                      <td v-if="!kuaijiePay">
                      </td>

                      <td class="betnum">{{sidaobaqiu[3][5].odd.oddsName}}</td>
                      <td class="oddsTdMin" :class="['sidaobaqiu'+sidaobaqiu[3][5].odd.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(sidaobaqiu[3][5],sidaobaqiu[3][5].odd,'sidaobaqiu')">
                        <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(sidaobaqiu[3][5],sidaobaqiu[3][5].odd,'sidaobaqiu') : kuaijieInto(sidaobaqiu[3][5],sidaobaqiu[3][5].odd,'sidaobaqiu')" class="betRateNum" :class="'sidaobaqiu'+sidaobaqiu[3][5].odd.oddsId+'a'"> 
                          <span class="betRateNum">{{sidaobaqiu[3][5].odd.odds}}</span>
                        </a>
                        <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                      </td>
                      <td v-if="!kuaijiePay">
                        <input v-if="isOpenOdds" v-model="sidaobaqiu[3][5].odd.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(sidaobaqiu[3][5],sidaobaqiu[3][5].odd,'sidaobaqiu',sidaobaqiu[3][5].odd.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                        <span v-else style="width:60px;">封盘</span>
                      </td>

                      <td class="betnum">{{sidaobaqiu[3][6].odd.oddsName}}</td>
                      <td class="oddsTdMin" :class="['sidaobaqiu'+sidaobaqiu[3][6].odd.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(sidaobaqiu[3][6],sidaobaqiu[3][6].odd,'sidaobaqiu')">
                        <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(sidaobaqiu[3][6],sidaobaqiu[3][6].odd,'sidaobaqiu') : kuaijieInto(sidaobaqiu[3][6],sidaobaqiu[3][6].odd,'sidaobaqiu')" class="betRateNum" :class="'sidaobaqiu'+sidaobaqiu[3][6].odd.oddsId+'a'"> 
                          <span class="betRateNum">{{sidaobaqiu[3][6].odd.odds}}</span>
                        </a>
                        <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                      </td>
                      <td v-if="!kuaijiePay">
                        <input v-if="isOpenOdds" v-model="sidaobaqiu[3][6].odd.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(sidaobaqiu[3][6],sidaobaqiu[3][6].odd,'sidaobaqiu',sidaobaqiu[3][6].odd.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                        <span v-else style="width:60px;">封盘</span>
                      </td>

                      <td class="betnum">{{sidaobaqiu[3][0].odd.oddsName}}</td>
                      <td class="oddsTdMin" :class="['sidaobaqiu'+sidaobaqiu[3][0].odd.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(sidaobaqiu[3][0],sidaobaqiu[3][0].odd,'sidaobaqiu')">
                        <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(sidaobaqiu[3][0],sidaobaqiu[3][0].odd,'sidaobaqiu') : kuaijieInto(sidaobaqiu[3][0],sidaobaqiu[3][0].odd,'sidaobaqiu')" class="betRateNum" :class="'sidaobaqiu'+sidaobaqiu[3][0].odd.oddsId+'a'"> 
                          <span class="betRateNum">{{sidaobaqiu[3][0].odd.odds}}</span>
                        </a>
                        <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                      </td>
                      <td v-if="!kuaijiePay">
                        <input v-if="isOpenOdds" v-model="sidaobaqiu[3][0].odd.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(sidaobaqiu[3][0],sidaobaqiu[3][0].odd,'sidaobaqiu',sidaobaqiu[3][0].odd.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                        <span v-else style="width:60px;">封盘</span>
                      </td>

                    </tr>

                  </tbody>
                </table>

                <table v-if="showOdds == '1~10名'" class="DTable_t kuaijie" cellpadding="0" cellspacing="0" width="700">
                  <tbody>
                    <tr class="DtrTitle">
                      <td v-for="(item_yishi,index_yishi) in oddsList.slice(0,5)" class="td_caption_1">{{item_yishi.name}}</td>
                    </tr>
                    <tr>
                      <template v-for="(itemPa,index_yishi) in oddsList.slice(0,5)">
                        <td style="border:0px;">
                          <table style="text-align:center; font-size:12px; margin-top:0px; border:0px;" class="DTable_t" cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                              <tr class="td_caption_1">
                                <td>号</td>
                                <td>赔率</td>
                                <td class="title_jine">金额</td>
                              </tr>
                            </tbody>
                            <tbody>
                              <tr class="Dbgco1" v-for="(item,index) in itemPa.list" v-if="['1','2','3','4','5','6','7','8','9','10'].findIndex((n) => n==item.oddsName)>-1">

                                <td class="betnum1" align="center">
                                  <div :class="'BJNo_'+item.oddsName" style=" height:27px; width:27px;"></div>
                                </td>
                                <td class="oddsTdMin" :class="['item_yishi'+item.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(itemPa,item,'item_yishi')">
                                  <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(itemPa,item,'item_yishi') : kuaijieInto(itemPa,item,'item_yishi')" class="betRateNum" :class="'item_yishi'+item.oddsId+'a'">
                                    <span class="betRateNum">{{item.odds}}</span>
                                  </a>
                                  <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                                </td>
                                <td v-if="!kuaijiePay">
                                  <input v-if="isOpenOdds" v-model="item.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(itemPa,item,'item_yishi',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                                  <span v-else style="width:60px;">封盘</span>
                                </td>

                              </tr>
                            </tbody>
                          </table>
                        </td>

                      </template>

                    </tr>

                    <tr class="DtrTitle">
                      <td v-for="(item_yishi,index_yishi) in oddsList.slice(5)" class="td_caption_1">{{item_yishi.name}}</td>
                    </tr>
                    <tr>
                      <template v-for="(itemPa,index_yishi) in oddsList.slice(5)">
                        <td style="border:0px;">
                          <table style="text-align:center; font-size:12px; margin-top:0px; border:0px;" class="DTable_t" cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                              <tr class="td_caption_1">
                                <td>号</td>
                                <td>赔率</td>
                                <td class="title_jine">金额</td>
                              </tr>
                            </tbody>
                            <tbody>
                              <tr class="Dbgco1" v-for="(item,index) in itemPa.list" v-if="['1','2','3','4','5','6','7','8','9','10'].findIndex((n) => n==item.oddsName)>-1">

                                <td class="betnum1" align="center">
                                  <div :class="'BJNo_'+item.oddsName" style=" height:27px; width:27px;"></div>
                                </td>
                                <td class="oddsTdMin" :class="['item_yishi'+item.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(itemPa,item,'item_yishi')">
                                  <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(itemPa,item,'item_yishi') : kuaijieInto(itemPa,item,'item_yishi')" class="betRateNum" :class="'item_yishi'+item.oddsId+'a'">
                                    <span class="betRateNum">{{item.odds}}</span>
                                  </a>
                                  <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                                </td>
                                <td v-if="!kuaijiePay">
                                  <input v-if="isOpenOdds" v-model="item.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(itemPa,item,'item_yishi',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                                  <span v-else style="width:60px;">封盘</span>
                                </td>

                              </tr>
                            </tbody>
                          </table>
                        </td>

                      </template>

                    </tr>

                  </tbody>
                </table>


                <table v-if="showOdds == '冠亚组合'" class="DTable kuaijie" cellpadding="0" cellspacing="0" border="0" width="700" style=" margin-top:2px;">
                  <tbody>
                    <tr>
                      <td>
                        <table style="text-align:center; font-size:12px; " class="DTable" cellpadding="0" cellspacing="1" width="700">
                          <thead>
                            <tr class="DtrTitle">
                              <td colspan="12" class="td_caption_1" style=" font-weight: bold;">
                                <span>{{guanyaZonghe.name}}</span>
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="Dbgco1">
                              <template v-for="(item,index) in guanyaZonghe.list.slice(0,4)">

                                <td class="betnum" :class="'guanyaZonghe'+item.oddsId">{{item.oddsName}}</td>
                                <td class="oddsTdMin" :class="['guanyaZonghe'+item.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(guanyaZonghe,item,'guanyaZonghe')">
                                  <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(guanyaZonghe,item,'guanyaZonghe') : kuaijieInto(guanyaZonghe,item,'guanyaZonghe')" class="betRateNum" :class="'guanyaZonghe'+item.oddsId+'a'">
                                    <span class="betRateNum">{{item.odds}}</span>
                                  </a>
                                  <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                                </td>

                                <td v-if="!kuaijiePay">
                                  <input v-if="isOpenOdds" v-model="item.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(guanyaZonghe,item,'guanyaZonghe',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                                  <span v-else style="width:60px;">封盘</span>
                                </td>

                              </template>
                            </tr>
                            <tr class="Dbgco1">
                              <template v-for="(item,index) in guanyaZonghe.list.slice(4,8)">

                                <td class="betnum" :class="'guanyaZonghe'+item.oddsId">{{item.oddsName}}</td>
                                <td class="oddsTdMin" :class="['guanyaZonghe'+item.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(guanyaZonghe,item,'guanyaZonghe')">
                                  <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(guanyaZonghe,item,'guanyaZonghe') : kuaijieInto(guanyaZonghe,item,'guanyaZonghe')" class="betRateNum" :class="'guanyaZonghe'+item.oddsId+'a'">
                                    <span class="betRateNum">{{item.odds}}</span>
                                  </a>
                                  <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                                </td>

                                <td v-if="!kuaijiePay">
                                  <input v-if="isOpenOdds" v-model="item.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(guanyaZonghe,item,'guanyaZonghe',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                                  <span v-else style="width:60px;">封盘</span>
                                </td>

                              </template>
                            </tr>
                            <tr class="Dbgco1">
                              <template v-for="(item,index) in guanyaZonghe.list.slice(8,12)">

                                <td class="betnum" :class="'guanyaZonghe'+item.oddsId">{{item.oddsName}}</td>
                                <td class="oddsTdMin" :class="['guanyaZonghe'+item.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(guanyaZonghe,item,'guanyaZonghe')">
                                  <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(guanyaZonghe,item,'guanyaZonghe') : kuaijieInto(guanyaZonghe,item,'guanyaZonghe')" class="betRateNum" :class="'guanyaZonghe'+item.oddsId+'a'">
                                    <span class="betRateNum">{{item.odds}}</span>
                                  </a>
                                  <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                                </td>

                                <td v-if="!kuaijiePay">
                                  <input v-if="isOpenOdds" v-model="item.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(guanyaZonghe,item,'guanyaZonghe',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                                  <span v-else style="width:60px;">封盘</span>
                                </td>

                              </template>
                            </tr>
                            <tr class="Dbgco1">
                              <template v-for="(item,index) in guanyaZonghe.list.slice(12,16)">

                                <td class="betnum" :class="'guanyaZonghe'+item.oddsId">{{item.oddsName}}</td>
                                <td class="oddsTdMin" :class="['guanyaZonghe'+item.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(guanyaZonghe,item,'guanyaZonghe')">
                                  <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(guanyaZonghe,item,'guanyaZonghe') : kuaijieInto(guanyaZonghe,item,'guanyaZonghe')" class="betRateNum" :class="'guanyaZonghe'+item.oddsId+'a'">
                                    <span class="betRateNum">{{item.odds}}</span>
                                  </a>
                                  <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                                </td>

                                <td v-if="!kuaijiePay">
                                  <input v-if="isOpenOdds" v-model="item.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(guanyaZonghe,item,'guanyaZonghe',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                                  <span v-else style="width:60px;">封盘</span>
                                </td>

                              </template>
                            </tr>

                            <tr class="Dbgco1">
                              <template v-for="(item,index) in guanyaZonghe.list.slice(16,17)">

                                <td class="betnum" :class="'guanyaZonghe'+item.oddsId">{{item.oddsName}}</td>
                                <td class="oddsTdMin" :class="['guanyaZonghe'+item.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(guanyaZonghe,item,'guanyaZonghe')">
                                  <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(guanyaZonghe,item,'guanyaZonghe') : kuaijieInto(guanyaZonghe,item,'guanyaZonghe')" class="betRateNum" :class="'guanyaZonghe'+item.oddsId+'a'">
                                    <span class="betRateNum">{{item.odds}}</span>
                                  </a>
                                  <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                                </td>

                                <td v-if="!kuaijiePay">
                                  <input v-if="isOpenOdds" v-model="item.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(guanyaZonghe,item,'guanyaZonghe',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                                  <span v-else style="width:60px;">封盘</span>
                                </td>

                              </template>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td class="title_jine">&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td class="title_jine">&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td class="title_jine">&nbsp;</td>
                            </tr>

                            <tr class="Dbgco1">
                              <template v-for="(item,index) in guanyaZonghe.list.slice(17)">

                                <td class="betnum" :class="'guanyaZonghe'+item.oddsId">{{item.oddsName}}</td>
                                <td class="oddsTdMin" :class="['guanyaZonghe'+item.oddsId,kuaijiePay?'cursorP' : '']" @click.stop="!kuaijiePay ? '' : kuaijieInto(guanyaZonghe,item,'guanyaZonghe')">
                                  <a v-if="isOpenOdds" title="按此下注" @click.stop="!kuaijiePay ? IntoMtran(guanyaZonghe,item,'guanyaZonghe') : kuaijieInto(guanyaZonghe,item,'guanyaZonghe')" class="betRateNum" :class="'guanyaZonghe'+item.oddsId+'a'">
                                    <span class="betRateNum">{{item.odds}}</span>
                                  </a>
                                  <span v-else class="noOddSpan">&nbsp;-&nbsp;</span>
                                </td>

                                <td v-if="!kuaijiePay">
                                  <input v-if="isOpenOdds" v-model="item.normalMoney" type="text" size="3" class="inp1" v-on:input ="inputFunc(guanyaZonghe,item,'guanyaZonghe',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
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

      zongheData: {},
      yidaosiqiu: [],
      sidaobaqiu: [],
      zasanqiu: [],
      guanyaZonghe: {}
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

        console.log('dataList',dataList);

        this.liangmianpan_lmp = dataList;

        this.yidaosiqiu = [];
        this.sidaobaqiu = [];

        let arry1 = [];
        let arry2 = [];
        let arry3 = [];
        let arry4 = [];
        let arry5 = [];
        let arry6 = [];

        let barry1 = [];
        let barry2 = [];
        let barry3 = [];
        let barry4 = [];

        for(let m in dataList) {

          if(['冠军','亚军','第三名','第四名','第五名'].findIndex((n) => n == dataList[m].name)>-1) {
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
          }

          if(['第五名','第六名','第七名','第八名','第九名','第十名','冠、亚军和'].findIndex((n) => n == dataList[m].name)>-1) {
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
          }

        }

        this.yidaosiqiu.push(arry1);
        this.yidaosiqiu.push(arry2);
        this.yidaosiqiu.push(arry3);
        this.yidaosiqiu.push(arry4);
        this.yidaosiqiu.push(arry5);
        this.yidaosiqiu.push(arry6);

        this.sidaobaqiu.push(barry1);
        this.sidaobaqiu.push(barry2);
        this.sidaobaqiu.push(barry3);
        this.sidaobaqiu.push(barry4);

        console.log('this.yidaosiqiu',this.yidaosiqiu);
        console.log('this.sidaobaqiu',this.sidaobaqiu);

        
      }

      if(this.showOdds == '冠亚组合') {
        this.guanyaZonghe = this.oddsList[0];
      }


    }



  }
}

</script>

<style scoped>


</style>
