import dayjs from "dayjs";



export function timeAgo(createdTime: number,locale: string) {
  const now = dayjs().unix();
 
  const timeDiff = now - createdTime; // 计算时间差，单位为毫秒

  const seconds = timeDiff; // 转换为秒
  const minutes = Math.floor(seconds / 60); // 转换为分钟
  const hours = Math.floor(minutes / 60); // 转换为小时
  const days = Math.floor(hours / 24); // 转换为天数
  const months = Math.floor(days / 30); // 转换为月数（大致）
  const years = Math.floor(months / 12); // 转换为年数

  const lang:any={
    zh : {
      now:"刚刚",
      minutes:"分钟",
      hours:"小时",
    },
    en : {
      now:"just now",
      minutes:"m",
      hours:"h",
    }
  }





  if (seconds < 60) {
    return lang[locale].now; // 小于60秒，显示“刚刚”
  } else if (minutes < 60) {
    return `${minutes}${lang[locale].minutes}`; // 小于1小时，显示“X分钟前”
  } else if (hours < 24) {
    return `${hours}${lang[locale].hours}`; // 小于1天，显示“X小时X分钟前”
  } else if (days < 30) {
    return dayjs(createdTime).format('MMM D'); // 小于1个月，显示“X天X小时之前”
  } else {
    return  dayjs(createdTime).format('MMM D'); // 小于1个月，显示“X天X小时之前”
  }
}
