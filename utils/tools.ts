export function getDateDiff(cTime: any, mTime: any){
	var minute = 1000 * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var month = day * 30;
	var diffValue = Number(cTime) - Number(mTime);
	if(diffValue < 0){return;}
	var monthC: any =diffValue/month;
	var weekC: any =diffValue/(7*day);
	var dayC: any =diffValue/day;
	var hourC: any =diffValue/hour;
	var minC: any =diffValue/minute;
  let result = ''
	if(monthC>=1){
		result="" + parseInt(monthC) + "月前";
	}
	else if(weekC>=1){
		result="" + parseInt(weekC) + "周前";
	}
	else if(dayC>=1){
		result=""+ parseInt(dayC) +"天前";
	}
	else if(hourC>=1){
		result=""+ parseInt(hourC) +"小时前";
	}
	else if(minC>=1){
		result=""+ parseInt(minC) +"分钟前";
	}else
	result="刚刚";
	return result;
}