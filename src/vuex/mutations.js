const mutations = {
  updatebocaiTypeList(state, v) {
    state.bocaiTypeList = v;
  },
  updateoddresult(state,v) {
  	state.oddresult = v;
  },
  updatebocaiCategory(state,v) {
  	state.bocaiCategory = v;
  },
  updatebocaiInfoData(state,v) {
  	state.bocaiInfoData = v;
  },
  updatebocaiName(state,v) {
    state.bocaiName = v;
  },
  updatebocaiCategoryName(state,v) {
    state.bocaiCategoryName = v;
  }
}

export default mutations
