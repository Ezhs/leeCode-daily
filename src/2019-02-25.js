// 获取当前周的 开始时间和结束时间
function getCurrentWeekStartAndEnd () {
    const DAY_TIME = 86400000; // 一天的时间
    let d = new Date();
    // 0 - 6 0 周日
    let day = d.getDay() ? d.getDay() : 7;
    // 开始时间
    let  start = new Date(d.getTime() - DAY_TIME * (day - 1)).toLocaleDateString();
    // 结束时间
    let  end = new Date(d.getTime() + DAY_TIME * (7 - day)).toLocaleDateString();
    return [start, end];
}

console.log(getCurrentWeekStartAndEnd());