<template>
  <div id="maintwssides">

    <table class="Ball_List" border="0" cellspacing="1" cellpadding="0" width="150" id="tbtwssides">
      <tbody id="TwoSides">
        <tr>
          <td class="td_caption_1" colspan="2" style="width:150px;">两面长龙排行</td>
        </tr> 
        <tr class="t_list_tr_0" v-for="(item,index) in openPrizeList.slice(0,10)">
          <td class="f_left TDb_B">{{item.content}}</td>
          <td class="TDb_R">&nbsp;{{item.num}} 期&nbsp;</td>
        </tr> 
      </tbody>
    </table>

  </div>
</template>


<script>
  export default {
    props: {
      curBocaiTypeId: {
        type: Number
      }
    },
    data() {
      return {
        openPrizeList: [],
        noOpenPrizeList: []
      }
    },
    components: {
    },
    created() {
      this.getchanglong(this.curBocaiTypeId);
    },
    computed:{
    },
    mounted(){
    },
    methods: {
      async getchanglong() {

        this.openPrizeList = [];
        this.noOpenPrizeList = [];

        let that = this;
        await that.$get(`${window.url}/api/changlong?bocaiTypeId=`+this.curBocaiTypeId+'&showNum=100').then((res) => {
          that.$handelResponse(res, (result) => {
            if(result.code===200){

              result.data = JSON.parse(result.data);


              for(let n in result.data.openPrizeMap) {
                let obj = {};
                obj.content = n;
                obj.num = result.data.openPrizeMap[n];
                this.openPrizeList.push(obj);
              }

              this.openPrizeList = _.sortBy(this.openPrizeList, function(item) {
                return -item.num;
              });

              }
          })
        });
      }

    }

  }

</script>

<style scoped>



</style>

<style lang="less">


</style>
