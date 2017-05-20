/**
 * 图表实现,使用echarts3
 */

var genderChart = null;
var ageChart = null;
var childChart = null;
var regionChart = null;
function initGenderChart(elementId,data,color){
	genderChart = echarts.init(document.getElementById(elementId));	
	option = {
			title: {
				show: true,
				text: '换机频率',
//				top: 10,
				textStyle: {
					fontSize: 20,
//					fontWeight: 'normal',
				},
				left: 330,
				subtext: '',
				sublink: ''
			},
		    tooltip: {
		        trigger: 'item',
//		        formatter: "{a} <br/>{b}: {c} ({d}%)",
		        formatter: "({d}%)",
		        textStyle:{
		        	fontSize: '24',
		        }
		    },
		    /*grid: {
		    	height: 700,
		    	top: 0,
		    	left: 0,
		    	right: 0,
		    	bottom: 0,
		    },*/
		    color:color,
		    legend: {
		        orient: 'vertical',
		        x: 'left',
		        padding:[400,0,10,10],
		        textStyle: {
                    fontSize: '18',
                    fontWeight: 'normal'
                },
		        data:data
		    },
		    toolbox: { //工具栏设置
		        show: true,
		        top: 20,
		        right: 50,
		        feature: {
		            dataZoom: {
		                yAxisIndex: 'none'
		            },
//		            dataView: {
//		            	readOnly:false,
//		            },
//		            magicType: {type: ['line', 'bar']},
		            restore: {},
		            saveAsImage: {}
		       },
		       iconStyle: { //icon图形设置
			       	normal: {
			       		borderColor: '#c23531',//icon图形描边颜色
			       	},
		       
		       }
		    },
		    series: [
		        {
		            name:'换机频率',
		            type:'pie',
		            radius: ['50%', '70%'],
		            avoidLabelOverlap: true,
		            label: {
		                normal: {
		                    show: true,
		                    textStyle: {
		                        fontSize: '18',
		                        fontWeight: 'normal'
		                   	},
//		                    position: 'center'
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
		    color: color,
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
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
		            type : 'value'
		        }
		    ],
		    series : [
		        {
		            name:'年龄',
		            type:'bar',
		            barWidth: '60%',
		            data:data[1]
		        }
		    ]
		};
        // 使用刚指定的配置项和数据显示图表。
	    ageChart.setOption(option);
}
function refreshAgeChart(elementId,data,color){
	if(ageChart!=null){
		if(data==null){
			ageChart.setOption({
				color:color
			});
		}
		else if(color==null){
			ageChart.setOption({
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
			ageChart.setOption({
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

function initChildChart(elementId,data,color){
	childChart = echarts.init(document.getElementById(elementId));	
	option = {
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    color:color,
		    legend: {
		        orient: 'vertical',
		        x: 'left',
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
		                    show: false,
		                    position: 'center'
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
		        text: '用户数量',
		        left: 'center'
		    },
		    tooltip: {
		        trigger: 'item'
		    },
		    visualMap: {
		        min: 0,
		        max: 400000,
		        left: 'right',
		        top: 'bottom',
		        text: ['高','低'],           // 文本，默认为数值文本
		        calculable: true,
	            inRange: {
	                color: color
	            }
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
		                    show: true
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
                   + params.value[0] + ' '
                   + params.value[1] + ' ';
            }
            else {
                return params.seriesName + ' :<br/>'
                   + params.name + ' : '
                   + params.value + '';
            }
        },
        axisPointer:{
            show: true,
            type : 'cross',
            lineStyle: {
                type : 'dashed',
                width : 1
            }
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
        left: 'center'
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
                formatter: '{value} '
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
            data: [ [47, 1.267], [27, 0.505], [44,0.661], [27, 1.420], [22, 1.614],
 [22, 1.662], [52, 0.612], [41,1.585], [34, 1.710], [29, 1.249],
 [24, 2.260], [35, 0.515], [53,0.680], [34, 0.554], [25, 0.948],
 [25, 1.025], [48, 1.567], [43,1.856], [21, 0.473], [37, 1.230],
 [25, 0.970], [42, 1.407], [37,1.278], [26, 2.445], [28, 0.780],
 [28, 4.114], [46, 1.428], [28,2.505], [45, 0.881], [20, 1.095],
 [24, 1.427], [59, 0.779], [38,2.145], [37, 1.230], [34, 2.909],
 [36, 1.644], [36, 1.366], [27,0.871], [22, 1.068], [28, 2.407],
 [41, 2.284], [62, 1.318], [57,0.988], [30, 1.802], [47, 1.235],
 [26, 1.759], [48, 1.253], [26,1.857], [21, 1.009], [44, 3.042],
 [45, 0.782], [47, 2.060], [23,2.505], [23, 1.936], [34, 0.431],
 [26, 0.854], [29, 0.862], [48,0.649], [26, 1.619], [23, 0.535],
 [22, 0.779], [39, 1.168], [25,3.258], [41, 2.324], [19, 1.431],
 [44, 0.545], [20, 1.673], [49,1.973], [53, 0.939], [24, 0.853],
 [37, 0.817], [40, 1.113], [49,1.209], [38, 0.477], [22, 1.802],
 [21, 1.808], [22, 1.512], [27,1.012], [40, 1.783], [24, 1.948],
 [68, 0.934], [45, 1.090], [54,2.082], [39, 1.323], [30, 1.473],
 [20, 0.370], [34, 2.083], [20,1.271], [43, 2.348], [39, 1.432],
 [20, 2.806], [29, 0.527], [24,0.666], [29, 0.583], [24, 0.9643],
 [45, 0.479], [27, 1.543], [30,0.327], [24, 2.154], [24, 3.394],
 [34, 2.299], [39, 0.481], [26,0.700], [36, 2.022], [22, 0.812],
 [43, 2.877], [33, 1.751], [15,2.920], [23, 0.562], [44, 0.334],
 [31, 0.575], [26, 1.307], [46,0.933], [25, 1.308], [37, 1.547],
 [21, 1.808], [44, 3.189], [50,2.060], [25, 0.619], [20, 1.399],
 [36, 2.325], [25, 0.946], [26,2.439], [47, 2.060], [23, 1.281],
 [74, 0.696], [30, 0.224], [23,1.490], [33, 1.625], [21, 1.413],
 [23, 1.946], [33, 0.465], [39,0.849], [25, 0.391], [35, 1.337],
 [32, 1.212], [39, 1.323], [46,1.145], [45, 0.581], [32, 4.297],
 [23, 0.635], [25, 0.759], [49,0.890], [24, 1.405], [33, 2.754],
 [45, 2.739], [26, 0.646], [23,3.238], [24, 2.415], [42, 2.067],
 [23, 1.779], [21, 1.661], [22,0.927], [54, 0.948], [19, 1.852],
 [48, 1.604], [47, 1.587], [44,2.084], [27, 1.363], [72, 0.859],
 [36, 0.543], [21, 2.544], [21,1.871], [44, 1.663], [24, 1.270],
 [49, 1.304], [41, 1.513], [52,2.943], [21, 1.314], [37, 1.547],
 [32, 0.866], [26, 0.982], [51,1.388], [42, 3.307], [45, 1.594],
 [38, 1.492], [48, 0.648], [50,0.669], [29, 1.624], [52, 3.336],
 [25, 1.380], [22, 1.116], [22,1.909], [23, 2.868], [43, 0.609],
 [22, 0.319], [31, 0.788], [29,1.052], [28, 1.552], [47, 3.726],
 [31, 1.030], [26, 1.292], [26,2.845], [42, 3.427], [29, 1.025],
 [29, 1.499], [44, 0.503], [35,1.597], [40, 3.833], [26, 0.845],
 [45, 0.634], [24, 0.611], [62,0.378], [48, 1.829], [26, 1.653],
 [34, 0.433], [40, 1.919], [28,2.799], [31, 0.842], [48, 1.807],
 [27, 2.955], [26, 0.425], [66,0.813], [36, 1.693], [20, 1.519],
 [47, 0.657], [31, 3.015], [24,2.170], [22, 1.221], [37, 1.500],
 [27, 2.573], [37, 0.827], [30,1.397], [20, 2.250], [21, 0.416],
 [44, 0.740], [25, 1.902], [34,1.498], [43, 1.258], [33, 0.998],
 [51, 0.726], [22, 1.263], [38,1.009], [20, 1.621], [22, 0.822],
 [36, 0.640], [34, 3.037], [49,0.751], [26, 1.673], [26, 1.635],
 [34, 1.271], [38, 0.931], [31,1.733], [52, 0.505], [39, 0.724],
 [26, 1.789], [25, 1.872]
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
            data: [  [47, 0.553], [50, 1.514], [35,3.024], [43, 1.554], [42, 0.524],
 [44, 0.699], [33, 0.950], [39,1.895], [33, 1.647], [40, 1.213],
 [41, 1.465], [41, 3.755], [44,1.571], [41, 0.792], [34, 0.941],
 [32, 0.669], [36, 1.715], [46,0.819], [33, 0.595], [33, 0.700],
 [32, 2.955], [38, 1.031], [32,2.179], [43, 0.551], [35, 3.157],
 [49, 1.100], [38, 3.012], [41,0.792], [45, 3.923], [37, 0.699],
 [45, 1.620], [38, 2.369], [42,0.802], [44, 0.571], [46, 0.815],
 [43, 3.349], [35, 1.446], [34,1.419], [31, 0.784], [30, 0.775],
 [36, 1.006], [36, 1.523], [44,0.468], [36, 0.809], [49, 1.100],
 [34, 1.028], [30, 2.380], [30,0.953], [50, 0.730], [33, 1.786],
 [45, 0.874], [49, 1.200], [35,1.124], [31, 1.399], [45, 0.910],
 [31, 1.332], [32, 0.593], [39,0.711], [39, 0.724], [50, 0.627],
 [48, 1.987], [31, 4.045], [47,1.706], [41, 0.920], [33, 1.139],
 [38, 1.571], [34, 0.934], [50,0.363], [31, 2.681], [32, 2.439],
 [30, 1.605], [44, 0.701], [37,1.737], [32, 2.091], [34, 1.811],
 [41, 2.226], [36, 1.564], [47,1.519], [46, 4.127], [44, 1.291],
 [31, 0.835], [35, 1.604], [43,1.118], [34, 2.312], [31, 1.113],
 [45, 2.511], [42, 0.546], [41,0.474], [33, 1.060], [44, 0.875],
 [35, 1.632], [31, 0.999], [39,0.468], [30, 1.431], [42, 0.937],
 [43, 1.953], [35, 1.202], [38,1.031], [38, 1.135], [47, 0.350],
 [31, 3.697], [47, 1.477], [30,0.455], [30, 1.461], [34, 1.368],
 [35, 1.118], [46, 2.214], [38,1.176], [34, 0.822], [41, 1.313],
 [37, 0.690], [43, 0.565], [47,0.760], [49, 1.100], [50, 0.364],
 [47, 1.012], [42, 1.124], [37,0.351], [40, 3.189], [35, 1.780],
 [39, 1.155], [30, 1.096], [36,0.260], [45, 3.923], [39, 0.888],
 [30, 1.446], [31, 1.520], [30,0.720], [33, 0.624], [42, 1.046],
 [33, 1.549], [42, 0.976], [33,1.065], [45, 0.610], [35, 0.429],
 [35, 0.815], [47, 1.207], [32,1.172], [44, 1.662], [31, 1.569],
 [31, 1.265], [30, 1.657], [40,1.237], [39, 1.633], [38, 4.354],
 [47, 1.790], [32, 2.247], [41,1.441], [35, 1.752], [42, 0.433],
 [45, 1.711], [44, 1.539], [43,1.757], [34, 0.871], [30, 0.394],
 [35, 3.235], [33, 1.115], [45,0.350], [41, 0.527], [42, 0.902],
 [33, 1.559], [48, 1.625], [38,1.065], [30, 1.535], [36, 0.757],
 [46, 0.569], [46, 0.768], [39,1.695], [44, 0.801], [30, 0.499],
 [34, 1.671], [33, 1.317], [49,0.356], [36, 1.395], [40, 1.737],
 [35, 0.724], [44, 1.503], [38,1.252], [37, 2.346], [30, 1.446],
 [34, 3.118], [33, 1.451], [35,1.503], [43, 0.743], [41, 1.067],
 [47, 0.811], [35, 3.295], [49,1.218], [49, 0.603], [34, 1.530],
 [42, 0.689], [35, 0.791], [37,3.472], [44, 0.569], [33, 0.454],
 [35, 0.622], [41, 0.636], [32,3.193], [50, 0.903], [43, 1.069],
 [30, 1.402], [31, 0.867], [30,1.432], [38, 1.758], [33, 0.447],
 [36, 1.207], [45, 0.662], [34,3.118], [48, 1.866], [50, 1.221],
 [47, 1.477], [40, 2.428], [30,0.925], [47, 0.498], [31, 1.159],
 [36, 1.494], [41, 1.433], [40,0.528], [41, 1.338], [48, 0.562],
 [34, 1.639], [32, 0.521], [30,2.182], [40, 3.691], [36, 0.539],
 [34, 0.883], [49, 2.032], [30,1.805], [37, 0.759], [46, 1.583],
 [43, 1.553], [39, 2.001], [46,0.817], [50, 1.654], [36, 3.364],
 [39, 0.538], [35, 1.723], [43,2.069], [39, 0.869], [38, 3.562],
 [41, 1.950], [31, 0.627], [33,0.741], [31, 1.933], [44, 1.217],
 [44, 1.291], [40, 1.405]
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