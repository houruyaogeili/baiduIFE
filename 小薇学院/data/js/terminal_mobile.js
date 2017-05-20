$(function(){
	$("#terminal_sex,#terminal_age,#terminal_area,#terminal_child").attr('disabled','disabled');
	terminal_select();

	function terminal_select(){
		$("#main-item").on('change',function(e){
			e.stopPropagation();
			var terminal_value=$("#main-item").val();
			if(terminal_value=='mobile_brand'){
				$(".mobile_change").fadeOut(2000);
				$(".mobile_brand").fadeIn(2000);
				$("#terminal_sex,#terminal_age,#terminal_area,#terminal_child").attr('disabled','disabled');
			}
			else{
				$(".mobile_change").fadeIn(2000);
				$(".mobile_brand").fadeOut(2000);
				$("#terminal_sex,#terminal_age,#terminal_area,#terminal_child").removeAttr('disabled');
			}
		});
		
	}
	

	

//		终端品牌 机型分布
	mobileBrand();
	function mobileBrand(){
	

			var dom = document.getElementById("mobile_brand");
			var myChart = echarts.init(dom);
			myChart.showLoading();

			var mobile_terminal = 113616229;
			/*$.get('data/terminaldata.js', function(moblies_2016) {*/
			var	moblies_2016 = [{
					"value": [
						1226629000,
						null,
						null
					],
					"name": "苹果",
					"id": "branch-8",
					"discretion": null,
					"children": [

						{
							"value": [
								240087,
								12.27,
								null
							],
							"name": "iphone 6",
							"id": "leaf-000",
							"discretion": "discretionary"
						},

						{
							"value": [
								174241,
								7.32,
								null
							],
							"name": "iphone 6s",
							"id": "leaf-001",
							"discretion": "discretionary"
						}, {
							"value": [
								143225,
								6.52,
								null
							],
							"name": "iphone SE",
							"id": "leaf-001",
							"discretion": "discretionary"
						}, {
							"value": [
								127576,
								5.49,
								null
							],
							"name": "iphone 5s",
							"id": "leaf-001",
							"discretion": "discretionary"
						}, {
							"value": [
								107393,
								3.88,
								null
							],
							"name": "iphone 6s PLUS",
							"id": "leaf-001",
							"discretion": "discretionary"
						}, {
							"value": [
								76005,
								8.9,
								null
							],
							"name": "iphone 6 PLUS",
							"id": "leaf-001",
							"discretion": "discretionary"
						}, {
							"value": [
								42404,
								2.17,
								null
							],
							"name": "iphone 5",
							"id": "leaf-001",
							"discretion": "discretionary"
						}, {
							"value": [
								40308,
								2.06,
								null
							],
							"name": "iphone 4s",
							"id": "leaf-001",
							"discretion": "discretionary"
						}, {
							"value": [
								28948,
								1.48,
								null
							],
							"name": "iphone 4",
							"id": "leaf-002",
							"discretion": "discretionary"
						}
					]
				}, {
					"value": [
						818284000,
						null,
						null
					],
					"name": "小米",
					"id": "branch-34",
					"discretion": null,
					"children": [{
							"value": [
								39026,
								1.99,
								null
							],
							"name": "红米NOTE3",
							"id": "leaf-010",
							"discretion": "discretionary"
						}, {
							"value": [
								33435,
								1.71,
								null
							],
							"name": "小米4",
							"id": "leaf-011",
							"discretion": "discretionary"
						}, {
							"value": [
								30947,
								1.58,
								null
							],
							"name": "小米NOTE",
							"id": "leaf-011",
							"discretion": "discretionary"
						}, {
							"value": [
								27139,
								1.39,
								null
							],
							"name": "小米3",
							"id": "leaf-011",
							"discretion": "discretionary"
						}, {
							"value": [
								21303,
								1.09,
								null
							],
							"name": "红米NOTE",
							"id": "leaf-011",
							"discretion": "discretionary"
						}, {
							"value": [
								19512,
								1,
								null
							],
							"name": "小米4i",
							"id": "leaf-011",
							"discretion": "discretionary"
						}, {
							"value": [
								13142,
								0.67,
								null
							],
							"name": "红米2",
							"id": "leaf-011",
							"discretion": "discretionary"
						}, {
							"value": [
								10862,
								0.55,
								null
							],
							"name": "小米2S",
							"id": "leaf-011",
							"discretion": "discretionary"
						}, {
							"value": [
								9664,
								0.49,
								null
							],
							"name": "红米NOTE2",
							"id": "leaf-011",
							"discretion": "discretionary"
						},

						{
							"value": [
								9018,
								0.46,
								null
							],
							"name": "红米3",
							"id": "leaf-012",
							"discretion": "discretionary"
						}
					]
				}, {
					"value": [
						677483000,
						null,
						null
					],
					"name": "华为",
					"id": "branch-5",
					"discretion": null,
					"children": [{
						"value": [
							31827,
							1.63,
							null
						],
						"name": "荣耀6",
						"id": "leaf-020",
						"discretion": "discretionary"
					}, {
						"value": [
							24400,
							1.25,
							null
						],
						"name": "华为MATE7",
						"id": "leaf-021",
						"discretion": "discretionary"
					}, {
						"value": [
							15511,
							0.79,
							null
						],
						"name": "荣耀畅玩4X",
						"id": "leaf-021",
						"discretion": "discretionary"
					}, {
						"value": [
							13693,
							0.7,
							null
						],
						"name": "荣耀6PLUS",
						"id": "leaf-021",
						"discretion": "discretionary"
					}, {
						"value": [
							12210,
							0.62,
							null
						],
						"name": "华为P8",
						"id": "leaf-021",
						"discretion": "discretionary"
					}, {
						"value": [
							11291,
							0.58,
							null
						],
						"name": "荣耀畅玩4C",
						"id": "leaf-021",
						"discretion": "discretionary"
					}, {
						"value": [
							9129,
							0.47,
							null
						],
						"name": "荣耀4A",
						"id": "leaf-021",
						"discretion": "discretionary"
					}, {
						"value": [
							4795,
							0.35,
							null
						],
						"name": "荣耀7",
						"id": "leaf-021",
						"discretion": "discretionary"
					}, {
						"value": [
							6048,
							0.31,
							null
						],
						"name": "荣耀畅玩5X",
						"id": "leaf-022",
						"discretion": "discretionary"
					}]
				}, {
					"value": [
						612004000,
						null,
						null
					],
					"name": "魅族",
					"id": "branch-15",
					"discretion": null,
					"children": [{
							"value": [
								30055,
								1.54,
								null
							],
							"name": "魅族NOTE2",
							"id": "leaf-030",
							"discretion": "discretionary"
						}, {
							"value": [
								24969,
								1.28,
								null
							],
							"name": "魅族NOTE3",
							"id": "leaf-030",
							"discretion": "discretionary"
						}, {
							"value": [
								16102,
								0.82,
								null
							],
							"name": "魅族MX5",
							"id": "leaf-030",
							"discretion": "discretionary"
						}, {
							"value": [
								12617,
								0.64,
								null
							],
							"name": "魅族NOTE",
							"id": "leaf-030",
							"discretion": "discretionary"
						}, {
							"value": [
								9102,
								0.47,
								null
							],
							"name": "魅族MX4",
							"id": "leaf-030",
							"discretion": "discretionary"
						}, {
							"value": [
								8990,
								0.46,
								null
							],
							"name": "魅族MX5 Pro",
							"id": "leaf-030",
							"discretion": "discretionary"
						}, {
							"value": [
								6767,
								0.35,
								null
							],
							"name": "魅族MX4 Pro",
							"id": "leaf-030",
							"discretion": "discretionary"
						}, {
							"value": [
								5531,
								0.28,
								null
							],
							"name": "魅族MX6",
							"id": "leaf-030",
							"discretion": "discretionary"
						}, {
							"value": [
								4586,
								0.23,
								null
							],
							"name": "魅蓝2",
							"id": "leaf-031",
							"discretion": "discretionary"
						}, {
							"value": [
								4315,
								0.22,
								null
							],
							"name": "魅蓝metal",
							"id": "leaf-032",
							"discretion": "discretionary"
						},

					]
				}, {
					"value": [
						148349000,
						null,
						null
					],
					"name": "三星",
					"id": "branch-3",
					"discretion": null,
					"children": [{
						"value": [
							24881,
							1.27,
							null
						],
						"name": "三星S7",
						"id": "leaf-040",
						"discretion": "discretionary"
					}, {
						"value": [
							20818,
							1.06,
							null
						],
						"name": "三星NOTE3",
						"id": "leaf-041",
						"discretion": "discretionary"
					}, {
						"value": [
							18183,
							0.93,
							null
						],
						"name": "三星S6 Edge",
						"id": "leaf-041",
						"discretion": "discretionary"
					}, {
						"value": [
							15808,
							0.81,
							null
						],
						"name": "三星S5",
						"id": "leaf-041",
						"discretion": "discretionary"
					}, {
						"value": [
							12679,
							0.65,
							null
						],
						"name": "三星A7",
						"id": "leaf-041",
						"discretion": "discretionary"
					}, {
						"value": [
							10519,
							0.54,
							null
						],
						"name": "三星S6 Edge+",
						"id": "leaf-041",
						"discretion": "discretionary"
					}, {
						"value": [
							6498,
							0.33,
							null
						],
						"name": "三星NOTE4",
						"id": "leaf-041",
						"discretion": "discretionary"
					}, {
						"value": [
							4248,
							0.22,
							null
						],
						"name": "三星S6",
						"id": "leaf-041",
						"discretion": "discretionary"
					}, {
						"value": [
							4076,
							0.21,
							null
						],
						"name": "三星S4",
						"id": "leaf-041",
						"discretion": "discretionary"
					}, {
						"value": [
							3941,
							0.2,
							null
						],
						"name": "三星A8",
						"id": "leaf-042",
						"discretion": "discretionary"
					}]
				}, {
					"value": [
						132359000,
						null,
						null
					],
					"name": "VIVO",
					"id": "branch-17",
					"discretion": null,
					"children": [{
						"value": [
							18940,
							0.97,
							null
						],
						"name": "Vivo X5 Pro",
						"id": "leaf-060",
						"discretion": "discretionary"
					}, {
						"value": [
							16635,
							0.85,
							null
						],
						"name": "Vivo X6",
						"id": "leaf-061",
						"discretion": "discretionary"
					}, {
						"value": [
							12007,
							0.61,
							null
						],
						"name": "Vivo X6 Plus",
						"id": "leaf-061",
						"discretion": "discretionary"
					}, {
						"value": [
							10761,
							0.55,
							null
						],
						"name": "Vivo Y51A",
						"id": "leaf-061",
						"discretion": "discretionary"
					}, {
						"value": [
							7996,
							0.41,
							null
						],
						"name": "Vivo Y35A",
						"id": "leaf-061",
						"discretion": "discretionary"
					}, {
						"value": [
							6077,
							0.31,
							null
						],
						"name": "Vivo XPLAY5",
						"id": "leaf-061",
						"discretion": "discretionary"
					}, {
						"value": [
							3189,
							0.16,
							null
						],
						"name": "Vivo X3S",
						"id": "leaf-061",
						"discretion": "discretionary"
					}, {
						"value": [
							2513,
							0.13,
							null
						],
						"name": "Vivo X3F",
						"id": "leaf-061",
						"discretion": "discretionary"
					}, {
						"value": [
							2476,
							0.12,
							null
						],
						"name": "Vivo Y613",
						"id": "leaf-061",
						"discretion": "discretionary"
					}, {
						"value": [
							2248,
							0.11,
							null
						],
						"name": "Vivo Y627",
						"id": "leaf-062",
						"discretion": "discretionary"
					}, ]
				}, {
					"value": [
						129458000,
						null,
						null
					],
					"name": "OPPO",
					"id": "branch-16",
					"discretion": null,
					"children": [{
							"value": [
								17896,
								0.91,
								null
							],
							"name": "OPPO R7s",
							"id": "leaf-070",
							"discretion": "discretionary"
						}, {
							"value": [
								14173,
								0.72,
								null
							],
							"name": "OPPO R9",
							"id": "leaf-070",
							"discretion": "discretionary"
						}, {
							"value": [
								11301,
								0.58,
								null
							],
							"name": "OPPO R7 PLUS",
							"id": "leaf-070",
							"discretion": "discretionary"
						}, {
							"value": [
								7121,
								0.36,
								null
							],
							"name": "OPPO R1c",
							"id": "leaf-070",
							"discretion": "discretionary"
						}, {
							"value": [
								3076,
								0.16,
								null
							],
							"name": "OPPO R9 Plus",
							"id": "leaf-070",
							"discretion": "discretionary"
						}, {
							"value": [
								2841,
								0.15,
								null
							],
							"name": "OPPO R1s",
							"id": "leaf-070",
							"discretion": "discretionary"
						}, {
							"value": [
								1111,
								0.06,
								null
							],
							"name": "OPPO A31",
							"id": "leaf-070",
							"discretion": "discretionary"
						}, {
							"value": [
								1004,
								0.05,
								null
							],
							"name": "OPPO find7",
							"id": "leaf-070",
							"discretion": "discretionary"
						}, {
							"value": [
								963,
								0.05,
								null
							],
							"name": "OPPO A30",
							"id": "leaf-070",
							"discretion": "discretionary"
						}, {
							"value": [
								923,
								0.05,
								null
							],
							"name": "OPPO R830",
							"id": "leaf-071",
							"discretion": "discretionary"
						},

					]
				}, {
					"value": [
						93790000,
						null,
						null
					],
					"name": "乐视",
					"id": "branch-6",
					"discretion": null,
					"children": [{
							"value": [
								22066,
								1.13,
								null
							],
							"name": "乐1s",
							"id": "leaf-080",
							"discretion": "discretionary"
						}, {
							"value": [
								12522,
								0.64,
								null
							],
							"name": "乐2",
							"id": "leaf-080",
							"discretion": "discretionary"
						}, {
							"value": [
								6349,
								0.32,
								null
							],
							"name": "乐1",
							"id": "leaf-080",
							"discretion": "discretionary"
						}, {
							"value": [
								6161,
								0.31,
								null
							],
							"name": "乐1 Pro",
							"id": "leaf-080",
							"discretion": "discretionary"
						}, {
							"value": [
								1988,
								0.1,
								null
							],
							"name": "乐MAX",
							"id": "leaf-080",
							"discretion": "discretionary"
						}, {
							"value": [
								853,
								0.04,
								null
							],
							"name": "乐MAX2",
							"id": "leaf-080",
							"discretion": "discretionary"
						}, {
							"value": [
								730,
								0.04,
								null
							],
							"name": "乐MAX Pro",
							"id": "leaf-080",
							"discretion": "discretionary"
						},

					]
				}, {
					"value": [
						83502000,
						null,
						null
					],
					"name": "酷派",
					"id": "branch-28",
					"discretion": null,
					"children": [{
						"value": [
							5449,
							0.28,
							null
						],
						"name": "大神F2",
						"id": "leaf-090",
						"discretion": "discretionary"
					}, {
						"value": [
							1490,
							0.08,
							null
						],
						"name": "奇酷青春版",
						"id": "leaf-090",
						"discretion": "discretionary"
					}, {
						"value": [
							1467,
							0.07,
							null
						],
						"name": "风尚",
						"id": "leaf-090",
						"discretion": "discretionary"
					}, {
						"value": [
							1416,
							0.07,
							null
						],
						"name": "大神F2 PLUS",
						"id": "leaf-090",
						"discretion": "discretionary"
					}, {
						"value": [
							842,
							0.04,
							null
						],
						"name": "风尚Pro",
						"id": "leaf-090",
						"discretion": "discretionary"
					}, {
						"value": [
							621,
							0.03,
							null
						],
						"name": "酷派K1",
						"id": "leaf-090",
						"discretion": "discretionary"
					}, {
						"value": [
							451,
							0.02,
							null
						],
						"name": "大神F1 PLUS",
						"id": "leaf-090",
						"discretion": "discretionary"
					}, {
						"value": [
							405,
							0.02,
							null
						],
						"name": "风尚MAX",
						"id": "leaf-090",
						"discretion": "discretionary"
					}, {
						"value": [
							398,
							0.02,
							null
						],
						"name": "风尚AIR",
						"id": "leaf-090",
						"discretion": "discretionary"
					}, {
						"value": [
							3448,
							0.18,
							null
						],
						"name": "大神NOTE3",
						"id": "leaf-091",
						"discretion": "discretionary"
					}]
				}, {
					"value": [
						66476000,
						null,
						null
					],
					"name": "金立",
					"id": "branch-29",
					"discretion": null,
					"children": [{
							"value": [
								3420,
								0.17,
								null
							],
							"name": "金立M6",
							"id": "leaf-100",
							"discretion": "discretionary"
						}, {
							"value": [
								2728,
								0.14,
								null
							],
							"name": "金立S7",
							"id": "leaf-100",
							"discretion": "discretionary"
						}, {
							"value": [
								2114,
								0.11,
								null
							],
							"name": "金立金刚",
							"id": "leaf-100",
							"discretion": "discretionary"
						}, {
							"value": [
								1488,
								0.08,
								null
							],
							"name": "金立M5",
							"id": "leaf-100",
							"discretion": "discretionary"
						}, {
							"value": [
								1205,
								0.06,
								null
							],
							"name": "金立F103",
							"id": "leaf-100",
							"discretion": "discretionary"
						}, {
							"value": [
								849,
								0.14,
								null
							],
							"name": "金立M5 plus",
							"id": "leaf-100",
							"discretion": "discretionary"
						}, {
							"value": [
								591,
								0.03,
								null
							],
							"name": "金立F103S",
							"id": "leaf-100",
							"discretion": "discretionary"
						}, {
							"value": [
								549,
								0.03,
								null
							],
							"name": "金立S5",
							"id": "leaf-100",
							"discretion": "discretionary"
						}, {
							"value": [
								477,
								0.02,
								null
							],
							"name": "金立S7 MINI",
							"id": "leaf-100",
							"discretion": "discretionary"
						}, {
							"value": [
								384,
								0.02,
								null
							],
							"name": "金立天鉴",
							"id": "leaf-100",
							"discretion": "discretionary"
						},

					]
				}, ];
				myChart.hideLoading();

				var formatUtil;

				function buildData(mode, originList) {
					var out = [];

					for(var i = 0; i < originList.length; i++) {
						var node = originList[i];
						var newNode = out[i] = cloneNodeInfo(node);
						var value = newNode.value;

						if(!newNode) {
							continue;
						}

						// Calculate amount per household.
						value[3] = value[0] / mobile_terminal;

						// if mode === 0 and mode === 2 do nothing
						if(mode === 1) {
							// Set 'Change from 2010' to value[0].
							var tmp = value[1];
							value[1] = value[0];
							value[0] = tmp;
						}

						if(node.children) {
							newNode.children = buildData(mode, node.children);
						}
					}

					return out;
				}

				function cloneNodeInfo(node) {
					if(!node) {
						return;
					}

					var newNode = {};
					newNode.name = node.name;
					newNode.id = node.id;
					newNode.discretion = node.discretion;
					newNode.value = (node.value || []).slice();
					return newNode;
				}

				function getLevelOption(mode) {
					return [{
						color: mode === 2 ?
							[
								'#c23531', '#314656', '#61a0a8', '#dd8668',
								'#91c7ae', '#6e7074', '#61a0a8', '#bda29a',
								'#44525d', '#c4ccd3'
							] :
							null,
						colorMappingBy: 'id',
						itemStyle: {
							normal: {
								borderWidth: 3,
								gapWidth: 3
							}
						}
					}, {
						colorAlpha: mode === 2 ?
							[0.5, 1] : null,
						itemStyle: {
							normal: {
								gapWidth: 1
							}
						}
					}];
				}

				function isValidNumber(num) {
					return num !== null && isFinite(num);
				}

				function getTooltipFormatter(mode) {
					var amountIndex = mode === 1 ? 1 : 0;
					var amountIndex2011 = mode === 1 ? 0 : 1;

					return function(info) {
						var value = info.value;

						var amount = value[amountIndex];
						amount = isValidNumber(amount) ?
							formatUtil.addCommas(amount * 1) + '人' :
							'-';

						var amount2011 = value[amountIndex2011];
						amount2011 = isValidNumber(amount2011) ?
							formatUtil.addCommas(amount2011 * 1) + '%' :
							'-';
						/*
			            var perHousehold = value[3];
			            perHousehold = isValidNumber(perHousehold)
			                ? formatUtil.addCommas((+perHousehold.toFixed(4)) * 1000) + '$'
			                : '-';
			
			            var change = value[2];
			            change = isValidNumber(change)
			                ? change.toFixed(2) + '%'
			                : '-';
			            */

						return [
							'<div class="tooltip-title">' + formatUtil.encodeHTML(info.name) +

							'</div>',
							'用户数：' + amount + '<br>',
							//   '年龄段: &nbsp;&nbsp;' + perHousehold + '<br>',
							'市场占比：' + amount2011 + '<br>',
							//  'Change From 2011: &nbsp;&nbsp;' + change

						].join('');
					};
				}

				function createSeriesCommon() {
					return {
						type: 'treemap',
						label: {
							show: true,
							formatter: "{b}",
							normal: {
								textStyle: {
									ellipsis: true,
									fontSize: '20',
			                        fontWeight: 'bold'
									
								}
							},
							emphasis: {
			                    show: true,
			                    textStyle: {
			                        fontSize: '20',
			                        fontWeight: 'bold'
			                    }
			               },
						},
						itemStyle: {
							normal: {
								borderColor: 'black'
							}
						},
						levels: getLevelOption(0)
					};
				}

				formatUtil = echarts.format;
				var modes = [''];

				myChart.setOption(option = {
					title: {
						show: true,
						text: '终端品牌',
						textStyle: {
							fontSize: 20,
//							fontWeight: 'normal',
						},
						left: 680,
						subtext: '',
						sublink: ''
					},
					legend: {
						data: modes,
						selectedMode: 'single',
						top: 50,
						itemGap: 5
					},
					grid: {
						right: '5%'
					},

					tooltip: {
						formatter: getTooltipFormatter(0),
						textStyle: {
							fontSize: '24',
						}
					},
					toolbox: { //工具栏设置
				        show: true,
				        top: 20,
				        right: 20,
				        feature: {
				            dataZoom: {
				                yAxisIndex: 'none'
				            },
//				            dataView: {
//				            	buttonColor: '#FF3030'
//				            },
//				            magicType: {type: ['line', 'bar']},
				            restore: {},
				            saveAsImage: {}
				       },
				       iconStyle: { //icon图形设置
				       	normal: {
				       		borderColor: '#c23531',//icon图形描边颜色
				       	},
				       
				       }
				    },

					series: modes.map(function(mode, idx) {
						var seriesOpt = createSeriesCommon();
						//seriesOpt.name = mode;
						//seriesOpt.top = 80;
						// seriesOpt.visualDimension = idx === 2 ? 2 : null;
						seriesOpt.data = buildData(idx, moblies_2016);
						seriesOpt.levels = getLevelOption(idx);
						return seriesOpt;
					})
				});
		}

})
