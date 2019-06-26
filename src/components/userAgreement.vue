<template>
  <div id="userAgreement">
    

    <center style="margin: 0;padding: 0;">
      <table width="980" height="795" border="0" cellpadding="0" cellspacing="0" background="./static/img/L1.jpg">
        <tbody><tr>
          <td height="103">&nbsp;</td>
        </tr>
        <tr>
          <td height="531" align="center" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tbody><tr>
              <td height="531" style="width: 21%">&nbsp;</td>
              <td width="58%"> <br><br><br><br><br><br>
                <table border="0" cellpadding="0" cellspacing="0" style="font-size:12px;text-align:left;">
                 <tbody><tr style="color:black;vertical-align:top;height:30px">
                   <td>1，使用本公司網站的客戶，請留意閣下所在的國家或居住地的相關法律規定，如有疑問應就相關問題，尋求當地法律意見。<br>
                    2、若發生遭駭客入侵破壞行為或不可抗拒之災害導致網站故障或資料損壞、資料丟失等情況，我們將以本公司之後備資料為最後處理依據；為確保各方利益，請各會員投注後列印資料。本公司不會接受沒有列印資料的投訴。<br>
                    3、為避免糾紛，各會員在投注之後，務必進入下注狀況檢查及列印資料。若發現任何異常，請立即與代理商聯繫查證，一切投注將以本公司資料庫的資料為准，不得異議。如出现特殊网络情况或线路不稳定导致不能下注或下注失败。本公司概不负责。<br>
                    4、單一注單最高派彩上限為一百萬。<br>
                    5、開獎結果以官方公佈的結果為准。<br>
                    6、我們將竭力提供準確而可靠的開獎統計等資料，但並不保證資料絕對無誤，統計資料只供參考，並非是對客戶行為的指引，本公司也不接受關於統計數據產生錯誤而引起的相關投訴。<br>
                    7,本公司擁有一切判決及註消任何涉嫌以非正常方式下註之權利，在進行更深入調查期間將停止發放與其有關之任何彩金。客戶有責任確保自己的帳戶及密碼保密，如果客戶懷疑自己的資料被盜用，應立即通知本公司，並須更改其個人詳細資料。所有被盜用帳號之損失將由客戶自行負責。在某種特殊情況下，客人之信用額可能會出現透支。<br><br></td></tr>
                    <tr style="color:black;vertical-align:top;height:30px;margin-left:30px"><td style="text-align: center;">我瞭解以及同意下註列明的協定和規則。<br><br></td>
                    </tr>
                    
                    



                  </tbody></table>
                </td>
                <td width="21%">&nbsp;</td>
              </tr>
            </tbody></table></td>
          </tr>
          <tr>  
            <td height="161" style="background-image:url(./static/img/L2.jpg);" valign="top"> 
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="  margin-top:13px; height:41px;">
                <tbody><tr style="text-align:center; height:35px;"><td style=" width:357px; ">&nbsp;</td>
                  <td style=" width:110px; cursor:pointer;" @click="$router.push({name: 'login'})"></td><td style=" width:45px; ">&nbsp;</td>
                  <td style=" width:110px;cursor:pointer;" @click="gotobocai()"></td><td style=" width:357px; ">&nbsp;</td>
                </tr>
              </tbody></table> 
            </td>
          </tr>
        </tbody></table>
      </center>




  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created() {
  },
  methods: {
    async gotobocai() {
      let res = await this.$get(`${window.url}/api/getBocai`);

          if(res.code===200){

            store.commit('updatebocaiTypeList',res.bocaiTypeList);

            let path = '';
            switch (res.bocaiTypeList[0].bocaiName) {
              case '重庆时时彩':
              path = 'chongqindubo';
              break;
              case '幸运飞艇':
              path = 'luckyairship';
              break;
              case '北京PK拾':
              path = 'beijingpk10';
              break;
              case '山东11选5':
              path = 'shandong11xuan5';
              break;
              case '广东11选5':
              path = 'guangdong11xuan5';
              break;
              case '江西11选5':
              path = 'jiangxi11xuan5';
              break;
              case 'PC蛋蛋':
              path = 'pcdandan';
              break;
              case '江苏快3':
              path = 'jiangsukuaisan';
              break;
              case '北京快乐8':
              path = 'beijingkuaile8';
              break;
              case '极速赛车':
              path = 'jisusaiche';
              break;
              case '极速时时彩':
              path = 'jisudubo';
              break;
              case '六合彩':
              path = 'marksix';
              break;
            }

            store.commit('updatebocaiName',res.bocaiTypeList[0].bocaiName);
            store.commit('updatebocaiTypeId',res.bocaiTypeList[0].bocaiId);


            this.$router.push({name: path});


          }
      
    }
  }
}
</script>

<style scoped >

#userAgreement {
    margin-left: 0px;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    background-color: #000;
    background-image: url(../../static/img/XY_Top.jpg);
    background-repeat: repeat-x;
    color: #000;
    text-align: left;
    margin: 0 auto;
    font-size: 12px;
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    line-height: 20px;
    font-family: 宋体, arial, sans-serif;

    position: fixed;
    width: 100%;
    overflow: auto;
    _height: 100%;
    _border-top: 50px solid #eee;
    _border-bottom: 50px solid #eee;
    _top: 0px;
    bottom: 1px;
    top: 1px;
}

* {
    margin: 0;
    padding: 0;
}

</style>
<style lang="less">
</style>