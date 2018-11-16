import * as type from './mutation-types.js'
const actions = {
  // es6写法
  async getHomeData({commit,state},obj){
    // 得到全部数据
    const getData = new Promise((resolve,reject)=>{
      $.get('https://cnodejs.org/api/v1/topics',{tab:obj.tab,limit:'46',page:obj.page},function(response){
        resolve(response.data)
      });
    });
    // 触发首页数据
    commit(type.GET_HOME_DATA,{
      type:obj.tab,
      data:await getData
    });
  },

};


export default actions;
