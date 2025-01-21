import dayjs from "dayjs";

export function timeAgo(createdTime: number) {
  console.log(createdTime, "erwrwe");
  const now = dayjs().unix();

  const timeDiff = now - createdTime; // 计算时间差，单位为毫秒

  const seconds = timeDiff; // 转换为秒
  const minutes = Math.floor(seconds / 60); // 转换为分钟
  const hours = Math.floor(minutes / 60); // 转换为小时
  const days = Math.floor(hours / 24); // 转换为天数
  const months = Math.floor(days / 30); // 转换为月数（大致）
  const years = Math.floor(months / 12); // 转换为年数

  if (seconds < 60) {
    return "刚刚"; // 小于60秒，显示“刚刚”
  } else if (minutes < 60) {
    return `${minutes}分钟前`; // 小于1小时，显示“X分钟前”
  } else if (hours < 24) {
    return `${hours}小时${minutes % 60}分钟前`; // 小于1天，显示“X小时X分钟前”
  } else if (days < 30) {
    return `${days}天${hours % 24}小时之前`; // 小于1个月，显示“X天X小时之前”
  } else if (months < 12) {
    return `${months}个月前`; // 小于1年，显示“X个月前”
  } else {
    return `${years}年前`; // 超过1年，显示“X年前”
  }
}
