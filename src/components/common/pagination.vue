<template>
  <table height="22" cellspacing="0" cellpadding="0" width="100%" border="0">
    <tbody>
      <tr class="t_list_bottom"><td align="left">&nbsp;共&nbsp;{{totalNum}}&nbsp;期记录</td>
        <td align="center">共&nbsp;{{totalPage}}&nbsp;页</td>
        <td align="right">

          <template v-if="currentPage == 1">
            <span>前一页&nbsp;</span>『&nbsp;&nbsp; 
          </template>
          <template v-else>
            <a @click="firstOtherpage(+currentPage-1)">前一页</a>&nbsp;『&nbsp;&nbsp;
          </template>

          <template v-for="(item,index) in pageList">
            <template v-if="currentPage == item.page">
              <span class="current">{{item.page}}</span>&nbsp;
            </template>
            <template v-else>
              <a @click="ShowOtherpage(item.page)">{{item.page}}</a>&nbsp;
            </template>
          </template>

          <template v-if="currentPage == totalPage">
            』<span>&nbsp;后一页</span>
          </template>
          <template v-else>
            』<a @click="endOtherpage(+currentPage+1)">后一页</a>&nbsp;
          </template>

        </td>
      </tr>
    </tbody>
  </table>
</template>


<script>

	export default {
		props: {
      resultList: {
        type: Array
      }
		},
		data() {
			return {
        currentPage: 1,
        pageSize: 15,
        maxPage: 10,
        firstPage: 1,
        endPage: 10
			}
		},
    components: {
		},
		created() {
      console.log('this.resultList',this.resultList);
      this.$emit('getdataList',this.dataList);
    },
    computed:{
      totalNum: function() {
        return this.resultList.length;
      },
      totalPage: function() {
        return Math.ceil(this.totalNum / this.pageSize)
      },
      dataList: function() {
        let that = this;
        let data = that.resultList;

        data = _.slice(data, (that.currentPage - 1) * that.pageSize, that.currentPage * that.pageSize);

        return data;
      },
      pageList() {
        let arry = [];

        for(let i = 1; i <= this.totalPage ; i++) {
          arry.push({page: i});
        }

        console.log('this.firstPage',this.firstPage);

        if(this.totalPage > 10) {
          return arry.slice(this.firstPage-1,this.endPage);
        } else {
          return arry;
        }
        
      }
    },
    mounted(){
      bus.$on('resetValue',(data) => {
        this.resetValue();
      });
    },
    beforeDestroy() {
    },
		methods: {
      resetValue() {
        this.currentPage=1;
      },
      endOtherpage(curp) {

        if(this.totalPage > 10) {
          if(curp-1 == this.pageList[this.pageList.length-1].page) {
            this.firstPage = curp;
            this.endPage = curp+9;
          }
        }
        
        this.currentPage = curp;
      },
      firstOtherpage(curp) {

        if(this.totalPage > 10) {
          if(curp+1 == this.pageList[0].page) {
            this.firstPage = curp-9;
            this.endPage = curp;
          }
        }
        
        this.currentPage = curp;
      },
      ShowOtherpage(curp) {
        this.currentPage = curp;
      }
		},
    watch: {
      dataList: function(val, oldVal) {

        console.log('watchdataList',this.dataList);

        this.$emit('getdataList',this.dataList);
      }
    }
	}

</script>

<style scoped>
</style>

<style lang="less">

</style>
