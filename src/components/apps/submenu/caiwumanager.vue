<template>
  <div id="caiwumanager" class="duboBodyClass">

    <table width="700" border="0" cellspacing="0" cellpadding="0">
      <tbody>
        <tr>
          <td height="30">

            <table border="0" cellpadding="0" cellspacing="0">
              <tbody>
                <tr> 
                  <td>日期区间</td>
                  <td>
                    <DateBox v-model="startTime" format="yyyy-MM-dd"></DateBox>

                  </td>
                  <td>至</td>
                  <td>
                    <DateBox v-model="endTime" format="yyyy-MM-dd"></DateBox>
                  </td>
                  <td align="right">
                   <input type="button" value="查询" @click="searchMembers()" style="cursor:pointer;margin-right:5px;">  
                 </td>
               </tr>
             </tbody>
           </table>

         </td>
       </tr>

       <tr>
        <td colspan="3">

          <div id="div_main" style="width: 100%; margin: 0px auto;">
            <table  width="100%" class="DTable" border="0" cellspacing="1" cellpadding="0" style="margin-top:0px;">
              <tbody>
                <tr class="td_caption_1"> 
                  <td height="25">交易序号</td>
                  <td>时间</td>
                  <td>交易类型</td>
                  <td>交易金额</td>
                  <td>帐户余额</td>
                  <td>备注</td> 
                </tr> 
                <tr class="caiwuListTr" v-for="(item,index) in historyDataList.list">
                  <td align="center">{{item.id}}</td>
                  <td align="center">{{$timestampToTime(item.createDate)}}</td>
                  <td align="center">{{item.type =='1'?'充值' : '提现'}}</td>
                  <td align="right">{{item.money}}</td>
                  <td align="right">{{item.totalMoney}}</td>
                  <td align="center">{{item.remark}}</td>
                </tr>
                <tr>
                  <td colspan="3" align="right">总计：</td>
                  <td align="right">{{moneyAll}}</td>
                  <td align="center">{{totalMoneyAll}}</td>
                  <td align="center">--</td>
                </tr>
              </tbody>
            </table>

            <table width="100%" class="tableH" cellspacing="0" cellpadding="0" border="1" bordercolor="#78B8DE"  style="margin-top:10px; color:red; font-size:14px; line-height:30px; text-align:center;  background-color:White;">
              <tbody>
                <tr>
                  <td>此区间暂无数据</td>
                </tr>
              </tbody>
            </table>

          </div>

        </td> 
      </tr>
      <tr>
        <td id="tdpage" style=" line-height:20px; text-align:left; height: 12px;" colspan="43">

          <table height="22" cellspacing="0" cellpadding="0" width="100%" border="0">
            <tbody>
              <tr class="t_list_bottom">
                <td align="left">&nbsp;共&nbsp;1&nbsp;期记录</td>
                <td align="center">共&nbsp;1&nbsp;页</td>
                <td align="right">
                  <span>前一页&nbsp;</span>『&nbsp;&nbsp;
                  <span class="current">1</span>&nbsp;』
                  <span> &nbsp;后一页 </span>
                </td>
              </tr>
            </tbody>
          </table>

        </td>
      </tr>
    </tbody>
  </table>

</div>

<!-- <div class="block" v-if="historyDataList.totalPage > 1">
                  <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-size="historyDataList.pageSize"
                    layout="total, prev, pager, next"
                    :total="historyDataList.totalCount*1">
                  </el-pagination>
                </div> -->
 

</template>

<script>

export default {

  components: {
  },
  data() {
    return {
      startTime: new Date(),
      endTime: new Date(),
      moneyAll: '',
      totalMoneyAll: '',

      historyDataList: {
        currPage: 1,
        list: [],
        pageSize: 10,
        totalCount: 0,
        totalPage: 0,
      },
      historyType: '2',
      histDate: [],
      forwardPass: '',
      forwardFaction: '1',
      forwardCash: '0',
      useMoney: '',
      currentPage: 1,
      rechargeHisType: '0',
      paymoney: '',
      payremark: '',
      chongzhiImgSrc: '',
      chongzhiType: '',
      forwardType: '0',
      rechargeObj: {},
      forwardObj: {},
      chongzhiHisOp: false,
      bankInfoObj: {},
      caiwuYinhangzhuanzhangList: [],
      caiwuChongzhifangshi: {},
      newPass: ['--','--','--','--'],
      oldPass: ['--','--','--','--'],
      tabNum: '1',
      passType: false,
      mima: ['--','0','1','2','3','4','5','6','7','8','9'],
      payType: [
                {value: '1',label: '微信'},
                {value: '2',label: '支付宝'},
                {value: '3',label: '银行卡'},
                {value: '4',label: '现金'}
              ]

    }
  },
  created() {
    this.bankInfo();

  },
  computed: {
    hasDataList() {
      this.historyDataList.list.length != 0 ? true : false;
    }
  },
  methods: {
    async searchMembers() {

      console.log('startTime',this.$timestampToTimeRi(this.startTime));

      let sstime = this.$timestampToTimeRi(this.startTime);
      let entime = this.$timestampToTimeRi(this.endTime);

      this.moneyAll = '';
      this.totalMoneyAll = '';

      let that = this;
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });  
      await that.$get(`${window.url}/api/hisRechargeForwardList?currentPage=1&pageSize=10&createDateStart=`+sstime+`&createDateEnd=`+entime+`&type=0`).then((res) => {
        that.$handelResponse(res, (result) => {
          loading.close();
          if(result.code===200){
            this.historyDataList = result.page;

            for(let n in this.historyDataList) {
              this.moneyAll += this.historyDataList[n].money*1;
              this.totalMoneyAll += this.historyDataList[n].totalMoney*1;
            }

          }
        })
      });

    },
    async gethistory(cur) {

      this.currentPage = cur;

      if(this.histDate.length == '0') {
        this.$alertMessage('日期不能为空!', '温馨提示');
      } else {
        let that = this;
            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                background: 'rgba(0, 0, 0, 0.7)'
              });
            await that.$get(`${window.url}/api/hisRechargeForwardList?currentPage=`+cur+`&pageSize=10&createDateStart=`+this.histDate[0]+`&createDateEnd=`+this.histDate[1]+`&type=`+this.historyType).then((res) => {
              that.$handelResponse(res, (result) => {
              loading.close();
                if(result.code===200){
                  this.historyDataList = result.page;
                  that.$success('提交成功！');
                }
              })
            });
      }

    },
    getHisDate(data) {
      console.log(data);
    },
    async forwardSubmit() {

      if(this.forwardPass == '') {
        this.$alertMessage('提现密码不能为空!', '温馨提示');
      } else if(this.forwardPass != this.bankInfoObj.putForwardPassword) {
        this.$alertMessage('提现密码不正确!', '温馨提示');
      } else {
        let dataobj = {
          money: this.forwardCash*1,//提现金额
          type: this.forwardFaction*1,//提现方式,1:微信,2:支付宝,3:银行转账
          putForwardPassword: this.forwardPass//提现密码
        }

        let that = this;
            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                background: 'rgba(0, 0, 0, 0.7)'
              });
            await that.$post(`${window.url}/api/forwardInfoSub`,dataobj).then((res) => {
              that.$handelResponse(res, (result) => {
              loading.close();
                if(result.code===200){
                  that.$success('提交成功！');
                  this.forwardList('0',1,10);
                }
              })
            });
      }

    },
    changeHistoryType(data) {
      this.gethistory(1);
    },
    changeForwardType(data) {
      this.forwardList(data,1,10);
    },
    changeRechHisType(data) {
      this.toChongzhiHis(data,1,10);
    },
    handleCurrentChange(cpage) {
      if(this.tabNum == '2') {
        this.toChongzhiHis(this.rechargeHisType,cpage,10);
      } else if(this.tabNum == '3') {
        this.forwardList(this.historyType,cpage,10);
      } else if(this.tabNum == '4') {
        this.gethistory(cpage);
      }
      
    },
    getchongzhiType(data) {
      console.log('data',data);

      this.chongzhiType = data;

      if(this.chongzhiType == '1') {
        if(this.caiwuChongzhifangshi.weixinEwma != '') {
          this.chongzhiImgSrc = this.caiwuChongzhifangshi.weixinEwma;
        } else if(this.caiwuChongzhifangshi.weixinEwmb != '') {
          this.chongzhiImgSrc = this.caiwuChongzhifangshi.weixinEwmb;
        } else if(this.caiwuChongzhifangshi.weixinEwmc != '') {
          this.chongzhiImgSrc = this.caiwuChongzhifangshi.weixinEwmc;
        } else if(this.caiwuChongzhifangshi.weixinEwmd != '') {
          this.chongzhiImgSrc = this.caiwuChongzhifangshi.weixinEwmd;
        } else if(this.caiwuChongzhifangshi.weixinEwme != '') {
          this.chongzhiImgSrc = this.caiwuChongzhifangshi.weixinEwme;
        }
      } else if(this.chongzhiType == '2') {
        if(this.caiwuChongzhifangshi.zhifubaoEwma != '') {
          this.chongzhiImgSrc = this.caiwuChongzhifangshi.zhifubaoEwma;
        } else if(this.caiwuChongzhifangshi.zhifubaoEwmb != '') {
          this.chongzhiImgSrc = this.caiwuChongzhifangshi.zhifubaoEwmb;
        } else if(this.caiwuChongzhifangshi.zhifubaoEwmc != '') {
          this.chongzhiImgSrc = this.caiwuChongzhifangshi.zhifubaoEwmc;
        } else if(this.caiwuChongzhifangshi.zhifubaoEwmd != '') {
          this.chongzhiImgSrc = this.caiwuChongzhifangshi.zhifubaoEwmd;
        } else if(this.caiwuChongzhifangshi.zhifubaoEwme != '') {
          this.chongzhiImgSrc = this.caiwuChongzhifangshi.zhifubaoEwme;
        }
      } else {

      }
    },
    returnChistory() {
      this.chongzhiHisOp = false;
    },
    async toChongzhiHis(rechType,cpage,pages) {
      this.chongzhiHisOp = true;

      let res = await this.$get(`${window.url}/api/rechargeList?status=`+rechType+`&currentPage=`+cpage+`&pageSize=`+pages);
      if(res.code===200){
        this.rechargeObj = res.page;
      }
    },
    async cancel() {
      if(this.tabNum == '1') {
        this.bankInfo();
      } else {
        this.payremark = '';
        this.chongzhiType = '';
        this.paymoney = '';
      }
    },
    async submit() {
      if(this.tabNum == '1') {
        let normal = true;
        let password = '';

        console.log('bankInfoObj',this.bankInfoObj);

        if(this.passType) {
          let oldpassword = '';
          for(let n in this.oldPass) {
            oldpassword += this.oldPass[n];
          }
          if(oldpassword != this.bankInfoObj.putForwardPassword) {
            normal = false;
            this.$alertMessage('旧密码不正确!', '温馨提示');
          } else {

            for(let n in this.newPass) {
              if(this.newPass[n] == '--') {
                normal = false;
                this.$alertMessage('请确认密码正确!', '温馨提示');
              }
            }
          }

        } else if(this.bankInfoObj.putForwardPassword == '') {
          for(let n in this.newPass) {
            if(this.newPass[n] == '--') {
              normal = false;
              this.$alertMessage('请确认密码正确!', '温馨提示');
            }
          }
        } else {
          password = this.bankInfoObj.putForwardPassword;
        }


        if(normal) {

          if(password == '') {
            for(let n in this.newPass) {
              password += this.newPass[n];
            }
          }

          let dataobj = {
            bankName: this.bankInfoObj.bankName,//银行名称
            bankNum: this.bankInfoObj.bankNum,//银行卡号
            bankUserName: this.bankInfoObj.bankUserName,//卡主姓名
            phone: this.bankInfoObj.phone,//手机号码
            weixin: this.bankInfoObj.weixin,//微信支付账号
            zhifubao: this.bankInfoObj.zhifubao,//支付宝账号
            putForwardPassword: password//提现密码
          }

          console.log('dataobj',dataobj);

          let that = this;
          const loading = this.$loading({
                lock: true,
                text: 'Loading',
                background: 'rgba(0, 0, 0, 0.7)'
              });
          await that.$post(`${window.url}/api/bankInfoSub`,dataobj).then((res) => {
            that.$handelResponse(res, (result) => {
            loading.close();
              if(result.code===200){
                //更新用户信息
                // bus.$emit('getcUserInfo', ''); 
                // that.orderDatas.list = [];
                that.$success('修改成功！');
                // that.reset();
                that.bankInfo();
              }
            })
          });

        }
        
      } else if(this.tabNum == '2') {
        if(this.chongzhiType == '') {
          this.$alertMessage('请确认充值方式!', '温馨提示');
        } else if(this.paymoney == '') {
          this.$alertMessage('请确认充值金额!', '温馨提示');
        } else if(this.payremark == '') {
          this.$alertMessage('请确认充值备注', '温馨提示');
        } else {
          let subobj = {
            type: this.chongzhiType*1,//充值方式,1:微信,2:支付宝,3:银行转账
            money: this.paymoney*1,//充值金额
            remark: this.payremark//充值备注
          }

          let res = await this.$post(`${window.url}/api/rechargeInfoSub`, subobj);

          if(res.code === 200) {
            this.$success('提交成功!');

            this.paymoney = '';
            this.payremark = '';
          }
        }
      }
    },
    chanPassType() {
      this.passType = true;
      this.oldPass = ['--','--','--','--'];
      this.newPass = ['--','--','--','--'];
    },
    async historyInfo() {
      $('.historyInfo').addClass('active').siblings().removeClass('active');
      this.tabNum = '4';
    },
    async forwardList(rechType,cpage,pages) {

      this.currentPage = cpage;

      let res = await this.$get(`${window.url}/api/forwardList?status=`+rechType+`&currentPage=`+cpage+`&pageSize=`+pages);
      if(res.code===200){
        this.forwardObj = res.page;
        this.useMoney = res.useMoney;
      }
    },
    async forwardInfo() {
      if(this.bankInfoObj.putForwardPassword == '') {
        this.$alertMessage('请先设置提现密码，才能访问!', '温馨提示');
      } else {
        $('.forwardInfo').addClass('active').siblings().removeClass('active');

        this.forwardList('0',1,10);

        this.tabNum = '3';
      }
    },
    async rechargeInfo() {
      if(this.bankInfoObj.putForwardPassword == '') {
        this.$alertMessage('请先设置提现密码，才能访问!', '温馨提示');
      } else {
        $('.rechargeInfo').addClass('active').siblings().removeClass('active');

        let res = await this.$get(`${window.url}/api/rechargeInfo`);

        if(res.code===200){

          this.caiwuYinhangzhuanzhangList = res.caiwuYinhangzhuanzhangList;
          this.caiwuChongzhifangshi = res.caiwuChongzhifangshi;
        }

        this.tabNum = '2';
      }
      
    },
    async bankInfo() {
      $('.bankInfo').addClass('active').siblings().removeClass('active');

      let res = await this.$get(`${window.url}/api/bankInfo`);

      if(res.code===200){
        this.bankInfoObj = res.data;

        if(this.bankInfoObj.bankUserName != '') {
          $(".bankUserName").attr("disabled", true);
        }
        if(this.bankInfoObj.weixin != '') {
          $(".weixin").attr("disabled", true);
        }
        if(this.bankInfoObj.zhifubao != '') {
          $(".zhifubao").attr("disabled", true);
        }

        this.passType = false;
      }

      this.tabNum = '1';
    }
  },
  mounted() {
  },
  updated() {
  }
};
</script>
<style scoped>
</style>
<style lang="less">
.duanSelect {
  width: 12%;
}
</style>