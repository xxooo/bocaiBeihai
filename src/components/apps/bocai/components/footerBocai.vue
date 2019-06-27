<template>
  <div id="lotteryno" v-if="[1].findIndex((n) => n==curBocaiTypeId)>-1">

    <template v-if="['两面盘'].findIndex((n) => n==showOdds)>-1">

      <table class="Ball_List" border="0" cellspacing="1" cellpadding="0" width="700" id="BallList">
        <tbody>
          <tr>
            <td id="sRB_1" class="td_caption_1 td_caption_2 getsubtit1"  @click="getsubtit(1)"><a>总和大小</a></td>
            <td id="sRB_2" class="td_caption_1 getsubtit2" @click="getsubtit(2)"><a>总和单双</a></td>
            <td id="sRB_3" class="td_caption_1 getsubtit3" @click="getsubtit(3)"><a>龙虎和</a></td>    
          </tr>
          <tr class="Ball_tr_H">
            <td colspan="3">
              <table class="Ball_List" border="0" cellspacing="0" cellpadding="0" width="698">
                <tbody>
                  <tr v-if="subtit == 1" class="Ball_tr_H" valign="top" id="lotteryno_tr1" style="height: auto; min-height: 25px;">
                    <td width="28" v-for="(item,index) in zonghedaxiaoList.slice(0,25)" :class="(+index+1)%2 == 0 ? 'Jut_caption_1' : ''">
                      <template v-if="item != ''">
                        <p v-for="itemsub in item.value">{{itemsub}}</p>
                      </template>
                    </td>
                  </tr>

                  <tr v-if="subtit == 2" class="Ball_tr_H" valign="top" id="lotteryno_tr2" style="height:auto;min-height:25px;">
                    <td width="28" v-for="(item,index) in zonghedanshuangList.slice(0,25)" :class="(+index+1)%2 == 0 ? 'Jut_caption_1' : ''">
                      <template v-if="item != ''">
                        <p v-for="itemsub in item.value">{{itemsub}}</p>
                      </template>
                    </td>
                  </tr>
                  <tr v-if="subtit == 3" class="Ball_tr_H" valign="top" id="lotteryno_tr3" style="height:auto;min-height:25px;">
                    <td width="28" v-for="(item,index) in longhuheList.slice(0,25)" :class="(+index+1)%2 == 0 ? 'Jut_caption_1' : ''">
                      <template v-if="item != ''">
                        <p v-for="itemsub in item.value">{{itemsub}}</p>
                      </template>
                    </td>
                  </tr>   
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

    </template>

  </div>



  <!-- <div>
            <div class="bead-table">

              <table class="bead-ball" v-if="curBocaiTypeId != 8266">
                <tr v-if="[1,8815,8811,8374,8813].findIndex((n) => n==curBocaiTypeId)>-1">
                  <th class="active getqiu1" @click="getqiu(1,'第一球')">第一球</th>
                  <th class="getqiu2" @click="getqiu(2,'第二球')">第二球</th>
                  <th class="getqiu3" @click="getqiu(3,'第三球')">第三球</th>
                  <th class="getqiu4" @click="getqiu(4,'第四球')">第四球</th>
                  <th class="getqiu5" @click="getqiu(5,'第五球')">第五球</th>
                </tr>
                <tr v-if="[8555,8806,9057].findIndex((n) => n==curBocaiTypeId)>-1">
                  <th class="active getqiu1" @click="getqiu(1,'冠军')">冠军</th>
                  <th class="getqiu2" @click="getqiu(2,'亚军')">亚军</th>
                  <th class="getqiu3" @click="getqiu(3,'第三名')">第三名</th>
                  <th class="getqiu4" @click="getqiu(4,'第四名')">第四名</th>
                  <th class="getqiu5" @click="getqiu(5,'第五名')">第五名</th>
                  <th class="getqiu5" @click="getqiu(6,'第六名')">第六名</th>
                  <th class="getqiu5" @click="getqiu(7,'第七名')">第七名</th>
                  <th class="getqiu5" @click="getqiu(8,'第八名')">第八名</th>
                  <th class="getqiu5" @click="getqiu(9,'第九名')">第九名</th>
                  <th class="getqiu5" @click="getqiu(10,'第十名')">第十名</th>
                </tr>
              </table>




              <table v-if="curBocaiTypeId != 8266">
                <tr class="td-head" v-if="[1,8815].findIndex((n) => n==curBocaiTypeId)>-1">
                  <td>0</td> 
                  <td>1</td> 
                  <td>2</td> 
                  <td>3</td> 
                  <td>4</td> 
                  <td>5</td> 
                  <td>6</td> 
                  <td>7</td> 
                  <td>8</td> 
                  <td>9</td>
                </tr>
                <tr class="td-head" v-if="[8811,8374,8813].findIndex((n) => n==curBocaiTypeId)>-1">
                  <td style="width: 8%;">1</td> 
                  <td style="width: 8%;">2</td> 
                  <td style="width: 8%;">3</td> 
                  <td style="width: 8%;">4</td> 
                  <td style="width: 8%;">5</td> 
                  <td style="width: 8%;">6</td> 
                  <td style="width: 8%;">7</td> 
                  <td style="width: 8%;">8</td> 
                  <td style="width: 8%;">9</td>
                  <td style="width: 8%;">10</td>
                  <td style="width: 8%;">11</td>
                </tr>
                <tr class="td-head" v-if="[8555,8806,9057].findIndex((n) => n==curBocaiTypeId)>-1">
                  <td>1</td> 
                  <td>2</td> 
                  <td>3</td> 
                  <td>4</td> 
                  <td>5</td> 
                  <td>6</td> 
                  <td>7</td> 
                  <td>8</td> 
                  <td>9</td>
                  <td>10</td>
                </tr>

                <tr>
                  <td v-for="(item,key) in countsList">{{item}}</td>
                </tr>
                
              </table>

              <table width="100%" class="bead-ball">
                <tr v-if="curBocaiTypeId != 8266">
                  <th class="active getsubtit1" @click="getsubtit(1)" v-if="[1,8815,8811,8374,8813].findIndex((n) => n==curBocaiTypeId)>-1">{{subtitLabel}}</th>
                  <th class="active getsubtit1" @click="getsubtit(1)" v-if="[8555,8806,9057].findIndex((n) => n==curBocaiTypeId)>-1">{{subtitLabel2}}</th>
                  <th class="getsubtit2" @click="getsubtit(2)">大小</th> 
                  <th class="getsubtit3" @click="getsubtit(3)">单双</th> 
                  <th class="getsubtit4" @click="getsubtit(4)" v-if="[1,8815,8811,8374,8813].findIndex((n) => n==curBocaiTypeId)>-1">总和大小</th> 
                  <th class="getsubtit5" @click="getsubtit(5)" v-if="[1,8815,8811,8374,8813].findIndex((n) => n==curBocaiTypeId)>-1">总和单双</th>

                  <th class="getsubtit6" @click="getsubtit(6)" v-if="[1,8815].findIndex((n) => n==curBocaiTypeId)>-1">龙虎和</th>

                  <th class="getsubtit7" @click="getsubtit(7)" v-if="[8811,8374,8813].findIndex((n) => n==curBocaiTypeId)>-1">总和尾数大小</th>
                  <th class="getsubtit8" @click="getsubtit(8)" v-if="[8811,8374,8813].findIndex((n) => n==curBocaiTypeId)>-1">龙虎</th>

                  <th class="getsubtit7" @click="getsubtit(9)" v-if="[8555,8806,9057].findIndex((n) => n==curBocaiTypeId)>-1">冠亚军和</th>
                  <th class="getsubtit8" @click="getsubtit(10)" v-if="[8555,8806,9057].findIndex((n) => n==curBocaiTypeId)>-1">冠亚军和大小</th>
                  <th class="getsubtit8" @click="getsubtit(11)" v-if="[8555,8806,9057].findIndex((n) => n==curBocaiTypeId)>-1">冠亚军和单双</th>


                </tr>

                <tr v-else>
                  <th class="active getsubtit1" @click="getsubtit(1)">总和数</th>
                  <th class="getsubtit2" @click="getsubtit(2)">总和大小</th>
                  <th class="getsubtit3" @click="getsubtit(3)">总和单双</th>
                  <th class="getsubtit4" @click="getsubtit(4)">五行</th>
                  <th class="getsubtit5" @click="getsubtit(5)">前后和</th>
                  <th class="getsubtit6" @click="getsubtit(6)">单双和</th>
                </tr>
              </table>

              <table v-if="curBocaiTypeId != 8266">

                <tr v-if="subtit == 1">
                  <td width="4%" class="bead-list" v-for="(item,index) in numMapListTemp">
                    <p v-for="itemsub in item.value">{{itemsub}}</p>
                  </td>
                </tr>

                <tr v-if="subtit == 2">
                  <td width="4%" class="bead-list" v-for="(item,index) in daxiaoMapListTemp">
                    <p v-for="itemsub in item.value">{{itemsub}}</p>
                  </td>
                </tr>

                <tr v-if="subtit == 3">
                  <td width="4%" class="bead-list" v-for="(item,index) in danshuangMapListTemp">
                    <p v-for="itemsub in item.value">{{itemsub}}</p>
                  </td>
                </tr>

                <tr v-if="subtit == 4">
                  <td width="4%" class="bead-list" v-for="(item,index) in zonghedaxiaoList">
                    <p v-for="itemsub in item.value">{{itemsub}}</p>
                  </td>
                </tr>

                <tr v-if="subtit == 5">
                  <td width="4%" class="bead-list" v-for="(item,index) in zonghedanshuangList">
                    <p v-for="itemsub in item.value">{{itemsub}}</p>
                  </td>
                </tr>

                <tr v-if="subtit == 6">
                  <td width="4%" class="bead-list" v-for="(item,index) in longhuheList">
                    <p v-for="itemsub in item.value">{{itemsub}}</p>
                  </td>
                </tr>

                <tr v-if="subtit == 7">
                  <td width="4%" class="bead-list" v-for="(item,index) in zongheweishudaxiaoList">
                    <p v-for="itemsub in item.value">{{itemsub}}</p>
                  </td>
                </tr>

                <tr v-if="subtit == 8">
                  <td width="4%" class="bead-list" v-for="(item,index) in longhuList">
                    <p v-for="itemsub in item.value">{{itemsub}}</p>
                  </td>
                </tr>

                <tr v-if="subtit == 9">
                  <td width="4%" class="bead-list" v-for="(item,index) in guanyijunhe">
                    <p v-for="itemsub in item.value">{{itemsub}}</p>
                  </td>
                </tr>

                <tr v-if="subtit == 10">
                  <td width="4%" class="bead-list" v-for="(item,index) in guanyajunhedaxiao">
                    <p v-for="itemsub in item.value">{{itemsub}}</p>
                  </td>
                </tr>

                <tr v-if="subtit == 11">
                  <td width="4%" class="bead-list" v-for="(item,index) in guanyejunhedanshuang">
                    <p v-for="itemsub in item.value">{{itemsub}}</p>
                  </td>
                </tr>

              </table>

              <table v-if="curBocaiTypeId == 8266">

                <tr v-if="subtit == 1">
                  <td width="4%" class="bead-list" v-for="(item,index) in zongheshu">
                    <p v-for="itemsub in item.value">{{itemsub}}</p>
                  </td>
                </tr>

                <tr v-if="subtit == 2">
                  <td width="4%" class="bead-list" v-for="(item,index) in zonghedaxiaoList">
                    <p v-for="itemsub in item.value">{{itemsub}}</p>
                  </td>
                </tr>

                <tr v-if="subtit == 3">
                  <td width="4%" class="bead-list" v-for="(item,index) in zonghedanshuangList">
                    <p v-for="itemsub in item.value">{{itemsub}}</p>
                  </td>
                </tr>

                <tr v-if="subtit == 4">
                  <td width="4%" class="bead-list" v-for="(item,index) in wuxing">
                    <p v-for="itemsub in item.value">{{itemsub}}</p>
                  </td>
                </tr>

                <tr v-if="subtit == 5">
                  <td width="4%" class="bead-list" v-for="(item,index) in qianhouhe">
                    <p v-for="itemsub in item.value">{{itemsub}}</p>
                  </td>
                </tr>

                <tr v-if="subtit == 6">
                  <td width="4%" class="bead-list" v-for="(item,index) in danshuanghe">
                    <p v-for="itemsub in item.value">{{itemsub}}</p>
                  </td>
                </tr>

              </table>
            </div>

  </div> -->
</template>


<script>
	export default {
		props: {
      curBocaiTypeId: {
        type: Number 
      },
      showOdds: {
        type: String
      }
		},
		data() {
			return {
        subtitLabel: '第一球',
        subtitLabel2: '冠军',
        subtit: 1,
        counts: [],
        countsList: [],
        numMapList: [],
        numMapListTemp: [],
        danshuangMapList: [],
        danshuangMapListTemp: [],
        daxiaoMapList: [],
        daxiaoMapListTemp: [],
        zonghedaxiaoList: [],
        zonghedanshuangList: [],
        longhuheList: [],
        zongheweishudaxiaoList: [],
        longhuList: [],

        zongheshu: [],
        wuxing: [],
        qianhouhe: [],
        danshuanghe: [],

        guanyijunhe: [],
        guanyajunhedaxiao: [],
        guanyejunhedanshuang: []

			}
		},
    components: {
		},
		created() {
      this.gettongji(this.curBocaiTypeId);
    },
    computed:{
    },
    mounted(){
    },
		methods: {
      async gettongji(bocaiId) {
        let that = this;
            await that.$get(`${window.url}/api/tongji?bocaiTypeId=`+bocaiId).then((res) => {
              that.$handelResponse(res, (result) => {
                if(result.code===200){

                  if(result.data.counts) {
                    this.counts = result.data.counts;

                    this.countsList = this.counts[0];
                  }
                  

                  for(let x in result.data.numMap) {
                    let data = result.data.numMap[x].split(","); 

                    let numMapTemp = [];
                    let temp = '';
                    let nn = 1;
                    for(let n in data) {
                      let obj = {};
                      if(temp != data[n]) {
                        obj.type = 1;
                        obj.value = [];
                        obj.value.push(data[n]);
                        numMapTemp.push(obj);
                      } else {
                        if(numMapTemp[n*1-nn]) {
                          numMapTemp[n*1-nn].type = 2;
                          numMapTemp[n*1-nn].value.push(data[n]);
                          nn = nn++;
                        }
                      }
                      temp = data[n];
                    }
                    this.numMapList.push(numMapTemp);
                  }

                  this.numMapListTemp = this.numMapList[0];

                  for(let x in result.data.danshuangMap) {
                    let data = result.data.danshuangMap[x].split(","); 

                    let numMapTemp = [];
                    let temp = '';
                    let nn = 1;
                    
                    for(let n in data) {
                      let obj = {};
                      if(temp != data[n]) {  
                        obj.type = 1;
                        obj.value = [];
                        obj.value.push(data[n]);
                        numMapTemp.push(obj);
                      } else {
                        let kk = n*1-nn;
                        if(numMapTemp[n*1-nn]) {
                          numMapTemp[n*1-nn].type = 2;
                          numMapTemp[n*1-nn].value.push(data[n]);
                          nn = nn*1+1;
                        }
                      }

                      temp = data[n];
                    }
                    this.danshuangMapList.push(numMapTemp);
                  }

                    this.danshuangMapListTemp = this.danshuangMapList[0];
              
                    for(let x in result.data.daxiaoMap) {
                      let data = result.data.daxiaoMap[x].split(","); 
                      let numMapTemp = [];
                      let temp = '';
                      let nn = 1;
                      for(let n in data) {
                        let obj = {};
                        if(temp != data[n]) {  
                          obj.type = 1;
                          obj.value = [];
                          obj.value.push(data[n]);
                          numMapTemp.push(obj);
                        } else {
                          let kk = n*1-nn;
                          if(numMapTemp[n*1-nn]) {
                            numMapTemp[n*1-nn].type = 2;
                            numMapTemp[n*1-nn].value.push(data[n]);
                            nn = nn*1+1;
                          }
                        }

                        temp = data[n];
                      }
                      this.daxiaoMapList.push(numMapTemp);
                    }
                    this.daxiaoMapListTemp = this.daxiaoMapList[0];
                    

                    if(result.data.zonghedaxiao) {
                      let data = result.data.zonghedaxiao.split(","); 
                      let temp = '';
                      let nn = 1;
                      for(let n in data) {
                        let obj = {};
                        if(temp != data[n]) {  
                          obj.type = 1;
                          obj.value = [];
                          obj.value.push(data[n]);
                          this.zonghedaxiaoList.push(obj);
                        } else {
                          let kk = n*1-nn;
                          if(this.zonghedaxiaoList[n*1-nn]) {
                            this.zonghedaxiaoList[n*1-nn].type = 2;
                            this.zonghedaxiaoList[n*1-nn].value.push(data[n]);
                            nn = nn*1+1;
                          }
                        }

                        temp = data[n];
                      }
                    }

                    
                    if(result.data.zonghedanshuang) {
                      let data2 = result.data.zonghedanshuang.split(","); 
                      let temp2 = '';
                      let nn2 = 1;
                      for(let n in data2) {
                        let obj = {};
                        if(temp2 != data2[n]) {  
                          obj.type = 1;
                          obj.value = [];
                          obj.value.push(data2[n]);
                          this.zonghedanshuangList.push(obj);
                        } else {
                          let kk = n*1-nn2;
                          if(this.zonghedanshuangList[n*1-nn2]) {
                            this.zonghedanshuangList[n*1-nn2].type = 2;
                            this.zonghedanshuangList[n*1-nn2].value.push(data2[n]);
                            nn2 = nn2*1+1;
                          }
                        }

                        temp2 = data2[n];
                      }
                    }
                    

                    if(result.data.longhuhe) {
                      let data3 = result.data.longhuhe.split(","); 
                      let temp3 = '';
                      let nn3 = 1;
                      for(let n in data3) {
                        let obj = {};
                        if(temp3 != data3[n]) {  
                          obj.type = 1;
                          obj.value = [];
                          obj.value.push(data3[n]);
                          this.longhuheList.push(obj);
                        } else {
                          let kk = n*1-nn3;
                          if(this.longhuheList[n*1-nn3]) {
                            this.longhuheList[n*1-nn3].type = 2;
                            this.longhuheList[n*1-nn3].value.push(data3[n]);
                            nn3 = nn3*1+1;
                          }
                        }

                        temp3 = data3[n];
                      }
                    }

                    if(result.data.zongheweishudaxiao) {
                      let data3 = result.data.zongheweishudaxiao.split(","); 
                      let temp3 = '';
                      let nn3 = 1;
                      for(let n in data3) {
                        let obj = {};
                        if(temp3 != data3[n]) {  
                          obj.type = 1;
                          obj.value = [];
                          obj.value.push(data3[n]);
                          this.zongheweishudaxiaoList.push(obj);
                        } else {
                          let kk = n*1-nn3;
                          if(this.zongheweishudaxiaoList[n*1-nn3]) {
                            this.zongheweishudaxiaoList[n*1-nn3].type = 2;
                            this.zongheweishudaxiaoList[n*1-nn3].value.push(data3[n]);
                            nn3 = nn3*1+1;
                          }
                        }

                        temp3 = data3[n];
                      }
                    }

                    if(result.data.longhu) {
                      let data3 = result.data.longhu.split(","); 
                      let temp3 = '';
                      let nn3 = 1;
                      for(let n in data3) {
                        let obj = {};
                        if(temp3 != data3[n]) {  
                          obj.type = 1;
                          obj.value = [];
                          obj.value.push(data3[n]);
                          this.longhuList.push(obj);
                        } else {
                          let kk = n*1-nn3;
                          if(this.longhuList[n*1-nn3]) {
                            this.longhuList[n*1-nn3].type = 2;
                            this.longhuList[n*1-nn3].value.push(data3[n]);
                            nn3 = nn3*1+1;
                          }
                        }

                        temp3 = data3[n];
                      }
                    }


                    if(result.data.zhongheshu) {

                      let data3 = result.data.zhongheshu.split(","); 
                      let temp3 = '';
                      let nn3 = 1;
                      for(let n in data3) {
                        let obj = {};
                        if(temp3 != data3[n]) {  
                          obj.type = 1;
                          obj.value = [];
                          obj.value.push(data3[n]);
                          this.zongheshu.push(obj);
                        } else {
                          let kk = n*1-nn3;
                          if(this.zongheshu[n*1-nn3]) {
                            this.zongheshu[n*1-nn3].type = 2;
                            this.zongheshu[n*1-nn3].value.push(data3[n]);
                            nn3 = nn3*1+1;
                          }
                        }

                        temp3 = data3[n];
                      }

                      console.log('zongheshu',this.zongheshu);
                    }

                    if(result.data.wuxing) {

                      let data3 = result.data.wuxing.split(","); 
                      let temp3 = '';
                      let nn3 = 1;
                      for(let n in data3) {
                        let obj = {};
                        if(temp3 != data3[n]) {  
                          obj.type = 1;
                          obj.value = [];
                          obj.value.push(data3[n]);
                          this.wuxing.push(obj);
                        } else {
                          let kk = n*1-nn3;
                          if(this.wuxing[n*1-nn3]) {
                            this.wuxing[n*1-nn3].type = 2;
                            this.wuxing[n*1-nn3].value.push(data3[n]);
                            nn3 = nn3*1+1;
                          }
                        }

                        temp3 = data3[n];
                      }

                      console.log('wuxing',this.wuxing);
                    }

                    if(result.data.qianhouhe) {

                      let data3 = result.data.qianhouhe.split(","); 
                      let temp3 = '';
                      let nn3 = 1;
                      for(let n in data3) {
                        let obj = {};
                        if(temp3 != data3[n]) {  
                          obj.type = 1;
                          obj.value = [];
                          obj.value.push(data3[n]);
                          this.qianhouhe.push(obj);
                        } else {
                          let kk = n*1-nn3;
                          if(this.qianhouhe[n*1-nn3]) {
                            this.qianhouhe[n*1-nn3].type = 2;
                            this.qianhouhe[n*1-nn3].value.push(data3[n]);
                            nn3 = nn3*1+1;
                          }
                        }

                        temp3 = data3[n];
                      }

                      console.log('qianhouhe',this.qianhouhe);
                    }

                    if(result.data.danshuanghe) {

                      let data3 = result.data.danshuanghe.split(","); 
                      let temp3 = '';
                      let nn3 = 1;
                      for(let n in data3) {
                        let obj = {};
                        if(temp3 != data3[n]) {  
                          obj.type = 1;
                          obj.value = [];
                          obj.value.push(data3[n]);
                          this.danshuanghe.push(obj);
                        } else {
                          let kk = n*1-nn3;
                          if(this.danshuanghe[n*1-nn3]) {
                            this.danshuanghe[n*1-nn3].type = 2;
                            this.danshuanghe[n*1-nn3].value.push(data3[n]);
                            nn3 = nn3*1+1;
                          }
                        }

                        temp3 = data3[n];
                      }

                      console.log('danshuanghe',this.danshuanghe);
                    }

                    if(result.data.guanyijunhe) {

                      let data3 = result.data.guanyijunhe.split(","); 
                      let temp3 = '';
                      let nn3 = 1;
                      for(let n in data3) {
                        let obj = {};
                        if(temp3 != data3[n]) {  
                          obj.type = 1;
                          obj.value = [];
                          obj.value.push(data3[n]);
                          this.guanyijunhe.push(obj);
                        } else {
                          let kk = n*1-nn3;
                          if(this.guanyijunhe[n*1-nn3]) {
                            this.guanyijunhe[n*1-nn3].type = 2;
                            this.guanyijunhe[n*1-nn3].value.push(data3[n]);
                            nn3 = nn3*1+1;
                          }
                        }

                        temp3 = data3[n];
                      }

                      console.log('guanyijunhe',this.guanyijunhe);
                    }

                    if(result.data.guanyajunhedaxiao) {

                      let data3 = result.data.guanyajunhedaxiao.split(","); 
                      let temp3 = '';
                      let nn3 = 1;
                      for(let n in data3) {
                        let obj = {};
                        if(temp3 != data3[n]) {  
                          obj.type = 1;
                          obj.value = [];
                          obj.value.push(data3[n]);
                          this.guanyajunhedaxiao.push(obj);
                        } else {
                          let kk = n*1-nn3;
                          if(this.guanyajunhedaxiao[n*1-nn3]) {
                            this.guanyajunhedaxiao[n*1-nn3].type = 2;
                            this.guanyajunhedaxiao[n*1-nn3].value.push(data3[n]);
                            nn3 = nn3*1+1;
                          }
                        }

                        temp3 = data3[n];
                      }

                      console.log('guanyajunhedaxiao',this.guanyajunhedaxiao);
                    }

                    if(result.data.guanyejunhedanshuang) {

                      let data3 = result.data.guanyejunhedanshuang.split(","); 
                      let temp3 = '';
                      let nn3 = 1;
                      for(let n in data3) {
                        let obj = {};
                        if(temp3 != data3[n]) {  
                          obj.type = 1;
                          obj.value = [];
                          obj.value.push(data3[n]);
                          this.guanyejunhedanshuang.push(obj);
                        } else {
                          let kk = n*1-nn3;
                          if(this.guanyejunhedanshuang[n*1-nn3]) {
                            this.guanyejunhedanshuang[n*1-nn3].type = 2;
                            this.guanyejunhedanshuang[n*1-nn3].value.push(data3[n]);
                            nn3 = nn3*1+1;
                          }
                        }

                        temp3 = data3[n];
                      }

                      console.log('guanyejunhedanshuang',this.guanyejunhedanshuang);
                    }

                    this.longhuheList = this.longhuheList.slice(0,25);;

                    let dxlhNum = this.longhuheList.length*1 - this.zonghedaxiaoList.length*1;
                    let zhdslhNum = this.longhuheList.length*1 - this.zonghedanshuangList.length*1;
                    let dxlhNumList = [];
                    let zhdslhNumList = [];

                    //console.log('zonghedaxiaoList',this.zonghedaxiaoList);


                    for(let i = 0; i < dxlhNum; i++) {
                       dxlhNumList.push('');
                    }

                    for(let i = 0; i < zhdslhNum; i++) {
                       zhdslhNumList.push('');
                    }

                    for(let n in this.zonghedaxiaoList) {
                      dxlhNumList.push(this.zonghedaxiaoList[n]);
                    }
                    for(let n in this.zonghedanshuangList) {
                      zhdslhNumList.push(this.zonghedanshuangList[n]);
                    }

                    this.zonghedaxiaoList = dxlhNumList;
                    this.zonghedanshuangList = zhdslhNumList;

                    //console.log('zonghedaxiaoList',this.zonghedaxiaoList);

                }
              })
            });
      },
        getsubtit(num) {
          this.subtit = num;
          $('.getsubtit'+num).addClass('td_caption_2').siblings().removeClass('td_caption_2');
        },
        getqiu(num,tit) {
          this.numMapListTemp = this.numMapList[num*1-1];
          this.daxiaoMapListTemp = this.daxiaoMapList[num*1-1];
          this.danshuangMapListTemp = this.danshuangMapList[num*1-1];
          this.subtitLabel = tit;
          this.subtitLabel2 = tit;
          this.countsList = this.counts[num*1-1];
          $('.getqiu'+num).addClass('active').siblings().removeClass('active');
        }

      }

	}

</script>

<style scoped>

</style>

<style lang="less">


</style>
