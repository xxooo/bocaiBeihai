<template>
  <div>
    <div class="btnDivArea " id="btnDivArea11">  
      <template v-if="!isOdding"> 
        <input id="chk_qcstake" type="checkbox" v-model="kuaijiePay" @click="reset2()">
        <span class="kuaijieSpan">快捷下注</span>
        <span id="sp_qcstake" class="yibanSpan" v-if="kuaijiePay">金额：
          <input id="txtqcstake" type="text" class="wid60" v-model.number="moneyOrderTemp" v-on:input ="inputFuncOrder(moneyOrderTemp)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
          <span @click="QCExplain()" class="shuomiSpan">说明</span>
        </span>
        <input type="reset" value="重 填" class="button_bg1" @click="reset()"> 
        <input type="button" value="下 注" class="button_bg1" @click="orderOddsTo()">
      </template>

      <span v-else style="color:red">下注中,请等待。。。</span>
      
    </div> 


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
            {{hasErrorMessage}}
          </template>
          <template v-else>
            <div style="font-size:14px; text-align:center; color:#000; line-height:30px;">下注明细如下， 是否确定？</div>
            <table border="0" cellpadding="0" cellspacing="0" width="100%" class="tbline" style="text-align:center;">
              <tbody>
                <tr class="trH">
                  <td colspan="2">下注内容</td>
                  <td>赔率</td>
                  <td>金额</td>
                </tr>
                <tr class="trH">
                  <td>共{{orderList.length}}笔</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>{{totalMoney}}</td>
                </tr>
                <tr v-for="(item,index) in orderList">
                  <td style="text-align:left;" class="pop_title">{{item.bocaiCategory2Name}}</td>
                  <td>{{item.bocaiOddName}}</td>
                  <td>{{item.bocaiOdds}}</td>
                  <td>{{item.betsMoney}}</td>
                </tr>
              </tbody>
            </table>
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

  </div>
</template>


<script>
  import { mapGetters } from 'vuex';


  export default {
    props: {
      orderDataList: {
        type: Array
      }
    },
    data() {
      return {
        radio10: '1',
        hahahaid: '',
        moneyOrderTemp: '',
        kuaijiePay: false,
        isOpenOdds: true,
        disableBtn: true,
        choumaPay: 0,
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
        oddIng: false
      }
    },
    components: {
    },
    created() {
      let that = this;
      document.onkeydown = function (e) {
        let key = window.event.keyCode;
        if (key === 13){

          console.log('that.focusIndex13313',that.focusIndex);

          if(that.focusIndex == 1) {
            that.orderOddsTo();
          } else if(that.focusIndex == 2) {
            that.orderSub();
          }
          
        }
      }
    },
    computed:{
      ...mapGetters({
        bocaiInfoData: 'getbocaiInfoData',
        bocaiName: 'getbocaiName',
        userInfo: 'getuserInfo',
        bocaiCategory: 'getbocaiCategory',
        bocaiTypeId: 'getbocaiTypeId',
        curPeriods: 'getcurPeriods',
        isOdding: 'getisOdding',
        oddsList: 'getoddsList',
        focusIndex: 'getfocusIndex',
        orderList: 'getorderList',
        orderOddsVisible: 'getorderOddsVisible',
        moneyOrder: 'getmoneyOrder',
        hasError: 'gethasError',
        hasErrorMessage: 'gethasErrorMessage'
      }),
      totalMoney() {
        let totalMoney = 0;
        for(let n in this.orderList) {
          totalMoney += this.orderList[n].betsMoney*1;
        }
        return totalMoney;
      },
      differTime() {
        let now = new Date();
        return this.bocaiInfoData.nowTime ? now.getTime() - this.bocaiInfoData.nowTime*1000 : 0;
      }
    },
    mounted(){
      bus.$on('isOpenOdds', (data) => {
        this.isOpenOdds = data;
      });
      bus.$on('getkuaijiePay', (data) => {
        this.kuaijiePay = data;
      });
      bus.$on('gotoreset', (data) => {
        this.reset();
      });
    },
    methods: {
      inputFuncOrder(moneyOrderTemp) {
        console.log('moneyOrderTemp',moneyOrderTemp);
        store.commit('updatemoneyOrder',moneyOrderTemp);
      },
      QCExplain() {
        bus.$emit('showleftMessage','鼠标点击选中赔率下注，选好后输入金额来方便快速下注');
      },
      cancelOdd() {
        store.commit('updateorderOddsVisible',false);
        store.commit('updateisOdding', false);
      },
      reset2() {
        console.log('this.kuaijiePay--reset',this.kuaijiePay)
        store.commit('updateisOdding',false);

        store.commit('updatemoneyOrder','');
        this.moneyOrderTemp = '';
        store.commit('updatefocusIndex',1);

        this.$emit('childByReset',!this.kuaijiePay,this.oddsList);

        this.orderOdds2();
      },
      reset() {
        console.log('this.kuaijiePay--reset',this.kuaijiePay)
        store.commit('updateisOdding',false);

        store.commit('updatemoneyOrder','');
        this.moneyOrderTemp = '';
        store.commit('updatefocusIndex',1);

        this.$emit('childByReset',this.kuaijiePay,this.oddsList);

        this.orderOdds2();

        store.commit('updatefocusIndex',1);

      },
      async orderSub() {

        console.log('this.curPeriods3333333333',this.curPeriods,'this.orderList',this.orderList);
        //console.log('this.bocaiInfoData.bocaiPeriodsId',this.bocaiInfoData.bocaiPeriods);

        if(this.curPeriods != this.bocaiInfoData.bocaiPeriods) {
            bus.$emit('toleftShow',22,'指定期数为非交易状态!');
            store.commit('updateorderOddsVisible',false);
        } else if(!this.isOpenOdds) {
            bus.$emit('toleftShow',22,'非交易时间,不允许下注!');
            store.commit('updateorderOddsVisible',false);
        } else if(this.userInfo.isFrozen == 1) {
            bus.$emit('toleftShow',22,'该帐号或上级代理被禁用或暂停下注');
            store.commit('updateorderOddsVisible',false);
        } else {

          //console.log('this.bocaiName',this.bocaiName);

          //console.log('this.bocaiInfoData',this.bocaiInfoData);

          this.orderDatas.list = [];

          this.orderDatas.periodsId = this.bocaiInfoData.bocaiPeriodsId;
          this.orderDatas.bocaiTypeId = +this.bocaiTypeId;
          this.orderDatas.bocaiTypeName = this.bocaiName;
          this.orderDatas.bocaiCategory1Id = this.bocaiCategory.id;
          this.orderDatas.bocaiCategory1Name = this.bocaiCategory.name;
          this.orderDatas.orderBetMoneySum = this.totalMoney;
          this.orderDatas.cuserId = this.userInfo.id;


          let timeNum = this.$timestampToms(new Date().getTime() + this.differTime);

         // console.log('timeNum',timeNum);

          for(let n in this.orderList) {
            let obj = {
              bocaiCategory2Id: this.orderDataList[n].bocaiCategory2Id,//8225,//投注博彩分类2ID
              bocaiCategory2Name: this.orderDataList[n].bocaiCategory2Name,//"混合",//投注博彩分类2名称
              bocaiOddId: this.orderDataList[n].bocaiOddId,//5543,//投注博彩赔率ID
              bocaiOddName: this.orderDataList[n].bocaiOddName,//"大",//投注博彩赔率名称
              bocaiValue: this.orderDataList[n].bocaiValue,//投注内容,六合彩连肖/连尾
              betsMoney: +this.orderList[n].betsMoney,//10000,//一般模式下，选择的金额
              bocaiOdds: this.orderDataList[n].bocaiOdds,//1.90//赔率
              dewaterId: this.orderDataList[n].dewaterId, //退水ID
              orderNum: timeNum+n
            }
            this.orderDatas.list.push(obj);
          }

         // console.log('this.orderDatas',this.orderDatas);


          store.commit('updateorderOddsVisible',false);

          console.log('this.orderOddsVisible',this.orderOddsVisible);
          
          let that = this;
          const loading = this.$loading({
                lock: true,
                //text: 'Loading',
                background: 'rgba(0, 0, 0, 0.7)'
              });
          await that.$post(`${window.url}/api/orderSub`,this.orderDatas).then((res) => {
            that.$handelResponse(res, (result) => {
            loading.close();
              if(result.code===200){
                //更新用户信息
                store.commit('updateorderDatasShow',that.orderDatas.list);
                bus.$emit('getorderList', that.orderList,that.totalMoney); 
                bus.$emit('getcUserInfo', ''); 
                that.orderDatas.list = [];
                that.reset();
              } else {
                that.reset();
              }
            })
          });
        }
      },
      //下单前先刷新最新的赔率
      async orderOdds() {

        let that = this;

          const loading = this.$loading({
                lock: true,
                background: 'rgba(0, 0, 0, 0.7)'
              });
          await that.$get(`${window.url}/api/getOdds?bocaiTypeId=`+this.bocaiTypeId+`&bocaiCategoryId=`+this.bocaiCategory.id).then((res) => {
            that.$handelResponse(res, (result) => {
            loading.close();

              if(result.code===200){

                bus.$emit('setNewOddsList', result.oddsList); //要不要下注时，更新最新赔率 


                for(let n in this.orderDataList) {
                  for(let m in result.oddsList) {
                    if(this.orderDataList[n].bocaiCategory2Id == result.oddsList[m].id) {

                      for(let x in result.oddsList[m].list) {

                        if(this.orderDataList[n].bocaiOddId == result.oddsList[m].list[x].oddsId) {

                          this.orderDataList[n].bocaiOdds = result.oddsList[m].list[x].odds;
                        }
                      }
                    }
                  }
                }

                //bus.$emit('getkuaijiePay', false); 

                //this.orderOddsTo();

              }
            })
          });

      },
      async orderOdds2() {

        let that = this;

          await that.$get(`${window.url}/api/getOdds?bocaiTypeId=`+this.bocaiTypeId+`&bocaiCategoryId=`+this.bocaiCategory.id).then((res) => {
            that.$handelResponse(res, (result) => {

              if(result.code===200){

                bus.$emit('setNewOddsList', result.oddsList); //要不要下注时，更新最新赔率 

                // for(let n in this.orderDataList) {
                //   for(let m in result.oddsList) {
                //     if(this.orderDataList[n].bocaiCategory2Id == result.oddsList[m].id) {

                //       for(let x in result.oddsList[m].list) {

                //         if(this.orderDataList[n].bocaiOddId == result.oddsList[m].list[x].oddsId) {

                //           this.orderDataList[n].bocaiOdds = result.oddsList[m].list[x].odds;
                //         }
                //       }
                //     }
                //   }
                // }

                //bus.$emit('getkuaijiePay', false); 

              } else {
                store.commit('updatehasError',true);
                store.commit('updatehasErrorMessage',result.msg);
                store.commit('updateorderOddsVisible',true);
              }
            })
          });

      },

      orderOddsTo() {


          store.commit('updateisOdding',true);
          store.commit('updateorderList',[]);


          store.commit('updatecurPeriods', this.bocaiInfoData.bocaiPeriods);  //每次点下注时，记录当时的菠菜期数

          console.log('this.orderDataListthis.orderDataList',this.orderDataList);
        if(this.userInfo.isFrozen == 1) {
          bus.$emit('toleftShow',22,'该帐号或上级代理被禁用或暂停下注');
        } else if(!this.kuaijiePay) {
            //console.log('正常');
            let minpay = true;
            let str1 = '';
            let str2 = '';
            let orderListTemp = [];

            for(let n in this.orderDataList) {
              if(+this.orderDataList[n].normalMoney < 2) {
                console.log('+this.orderDataList[n].normalMoney < 2',+this.orderDataList[n].normalMoney,+this.orderDataList[n].normalMoney < 2);

                minpay = false;
                str1 = this.orderDataList[n].bocaiCategory2Name;
                str2 = this.orderDataList[n].bocaiOddName;
              }
              if(this.orderDataList[n].normalMoney != '') {
                let obj = {};

                if(this.orderDataList[n].bocaiValue == '') {
                    // obj.oddNames = this.orderDataList[n].bocaiCategory2Name + '  ' + this.orderDataList[n].bocaiOddName,
                    obj.bocaiCategory2Name = this.orderDataList[n].bocaiCategory2Name;
                    obj.bocaiOddName = this.orderDataList[n].bocaiOddName;

                    obj.bocaiOdds = this.orderDataList[n].bocaiOdds,
                    obj.betsMoney = this.orderDataList[n].normalMoney
                } else {
                    // obj.oddNames = this.orderDataList[n].bocaiOddName + '  ' + this.orderDataList[n].bocaiValue,
                    obj.bocaiValue = this.orderDataList[n].bocaiValue;
                    obj.bocaiOddName = this.orderDataList[n].bocaiOddName;

                    obj.bocaiOdds = this.orderDataList[n].bocaiOdds,
                    obj.betsMoney = this.orderDataList[n].normalMoney
                }

                orderListTemp.push(obj);
              }
            }

            store.commit('updateorderList',orderListTemp);

            if(!minpay) {
              //有超过最小金额的
              store.commit('updatehasError',true);
              store.commit('updatehasErrorMessage','【'+str1+'】'+str2 + '--' +'最低单注金额2元');
              store.commit('updateorderOddsVisible',true);
            } else if(this.totalMoney > this.userInfo.cashBalance) {
              store.commit('updatehasError',true);
              store.commit('updatehasErrorMessage','超过您的额度,无法下注,请联系上级代理');
              store.commit('updateorderOddsVisible',true);
            } else if(this.orderList.length == '0') {
              store.commit('updatehasError',true);
              store.commit('updatehasErrorMessage','请填写下注金额!!!');
              store.commit('updateorderOddsVisible',true);
            } else {
              store.commit('updatehasError',false);
              store.commit('updateorderOddsVisible',true);
            }


          } else {
            //console.log('快捷');
            let nukk = $('#txtqcstake').val() || '';

            if(nukk != '') {
              store.commit('updatemoneyOrder',nukk);
            }

            //console.log('nukk',nukk);

            let orderListTemp = [];

            for(let n in this.orderDataList) {
                let obj = {};

                if(this.orderDataList[n].bocaiValue == '') {
                    // obj.oddNames = this.orderDataList[n].bocaiCategory2Name + '  ' + this.orderDataList[n].bocaiOddName,
                    obj.bocaiCategory2Name = this.orderDataList[n].bocaiCategory2Name;
                    obj.bocaiOddName = this.orderDataList[n].bocaiOddName;

                    obj.bocaiOdds = this.orderDataList[n].bocaiOdds,
                    obj.betsMoney = this.moneyOrder
                } else {
                    // obj.oddNames = this.orderDataList[n].bocaiOddName + '  ' + this.orderDataList[n].bocaiValue,
                    obj.bocaiValue = this.orderDataList[n].bocaiValue;
                    obj.bocaiOddName = this.orderDataList[n].bocaiOddName;

                    obj.bocaiOdds = this.orderDataList[n].bocaiOdds,
                    obj.betsMoney = this.moneyOrder
                }

                orderListTemp.push(obj);
            }

            store.commit('updateorderList',orderListTemp);

             console.log('this.orderList.length == 0',this.orderList.length == 0);

            if(+this.moneyOrder < 2) {
              //有超过最小金额的
              store.commit('updatehasError',true);
              store.commit('updatehasErrorMessage','最低单注金额2元');
              store.commit('updateorderOddsVisible',true);
            } else if(this.totalMoney > this.userInfo.cashBalance) {
              store.commit('updatehasError',true);
              store.commit('updatehasErrorMessage','超过您的额度,无法下注,请联系上级代理');
              store.commit('updateorderOddsVisible',true);
            } else if(this.orderList.length == 0) {
              store.commit('updatehasError',true);
              store.commit('updatehasErrorMessage','请填写下注金额!!!');
              store.commit('updateorderOddsVisible',true);
            } else {
              store.commit('updatehasError',false);
              store.commit('updateorderOddsVisible',true);
            }

              
              store.commit('updateorderOddsVisible',true);

          }

          store.commit('updatefocusIndex',2);

          console.log('this.focusIndex',this.focusIndex,'this.orderList',this.orderList);
      }
    },
    watch: {
    }

  }

</script>

<style scoped>

.btnDivArea {
      margin-top: 5px;
      width: 692px;
      text-align: center;
      height: 30px;
      line-height: 30px;
  }

.betQuick {
    text-align: center;
    margin-bottom: 10px;
    margin-top: 14px;
    position: relative;
    height: 67px;
}

.betQuick div {
  display: inline-block;
  float: left;
}

.betRTop div {
  font-size: 16px;
}

.betRTop {
  margin-left: 20px; 
}

.betRight {
  width: 380px;
  margin-left: 50px;
}

.betRBottom label {
  color: #fff;
  float: left;
  padding: 5px 20px 0px 20px;
}

.betRBottom {
  margin-top: 10px;
}



.popup-body {
    overflow-y: auto;
    margin-left: 0px !important;
}

.default-list {
    padding: 8px 10px;
    margin-left: 0px !important;
}

.default-list table {
    margin-top: 5px;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}

.default-list table thead {
    background-color: #fcefc2;
    font-weight: 700;
    color: #261238;
}
.default-list table td, .default-list table th {
    text-align: center;
    line-height: 30px;
    border: 1px solid #dcdfe6;
    padding: 0 6px;
    position: relative;
}
.default-list table td p, .default-list table th p {
    line-height: 18px;
}
.odds-font {
    color: #d63e35;
    font-weight: 700;
}
.betValue {
    height: 16px;
    width: 60px;
    padding: 0 3px;
    line-height: 16px;
}
button.btn-delete {
    margin-left: 8px;
    width: 50px;
    height: 24px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    outline: none;
}
button.btn-delete {
    line-height: 16px;
    background: #d63e35;
}
.default-list table tr.tab-footer {
    background-color: #fcefc2;
    font-weight: 700;
    color: #261238;
}

.beishuBtn.addPayChouMa a{
  color: #ff9800;
  font-size: 18px;
}



</style>

<style lang="less">

.betQuick {
  .el-input {
    width: 120px;
    margin-right: 20px;
  }

  .el-radio.is-bordered.is-checked {
    background-color: #805933;
  }

  .betRTop.onlybet {
    margin-top: 20px;
  }

  .el-dialog__header {
    padding: 20px 20px 10px;
    background-color: #80664b;
    border-radius: 5px 5px 0 0;
  }
  .el-dialog.el-dialog--center {
    width: 500px;
    color: #450400 !important;
    background-color: #fcfcfa;
    box-shadow: 0 2px 8px rgba(0,0,0,.33);
    font-family: Helvetica,Arial,sans-serif;
    border-radius: 5px;
  }
  .el-dialog--center .el-dialog__body {
    text-align: center;
    padding: 0px;
  }
  .betRTop button {
    height: 28px;
  }

  .el-button--primary.is-plain {
    color: #805933;
  }
}

</style>
