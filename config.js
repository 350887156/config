/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "zh-cn",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			clockBold:true,
			showDate:false,
			displayType:"both",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Beijing",
				locationID: "1816670",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "a3b7413f27d4b8ab7078d886517154ed"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Beijing",
				locationID: "1816670",  //ID from https://openweathermap.org/city
				appid: "a3b7413f27d4b8ab7078d886517154ed"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "左岸读书",
						url: "http://www.zreading.cn/feed"
					}
					,
					{
						title: "FT中文网",
						url: "http://www.ftchinese.com/rss/feed"

					},
					{
						title: "今日焦点",
						url: "hhttp://www.ftchinese.com/rss/news"

					}
				],
				showSourceTitle: false,
				showPublishDate: true
			}
		},
		{
			module: "compliments",
			position: "lower_third",
			config: {
				compliments: {
			                anytime: [
                       				 "嘿 你真漂亮!",
			                        "妞子 为了婚纱钻戒 努力",
                        			"辣椒秧麻麻真漂亮",
                        			"你喜欢我吗",
                       				 "漂亮的叫美女，不漂亮的叫有气质",
                       				 "昨夜海棠初着雨，数朵轻盈娇欲雨; 佳人晓起出兰房，折来对镜比红装",
                       				 "刚说的那句诗词,你是不是没看懂呀 哈哈哈!!!!"
               				 ],
                morning: [
                        "早晨好 大姑凉",
                        "开心快乐每一天",
                        "昨晚做了什么美梦了?分享下嘛"
                ],
                afternoon: [
                        "喝杯下午茶吧",
                        "也应似旧，盈盈秋水，淡淡春山",
                        "依旧桃花面，频低柳叶眉"
                ],
                evening: [
                        "喔 你看起来真美",
                        "妞子 别臭美了 快去锻炼",
                        "Hi, 性感"
                ],
                day_sunny: [
                        "今天天气真好",
                        "今天是个不错的天气"
                ],
                snow: [
                        "美丽的雪花能带给你幸运"
                ],
                rain: [
                        "今天有雨记得带伞哦!"
                ]
        }


				}
		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
