<template>
  <div id="gameRule" style="margin: 10px 0px 0px;">
    <select id="ddlgame" v-model="cbocai">
      <option v-for="(item,index) in bocaiTypeList" :value="item.bocaiName">{{item.bocaiName}}</option>
    </select>
    <h2>重要声明</h2>
    <ol>
        <li>如果客户怀疑自己的资料被盗用，应立即通知本公司，并更改详细资料，以前的使用者名称及密码将全部无效。 </li>
        <li>客户有责任确保自己的帐户及登入资料的保密性。以使用者名称及密码进行的任何网上投注将被视为有效。 </li>
        <li>公布赔率时出现的任何打字错误或非故意人为失误，本公司保留改正错误和按正确赔率结算投注的权力。您居住所在地的法律有可能规定网路博奕不合法；若此情况属实，本公司将不会批准您使用付帐卡进行交易。 </li>
        <li>每次登入时客户都应该核对自己的帐户结余额。如对余额有任何疑问，请在第一时间内通知本公司。 </li>
        <li>一旦投注被接受，则不得取消或修改。</li>
        <li>所有号码赔率将不时浮动，派彩时的赔率将以确认投注时之赔率为准。</li>
        <li>每注最高投注金额按不同[场次]及[投注项目]及[会员帐号]设定浮动。如投注金额超过上述设定，本公司有权取消超过之投注金额。 </li>
        <li>所有投注都必须在开奖前时间内进行否则投注无效。</li>
        <li>所有投注派彩彩金皆含本金。</li>
    </ol>
    <table border="0" cellpadding="0" cellspacing="0" width="700" class="r_ggno1" v-if="['六合彩','极速六合彩'].findIndex((n) => n==cbocai)>-1">
        <tbody><tr>
            <td align="left" colspan="4" height="29"><strong class="ruletitle r_title"></strong></td>
        </tr>
        <tr>
            <td class="td1" style="width:15px;">&nbsp;</td>
            <td class="td2"></td>
            <td class="td3" colspan="2">
                <div class="visb_1" v-if="cbocai == '六合彩'">『六合彩』每星期搅珠三次，通常于星期二、星期四及非赛马日之星期六或日晚上举行，并由电视台现场直播。</div>
                <div class="visb_33" v-if="cbocai == '极速六合彩'">『极速六合彩』北京时间（GMT+8）每天白天从上午09:00开到次日凌晨04:00，每5分钟开一次奖，本游戏以[赌场摇奖机现场摇奖]为开奖依据。<br><span>如遇不可预期之因素(如摇奖机故障)导致开奖球号不完整，则当期所有投注退组，不计输赢，玩家不得以结果有异议。</span><br><span style="color:red">(友情提醒：为维护连线品质，如果连续三期未投注，视频将会自动关闭。)</span></div>
            </td>
        </tr>
        <tr>
            <td class="td1" style="width:15px;">&nbsp;</td>
            <td class="td2">1.</td>
            <td class="td3" colspan="2" style="color: blue;">以下所有投注皆含本金。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">2.</td>
            <td class="td3" colspan="2" style="color: red;">每期 开奖球数共七粒（包括特码）。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">3.</td>
            <td class="td3" colspan="2">特码</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(1)</td>
            <td class="td4">特码<span class="fblue">单码</span>：当期开出的最后一码为特码。特码页面内投注任意一个号码，并以实时赔率作为派奖依据，买中即获奖。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(2)</td>
            <td class="td4">特码<span class="fblue">单双</span>：特码为双数叫特双，如08、16；为单数叫特单，如21、35<span class="fred">（特码开49号，则视为和）</span>。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(3)</td>
            <td class="td4">特码<span class="fblue">大小</span>：开出之特码范围在（1-24）为特码小，范围在（25-48）为特码大<span class="fred">（特码开49号，则视为和）</span>。</td>
        </tr>
        <tr>
            <td class="td1" style="height: 25px;">&nbsp;</td>
            <td class="td2" style="height: 25px;">&nbsp;</td>
            <td class="td3" style="height: 25px;">(4)</td>
            <td class="td4" style="height: 25px;">特码<span class="fblue">合数单双</span>：以特码个位和十位数字之和来判断，如01、12、32为合单，02、11、33为合双<span class="fred">（特码开49号，则视为和）</span>。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(5)</td>
            <td class="td4">特码<span class="fblue">合数大小</span>：以特码个位数和十位数之和来决定大小，合数大于或等于7为大，小于或等于6为小<span class="fred">（特码开49号，则视为和）</span>。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(6)</td>
            <td class="td4">特码<span class="fblue">尾数大小</span>：以特码尾数若0尾~4尾为小、5尾~9尾为大；如01、32、44为特尾小；如05、18、19为特尾<span class="fred">（特码开49号，则视为和）</span>。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(7)</td>
            <td class="td4">特码<span class="fblue">合尾大小</span>：以特码个位和十位数字之和来判断，尾数大于或等于5为合尾大，如14、24、42；尾数小于或等于4为合尾小，如19、37、49<span class="fred">（特码开25号，则视为和）</span>。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(8)</td>
            <td class="td4">特码<span class="fblue">家禽野兽</span>：开出的特码属于十二生肖中的牛、马、羊、鸡、狗、猪号码为家禽，开出的特码属于十二生肖中的鼠、虎、龙、蛇、兔、猴号码为野兽<span class="fred">（特码开49号，则视为和）</span>。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(9)</td>
            <td class="td4">特码<span class="fblue">天肖地肖</span>：生肖为 牛，兔，龙，马，猪，猴者为天肖，生肖为 鼠，虎，蛇，羊，鸡，狗者为地肖<span class="fred">（特码开49号，则视为和）</span>。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(10)</td>
            <td class="td4">特码<span class="fblue">大肖小肖</span>：生肖为 鼠，牛，虎，兔，龙，蛇者为小肖，生肖为 马，羊，猴，鸡，狗，猪者为大肖<span class="fred">（特码开49号，则视为和）</span>。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(11)</td>
            <td class="td4">特码<span class="fblue">半特</span>：以特码大小与特别号单双游戏为一个投注组合；当期特码开出符合投注组合，即视为中奖；其馀情形视为不中奖<span class="fred">（特码开49号，则视为和）</span>。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(12)</td>
            <td class="td4">特码<span class="fblue">大中小</span>：开出之特码落在1~16为小；17~32为中；33~48为大<span class="fred">（特码开49号，则视为和）</span>。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">4.</td>
            <td class="td3" colspan="2">合肖</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">&nbsp;</td>
            <td class="td4">依合肖类别挑选1到11个生肖（排列如同生肖）为一个组合，并选择开奖号码的特码是否在此组合内，若选择【中】且开奖号码的特码亦在此组合内，则视为中奖。若选择【不中】且开奖号码的特码一不在此组合内，即视为中奖，其余情形视为不中奖<span class="fred">（特码开49号，则视为和）</span>。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">5.</td>
            <td class="td3" colspan="2">正码</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(1)</td>
            <td class="td4">当期开出之前6个号码叫正码。下注号码如在六个正码号码里为中奖。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(2)</td>
            <td class="td4">
                <span class="fblue">正特总和单双</span>（请在“正码”页面中投注）：所有七个开奖号码的分数总和是单数叫（总分单），如分数总和是115、183；分数总和是双数叫（总分双），如分数总和是108、162。假如投注组合符合中奖结果，视为中奖，其馀情形视为不中奖<span class="fred">（此玩法无和局的情况）</span>。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(3)</td>
            <td class="td4">
                <span class="fblue">正特总和大小</span>（请在“正码”页面中投注）：所有七个开奖号码的分数总和大于或等于175为总分大；分数总和小于或等于174为总分小。如开奖号码为02、08、17、28、39、46、25，分数总和是165，则总分小。假如投注组合符合中奖结果，视为中奖，其馀情形视为不中奖<span class="fred">（此玩法无和局的情况）</span>。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">6.</td>
            <td class="td3" colspan="2">正码特</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">&nbsp;</td>
            <td class="td4">指正1特...正6特，下注的正码特与现场滚球开出之正码其开奖顺序及开奖号码相同，视为中奖，如现场滚球第一个正码开奖为18号，下注正1码特为18则视为中奖，其它情况视为不中。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">7.</td>
            <td class="td3" colspan="2">正码1-6</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">&nbsp;</td>
            <td class="td4">当期开出之前6个号码叫正码。第一时间出来的叫正码1，依次为正码2、正码3┅┅正码6（并不以号码大小排序）。正码1、正码2、正码3、正码4、正码5、正码6的大小单双合码和特别号码的大小单双合码规则相同，如正码1为29，则正码1为大，为单；正码2为8，则正码2为小，为双；假如投注组合符合中奖结果，视为中奖，其馀情形视为不中奖<span class="fred">（6个正码中如有号码为49，则单项为和）</span>。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">8.</td>
            <td class="td3" colspan="2">正码过关</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">&nbsp;</td>
            <td class="td4">游戏规则同正码1-6盘势，但须同时投注多项结果，串联成投注组合，只要单期所开出之开奖结果符合您所选定之串联结果，即视为中奖。若其中一项结果不中，则视为不中奖；若其中一项结果为和，其馀结果都中奖的情形，也视为中奖；和的项目赔率以一计算。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">9.</td>
            <td class="td3" colspan="2">特码生肖色波</td>
        </tr>
        <tr>
            <td class="td1" style="height: 206px;">&nbsp;</td>
            <td class="td2" style="height: 206px;">&nbsp;</td>
            <td class="td3" style="height: 206px;">(1)</td>
            <td class="td4" style="height: 206px;">特码<span class="fblue">生肖</span>：生肖顺序为鼠&gt;牛&gt;虎&gt;兔&gt;龙&gt;蛇&gt;马&gt;羊&gt;猴&gt;鸡&gt;狗&gt;猪，假如今年是牛年，就以牛为开始，依顺序将49个号码分为12个生肖（如下），再以生肖下注。<br>
                <table class="table1">
                    <tbody>
                        <tr>
                            <td style="height: 24px;">鼠02，14，26，38</td>
                            <td style="height: 24px;">马08，20，32，44</td>
                        </tr>
                        <tr>
                            <td style="width: 200px;">牛01，13，25，37，49</td>
                            <td>羊07，19，31，43</td>
                        </tr>
                        <tr>
                            <td style="height: 24px;">虎12，24，36，48</td>
                            <td style="height: 24px;">猴06，18，30，42</td>
                        </tr>
                        <tr>
                            <td>兔11，23，35，47</td>
                            <td>鸡05，17，29，41</td>
                        </tr>
                        <tr>
                            <td>龙10，22，34，46</td>
                            <td>狗04，16，28，40</td>
                        </tr>
                        <tr>
                            <td>蛇09，21，33，45</td>
                            <td>猪03，15，27，39</td>
                        </tr>
                    </tbody>
                </table>
                若当期特别号，落在下注生肖范围内，视为中奖<span class="fred">（特码开49亦算输赢，不为和）</span>。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(2)</td>
            <td class="td4">特码<span class="fblue">色波</span>：以特别号的球色下注，开奖的球色与下注的颜色相同，视为中奖，球色号码分布如下：<br>
                <span class="fred">红波∶01，02，07，08，12，13，18，19，23，24，29，30，34，35，40，45，46。</span><br>
                <span class="fblue">蓝波∶03，04，09，10，14，15，20，25，26，31，36，37，41，42，47，48。</span><br>
                <span class="fgreen">绿波∶05，06，11，16，17，21，22，27，28，32，33，38，39，43，44，49。</span></td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">10.</td>
            <td class="td3" colspan="2">连码</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(1)</td>
            <td class="td4">
                <span class="fblue">三全中</span>（可选择多码复式或者胆拖形式进行投注）：所投注的每三个号码为一组合，若三个号码都是开奖号码之正码，视为中奖，其馀情形视为不中奖。如06、07、08三个都是开奖号码之正码，视为中奖，如两个正码加上一个特别号码视为不中奖。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(2)</td>
            <td class="td4">
                <span class="fblue">三中二</span>（可选择多码复式或者胆拖形式进行投注）：所投注的每三个号码为一组合，若其中2个是开奖号码中的正码，即为三中二，视为中奖；若3个都是开奖号码中的正码，即为三中二之中三，其馀情形视为不中奖，如06、07、08为一组合，开奖号码中有06、07两个正码，没有08，即为三中二，按三中二赔付；如开奖号码中有06、07、08三个正码，即为三中二之中三，按中三赔付；如出现1个或没有，视为不中奖。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(3)</td>
            <td class="td4">
                <span class="fblue">二全中</span>（可选择多码复式或者胆拖形式进行投注）：所投注的每二个号码为一组合，二个号码都是开奖号码之正码，视为中奖，其馀情形视为不中奖（含一个正码加一个特别号码之情形）。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(4)</td>
            <td class="td4">
                <span class="fblue">二中特</span>（可选择多码复式或者胆拖形式进行投注）：所投注的每二个号码为一组合，二个号码都是开奖号码之正码，叫二中特之中二；若其中一个是正码，一个是特别号码，叫二中特之中特；其馀情形视为不中奖。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(5)</td>
            <td class="td4">
                <span class="fblue">特串</span>（可选择多码复式或者胆拖形式进行投注）：所投注的每二个号码为一组合，其中一个是正码，一个是特别号码，视为中奖，其馀情形视为不中奖（含二个号码都是正码之情形）。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">11.</td>
            <td class="td3" colspan="2">半波</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">&nbsp;</td>
            <td class="td4">以特码色波和特单，特双，特大，特小为一个投注组合，当期特码开出符合投注组合，即视为中奖；其馀情形视为不中奖<span class="fred">（特码开49号，则视为和）</span>。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">12.</td>
            <td class="td3" colspan="2">连肖</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">&nbsp;</td>
            <td class="td4">挑选1~7生肖（排列如同生肖）为一个组合，当期号码（所有正码与最后开出的特码）坐落于投注时所勾选之生肖组合所属号码内，所勾选之生肖皆至少有中一个号码，则视为中奖，其馀情形视为不中奖。如：投注四肖碰--7个开奖号码中四个生肖都出现则视为中奖<span class="fred">（49亦算输赢，不为和）</span>。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">13.</td>
            <td class="td3" colspan="2">六肖</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">&nbsp;</td>
            <td class="td4">挑选 6个生肖（排列如同生肖）为一个组合，并选择开奖号码的特码 是否在此组合内，若选择【中】且开奖号码的特码亦在此组合内，则视为中奖，若选择【不中】且开奖号码的特码亦不在此组合内，即视为中奖，其余情形视为不中奖<span class="fred">（特码开49号，则视为和）</span>。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">14.</td>
            <td class="td3" colspan="2">一肖尾数</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(1)</td>
            <td class="td4">一肖<span class="fblue">中</span>（请在“一肖尾数”页面中投注）：开奖7个号码之任一码与会员投注的生肖相符合，即为中奖，但不论符合生肖的号码开出一个或多个都只派彩一次<span class="fred">（此玩法49亦算输赢，不为和）</span>。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(2)</td>
            <td class="td4">一肖<span class="fblue">不中</span>（请在“一肖尾数”页面中投注）：开奖7个号码完全不符合会员投注的生肖，即为中奖<span class="fred">（此玩法49亦算输赢，不为和）</span>。</td>
        </tr>
        <tr>
            <td class="td1" style="height: 166px;">&nbsp;</td>
            <td class="td2" style="height: 166px;">&nbsp;</td>
            <td class="td3" style="height: 166px;">&nbsp;</td>
            <td class="td4" style="height: 166px;">假设今年是牛年，则牛为起始生肖，各生肖对应号码如下∶<br>
                <table class="table1">
                    <tbody>
                        <tr>
                            <td>鼠02，14，26，38</td>
                            <td>马08，20，32，44</td>
                        </tr>
                        <tr>
                            <td style="width: 200px;">牛01，13，25，37，49</td>
                            <td>羊07，19，31，43</td>
                        </tr>
                        <tr>
                            <td>虎12，24，36，48</td>
                            <td>猴06，18，30，42</td>
                        </tr>
                        <tr>
                            <td>兔11，23，35，47</td>
                            <td>鸡05，17，29，41</td>
                        </tr>
                        <tr>
                            <td>龙10，22，34，46</td>
                            <td>狗04，16，28，40</td>
                        </tr>
                        <tr>
                            <td>蛇09，21，33，45</td>
                            <td>猪03，15，27，39</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(3)</td>
            <td class="td4">尾数<span class="fblue">中</span>（请在“一肖尾数”页面中投注）：开奖7个号码之任一码尾数与会员投注的号码相符，即为中奖，但不论符合尾数的号码开出一个或多个都只派彩一次。例如∶开奖结果正码是11、31、42、44、35、32特别号码是21，则投注1尾2尾4尾5尾都为中奖，其它尾数都不中奖<span class="fred">（此玩法49亦算输赢，不为和）</span>。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(4)</td>
            <td class="td4">尾数<span class="fblue">不中</span>（请在“一肖尾数”页面中投注）：开奖7个号码的尾数完全不符合会员投注的号码，即为中奖。例如∶开奖结果正码是11、31、42、44、35、32特别号码是21，则投注0尾3尾6尾7尾8尾9尾都为中奖，其它尾数都不中奖<span class="fred">（此玩法49亦算输赢，不为和）</span>。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">&nbsp;</td>
            <td class="td4">
                <table class="table1">
                    <tbody>
                        <tr>
                            <td style="height: 24px;">0尾10，20，30，40</td>
                            <td style="height: 24px;">5尾05，15，25，35，45</td>
                        </tr>
                        <tr>
                            <td style="width: 200px;">1尾01，11，21，31，41</td>
                            <td>6尾06，16，26，36，46</td>
                        </tr>
                        <tr>
                            <td>2尾02，12，22，32，42</td>
                            <td>7尾07，17，27，37，47</td>
                        </tr>
                        <tr>
                            <td>3尾03，13，23，33，43</td>
                            <td>8尾08，18，28，38，48</td>
                        </tr>
                        <tr>
                            <td>4尾04，14，24，34，44</td>
                            <td>9尾09，19，29，39，49</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(5)</td>
            <td class="td4">
                <span class="fblue">总肖</span>（请在“一肖尾数”页面中投注）：指开奖<span class="fred">7个号码中</span>开出的不同生肖总数，与所投注之预计开出之生肖总数符合（不用指定特定生肖），则视为中奖，其馀情形视为不中奖。例如如果当期号码为19，24，12，34，40，39特别号：49总计六个生肖，若选取总肖[6]则为中奖<span class="fred">（此玩法49亦算输赢，不为和）</span>。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(6)</td>
            <td class="td4">
                <span class="fblue">总肖单双</span>（请在“一肖尾数”页面中投注）：指开奖<span class="fred">7个号码中</span>开出的不同生肖总数若为单数则为单，若为双数即为双。例如当期开奖号码为 19、24、12、34、40、39，特码为49总计开出六个生肖，若下注【双】则为中奖。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">15.</td>
            <td class="td3" colspan="2">全不中</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">&nbsp;</td>
            <td class="td4">挑选相应个数的彩球，如本期所开出的<span class="fred">7个号码中</span>个彩球中无一在投注的组合内即视为中奖，其余情形均为不中奖<span class="fred">（此玩法无和局的情况）</span>。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">16.</td>
            <td class="td3" colspan="2">尾数连（中）</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">&nbsp;</td>
            <td class="td4">
                <span class="fred">注：在中奖的情况下，一个尾数有多个开奖的号码，派彩都 跟中一个号码一样！</span></td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(1)</td>
            <td class="td4">四尾连（中）：<br>
                以每四个尾数为一注，每注的每个尾数中如 果都有当期开奖的所有7个号码中对应的尾数，则视为中奖。如果其中一个或多个尾数没有当期开奖的所有7个号 码对应的尾数，则视为不中奖。例如：尾1、尾2、尾3、尾4，是一注，开奖的号码是：2、3、4、5、6、7、8， 那就是不中奖；再例如：尾1、尾2、尾3、尾4，是一注，开奖的号码是：1、2、3、4、5、6、7，那就是中奖。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(2)</td>
            <td class="td4">三尾连（中）：<br>
                以每三个尾数为一注，每注的每个尾数中如果都有当期开奖的所有7个号码中对应的尾数，则视为中奖。如果其 中一个或多个尾数没有当期开奖的所有7个号码对应的尾数，则视为不中奖。例如：尾1、尾2、尾3，是一注，开 奖的号码是：2、3、4、5、6、7、8，那就是不中奖；再例如：尾1、尾2、尾3，是一注，开奖的号码是：1、2、 3、4、5、6、7，那就是中奖。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(3)</td>
            <td class="td4">二尾连（中）：<br>
                以每二个尾数为一注，每注的每个尾数中如果都有当期开奖的所有7个号码中对应的尾数，则视为中奖。如果其 中一个或多个尾数没有当期开奖的所有7个号码对应的尾数，则视为不中奖。例如：尾1、尾2，是一注，开奖的 号码是：2、3、4、5、6、7、8，那就是不中奖；再例如：尾1、尾2，是一注，开奖的号码是：1、2、3、4、5、 6、7，那就是中奖。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">17.</td>
            <td class="td3" colspan="2">尾数连（不中）</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(1)</td>
            <td class="td4">四尾连（不中）：<br>
                以每四个尾数为一注，每注的每个尾数中如果都没有当期开奖的所有7个号码中对应的尾数，则视为中奖。如果 其中一个或多个尾数有当期开奖的所有7个号码对应的尾数，则视为不中奖。例如：尾1、尾2、尾3、尾4，是一 注，开奖的号码是：2、3、4、5、6、7、8，那就是不中奖；再例如：尾1、尾2、尾3、尾4，是一注，开奖的号 码是：5、6、7、8、9、10、20，那就是中奖。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(2)</td>
            <td class="td4">三尾连（不中）：<br>
                以每三个尾数为一注，每注的每个尾数中如果都没有当期开奖的所有7个号码中对应的尾数，则视为中奖。如果 其中一个或多个尾数有当期开奖的所有7个号码对应的尾数，则视为不中奖。例如：尾1、尾2、尾3，是一注，开 奖的号码是：2、3、4、5、6、7、8，那就是不中奖；再例如：尾1、尾2、尾3，是一注，开奖的号码是：5、6、 7、8、9、10、20，那就是中奖。</td>
        </tr>
        <tr>
            <td class="td1">&nbsp;</td>
            <td class="td2">&nbsp;</td>
            <td class="td3">(3)</td>
            <td class="td4">二尾连（不中）：<br>
                以每二个尾数为一注，每注的每个尾数中如果都没有当期开奖的所有7个号码中对应的尾数，则视为中奖。如果 其中一个或多个尾数有当期开奖的所有7个号码对应的尾数，则视为不中奖。例如：尾1、尾2，是一注，开奖的 号码是：2、3、4、5、6、7、8，那就是不中奖；再例如：尾1、尾2，是一注，开奖的号码是：5、6、7、8、9、 10、20，那就是中奖。</td>
        </tr>
    </tbody></table>

    <table border="0" cellpadding="0" cellspacing="0" width="700" class="r_ggno2" v-if="['福彩3D','体彩P3'].findIndex((n) => n==cbocai)>-1">
        <tbody><tr>
            <td align="left" colspan="2" height="29"><strong class="ruletitle r_title"></strong></td>
        </tr>
        <tr id="F3D" class="game_rules">
            <td colspan="2" class="F3D_bg">
                <div class="visb_2" v-if="cbocai == '福彩3D'">『福彩3D』是依照中国福利彩票管理中心发行的 3D 的开奖结果为派彩依据，每天开奖一次。假设 3D 开奖结果为 123，那麽佰位是 1，拾位是 2，个位是 3 (每个位数在开奖时从 0~9 中摇出一个结果)，选号玩法。</div>
                <div class="visb_3" v-if="cbocai == '体彩P3'">『体彩P3』是依照中国体彩管理中心发行的排列三开奖结果为派彩依据，每天开奖一次。假设排列三开奖结果为 123，那麽佰位是 1，拾位是 2，个位是 3 (每个位数在开奖时从 0~9 中摇出一个结果)，选号玩法。</div>
                <ol>
                    <li>一字盘势规则说明
                            <table cellspacing="1">
                                <tbody>
                                    <tr>
                                        <td class="td_title">一字定位</td>
                                        <td>於佰拾个任选一位，自 0~9 任选 1 号进行投注，当开奖结果与所选的定位与号码相同且顺序一致时，即为中奖。</td>
                                    </tr>
                                    <tr>
                                        <td class="td_title">一字组合</td>
                                        <td>0~9 任选 1 号进行投注，当开奖结果佰拾个任一数与所选的号码相同时，即为中奖。</td>
                                    </tr>
                                    <tr>
                                        <td class="td_title">佰/拾/个 大小</td>
                                        <td>0~4 为小，<br>
                                            5~9 为大。</td>
                                    </tr>
                                    <tr>
                                        <td class="td_title">佰/拾/个 单双</td>
                                        <td>1、3、5、7、9 为单，<br>
                                            0、2、4、6、8 为双。</td>
                                    </tr>
                                    <tr>
                                        <td class="td_title">佰/拾/个 质合</td>
                                        <td>1、2、3、5、7 为质数，<br>
                                            0、4、6、8、9 为合数。</td>
                                    </tr>
                                </tbody>
                            </table>
                    </li>
                    <li>二字盘势规则说明
                            <table cellspacing="1">
                                <tbody>
                                    <tr>
                                        <td class="td_title">二字定位</td>
                                        <td>於佰拾个任选二位，自 0~9 任选 2 号进行投注，当开奖结果与所选号码相同且顺序一致时，即为中奖。</td>
                                    </tr>
                                    <tr>
                                        <td class="td_title">二字组合</td>
                                        <td>0~9 任选 2 号进行投注，当开奖结果佰拾个任二数与所选的号码相同时，即为中奖。</td>
                                    </tr>
                                    <tr>
                                        <td class="td_title">佰拾和数</td>
                                        <td>开奖结果佰拾二位数的总和值若与投注佰拾位数字的总和值相同时，即为中奖。</td>
                                    </tr>
                                    <tr>
                                        <td class="td_title">佰个和数</td>
                                        <td>开奖结果佰个二位数的总和值若与投注佰个位数字的总和值相同时，即为中奖。</td>
                                    </tr>
                                    <tr>
                                        <td class="td_title">拾个和数</td>
                                        <td>开奖结果拾个二位数的总和值若与投注拾个位数字的总和值相同时，即为中奖。</td>
                                    </tr>
                                    <tr>
                                        <td class="td_title" rowspan="2">佰拾/佰个/拾个<br>
                                            和数尾数</td>
                                        <td>以开奖号码的总和尾数，作为中奖依据。会员可以选择 0~9 的任一号码。</td>
                                    </tr>
                                    <tr>
                                        <td>例如∶开奖结果为 3、4、5。<br>
                                            佰拾和数尾数∶佰拾总合为 7，尾数为 7。<br>
                                            佰个和数尾数∶佰个总合为 8，尾数为 8。<br>
                                            拾个和数尾数∶拾个总合为 9，尾数为 9。</td>
                                    </tr>
                                    <tr>
                                        <td class="td_title">佰拾/佰个/拾个<br>
                                            和数单双</td>
                                        <td>1、3、5、7、9、11、13、15、17 为单，<br>
                                            0、2、4、6、8、10、12、14、16、18 为双。</td>
                                    </tr>
                                    <tr>
                                        <td class="td_title">佰拾/佰个/拾个<br>
                                            和数尾数大小</td>
                                        <td>0~4 为小，<br>
                                            5~9 为大。</td>
                                    </tr>
                                    <tr>
                                        <td class="td_title">佰拾/佰个/拾个<br>
                                            和数尾数质合</td>
                                        <td>1、2、3、5、7 为质数，<br>
                                            0、4、6、8、9 为合数。</td>
                                    </tr>
                                </tbody>
                            </table>
                    </li>
                    <li>三字盘势规则说明
                            <table cellspacing="1" width="706">
                                <tbody>
                                    <tr>
                                        <td class="td_title">三字定位</td>
                                        <td>於佰拾个位自 0~9 任选 3 号进行投注，当开奖结果与所选号码相同且顺序一致时，即为中奖。</td>
                                    </tr>
                                    <tr>
                                        <td class="td_title">三字组合</td>
                                        <td>自 0~9 号任选 3 个皆相同的号码时 (如 123)，当开奖结果与所选号码相同，即为中奖。</td>
                                    </tr>
                                    <tr>
                                        <td class="td_title">佰拾个和数</td>
                                        <td>开奖结果佰拾个三位数的总和值与若投注佰拾个数字的总和值与相同时，即为中奖。</td>
                                    </tr>
                                    <tr>
                                        <td class="td_title" rowspan="2">佰拾个和数尾数</td>
                                        <td>以开奖号码的总和尾数，作为中奖依据。会员可以选择 0~9 的任一号码。</td>
                                    </tr>
                                    <tr>
                                        <td>例如∶开奖结果为 3、4、5，佰拾个总合为 2，尾数为 2。</td>
                                    </tr>
                                    <tr>
                                        <td class="td_title">佰拾个和数大小</td>
                                        <td>0~13 为小，<br>
                                            14~27 为大。</td>
                                    </tr>
                                    <tr>
                                        <td class="td_title">佰拾个和数单双</td>
                                        <td>1、3、5、7、9、11、13、15、17、19、21、23、25、27 为单，<br>
                                            0、2、4、6、8、10、12、14、16、18、20、22、24、26 为双。</td>
                                    </tr>
                                    <tr>
                                        <td class="td_title">佰拾个和数尾数大小</td>
                                        <td>0~4 为小，<br>
                                            5~9 为大。</td>
                                    </tr>
                                    <tr>
                                        <td class="td_title">佰拾个和数尾数质和</td>
                                        <td>1、2、3、5、7 为质数，<br>
                                            0、4、6、8、9 为合数。</td>
                                    </tr>
                                </tbody>
                            </table>
                    </li>
                    <li>组选三规则说明
                            <table cellspacing="1">
                                <tbody>
                                    <tr>
                                        <td class="td_title" rowspan="3">组选三</td>
                                        <td>会员可以挑选 5~10 个号码，当开奖结果中有且只有两个号码重复，则视为中奖。挑选不同个数的号码有其相对应的赔率。如果是选择 (1、2、3、4、5)，则只要开奖结果中，有出现 1、2、3、4、5 中的任何两个号码，且其中有一个号码重复则中奖。</td>
                                    </tr>
                                    <tr>
                                        <td>例如∶112、344，若是开出豹子则不算中奖。</td>
                                    </tr>
                                    <tr>
                                        <td>备注∶『豹子』为三字同号，例如∶111、222。</td>
                                    </tr>
                                </tbody>
                            </table>
                    </li>
                    <li>组选六规则说明
                            <table cellspacing="1">
                                <tbody>
                                    <tr>
                                        <td class="td_title" rowspan="2">组选六</td>
                                        <td>会员可以挑选 4~8 个号码，当开奖结果都出现在所下注的号码中且没有任何号码重复，则视为中奖。挑选不同个数的号码有其相对应的赔率，中奖赔率以所选号码中的最小赔率计算派彩。</td>
                                    </tr>
                                    <tr>
                                        <td>例如∶如果是选择 1、2、3、4，则开奖结果为 123、124、134、234 都中奖，其他都是不中奖。如 112、133、145、444 等都是不中奖。</td>
                                    </tr>
                                </tbody>
                            </table>
                    </li>
                    <li>复式组合规则说明
                            <table cellspacing="1">
                                <tbody>
                                    <tr>
                                        <td class="td_title" rowspan="2">复式组合</td>
                                        <td>在佰、拾、个中分别选择号码组合。例如选择 3x2x4，即佰位数选 3 个号码，拾位数选 2 个号码，个位数选 4 个号码或选择 3x3x3，如每个位数所选择的号码都对应出现在开奖的结果中，则视为中奖。</td>
                                    </tr>
                                    <tr>
                                        <td>此游戏选号有以下限制∶<br>
                                            1. 每一位数最少要选择 1 个号码，最多选 10 个号码。<br>
                                            2. 三个位数共选取号码数量，最少需选择 9 个号码，最多选 21 个号码。</td>
                                    </tr>
                                </tbody>
                            </table>
                    </li>
                    <li>一字过关盘势规则说明
                            <table cellspacing="1" width="706">
                                <tbody>
                                    <tr>
                                        <td class="td_title" rowspan="2">一字过关</td>
                                        <td>以开奖三个号码之大小、单双、质合作为中奖的依据。</td>
                                    </tr>
                                    <tr>
                                        <td>例如∶开奖结果为 3、4、8，会员若在佰定位下小、拾定位下双、个定位下合，则视为中奖。</td>
                                    </tr>
                                </tbody>
                            </table>
                    </li>
                    <li>跨度盘势规则说明
                            <table cellspacing="1" width="706">
                                <tbody>
                                    <tr>
                                        <td class="td_title" rowspan="2">跨度</td>
                                        <td>以开奖三个号码的最大差距 (跨度)，作为中奖依据。会员可以选择 0~9 的任一跨度。</td>
                                    </tr>
                                    <tr>
                                        <td>例如∶开奖结果为 3、4、8，中奖的跨度为 5。(最大号码 8 减最小号码 3 等於 5。)</td>
                                    </tr>
                                </tbody>
                            </table>
                    </li>
                    <li>其他规则说明∶
                            <table cellspacing="1">
                                <tbody>
                                    <tr>
                                        <td class="td_title" rowspan="2">豹子</td>
                                        <td>中奖号码的个位十位百位数字都相同。</td>
                                    </tr>
                                    <tr>
                                        <td>例如∶中奖号码为 000、111、999 等，中奖号码的个位十位百位数字相同，则投注豹子者视为中奖，其它视为不中奖。</td>
                                    </tr>
                                    <tr>
                                        <td class="td_title" rowspan="2">顺子</td>
                                        <td>中奖号码的个位十位百位数字都相连，不分顺序。(数字 9、0、1 相连)</td>
                                    </tr>
                                    <tr>
                                        <td>例如∶中奖号码为 123、234、901 等，中奖号码个位十位百位数字相连，则投注顺子者视为中奖，其它视为不中奖。</td>
                                    </tr>
                                    <tr>
                                        <td class="td_title" rowspan="2">对子</td>
                                        <td>中奖号码的个位十位百位任意两位数字相同。(不包括豹子)</td>
                                    </tr>
                                    <tr>
                                        <td>例如∶中奖号码为 001，112、696，中奖号码有两位数字相同，则投注对子者视为中奖，其它视为不中奖。</td>
                                    </tr>
                                    <tr>
                                        <td class="td_title" rowspan="2">半顺</td>
                                        <td>中奖号码的个位十位百位任意两位数字相连。(不包括顺子、对子，数字 9、0、1 相连)</td>
                                    </tr>
                                    <tr>
                                        <td>例如∶中奖号码为 125、450、903，中奖号码有两位数字相连，则投注半顺者视为中奖，其它视为不中奖。</td>
                                    </tr>
                                    <tr>
                                        <td class="td_title" rowspan="2">杂六</td>
                                        <td>不包括豹子、对子、顺子、半顺的所有中奖号码。</td>
                                    </tr>
                                    <tr>
                                        <td>例如∶中奖号码为 157，中奖号码位数之间无关联性，则投注杂六者视为中奖，其它视为不中奖。</td>
                                    </tr>
                                    <tr>
                                        <td class="td_title" rowspan="2">准对</td>
                                        <td>从 0~9 这十个数字中，每注只能选择 0~9 其中一个号码下注，投注的号码有开出二个以上即中奖。(不包含豹子)</td>
                                    </tr>
                                    <tr>
                                        <td>例如∶下注 2 号，当开奖号码为 022、202 时，为中奖。开奖号码为 222 时，不算中奖。</td>
                                    </tr>
                                    <tr>
                                        <td class="td_title">不出牌</td>
                                        <td>从 0~9 这十个数字中，每注只能选择 0~9 其中一个号码下注，选择的号码没有开出即算中奖。</td>
                                    </tr>
                                </tbody>
                            </table>
                    </li>
                </ol>
            </td>
        </tr>
    </tbody>
  </table>

    <table border="0" cellpadding="0" cellspacing="0" width="700" class="r_ggno3" v-if="['重庆时时彩','新疆时时彩','极速时时彩','体彩排列五','超级快5','超级快5_3min','超级快5_5min','澳洲幸运5'].findIndex((n) => n==cbocai)>-1">
        <tbody><tr>
            <td align="left" colspan="2" height="29"><strong class="ruletitle r_title">【{{cbocai}}】规则说明</strong></td>
        </tr>
        <tr>
            <td style="width: 15px">&nbsp;</td>
            <td>
                <p class="visb_6" v-if="cbocai == '重庆时时彩'">『重庆时时彩』的投注时间、开奖时间和开奖号码与重庆时时彩完全同步，北京时间（GMT+8）每天白天从上午07:10开到晚上23:50。夜场从00:10开至凌晨03:10，每20分钟开一次奖，每天开奖共计59期。</p>
                <p class="visb_10" v-if="cbocai == '新疆时时彩'">『新疆时时彩』北京时间（GMT+8）每天白天从上午10:00开到晚上23:40；夜场从00:00开至凌晨02:00，每20分钟开一次奖，每天开奖共计48期。</p>
                <p class="visb_23" v-if="cbocai == '极速时时彩'">『极速时时彩』北京时间（GMT+8）每天白天从上午07:30开到晚上23:59。夜场从00:00开至凌晨04:00，每1分钟开一次奖。</p>
                <p class="visb_24" v-if="cbocai == '体彩排列五'">『体彩排列五』每天开奖一次，摇奖过程在公证人员监督下进行，通过电视台播出。其中奖号码为全国联网电脑体育彩票排列5当期摇出的全部中奖号码。</p>
                <p class="visb_27" v-if="cbocai == '超级快5'">『超级快5』北京时间（GMT+8）每天白天从上午09:00开到晚上23:59。夜场从00:01开至凌晨03:59，每2分钟开一次奖。</p>
                <p class="visb_36" v-if="cbocai == '超级快5_3min'">『超级快5_3min』北京时间（GMT+8）每天白天从上午09:02开到晚上23:59。夜场从00:02开至凌晨03:59，每3分钟开一次奖。</p>
                <p class="visb_37" v-if="cbocai == '超级快5_5min'">『超级快5_5min』北京时间（GMT+8）每天白天从上午09:04开到晚上23:59。夜场从00:04开至凌晨03:59，每5分钟开一次奖，每天开奖228期。</p>
                <p class="visb_38" v-if="cbocai == '澳洲幸运5'">『澳洲幸运5』北京时间（GMT+8）每天白天从上午07:34开到晚上23:59。夜场从00:04开至凌晨03:59，每5分钟开一次奖，每天开奖288期。</p>
                <p>
                    具体游戏规则如下:
                </p>
                <ol>
                    <li><b>第一球~第五球</b>
                        <ul>
                            <li><b>第一球特~第五球特</b>：第一球特、第二球特、第三球特、
                    第四球特、第五球特：指下注的每一球特与开出之号码其开奖顺序及开
                    奖号码相同，视为中奖，如第一球开出号码 
                    8，下注第一球为8者视为中奖，其余情形视为不中奖。</li>

                            <li><b>单双大小</b>：根据相应单项投注第一球特 
                                ~ 第五球特开出的球号，判断胜负。

                    <br>
                                <b>大小</b>：根据相应单项投注的第一球特 ~
                            第五球特开出的球号大於或等於5为特码大，小於或等於 
                               4为特码小。
          <br>
                                <b>单双</b>：根据相应单项投注的第一球特 ~
                            第五球特开出的球号为双数叫特双，如2、 
                               6；特码为单数叫特单，如1、 
                               3。
                            </li>
                            <li><b>总和单双大小</b>：
                            <br>
                                <b>大小</b>：根据相应单项投注的第一球特 ~
                            第五球特开出的球号大於或等於23为特码大，小於或等於 
                               22为特码小。
                            <br>
                                <b>单双</b>：根据相应单项投注的第一球特 ~
                            第五球特开出的球号数字总和值是双数为总和双，数字总和值是单数为总和单。</li>
                        </ul>

                        </li><li><b>前三特殊玩法： 豹子 &gt; 顺子 
                                &gt; 对子 &gt; 半顺 
                                &gt; 杂六 </b>。
                <br>
                            <b>豹子</b>：中奖号码的个位十位百位数字都相同。 
                               ----如中奖号码为000、 
                               111、999等，中奖号码的个位十位百位数字相同，则投注豹子者视为中奖，其它视为不中奖。 
                <br>
                            <b>顺子</b>：中奖号码的个位十位百位数字都相连，不分顺序。（数字 
                               9、0、 
                               1相连）----如中奖号码为 
                               123、901、 
                               321、546等，中奖号码个位十位百位数字相连，则投注顺子者视为中奖，其它视为不中奖。 
              <br>
                            <b>对子</b>：中奖号码的个位十位百位任意两位数字相同。（不包括豹子） 
                               ----如中奖号码为001， 
                               112、696，中奖号码有两位数字相同，则投注对子者视为中奖，其它视为不中奖。如果开奖号码为豹子 
                               ,则对子视为不中奖。<br>
                            如中奖号码为001， 
                               112、696，中奖号码有两位数字相同，则投注对子者视为中奖，其它视为不中奖。 
                            <br>
                            <b>半顺</b>：中奖号码的个位十位百位任意两位数字相连，不分顺序。（不包括顺子、对子。） 
                               ----如中奖号码为125、 
                               540、390、 
                               706，中奖号码有两位数字相连，则投注半顺者视为中奖，其它视为不中奖。如果开奖号码为顺子、对子 
                               ,则半顺视为不中奖。--如中奖号码为 
                               123、901、 
                               556、233，视为不中奖。 
              <br>
                            <b>杂六</b>：不包括豹子、对子、顺子、半顺的所有中奖号码。 
                               ----如中奖号码为157，中奖号码位数之间无关联性，则投注杂六者视为中奖，其它视为不中奖。</li>


                        <li><b>中三特殊玩法： 豹子 &gt; 顺子 
                                &gt; 对子 &gt; 半顺 
                                &gt; 杂六 </b>。 
                            
                <br>
                            <b>豹子</b>：中奖号码的十位百位千位数字都相同。 
                               ----如中奖号码为000、 
                               111、999等，中奖号码的十位百位千位数字相同，则投注豹子者视为中奖，其它视为不中奖。 
                            
                <br>
                            <b>顺子</b>：中奖号码的十位百位千位数字都相连，不分顺序。（数字 
                               9、0、 
                               1相连）----如中奖号码为 
                               123、901、 
                               321、546等，中奖号码十位百位千位数字相连，则投注顺子者视为中奖，其它视为不中奖。 
                            
                            <br>
                            <b>对子</b>：中奖号码的十位百位千位任意两位数字相同。（不包括豹子） 
                               ----如中奖号码为001， 
                               112、696，中奖号码有两位数字相同，则投注对子者视为中奖，其它视为不中奖如果开奖号码为豹子 
                               ,则对子视为不中奖。。<br>
                            如中奖号码为001， 
                               112、696，中奖号码有两位数字相同，则投注对子者视为中奖，其它视为不中奖。 
                            
                            <br>
                            <b>半顺</b>：中奖号码的十位百位千位任意两位数字相连，不分顺序。（不包括顺子、对子，数字 
                               9、0、 
                               1相连）----如中奖号码为 
                               125、540、 
                               390、706，中奖号码有两位数字相连，则投注半顺者视为中奖，其它视为不中奖。如果开奖号码为顺子、对子 
                               ,则半顺视为不中奖。--如中奖号码为 
                               123、901、 
                               556、233，视为不中奖。 
                            
                            <br>
                            <b>杂六</b>：不包括豹子、对子、顺子、半顺的所有中奖号码。 
                               ----如中奖十位百位千位号码为157，中奖号码位数之间无关联性，则投注杂六者视为中奖，其它视为不中奖。</li>
                        <li><b>后三特殊玩法： 豹子 &gt; 顺子 &gt; 对子 &gt; 半顺  &gt; 杂六 </b>。                             
                            <br>
                            <b>豹子</b>：中奖号码的百位千位万位数字都相同。 
                               ----如中奖号码为000、 
                               111、999等，中奖号码的百位千位万位数字相同，则投注豹子者视为中奖，其它视为不中奖。 
                            <br>
                            <b>顺子</b>：中奖号码的百位千位万位数字都相连，不分顺序。（数字 
                               9、0、 
                               1相连）----如中奖号码为 
                               123、901、 
                               321、546等，中奖号码百位千位万位数字相连，则投注顺子者视为中奖，其它视为不中奖。 
                            <br>
                            <b>对子</b>：中奖号码的百位千位万位任意两位数字相同。（不包括豹子） 
                               ----如中奖号码为001， 
                               112、696，中奖号码有两位数字相同，则投注对子者视为中奖，其它视为不中奖。如果开奖号码为豹子 
                               ,则对子视为不中奖。<br>
                            如中奖号码为001， 
                               112、696，中奖号码有两位数字相同，则投注对子者视为中奖，其它视为不中奖。 
                            <br>
                            <b>半顺</b>：中奖号码的百位千位万位任意两位数字相连，不分顺序。（不包括顺子、对子，数字 
                               9、0、 
                               1相连）----如中奖号码为 
                               125、540、 
                               390、706，中奖号码有两位数字相连，则投注半顺者视为中奖，其它视为不中奖。如果开奖号码为顺子、对子 
                               ,则半顺视为不中奖。--如中奖号码为 
                               123、901、 
                               556、233，视为不中奖。 
                            <br>
                            <b>杂六</b>：不包括豹子、对子、顺子、半顺的所有中奖号码。 
                               ----如中奖百位千位万位号码为157，中奖号码位数之间无关联性，则投注杂六者视为中奖，其它视为不中奖。 </li>
                        <li><b>龙虎和特殊玩法： 龙 &gt; 虎 
                                &gt; 和 （0为最小， 
                               9为最大）</b>。 
                            <br>
                            <b>龙</b>：开出之号码第一球（万位）的中奖号码大于第五球（个位）的中奖号码，如出和局为打和。如 
                            第一球开出4 第五球开出2；第一球开出 
                               9 第五球开出8；第一球开出 
                               5 第五球开出1...中奖为龙。 
                            <br>
                            <b>虎</b>：开出之号码第一球（万位）的中奖号码小于第五球（个位）的中奖号码，如出和局为打和。如 
                            第一球开出7 第五球开出9；第一球开出 
                               3 第五球开出5；第一球开出 
                               5 第五球开出8...中奖为虎。 
                            <br>
                            <b>和</b>：开出之号码第一球（万位）的中奖号码等于第五球（个位）的中奖号码，例如开出结果： 
                               2***2则投注和局者视为中奖，其它视为不中奖。</li>
                        <li><b>牛牛：</b>。 
                            <br>
                            以开出之五个号码为基础,组合任三个号码成0或10的倍数取剩余两个号码之和为点数(大于10时减10作为对奖基准,例如:00017为8点,02818为9点,99219.88400皆为10点俗称牛牛;01234,12589因任三个数都无法组合成0或10的倍数此局视为无点，当五个号码相同时，例：11111…99999视为「无点」，00000则视为「牛牛」。 
                        </li>
                        <li><b>牛牛双面：</b>。 
                            <br>
                            <b>牛大(6、7、8、9、10) ，牛小 (1、2、3、4、5 )  </b>：若开出的点数在大或小区则中奖。无点(无牛)则视为不中奖。                         
                            <br>
                            <b>牛单(1、3、5、7、9 ) ，牛双 (2、4、6、8、10) </b>：若开出的点数在单或双区则中奖。无点(无牛)则视为不中奖。                         
                        </li>
                        <li><b>梭哈：</b>。 
                            <br>
                            <b>五梅</b>：开出的五个号码全部相同,例如:00000,11111,22222。
                            <br>
                            <b>四带一</b>：开出的五个号码中四个相同，例如:10000,11110,22221,33331,44442,55552。
                            <br>
                            <b>葫芦</b>：开出的五个号码中三个相同(三条)及两个号码相同(一对)，例如:11222,22333,33444,11000。
                            <br>
                            <b>三条</b>：开出的五个号码中三个相同及剩下的两个号码不相同，例如:12333,01222,34555,66678。
                            <br>
                            <b>顺子</b>：开出的五个号码从小到大排列为
           01234,12345,23456,34567,45678,56789,06789,01789,01289,01239。
                            <br>
                            <b>两对</b>：开出的五个号码中有两组相同，例如:00112,11223,33445,66779。
                            <br>
                            <b>单对</b>：开出的五个号码中有且只有一组相同,例如:00123,00789,55678。
                            <br>
                            <b>五不靠</b>：开出的五个号码从小到大排列为13579,02468。
                            <br>
                            <b>散号</b>：开出的五个号码没有任何相同或相连关系的，例如:12356,01345,34678,12579。
                        </li>
                        <li><b>合数单双：</b>。 
                            <br>
                            以开出之五个号码自第一位至最后一位依序为万、千、百、十、个,取任两个号码相加合数下注<br>
                            合数单、双：合数号码为双数叫双，如8、16；合数号码为单数叫单，如11、5。 
                    <br>
                            合数尾大、尾小：合数号码尾数大于或等于5为大，小于或等于4为小。 
                        </li>
                </ol>
            </td>
        </tr>
    </tbody></table>

    <table border="0" cellpadding="0" cellspacing="0" width="700" class="r_ggno4" v-if="['广东快乐十分','幸运农场','澳洲幸运8'].findIndex((n) => n==cbocai)>-1">
        <tbody><tr>
            <td align="left" colspan="2" height="29"><strong class="ruletitle r_title"></strong></td>
        </tr>
        <tr>
            <td style="width: 15px">&nbsp;</td>
            <td>
                <p class="visb_8" v-if="cbocai == '广东快乐十分'">『广东快乐十分』北京时间（GMT+8）每天白天从上午09:01开到晚上23:01，每20分钟开一次奖，每天开奖共计42期。 </p>
                <p class="visb_20" v-if="cbocai == '幸运农场'">『幸运农场』北京时间（GMT+8）每天白天从上午07:00开到晚上23:40。夜场从00:00开至凌晨03:00，每20分钟开一次奖，每天开奖共计59期。</p>
                <p class="visb_39" v-if="cbocai == '澳洲幸运8'">『澳洲幸运8』北京时间（GMT+8）每天白天从上午07:34开到晚上23:59。夜场从00:04开至凌晨03:59，每5分钟开一次奖，每天开奖288期。</p>
                <ul>
                    <li><b>两面：</b>指单、双；大、小、尾大、尾小。 
                    <br>
                        单、双：号码为双数叫双，如8、16；号码为单数叫单，如19、5。 
                    <br>
                        大、小：开出之号码大于或等于11为大，小于或等于10为小。 
                    <br>
                        尾大、尾小：开出之尾数大于或等于5为尾大，小于或等于4为尾小。 
                    <br>
                        每一个号码为一投注组合，假如投注号码为开奖号码并在所投的球位置，视为中奖，其余情形视为不中奖。 
                    </li>
                    <li><b>中发白</b>

                        <br>
                        中：开出之号码为01、02、03、04、05、06、07
                    <br>
                        发：开出之号码为08、09、10、11、12、13、14
                    <br>
                        白：开出之号码为15、16、17、18、19、20
                    </li>
                    <li><b>方位</b>
                        <br>
                        东：开出之号码为01、05、09、13、17
                    <br>
                        南：开出之号码为02、06、10、14、18
                    <br>
                        西：开出之号码为03、07、11、15、19
                    <br>
                        北：开出之号码为04、08、12、16、20
                    </li>
                    <li><b>总和单双</b>：所有8个开奖号码的数字总和值是单数为总和单，如数字总和值是
                        41、51；所有8个开奖号码的数字总和值是双数为总和双，如数字总和是42、80；假如投注组合符合中奖结果，视为中奖，其余情形视为不中奖。 </li>
                    <li><b>总和大小</b>：所有8个开奖号码的数字总和值85到132为总大；所有 
                           8个开奖号码的数字总和值36到 
                           83为总分小；所有8个开奖号码的数字总和值为 
                           84打和；如开奖号码为01、 
                           20、02、 
                           08、17、 
                           09、11，数字总和是 
                           68，则总分小。假如投注组合符合中奖结果，视为中奖，其余情形视为不中奖，打和不计算结果。 
                    </li>
                    <li><b>总尾大小</b>：所有8个开奖号码的数字总和数值的个位数大于或等于 
                           5为总尾大，小于或等于4为总尾小；假如投注组合符合中奖结果，视为中奖，其余情形视为不中奖。 
                    </li>
                    <li><b>选二任选</b>：指从01至 
                           20中任意选择2个号码对开奖号码中任意 
                           2个位置的投注。 投注号码与开奖号码中任意2个位置的号码相符，即中奖。 
                    </li>
                    <li><b>选二连组</b>：指从01至 
                           20中任意选择2个号码对开奖号码中按开奖顺序出现的 
                           2个连续位置的投注。 投注号码与开奖号码中按开奖顺序出现的 
                           2个连续位置的号码相符（顺序不限），即中奖。 
                    </li>
                    <li><b>选二连直</b>：指从01至 
                           20中任意选择2个号码对开奖号码中按开奖顺序出现的 
                           2个连续位置按位相符的投注。 投注号码与开奖号码中按开奖顺序出现的 
                           2个连续位置的号码按位相符，即中奖。 
                    </li>
                    <li><b>选三任选</b>：指从01至 
                           20中任意选择3个号码对开奖号码中任意 
                           3个位置的投注。 投注号码与开奖号码中任意3个位置的号码相符，即中奖。 
                    </li>
                    <li><b>选三前组</b>：指从01至 
                           20中任意选择3个号码对开奖号码中按开奖顺序出现的前 
                           3个连续位置的投注。 投注号码与开奖号码中按开奖顺序出现的前 
                           3个位置的号码相符（顺序不限），即中奖。 
                    </li>
                    <li><b>选三前直</b>：指从01至 
                           20中任意选择3个号码对开奖号码中按开奖顺序出现的前 
                           3个连续位置按位相符的投注。 投注号码与开奖号码中按开奖顺序出现的前 
                           3个位置的号码按位相符，即中奖。 
                    </li>
                    <li><b>选四任选</b>：指从01至 
                           20中任意选择4个号码，对开奖号码中任意 
                           4个位置的投注。 投注号码与开奖号码中任意4个位置的号码相符，即中奖。 
                    </li>
                    <li><b>选五任选</b>：指从01至 
                           20中任意选择5个号码，对开奖号码中任意 
                           5个位置的投注。 投注号码与开奖号码中任意5个位置的号码相符，即中奖。 
                    </li>
                    <li><b>龙虎</b>以第一球的中奖号码和第八球的中奖号码做为对奖号码。 
                    <br>
                        龙：开出之号码第一球的中奖号码大于第八球的中奖号码。如 第一球开出 
                           14 第八球开出09；第一球开出 
                           17 第八球开出08；第一球开出 
                           05 第八球开出01...中奖为龙。 
                    <br>
                        虎：开出之号码第一球的中奖号码小于第八球的中奖号码。如 第一球开出 
                           14 第八球开出16；第一球开出 
                           13 第八球开出18；第一球开出 
                           05 第八球开出08...中奖为虎。 
                    </li>
                </ul>
            </td>
        </tr>
    </tbody></table>

    <table border="0" cellpadding="0" cellspacing="0" width="700" class="r_ggno5" v-if="['快乐十分'].findIndex((n) => n==cbocai)>-1">
        <tbody><tr>
            <td align="left" colspan="2" height="29"><strong class="ruletitle r_title"></strong></td>
        </tr>
        <tr>
            <td style="width: 15px">&nbsp;</td>
            <td>
                <p class="visb_9" v-if="cbocai == '快乐十分'">
                广西福利彩票快乐十分经国家财政部批准，由中国福利彩票发行管理中心在广西区内发行，由广西福利彩票发行中心承销。
                该游戏的投注时间、开奖时间和开奖号码与广西福利彩票快乐十分完全同步，北京時間(GMT+8)每天白天從上午09：10開到晚上22：21，每20分鐘開一次獎，每天開獎共計40期。
                </p>
              <p>
                具体游戏规则如下：
                <br>假设快乐十分开奖结果为1、2、3、4、5，那么正码是1、2、3、4，特码是5。（每个位数在开奖时，从1 ~ 21中摇出一个结果）选号玩法。
              </p>
              <ul>
                <li><b>1.单双大小：</b>根据正码一~正码四及特码开出的球号判断胜负。
                <br>大小：开出号码01~10为小，11~20为大，21为和。
                <br>单双：开出号码1，3，~19为单，2，4~20为双 ，21为和。</li>
                <li><b>2.尾大、小：</b>以开出号码的尾数来判断，大于或等于5为尾大，如05，18，19，小于或等于4为尾小，如04，10，20，出21为和。</li>
                <li><b>3.合单双：</b>以开出号码的个位和十位数字之和来判断，如01、12、16为合单；02、11、20为合双；出21为和。</li>
                <li><b>4.春夏秋冬：</b>依号码顺序将21除外的20个号码分为四种类（如下），再依四种类下注。
                <br>春：01、02、03、04、05
                <br>夏：06、07、08、09、10
                <br>秋：11、12、13、14、15
                <br>冬：16、17、18、19、20
                <br>若当期号码在相对应的球位落在下注四种类范围内，视为中奖；出21为和。</li>
              </ul>
              <ul>
                <li><b>5.色波：</b>将21个号码分为三种类，分别为红、蓝、绿（如下），再依三种类下注。
                <br>红：1、4、7、10、13、16、19
                <br>蓝：2、5、8、11、14、17、20
                <br>绿：3、6、9、12、15、18、21
                <br>若当期号码在相对应的球位落在下注三种类范围内，视为中奖。</li>
              </ul>
              <ul>
                <li><b>6.总和：</b>
                <br>总大小：数字总和值56~95为总大，数字总和值15~54为总小，所有5个开奖号码的总和值为55打和。
                <br>总单双：数字总和值是双数为总和双，数字总和值是单数为总和单。
                <br>总尾大小：所有5个开奖号码的数字总和数值的个位数大于或等于5为总尾大，小于或等于4为总尾小假如投注组合符合中奖结果，视为中奖，其余情形视为不中奖。</li>
              </ul>
              <ul>
                <li><b>7.龙虎：</b>
                <br>龙：第一球开奖号码大于第五球开奖号码，如第一球开出10，第五球开出7。
                <br>虎：第一球开奖号码小于第五球开奖号码，如第一球开出3，第五球开出7。</li>
              </ul>
            </td>
        </tr>
    </tbody></table>

    <table border="0" cellpadding="0" cellspacing="0" width="700" class="r_ggno6" v-if="['北京赛车','幸运飞艇','极速赛车','EPS赛马','极速飞艇','水上摩托','EPS赛马180','EPS赛马300','澳洲幸运10'].findIndex((n) => n==cbocai)>-1">
        <tbody><tr>
            <td align="left" colspan="2" height="29"><strong class="ruletitle r_title">【{{cbocai}}】规则说明</strong></td>
        </tr>
        <tr>
            <td style="width: 15px">&nbsp;</td>
            <td>
                <p class="visb_11" v-if="cbocai == '北京赛车'">『北京赛车』的投注时间、开奖时间和开奖号码与“北京赛车”完全同步，北京时间（GMT+8）每天白天从上午09:10开到晚上23:50，每20分钟开一次奖，每天开奖共计44期。</p>
                <p class="visb_21" v-if="cbocai == '幸运飞艇'">『幸运飞艇』北京时间（GMT+8）每天白天从下午13:00开到晚上23:59。夜场从00:00开至凌晨04:00，每5分钟开一次奖，每天开奖共计80期。</p>
                <p class="visb_22" v-if="cbocai == '极速赛车'">『极速赛车』北京时间（GMT+8）每天白天从上午07:30开到晚上23:59。夜场从00:00开至凌晨04:00，每1分钟开一次奖，每天开奖共计1152期。</p>
                <p class="visb_26" v-if="cbocai == 'EPS赛马'">『EPS赛马』北京时间（GMT+8）每天白天从上午09:02开到晚上23:58。夜场从00:00开至凌晨04:00，每2分钟开一次奖，每天开奖共计570期。</p>
                <p class="visb_28" v-if="cbocai == '极速飞艇'">『极速飞艇』北京时间（GMT+8）每天白天从上午07:30开到晚上23:59。夜场从00:01开至凌晨04:00，每1分钟开一次奖，每天开奖共计1152期。</p>
                <p class="visb_32" v-if="cbocai == '水上摩托'">『水上摩托』北京时间（GMT+8）每天白天从上午09:02开到晚上23:27。每5分钟开一次奖，每天开奖179期。</p>
                <p class="visb_34" v-if="cbocai == 'EPS赛马180'">『EPS赛马180』北京时间（GMT+8）每天白天从上午09:03开到晚上23:57。夜场从00:03开至凌晨04:00，每3分钟开一次奖，每天开奖380期。</p>
                <p class="visb_35" v-if="cbocai == 'EPS赛马300'">『EPS赛马300』北京时间（GMT+8）每天白天从上午09:05开到晚上23:55。夜场从00:00开至凌晨04:00，每5分钟开一次奖，每天开奖228期。</p>
                <p class="visb_40" v-if="cbocai == '澳洲幸运10'">『澳洲幸运10』北京时间（GMT+8）每天白天从上午07:34开到晚上23:59。夜场从00:04开至凌晨03:59，每5分钟开一次奖，每天开奖288期。</p>
                <p>
                    具体游戏规则如下:
                </p>
                <ul>

                    <li><b>1～10 两面：</b>指 单、双；大、小。 
                        
                        
                      <br>
                        单、双：号码为双数叫双，如 
                           4、8；号码为单数叫单，如 
                           5、9。 
                        
                       
                    <br>
                        大、小：开出之号码大于或等于6为大，小于或等于5为小。 
                        
                    </li>
                    <li><strong>第一名～第十名 <span class="cc_span">车</span>号指定</strong>：每一个<span class="cc_span">车</span>号为一投注组合，开奖结果“投注<span class="cc_span">车</span>号”对应所投名次视为中奖，其余情形视为不中奖。 
                        
                    </li>

                    <li><b>1～5龙虎</b> <span class="Font_r">【注意规则】 </span>为：
                  <br>
                        冠　军 龙/虎：“第一名”<span class="cc_span">车</span>号大于“第十名”<span class="cc_span">车</span>号视为【龙】中奖、反之小于视为【虎】中奖，其余情形视为不中奖。
                  <br>
                        亚　军 龙/虎：“第二名”<span class="cc_span">车</span>号大于“第九名”<span class="cc_span">车</span>号视为【龙】中奖、反之小于视为【虎】中奖，其余情形视为不中奖。
                  <br>
                        第三名 龙/虎：“第三名”<span class="cc_span">车</span>号大于“第八名”<span class="cc_span">车</span>号视为【龙】中奖、反之小于视为【虎】中奖，其余情形视为不中奖。
                  <br>
                        第四名 龙/虎：“第四名”<span class="cc_span">车</span>号大于“第七名”<span class="cc_span">车</span>号视为【龙】中奖、反之小于视为【虎】中奖，其余情形视为不中奖。
                  <br>
                        第五名 龙/虎：“第五名”<span class="cc_span">车</span>号大于“第六名”<span class="cc_span">车</span>号视为【龙】中奖、反之小于视为【虎】中奖，其余情形视为不中奖。
                    </li>
                    <li><strong>“冠军<span class="cc_span">车</span>号＋亚军<span class="cc_span">车</span>号＝<b>冠亚</b>和值”</strong></li>


                    <li><b>冠亚和单双：</b><strong><b>“冠亚</b>和值</strong>”为单视为投注“单”的注单视为中奖，为双视为投注“双”的注单视为中奖，其余视为不中奖。</li>


                    <li><b>冠亚和大小：</b><strong><b>“冠亚</b>和值</strong>”大于11时投注“大”的注单视为中奖，小于或等于11时投注“小”的注单视为中奖，其余视为不中奖。</li>


                    <li><b>冠亚和：</b><strong>指定</strong><strong><b>“冠亚</b>和值</strong>”可能出现的结果为3～19， 
                        
                        
                        投中对应<strong><b>“冠亚</b>和值</strong>”数字的视为中奖，其余视为不中奖。</li>

                </ul>
            </td>
        </tr>
    </tbody></table>

    <table border="0" cellpadding="0" cellspacing="0" width="700" class="r_ggno7" v-if="['江苏快3','安徽快三','广西快3'].findIndex((n) => n==cbocai)>-1">
        <tbody><tr>
            <td height="29" colspan="2" align="left"><strong class="ruletitle r_title"></strong></td>
        </tr>
        <tr>
            <td style="width: 15px">&nbsp; </td>
            <td>
                <p class="visb_12" v-if="cbocai == '江苏快3'">『江苏快3』的投注时间、开奖时间和开奖号码与“江苏快3”完全同步，北京时间（GMT+8）每天白天从上午08:49开到晚上22:09，每20分钟开一次奖，每天开奖共计41期。</p>
                <p class="visb_19" v-if="cbocai == '安徽快三'">『安徽快三』北京时间（GMT+8）每天白天从上午09:00开到晚上22:00，每20分钟开一次奖，每天开奖40期。</p>
                <p class="visb_29" v-if="cbocai == '广西快3'">『广西快3』北京时间（GMT+8）每天白天从上午09:10开到晚上23:30，每20分钟开一次奖，每天开奖40期。</p>
                <p>
                    具体游戏规则如下:
                </p>
                <ul>
                    <li>
                        <b>"骰宝"</b>
                        <br>
                        I. 博彩者可在下列各项下注：
                            <br>
                        （一）“小”三粒骰子之点数总和由4点至10点； 
                            <br>
                        （二）“大”三粒骰子之点数总和由11点至17点； 
                            <br>
                        <span class="font_r">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：若三粒骰子平面点数相同，通吃「大」、「小」各注。</span> &nbsp;
                            <br>
                        （三）“三军”任何一粒骰子出现选定之平面点数；
                            <br>
                        （四）“围骰”三粒骰子平面与选定点数相同； 
                            <br>
                        （五）“全骰”在一点至六点内，三粒骰子平面点数相同； 
                            <br>
                        （六）“点数”由4点至17点，三粒骰子平面点数之总和； 
                            <br>
                        （七）“长牌”任两粒骰子之平面点数； 
                            <br>
                        （八）“短牌”选定两粒骰子之平面点数； 
                            <br>
                        &nbsp;
                            <br>
                        II. 上一条款各式投注赔率如下 
                            <br>
                        （一）“小”一赔一； 
                            <br>
                        （二）“大”一赔一； 
                            <br>
                        （三）“三军”投中一粒骰子平面点数一赔一，两骰相同一赔二，三骰相同一赔三； 
                            <br>
                        （四）“围骰”一赔一百五十；
                            <br>
                        （五）“全骰”一赔二十四； 
                            <br>
                        （六）“点数”： 
                                   <br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4点及17点，一赔五十； 
                                   <br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5点及16点，一赔十八；
                                   <br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6点及15点，一赔十四； 
                                   <br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7点及14点，一赔十二； 
                                   <br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8点及13点，一赔八； 
                                   <br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9点、10点、11点及12点，一赔六。
                            <br>
                        （七）“长牌”一赔五； 
                            <br>
                        （八）“短牌”一赔八；
                            <br>
                    </li>
                </ul>
            </td>
        </tr>
    </tbody></table>

    <table border="0" cellpadding="0" cellspacing="0" width="700" class="r_ggno8" v-if="['北京快乐8','澳洲幸运20'].findIndex((n) => n==cbocai)>-1">
        <tbody><tr>
            <td align="left" colspan="2" height="29"><strong class="ruletitle r_title"></strong></td>
        </tr>
        <tr>
            <td style="width: 15px">&nbsp;</td>
            <td>
                <p class="visb_13" v-if="cbocai == '北京快乐8'">『北京快乐8』的投注时间、开奖时间和开奖号码与“北京快乐8”完全同步，北京时间（GMT+8）每天白天从上午09:00开到晚上23:55，每5分钟开一次奖，每天开奖179期。</p>
                <p class="visb_41" v-if="cbocai == '澳洲幸运20'">『澳洲幸运20』北京时间（GMT+8）每天白天从上午07:34开到晚上23:59。夜场从00:04开至凌晨03:59，每5分钟开一次奖，每天开奖288期。</p>
                <p>
                    具体游戏规则如下:
                </p>
                <ul>

                    <li><b>正码：</b>


                        <br>
                        投注的1个号码与当期摇出的20个号码中的任何1个号码相同，则中奖。                       
                   
                        
                    </li>
                    <li><strong>总和：</strong>
                        <br>
                        以所有开出的全部20个号码加起来的值来判定。
                    <br>
                        总和大/小: 20个号码加总的和值大于810，为和大；20个号码加总的和值小于810，则为和小。
                    <br>
                        总和单/双: 20个号码加总的和值为单，叫做和单；20个号码加总的和值为双，叫做和双。
                    <br>
                        总和810: 20个号码加总的和值等于810，叫和值810。(当和值等于810，则总和大、总和小，总和单、总和双退回本金) 
                    <br>
                        ※举例:开奖号码1、2、3、4、5、6、7、8、9、10、11、12、13、14、15、16、17、18、19、20；那么20个开奖号码的和值总和为210，则为小，为双。则投注小和双者中奖。投注大、单、和值810者为不中奖。
                        
                    </li>

                    <li><b>总和过关：</b>
                        <br>
                        开出的20个号码总和的游戏，分为，分为「大单」、「大双」、「小单」和「小双」。
                  <br>
                        总和大于810为「总数大」，小于810为「总数小」。
                  <br>
                        总和为双数叫「双」，单数叫「单」。 
                  <br>
                        通过大小和单双组合产生「大单」、「大双」、「小单」和「小双」四种结果。 
                  <br>
                        总和等于810，则视为和局。
                  <br>
                        ※举例:开奖号码1、4、5、10、11、13、20、27、30、32、33、36、40、47、54、59、61、64、67、79，总和是693，总和小于810，并且是单数，则为「小单」。下注「小单」为赢，反之为输。
                  
                    </li>
                    <li><b>前后和：</b>
                        <br>
                        前后盘说明:开奖号码1至40为前盘号码，41至80为后盘号码。
               <br>
                        开出的20个号码中:如前盘号码(1-40)在此局开出号码数目占多数时，此局为:前(多)。
               <br>
                        后盘号码(41-80)在此局开出号码数目占多数时，此局为:后(多)。
               <br>
                        前盘号码(1-40)和后盘号码(41-80)在此局开出的数目相同时(各10个数字)，此局为:前后(和)。 
               <br>
                        ※举例:此局开出1、2、3、4、5、6、7、8、9、10、11、12、13、14、15、16、17、18、19、20，此局为:前(多)。
               <br>
                        ※举例:此局开出41、42、43、44、45、46、47、48、49、50、51、52、53、54、55、56、57、58、59、60，此局为:后(多)。
               <br>
                        ※举例:此局开出1、2、3、4、5、6、7、8、9、10、41、42、43、44、45、46、47、48、49、50，此局为:前后(和)。
               
                    </li>


                    <li><b>单双和：</b>
                        <br>
                        开奖号码中1，3，5，7，…，75，77，79为单数号码，2，4，6，8，……，76，78，80为双数号码。当期开出个中奖号码中，如单数号码数目占多数时（超过10个），则为单(多)，投注单(多)中奖；双数号码占多数时（超过10个），则为双(多)，投注双(多)中奖；如果单数和双数号码数目相同时（均为10个），则为单双(和)，投注单双(和) 中奖。
                    <br>
                        ※举例:此局开出1、3、5、7、9、11、13、15、17、19、21、22、24、26、28、30、32、34、46、68，单数11个，双数9个，此局为:单(多)。
                    <br>
                        ※举例:此局开出2、4、6、8、10、12、14、16、44、48、66、68、25、27、31、35、37、39、41、55，双数12个，单数8个，此局为:双(多)。
                    <br>
                        ※举例:此局开出2、4、6、8、10、12、14、16、18、20、41、43、45、47、49、51、53、55、57、59，单数10个，双数10个，此局为:单双(和)。
                    </li>


                    <li><b>五行：</b>
                        <br>
                        开出的20个号码的总和分在5个段，以金、木、水、火、土命名：金（210～695）、木（696～763）、水（764 855）、火（856～923）和土（924～1410）。
                    <br>
                        ※举例:开奖号码为1、4、5、10、11、13、20、27、30、32、33、36、40、47、54、59、61、64、67、79，总和是693，则总分数在210－695段内，则开出的是「金」。下注「金」为赢，反之则输。
                    </li>

                </ul>
            </td>
        </tr>
    </tbody></table>

    <table border="0" cellpadding="0" cellspacing="0" width="700" class="r_ggno9" v-if="['山东11选五','江西11选五','广东11选五'].findIndex((n) => n==cbocai)>-1">
        <tbody><tr>
            <td align="left" colspan="2" height="29"><strong class="ruletitle r_title"></strong></td>
        </tr>
        <tr>
            <td style="width: 15px">&nbsp;</td>
            <td>
                <p class="visb_15" v-if="cbocai == '山东11选五'">『山东11选五』北京时间（GMT+8）每天白天从上午08:40开到晚上23:00，每20分钟开一次奖 ,每天开奖43期。</p>
                <p class="visb_17" v-if="cbocai == '江西11选五'">『江西11选五』北京时间（GMT+8）每天白天从上午09:10开到晚上23:10，每20分钟开一次奖 ,每天开奖42期。</p>
                <p class="visb_18" v-if="cbocai == '广东11选五'">『广东11选五』北京时间（GMT+8）每天白天从上午09:10开到晚上23:10，每20分钟开一次奖 ,每天开奖42期。</p>
                <p>
                    具体游戏规则如下:
                </p>
                <ul>
                <li>【单码】- 指第一球、第二球、第三球、第四球、第五球出现的顺序与号码为派彩依据。
                <br>单号：如现场滚球第一个开奖号码为10号，投注第一球为10号则视为中奖，其它号码视为不中奖 大小：开出的号码大于或等于6为大，小于或等于5为小，开出11为和 (不计算输赢)
                <br>单双：号码为双数叫双，如2、8；号码为单数叫单，如5、9；开出11为和 (不计算输赢)。
                </li><li>【总和】-以全部开出的5个号码，加起来的总和来判定。
                <br>总和大小: 所有开奖号码数字加总值大于30为和大；总和值小于30为和小；若总和值等于30为和 (不计算输赢)。
                <br>总和单双: 所有开奖号码数字加总值为单数叫和单，如11、31；加总值为双数叫和双，如42、30。
                <br>总和尾数大小: 所有开奖号码数字加总值的尾数，大于或等于5为尾大，小于或等于4为尾小。</li>
              </ul>
                <ul>
                <li>【龙虎】
                <br>龙：第一球开奖号码大于第五球开奖号码，如第一球开出10，第五球开出7。
                <br>虎：第一球开奖号码小于第五球开奖号码，如第一球开出3，第五球开出7。</li>
              </ul>
                <ul>
                <li>选号- 选号玩法是由1~11号中，选出1~5个号码为一投注组合来进行投注。
                <br>一中一: 投注1个号码与当期开奖的5个号码中任1个号码相同，视为中奖。
                <br>任选二: 投注2个号码与当期开奖的5个号码中任2个号码相同(顺序不限)，视为中奖。
                <br>任选三: 投注3个号码与当期开奖的5个号码中任3个号码相同(顺序不限)，视为中奖。
                <br>任选四: 投注4个号码与当期开奖的5个号码中任4个号码相同(顺序不限)，视为中奖。
                <br>任选五: 投注5个号码与当期开奖的5个号码中5个号码相同(顺序不限)，视为中奖。
                <br>任选六: 投注6个号码中任5个号码与当期开奖的5个号码相同(顺序不限)，视为中奖。
                <br>任选七: 投注7个号码中任5个号码与当期开奖的5个号码相同(顺序不限)，视为中奖。
                <br>任选八: 投注8个号码中任5个号码与当期开奖的5个号码相同(顺序不限)，视为中奖。
                <br>组选前二: 投注的2个号码与当期顺序开出的5个号码中的前2个号码相同，视为中奖。
                <br>组选前三: 投注的3个号码与当期顺序开出的5个号码中的前3个号码相同，视为中奖。
                <br>直选前二: 投注的2个号码与当期顺序开出的5个号码中的前2个号码相同且顺序一致，视为中奖。
                <br>直选前三: 投注的3个号码与当期顺序开出的5个号码中的前3个号码相同且顺序一致，视为中奖。</li>
              </ul>
            </td>
        </tr>
    </tbody></table>

    <table border="0" cellpadding="0" cellspacing="0" width="700" class="r_ggno10" v-if="['PC蛋蛋'].findIndex((n) => n==cbocai)>-1">
        <tbody><tr>
            <td align="left" colspan="2" height="29"><strong class="ruletitle r_title">【{{cbocai}}】规则说明</strong></td>
        </tr>
        <tr>
            <td style="width: 15px">&nbsp;</td>
            <td>
                <p>
                  PC蛋蛋开奖结果来源于国家福利彩票北京快乐8官网开奖号码，从北京时间（GMT+8）每天白天从上午07:30开到晚上23:55。每5分钟开一次奖，每天开奖179期。北京快乐8每期开奖共开出20个数字，
                    PC蛋蛋将这20个开奖号码按照由小到大的顺序依次排列；取其1-6位开奖号码相加，和值的末位数作为幸运 28开奖第一个数值； 取其7-12位开奖号码相加，
                    和值的末位数作为PC蛋蛋开奖第二个数值，取其13-18位开奖号码相加，和值的末位数作为幸运 28开奖第三个数值；三个数值相加即为PC蛋蛋最终的开奖结果。 
                  <img src="../../../../static/img/pcegg_1.png">
                </p>
                <ul>
                  <li><b>1.大小玩法</b>
                  <br">数字14-27为大 数字0-13为小 出13押小回本金 出14押大回本本金。</br"></li>
                </ul>
                <ul>
                  <li><b>2.单双玩法</b>
                  <br>数字1，3，5，~27为单 数字0，2，4~26为双 出13压单回本出14押双回本。</li>
                </ul>
                <ul>
                  <li><b>3.极值玩法</b>
                  <br>极小：0，1，2，3，4，5
                    <br>极大：22，23，24，25，26，27
                    <br>举例：买极小 开奖结果为0-5其中一个数字就中奖，买极大开奖结果为22-27其中一个数字就中奖。</li>
                </ul>
                <ul>
                  <li><b>4.组合玩法</b>
                  <br>• 数字14，16，~26为大双 数字0，2，4，~12为小双。
                  <br>• 数字15，17，~27为大单 数字1，3，5，~13为小单。
                  <br>• 开13，14组合回本，举例 买100元小单开13就回本金 买100元大双开14就回本金。</li>
                </ul>
                <ul>
                  <li><b>5.定位玩法(单点数字玩法)</b>
                  <br>从数字0-27中选取一个数字下注，如选取下注的数字与开奖如果相同，即为中奖。</li>
                </ul>
                <ul>
                  <li><b>6.波色</b>
                  <br>• 绿波号码：1 , 4 , 7 , 10 , 16 , 19 , 22 , 25
                  <br>• 蓝波号码：2 , 5 , 8 , 11 , 17 , 20 , 23 , 26
                  <br>• 红波号码：3 , 6 , 9 , 12 , 15 , 18 , 21 , 24 
                  <br>• 当开奖结果为：0,13,14,27(所有买的波色皆输)视为全部不中奖！</li>
                </ul>
                <ul>
                  <li><b>7.豹子</b>
                  <br>当期3个开奖号码一致则中奖 , 如当期开奖结果为 3+3+3=9 则中奖豹子。</li>
                </ul>
                <ul>
                  <li><b>8.特码包三</b>
                  <br>选取三个特码,三个特码中有任一号码和开奖结果一致即中奖。</li>
                </ul>
            </td>
        </tr>
    </tbody></table>

    <table border="0" cellpadding="0" cellspacing="0" width="700" class="r_ggno11" v-if="['七星彩'].findIndex((n) => n==cbocai)>-1">
        <tbody><tr>
            <td align="left" colspan="2" height="29"><strong class="ruletitle r_title">【{{cbocai}}】规则说明</strong></td>
        </tr>
        <tr>
            <td style="width: 15px">&nbsp;</td>
            <td>
                <p>『七星彩』每周二、五、日开奖，摇奖过程在公证人员监督下进行，通过电视台播出。开奖时按顺序摇出7个号码，该7个号码的排列为当期开奖号码。</p>
                <p>
                    具体游戏规则如下:
                </p>
                <span><br>假设开奖为 <strong style="color:#F63;">1, 2,3, 4, 5, 6, 7</strong></span>
                <ol start="1" type="1">
                    <li><strong style="color: #F63;">一定位</strong><br>
                        <ol start="1" type="a">
                            <li>千位中奖号码为1;</li>
                            <li>百位中奖号码为2; </li>
                            <li>十位中奖号码为3;</li>
                            <li>个位中奖号码为4:</li>
                            <li>球5中奖号码为5:</li>
                            <li>球6中奖号码为6;</li>
                            <li>球7中奖号码为7;</li>
                        </ol>
                    </li>
                    <li><strong style="color: #F63;">一字现</strong> 依照开奖结果里从第一球到第四球开出的号码为兑奖号码，中奖号码为1,2,3,4。下注1或2或3或4均为得奖。（重码只算一组）</li>
                    <li><strong style="color: #F63;">二字现</strong> 依照开奖结果里从第一球到第四球开出的号码为兑奖号码，由小至大重新排列，依序拍出“两号为一组”之数字为得奖号码。（重码只算一组）。此范例得奖号码为： 12,13,14,23,24,34。</li>
                    <li><strong style="color: #F63;">二定位</strong>依照开奖结果里从第一球到第四球开出的号码为兑奖号码。
                        <ol start="1" type="a">
                            <li><strong style="color: #F63;">千百</strong> 此范例得奖号码为12；</li>
                            <li><strong style="color: #F63;">千十</strong> 此范例得奖号码为13；</li>
                            <li><strong style="color: #F63;">千个</strong> 此范例得奖号码为14；</li>
                            <li><strong style="color: #F63;">百十</strong> 此范例得奖号码为23；</li>
                            <li><strong style="color: #F63;">百个</strong> 此范例得奖号码为24；</li>
                            <li><strong style="color: #F63;">十个</strong> 此范例得奖号码为34；</li>
                        </ol>
                    </li>
                    <li><strong style="color: #F63;">三字现</strong> 依照开奖结果里从第一球到第四球开出的号码为兑奖号码，由小至大重新排列，依序排列出“三号为一组”之数字为得奖号码。（重码只算一组）。此范例得奖号码为： 123,124,134,234。</li>
                    <li><strong style="color: #F63;">三定位</strong>依照开奖结果里从第一球到第四球开出的号码为兑奖号码。<br>
                        <ol start="1" type="a">
                            <li><strong style="color: #F63;">千百十</strong> 此范例得奖号码为123；</li>
                            <li><strong style="color: #F63;">千百个</strong> 此范例得奖号码为124；</li>
                            <li><strong style="color: #F63;">千十个</strong> 此范例得奖号码为134；</li>
                            <li><strong style="color: #F63;">百十个</strong> 此范例得奖号码为234；</li>
                        </ol>
                    </li>
                    <li><strong style="color: #F63;">四字现</strong> 依照开奖结果里从第一球到第四球开出的号码为兑奖号码，由小至大重新排列，此范例得奖号码为 1234。</li>
                    <li><strong style="color: #F63;">四定位</strong> 依照开奖结果里从第一球到第四球开出的号码为兑奖号码，此范例得奖号码为 1234。</li>
                    <li><strong style="color: #F63;">双面</strong><br>
                        <ol start="1" type="a">
                            <li>总和单双：根据相应单项投注第一球~第七球开出的球号数字总和值是双数为总和双，数值总和值是单数为总和单。</li>
                            <li>总和大小：根据相应单项投注第一球~第七球开出的球号数字总和值大于等于32为大，小于等于31为小。</li>
                            <li>总和尾大尾小：所有7个开奖号码的数字总和值的个位数大于等于5为总尾大，小于等于4为总尾小。</li>
                            <li>大小单双：以千位，百位，十位，个位球5球6球7之开奖号码，作为中奖依据，如号码为1,3,5,7,9为单；如号码为0,2,4,6,8为双；如号码为5~9为大；如号码为0~4为小。</li>
                            <li>质合：开奖结果第一位到第七位的数字为1、2、3、5、7时为“质数”，若为0、4、6、8、9时为“合数”，当投注位数质合与开奖结果的位数质合相符时，即为中奖。如：投注者购买第七位质，当期第七位开奖结果如为3214 957（7为质），则视为中奖。</li>
                            <li>合数单双大小: 千百、千十、千个、百十、百个、十个，以定位二个数字相加，相加之和0一9为合数小，10一18为合数大，1,3,5…17为单，0,2,4…18为双；以本例：千百：12．两数相加：1+2=3，即为合数单、合数小。</li>
                            <li>和尾数单双：开奖结果千百位、千十位、千个位、百十位、百个位、十个位数字和数为1、3、5、7、9、11、13、15、17时为“单”，为0、2、4、6、8、10、12、14、16、18时为“双”，当投注和数单双与开奖结果的和数单双相符时，即为中奖。如：投注者购买和数千百位单，当期开奖结果如为3020 369（千3+百0=3为单），则视为中奖。</li>
                            <li>和尾数大小：开奖结果千百位、千十位、千个位、百十位、百个位、十个位数字总和的尾数为5、6、7、8、9时为“大”，若为0、1、2、3、4时为“小”，当投注和尾数大小与开奖结果的和尾数大小相符时，即为中奖。如：投注者购买千百和尾数小，当期开奖结果如为5929 369（千5+百9=14，尾数4为小），则视为中奖。</li>
                            <li>和尾数质合：开奖结果千百位、千十位、千个位、百十位、百个位、十个位数字总和的尾数为1、2、3、5、7时为“质数”，若为0、4、6、8、9时为“合数”，当投注号码与开奖结果的质合相符时，即为中奖。如：投注者购买千百位合，当期开奖结果如为5929 369（千5+百9=14，尾数4为合数），则视为中奖。</li>
                        </ol>
                    </li>
                    <li><strong style="color: #F63;">龙虎</strong>龙虎以7个号码为主，选择球号与中奖号码作为对奖号码
                        <ol start="1" type="a">
                            <li><strong style="color: #F63;">龙1</strong> 第一球和第二球比较，开出的第一球大，则结果为龙。</li>
                            <li><strong style="color: #F63;">虎2</strong> 第一球和第二球比较，开出的第一球小，则结果为虎。</li>
                            <li><strong style="color: #F63;">和2</strong> 第一球和第二球比较，开出的号码一样，则结果为和。</li>
                            <li><strong style="color: #F63;">龙1</strong> 第一球和第三球比较，开出的第一球大，则结果为龙。</li>
                            <li><strong style="color: #F63;">虎3</strong> 第一球和第三球比较，开出的第一球小，则结果为虎。</li>
                            <li><strong style="color: #F63;">和3</strong> 第一球和第三球比较，开出的号码一样，则结果为和。</li>
                            <li><strong style="color: #F63;">龙1</strong> 第一球和第四球比较，开出的第一球大，则结果为龙。</li>
                            <li><strong style="color: #F63;">虎4</strong> 第一球和第四球比较，开出的第一球小，则结果为虎。</li>
                            <li><strong style="color: #F63;">和4</strong> 第一球和第四球比较，开出的号码一样，则结果为和。</li>
                            <li><strong style="color: #F63;">龙1</strong> 第一球和第五球比较，开出的第一球大，则结果为龙。</li>
                            <li><strong style="color: #F63;">虎5</strong> 第一球和第五球比较，开出的第一球小，则结果为虎。</li>
                            <li><strong style="color: #F63;">和5</strong> 第一球和第五球比较，开出的号码一样，则结果为和。</li>
                            <li><strong style="color: #F63;">龙1</strong> 第一球和第六球比较，开出的第一球大，则结果为龙。</li>
                            <li><strong style="color: #F63;">虎6</strong> 第一球和第六球比较，开出的第一球小，则结果为虎。</li>
                            <li><strong style="color: #F63;">和6</strong> 第一球和第六球比较，开出的号码一样，则结果为和。</li>
                            <li><strong style="color: #F63;">龙1</strong> 第一球和第七球比较，开出的第一球大，则结果为龙。</li>
                            <li><strong style="color: #F63;">虎7</strong> 第一球和第七球比较，开出的第一球小，则结果为虎。</li>
                            <li><strong style="color: #F63;">和7</strong> 第一球和第七球比较，开出的号码一样，则结果为和。其他龙虎以此类推</li>
                        </ol>
                    </li>
                    <li>
                        <strong style="color: #F63;">过关</strong> 以当期开奖7个号码为准，任选2-7个号码为一投注组合，其赔率为所选号码当时赔率的总乘积。投注组合所选号码必须全中才视为中奖。过关彩金最高赔额50万。
                    </li>
                    <li>
                        <strong style="color: #F63;">跨度</strong>
                        <ol start="1" type="a">
                            <li>前三：以开奖结果[千位、百位、十位、个位、球5、球6、球7]的最大差距（跨度），作为中奖依据。会员可以选择0~9的任一跨度。 如：开奖结果为3、4、8、7、6、3、9。中奖的跨度为5。（最大号码8减最小号码3=5）。</li>
                            <li>中三：以开奖结果[千位、百位、十位、个位、球5、球6、球7]的最大差距（跨度），作为中奖依据。会员可以选择0~9的任一跨度。 如：开奖结果为3、4、8、7、6、3、9。中奖的跨度为2。（最大号码8减最小号码6=2）。</li>
                            <li>后三：以开奖结果[千位、百位、十位、个位、球5、球6、球7]的最大差距（跨度），作为中奖依据。会员可以选择0~9的任一跨度。 如：开奖结果为3、4、8、7、6、3、9。中奖的跨度为6。（最大号码9减最小号码3=6）。</li>
                            <li>前三玩法：豹子 &gt; 顺子 &gt; 对子 &gt; 半顺 &gt; 杂六<br>
                                <ol start="1" type="i">
                                    <li><strong style="color: #099;">豹子</strong> 中奖号码的第一球、第二球、第三球数字都相同。如中奖号码为000、111、999等，中奖号码的第一球、第二球、第三球数字相同，则投注豹子者视为中奖，其它视为不中奖。 </li>
                                    <li><strong style="color: #099;">顺子</strong> 中奖号码的第一球、第二球、第三球数字都相连，不分顺序。（数字9、0、1相连）如中奖号码为123、901、321、546等，中奖号码的第一球、第二球、第三球数字相连，则投注顺子者视为中奖，其它视为不中奖。 </li>
                                    <li><strong style="color: #099;">对子</strong> 中奖号码的第一球、第二球、第三球任意两位数字相同。（不包括豹子）如中奖号码为001、112、696等，中奖号码有两位数字相同，则投注对子者视为中奖，其它视为不中奖。如果开奖号码为豹子，则对子视为不中奖。 </li>
                                    <li><strong style="color: #099;">半顺</strong> 中奖号码的第一球、第二球、第三球任意两位数字相连，不分顺序。（不包括顺子、对子）如中奖号码为540、390、706等，中奖号码有两位数字相连，则投注半顺者视为中奖，其它视为不中奖。如果开奖号码为顺子、对子，则半顺视为不中奖。如中奖号码为123、901、556、233等，视为不中奖。 </li>
                                    <li><strong style="color: #099;">杂六</strong> 不包括豹子、顺子、对子、半顺的所有中奖号码，如中奖号码为157、964等，中奖号码位数之间没有关联性，则投注杂六者视为中奖，其它视为不中奖。</li>
                                </ol>
                            </li>
                            <li><strong style="color: #F63;">中三玩法：豹子 &gt; 顺子 &gt; 对子 &gt; 半顺 &gt; 杂六</strong>
                                <ol start="1" type="i">
                                    <!--<ol style="list-style:disc;">-->
                                    <li><strong style="color: #099;">豹子</strong> 中奖号码的第三球、第四球、第五球数字都相同。如中奖号码为000、111、999等，中奖号码的第三球、第四球、第五球数字相同，则投注豹子者视为中奖，其它视为不中奖。</li>
                                    <li><strong style="color: #099;">顺子</strong> 中奖号码的第三球、第四球、第五球数字都相连，不分顺序。（数字9、0、1相连）如中奖号码为123、901、321、546等，中奖号码的第三球、第四球、第五球数字相连，则投注顺子者视为中奖，其它视为不中奖。</li>
                                    <li><strong style="color: #099;">对子</strong> 中奖号码的第三球、第四球、第五球任意两位数字相同。（不包括豹子）如中奖号码为001、112、696等，中奖号码有两位数字相同，则投注对子者视为中奖，其它视为不中奖。如果开奖号码为豹子，则对子视为不中奖。 </li>
                                    <li><strong style="color: #099;">半顺</strong> 中奖号码的第三球、第四球、第五球任意两位数字相连，不分顺序。（不包括顺子、对子）如中奖号码为540、390、706等，中奖号码有两位数字相连，则投注半顺者视为中奖，其它视为不中奖。如果开奖号码为顺子、对子，则半顺视为不中奖。如中奖号码为123、901、556、233等，视为不中奖。 </li>
                                    <li><strong style="color: #099;">杂六</strong> 不包括豹子、顺子、对子、半顺的所有中奖号码，如中奖第三球、第四球、第五球号码为157、964等，中奖号码位数之间没有关联性，则投注杂六者视为中奖，其它视为不中奖。 </li>

                                </ol>
                            </li>
                            <li><strong style="color: #F63;">后三玩法：豹子 &gt; 顺子 &gt; 对子 &gt; 半顺 &gt; 杂六</strong>
                                <ol start="1" type="i">
                                    <li><strong style="color: #099;">豹子</strong> 中奖号码的第五球、第六球、第七球数字都相同。如中奖号码为000、111、999等，中奖号码的第五球、第六球、第七球数字相同，则投注豹子者视为中奖，其它视为不中奖。</li>
                                    <li><strong style="color: #099;">顺子</strong> 中奖号码的第五球、第六球、第七球数字都相连，不分顺序。（数字9、0、1相连）如中奖号码为123、901、321、546等，中奖号码的第五球、第六球、第七球数字相连，则投注顺子者视为中奖，其它视为不中奖。 </li>
                                    <li><strong style="color: #099;">对子</strong> 中奖号码的第五球、第六球、第七球任意两位数字相同。（不包括豹子）如中奖号码为001、112、696等，中奖号码有两位数字相同，则投注对子者视为中奖，其它视为不中奖。如果开奖号码为豹子，则对子视为不中奖。 </li>
                                    <li><strong style="color: #099;">半顺</strong> 中奖号码的第五球、第六球、第五七球任意两位数字相连，不分顺序。（不包括顺子、对子）如中奖号码为540、390、706等，中奖号码有两位数字相连，则投注半顺者视为中奖，其它视为不中奖。如果开奖号码为顺子、对子，则半顺视为不中奖。如中奖号码为123、901、556、233等，视为不中奖。</li>
                                    <li><strong style="color: #099;">杂六</strong> 不包括豹子、顺子、对子、半顺的所有中奖号码，如中奖第五球、第六球、第七球号码为157、964等，中奖号码位数之间没有关联性，则投注杂六者视为中奖，其它视为不中奖。</li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                    <li><strong style="color: #F63;">和数</strong>
                        <ol start="1" type="a">
                            <li>二字和数（千百、千十、千个、百十、百个、十个）
               <ol start="1" type="i">
                                 <li>千百和数：开奖结果千百二位数的总和值若与投注千百位数字的总和值相同时，即为中奖。</li>
                                 <li>千十和数：开奖结果千十二位数的总和值若与投注千十位数字的总和值相同时，即为中奖。</li>
                                 <li>千个和数：开奖结果千个二位数的总和值若与投注千个位数字的总和值相同时，即为中奖。</li>
                                 <li>百十和数：开奖结果百十二位数的总和值若与投注百十位数字的总和值相同时，即为中奖。</li>
                                 <li>百个和数：开奖结果百个二位数的总和值若与投注百个位数字的总和值相同时，即为中奖。</li>
                                 <li>十个和数：开奖结果十个二位数的总和值若与投注十个位数字的总和值相同时，即为中奖。</li>
                             </ol>
                            </li>
                            <li>二字和尾数（千百、千十、千个、百十、百个、十个）
                          <ol start="1" type="i">
                                <li>千百和尾数：开奖结果千百二位数的总和值尾数若与投注千百二位数的总和值尾数相同时，即为中奖。</li>
                                <li>千十和尾数：开奖结果千十二位数的总和值尾数若与投注千十二位数的总和值尾数相同时，即为中奖。</li>
                                <li>千个和尾数：开奖结果千个二位数的总和值尾数若与投注千个二位数的总和值尾数相同时，即为中奖。</li>
                                <li>百十和尾数：开奖结果百十二位数的总和值尾数若与投注百十二位数的总和值尾数相同时，即为中奖。</li>
                                <li>百个和尾数：开奖结果百个二位数的总和值尾数若与投注百个二位数的总和值尾数相同时，即为中奖。</li>
                                <li>十个和尾数：开奖结果十个二位数的总和值尾数若与投注十个二位数的总和值尾数相同时，即为中奖。</li>
                            </ol>
                            </li>
                            <li>四字和数：把当期前四个开奖结果的号码，以其加总值作为开奖依据，当投注之注项与开奖结果相符时，即为中奖。<br>
                                如：当期开奖结果为5029 369 (四字总和数 = 5+0+2+9=16)，投注者购买“四字和数16”，即视为中奖，其余情形视为不中奖。</li>
                            <li>四字和尾数：把当期前四个开奖结果的号码，相加的总值之尾数作为结果依据，当投注之注项与结果相符时，即为中奖。<br>
                                如：当期开奖结果为5029 369 (四字总和数 = 5+0+2+9=16)，投注者购买“四字和尾数6”，即视为中奖，其余情形视为不中奖。
                            </li>
                        </ol>
                    </li>
                    <li>多选中一：以国家体彩7个开奖结果为准，每位每个号码都有自己的赔率，下注组合的总赔率，取该组合号码的最低赔率为总赔率。<br>
                        <span style="color: #F03;">注：针对每一位的开奖号码，如投注千位：</span><br>
                        <ol start="1" type="a">
                            <li>二选中一：在千位中挑选2个号码为一投注组合进行下注，只有1个号码在该下注组合中，即视为中奖；其余情形视为不中奖。</li>
                            <li>三选中一：在千位中挑选3个号码为一投注组合进行下注，只有1个号码在该下注组合中，即视为中奖；其余情形视为不中奖。</li>
                            <li>四选中一：在千位中挑选4个号码为一投注组合进行下注，只有1个号码在该下注组合中，即视为中奖；其余情形视为不中奖。</li>
                            <li>五选中一：在千位中挑选5个号码为一投注组合进行下注，只有1个号码在该下注组合中，即视为中奖；其余情形视为不中奖。
其他位（百位，十位，个位，球5，球6，球7）多选中一以此类推。
                            </li>
                        </ol>
                    </li>
                    <li>不中：以国家体彩7个开奖结果为准，每位每个号码都有自己的赔率，下注组合的总赔率，取该组合号码的最低赔率为总赔率。<br>
                        <span style="color: #F03;">注：针对每一位的开奖号码，如投注千位：</span><br>
                        <ol start="1" type="a">
                            <li>四不中：在千位中挑选4个号码为一投注组合进行下注，若当期开出的第一位开奖号码中，都没有在该下注组合中，即视为中奖；其于情形视为不中奖。</li>
                            <li>五不中：在千位中挑选5个号码为一投注组合进行下注，若当期开出的第一位开奖号码中，都没有在该下注组合中，即视为中奖；其于情形视为不中奖。</li>
                            <li>六不中：在千位中挑选6个号码为一投注组合进行下注，若当期开出的第一位开奖号码中，都没有在该下注组合中，即视为中奖；其于情形视为不中奖。</li>
                            <li>七不中：在千位中挑选7个号码为一投注组合进行下注，若当期开出的第一位开奖号码中，都没有在该下注组合中，即视为中奖；其于情形视为不中奖。</li>
                            <li>八不中：在千位中挑选8个号码为一投注组合进行下注，若当期开出的第一位开奖号码中，都没有在该下注组合中，即视为中奖；其于情形视为不中奖。</li>
                            <li>九不中：在千位中挑选9个号码为一投注组合进行下注，若当期开出的第一位开奖号码中，都没有在该下注组合中，即视为中奖；其于情形视为不中奖。
其他位（百位，十位，个位，球5，球6，球7）不中以此类推。
                            </li>
                        </ol>
                    </li>
                    <li>组选六：以国家体彩7个开奖结果为准，分为前中后三位的号码，前三指第一位，第二位，第三位的号码；中三指第三位，第四位，第五位的号码；后三是第五位，第六位，第七位的号码。每组号码依从小到大的号码组合。<br>
                        <ol start="1" type="a">
                            <li>前三：会员可以任意挑选一组或者多组号码，[千位、百位、十位]没有任何号码重复，则视为中奖。 如：如果是选择(123)，则开奖结果[千位、百位、十位]为123、321、132、213、都中奖，其他都是不中奖。例如：112、133、145、333、121等都是不中奖。</li>
                            <li>中三：会员可以任意挑选一组或者多组号码，[十位、个位、球5]没有任何号码重复，则视为中奖。 如：如果是选择(123)，则开奖结果[十位、个位、球5]为123、321、132、213、都中奖，其他都是不中奖。例如：112、133、145、333、121等都是不中奖。</li>
                            <li>后三：会员可以任意挑选一组或者多组号码，[球5、球6、球7]没有任何号码重复，则视为中奖。 如：如果是选择(123)，则开奖结果[球5、球6、球7]为123、321、132、213、都中奖，其他都是不中奖。例如：112、133、145、333、121等都是不中奖。<br>
                                <br>
                            </li>
                        </ol>
                    </li>
                    <li>中发白 ：以国家体彩7个开奖结果为准。<br>
                        <ol start="1" type="a">
                            <li>中：包括的号码有1，4，7</li>
                            <li>发：包括的号码有2，5，8</li>
                            <li>白：包括的号码有3，6，9</li>
                            <li>和：包括的号码有0</li>
                        </ol>
                    </li>
                    <li>七码：估猜7个开奖号码中【单、双、大、小】各有多少个，如：投注【单0】，若该期开出的七个号码中一个单数号码都没出现，即视为中奖，若七个号码中有一个或多个单数出现则为不中奖。开出的球号为双数叫双，如2、6；为单数叫单，如1、3。<br>
                        <ol start="1" type="a">
                            <li>双多单多：猜7个开奖号码中开了多少个双多少个单，如：<b style="color: #C33;">2 3 4 5</b>  6 8 9就是双多，投注双多就中奖，单多视为不中奖。</li>
                            <li>大多小多：猜7个开奖号码中开了多少个大多少个小，如：<b style="color: #C33;">2 3 4 5</b>  6 8 9就是大多，投注大多就中奖，小多视为不中奖。开出的球号大于等于5为大，小于等于4为小。</li>
                        </ol>
                    </li>
                    <li>五行：根据国家体彩7个开奖结果为准，投注五行中所属任意1个号码视为中奖，其余情况视为不中奖。如：投注千位的金，开奖结果是：<b style="color: #C33;">1 3 4 5</b>  6 8 9 或者 <b style="color: #C33;">6 3 4 5</b>  6 8 9 都视为中奖，只要千位开出1或者6其中任意一个号码都视为中奖。<br>
                        五行号码分布 :<br>
                        <ol start="1" type="a">
                            <li>金：1，6</li>
                            <li>木：2，7</li>
                            <li>水：3，8</li>
                            <li>火：4，9</li>
                            <li>土：5，0</li>
                        </ol>
                    </li>
                    <li>号码量：以国家体彩7个开奖结果为准，7个开奖号码内开出的号码数量计算，重复的号码则算一个。如：当期开奖号码为 4  5  3  5  0  9  3 ，总计开出5个号，则5现中奖。</li>
                    <li>数倍：以国家体彩7个开奖结果为准，7个开奖号码内开出的号码出现在所下注的号码则中奖，如果出现号码重复派彩将倍增。<br>
                        如：下注＄100，赔率1.9<br>
                        <ol start="1" type="a">
                            <li>开奖号码为 4  5  2  2  0  9  3 ，下注号码为3，派彩为＄90</li>
                            <li>开奖号码为 4  5  3  5  0  9  3 ，下注号码为3，派彩为＄180</li>
                            <li>开奖号码为 4  5  3  3  0  9  3 ，下注号码为3，派彩为＄270</li>
                        </ol>
                    </li>
                    <li>组选三：以国家体彩7个开奖结果为准，前三指第一位~第三位，中三指第三位~第五位，后三指第五位~第七位。<br>
                        <ol start="1" type="a">
                            <li>前三：会员可以任意挑选一组或者多组号码，当开奖结果[仟位、佰位、拾位]只有两个号码重复，则视为中奖。如果是选择12,其中有一个号码重复则中奖。 ※例如：112、211、122、221、若是开出豹子则不算中奖。 ※备注："豹子"为三字同号，例如：111、222。</li>
                            <li>中三：会员可以任意挑选一组或者多组号码，当开奖结果[拾位、个位、球5]只有两个号码重复，则视为中奖。如果是选择12,34,其中有一个号码重复则中奖。 ※例如：112、344，若是开出豹子则不算中奖。 ※备注："豹子"为三字同号，例如：111、222</li>
                            <li>后三：会员可以任意挑选一组或者多组号码，当开奖结果[球5、球6、球7]只有两个号码重复，则视为中奖。如果是选择12,34,其中有一个号码重复则中奖。 ※例如：112、344，若是开出豹子则不算中奖。 ※备注："豹子"为三字同号，例如：111、222 （有两个相同但没有相连的也是不中奖的，列如：121、212、123等。）</li>
                        </ol>
                    </li>
                    <li>五六七球直选：以国家体彩7个开奖结果的最后三位则球5、球6、球7为开奖依据。分为全三直选为球5、球6、球7，前二直选为球5、球6，后二直选为球6、球7。
                        <br>
                        开奖结果：4  5  2  2  0  9  9
                        <br>
                        如：<br>
                        <ol start="1" type="a">
                            <li>投注全三直选0  9  9，开奖球5、球6、球7的投注号码顺序一致，则中奖。</li>
                            <li>投注前二直选0  9 ，开奖球5、球6的投注号码顺序一致，则中奖。</li>
                            <li>投注后二直选9  9 ，开奖球6、球7的投注号码顺序一致，则中奖。</li>
                        </ol>
                    </li>
                    <li>其他：包含春夏秋冬，天玄地机，上中下和，波色。以国家体彩7个开奖结果为准。
                                  <ol start="1" type="a">
                                        <li>春夏秋冬：根据开奖结果的号码，选择任意一组投注，开出的结果在该组号码中视为中奖。<br>
                                            如：投注千位的春，开出结果千位为0，则为中奖<br>
                                            春：0、4、8<br>
                                            夏：1、5、9<br>
                                            秋：2、6<br>
                                            冬：3、7
                                        </li>
                                        <li>天玄地机：根据开奖结果的号码，选择任意一组投注，开出的结果在该组号码中视为中奖。<br>
                                            如：投注千位的天玄，开出结果千位为0，则为中奖<br>
                                            天玄：1、4、7、9、0<br>
                                            地机：2、3、5、6、8
                                        </li>
                                        <li>上中下和：根据开奖结果的号码，选择任意一组投注，开出的结果在该组号码中视为中奖。<br>
                                            如：投注千位的上，开出结果千位为9，则为中奖，开出0则算和。<br>
                                            上：7、8、9<br>
                                            中：4、5、6<br>
                                            下：1、2、3<br>
                                            和：0
                                        </li>
                                        <li>波色:根据开奖结果的号码，选择任意一组投注，开出的结果在该组号码中视为中奖。<br>
                                            如：投注千位的绿，开出结果千位为9，则为中奖。
                                            <br>
                                            红 0  3  5  7<br>
                                            蓝 2  6  8<br>
                                            绿 1  4  9
                                        </li>
                                    </ol>
                    </li>
                    <li>二码总成：以国家体彩7个开奖结果为准，相邻两个号码相加，如第一球与第二球，第二球与第三球，第三球与第四球，第四球与第五球，第五球与第六球，第六球与第七球，每组相加得出的总和的尾数0~4为小，5~9为大，尾数0,2,4,6,8为双，1,3,5,7,9为单。<br>
                        如：开奖结果为4  5  2  2  0  9  3<br>
                        投注1+2，则第一球与第二球相加投注大，单，即可中奖。<br>
                        投注3+4，则第三球与第四球相加投注小，双，即可中奖。
                    </li>
                </ol>
            </td>
        </tr>
    </tbody></table>

    <table border="0" cellpadding="0" cellspacing="0" width="700" style="margin-bottom:10px;">
        <tbody><tr>
            <td style="width: 15px;">&nbsp;</td>
            <td><span class="font_b">注意：以上说明“赔率”仅作为规则讲解示范用，实际赔率以投注注单为准。</span></td>
        </tr>
      </tbody>
    </table>

</div>


</template>

<script>
import { mapGetters } from 'vuex';
export default {
  components: {
  },
  data() {
    return {
      cbocai: '',
    }
  },
  created() {
    if(this.cbocai == '') {
      this.getBocai();
    }
  },
  computed: {
    ...mapGetters({
        bocaiTypeList: 'getbocaiTypeList'
    }),
  },
  methods: {
    async getBocai() {
      let res = await this.$get(`${window.url}/api/getBocai`);

          if(res.code===200){
            this.cbocai = res.bocaiTypeList[0].bocaiName;
          }
    }
  },
  mounted() {
  },
  updated() {
  }
};
</script>
<style scoped>
 #gameRule {
    margin: 10px 0px 0px;
  }
</style>
<style lang="less">
  #gameRule {
    margin: 10px 0px 0px;
  }
</style>