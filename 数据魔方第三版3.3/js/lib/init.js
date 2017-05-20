/**
 * 该函数用于图表初始化
 * 参数说明 
 * type为图表类型,elementId为放置容器id,data为展示数据,color为数据区域颜色
 * type:gender:性别环形图,age:年龄柱状图,child：子嗣环形图,region：区域地图
 * elementId:图表放置容器的id,如若需放进id为test的div,则传入test
 * data: 性别环形图数据格式：var data = [ 
 *          	                  {value:335, name:'男'},
 *         	                      {value:450, name:'女'}
 *         	               ];
 *       年龄柱状图数据格式：var data = [["0-10","10-20","20-30","30-40"...],[100,200,300,400...]];
 *                                     前半部分为下标（x轴）                 后半部分为数值（y轴）
 *       子嗣环形图数据格式：var data = [ 
 *          	                  {value:335, name:'有'},
 *         	                      {value:450, name:'无'}
 *         	               ];  
 *       区域地图数据格式：var data = [ 
 * 	                              {name: '北京',value: 233 },
 *	                              {name: '天津',value: 233 },
 *	                              {name: '上海',value: 666 },
 *	                              {name: '重庆',value: 666 },
 *
 *         	               ];                                   
 * color: 性别环形图颜色格式：var color = ['#00A2E8','#22B14C'];
 *        年龄柱状图颜色格式：var color = ['#00A2E8'];
 *        子嗣环形图颜色格式：var color = ['#00A2E8','#22B14C'];
 *        区域地图颜色格式：var color = ['#00A2E8','#000000'];
 */
function initCharts(type,elementId,data,color){
    if(type=="gender"){  //性别环形图
    	initGenderChart(elementId,data,color);
    }
    if(type=="age"){  //年龄柱状图
    	initAgeChart(elementId,data,color);
    }
    if(type=="child"){  //子嗣环形图
    	initChildChart(elementId,data,color);
    }
    if(type=="region"){  //区域地图
    	initRegionChart(elementId,data,color);
    }
    if(type=="consumption"){  //散点图
        initConsumptionChart(elementId);
    }
    if(type=="package"){  //套餐柱形图
        initPackageChart(elementId,data,color);
    }
    if(type=="flow"){  //套餐柱形图
        initFlowChart(elementId,data,color);
    } 
    if(type=="income"){  //出账收入环形图
        initIncomeChart(elementId,data,color);
    }      
     
}

