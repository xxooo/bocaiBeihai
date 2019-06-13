<template>
	<div>
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
		},
		data() {
			return {
        centerDialogVisible: false,
        messageinfo: '',
        messageid: ''
			}
		},
    components: {
		},
		created() {
    },
    computed:{
    },
    mounted(){
      bus.$on('getmessage', (data) => {

        this.messageinfo = data.content;
        this.messageid = data.id;
        this.centerDialogVisible = true;
      });
    },
    beforeDestroy() {
    },
		methods: {
      async closeNotice() {
        let res = await this.$get(`${window.url}/api/closeNotice?id=`+this.messageid);
        this.centerDialogVisible = false;
      }
		}
	}

</script>

<style scoped>
</style>

<style lang="less">

</style>
