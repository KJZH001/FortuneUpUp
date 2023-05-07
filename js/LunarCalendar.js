//农历转新历
//源代码来自:https://github.com/jjonline/calendar.js
//作者:jjonline 移植:Moemu

/**
 * 农历1900-2100的润大小信息表
 * @Array Of Property
 * @return Hex
 */
let lunarInfo = [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,//1900-1909
0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,//1910-1919
0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,//1920-1929
0x06566, 0x0d4a0, 0x0ea50, 0x16a95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,//1930-1939
0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,//1940-1949
0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0,//1950-1959
0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,//1960-1969
0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6,//1970-1979
0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,//1980-1989
0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0,//1990-1999
0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,//2000-2009
0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,//2010-2019
0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,//2020-2029
0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,//2030-2039
0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0,//2040-2049
/**Add By JJonline@JJonline.Cn**/
0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0,//2050-2059
0x092e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4,//2060-2069
0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0,//2070-2079
0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160,//2080-2089
0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252,//2090-2099
0x0d520]//2100

/**
 * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
 * @param y lunar Year
 * @return Number (0-12)
 * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
 */
function leapMonth(y) { //闰字编码 \u95f0
    return (lunarInfo[y - 1900] & 0xf);
}

/**
 * 返回农历y年闰月的天数 若该年没有闰月则返回0
 * @param y lunar Year
 * @return Number (0、29、30)
 * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
 */
function leapDays(y) {
    if (leapMonth(y)) {
        return ((lunarInfo[y - 1900] & 0x10000) ? 30 : 29);
    }
    return (0);
}

/**
 * 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
 * @param y lunar Year
 * @param m lunar Month
 * @return Number (-1、29、30)
 * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
 */
function monthDays(y, m) {
    if (m > 12 || m < 1) {
        return -1
    }//月份参数从1至12，参数错误返回-1
    return ((lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29);
}

/**
 * 返回农历y年一整年的总天数
 * @param y lunar Year
 * @return Number
 * @eg:var count = calendar.lYearDays(1987) ;//count=387
 */
function lYearDays(y) {
    let i, sum = 348;
    for (i = 0x8000; i > 0x8; i >>= 1) {
        sum += (lunarInfo[y - 1900] & i) ? 1 : 0;
    }
    return (sum + leapDays(y));
}

/**
 * 传入农历年月日以及传入的月份以获得详细的公历信息 <=> cY, cM, cD
 * !important! 参数区间1900.1.31~2100.12.1
 * @param y  lunar year
 * @param m  lunar month
 * @param d  lunar day
 * @param isLeapMonth  lunar month is leap or not.[如果是农历闰月第四个参数赋值true即可]
 * @return JSON object
 * @eg:console.log(calendar.lunar2solar(1987,9,10));
 */

function lunar2solar(y, m, d, isLeapMonth) {
    y = parseInt(y)
    m = parseInt(m)
    d = parseInt(d)
    isLeapMonth = !!isLeapMonth;
    const leapOffset = 0;
    const leapMonths = leapMonth(y);
    const leapDay = leapDays(y);
    if (isLeapMonth && (leapMonths !== m)) {
        return -1;
    }//传参要求计算该闰月公历 但该年得出的闰月与传参的月份并不同
    if (y === 2100 && m === 12 && d > 1 || y === 1900 && m === 1 && d < 31) {
        return -1;
    }//超出了最大极限值
    const day = monthDays(y, m);
    let _day = day;
    //bugFix 2016-9-25
    //if month is leap, _day use leapDays method
    if (isLeapMonth) {
        _day = leapDays(y, m);
    }
    if (y < 1900 || y > 2100 || d > _day) {
        return -1;
    }//参数合法性效验

    //计算农历的时间差
    let offset = 0;
    let i;
    for (i = 1900; i < y; i++) {
        offset += lYearDays(i);
    }
    let leap = 0, isAdd = false;
    for (i = 1; i < m; i++) {
        leap = leapMonth(y);
        if (!isAdd) {//处理闰月
            if (leap <= i && leap > 0) {
                offset += leapDays(y);
                isAdd = true;
            }
        }
        offset += monthDays(y, i);
    }
    //转换闰月农历 需补充该年闰月的前一个月的时差
    if (isLeapMonth) {
        offset += day;
    }
    //1900年农历正月一日的公历时间为1900年1月30日0时0分0秒(该时间也是本农历的最开始起始点)
    const strap = Date.UTC(1900, 1, 30, 0, 0, 0);
    const calObj = new Date((offset + d - 31) * 86400000 + strap);
    const cY = calObj.getUTCFullYear();
    const cM = calObj.getUTCMonth() + 1;
    const cD = calObj.getUTCDate();

    return [cY, cM, cD];
}

//以下内容由Moemu添加以适用于FortuneUpUp
function GetLunarFestivalDate(month, day) {
    let today = new Date();
    let year = today.getFullYear();
    let lunarDate = lunar2solar(year, month, day);
    return [lunarDate[1],lunarDate[2]];
}