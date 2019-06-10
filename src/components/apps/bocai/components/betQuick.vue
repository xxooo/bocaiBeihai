<template>
  <div>
    <div class="btnDivArea" id="btnDivArea11">  
      <template v-if="!orderOddsVisible"> 
        <input id="chk_qcstake" type="checkbox" v-model="kuaijiePay" @click="changePay()">
        <span class="kuaijieSpan">快捷下注</span>
        <span id="sp_qcstake" class="yibanSpan" v-if="kuaijiePay">金额：
          <input id="txtqcstake" type="text" class="wid60">
          <span @click="QCExplain()" class="shuomiSpan">说明</span>
        </span>
        <input type="reset" value="重 填" class="button_bg1" @click="reset()"> 
        <input type="button" value="下 注" class="button_bg1" @click="orderOdds()">
      </template>

      <span v-else style="color:red">下注中,请等待。。。</span>
      

    </div> 


    <div tabindex="-1" class="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front ui-draggable ui-dialog-buttons"  style="position: absolute; height: auto; width: 400px;  z-index: 101;" v-if="orderOddsVisible" id="ui-dialog">
      <div class="ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix ui-draggable-handle">
        <span id="ui-id-1" class="ui-dialog-title">&nbsp;</span>
        <button type="button" class="ui-button ui-corner-all ui-widget ui-button-icon-only ui-dialog-titlebar-close" title="Close" @click="orderOddsVisible = false">
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
            超过您的额度,无法下注,请联系上级代理
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
            <button type="button" class="ui-button ui-corner-all ui-widget" @click="orderOddsVisible = false">关闭</button>
          </template>
          <template v-else>
            <button type="button" class="ui-button ui-corner-all ui-widget" @click="orderSub()">确定</button>
            <button type="button" class="ui-button ui-corner-all ui-widget" @click="orderOddsVisible = false">取消</button>
          </template>
        </div>
      </div>


    </div>

    <div class="ui-widget-overlay ui-front" style="z-index: 100;" v-if="orderOddsVisible"></div>

  </div>
</template>


<script>
  //import { mapGetters } from 'vuex';


	export default {
		props: {
      orderDataList: {
        type: Array
      },
      bocaiCategory: {
        type: Object
      }
		},
		data() {
			return {
        hasError:false,
        moneyOrder: '',
        radio10: '1',
        orderOddsVisible: false,
        orderList: [],
        hahahaid: '',
        bocaiTypeId: '',
        bocaiCategoryId: '',
        bocaiTypeName: '',
        cuserId: '',
        bocaiInfoData: {},
        kuaijiePay: false,
        isOpenOdds: true,
        canOrder: true,
        disableBtn: true,
        cashBalance: '',
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

      this.getcashmoney();
    },
    computed:{
      totalMoney() {
        let totalMoney = 0;
        for(let n in this.orderList) {
          totalMoney += this.orderList[n].betsMoney*1;
        }
        return totalMoney;
      }
    },
    mounted(){
      bus.$on('getbocaiTypeId', (data) => {
        this.bocaiTypeId = data;
      });
      bus.$on('getbocaiCategoryId', (data) => {
        this.bocaiCategoryId = data;
      });
      bus.$on('getbocaiTypeName', (data) => {
        this.bocaiTypeName = data;
      });
      bus.$on('getcuserId', (data) => {
        this.cuserId = data;
      });
      bus.$on('getbocaiInfoData', (data) => {
        this.bocaiInfoData = data;
      });
      bus.$on('isOpenOdds', (data) => {
        this.isOpenOdds = data;
      });
      bus.$on('getkuaijiePay', (data) => {
        this.kuaijiePay = data;
      });
      bus.$on('getcashBalance', (data) => {

        //console.log('getcashBalance',data);
        this.cashBalance = data;
      });
      bus.$on('getcanOrder', (data) => {
        this.canOrder = data;

        //console.log('this.canOrder',this.canOrder);
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
      async getcashmoney() {
        let res = await this.$get(`${window.url}/api/cUserInfo`);

        if(res.code===200){
          this.cashBalance = res.data.cashBalance;
        }
      },
      changePay() {
        this.$emit('childByChangePay', this.kuaijiePay);
        this.moneyOrder = '';
      },
      reset() {
        this.moneyOrder = '';
        this.$emit('childByReset', 'reset');
      },
      deleteOdd(index) {
        this.orderList.splice(index,1);
        if(this.orderList.length == 0) {
          this.orderOddsVisible = false;
        }
      },
      async orderSub() {

        if(this.totalMoney > this.cashBalance) {
          this.$alertMessage('您的余额不足!', '温馨提示');
        } else {

          console.log('this.bocaiTypeName',this.bocaiTypeName);

          console.log('this.bocaiInfoData',this.bocaiInfoData);

          this.orderDatas.list = [];

          this.orderDatas.periodsId = this.bocaiInfoData.bocaiPeriodsId;
          this.orderDatas.bocaiTypeId = this.bocaiTypeId;
          this.orderDatas.bocaiTypeName = this.bocaiTypeName;
          this.orderDatas.bocaiCategory1Id = this.bocaiCategory.id;
          this.orderDatas.bocaiCategory1Name = this.bocaiCategory.name;
          this.orderDatas.orderBetMoneySum = this.totalMoney;
          this.orderDatas.cuserId = this.cuserId;

          for(let n in this.orderList) {
            let obj = {
              bocaiCategory2Id: this.orderDataList[n].bocaiCategory2Id,//8225,//投注博彩分类2ID
              bocaiCategory2Name: this.orderDataList[n].bocaiCategory2Name,//"混合",//投注博彩分类2名称
              bocaiOddId: this.orderDataList[n].bocaiOddId,//5543,//投注博彩赔率ID
              bocaiOddName: this.orderDataList[n].bocaiOddName,//"大",//投注博彩赔率名称
              bocaiValue: this.orderDataList[n].bocaiValue,//投注内容,六合彩连肖/连尾
              betsMoney: +this.orderList[n].betsMoney,//10000,//一般模式下，选择的金额
              bocaiOdds: this.orderDataList[n].bocaiOdds,//1.90//赔率
              dewaterId: this.orderDataList[n].dewaterId //退水ID
            }
            this.orderDatas.list.push(obj);
          }

          console.log('this.orderDatas',this.orderDatas);

          this.orderOddsVisible = false;
          
          let that = this;
          const loading = this.$loading({
                lock: true,
                text: 'Loading',
                background: 'rgba(0, 0, 0, 0.7)'
              });
          await that.$post(`${window.url}/api/orderSub`,this.orderDatas).then((res) => {
            that.$handelResponse(res, (result) => {
            loading.close();
              if(result.code===200){
                //更新用户信息
                bus.$emit('getcUserInfo', ''); 
                that.orderDatas.list = [];
                that.$success('下注成功！');
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
                text: 'Loading',
                background: 'rgba(0, 0, 0, 0.7)'
              });
          await that.$get(`${window.url}/api/getOdds?bocaiTypeId=`+this.bocaiTypeId+`&bocaiCategoryId=`+this.bocaiCategoryId).then((res) => {
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

                bus.$emit('getkuaijiePay', false); 

                this.orderOddsTo();

              }
            })
          });

      },


      orderOddsTo() {


        console.log('this.orderDataList',this.orderDataList);

        let reg = /^[\u2E80-\u9FFF]+$/;
        if(reg.test(this.moneyOrder)){
          this.$alertMessage('请确认注单!', '温馨提示');
        } else if(!this.disableBtn) {
          this.$alertMessage('请确认注单!', '温馨提示');
        } else {
          this.orderList = [];

          console.log('this.orderDataListthis.orderDataList',this.orderDataList);

          if(!this.kuaijiePay) {
            //console.log('正常');

            for(let n in this.orderDataList) {
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

                this.orderList.push(obj);
              }
            }
            if(this.orderList.length == '0') {
              this.$alertMessage('请确认注单!', '温馨提示');
            } else {
              this.orderOddsVisible = true;
            }

            console.log('this.orderList',this.orderList);

          } else {
            //console.log('快捷');

            if(this.orderDataList.length == 0) {
              this.$alertMessage('请确认注单!', '温馨提示');
            } else if(this.moneyOrder == ''){
              this.$alertMessage('请输入金额!', '温馨提示');
            } else {

              //console.log('this.orderDataList',this.orderDataList);
              for(let n in this.orderDataList) {

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
                    obj.betsMoney = this.moneyOrder
                }

                this.orderList.push(obj);
              }
              //console.log('this.this.orderList',this.orderList);
              this.orderOddsVisible = true;
            }

            //console.log('this.orderList',this.orderList);

          }
        }

      },
      orderMul(pay) {

        if(this.disableBtn) {
          this.moneyOrder = pay*1 + this.moneyOrder*1;
        }

      }
		},
    watch: {
      canOrder: function(val, oldValue) {
        this.disableBtn = val;
      }
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

.beishu {
  width: 400px;
  height: 67px;
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

.beishuBtn {
    width: 54px;
    height: 52px;
    margin: 0px 2px !important;
    border-radius: 50px;
    color: #1b1b1b;
    font-family: Microsoft YaHei;
    font-size: 10px;
    font-weight: 700;
    cursor: pointer;
}

.beishuBtn a {
  height: 52px;
  line-height: 52px;
  font-weight: bold;
}

.beishuBtn.beishuBtn10 {
    background: url(../../../../../static/img/cm1.png) bottom no-repeat transparent;
    background-size: contain;
}
.beishuBtn.beishuBtn50 {
  background: url(../../../../../static/img/cm2.png) bottom no-repeat transparent;
    background-size: contain;
}
.beishuBtn.beishuBtn100 {
  background: url(../../../../../static/img/cm3.png) bottom no-repeat transparent;
    background-size: contain;
}
.beishuBtn.beishuBtn500 {
  background: url(../../../../../static/img/cm4.png) bottom no-repeat transparent;
    background-size: contain;
}
.beishuBtn.beishuBtn1000 {
  background: url(../../../../../static/img/cm5.png) bottom no-repeat transparent;
    background-size: contain;
}
.beishuBtn.beishuBtn5000 {
  background: url(../../../../../static/img/cm6.png) bottom no-repeat transparent;
    background-size: contain;
}

.beishuBtn:hover {
  color: #ff9800;
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
