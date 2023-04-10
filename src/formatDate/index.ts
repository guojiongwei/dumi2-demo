// src/formatTime/index.ts

/**
  格式化时间戳
  @param timestamp 时间戳，单位为毫秒
  @param format 时间格式，如YYYY-MM-DD hh:mm:ss
  @returns 返回格式化后的时间字符串
*/
function formatDate(timestamp: number, format = 'YYYY-MM-DD hh:mm:ss'): string {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const hours = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);
  const seconds = ('0' + date.getSeconds()).slice(-2);
  const map: { [key: string]: string } = {
    YYYY: String(year),
    MM: month,
    DD: day,
    hh: hours,
    mm: minutes,
    ss: seconds,
  };
  return format.replace(/YYYY|MM|DD|hh|mm|ss/g, (matched) => map[matched]);
}

export default formatDate;
