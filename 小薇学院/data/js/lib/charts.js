/**
 * 图表实现,使用echarts3
 */
var genderChart = null;
var ageChart = null;
var childChart = null;
var regionChart = null;
var packChart = null;
var flowChart = null;
var incomeChart = null;
function initGenderChart(elementId,data,color){
	genderChart = echarts.init(document.getElementById(elementId));	
	option = {
			title: {  
			x: 'center',  
			text: '男女比例',
			textStyle: {
				fontSize: '20'
			}
			},  
		    tooltip: {
		        trigger: 'item',
		        formatter: "({d}%)",
		        textStyle:{
		        	fontSize: '30',
		        }
		    },
		    color:color,
		    legend: {
		        orient: 'vertical',
		        x: 'left',
		        padding:[480,0],
		        textStyle: {
                    fontSize: '18',
                    fontWeight: 'normal'
                },
		        data:['男','女']
		    },
		    series: [
		        {
		            name:'男女比例',
		            type:'pie',
		            radius: ['50%', '70%'],
		            avoidLabelOverlap: true,
		            label: {
		                normal: {
		                    show: true,
		                    textStyle: {
		                        fontSize: '18',
		                        fontWeight: 'normal'
		                   	}
		                    /*position: 'center'*/
		                },
		                emphasis: {
		                    show: true,
		                    textStyle: {
		                        fontSize: '30',
		                        fontWeight: 'bold'
		                    }
		                }
		            },
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:data
		        }
		    ]
		};
        // 使用刚指定的配置项和数据显示图表。
	    genderChart.setOption(option);
}
function refreshGenderChart(elementId,data,color){
	if(genderChart!=null){
		if(data==null){
			genderChart.setOption({
				color:color
			});
		}
		else if(color==null){
			genderChart.setOption({
			    series: [{
			        data: data
			    }]
			});
		}
		else if(data==null&&color==null){
			return;
		}
		else{
			genderChart.setOption({
				color:color,
			    series: [{
			        data: data
			    }]
			});
		}

	}
}

function initAgeChart(elementId,data,color){
	ageChart = echarts.init(document.getElementById(elementId));	
	option = {
	    title : {
	        text: '年龄分层',
	        x:'center',
	         textStyle: {
	             fontSize: '20',
	        }
	    },
	    color:color,
	    tooltip : {
	        trigger: 'item',
	        formatter: "({d}%)",
	        textStyle: {
                fontSize: '30',
                fontWeight: 'normal'
           	}
	    },
	    legend: {
	        left: 'left',
	        padding:[570,30],
	        data: data[0],
	        textStyle: {
                fontSize: '18',
                fontWeight: 'normal'
           	}
	    },
	    series : [
	        {
	            name: '年龄分层',
	            type: 'pie',
	            radius : '70%',
	            center: ['50%', '50%'],
	            data:[
	                {value:data[1][0], name:data[0][0]},
	                {value:data[1][1], name:data[0][1]},
	                {value:data[1][2], name:data[0][2]},
	                {value:data[1][3], name:data[0][3]},
	                {value:data[1][4], name:data[0][4]},
	                {value:data[1][5], name:data[0][5]}
	            ],
	            /*itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            },*/
	            label: {
	                normal: {
	                    show: true,
	                    textStyle: {
	                        fontSize: '18',
	                        fontWeight: 'normal'
	                   	}
	                    /*position: 'center'*/
	                },
	                emphasis: {
	                    show: true,
	                    textStyle: {
	                        fontSize: '30',
	                        fontWeight: 'bold'
	                    }
	                }
	            },
	        }
	    ]
	};
        // 使用刚指定的配置项和数据显示图表。
	    ageChart.setOption(option);
}
function refreshAgeChart(elementId,data,color){
	if(ageChart!=null){
		if(color==null){
			ageChart.setOption({
				data:[
	                {value:data[1][0], name:data[0][0]},
	                {value:data[1][1], name:data[0][1]},
	                {value:data[1][2], name:data[0][2]},
	                {value:data[1][3], name:data[0][3]},
	                {value:data[1][4], name:data[0][4]},
	                {value:data[1][5], name:data[0][5]}
	            ]
			});
		}
		else if(data==null&&color==null){
			return;
		}
		else{
			ageChart.setOption({
					series : [{
						data:[
		                {value:data[1][0], name:data[0][0]},
		                {value:data[1][1], name:data[0][1]},
		                {value:data[1][2], name:data[0][2]},
		                {value:data[1][3], name:data[0][3]},
		                {value:data[1][4], name:data[0][4]},
		                {value:data[1][5], name:data[0][5]}
		            ],
		            color:color
				}]				
			});
		}

	}
}

function initChildChart(elementId,data,color){
	childChart = echarts.init(document.getElementById(elementId));	
	option = {
			title: {  
				x: 'center',  
				text: '子嗣情况',
				textStyle: {
					fontSize: '20',
				}
			},  
		    tooltip: {
		        trigger: 'item',
		        /*formatter: "{a} <br/>{b}: {c} ({d}%)"*/
		        formatter: "({d}%)",
		        textStyle:{
		        	fontSize: '30',
		        }
		    },
		    color:color,
		    legend: {
		        orient: 'vertical',
		        x: 'left',
//		        y: 'top',
		        padding:[480,0],
		        textStyle: {
                    fontSize: '18',
                    fontWeight: 'normal'
                },
		        data:['有','无']
		    },
		    series: [
		        {
		            name:'有无子嗣',
		            type:'pie',
		            radius: ['50%', '70%'],
		            avoidLabelOverlap: false,
		            label: {
		                normal: {
		                    show: true,
		                    textStyle: {
		                        fontSize: '18',
		                        fontWeight: 'normal'
		                   	}/*,
		                    position: 'center'*/
		                },
		                emphasis: {
		                    show: true,
		                    textStyle: {
		                        fontSize: '30',
		                        fontWeight: 'bold'
		                    }
		                }
		            },
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:data
		        }
		    ]
		};
        // 使用刚指定的配置项和数据显示图表。
	    childChart.setOption(option);
}
function refreshChildChart(elementId,data,color){
	if(childChart!=null){
		if(data==null){
			childChart.setOption({
				color:color
			});
		}
		else if(color==null){
			childChart.setOption({
			    series: [{
			        data: data
			    }]
			});
		}
		else if(data==null&&color==null){
			return;
		}
		else{
			childChart.setOption({
				color:color,
			    series: [{
			        data: data
			    }]
			});
		}

	}
}

function initRegionChart(elementId,data,color){
	regionChart = echarts.init(document.getElementById(elementId));	
	option = {
		    title: {
		        text: '地域分布',
		        left: 'center',
		        textStyle: {
		        	fontSize: '20',
		        }
		    },
		    tooltip: {
		        trigger: 'item',
		        textStyle:{
		        	fontSize: '24',
		        }
		    },
		    visualMap: {
		        min: 0,
		        max: 30000,
		        left: 'right',
		        top: 'bottom',
		        text: ['高','低'],           // 文本，默认为数值文本
		        calculable: true,
	            inRange: {
	                color: color
	            },
	            textStyle: {
                    fontSize: '18',
                    fontWeight: 'normal'
                },
		    },
		    toolbox: {
		        show: false,
		        orient: 'vertical',
		        left: 'right',
		        top: 'center',
		        feature: {
		            dataView: {readOnly: false},
		            restore: {},
		            saveAsImage: {}
		        }
		    },
		    series: [
		        {
		            name: '用户数量',
		            type: 'map',
		            mapType: 'china',
		            roam: false,
		            label: {
		                normal: {
		                    show: true,
		                    textStyle: {
		                        fontSize: '14',
		                        fontWeight: 'normal'
		                    }
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            data:data
		        }
		    ]
		};
        // 使用刚指定的配置项和数据显示图表。
	    regionChart.setOption(option);
}
function refreshRegionChart(elementId,data,color){
	if(regionChart!=null){
		if(data==null){
			regionChart.setOption({
			    visualMap: {
		            inRange: {
		                color: color
		            }
			    }
			});
		}
		else if(color==null){
			regionChart.setOption({
			    series: [{
			        data: data
			    }]
			});
		}
		else if(data==null&&color==null){
			return;
		}
		else{
			regionChart.setOption({
			    visualMap: {
		            inRange: {
		                color: color
		            }
			    },
			    series: [{
			        data: data
			    }]
			});
		}
	}
}

function initConsumptionChart(elementId){
	consumptionChart = echarts.init(document.getElementById(elementId));	
	option = {
    title : {
        text: '消费能力分布',
      
    },
    grid: {
        left: '3%',
        right: '7%',
        bottom: '3%',
        containLabel: true
    },
    tooltip : {
        trigger: 'axis',
        showDelay : 0,
        formatter : function (params) {
            if (params.value.length > 1) {
                return params.seriesName + ' :<br/>'
                   + params.value[0] + '岁 可支配收入'
                   + params.value[1] + '元 ';
            }
            else {
                return params.seriesName + ' :<br/>'
                   + params.name + '岁 : 可支配收入'
                   + params.value + '元';
            }
        },
        axisPointer:{
            show: true,
            type : 'cross',
            lineStyle: {
                type : 'dashed',
                width : 1
            }
        },
        textStyle:{
		    fontSize: '24',
		}
    },
    toolbox: {
    	show: false,
        feature: {
            dataZoom: {},
            brush: {
                type: ['rect', 'polygon', 'clear']
            }
        }
    },
    brush: {
    },
    legend: {
        data: ['女性','男性'],
        left: 'center',
        textStyle:{
		   fontSize: '18',
		}
        
    },
    xAxis : [
        {
            type : 'value',
            scale:true,
            axisLabel : {
                formatter: '{value} '
            },
            splitLine: {
                show: false
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            scale:true,
            axisLabel : {
                formatter: '{value} '+'(元)'
            },
            splitLine: {
                show: false
            }
        }
    ],
    series : [
        {
            name:'女性',
            type:'scatter',
            data: [ [47, 1267], [27, 2505], [44,3661], [27, 1420], [22, 1614],
 [32, 3933], [52, 4255], [41,3247], [34, 1972], [29, 5399],
 [34, 3655], [35, 5934], [53,5183], [34, 5187], [25, 1205],
 [25, 1269], [48, 4674], [43,4368], [31, 3414], [37, 4032],
 [25, 4208], [42, 2748], [37,3236], [36, 3733], [38, 4964],
 [28, 1077], [46, 2587], [28,5856], [45, 5247], [20, 5129],
 [24, 1315], [59, 2787], [38,4189], [37, 4145], [34, 5780],
 [36, 2544], [36, 3083], [27,5286], [22, 4831], [28, 2851],
 [41, 3595], [62, 4820], [57,1109], [30, 4225], [47, 5382],
 [36, 3133], [48, 3567], [26,2415], [21, 1183], [44, 2962],
 [45, 5319], [47, 2541], [23,2591], [23, 2412], [34, 4159],
 [26, 1323], [49, 5571], [48,3517], [36, 3453], [23, 2659],
 [42, 5692], [39, 1819], [35,3571], [41, 3550], [19, 1149],
 [44, 2571], [20, 2332], [49,5882], [53, 2674], [24, 2358],
 [37, 3897], [40, 3175], [49,5342], [38, 3108], [42, 5476],
 [21, 1531], [52, 4641], [27,2085], [40, 5928], [34, 4323],
 [68, 2519], [45, 2562], [54,1142], [39, 1741], [30, 5455],
 [40, 5868], [34, 2949], [20,4861], [43, 5773], [39, 4293],
 [30, 3732], [29, 4861], [24,4021], [29, 2785], [34, 2663],
 [45, 4734], [47, 5501], [30,2083], [34, 3087], [24, 1532],
 [34, 3393], [39, 5115], [26,2665], [36, 3446], [42, 5284],
 [43, 5048], [33, 4429], [15,5547], [33, 3337], [44, 2542],
 [31, 3426], [26, 3291], [46,4904], [25, 2367], [37, 3135],
 [21, 5375], [44, 2180], [50,2343], [25, 2043], [30, 4508],
 [36, 5542], [35, 3844], [26,1684], [47, 4190], [33, 4046],
 [74, 2135], [30, 1445], [23,5002], [33, 4661], [21, 2255],
 [33, 3544], [33, 1754], [39,1586], [25, 5941], [35, 5053],
 [32, 2234], [39, 1729], [46,5255], [45, 5682], [32, 5495],
 [43, 5627], [45, 3943], [49,5433], [34, 4550], [33, 4836],
 [45, 4962], [36, 5306], [23,2386], [24, 1806], [42, 1090],
 [33, 3291], [31, 4739], [22,2212], [54, 3673], [19, 1678],
 [48, 5096], [47, 5248], [44,5453], [37, 4562], [72, 1144],
 [36, 2647], [21, 2830], [31,3793], [44, 4408], [24, 2105],
 [49, 1142], [41, 5909], [52,2013], [41, 5474], [37, 4201],
 [32, 1870], [26, 5772], [51,1484], [42, 1883], [45, 5980],
 [38, 4039], [48, 3983], [50,3209], [29, 4690], [52, 4271],
 [25, 2728], [32, 3481], [22,1421], [23, 1131], [43, 2524],
 [22, 1330], [31, 5481], [29,5510], [38, 4959], [47, 2993],
 [31, 5983], [26, 1422], [26,2685], [42, 2432], [29, 1440],
 [29, 2973], [44, 2912], [35,5366], [40, 1933], [36, 4636],
 [45, 2921], [24, 3217], [62,2925], [48, 2929], [26, 2453],
 [34, 5890], [40, 5955], [28,3703], [31, 1385], [48, 1184],
 [27, 2180], [26, 2817], [66,1489], [36, 3406], [20, 2709],
 [47, 5840], [31, 4534], [24,2063], [22, 1727], [37, 4433],
 [27, 1025], [37, 5382], [30,2633], [20, 2239], [21, 1079],
 [44, 2959], [35, 3929], [34,4678], [43, 5789], [33, 3772],
 [51, 1024], [22, 1878], [38,1812], [20, 4640], [22, 3850],
 [36, 4192], [34, 2401], [49,3355], [26, 1581], [26, 4764],
 [34, 3371], [38, 1172], [31,2715], [52, 1371], [39, 1188],
 [26, 1175], [25, 2789]      
            ],
            markArea: {
                silent: true,
                itemStyle: {
                    normal: {
                        color: 'transparent',
                        borderWidth: 1,
                        borderType: 'dashed'
                    }
                },
                data: [[{
                    name: '女性分布区间',
                    xAxis: 'min',
                    yAxis: 'min'
                }, {
                    xAxis: 'max',
                    yAxis: 'max'
                }]]
            },
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'solid'
                    }
                },
                data : [
                    {type : 'average', name: '平均值'},
                    { xAxis: 160 }
                ]
            }
        },
        {
            name:'男性',
            type:'scatter',
            data: [  [47, 3553], [50, 1514], [35,3024], [43, 1554], [42, 2524],
 [34, 5220], [10, 3013], [40,4443], [44, 4154], [31, 3271],
 [41, 3621], [44, 5815], [24,1788], [32, 4046], [25, 2355],
 [21, 3335], [18, 2747], [48,1733], [21, 2259], [35, 5634],
 [25, 4164], [18, 1740], [42,4432], [30, 3695], [28, 3393],
 [34, 5919], [45, 3895], [60,2286], [35, 5517], [39, 5003],
 [35, 4047], [19, 2209], [20,2447], [35, 4331], [39, 1072],
 [49, 5482], [36, 3853], [46,4428], [24, 4594], [32, 4059],
 [43, 5261], [34, 5251], [16,1728], [65, 3134], [38, 5531],
 [22, 1383], [47, 1603], [39,2586], [45, 2028], [38, 3043],
 [50, 1527], [25, 1698], [15,2055], [24, 4137], [67, 2406],
 [19, 2151], [26, 1993], [42,3801], [48, 4479], [33, 5343],
 [25, 3416], [40, 4311], [30,1726], [22, 4423], [20, 1818],
 [20, 1488], [43, 1720], [33,5374], [42, 4513], [29, 3834],
 [50, 3950], [40, 5300], [56,1907], [37, 4668], [50, 5759],
 [32, 5066], [32, 4630], [31,4929], [28, 3216], [28, 3400],
 [40, 5552], [34, 3775], [19,1773], [21, 1471], [36, 1175],
 [44, 3058], [14, 1012], [30,2844], [19, 2778], [47, 3931],
 [40, 5070], [45, 4189], [45,5238], [41, 4270], [30, 5997],
 [38, 3450], [27, 1808], [13,3486], [33, 3287], [37, 4558],
 [49, 4433], [19, 1951], [28,3882], [32, 3340], [45, 3018],
 [31, 4586], [27, 2295], [37,3026], [21, 4007], [25, 2757],
 [26, 2143], [46, 1413], [50,5605], [48, 1594], [25, 5705],
 [25, 2953], [36, 3435], [22,1944], [40, 2122], [35, 3905],
 [44, 4716], [34, 5798], [32,1203], [50, 4513], [40, 5777],
 [22, 1653], [26, 4355], [40,5070], [28, 2623], [42, 3374],
 [30, 5140], [35, 4017], [37,4016], [33, 1018], [43, 4663],
 [37, 2278], [16, 2579], [21,2844], [31, 1779], [32, 4720],
 [48, 3299], [29, 4064], [18,1848], [24, 2153], [34, 4675],
 [34, 3106], [31, 2749], [28,1094], [26, 1573], [26, 1236],
 [49, 5052], [33, 3282], [39,5518], [22, 4933], [42, 5096],
 [30, 5149], [41, 3824], [14,3742], [29, 1852], [20, 4653],
 [34, 3757], [15, 2705], [45,3896], [33, 4465], [39, 5279],
 [40, 4908], [27, 2357], [21,5397], [41, 5908], [42, 1010],
 [22, 2740], [24, 1098], [23,2589], [49, 1706], [46, 3838],
 [22, 1998], [32, 1870], [20,5388], [37, 1906], [44, 5547],
 [19, 3778], [30, 2632], [39,5108], [42, 1872], [33, 3350],
 [35, 4500], [49, 5000], [18,2229], [33, 5519], [19, 3693],
 [42, 1741], [48, 5630], [37,3043], [44, 4226], [50, 2919],
 [26, 2168], [49, 3905], [18,1811], [39, 4447], [34, 3744],
 [50, 5342], [47, 4268], [25,3751], [19, 2175], [42, 5822],
 [23, 4090], [41, 5437], [46,2295], [33, 1370], [34, 1854],
 [38, 1045], [27, 2811], [20,3017], [25, 5032], [34, 1480],
 [19, 2582], [29, 4407], [41,1037], [43, 5657], [47, 3165],
 [44, 3784], [45, 2958], [37,1150], [32, 2114], [30, 4033],
 [44, 5754], [19, 2626], [42,3794], [18, 4634], [29, 4804],
 [50, 3811], [28, 1866], [22,5832], [22, 2667], [30, 2678],
 [42, 5564], [49, 2734], [35,3368], [35, 5654], [37, 5679],
 [47, 4373], [48, 1034], [35,4938], [21, 2366], [46, 3021],
 [36, 1589], [24, 2941]     
            ],
            markArea: {
                silent: true,
                itemStyle: {
                    normal: {
                        color: 'transparent',
                        borderWidth: 1,
                        borderType: 'dashed'
                    }
                },
                data: [[{
                    name: '男性分布区间',
                    xAxis: 'min',
                    yAxis: 'min'
                }, {
                    xAxis: 'max',
                    yAxis: 'max'
                }]]
            },
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'solid'
                    }
                },
                data : [
                    {type : 'average', name: '平均值'},
                    { xAxis: 170 }
                ]
            }
        }
    ]
};
        // 使用刚指定的配置项和数据显示图表。
	    consumptionChart.setOption(option);
}
//套餐柱形图
function initPackageChart(elementId,data,color){
	packChart = echarts.init(document.getElementById(elementId));	
	option = {
			title: {  
				x: 'center',  
				text: '套餐情况',
				textStyle:{
					fontSize: '18',
				}
			},  
		    color: color,
		    tooltip : {
		        trigger: 'axis',
		        formatter: '{b}:\n{c}%',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        },
		        textStyle:{
		        	fontSize: '24',
		        }
		    },
		    grid: {
		    	top: '10%',
		        left: '5%',
		        right: '5%',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            data : data[0],
		            axisTick: {
		                alignWithLabel: true
		            }
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLabel: {  
	                  show: true,  
	                  interval: 'auto',  
	                  formatter: '{value}%'  
                	},  
            		show: true,
            		splitLine:{  
	            　　　　show:false  
	            　　},
	             	min:0, 
              		max:35,
              		splitNumber:7
		        }
		    ],
		    series : [
		        {
		            name:'年龄',
		            type:'bar',
		            barWidth: '50%',
		            data:data[1],
		            itemStyle:{
		            	normal:{
		            		label: {  
		                        show: true,  
		                        position: 'top',  
		                        formatter: '{c}%'  
		                    }  
		            	}		            	
		            }
		        }
		    ]
		};
        // 使用刚指定的配置项和数据显示图表。
	    packChart.setOption(option);
}
//刷新套餐
function refreshPackageChart(elementId,data,color){
	if(packChart!=null){
		if(data==null){
			packChart.setOption({
				color:color
			});
		}
		else if(color==null){
			packChart.setOption({
				xAxis: [{
			        data: data[0]
			    }],
			    series: [{
			        data: data[1]
			    }]
			});
		}
		else if(data==null&&color==null){
			return;
		}
		else{
			packChart.setOption({
				color:color,
				xAxis: [{
			        data: data[0]
			    }],
			    series: [{
			        data: data[1]
			    }]
			});
		}

	}
}
//使用流量柱形图
function initFlowChart(elementId,data,color){
	flowChart = echarts.init(document.getElementById(elementId));	
	option = {
			title: {  
				x: 'center',  
				text: '使用流量分层',
				textStyle:{
				fontSize: '18',
				}
			},  
		    color: color,
		    tooltip : {
		        trigger: 'axis',
		        formatter: '{b}:\n{c}%',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        },
		        textStyle:{
					fontSize: '24',
				}
		    },
		    grid: {
		    	top: '10%',
		        left: '5%',
		        right: '5%',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            data : data[0],
		            axisTick: {
		                alignWithLabel: true
		            }
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLabel: {  
	                  show: true,  
	                  interval: '0',  
	                  formatter: '{value}%'  
                	},  
            		show: true,
            		splitLine:{  
	            　　　　show:false  
	            　　},
	            	 min:0, 
              		 max:30,
              		 splitNumber:6
		        }
		    ],
		    series : [
		        {
		            name:'年龄',
		            type:'bar',
		            barWidth: '50%',
		            data:data[1],
		            itemStyle:{
		            	normal:{
		            		label: {  
		                        show: true,  
		                        position: 'top',  
		                        formatter: '{c}%'  
		                    }  
		            	}		            	
		            }
		        }
		    ]
		};
        // 使用刚指定的配置项和数据显示图表。
	    flowChart.setOption(option);
}
//刷新使用流量
function refreshFlowChart(elementId,data,color){
	if(flowChart!=null){
		if(data==null){
			flowChart.setOption({
				color:color
			});
		}
		else if(color==null){
			flowChart.setOption({
				xAxis: [{
			        data: data[0]
			    }],
			    series: [{
			        data: data[1]
			    }]
			});
		}
		else if(data==null&&color==null){
			return;
		}
		else{
			flowChart.setOption({
				color:color,
				xAxis: [{
			        data: data[0]
			    }],
			    series: [{
			        data: data[1]
			    }]
			});
		}

	}
}
//出账收入环形图
function initIncomeChart(elementId,data,color){
	incomeChart = echarts.init(document.getElementById(elementId));	
	option = {
			title: {  
				x: 'center',  
				text: '出账收入',
				textStyle:{
					fontSize: '18',
				}
			},  
		    tooltip: {
		        trigger: 'item',
		        /*formatter: "{a} <br/>{b}: {c} ({d}%)",*/
		        formatter: "({d}%)",
		        textStyle:{
		        	fontSize: '30',
		        }
		    },
		    color:color,
		    legend: {
		        orient: 'vertical',
		        x: 'left',
		        padding:[480,0],
		        textStyle: {
                    fontSize: '18',
                    fontWeight: 'normal'
                },
		        data:['0-50','50-100','100-300','300以上']
		    },
		    series: [
		        {
		            name:'出账收入',
		            type:'pie',
		            radius: ['50%', '70%'],
		            avoidLabelOverlap: true,
		            label: {
		                normal: {
		                    show: true,
		                    textStyle: {
		                        fontSize: '18',
		                        fontWeight: 'normal'
		                   	}
		                    /*position: 'center'*/
		                },
		                emphasis: {
		                    show: true,
		                    textStyle: {
		                        fontSize: '30',
		                        fontWeight: 'bold'
		                    }
		                }
		            },
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:data
		        }
		    ]
		};
        // 使用刚指定的配置项和数据显示图表。
	    incomeChart.setOption(option);
}
//刷新出账收入
function refreshIncomeChart(elementId,data,color){
	if(incomeChart!=null){
		if(data==null){
			incomeChart.setOption({
				color:color
			});
		}
		else if(color==null){
			incomeChart.setOption({
			    series: [{
			        data: data
			    }]
			});
		}
		else if(data==null&&color==null){
			return;
		}
		else{
			incomeChart.setOption({
				color:color,
			    series: [{
			        data: data
			    }]
			});
		}

	}
}
