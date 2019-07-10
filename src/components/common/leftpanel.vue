<template>
  <div id="leftpanel" class="betQuick">


  <div align="left" style="overflow: hidden;" id="div_commond">
        <table v-if="showNumpage == 1" width="100%" class="DTable" cellpadding="0" cellspacing="1" border="0" style="margin-top: 0px;" bgcolor="white">

          <tbody>
            <tr style="height: 33px; text-align: left; background: url(./static/img/tb_bg.jpg); color: Black; font-size: 14px;">
                <td colspan="2" style="width: 228px;" align="center"><span style="font-size: 14px; font-weight: bold;">请核对您的帐户</span></td>
            </tr>
            <tr>
                <td width="70px" align="left" style="line-height: 17px;" class="t_td_caption_1">会员帐号</td>
                <td align="left">
                    <span style="margin-left: 5px;" id="left_memberno">{{userInfo.username}}({{userInfo.handicap}}盘)</span>
                    <input id="hid_wagerroundno" type="hidden" value="A">
                </td>
            </tr>
            <tr style="height: 22px;" id="tr_cashremaining">
                <td align="right" class="t_td_caption_1">帐户余额 </td>
                <td align="left"><span id="con_cashremaining" style="font-size: 13px; margin-left: 5px;">{{keyongBalance}}</span></td>
            </tr>
            <tr style="height: 22px; display: none;" id="tr_creditquota">
                <td align="left" class="t_td_caption_1">信用额度 </td>
                <td align="left"><span id="sp_creditquota" style="font-size: 13px; margin-left: 5px;">0</span></td>
            </tr>
            <tr id="tr_allowcreditquota">
                <td align="left" class="t_td_caption_1">可用金额</td>
                <td align="left"><span id="sp_allowcreditquota" style="font-size: 13px; margin-left: 5px;">{{userInfo.cashBalance}}</span></td>
            </tr>

            <tr id="tr_8" style="">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://yun.ngk77.com/ui-02/detail.aspx?g=8','廣東快樂十分','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“广东快乐十分”开奖网</span></a>&nbsp;
                </td>
            </tr>
            <tr id="tr_6" style="">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://yun.ngk77.com/ui-02/detail.aspx?g=6','重慶時時彩','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“重庆时时彩”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>
            <tr id="tr_11" style="">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://yun.ngk77.com/ui-02/detail.aspx?g=11','北京賽車','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“北京赛车(PK10)”官方网</span></a>&nbsp;&nbsp;
                </td>
            </tr>
            <tr id="tr_12" style="">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://yun.ngk77.com/ui-02/detail.aspx?g=12','江苏骰寶','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“江苏骰寶(快3)”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>
            <tr id="tr_13" style="">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://yun.ngk77.com/ui-02/detail.aspx?g=13','快乐8','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“北京快乐8”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>
            <tr id="tr_20" style="">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://yun.ngk77.com/ui-02/detail.aspx?g=20','幸运农场','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“幸运农场”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>
            <tr id="tr_21" style="">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://yun.ngk77.com/ui-02/detail.aspx?g=21','幸运飞艇','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“幸运飞艇”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>
            <tr id="tr_10" style="display:none">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://yun.ngk77.com/ui-02/detail.aspx?g=10','新疆时时彩','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“新疆时时彩”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>
            <tr id="tr_14" style="display:none">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://yun.ngk77.com/ui-02/detail.aspx?g=14','天津时时彩','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“天津时时彩”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>
            <tr id="tr_22" style="">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://speedylottos.com/speedy10-result.php','极速赛车','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“极速赛车”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>
            <tr id="tr_18" style="display:none">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://www.gdlottery.cn/odata/zst11xuan5.jspx','广东11选五','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“广东11选五”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>
            <tr id="tr_26" style="">
                <td class="t_list_caption" colspan="2">
                    <span style="color: #4a1a04;">“EPS赛马”</span>&nbsp;&nbsp;
                    <a href="javascript:void(0);" onclick="window.open('http://www.epsbet.com','EPS赛马')"><span style="color: #4a1a04;">网址1</span></a>
                    <a href="javascript:void(0);" onclick="window.open('http://www.cvk66.com','EPS赛马')"><span style="color: #4a1a04;">网址2</span></a>
                    <a href="javascript:void(0);" onclick="window.open('http://yun.ngk77.com','EPS赛马')"><span style="color: #4a1a04;">网址3</span></a>
                </td>
            </tr>
            <tr id="tr_27" style="">
                <td class="t_list_caption" colspan="2">
                    <span style="color: #4a1a04;">“超级快5”</span>&nbsp;&nbsp;
                    <a href="javascript:void(0);" onclick="window.open('http://www.super-pick5.com','超级快5')"><span style="color: #4a1a04;">网址1</span></a>
                    <a href="javascript:void(0);" onclick="window.open('http://www.cvk66.com','超级快5')"><span style="color: #4a1a04;">网址2</span></a>
                    <a href="javascript:void(0);" onclick="window.open('http://yun.ngk77.com','超级快5')"><span style="color: #4a1a04;">网址3</span></a>
                </td>
            </tr> 
            <tr id="tr_38" style="">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://auluckylottery.com/results/lucky-ball-5','澳洲幸运5','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“澳洲幸运5”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>
            <tr id="tr_39" style="display:none">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://auluckylottery.com/results/lucky-ball-8','澳洲幸运8','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“澳洲幸运8”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>
            <tr id="tr_40" style="">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://auluckylottery.com/results/lucky-ball-10','澳洲幸运10','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“澳洲幸运10”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>
            <tr id="tr_41" style="display:none">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://auluckylottery.com/results/lucky-ball-20','澳洲幸运20','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“澳洲幸运20”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>
            <tr id="tr_41" style="display:none">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://auluckylottery.com/results/lucky-ball-20','澳洲幸运20','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“澳洲幸运20”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>  
            <tr id="tr_41" style="display:none">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://auluckylottery.com/results/lucky-ball-20','澳洲幸运20','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“澳洲幸运20”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>  
            <tr id="tr_41" style="display:none">
                <td class="t_list_caption" colspan="2">
                    <a href="javascript:void(0);" onclick="window.open('http://auluckylottery.com/results/lucky-ball-20','澳洲幸运20','width=687,height=464,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no');"><span style="color: #4a1a04;">“澳洲幸运20”开奖网</span></a>&nbsp;&nbsp;
                </td>
            </tr>
              
          </tbody>

        </table>

        <table v-if="showNumpage == 2" width="100%" class="DTable" cellpadding="0" cellspacing="1" border="0" style="margin-top: 0px;" bgcolor="white">

            <tbody>
                <tr style="height: 33px; text-align: left; background: url(./static/img/tb_bg.jpg); color: Black; font-size: 14px;">
                    <td style="width: 227px;" colspan="2" nowrap="" align="center" id="td_mtranList_title">
                        <span style="font-size: 14px; font-weight: bold;">下注结果反馈</span>
                    </td>
                </tr>
                <tr>
                    <td width="70px" align="center" style="line-height: 17px;" class="t_td_caption_1">会员帐号</td>
                    <td align="left">{{userInfo.username}}({{userInfo.handicap}})盘</td>
                </tr>
                <tr>
                    <td width="70px" align="center" style="line-height: 17px;" class="t_td_caption_1">可用金额</td>
                    <td align="left"><span name="allowprice">{{userInfo.cashBalance}}</span></td>
                </tr>
                <tr id="tr_print">
                    <td colspan="2" style="height: 33px; text-align: center; background: url(./static/img/td_but.jpg);">
                        <input type="button" value="打 印" class="button_bg1" @click="OrderPrint()">&nbsp;
                        <input type="button" value="返 回" class="button_bg1" @click="cancel_xd()">
                    </td>
                </tr>
            </tbody>


            <tbody>
                <tr style="height:20px;line-height:20px;">
                    <td colspan="2" align="center" id="Current_Round" style="font-size: 14px;height:20px;line-height:20px; font-weight: bold;">
                        {{curPeriods}}期
                    </td>
                </tr>

                <tr v-for="(item,index) in orderDatasShow">
                    <td colspan="2">
                        <div align="left">
                            <span style="width:26%;height:16px;line-height:16px;">注单号：</span>&nbsp;
                            <span style="height:16px;line-height:16px;">{{item.orderNum}}#</span>
                        </div>
                        <div style="height:16px;line-height:16px;" align="center">
                            <span style="color:blue;">{{item.bocaiCategory2Name}}  {{item.bocaiOddName}}</span>@&nbsp;
                            <span style="color:red;">{{item.bocaiOdds}}</span>
                        </div>
                        <div align="left">
                            <span style="height:16px;line-height:16px;width:58px;">下注额：</span>&nbsp;
                            <span style="height:16px;line-height:16px;">{{item.betsMoney}}</span>
                        </div>
                        <div align="left">
                            <span style="height:16px;line-height:16px;width:58px;">可赢额：</span>&nbsp;
                            <span style="height:16px;line-height:16px;">{{+item.betsMoney*item.bocaiOdds - item.betsMoney*1}}</span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td align="center">下注笔数</td>
                    <td align="left" style="padding-left:5px">{{orderDatasShow.length}} 笔</td>
                </tr>
                <tr>
                    <td align="center">合计注额</td>
                    <td align="left" style="padding-left:5px">￥ {{totalMoney}}</td>
                </tr>

            </tbody>
        </table>


        <!-- 右下注，封盘状态下单 -->

        <table v-if="showNumpage == 22" width="100%" cellpadding="0" cellspacing="0" id="tb_xd" style="display: table;">
            <tbody>
                <tr>
                <td id="mtranlist"><table width="100%" cellpadding="0" cellspacing="1" class="DTable" align="center" id="tb_mtranlist" border="0" style="min-width:228px;margin-top: 0px; word-break: break-all; word-wrap: break-word">
                    <tbody>
                        <tr style="height: 33px; text-align: left; background: url(./static/img/tb_bg.jpg); color: Black; font-size: 14px;">
                            <td colspan="2" nowrap="" align="center" id="td_mtranList_title">
                                <span style="font-size: 14px; font-weight: bold;">下注结果反馈</span>
                            </td>
                        </tr>
                        <tr>
                            <td width="70px" align="center" style="line-height: 17px;" class="t_td_caption_1">会员帐号</td>
                            <td align="left">{{userInfo.username}}({{userInfo.handicap}})盘</td>
                        </tr>
                        <tr>
                            <td width="70px" align="center" style="line-height: 17px;" class="t_td_caption_1">可用金额</td>
                            <td align="left"><span name="allowprice">{{userInfo.cashBalance}}</span></td>
                        </tr>
                        <tr id="tr_print">
                            <td colspan="2" style="height: 33px; text-align: center; background: url(./static/img/td_but.jpg);">
                                <input type="button" value="打 印" class="button_bg1" @click="OrderPrint()">&nbsp;
                                <input type="button" value="返 回" class="button_bg1" @click="cancel_xd()">
                            </td>
                        </tr>
                        <tr style="height:20px;line-height:20px;">
                            <td colspan="2" align="center" id="Current_Round" style="font-size: 14px;height:20px;line-height:20px; font-weight: bold;">{{curPeriods}}期</td>
                        </tr>
                        <tr>
                            <td colspan="2" align="center" id="Current_XiaZhu">{{dialogMessage}}</td>
                        </tr>
                    </tbody>
                </table>
            </td>
            </tr>
        </tbody>
    </table>


        <table v-if="showNumpage == 3" width="100%" class="DTable" cellpadding="0" cellspacing="1" border="0" style="margin-top: 0px;" bgcolor="white">
            <tbody>
                <tr style="height: 33px; text-align: left; background: url(./static/img/tb_bg.jpg); color: Black; font-size: 14px;">
                    <td style="width: 227px;" colspan="2" nowrap="" align="center" id="td_mtranList_title">
                        <span style="font-size: 12px; font-weight: bold;">{{orderDataObj.bocaiCategory2Name}} - 下注</span>
                    </td>
                </tr>

                <tr>
                    <td width="70px" align="center" style="line-height: 17px;" class="t_td_caption_1">会员帐号</td>
                    <td align="left">{{userInfo.username}}({{userInfo.handicap}})盘</td>
                </tr>
                <tr>
                    <td width="70px" align="center" style="line-height: 17px;" class="t_td_caption_1">可用金额</td>
                    <td align="left"><span name="allowprice">{{userInfo.cashBalance}}</span></td>
                </tr>
            </tbody>

            <tbody id="tbodd_Normal3">
                <tr style="height:16px;line-height:16px;">
                    <td colspan="2">
                        <div align="center" style="height:16px;line-height:16px;color:green;font-weight:bolder;">{{curPeriods}} 期
                        </div>
                        <div class="tdredbold">
                            <font color="blue">{{orderDataObj.bocaiCategory2Name}}&nbsp;&nbsp;{{orderDataObj.bocaiOddName}} </font>
                            <font color="black">@</font> {{orderDataObj.bocaiOdds}}
                        </div>
                    </td>
                </tr>

                <tr>
                    <td class="t_td_caption_1">下注金额：</td>
                    <td align="left" style="padding-left:5px">
                        <input id="txtprice" v-model.number="moneyOrder" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/" style="width: 87px" type="text">
                    </td>
                </tr>
                <tr>
                    <td class="t_td_caption_1">可赢金额：</td>
                    <td align="left" style="padding-left:5px">
                        <span id="winprice" style="color:red">{{moneyOrder == '' ? '' : +orderDataObj.bocaiOdds*moneyOrder*1 - moneyOrder*1}}</span>&nbsp;
                    </td>
                </tr>
                <tr>
                    <td class="t_td_caption_1">最高派彩：</td>
                    <td align="left" style="padding-left:5px">{{maxPaiCai}}</td>
                </tr>
                <tr v-if="!isOdding" id="tr_xdbtn" align="center" style="height: 33px; text-align: center; background: url(./static/img/td_but.jpg);">
                    <td colspan="2">
                        <input id="btn_cacel" type="button" value="取消下注" class="button_bg1" @click="cancel_xd()">  
                        <input id="btn_conform" name="btn_conform" class="button_bg1" type="button" value="确定下单" @click="orderOddsTo()">
                    </td>
                </tr>
                <tr v-else id="tr_xdzhong" align="center" style="height: 33px; text-align: center; background: url(./static/img/td_but.jpg);">
                    <td colspan="2"><span style="color:red">下注中,请等待。。。</span></td>
                    <td></td>
                </tr>
            </tbody>

        </table>

        <table v-if="showNumpage == 33" width="100%" class="DTable" cellpadding="0" cellspacing="1" border="0" style="margin-top: 0px;" bgcolor="white">
            <tbody>
                <tr style="height: 33px; text-align: left; background: url(./static/img/tb_bg.jpg); color: Black; font-size: 14px;">
                    <td style="width: 227px;" colspan="2" nowrap="" align="center" id="td_mtranList_title">
                        <span style="font-size: 12px; font-weight: bold;">{{orderDataObj.bocaiCategory2Name}} - 下注</span>
                    </td>
                </tr>

                <tr>
                    <td width="70px" align="center" style="line-height: 17px;" class="t_td_caption_1">会员帐号</td>
                    <td align="left">{{userInfo.username}}({{userInfo.handicap}})盘</td>
                </tr>
                <tr>
                    <td width="70px" align="center" style="line-height: 17px;" class="t_td_caption_1">可用金额</td>
                    <td align="left"><span name="allowprice">{{userInfo.cashBalance}}</span></td>
                </tr>
            </tbody>

            <!-- 左边下单封盘状态 过期状态一样 -->
            <tbody id="tbodd_N0Normal" style="">
                <tr style="height:20px;line-height:20px;">
                    <td colspan="2" align="center" style="font-size: 12px;height:20px;line-height:20px;color:red; font-weight: bold;"> 
                        下注被返回,请再次确认！
                    </td>
                </tr>
                <tr style="height:16px;line-height:16px;">
                    <td colspan="2" align="center" style="font-size: 12px;height:20px;line-height:20px;color:#000; font-weight: bold;">
                    {{curPeriods}}期
                    </td>
                </tr>

                <tr style="height:16px;line-height:16px;">
                    <td colspan="2">
                        <div class="tdredbold">
                            <font color="blue">{{orderDataObj.bocaiCategory2Name}}&nbsp;&nbsp;{{orderDataObj.bocaiOddName}} </font>
                            <font color="black">@</font> {{orderDataObj.bocaiOdds}}
                        </div>
                        <div align="left">
                            <span style="height:16px;line-height:16px;width:58px;">下注额：</span>&nbsp;
                            <span style="height:16px;line-height:16px;">{{orderDataObj.betsMoney}}</span>
                        </div>
                        <div align="left">
                            <span style="height:16px;line-height:16px;width:58px;">可赢额：</span>&nbsp;
                            <span style="height:16px;line-height:16px;">
                                {{+orderDataObj.betsMoney*orderDataObj.bocaiOdds - orderDataObj.betsMoney*1}}
                            </span>
                        </div>
                        <div style="background-color:red;color:#fff;text-align:center;width:200px;">已封盘</div>
                    </td>
                </tr>
                <tr id="tr_xdbtn" align="center" style="height: 33px; text-align: center; background: url(./static/img/td_but.jpg);">
                    <td colspan="2">
                        <input id="btn_cacel" type="button" value="取消下注" class="button_bg1" @click="cancel_xd()">  
                        <input id="btn_conform" name="btn_conform" class="button_bg1" type="button" value="确定下单" disabled="">
                    </td>
                </tr>

            </tbody>


        </table>


        <!-- 左边下单封盘状态 -->

        <!-- <table width="100%" cellpadding="0" cellspacing="0" id="tb_xd_single" style="display: block;">
            <tbody><tr>
                <td id="td_mtransingle"><table width="100%" cellpadding="0" cellspacing="1" class="DTable" align="center" id="tb_mtranlist" border="0" style="min-width:228px;margin-top: 0px; word-break: break-all; word-wrap: break-word"><tbody><tr style="height: 33px; text-align: left; background: url(./static/img/tb_bg.jpg); color: Black; font-size: 14px;"><td colspan="2" nowrap="" align="center" id="td_mtranList_title"><span style="font-size: 12px; font-weight: bold;">冠军大小 - 下注</span></td></tr><tr><td width="70px" align="center" style="line-height: 17px;" class="t_td_caption_1">会员帐号</td><td align="left">njnj0055(D)盘</td></tr><tr><td width="70px" align="center" style="line-height: 17px;" class="t_td_caption_1">可用金额</td><td align="left"><span name="allowprice">101</span></td></tr></tbody><tbody id="tbodd_Normal" style="display: none;"><tr><td colspan="2"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="min-width:228px; word-break: break-all; word-wrap: break-word;"><tbody><tr style="height:16px;line-height:16px;"><td colspan="2" align="center" style="height:16px;line-height:16px;color:green;font-weight:bolder;">31102871 期</td></tr> <tr><td colspan="2" class="tdredbold"><font color="blue">冠军大小 大 </font><font color="black">@</font> 1.9396</td></tr></tbody></table></td></tr><tr><td class="t_td_caption_1">下注金额：</td><td align="left" style="padding-left:5px"><input id="txtprice" style="width: 87px" type="text" onkeyup="value=value.replace(/[^\d]/g,'');winchange(1.9396,-1);"></td></tr><tr><td class="t_td_caption_1">可赢金额：</td><td align="left" style="padding-left:5px"><span id="winprice" style="color:red">1.87</span>&nbsp;</td></tr><tr><td class="t_td_caption_1">最高派彩：</td><td align="left" style="padding-left:5px">5000000</td></tr><tr id="tr_xdbtn" align="center" style="height: 33px; text-align: center; background: url(./static/img/td_but.jpg);"><td colspan="2"><input id="btn_cacel" type="button" value="取消下注" class="button_bg1" @click="cancel_xd()">  <input id="btn_conform" name="btn_conform" class="button_bg1" type="button" value="确定下单" @click="click_conformT(22,'D','621,冠军大小,1,大,1.9396','621:1',1,0)"></td></tr><tr id="tr_xdzhong" align="center" style="display:none;height: 33px; text-align: center; background: url(./static/img/td_but.jpg);"><td colspan="2"><span style="color:red">下注中,请等待。。。</span></td><td></td></tr></tbody><tbody id="tbodd_N0Normal" style=""><tr style="height:20px;line-height:20px;"><td colspan="2" align="center" style="font-size: 12px;height:20px;line-height:20px;color:red; font-weight: bold;">下注被返回,请再次确认！</td></tr><tr style="height:16px;line-height:16px;"><td colspan="2" align="center" style="font-size: 12px;height:20px;line-height:20px;color:#000; font-weight: bold;">31102871期</td></tr><tr><td colspan="2" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="color:#000;font-family:Verdana,'宋体',Arial,Sans;height:20px;min-width:228px; word-break: break-all; word-wrap: break-word;"> <tbody><tr><td colspan="2" class="tdredbold"><font color="blue">冠军大小 大 </font><font color="black">@</font> 1.9396</td></tr><tr style="height:16px;line-height:16px;"><td style="height:16px;line-height:16px;width:73px;" align="right">下注金额：</td><td align="left" style="height:16px;line-height:16px;" id="Normal_stake">2</td></tr><tr style="height:16px;line-height:16px;"><td style="height:16px;line-height:16px;width:73px;" align="right">可赢金额：</td><td align="left" style="height:16px;line-height:16px;" id="Normal_winningstake">1.87</td></tr><tr><td align="center" colspan="2"><div style="background-color:red;color:#fff;text-align:center;width:200px;">已封盘</div></td></tr><tr id="tr_xdbtn" align="center" style="height: 33px; text-align: center; background: url(./static/img/td_but.jpg);"><td colspan="2"><input id="btn_cacel" type="button" value="取消下注" class="button_bg1" @click="cancel_xd()">  <input id="btn_conform" name="btn_conform" class="button_bg1" type="button" value="确定下单" disabled=""></td></tr></tbody></table></td></tr></tbody><tbody></tbody></table></td>
            </tr>
        </tbody></table> -->

        <!-- <table width="100%" cellpadding="0" cellspacing="0" id="tb_xd" style="display: table;">
            <tbody><tr>
                <td id="mtranlist"><table width="100%" cellpadding="0" cellspacing="1" class="DTable" align="center" id="tb_mtranlist" border="0" style="min-width:228px;margin-top: 0px; word-break: break-all; word-wrap: break-word"><tbody><tr style="height: 33px; text-align: left; background: url(./static/img/tb_bg.jpg); color: Black; font-size: 14px;"><td colspan="2" nowrap="" align="center" id="td_mtranList_title"><span style="font-size: 14px; font-weight: bold;">下注结果反馈</span></td></tr><tr><td width="70px" align="center" style="line-height: 17px;" class="t_td_caption_1">会员帐号</td><td align="left">njnj0055(D)盘</td></tr><tr><td width="70px" align="center" style="line-height: 17px;" class="t_td_caption_1">可用金额</td><td align="left"><span name="allowprice">100</span></td></tr><tr id="tr_print" style="display: table-row;"><td colspan="2" style="height: 33px; text-align: center; background: url(./static/img/td_but.jpg);"><input type="button" value="打 印" class="button_bg1" @click="OrderPrint()">&nbsp;<input type="button" value="返 回" class="button_bg1" @click="cancel_xd()"></td></tr><tr style="height:20px;line-height:20px;"><td colspan="2" align="center" id="Current_Round" style="font-size: 14px;height:20px;line-height:20px; font-weight: bold;">11070949期</td></tr><tr><td colspan="2" align="center" id="Current_XiaZhu">非交易时间,不允许下注!</td></tr><tr><td align="center">下注笔数</td><td align="left" style="padding-left:5px">2 笔</td></tr><tr><td align="center">合计注额</td><td align="left" style="padding-left:5px">￥ 4</td></tr></tbody></table></td>
            </tr>
        </tbody></table> -->




        <table v-if="showNumpage == 4" width="100%" cellpadding="0" cellspacing="0" id="tb_xd_single_lianma">
            <tbody>
                <tr>
                    <td id="td_mtransingle_lianma"></td>
                </tr>
            </tbody>
        </table>
    </div>



    <!-- <tbody id="tbodd_Normal"><tr><td colspan="2"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="min-width:228px; word-break: break-all; word-wrap: break-word;"><tbody><tr style="height:16px;line-height:16px;"><td colspan="2" align="center" style="height:16px;line-height:16px;color:green;font-weight:bolder;">20190605-037 期</td></tr> <tr><td colspan="2" class="tdredbold"><font color="blue">第一球大小 大 </font><font color="black">@</font> 1.9879</td></tr></tbody></table></td></tr><tr><td class="t_td_caption_1">下注金额：</td><td align="left" style="padding-left:5px"><input id="txtprice" style="width: 87px" type="text" onkeyup="value=value.replace(/[^\d]/g,'');winchange(1.9879,-1);"></td></tr><tr><td class="t_td_caption_1">可赢金额：</td><td align="left" style="padding-left:5px"><span id="winprice" style="color:red"></span>&nbsp;</td></tr><tr><td class="t_td_caption_1">最高派彩：</td><td align="left" style="padding-left:5px">5000000</td></tr><tr id="tr_xdbtn" align="center" style="height: 33px; text-align: center; background: url(./static/img/td_but.jpg);"><td colspan="2"><input id="btn_cacel" type="button" value="取消下注" class="button_bg1" @click="cancel_xd()">  <input id="btn_conform" name="btn_conform" class="button_bg1" type="button" value="确定下单" @click="click_conformT(6,'A','210,第一球大小,1,大,1.9879','210:1',1,0)"></td></tr><tr id="tr_xdzhong" align="center" style="display:none;height: 33px; text-align: center; background: url(./static/img/td_but.jpg);"><td colspan="2"><span style="color:red">下注中,请等待。。。</span></td><td></td></tr></tbody> -->

<!-- <div @click="print('daying')">打印</div> -->


    <!-- <div class="leftList">
      <div id="userInfo" class="userInfo">
        <p class="title">
          账户信息
          <a title="刷新" class="refresh" @click="getcUserInfo()">
            <i class="icon-refresh"></i>
          </a>
        </p> 
        <div class="info">
          <div class="info-box">
            <p><label>账户：</label><span>{{userInfo.username}}</span>({{userInfo.handicap}}盘)</p> 
            <p><label>现金余额：</label>{{userInfo.cashBalance}}</p> 
            <p><label>锁定金额：</label><span style="color: #f42222;">{{userInfo.lockBalance}}</span></p> 
            <p><label>已下金额：</label><span style="color: #f42222;">{{userInfo.alreadyBalance}}</span></p>
          </div> 
          <div class="login-out">
            <div><el-button class="loginoutbtn" type="primary" size="mini" @click="exit()">登出</el-button></div>
            <div><el-button class="changepassbtn" type="primary" size="mini" @click="toUpdatePass">修改密码</el-button></div>
          </div>
          <div class="jinbibg"></div>
        </div>
      </div>
      <div class="long-dragon">
        <div class="gonggaotab">
          <a>公告</a>
        </div>
        <div class="cont">
          <div class="gonggaocont">
            <p v-if="userInfo.notice">{{userInfo.notice}}</p>
            <p v-else>暂无公告</p>
          </div>
        </div>
      </div>
      <div class="long-dragon">
        <div class="tabmenuPa  active">
          <a>长龙排行榜</a>
        </div>
        <div @click="openPrize" class="tabmenu openPrize active">
          <a>连续开奖</a>
        </div>
        <div @click="noOpenPrize" class="tabmenu noOpenPrize">
          <a>连续未开</a>
        </div>
        <div class="cont">
          <div class="sum">
            <div class="table">
              <table v-if="showOpen">
                <tr v-for="(item,index) in openPrizeList">
                  <td class="type"></td> 
                  <td class="name"><a>{{item.content}}</a></td> 
                  <td class="period">{{item.num}} 期</td>
                </tr>
              </table>
              <table v-if="!showOpen">
                <tr v-for="(item,index) in noOpenPrizeList">
                  <td class="type"></td> 
                  <td class="name"><a>{{item.content}}</a></td> 
                  <td class="period">{{item.num}} 期</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- <el-dialog
      title="修改密码"
      :visible.sync="orderOddsVisible"
      center>
      
        <div class="popup-body" style="max-height: 300px;">
          <div class="default-list">
            <div class="table">
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="旧密码：" prop="oldPassWrod">
                  <el-input size="mini" type="password" v-model="ruleForm.oldPassWrod"></el-input>
                </el-form-item>
                <el-form-item label="新密码：" prop="newPassWord">
                  <el-input size="mini" type="password" v-model="ruleForm.newPassWord"></el-input>
                </el-form-item>
                <el-form-item label="确认密码：" prop="newPassWordDb">
                  <el-input size="mini" type="password" v-model="ruleForm.newPassWordDb"></el-input>
                </el-form-item>
                <el-form-item style="text-align: center;">
                  <el-button size="mini" @click="orderOddsVisible = false">取 消</el-button>
                  <el-button size="mini" type="primary" @click="updatePassWord('ruleForm')">确 定</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div> 

    </el-dialog> -->

    <div tabindex="-1" class="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front ui-draggable ui-dialog-buttons"  style="position: absolute; height: auto; width: 400px;  z-index: 101;" v-if="orderOddsVisible" id="ui-dialog">
      <div class="ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix ui-draggable-handle">
        <span id="ui-id-1" class="ui-dialog-title">&nbsp;</span>
        <button type="button" class="ui-button ui-corner-all ui-widget ui-button-icon-only ui-dialog-titlebar-close" title="Close" @click="cancelOdd()">
          <span class="ui-button-icon ui-icon ui-icon-closethick"></span>
          <span class="ui-button-icon-space"> </span>
          Close
        </button>
        <a href="#" class="ui-dialog-titlebar-max ui-corner-all" role="button" style="display: none;">
          <span class="ui-icon ui-icon-newwin"></span>
        </a>
      </div>

        <div id="dialog_win" style="margin: 0px; padding: 0px; width: auto; min-height: 79px; max-height: none; height: auto;" class="ui-dialog-content ui-widget-content">
            <div id="div_msg_win" style="margin:0; padding: 10px 10px 0px 10px; text-align:left; color:#000;max-height:550px">

              <template v-if="hasError">
                {{dialogMessage}}
              </template>
            </div>
        </div>

      <div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
        <div class="ui-dialog-buttonset">

          <template v-if="hasError">
            <button type="button" class="ui-button ui-corner-all ui-widget" @click="cancelOdd()">关闭</button>
          </template>
          <template v-else>
            <button type="button" class="ui-button ui-corner-all ui-widget" @click="orderSub()">确定</button>
            <button type="button" class="ui-button ui-corner-all ui-widget" @click="cancelOdd()">取消</button>
          </template>
        </div>
      </div>


    </div>

    <div class="ui-widget-overlay ui-front" style="z-index: 100;" v-if="orderOddsVisible"></div>


    <div tabindex="-1" role="dialog" class="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front ui-draggable" style="position: absolute; height: auto;width: 720px;z-index: 101;"  v-if="orderOddsVisible2" id="ui-dialog">
      <div class="ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix ui-draggable-handle">
        <span id="ui-id-1" class="ui-dialog-title">信息</span>

        <button type="button" class="ui-button ui-corner-all ui-widget ui-button-icon-only ui-dialog-titlebar-close" title="Close" @click="orderOddsVisible2 = false">
          <span class="ui-button-icon ui-icon ui-icon-closethick"></span>
          <span class="ui-button-icon-space"> </span>
          Close
        </button>

        <a href="#" class="ui-dialog-titlebar-max ui-corner-all" role="button" style="display: none;">
          <span class="ui-icon ui-icon-newwin"></span>
        </a>
      </div>
      <div id="dialog_win" style="margin: 0px; padding: 0px; width: auto; min-height: 0px; max-height: none; height: 245px;" class="ui-dialog-content ui-widget-content">
        <div id="div_msg_win" style="margin:0; padding: 10px 10px 0px 10px; text-align:left; color:#000;max-height:550px">
          <div style="background-image: url(./static/img/tb_bg.jpg); line-height: 24px; font-weight:bold; color:#4a1a04; height:24px; width:680px; border:1px solid #e9a884; margin:2px auto 0px;">
            
          </div>
          <div style="width:680px; border-color:#e9a884; border-style:solid; border-width:0px 1px 1px; height:210px; overflow:auto; margin:0px auto;">
            <div style="width:600px; margin:5px auto 0px; word-break:break-all; word-wrap:break-word; padding-left:20px;">
              <p style="text-indent:-20px; line-height:24px; color:#4a1a04;">
                {{dialogMessage}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="ui-widget-overlay ui-front" style="z-index: 100;" v-if="orderOddsVisible2"></div>


  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    let vm = this;
    return {
      totalMoney: '',
      hasError: true,
      toLeftOdd: false,
      isOpenOdds: true,
      showNumpage: 1,
      orderDataList: [],
      kuaijiePay: false,
      orderList: [],
      orderDataObj: {},
      maxPaiCai: 5000000,
      moneyOrder: '',
      orderDatas: {
          periodsId:'',//投注期数ID
          bocaiTypeId:'',//投注博彩ID
          bocaiTypeName:'',//投注博彩名称
          bocaiCategory1Id:'',//投注博彩分类1ID
          bocaiCategory1Name:'',//投注博彩分类1名称
          orderBetMoneySum:0,//投注总和
          cuserId:'',//当前登录ID
          list:[]
        },
      dialogMessage: '',

      showOpen: true,
      orderOddsVisible2: false,
      orderOddsVisible: false

    }
  },
  computed: {
    ...mapGetters({
        bocaiInfoData: 'getbocaiInfoData',
        bocaiName: 'getbocaiName',
        bocaiCategory: 'getbocaiCategory',
        userInfo: 'getuserInfo',
        bocaiTypeId: 'getbocaiTypeId',
        curPeriods: 'getcurPeriods',
        isOdding: 'getisOdding',
        orderDatasShow: 'getorderDatasShow'
    }),
    keyongBalance() {
        return this.userInfo ? (this.userInfo.cashBalance*1 + this.userInfo.alreadyBalance*1).toFixed(3) : 0;
    }

  },
  async created() {
    this.getnotice();
  },
  mounted(){
        bus.$on('showleftMessage', (str) => {
        this.dialogMessage = str; 
        this.orderOddsVisible = true;
      });
      bus.$on('toleftShow', (num,str) => {
        this.showNumpage = num;
        this.dialogMessage = str; 
        this.orderOddsVisible = true;
      });
      bus.$on('isOpenOdds', (data) => {
        this.isOpenOdds = data;
      });
      bus.$on('gettoLeftOdd', (itemPa,item,ids) => {
        this.showNumpage = 3;

        this.moneyOrder = '';
        this.orderTd(itemPa,item,ids);
      });
      bus.$on('getorderList', (orderList,totalMoney) => {

        console.log('orderList',orderList);
        this.orderList = orderList;
        this.totalMoney = totalMoney;
        this.showNumpage = 2;
      });

  },
  methods: {
    print(myDiv){
           //  var body = document.body.innerHTML;//先获取当前页的html代码

           //  console.log('body',body);

           // document.body.innerHTML = document.querySelector(dom).innerHTML;//需要打印的页面
           // window.print();
           // document.body.innerHTML =body;//打印完成之后，还原界面

          var newstr = document.getElementById(myDiv).innerHTML;
          var oldstr = document.body.innerHTML; 
          document.body.innerHTML = newstr; 
          window.print(); 
          document.body.innerHTML = oldstr; 
          return false; 

       },

    cancelOdd() {
        this.orderOddsVisible = false;
        store.commit('updateisOdding', false);
      },
    async getnotice() {

      let res = await this.$get(`${window.url}/api/notice`);

          if(res.code===200){

            this.dialogMessage = res.data.content;


            this.orderOddsVisible2 = true;

          } else {

          }

    },
    cancel_xd() {
        this.showNumpage = 1;
    },
    orderOddsTo() {

        console.log('userInfo',this.userInfo);

        let reg = /^[\u2E80-\u9FFF]+$/;
        if(reg.test(this.moneyOrder*1) || this.moneyOrder == ''){
          this.dialogMessage = '金额值必须是数值型数据';  
          this.orderOddsVisible = true;
        } else if(this.moneyOrder*1 > this.userInfo.cashBalance*1) {
            this.showNumpage = 33;
            this.dialogMessage = '超过您的额度,无法下注,请联系上级代理';  
            this.orderOddsVisible = true;
        } else if(this.curPeriods != this.bocaiInfoData.bocaiPeriods) {
            this.showNumpage = 33;
            this.dialogMessage = '指定期数为非交易状态!';  
            this.orderOddsVisible = true;
        } else if(!this.isOpenOdds) {
            this.showNumpage = 33;
            this.dialogMessage = '非交易时间,不允许下注!';  
            this.orderOddsVisible = true;
        } else if(this.userInfo.isFrozen == 1) {
            this.showNumpage = 33;
            this.dialogMessage = '该帐号或上级代理被禁用或暂停下注';  
            this.orderOddsVisible = true;
        } else {
            this.orderDataObj.normalMoney = this.moneyOrder*1;

            let boon =confirm("确认下注吗？");
            if(boon==true) {
                this.orderOddsTo2();
            } else if(boon==false) {
                
            }

        }

    },
    orderOddsTo2() {


        //console.log('this.orderDataList',this.orderDataList);

        //console.log('this.moneyOrder',this.moneyOrder);

          this.orderList = [];

          //console.log('this.orderDataObj',this.orderDataObj);

        if(this.curPeriods != this.bocaiInfoData.bocaiPeriods) {
            this.showNumpage = 33;
            this.dialogMessage = '指定期数为非交易状态!';  
            this.orderOddsVisible = true;
        } else if(!this.isOpenOdds) {
            this.showNumpage = 33;
            this.dialogMessage = '非交易时间,不允许下注!';  
            this.orderOddsVisible = true;
        } else if(!this.kuaijiePay) {

                let obj = {};

                if(this.orderDataObj.bocaiValue == '') {
                    // obj.oddNames = this.orderDataObj.bocaiCategory2Name + '  ' + this.orderDataObj.bocaiOddName,
                    obj.bocaiCategory2Name = this.orderDataObj.bocaiCategory2Name;
                    obj.bocaiOddName = this.orderDataObj.bocaiOddName;

                    obj.bocaiOdds = this.orderDataObj.bocaiOdds,
                    obj.betsMoney = this.orderDataObj.normalMoney
                } else {
                    // obj.oddNames = this.orderDataObj.bocaiOddName + '  ' + this.orderDataObj.bocaiValue,
                    obj.bocaiValue = this.orderDataObj.bocaiValue;
                    obj.bocaiOddName = this.orderDataObj.bocaiOddName;

                    obj.bocaiOdds = this.orderDataObj.bocaiOdds,
                    obj.betsMoney = this.orderDataObj.normalMoney
                }

                this.orderList.push(obj);

           
              this.orderSub();
            

            //console.log('this.orderList',this.orderList);

          }

      },
    async orderSub() {

        let that = this;

        store.commit('updateisOdding',true);

          console.log('this.bocaiTypeName',this.bocaiName);

          console.log('this.bocaiInfoData',this.bocaiInfoData);
          console.log('this.bocaiInfoData',this.bocaiInfoData);


          let timeNum = this.$timestampToms(new Date().getTime() + this.differTime);

          console.log('timeNum',timeNum);


              this.orderDatas.list = [];

              this.orderDatas.periodsId = this.bocaiInfoData.bocaiPeriodsId;
              this.orderDatas.bocaiTypeId = this.bocaiTypeId;
              this.orderDatas.bocaiTypeName = this.bocaiName;
              this.orderDatas.bocaiCategory1Id = this.bocaiCategory.id;
              this.orderDatas.bocaiCategory1Name = this.bocaiCategory.name;
              this.orderDatas.orderBetMoneySum = this.moneyOrder*1;
              this.orderDatas.cuserId = this.userInfo.id;

              for(let n in this.orderList) {
                let obj = {
                  bocaiCategory2Id: this.orderDataObj.bocaiCategory2Id,//8225,//投注博彩分类2ID
                  bocaiCategory2Name: this.orderDataObj.bocaiCategory2Name,//"混合",//投注博彩分类2名称
                  bocaiOddId: this.orderDataObj.bocaiOddId,//5543,//投注博彩赔率ID
                  bocaiOddName: this.orderDataObj.bocaiOddName,//"大",//投注博彩赔率名称
                  bocaiValue: this.orderDataObj.bocaiValue,//投注内容,六合彩连肖/连尾
                  betsMoney: +this.orderList[n].betsMoney,//10000,//一般模式下，选择的金额
                  bocaiOdds: this.orderDataObj.bocaiOdds,//1.90//赔率
                  dewaterId: this.orderDataObj.dewaterId, //退水ID
                  orderNum: timeNum+n
                }
                this.orderDatas.list.push(obj);
              }

              console.log('this.orderDatas',this.orderDatas);

              this.orderOddsVisible = false;
              

                const loading = this.$loading({
                    lock: true,
                    background: 'rgba(0, 0, 0, 0.7)'
                  });
                  await that.$post(`${window.url}/api/orderSub`,that.orderDatas).then((res) => {
                    that.$handelResponse(res, (result) => {
                    loading.close();
                      if(result.code===200){
                        //更新用户信息
                        store.commit('updateorderDatasShow',that.orderDatas.list);
                        bus.$emit('getcUserInfo', ''); 
                        this.totalMoney = this.moneyOrder;
                        this.showNumpage = 2;
                        that.orderDatas.list = [];

                        bus.$emit('gotoreset','');
                      }
                    })
                  });

          
      },
    orderTd(oddsObj,item,ids) {


      if(this.isOpenOdds) {

        this.orderDataObj = {
              bocaiCategory2Id: oddsObj.id,//8225,//投注博彩分类2ID
              bocaiCategory2Name: oddsObj.name,//"混合",//投注博彩分类2名称
              bocaiOddId: item.oddsId,//5543,//投注博彩赔率ID
              bocaiOddName: item.oddsName,//"大",//投注博彩赔率名称
              bocaiValue:"",//投注内容,六合彩连肖/连尾
              normalMoney: "",//10000,//一般模式下，选择的金额
              orderNormal: !this.kuaijiePay,   //是快捷，还是一般投注
              bocaiOdds: item.odds, //1.90//赔率
              dewaterId: item.dewaterId
          };
          
        }
        
    },
    openPrize() {
      this.showOpen = true;
      $('.openPrize').addClass('active').siblings().removeClass('active');
    },
    noOpenPrize() {
      this.showOpen = false;
      $('.noOpenPrize').addClass('active').siblings().removeClass('active');
    },
    async updatePassWord(formName) {
        let that = this;

          this.$refs[formName].validate(async (valid) => {

          if (valid) {

              let obj = {
                oldPassWrod: this.ruleForm.oldPassWrod,
                newPassWord: this.ruleForm.newPassWord
              }

              let ret = await this.$post(`${window.url}/api/rePassWord`, obj);
              if(ret.code===200) {
                    this.$success('修改密码成功!');
                    this.orderOddsVisible = false;
                  } else {
              }

              this.$refs[formName].resetFields();

          } else {

            return false;
          }
        });
    }
  }
};
</script>
<style scoped lang="less">

#leftpanel {
    font-size: 12px;
    line-height: 20px;
    font-family: Verdana, 宋体, 細明體, 微軟正黑體, Arial, Sans;
    color: #511e02;
    text-align: left;
    margin: 0 auto;
    font-size: 12px;
    scrollbar-face-color: #9ad4fc;
    scrollbar-shadow-color: #006699;
    scrollbar-base-color: #ffffff;
    scrollbar-highlight-color: #006699;
    scrollbar-3dlight-color: #ffffff;
    scrollbar-darkshadow-color: #ffffff;
    scrollbar-track-color: #f8f8f8;
    scrollbar-arrow-color: #006699;

    background-repeat: repeat-y;
    overflow-x: hidden;
    float: left;
    margin: 0px;

    #div_commond {
        margin: 0;
        padding: 0;
    }

    .DTable {
      margin-top: 5px;
      text-align: center;
      font-size: 12px;
      background-color: #e9a884;
    }

    .DTable tr {
      height: 25px;
      background-color: White;
    }

    .t_td_caption_1 {
      HEIGHT: 25px;
      TEXT-ALIGN: center;
      LINE-HEIGHT: 17px;
      BACKGROUND-COLOR: #fdf8f2;
  }

  .t_list_caption {
    BACKGROUND-IMAGE: url(../../../static/img/tb_bg.jpg);
    FONT-WEIGHT: bold;
    COLOR: #000000;
    TEXT-ALIGN: center;
    LINE-HEIGHT: 33px;
  }

  a {
    color: #5E5E5E;
    text-decoration: none;
  }
  .tdredbold {
    color: red;
    font-weight: bolder;
    height: 25px;
    line-height: 25px;
  }
}



</style>
<style lang="less">


</style>
