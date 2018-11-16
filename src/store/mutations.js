

import * as type from './mutation-types.js'


const mutations = {
  // 获取首页数据
  [type.GET_HOME_DATA](state,data){
    console.log(data.data);
    data.data.map((item)=>{
      let onStatus,text;

      // 全部
      if(data.type === 'all'){
        if(item.top){
          text = '置顶';
          onStatus = 'top'
        }else if(item.good){
          text = '精华';
          onStatus = 'top'
        }else if(item.tab === 'share'){
          text = '分享';
          onStatus = 'share'
        }else if(item.tab === 'ask'){
          text = '问答';
					onStatus = 'ask'
        }else if(item.tab === 'job'){
          text = '招聘';
					onStatus = 'job'
        }
      }
      // 精华
      if(data.type === 'good' && item.good){
        text = '精华';
        onStatus = 'top'
      }

      // 分享
      if(data.type === 'share'){
        if(item.top){
          text = '置顶';
					onStatus = 'top'
        }else if(item.good){
          text = '精华';
          onStatus = 'top'
        }else{
          text = '';
					onStatus = 'x'
        }
      }

      state.homeData.push({
        id: item.id,
				author_id: item.author_id,
				tab: item.tab,
				content: item.content,
				title: item.title,
				good: item.good,
				top: item.top,
				reply_count: item.reply_count,
				visit_count: item.visit_count,
				author: item.author,
				reply: countDate(item.last_reply_at),
				status: onStatus,
				text: text,
				isActive: false
      })

    })
  },
};



// 时间转换函数
function countDate(last_reply_at){
  const nowYear = new Date().getFullYear();
  const nowDate = new Date().getTime();
  const timeDistance = (nowDate - new Date(last_reply_at).getTime()) / 60000;
  const dayNum = timeDistance / 1400;
  const replyYear = new Date(last_reply_at).getFullYear();

  let replyTime;

  if(timeDistance < 1){
    replyTime = '1 分钟前'
  }else if(timeDistance>=1&&timeDistance<60){
    replyTime = Math.floor(timeDistance) + ' 分钟前'
  }else if(timeDistance < 1440) {
    replyTime = Math.floor(timeDistance/60) + ' 小时前'
  }else if(dayNum < 31){
    replyTime = Math.floor(dayNum) + ' 天前'
  }else if( 31 <= dayNum && dayNum <= 58 ){
    replyTime = '1 个月前'
  }else if(dayNum <= 59){
    if(nowYear % 4 === 0 && nowYear % 100 !== 0 || nowYear % 400 === 0){
      replyTime = '28 天前'
    }else{
      replyTime = '2 个月前'
    }
  }else if(dayNum <= 60){
    replyTime = '2 个月前'
  } else if (dayNum <= 91) {
  		replyTime = '3 个月前'
  	}else if (dayNum <= 121) {
  		replyTime = '4 个月前'
  	}else if (dayNum <= 152) {
  		replyTime = '5 个月前'
  	}else if (dayNum <= 182) {
  		replyTime = '6 个月前'
  	}else if (dayNum <= 213) {
  		replyTime = '7 个月前'
  	}else if (dayNum <= 243) {
  		replyTime = '8 个月前'
  	}else if (dayNum <= 274) {
  		replyTime = '9 个月前'
  	}else if (dayNum <= 304) {
  		replyTime = '10 个月前'
  	}else if (dayNum <= 335) {
  		replyTime = '11 个月前'
  	}else if (dayNum <= 365) {
  		if(nowYear % 4 === 0 && nowYear % 100 !== 0 || nowYear % 400 === 0){
  			replyTime = '11 个月前'
  		}else {
  			replyTime = '1 年前'
  		}
  	}else if(dayNum > 365) {
  		replyTime = (nowYear - replyYear) + ' 年前'
  	}
  	return replyTime
}

export default mutations;
