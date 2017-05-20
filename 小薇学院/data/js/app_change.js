$(function() {
	$("#app_paihang").click(function(e) {
		e.stopPropagation();
		$(this).addClass('app_active').siblings().removeClass('app_active');
		$(".app_ranking").slideDown(800).siblings().hide();

	});
	$("#app_time").click(function(e) {
		e.stopPropagation();
		$(this).addClass('app_active').siblings().removeClass('app_active');
		$(".shixu").show(800).siblings().hide();
	});
	$("#app_keep").click(function(e) {
		e.stopPropagation();
		$(this).addClass('app_active').siblings().removeClass('app_active');
		$(".liucunlv").show(800).siblings().hide();
	});
	
	$(".select_all").on('click',function(e){
		e.stopPropagation();
		$(this).siblings().animate({
			height: 'toggle',
			width: 'toggle'
		},'slow');
	})
	$(".paymentTime,#appLiucun li").on('click',function(e){
		e.stopPropagation();
		$(this).siblings().removeClass('selected');
		$(this).addClass('selected');
	})
	
	
//时序图,留存率
	shixu();
	liucunlv1();
	liucunlv2();
	liucunlv3();
	

	

	function shixu() {

		var dom = document.getElementById("shixu");
		var myChart = echarts.init(dom);
		var app = {};
		option = null;
		app.title = 'APP时序图数据';

		var hours = ['5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];

		var app = ['', '支付宝', '优酷视频', 'UC浏览器', '微信', '手机百度', '携程旅行', '腾讯新闻', '腾讯视频', '搜狗输入法', '手机淘宝', '新浪微博', '墨迹天气', '美颜相机', '美图秀秀', '开心消消乐',
			'美团', '今日头条', '高德地图', '滴滴出行', '大众点评', '百度地图',
			'爱奇艺', 'QQ音乐', 'QQ', '360手机卫士'
		];
		var data = [
		[25, 1, 443  ],
		[25, 2, 2468 ],
		[25, 3, 7302 ],
		[25, 4, 14792],
		[25, 5, 4632 ],
		[25, 6, 1256 ],
		[25, 7, 9722 ],
		[25, 8, 408  ],
		[25, 9, 1269 ],
		[25, 10,928  ],
		[25, 11,3106 ],
		[25, 12,4894 ],
		[25, 13,9725 ],
		[25, 14,5608 ],
		[25, 15,6321 ],
		[25, 16,7305 ],
		[25, 17,4572 ],
		[25, 18,1253 ],
		[24, 1, 9534 ],
		[24, 2, 9764 ],
		[24, 3, 15053],
		[24, 4, 16921],
		[24, 5, 8534 ],
		[24, 6, 9156 ],
		[24, 7, 11269],
		[24, 8, 4385 ],
		[24, 9, 13523],
		[24, 10,8927 ],
		[24, 11,19464],
		[24, 12,24877],
		[24, 13,4822 ],
		[24, 14,14536],
		[24, 15,19145],
		[24, 16,21241],
		[24, 17,1229 ],
		[24, 18,4376 ],
		[23, 1, 690  ],
		[23, 2, 2432 ],
		[23, 3, 12147],
		[23, 4, 14565],
		[23, 5, 18464],
		[23, 6, 13632],
		[23, 7, 7304 ],
		[23, 8, 15758],
		[23, 9, 4732 ],
		[23, 10,21257],
		[23, 11,2467 ],
		[23, 12,7306 ],
		[23, 13,19405],
		[23, 14,2689 ],
		[23, 15,16985],
		[23, 16,2722 ],
		[23, 17,30   ],
		[23, 18,18   ],
		[22, 1, 577  ],
		[22, 2, 773  ],
		[22, 3, 38762],
		[22, 4, 49623],
		[22, 5, 3748 ],
		[22, 6, 3671 ],
		[22, 7, 1293 ],
		[22, 8, 32421],
		[22, 9, 37242],
		[22, 10,2465 ],
		[22, 11,3243 ],
		[22, 12,2464 ],
		[22, 13,21822],
		[22, 14,30293],
		[22, 15,25421],
		[22, 16,41152],
		[22, 17,20242],
		[22, 18,11425],
		[21, 1, 36   ],
		[21, 2, 49   ],
		[21, 3, 10231],
		[21, 4, 11463],
		[21, 5, 15837],
		[21, 6, 12583],
		[21, 7, 8214 ],
		[21, 8, 16022],
		[21, 9, 9367 ],
		[21, 10,119  ],
		[21, 11,147  ],
		[21, 12,155  ],
		[21, 13,162  ],
		[21, 14,31994],
		[21, 15,18684],
		[21, 16,12943],
		[21, 17,5518 ],
		[21, 18,5241 ],
		[20, 1, 58   ],
		[20, 2, 387  ],
		[20, 3, 539  ],
		[20, 4, 4647 ],
		[20, 5, 2743 ],
		[20, 6, 67321],
		[20, 7, 42164],
		[20, 8, 10325],
		[20, 9, 1569 ],
		[20, 10,83   ],
		[20, 11,1523 ],
		[20, 12,56   ],
		[20, 13,62413],
		[20, 14,37808],
		[20, 15,5864 ],
		[20, 16,22   ],
		[20, 17,10246],
		[20, 18,20484],
		[19, 1, 21   ],
		[19, 2, 25101],
		[19, 3, 33450],
		[19, 4, 9743 ],
		[19, 5, 8924 ],
		[19, 6, 1446 ],
		[19, 7, 23710],
		[19, 8, 30667],
		[19, 9, 2837 ],
		[19, 10,55   ],
		[19, 11,5620 ],
		[19, 12,8403 ],
		[19, 13,36233],
		[19, 14,19535],
		[19, 15,22318],
		[19, 16,11186],
		[19, 17,27884],
		[19, 18,34842],
		[18, 1, 27   ],
		[18, 2, 59   ],
		[18, 3, 2714 ],
		[18, 4, 4792 ],
		[18, 5, 5524 ],
		[18, 6, 10700],
		[18, 7, 5376 ],
		[18, 8, 13362],
		[18, 9, 1383 ],
		[18, 10,92   ],
		[18, 11,52   ],
		[18, 12,40   ],
		[18, 13,2728 ],
		[18, 14,5400 ],
		[18, 15,2704 ],
		[18, 16,8103 ],
		[18, 17,2799 ],
		[18, 18,81   ],
		[17, 1, 11526],
		[17, 2, 14569],
		[17, 3, 40719],
		[17, 4, 37813],
		[17, 5, 11675],
		[17, 6, 7251 ],
		[17, 7, 4341 ],
		[17, 8, 2573 ],
		[17, 9, 29099],
		[17, 10,14579],
		[17, 11,8771 ],
		[17, 12,2963 ],
		[17, 13,18935],
		[17, 14,20387],
		[17, 15,39266],
		[17, 16,5867 ],
		[17, 17,8769 ],
		[17, 18,20389],
		[16, 1, 2557 ],
		[16, 2, 7422 ],
		[16, 3, 10632],
		[16, 4, 27452],
		[16, 5, 8407 ],
		[16, 6, 12648],
		[16, 7, 39020],
		[16, 8, 11190],
		[16, 9, 5624 ],
		[16, 10,99   ],
		[16, 11,19539],
		[16, 12,20931],
		[16, 13,30671],
		[16, 14,1450 ],
		[16, 15,13973],
		[16, 16,16756],
		[16, 17,2856 ],
		[16, 18,2841 ],
		[15, 1, 20   ],
		[15, 2, 5432 ],
		[15, 3, 21348],
		[15, 4, 10700],
		[15, 5, 4831 ],
		[15, 6, 29334],
		[15, 7, 46637],
		[15, 8, 61278],
		[15, 9, 2534 ],
		[15, 10,106  ],
		[15, 11,52   ],
		[15, 12,5793 ],
		[15, 13,20463],
		[15, 14,3722 ],
		[15, 15,24013],
		[15, 16,18683],
		[15, 17,2245 ],
		[15, 18,24010],
		[14, 1, 19   ],
		[14, 2, 17485],
		[14, 3, 28362],
		[14, 4, 26196],
		[14, 5, 39264],
		[14, 6, 29100],
		[14, 7, 24115],
		[14, 8, 12536],
		[14, 9, 21426],
		[14, 10,11676],
		[14, 11,12463],
		[14, 12,40716],
		[14, 13,23567],
		[14, 14,37812],
		[14, 15,14580],
		[14, 16,2964 ],
		[14, 17,20388],
		[14, 18,17484],
		[13, 1, 13   ],
		[13, 2, 5625 ],
		[13, 3, 19352],
		[13, 4, 34844],
		[13, 5, 43193],
		[13, 6, 23758],
		[13, 7, 31425],
		[13, 8, 8624 ],
		[13, 9, 12967],
		[13, 10,27886],
		[13, 11,14352],
		[13, 12,7424 ],
		[13, 13,10353],
		[13, 14,23566],
		[13, 15,20462],
		[13, 16,13971],
		[13, 17,7935 ],
		[13, 18,25114],
		[12, 1, 8239 ],
		[12, 2, 45307],
		[12, 3, 5477 ],
		[12, 4, 8246 ],
		[12, 5, 2778 ],
		[12, 6, 92   ],
		[12, 7, 152  ],
		[12, 8, 54   ],
		[12, 9, 1425 ],
		[12, 10,10835],
		[12, 11,5377 ],
		[12, 12,1384 ],
		[12, 13,144  ],
		[12, 14,202  ],
		[12, 15,8039 ],
		[12, 16,2715 ],
		[12, 17,10701],
		[12, 18,50   ],
		[11, 1, 5524 ],
		[11, 2, 10364],
		[11, 3, 23289],
		[11, 4, 17481],
		[11, 5, 40713],
		[11, 6, 32001],
		[11, 7, 14534],
		[11, 8, 100  ],
		[11, 9, 5865 ],
		[11, 10,27645],
		[11, 11,2943 ],
		[11, 12,7317 ],
		[11, 13,11235],
		[11, 14,14577],
		[11, 15,2961 ],
		[11, 16,11673],
		[11, 17,1509 ],
		[11, 18,43   ],
		[10, 1, 2839 ],
		[10, 2, 5635 ],
		[10, 3, 8405 ],
		[10, 4, 19537],
		[10, 5, 30669],
		[10, 6, 47367],
		[10, 7, 15241],
		[10, 8, 22320],
		[10, 9, 25103],
		[10, 10,33452],
		[10, 11,39363],
		[10, 12,23712],
		[10, 13,29424],
		[10, 14,16754],
		[10, 15,11188],
		[10, 16,29278],
		[10, 17,39018],
		[10, 18,5622 ],
		[9, 1, 1936 ],
		[9, 2, 5379 ],
		[9, 3, 10699],
		[9, 4, 24009],
		[9, 5, 15962],
		[9, 6, 3678 ],
		[9, 7, 2863 ],
		[9, 8, 13324],
		[9, 9, 4782 ],
		[9, 10,2713 ],
		[9, 11,6706 ],
		[9, 12,13261],
		[9, 13,18685],
		[9, 14,5375 ],
		[9, 15,8037 ],
		[9, 16,12647],
		[9, 17,13361],
		[9, 18,16023],
		[8, 1, 51   ],
		[8, 2, 63   ],
		[8, 3, 20532],
		[8, 4, 1621 ],
		[8, 5, 7352 ],
		[8, 6, 1646 ],
		[8, 7, 36363],
		[8, 8, 50883],
		[8, 9, 8235 ],
		[8, 10,2967 ],
		[8, 11,4419 ],
		[8, 12,8957 ],
		[8, 13,27651],
		[8, 14,32007],
		[8, 15,58143],
		[8, 16,55239],
		[8, 17,22391],
		[8, 18,11679],
		[7, 1, 5603 ],
		[7, 2, 10362],
		[7, 3, 12957],
		[7, 4, 25104],
		[7, 5, 11189],
		[7, 6, 18262],
		[7, 7, 37628],
		[7, 8, 32062],
		[7, 9, 13972],
		[7, 10,3256 ],
		[7, 11,22321],
		[7, 12,2821 ],
		[7, 13,19538],
		[7, 14,8406 ],
		[7, 15,9452 ],
		[7, 16,5623 ],
		[7, 17,2840 ],
		[7, 18,15364],
		[6, 1, 23   ],
		[6, 2, 47   ],
		[6, 3, 4293 ],
		[6, 4, 53   ],
		[6, 5, 3136 ],
		[6, 6, 13362],
		[6, 7, 18686],
		[6, 8, 123  ],
		[6, 9, 5376 ],
		[6, 10,22679],
		[6, 11,105  ],
		[6, 12,296  ],
		[6, 13,16024],
		[6, 14,646  ],
		[6, 15,325  ],
		[6, 16,2714 ],
		[6, 17,5214 ],
		[6, 18,8038 ],
		[5, 1, 2438 ],
		[5, 2, 2842 ],
		[5, 3, 10414],
		[5, 4, 10432],
		[5, 5, 23288],
		[5, 6, 13154],
		[5, 7, 20384],
		[5, 8, 26192],
		[5, 9, 12576],
		[5, 10,1508 ],
		[5, 11,82   ],
		[5, 12,2960 ],
		[5, 13,8768 ],
		[5, 14,14576],
		[5, 15,11672],
		[5, 16,4257 ],
		[5, 17,3516 ],
		[5, 18,2145 ],
		[4, 1, 13863],
		[4, 2, 28266],
		[4, 3, 68271],
		[4, 4, 70244],
		[4, 5, 44268],
		[4, 6, 29866],
		[4, 7, 92275],
		[4, 8, 89079],
		[4, 9, 60271],
		[4, 10,50669],
		[4, 11,45868],
		[4, 12,37867],
		[4, 13,77872],
		[4, 14,82674],
		[4, 15,57070],
		[4, 16,89075],
		[4, 17,66671],
		[4, 18,53870],
		[3, 1, 28   ],
		[3, 2, 2643 ],
		[3, 3, 8213 ],
		[3, 4, 10252],
		[3, 5, 22677],
		[3, 6, 15878],
		[3, 7, 2562 ],
		[3, 8, 8036 ],
		[3, 9, 65   ],
		[3, 10,2712 ],
		[3, 11,13360],
		[3, 12,5374 ],
		[3, 13,103  ],
		[3, 14,89   ],
		[3, 15,5378 ],
		[3, 16,10698],
		[3, 17,2732 ],
		[3, 18,114  ],
		[2, 1, 39   ],
		[2, 2, 2859 ],
		[2, 3, 70   ],
		[2, 4, 26191],
		[2, 5, 20383],
		[2, 6, 2725 ],
		[2, 7, 14575],
		[2, 8, 22415],
		[2, 9, 2959 ],
		[2, 10,5863 ],
		[2, 11,57   ],
		[2, 12,113  ],
		[2, 13,10352],
		[2, 14,23287],
		[2, 15,97   ],
		[2, 16,8767 ],
		[2, 17,17479],
		[2, 18,11671],
		[1, 1, 9145 ],
		[1, 2, 8278 ],
		[1, 3, 25340],
		[1, 4, 20740],
		[1, 5, 6940 ],
		[1, 6, 1526 ],
		[1, 7, 7351 ],
		[1, 8, 9240 ],
		[1, 9, 11540],
		[1, 10,13840],
		[1, 11,4640 ],
		[1, 12,16140],
		[1, 13,1478 ],
		[1, 14,1190 ],
		[1, 15,4634 ],
		[1, 16,6944 ],
		[1, 17,18440],
		[1, 18,11246]
	];

		data = data.map(function(item) {
			return [item[1], item[0], item[2] || '-'];
		});

		option = {
			tooltip: {
				position: 'top',
				textStyle:{
		        	fontSize: '24',
		        }
			},
			animation: false,
			grid: { //绘图网格
				top: '25', //绘图网格离容器上边距设置
				//			height: '50%',
				//			y: '20%'
			},
			xAxis: {
				axisLine: {
					show: false, //不显示坐标轴轴线
				},
				axisTick: {
					show: false, //不显示坐标轴刻度线
				},
				/*axisLabel: {  
					rotate: '45', //刻度标签旋转角度
				},*/
				type: 'category',
				data: hours,
				position: 'top', //x轴显示位置
				splitArea: {
					show: true
				}
				/*axisLabel:{ 
         interval: 0 
      }*/ //横坐标完全显示开关
			},
			yAxis: {
				axisLine: {
					show: false, //不显示坐标轴轴线
				},
				axisTick: {
					show: false, //不显示坐标轴刻度线
				},
				type: 'category',
				data: app,
				splitArea: {
					show: true
				}
			},
			visualMap: {
				min: 0,
				max: 50000,
				calculable: true,
				orient: 'horizontal',
				left: 'center',
				bottom: '0'
			},
			series: [{
				padding: [0, 0],
				name: '',
				type: 'heatmap',
				data: data,
				label: {
					normal: {
						show: false
					}
				},
				itemStyle: {
					emphasis: {
						shadowBlur: 20,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			}]
		};

		if(option && typeof option === "object") {
			myChart.setOption(option, true);
		}
	};

	//	留存率
	function liucunlv1() {

		var dom2 = document.getElementById("liucunlv1");
		var myChart2 = echarts.init(dom2);
		var app = {};
		var color = ['#ff9933', '#feb830', '#5970be', '#1d9a96'];
		var placeHoledStyle = {
			normal: {
				barBorderColor: 'rgba(0,0,0,0)',
				color: 'rgba(0,0,0,0)'
			},
			emphasis: {
				barBorderColor: 'rgba(0,0,0,0)',
				color: 'rgba(0,0,0,0)'
			}
		};
		var dataStyle = {
			normal: {
				label: {
					show: true,
					position: 'insideLeft',
					formatter: '{c}%'
				}
			}
		};
		option = {
			title: {
				text: '',
				subtext: '',
				sublink: ''
			},
			color: color,
			tooltip: {
				trigger: 'axis',
				axisPointer: { // 坐标轴指示器，坐标轴触发有效
					type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
				},
				textStyle: {
					fontSize: '20',
				},
				formatter: '{b}<br/>{a0}:{c0}%<br/>{a2}:{c2}%<br/>{a4}:{c4}%<br/>{a6}:{c6}%'
			},
			legend: {
				y: 0,
				//      itemGap : document.getElementById('liucunlv').offsetWidth / 4,
				itemGap: 20,
				itemWidth: 50,
				textStyle: {
					fontSize: 18,
				},
				data: ['次日留存率', '三日留存率', '七日留存率', '月留存率']
			},
			toolbox: {
				show: true,
				feature: {
					mark: {
						show: true
					},
					dataView: {
						show: true,
						readOnly: false
					},
					restore: {
						show: true
					},
					saveAsImage: {
						show: true
					}
				}
			},
			grid: {
				y: 50,
				y2: 70
			},
			xAxis: [{
				type: 'value',
				position: 'top',
				splitLine: {
					show: false
				},
				axisLabel: {
					show: false
				},
				axisTick: {
					show: false, //不显示坐标轴刻度线
				},
			}],
			yAxis: [{
				type: 'category',
				axisLabel: {
					textStyle: {
						fontSize: '20',
					},
				},
				splitLine: {
					show: false
				},
				data: ['天猫', '酷狗音乐', '优酷', '百度地图', '美团', '手机淘宝', 'QQ空间', '微博', 'QQ', '微信']

			}],
			series: [{
				name: '次日留存率',
				type: 'bar',
				stack: '总量',
				label: {
					normal: {
						show: true,
						textStyle: {
							fontSize: '18',
							fontStyle: 'bold',
						}
					},
					emphasis: {
						show: true,
						textStyle: {
							fontSize: '24',
							fontWeight: 'bold',
						}
					},
				},
				itemStyle: dataStyle,
				data: [33, 39, 45, 41, 40, 43, 49, 73, 83, 90]
			}, {
				name: '次日留存率',
				type: 'bar',
				stack: '总量',
				itemStyle: placeHoledStyle,
				data: [82, 76, 70, 74, 75, 72, 66, 42, 32, 25]
			}, {
				name: '三日留存率',
				type: 'bar',
				stack: '总量',
				label: {
					normal: {
						show: true,
						textStyle: {
							fontSize: '18',
							fontStyle: 'bold',
						}
					},
					emphasis: {
						show: true,
						textStyle: {
							fontSize: '24',
							fontWeight: 'bold',
						}
					},
				},
				itemStyle: dataStyle,
				data: [20, 28, 28, 31, 29, 33, 31, 57, 71, 88]
			}, {
				name: '三日留存率',
				type: 'bar',
				stack: '总量',
				itemStyle: placeHoledStyle,
				data: [90, 82, 82, 79, 81, 77, 79, 53, 39, 22]
			}, {
				name: '七日留存率',
				type: 'bar',
				stack: '总量',
				label: {
					normal: {
						show: true,
						textStyle: {
							fontSize: '18',
							fontStyle: 'bold',
						}
					},
					emphasis: {
						show: true,
						textStyle: {
							fontSize: '24',
							fontWeight: 'bold',
						}
					},
				},
				itemStyle: dataStyle,
				data: [10, 16, 20, 19, 21, 25, 21, 49, 59, 81]
			}, {
				name: '七日留存率',
				type: 'bar',
				stack: '总量',
				itemStyle: placeHoledStyle,
				data: [95, 89, 85, 86, 84, 80, 84, 56, 46, 24]
			}, {
				name: '月留存率',
				type: 'bar',
				stack: '总量',
				label: {
					normal: {
						show: true,
						textStyle: {
							fontSize: '18',
							fontStyle: 'bold',
						}
					},
					emphasis: {
						show: true,
						textStyle: {
							fontSize: '24',
							fontWeight: 'bold',
						}
					},
				},
				itemStyle: dataStyle,
				data: [6, 7, 10, 12, 11, 13, 15, 30, 46, 67]
			}, {
				name: '月留存率',
				type: 'bar',
				stack: '总量',
				itemStyle: placeHoledStyle,
				data: []
			}]
		};

		if(option && typeof option === "object") {
			myChart2.setOption(option, true);
		}

	}

	function liucunlv2() {

		var dom3 = document.getElementById("liucunlv2");
		var myChart3 = echarts.init(dom3);
		var app = {};
		var color = ['#ff9933', '#feb830', '#5970be', '#1d9a96'];
		var placeHoledStyle = {
			normal: {
				barBorderColor: 'rgba(0,0,0,0)',
				color: 'rgba(0,0,0,0)'
			},
			emphasis: {
				barBorderColor: 'rgba(0,0,0,0)',
				color: 'rgba(0,0,0,0)'
			}
		};
		var dataStyle = {
			normal: {
				label: {
					show: true,
					position: 'insideLeft',
					formatter: '{c}%'
				}
			}
		};
		option = {
			title: {
				text: '',
				subtext: '',
				sublink: ''
			},
			color: color,
			tooltip: {
				trigger: 'axis',
				axisPointer: { // 坐标轴指示器，坐标轴触发有效
					type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
				},
				textStyle: {
					fontSize: '20',
				},
				formatter: '{b}<br/>{a0}:{c0}%<br/>{a2}:{c2}%<br/>{a4}:{c4}%<br/>{a6}:{c6}%'
			},
			legend: {
				y: 0,
//				itemGap: document.getElementById('liucunlv2').offsetWidth / 8,
				itemWidth: 50,
				textStyle: {
					fontSize: 18,
				},
				data: ['次日留存率', '三日留存率', '七日留存率', '月留存率']
			},
			toolbox: {
				show: true,
				feature: {
					mark: {
						show: true
					},
					dataView: {
						show: true,
						readOnly: false
					},
					restore: {
						show: true
					},
					saveAsImage: {
						show: true
					}
				}
			},
			grid: {
				y: 50,
				y2: 70
			},
			xAxis: [{
				type: 'value',
				position: 'top',
				splitLine: {
					show: false
				},
				axisLabel: {
					show: false
				},
				axisTick: {
					show: false, //不显示坐标轴刻度线
				},
			}],
			yAxis: [{
				type: 'category',
				axisLabel: {
					textStyle: {
						fontSize: '20',
					},
				},
				splitLine: {
					show: false
				},
				data: ['百度新闻', '澎湃新闻', '凤凰新闻', '天天快报', 'ZAKER', '新浪新闻', '搜狐新闻', '网易新闻', '腾讯新闻', '今日头条']
			}],
			series: [{
				name: '次日留存率',
				type: 'bar',
				stack: '总量',
				label: {
					normal: {
						show: true,
						textStyle: {
							fontSize: '18',
							fontStyle: 'bold',
						}
					},
					emphasis: {
						show: true,
						textStyle: {
							fontSize: '24',
							fontWeight: 'bold',
						}
					},
				},
				itemStyle: dataStyle,
				data: [39, 42, 43, 44, 44, 45, 49, 50, 54, 55]
			}, {
				name: '次日留存率',
				type: 'bar',
				stack: '总量',
				itemStyle: placeHoledStyle,
				data: [30, 27, 26, 25, 25, 24, 20, 19, 15, 14]
			}, {
				name: '三日留存率',
				type: 'bar',
				stack: '总量',
				label: {
					normal: {
						show: true,
						textStyle: {
							fontSize: '18',
							fontStyle: 'bold',
						}
					},
					emphasis: {
						show: true,
						textStyle: {
							fontSize: '24',
							fontWeight: 'bold',
						}
					},
				},
				itemStyle: dataStyle,
				data: [22, 20, 22, 24, 23, 25, 29, 33, 30, 35]
			}, {
				name: '三日留存率',
				type: 'bar',
				stack: '总量',
				itemStyle: placeHoledStyle,
				data: [30, 32, 30, 28, 29, 27, 23, 19, 22, 17]
			}, {
				name: '七日留存率',
				type: 'bar',
				stack: '总量',
				label: {
					normal: {
						show: true,
						textStyle: {
							fontSize: '18',
							fontStyle: 'bold',
						}
					},
					emphasis: {
						show: true,
						textStyle: {
							fontSize: '24',
							fontWeight: 'bold',
						}
					},
				},
				itemStyle: dataStyle,
				data: [15, 19, 21, 20, 18, 17, 18, 17, 18, 19]
			}, {
				name: '七日留存率',
				type: 'bar',
				stack: '总量',
				itemStyle: placeHoledStyle,
				data: [25, 21, 19, 20, 22, 23, 22, 23, 22, 21]
			}, {
				name: '月留存率',
				type: 'bar',
				stack: '总量',
				label: {
					normal: {
						show: true,
						textStyle: {
							fontSize: '18',
							fontStyle: 'bold',
						}
					},
					emphasis: {
						show: true,
						textStyle: {
							fontSize: '24',
							fontWeight: 'bold',
						}
					},
				},
				itemStyle: dataStyle,
				data: [8, 7, 10, 9, 10, 10, 9, 6, 11, 10]
			}, {
				name: '月留存率',
				type: 'bar',
				stack: '总量',
				itemStyle: placeHoledStyle,
				data: []
			}]
		};

		if(option && typeof option === "object") {
			myChart3.setOption(option, true);
		}

	}
	
	function liucunlv3() {

		var dom2 = document.getElementById("liucunlv3");
		var myChart2 = echarts.init(dom2);
		var app = {};
		var color = ['#ff9933', '#feb830', '#5970be', '#1d9a96'];
		var placeHoledStyle = {
			normal: {
				barBorderColor: 'rgba(0,0,0,0)',
				color: 'rgba(0,0,0,0)'
			},
			emphasis: {
				barBorderColor: 'rgba(0,0,0,0)',
				color: 'rgba(0,0,0,0)'
			}
		};
		var dataStyle = {
			normal: {
				label: {
					show: true,
					position: 'insideLeft',
					formatter: '{c}%'
				}
			}
		};
		option = {
			title: {
				text: '',
				subtext: '',
				sublink: ''
			},
			color: color,
			tooltip: {
				trigger: 'axis',
				axisPointer: { // 坐标轴指示器，坐标轴触发有效
					type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
				},
				textStyle: {
					fontSize: '20',
				},
				formatter: '{b}<br/>{a0}:{c0}%<br/>{a2}:{c2}%<br/>{a4}:{c4}%<br/>{a6}:{c6}%'
			},
			legend: {
				y: 0,
				//      itemGap : document.getElementById('liucunlv').offsetWidth / 4,
				itemGap: 20,
				itemWidth: 50,
				textStyle: {
					fontSize: 18,
				},
				data: ['次日留存率', '三日留存率', '七日留存率', '月留存率']
			},
			toolbox: {
				show: true,
				feature: {
					mark: {
						show: true
					},
					dataView: {
						show: true,
						readOnly: false
					},
					restore: {
						show: true
					},
					saveAsImage: {
						show: true
					}
				}
			},
			grid: {
				y: 50,
				y2: 70
			},
			xAxis: [{
				type: 'value',
				position: 'top',
				splitLine: {
					show: false
				},
				axisLabel: {
					show: false
				},
				axisTick: {
					show: false, //不显示坐标轴刻度线
				},
			}],
			yAxis: [{
				type: 'category',
				axisLabel: {
					textStyle: {
						fontSize: '20',
					},
				},
				splitLine: {
					show: false
				},
				data : ['迅雷看看', '芒果TV', '哔哩哔哩动画', '搜狐视频', '爱奇艺PPS影音', 'iTunes', 'PPTV聚力', '腾讯视频', '爱奇艺视频', '优酷视频' ]

			}],
			series: [{
				name: '次日留存率',
				type: 'bar',
				stack: '总量',
				label: {
					normal: {
						show: true,
						textStyle: {
							fontSize: '18',
							fontStyle: 'bold',
						}
					},
					emphasis: {
						show: true,
						textStyle: {
							fontSize: '24',
							fontWeight: 'bold',
						}
					},
				},
				itemStyle: dataStyle,
				data: [35,42,39,40,48,52,59,63,68,72]
			}, {
				name: '次日留存率',
				type: 'bar',
				stack: '总量',
				itemStyle: placeHoledStyle,
				data: [55,48,51,50,42,38,31,27,22,18]
			}, {
				name: '三日留存率',
				type: 'bar',
				stack: '总量',
				label: {
					normal: {
						show: true,
						textStyle: {
							fontSize: '18',
							fontStyle: 'bold',
						}
					},
					emphasis: {
						show: true,
						textStyle: {
							fontSize: '24',
							fontWeight: 'bold',
						}
					},
				},
				itemStyle: dataStyle,
				data: [23,28,23,29,28,25,30,36,43,56]
			}, {
				name: '三日留存率',
				type: 'bar',
				stack: '总量',
				itemStyle: placeHoledStyle,
				data: [52,47,52,46,47,50,45,39,32,19]
			}, {
				name: '七日留存率',
				type: 'bar',
				stack: '总量',
				label: {
					normal: {
						show: true,
						textStyle: {
							fontSize: '18',
							fontStyle: 'bold',
						}
					},
					emphasis: {
						show: true,
						textStyle: {
							fontSize: '24',
							fontWeight: 'bold',
						}
					},
				},
				itemStyle: dataStyle,
				data: [14,18,16,19,20,20,19,20,22,24]
			}, {
				name: '七日留存率',
				type: 'bar',
				stack: '总量',
				itemStyle: placeHoledStyle,
				data: [31,27,29,26,25,25,26,25,23,21]
			}, {
				name: '月留存率',
				type: 'bar',
				stack: '总量',
				label: {
					normal: {
						show: true,
						textStyle: {
							fontSize: '18',
							fontStyle: 'bold',
						}
					},
					emphasis: {
						show: true,
						textStyle: {
							fontSize: '24',
							fontWeight: 'bold',
						}
					},
				},
				itemStyle: dataStyle,
				data: [6,8,6,11,6,10,12,12,13,14]
			}, {
				name: '月留存率',
				type: 'bar',
				stack: '总量',
				itemStyle: placeHoledStyle,
				data: []
			}]
		};

		if(option && typeof option === "object") {
			myChart2.setOption(option, true);
		}

	}
	
	//	留存率图显示切换
	var changeLiucun =function (initObj,targetObj){
		if (typeof(initObj)!="undefined" && typeof(targetObj)!="undefined") {
			initObj.on('click',function(event){
				var e = event || window.event;
				e.stopPropagation?e.stopPropagation():e.cancelBubble=true;
				var val = $(this).attr('value');
				var goalObj = targetObj.find('p[value='+ val +']');
				goalObj.show(800);
				goalObj.siblings().hide();
			})
		} 
	};
	var initObj = $('#appLiucun li');
	var targetObj = $('.liucunPic');
	changeLiucun(initObj,targetObj);
	

})