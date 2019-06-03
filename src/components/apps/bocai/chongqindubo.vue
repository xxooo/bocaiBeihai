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

                 <!-- 上面原画<div class="btnDivArea" id="btnDivArea11">  
                  <input id="chk_qcstake" type="checkbox" onclick="QCheckShow(this)"><span onmouseover="javascript:this.style.color='#FF0D0D';" onmouseout="javascript:this.style.color='#299A26';" style="display:inline-block; color:#299A26; font-weight:bold;">快捷下注</span>
                  <span id="sp_qcstake" style=" display:none;">金额：<input id="txtqcstake" type="text" style="width:60px;"><span onclick="QCExplain()" style="color:#FF0D0D; display:inline-block; width:60px; cursor:pointer; text-align:left;">说明</span></span>
                  <input type="reset" value="重 填" onmouseover="this.className='button_bg2'" onmouseout="this.className='button_bg1'" class="button_bg1" onclick="SetOrderOddsString();"> 
                  <input id="btn_order2" type="button" value="下 注" onmouseover="this.className='button_bg2'" onmouseout="this.className='button_bg1'" class="button_bg1">
                 </div>  -->


                 <div class="btnDivArea" id="btnDivArea22" style="display:none;">  
                  <span style="color:red">下注中,请等待。。。</span>
                 </div> 
              </div>


            <div id="errormsg" style=" display:none;"></div>

          <div id="mainPageData" style="display: block;">

            <!-- <table class="DTable kuaijie" cellpadding="0" cellspacing="1" width="700" id="tblNowBet01" style="margin-top:0px;">
            <thead>
            <tr class="DtrTitle" style="font-weight: bold;">
            <td colspan="12" class="td_caption_1" align="center">第一球</td>
            </tr>
            </thead>  
              <tbody><tr class="Dbgco1">
              <td class="betnum" id="thnum_r210_1" align="center">大</td>
              <td id="td_r210_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('210,,1,,1.9879,210_1',this)" class="betRateNum" id="oid_210_1"><span class="betRateNum">1.9879</span></a><input type="hidden" name="odds_210_1" value="1.9879"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_210_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r210_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_210_1">封盘</span></td> 
              <td class="betnum" id="thnum_r210_2" align="center">小</td>
              <td id="td_r210_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('210,,2,,1.9879,210_2',this)" class="betRateNum" id="oid_210_2"><span class="betRateNum">1.9879</span></a><input type="hidden" name="odds_210_2" value="1.9879"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_210_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r210_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_210_2">封盘</span></td>
              <td class="betnum" id="thnum_r215_1" align="center">单</td>
              <td id="td_r215_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('215,,1,,1.9879,215_1',this)" class="betRateNum" id="oid_215_1"><span class="betRateNum">1.9879</span></a><input type="hidden" name="odds_215_1" value="1.9879"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_215_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r215_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_215_1">封盘</span></td>
              <td class="betnum" id="thnum_r215_2" align="center">双</td>
              <td id="td_r215_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('215,,2,,1.9879,215_2',this)" class="betRateNum" id="oid_215_2"><span class="betRateNum">1.9879</span></a><input type="hidden" name="odds_215_2" value="1.9879"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_215_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r215_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_215_2">封盘</span></td> 
              </tr> 
            </tbody>
            </table>  -->

            <!-- <table class="DTable kuaijie" cellpadding="0" cellspacing="1" width="700" id="tblNowBet02" style=" margin-top:2px;">
            <thead>
            <tr class="DtrTitle" style="font-weight: bold;">
            <td colspan="12" class="td_caption_1" align="center">第二球</td>
            </tr> 
            </thead> 
             
              <tbody><tr class="Dbgco1">
              <td class="betnum" id="thnum_r211_1" align="center">大</td>
              <td id="td_r211_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('211,,1,,1.9879,211_1',this)" class="betRateNum" id="oid_211_1"><span class="betRateNum">1.9879</span></a><input type="hidden" name="odds_211_1" value="1.9879"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_211_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r211_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_211_1">封盘</span></td> 
              <td class="betnum" id="thnum_r211_2" align="center">小</td>
              <td id="td_r211_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('211,,2,,1.9879,211_2',this)" class="betRateNum" id="oid_211_2"><span class="betRateNum">1.9879</span></a><input type="hidden" name="odds_211_2" value="1.9879"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_211_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r211_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_211_2">封盘</span></td>
              <td class="betnum" id="thnum_r216_1" align="center">单</td>
              <td id="td_r216_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('216,,1,,1.9879,216_1',this)" class="betRateNum" id="oid_216_1"><span class="betRateNum">1.9879</span></a><input type="hidden" name="odds_216_1" value="1.9879"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_216_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r216_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_216_1">封盘</span></td>
              <td class="betnum" id="thnum_r216_2" align="center">双</td>
              <td id="td_r216_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('216,,2,,1.9879,216_2',this)" class="betRateNum" id="oid_216_2"><span class="betRateNum">1.9879</span></a><input type="hidden" name="odds_216_2" value="1.9879"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_216_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r216_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_216_2">封盘</span></td> 
              </tr> 
            </tbody>
            </table>  -->

            <!-- <table class="DTable kuaijie" cellpadding="0" cellspacing="1" width="700" id="tblNowBet03" style=" margin-top:2px;">
            <thead>
            <tr class="DtrTitle" style="font-weight: bold;">
            <td colspan="12" class="td_caption_1" align="center">第三球</td>
            </tr> 
            </thead> 
              <tbody><tr class="Dbgco1">
              <td class="betnum" id="thnum_r212_1" align="center">大</td>
              <td id="td_r212_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('212,,1,,1.9879,212_1',this)" class="betRateNum" id="oid_212_1"><span class="betRateNum">1.9879</span></a><input type="hidden" name="odds_212_1" value="1.9879"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_212_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r212_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_212_1">封盘</span></td> 
              <td class="betnum" id="thnum_r212_2" align="center">小</td>
              <td id="td_r212_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('212,,2,,1.9879,212_2',this)" class="betRateNum" id="oid_212_2"><span class="betRateNum">1.9879</span></a><input type="hidden" name="odds_212_2" value="1.9879"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_212_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r212_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_212_2">封盘</span></td>
              <td class="betnum" id="thnum_r217_1" align="center">单</td>
              <td id="td_r217_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('217,,1,,1.9879,217_1',this)" class="betRateNum" id="oid_217_1"><span class="betRateNum">1.9879</span></a><input type="hidden" name="odds_217_1" value="1.9879"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_217_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r217_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_217_1">封盘</span></td>
              <td class="betnum" id="thnum_r217_2" align="center">双</td>
              <td id="td_r217_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('217,,2,,1.9879,217_2',this)" class="betRateNum" id="oid_217_2"><span class="betRateNum">1.9879</span></a><input type="hidden" name="odds_217_2" value="1.9879"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_217_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r217_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_217_2">封盘</span></td> 
              </tr>
            </tbody>
            </table> --> 

            <!-- <table class="DTable kuaijie" cellpadding="0" cellspacing="1" width="700" id="tblNowBet04" style=" margin-top:2px;">
            <thead>
            <tr class="DtrTitle" style="font-weight: bold;">
            <td colspan="12" class="td_caption_1" align="center">第四球</td>
            </tr> 
            </thead>  
              <tbody><tr class="Dbgco1">
              <td class="betnum" id="thnum_r213_1" align="center">大</td>
              <td id="td_r213_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('213,,1,,1.9879,213_1',this)" class="betRateNum" id="oid_213_1"><span class="betRateNum">1.9879</span></a><input type="hidden" name="odds_213_1" value="1.9879"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_213_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r213_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_213_1">封盘</span></td> 
              <td class="betnum" id="thnum_r213_2" align="center">小</td>
              <td id="td_r213_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('213,,2,,1.9879,213_2',this)" class="betRateNum" id="oid_213_2"><span class="betRateNum">1.9879</span></a><input type="hidden" name="odds_213_2" value="1.9879"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_213_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r213_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_213_2">封盘</span></td>
              <td class="betnum" id="thnum_r218_1" align="center">单</td>
              <td id="td_r218_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('218,,1,,1.9879,218_1',this)" class="betRateNum" id="oid_218_1"><span class="betRateNum">1.9879</span></a><input type="hidden" name="odds_218_1" value="1.9879"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_218_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r218_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_218_1">封盘</span></td>
              <td class="betnum" id="thnum_r218_2" align="center">双</td>
              <td id="td_r218_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('218,,2,,1.9879,218_2',this)" class="betRateNum" id="oid_218_2"><span class="betRateNum">1.9879</span></a><input type="hidden" name="odds_218_2" value="1.9879"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_218_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r218_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_218_2">封盘</span></td> 
              </tr>
            </tbody>
            </table>  -->

            <!-- <table class="DTable kuaijie" cellpadding="0" cellspacing="1" width="700" id="tblNowBet05" style=" margin-top:2px;">
            <thead>
            <tr class="DtrTitle" style="font-weight: bold;">
            <td colspan="12" class="td_caption_1" align="center">第五球</td>
            </tr> 
            </thead>  
              <tbody><tr class="Dbgco1">
              <td class="betnum" id="thnum_r214_1" align="center">大</td>
              <td id="td_r214_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('214,,1,,1.9879,214_1',this)" class="betRateNum" id="oid_214_1"><span class="betRateNum">1.9879</span></a><input type="hidden" name="odds_214_1" value="1.9879"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_214_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r214_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_214_1">封盘</span></td> 
              <td class="betnum" id="thnum_r214_2" align="center">小</td>
              <td id="td_r214_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('214,,2,,1.9879,214_2',this)" class="betRateNum" id="oid_214_2"><span class="betRateNum">1.9879</span></a><input type="hidden" name="odds_214_2" value="1.9879"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_214_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r214_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_214_2">封盘</span></td>
              <td class="betnum" id="thnum_r219_1" align="center">单</td>
              <td id="td_r219_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('219,,1,,1.9879,219_1',this)" class="betRateNum" id="oid_219_1"><span class="betRateNum">1.9879</span></a><input type="hidden" name="odds_219_1" value="1.9879"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_219_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r219_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_219_1">封盘</span></td>
              <td class="betnum" id="thnum_r219_2" align="center">双</td>
              <td id="td_r219_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('219,,2,,1.9879,219_2',this)" class="betRateNum" id="oid_219_2"><span class="betRateNum">1.9879</span></a><input type="hidden" name="odds_219_2" value="1.9879"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_219_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r219_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_219_2">封盘</span></td> 
              </tr> 
            </tbody>
            </table> --> 

            <!-- <table class="DTable kuaijie" cellpadding="0" cellspacing="1" width="700" id="tblNowBet06">
              <tbody><tr class="Dbgco1">
              <td class="betnum" id="thnum_r346_1" align="center">总和大</td>
              <td id="td_r346_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('346,,1,,1.9879,346_1',this)" class="betRateNum" id="oid_346_1"><span class="betRateNum">1.9879</span></a><input type="hidden" name="odds_346_1" value="1.9879"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_346_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r346_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_346_1">封盘</span></td> 
              <td class="betnum" id="thnum_r346_2" align="center">总和小</td>
              <td id="td_r346_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('346,,2,,1.9879,346_2',this)" class="betRateNum" id="oid_346_2"><span class="betRateNum">1.9879</span></a><input type="hidden" name="odds_346_2" value="1.9879"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_346_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r346_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_346_2">封盘</span></td> 
              <td class="betnum" id="thnum_r345_1" align="center">总和单</td>
              <td id="td_r345_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('345,,1,,1.9879,345_1',this)" class="betRateNum" id="oid_345_1"><span class="betRateNum">1.9879</span></a><input type="hidden" name="odds_345_1" value="1.9879"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_345_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r345_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_345_1">封盘</span></td> 
              <td class="betnum" id="thnum_r345_2" align="center">总和双</td>
              <td id="td_r345_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('345,,2,,1.9879,345_2',this)" class="betRateNum" id="oid_345_2"><span class="betRateNum">1.9879</span></a><input type="hidden" name="odds_345_2" value="1.9879"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_345_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r345_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_345_2">封盘</span></td> 
              </tr>
              <tr>
              <td class="betnum" id="thnum_r347_1" align="center">龙</td>
              <td id="td_r347_1"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('347,,1,,1.9879,347_1',this)" class="betRateNum" id="oid_347_1"><span class="betRateNum">1.9879</span></a><input type="hidden" name="odds_347_1" value="1.9879"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_347_1">&nbsp;-&nbsp;</span></td><td><input type="text" name="r347_1" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_347_1">封盘</span></td> 
              <td class="betnum" id="thnum_r347_2" align="center">虎</td>
              <td id="td_r347_2"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('347,,2,,1.9879,347_2',this)" class="betRateNum" id="oid_347_2"><span class="betRateNum">1.9879</span></a><input type="hidden" name="odds_347_2" value="1.9879"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_347_2">&nbsp;-&nbsp;</span></td><td><input type="text" name="r347_2" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_347_2">封盘</span></td> 
              <td class="betnum" id="thnum_r347_3" align="center">和</td>
              <td id="td_r347_3"><a href="javascript:void(0)" title="按此下注" onclick="IntoMtran('347,,3,,8.8,347_3',this)" class="betRateNum" id="oid_347_3"><span class="betRateNum">8.8</span></a><input type="hidden" name="odds_347_3" value="8.8"><span style="width:41px;color:red;font-weight:bold;display:none" id="hengan_347_3">&nbsp;-&nbsp;</span></td><td><input type="text" name="r347_3" size="3" class="inp1" onfocus="this.className='inp1m'" onblur="this.className='inp1';"><span style="width:60px; display:none;" id="fenpan_347_3">封盘</span></td> 
              <td colspan="3"></td>
              </tr>
            </tbody>
            </table> -->


            <!-- <div class="btnDivArea" id="btnDivArea">  
              <input id="chk_qcstake_fu" type="checkbox" onclick="QCheckShow_fu(this)"><span onmouseover="javascript:this.style.color='#FF0D0D';" onmouseout="javascript:this.style.color='#299A26';" style="display:inline-block; color:#299A26; font-weight:bold;">快捷下注</span>
              <span id="sp_qcstake_fu" style=" display:none;">金额：<input id="txtqcstake_fu" type="text" style="width:60px;"><span onclick="QCExplain()" style="color:#FF0D0D; display:inline-block; width:60px; cursor:pointer; text-align:left;">说明</span></span>
              <input type="reset" value="重 填" onmouseover="this.className='button_bg2'" onmouseout="this.className='button_bg1'" class="button_bg1" onclick="SetOrderOddsString();"> 
              <input id="btn_order" type="button" value="下 注" onmouseover="this.className='button_bg2'" onmouseout="this.className='button_bg1'" class="button_bg1">
            </div>  -->


          <!-- <div class="btnDivArea" id="btnDivArea2" style="display:none;">  
           <span style="color:red">下注中,请等待。。。</span>
          </div>  -->

    <!-- <div id="lotteryno">

      <table class="Ball_List" border="0" cellspacing="1" cellpadding="0" width="700" id="BallList" style="display: block;">
      <tbody>
      <tr>
      <td id="sRB_1" class="td_caption_1 td_caption_2"><a href="javascript:Read_Ballimg(1)">总和大小</a></td>
      <td id="sRB_2" class="td_caption_1"><a href="javascript:Read_Ballimg(2)">总和单双</a></td>
      <td id="sRB_3" class="td_caption_1"><a href="javascript:Read_Ballimg(3)">龙虎和</a></td>    
      </tr>
      <tr class="Ball_tr_H">
      <td colspan="3">
      <table class="Ball_List" border="0" cellspacing="0" cellpadding="0" width="698">
      <tbody>
      <tr class="Ball_tr_H" valign="top" id="lotteryno_tr1" style="display: block; height: auto; min-height: 25px;"><td width="28"></td><td width="28" class="Jut_caption_1">小</td><td width="28">大</td><td width="28" class="Jut_caption_1">小<br>小</td><td width="28">大<br>大</td><td width="28" class="Jut_caption_1">小<br>小</td><td width="28">大<br>大</td><td width="28" class="Jut_caption_1">小<br>小</td><td width="28">大</td><td width="28" class="Jut_caption_1">小</td><td width="28">大<br>大</td><td width="28" class="Jut_caption_1">小<br>小</td><td width="28">大<br>大<br>大</td><td width="28" class="Jut_caption_1">小<br>小<br>小</td><td width="28">大<br>大<br>大</td><td width="28" class="Jut_caption_1">小<br>小<br>小</td><td width="28">大</td><td width="28" class="Jut_caption_1">小</td><td width="28">大<br>大</td><td width="28" class="Jut_caption_1">小<br>小<br>小</td><td width="28">大</td><td width="28" class="Jut_caption_1">小</td><td width="28">大<br>大</td><td width="28" class="Jut_caption_1">小<br>小<br>小<br>小<br>小<br>小</td><td width="28" style="min-height: 25px;">大<br>大<br>大</td></tr>
      <tr class="Ball_tr_H" valign="top" id="lotteryno_tr2" style=" display:none;height:auto;min-height:25px;"><td width="28">双</td><td width="28" class="Jut_caption_1">单</td><td width="28">双</td><td width="28" class="Jut_caption_1">单</td><td width="28">双<br>双<br>双<br>双</td><td width="28" class="Jut_caption_1">单<br>单</td><td width="28">双</td><td width="28" class="Jut_caption_1">单</td><td width="28">双</td><td width="28" class="Jut_caption_1">单</td><td width="28">双<br>双<br>双</td><td width="28" class="Jut_caption_1">单</td><td width="28">双<br>双</td><td width="28" class="Jut_caption_1">单<br>单<br>单</td><td width="28">双<br>双</td><td width="28" class="Jut_caption_1">单<br>单</td><td width="28">双<br>双</td><td width="28" class="Jut_caption_1">单</td><td width="28">双<br>双<br>双<br>双<br>双</td><td width="28" class="Jut_caption_1">单</td><td width="28">双<br>双</td><td width="28" class="Jut_caption_1">单</td><td width="28">双<br>双<br>双<br>双</td><td width="28" class="Jut_caption_1">单</td><td width="28" style="min-height: 25px;">双</td></tr>
      <tr class="Ball_tr_H" valign="top" id="lotteryno_tr3" style=" display:none;height:auto;min-height:25px;"><td width="28">龙</td><td width="28" class="Jut_caption_1">虎<br>虎</td><td width="28">和</td><td width="28" class="Jut_caption_1">龙</td><td width="28">虎</td><td width="28" class="Jut_caption_1">龙<br>龙<br>龙</td><td width="28">虎</td><td width="28" class="Jut_caption_1">龙</td><td width="28">虎</td><td width="28" class="Jut_caption_1">和</td><td width="28">虎<br>虎<br>虎<br>虎<br>虎</td><td width="28" class="Jut_caption_1">龙<br>龙</td><td width="28">和</td><td width="28" class="Jut_caption_1">虎<br>虎<br>虎<br>虎<br>虎<br>虎<br>虎</td><td width="28">龙</td><td width="28" class="Jut_caption_1">虎</td><td width="28">龙</td><td width="28" class="Jut_caption_1">虎<br>虎</td><td width="28">龙<br>龙</td><td width="28" class="Jut_caption_1">虎</td><td width="28">龙</td><td width="28" class="Jut_caption_1">虎<br>虎<br>虎<br>虎</td><td width="28">和</td><td width="28" class="Jut_caption_1">龙</td><td width="28" style="min-height: 25px;">虎</td></tr>   
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>

 
      </div> -->

    </div>

  </div>
</td>

    <!-- <td valign="top">
      <div id="maintwssides" style="display: block;">
        <table class="Ball_List" border="0" cellspacing="1" cellpadding="0" width="150" id="tbtwssides" style="display: block;">
        <tbody id="TwoSides"><tr><td class="td_caption_1" colspan="2" style="width:150px;">两面长龙排行</td></tr> <tr class="t_list_tr_0"><td class="f_left TDb_B">第五球 - 双</td><td class="TDb_R">&nbsp;5 期&nbsp;</td></tr> <tr class="t_list_tr_0"><td class="f_left TDb_B">第二球 - 大</td><td class="TDb_R">&nbsp;3 期&nbsp;</td></tr> <tr class="t_list_tr_0"><td class="f_left TDb_B">第四球 - 双</td><td class="TDb_R">&nbsp;3 期&nbsp;</td></tr> <tr class="t_list_tr_0"><td class="f_left TDb_B">总和 - 大</td><td class="TDb_R">&nbsp;3 期&nbsp;</td></tr> <tr class="t_list_tr_0"><td class="f_left TDb_B">第一球 - 小</td><td class="TDb_R">&nbsp;2 期&nbsp;</td></tr> <tr class="t_list_tr_0"><td class="f_left TDb_B">第三球 - 大</td><td class="TDb_R">&nbsp;2 期&nbsp;</td></tr> <tr class="t_list_tr_0"><td class="f_left TDb_B">第四球 - 大</td><td class="TDb_R">&nbsp;2 期&nbsp;</td></tr> <tr class="t_list_tr_0"><td class="f_left TDb_B">第一球 - 单</td><td class="TDb_R">&nbsp;2 期&nbsp;</td></tr> <tr class="t_list_tr_0"><td class="f_left TDb_B">第二球 - 单</td><td class="TDb_R">&nbsp;2 期&nbsp;</td></tr></tbody>
        </table>
      </div>
    </td> -->

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
      activeIndex: '',
      showOdds: '',
      submenu: '更多',
      isOpenOdds: true,
      longhuhe_lmp: {},
      yiwuqiu_lmp: [],
      qianhousan_lmp: [],
      orderDataList: [],
      normalPay: false,
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
    this.getOdds(this.curBocaiTypeId);
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
  },
  methods: {
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
    async resetOddsCategory(item) {

      let that = this;

      const loading = this.$loading({
                lock: true,
                text: 'Loading',
                background: 'rgba(0, 0, 0, 0.7)'
              });

          await that.$get(`${window.url}/api/getOdds?bocaiTypeId=`+this.curBocaiTypeId+`&bocaiCategoryId=`+item.id).then((res) => {
            that.$handelResponse(res, (result) => {
              loading.close();
              that.showOdds = item.name;
              that.bocaiCategory = item;
              if(result.code===200){
                that.oddsList = result.oddsList;
                
                that.orderDataList = [];
                that.normalPay = false;
                bus.$emit('getnormalPay', false); 

                that.shuaiXuanDatas(result.oddsList);

              }
            })
          });
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

      this.getnotice();

      if(index*1 > 9) {
        this.submenu = item.name;
      } else {
        this.submenu = '更多';
      }

      this.resetOddsCategory(item);

    },
    async getOdds(id) {

      let that = this;

          const loading = this.$loading({
                lock: true,
                text: 'Loading',
                background: 'rgba(0, 0, 0, 0.7)'
              });

          await that.$get(`${window.url}/api/getOdds?bocaiTypeId=`+id).then((res) => {
            that.$handelResponse(res, (result) => {

              loading.close();
              if(result.code===200){
                bus.$emit('curactiveIndex', this.curactiveIndex);
                that.bocaiCategoryList = result.bocaiCategoryList;
                that.oddsList = result.oddsList;
                that.showOdds = result.bocaiCategoryList[0].name;
                that.bocaiCategory = result.bocaiCategoryList[0];

                bus.$emit('getbocaiCategoryId', result.bocaiCategoryList[0].id);
                that.activeIndex = that.bocaiCategoryList[0].name;
                that.shuaiXuanDatas(result.oddsList);

                bus.$emit('getbocaiTypeId', that.curBocaiTypeId); 
                bus.$emit('getbocaiTypeName', that.curactiveIndex); 

              }
            })
          });

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
