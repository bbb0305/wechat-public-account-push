export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wx57df0e131fd03903",
    // 公众号APP_SECRET
    APP_SECRET: "23894c03f35dab397df17f85dd73a758",
    // 模板消息id
    TEMPLATE_ID: "t9bMaKHmzUfbVx2lrKp3z2Xve1_IUf6o-f06b7p4v4w",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    USERS: ["ot-O76fXOAB6Oiq1JdnpUQVZQZRY","ot-O76fBrs_salcPTyBwTJtNtKM0"],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "浙江",
    // 所在城市
    CITY: "台州",

    /** 生日相关 */

    // 生日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
    BIRTHDAYS: [
      {"name": "黄微", "year": "2003", "date": "04-12"},
      {"name": "牟炳杰", "year": "2003", "date": "03-05"},
    ],

    /** 日期相关 */

    // 在一起的日子，格式同上
    LOVE_DATE: "2007-07-07",
    // 结婚纪念日
    MARRY_DATE: "2029-07-07",


    /** 好文节选 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: "小说"


    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
