/**
 * Created by admin on 2016/10/19.
 */
setInterval(function(){
    var a = 1;
    var aa = parseInt(a);
    var date = new Date();
    var year=date.getFullYear();
    var month=date.getMonth()+1;
    var dangr=date.getDate();
    var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();//Сʱ
    var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();//��
    var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();//��
    var time =year+"-"+month+"-"+dangr+" "+ hours + ":" + minute + ":" + second;
    $(".zx_sj").html(time);


    var qb=document.getElementsByClassName("qb");
    for(i=0;i<qb.length;i++){
        var yuansi= qb[i].innerHTML;
        qb[i].innerHTML=parseInt(yuansi) + parseInt(Math.random()*20);
    }
    //console.log();
},1000);

(function(){
    //���ݵ���
    var content = document.getElementsByClassName("q1");
    function curDateTime() {

        //ǰ�Ÿ�����ʱ��
        var a = 1;
        var aa = parseInt(a);
        var date = new Date();
        var year=date.getFullYear();
        var month=date.getMonth()+1;
        var dangr=date.getDate();
        var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();//Сʱ
        var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();//��
        var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();//��
        var time =year+"-"+month+"-"+dangr+" "+ hours + ":" + minute + ":" + second;
        var hs_time =year+"-"+month+"-"+dangr;

        for (j = 0; j < content.length; j++) {
            var items = content[j].getElementsByTagName("ul");
            for (i = 0; i < items.length; i++) {


                var itemss = items[i].getElementsByTagName("li");
                var it_html = itemss[1].innerHTML;
                var it_html1 = itemss[2].innerHTML;



                var p=-1;
                var zj=itemss[2].getElementsByTagName("span");
                for(p=0;p<zj.length;p++){
                    zj[p].innerHTML;
                    if(zj[p].innerHTML&&it_html=="0"){

                    }else{

                        zj[p].innerHTML=parseInt(zj[p].innerHTML) + parseInt(Math.random()*9);
                    }
                    //console.log(zj)
                }



                var  sj_aa=Math.random()*2.5;
                if (it_html == "0") {
                    //alert("asd");
                } else {
                    itemss[1].innerHTML = parseInt(it_html) + parseInt(sj_aa);
                }

                //console.log(itemss[1].innerHTML)
                //var it_shu= parseInt(it_html);
                //it_html=it_shu+suiji;
                //console.log(it_html)
            }

        }

    }
    setInterval(curDateTime, 1000);

})();


    function nTabs(thisObj, Num) {
        if (thisObj.className == "active")return;
        var tabObj = thisObj.parentNode.id;
        var tabList = document.getElementById(tabObj).getElementsByTagName("li");
        for (i = 0; i < tabList.length; i++) {
            if (i == Num) {
                thisObj.className = "active";
                document.getElementById(tabObj + "_Content" + i).style.display = "block";
            } else {
                tabList[i].className = "normal";
                document.getElementById(tabObj + "_Content" + i).style.display = "none";
            }
        }
    }

//��ǩҳ
//���ĸ���ǩҳ

//(function(){
//    function nTabs(thisObj, Num) {
//        if (thisObj.className == "active")return;
//        var tabObj = thisObj.parentNode.id;
//        var tabList = document.getElementById(tabObj).getElementsByTagName("li");
//        for (i = 0; i < tabList.length; i++) {
//            if (i == Num) {
//                thisObj.className = "active";
//                document.getElementById(tabObj + "_houE" + i).style.display = "block";
//            } else {
//                tabList[i].className = "normal";
//                document.getElementById(tabObj + "_houE" + i).style.display = "none";
//            }
//        }
//    }
//})()

(function () {
    var last_idx = $("#02 .a1").index($("#02 .a1:last"));
//        console.log(last_idx);
    function runScroll() {
        var idx = $("#02 .a1").index($("#02 .active")[0]);
        $("#02 .a1").eq(idx).removeClass("active").hide();
        idx += 1;
        if (idx % (last_idx + 1) == 0) {
            idx = 0;
        }
        $("#02 .a1").eq(idx).addClass("active").show();
    }

    $(".left-scroll").click(function () {
        var idx = $("#02 .a1").index($("#02 .q1 .active")[0]);
        $("#02 .a1").eq(idx).removeClass("active").hide();
        idx -= 1;
        if (idx == -1) {
            idx = last_idx;
        }
        $("#02 .a1").eq(idx).addClass("active").show();
    });
    runScroll();
    $(".right-scroll").click(function () {
        runScroll();
    });
})();

(function () {
    var last_idx = $("#01 .a1").index($("#01 .a1:last"));
//        console.log(last_idx);
    function runScroll() {
        var idx = $("#01 .a1").index($("#01 .active")[0]);
        $("#01 .a1").eq(idx).removeClass("active").hide();
        idx += 1;
        if (idx % (last_idx + 1) == 0) {
            idx = 0;
        }
        $("#01 .a1").eq(idx).addClass("active").show();
    }

    $(".left-scroll").click(function () {
        var idx = $("#01 .a1").index($("#01 .q1 .active")[0]);
        $("#01 .a1").eq(idx).removeClass("active").hide();
        idx -= 1;
        if (idx == -1) {
            idx = last_idx;
        }
        $("#01 .a1").eq(idx).addClass("active").show();
    });
    runScroll();
    $(".right-scroll").click(function () {
        runScroll();
    });
})();

(function () {
    var last_idx = $("#03 .a1").index($("#03 .a1:last"));
//        console.log(last_idx);
    function runScroll() {
        var idx = $("#03 .a1").index($("#03 .active")[0]);
        $("#03 .a1").eq(idx).removeClass("active").hide();
        idx += 1;
        if (idx % (last_idx + 1) == 0) {
            idx = 0;
        }
        $("#03 .a1").eq(idx).addClass("active").show();
    }

    $(".left-scroll").click(function () {
        var idx = $("#03 .a1").index($("#03 .q1 .active")[0]);
        $("#03 .a1").eq(idx).removeClass("active").hide();
        idx -= 1;
        if (idx == -1) {
            idx = last_idx;
        }
        $("#03 .a1").eq(idx).addClass("active").show();
    });
    runScroll();
    $(".right-scroll").click(function () {
        runScroll();
    });
})();


(function () {
    var last_idx = $("#04 .a1").index($("#04 .a1:last"));
//        console.log(last_idx);
    function runScroll() {
        var idx = $("#04 .a1").index($("#04 .active")[0]);
        $("#04 .a1").eq(idx).removeClass("active").hide();
        idx += 1;
        if (idx % (last_idx + 1) == 0) {
            idx = 0;
        }
        $("#04 .a1").eq(idx).addClass("active").show();
    }

    $(".left-scroll").click(function () {
        var idx = $("#04 .a1").index($("#04 .q1 .active")[0]);
        $("#04 .a1").eq(idx).removeClass("active").hide();
        idx -= 1;
        if (idx == -1) {
            idx = last_idx;
        }
        $("#04 .a1").eq(idx).addClass("active").show();
    });
    runScroll();
    $(".right-scroll").click(function () {
        runScroll();
    });
})();

(function () {
    var last_idx = $("#05 .a1").index($("#05 .a1:last"));
//        console.log(last_idx);
    function runScroll() {
        var idx = $("#05 .a1").index($("#05 .active")[0]);
        $("#05 .a1").eq(idx).removeClass("active").hide();
        idx += 1;
        if (idx % (last_idx + 1) == 0) {
            idx = 0;
        }
        $("#05 .a1").eq(idx).addClass("active").show();
    }

    $(".left-scroll").click(function () {
        var idx = $("#05 .a1").index($("#05 .q1 .active")[0]);
        $("#05 .a1").eq(idx).removeClass("active").hide();
        idx -= 1;
        if (idx == -1) {
            idx = last_idx;
        }
        $("#05 .a1").eq(idx).addClass("active").show();
    });
    runScroll();
    $(".right-scroll").click(function () {
        runScroll();
    });
})();



(function () {
    var last_idx = $("#06 .a1").index($("#06 .a1:last"));
//        console.log(last_idx);
    function runScroll() {
        var idx = $("#06 .a1").index($("#06 .active")[0]);
        $("#06 .a1").eq(idx).removeClass("active").hide();
        idx += 1;
        if (idx % (last_idx + 1) == 0) {
            idx = 0;
        }
        $("#06 .a1").eq(idx).addClass("active").show();
    }

    $(".left-scroll").click(function () {
        var idx = $("#06 .a1").index($("#06 .q1 .active")[0]);
        $("#06 .a1").eq(idx).removeClass("active").hide();
        idx -= 1;
        if (idx == -1) {
            idx = last_idx;
        }
        $("#06 .a1").eq(idx).addClass("active").show();
    });
    runScroll();
    $(".right-scroll").click(function () {
        runScroll();
    });
})();

(function () {
    var last_idx = $("#07 .a1").index($("#07 .a1:last"));
//        console.log(last_idx);
    function runScroll() {
        var idx = $("#07 .a1").index($("#07 .active")[0]);
        $("#07 .a1").eq(idx).removeClass("active").hide();
        idx += 1;
        if (idx % (last_idx + 1) == 0) {
            idx = 0;
        }
        $("#07 .a1").eq(idx).addClass("active").show();
    }

    $(".left-scroll").click(function () {
        var idx = $("#07 .a1").index($("#07 .q1 .active")[0]);
        $("#07 .a1").eq(idx).removeClass("active").hide();
        idx -= 1;
        if (idx == -1) {
            idx = last_idx;
        }
        $("#07 .a1").eq(idx).addClass("active").show();
    });
    runScroll();
    $(".right-scroll").click(function () {
        runScroll();
    });
})();


(function () {
    var last_idx = $("#08 .a1").index($("#08 .a1:last"));
//        console.log(last_idx);
    function runScroll() {
        var idx = $("#08 .a1").index($("#08 .active")[0]);
        $("#08 .a1").eq(idx).removeClass("active").hide();
        idx += 1;
        if (idx % (last_idx + 1) == 0) {
            idx = 0;
        }
        $("#08 .a1").eq(idx).addClass("active").show();
    }

    $(".left-scroll").click(function () {
        var idx = $("#08 .a1").index($("#08 .q1 .active")[0]);
        $("#08 .a1").eq(idx).removeClass("active").hide();
        idx -= 1;
        if (idx == -1) {
            idx = last_idx;
        }
        $("#08 .a1").eq(idx).addClass("active").show();
    });
    runScroll();
    $(".right-scroll").click(function () {
        runScroll();
    });
})();

(function () {
    var last_idx = $("#09 .a1").index($("#09 .a1:last"));
//        console.log(last_idx);
    function runScroll() {
        var idx = $("#09 .a1").index($("#09 .active")[0]);
        $("#09 .a1").eq(idx).removeClass("active").hide();
        idx += 1;
        if (idx % (last_idx + 1) == 0) {
            idx = 0;
        }
        $("#09 .a1").eq(idx).addClass("active").show();
    }

    $(".left-scroll").click(function () {
        var idx = $("#09 .a1").index($("#09 .q1 .active")[0]);
        $("#09 .a1").eq(idx).removeClass("active").hide();
        idx -= 1;
        if (idx == -1) {
            idx = last_idx;
        }
        $("#09 .a1").eq(idx).addClass("active").show();
    });
    runScroll();
    $(".right-scroll").click(function () {
        runScroll();
    });
})();

(function () {
    var last_idx = $("#10 .a1").index($("#10 .a1:last"));
//        console.log(last_idx);
    function runScroll() {
        var idx = $("#10 .a1").index($("#10 .active")[0]);
        $("#10 .a1").eq(idx).removeClass("active").hide();
        idx += 1;
        if (idx % (last_idx + 1) == 0) {
            idx = 0;
        }
        $("#10 .a1").eq(idx).addClass("active").show();
    }

    $(".left-scroll").click(function () {
        var idx = $("#10 .a1").index($("#10 .hou_04 .active")[0]);
        $("#10 .a1").eq(idx).removeClass("active").hide();
        idx -= 1;
        if (idx == -1) {
            idx = last_idx;
        }
        $("#10 .a1").eq(idx).addClass("active").show();
    });
    runScroll();
    $(".right-scroll").click(function () {
        runScroll();
    });
})();

(function () {
    var last_idx = $("#11 .a1").index($("#11 .a1:last"));
//        console.log(last_idx);
    function runScroll() {
        var idx = $("#11 .a1").index($("#11 .active")[0]);
        $("#11 .a1").eq(idx).removeClass("active").hide();
        idx += 1;
        if (idx % (last_idx + 1) == 0) {
            idx = 0;
        }
        $("#11 .a1").eq(idx).addClass("active").show();
    }

    $(".left-scroll").click(function () {
        var idx = $("#11 .a1").index($("#11 .hou_04 .active")[0]);
        $("#11 .a1").eq(idx).removeClass("active").hide();
        idx -= 1;
        if (idx == -1) {
            idx = last_idx;
        }
        $("#11 .a1").eq(idx).addClass("active").show();
    });
    runScroll();
    $(".right-scroll").click(function () {
        runScroll();
    });
})();


(function () {
    var last_idx = $("#12 .a1").index($("#12 .a1:last"));
//        console.log(last_idx);
    function runScroll() {
        var idx = $("#12 .a1").index($("#12 .active")[0]);
        $("#12 .a1").eq(idx).removeClass("active").hide();
        idx += 1;
        if (idx % (last_idx + 1) == 0) {
            idx = 0;
        }
        $("#12 .a1").eq(idx).addClass("active").show();
    }

    $(".left-scroll").click(function () {
        var idx = $("#12 .a1").index($("#12 .hou_04 .active")[0]);
        $("#12 .a1").eq(idx).removeClass("active").hide();
        idx -= 1;
        if (idx == -1) {
            idx = last_idx;
        }
        $("#12 .a1").eq(idx).addClass("active").show();
    });
    runScroll();
    $(".right-scroll").click(function () {
        runScroll();
    });
})();

(function () {
    var last_idx = $("#13 .a1").index($("#13 .a1:last"));
//        console.log(last_idx);
    function runScroll() {
        var idx = $("#13 .a1").index($("#13 .active")[0]);
        $("#13 .a1").eq(idx).removeClass("active").hide();
        idx += 1;
        if (idx % (last_idx + 1) == 0) {
            idx = 0;
        }
        $("#13 .a1").eq(idx).addClass("active").show();
    }

    $(".left-scroll").click(function () {
        var idx = $("#13 .a1").index($("#13 .hou_04 .active")[0]);
        $("#13 .a1").eq(idx).removeClass("active").hide();
        idx -= 1;
        if (idx == -1) {
            idx = last_idx;
        }
        $("#13 .a1").eq(idx).addClass("active").show();
    });
    runScroll();
    $(".right-scroll").click(function () {
        runScroll();
    });
})();






//    ȫ���µ�����
(function () {
    var qb_yue = echarts.init(document.getElementById('qb_yue'));
    //    app.title = '������̶����ǩ����';
    option = {
        title: {
            left: 'center',
            text: '�µ�����'
// subtext: '������������'
        },
        color: ['#ff468c'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // ������ָʾ���������ᴥ����Ч
                type: 'shadow'        // Ĭ��Ϊֱ�ߣ���ѡΪ��'line' | 'shadow'
            }
        },
        grid: {
            left: '1%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['4��', '5��', '6��', '7��', '8��', '9��'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'ֱ�ӷ���',
                type: 'bar',
                barWidth: '40%',
                data: [5297878, 7057199, 7134820, 6869689, 9872687, 11347784]
            },
        ]
    };
    qb_yue.setOption(option);

})();
//    ȫ�����յ�����
(function () {
    var qb_ri = echarts.init(document.getElementById('qb_ri'));

    var date = ['9��18��',
        '9��19��',
        '9��20��',
        '9��21��',
        '9��22��',
        '9��23��',
        '9��24��',
        '9��25��',
        '9��26��',
        '9��27��',
        '9��28��',
        '9��29��',
        '9��30��',
        '10��1��',
        '10��2��',
        '10��3��',
        '10��4��',
        '10��5��',
        '10��6��',
        '10��7��',
        '10��8��',
        '10��9��',
        '10��10��',
        '10��11��',
        '10��12��',
        '10��13��',
        '10��14��',
        '10��15��',
        '10��16��',
        '10��17��'
    ];

    var data = [197643,
        448338,
        131402,
        415388,
        156769,
        453776,
        301869,
        380722,
        305872,
        334719,
        110110,
        92682,
        266985,
        319676,
        87716,
        134023,
        77203,
        182100,
        96655,
        139580,
        203142,
        312616,
        113463,
        162537,
        98686,
        176238,
        211210,
        202613,
        98260,
        203044
    ];


    option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        title: {
            left: 'center',
            text: '�յ�����'
        },
        legend: {
            top: 'bottom',
            data: ['����']
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 10
        }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: [
            {
                name: '���յ�����',
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(255, 70, 131)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        }, {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }])
                    }
                },
                data: data
            }
        ]
    };
    qb_ri.setOption(option);
})();

//���Ͻ���µ�����
(function () {
    var my_yue = echarts.init(document.getElementById('my_yue'));
    //    app.title = '������̶����ǩ����';
    option = {
        title: {
            left: 'center',
            text: '�µ�����'
// subtext: '������������'
        },
        color: ['#ff468c'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // ������ָʾ���������ᴥ����Ч
                type: 'shadow'        // Ĭ��Ϊֱ�ߣ���ѡΪ��'line' | 'shadow'
            }
        },
        grid: {
            left: '1%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['4��', '5��', '6��', '7��', '8��', '9��'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'ֱ�ӷ���',
                type: 'bar',
                barWidth: '40%',
                data: [2834640, 3461391, 2777792, 1920203, 2140743, 3222212]
            },
        ]
    };
    my_yue.setOption(option);
})();
//    ���Ͻ���յ�����
(function () {
    var my_ri = echarts.init(document.getElementById('my_ri'));

    var date = ['9��18��',
        '9��19��',
        '9��20��',
        '9��21��',
        '9��22��',
        '9��23��',
        '9��24��',
        '9��25��',
        '9��26��',
        '9��27��',
        '9��28��',
        '9��29��',
        '9��30��',
        '10��1��',
        '10��2��',
        '10��3��',
        '10��4��',
        '10��5��',
        '10��6��',
        '10��7��',
        '10��8��',
        '10��9��',
        '10��10��',
        '10��11��',
        '10��12��',
        '10��13��',
        '10��14��',
        '10��15��',
        '10��16��',
        '10��17��'
    ];

    var data = [24566,
        234567,
        32944,
        10892,
        34543,
        274357,
        34564,
        132595,
        181226,
        22345,
        12668,
        23888,
        28699,
        43563,
        15693,
        56564,
        11038,
        14871,
        34578,
        85434,
        79494,
        23456,
        43425,
        53697,
        43355,
        26233,
        48006,
        123124,
        12314,
        32323

    ];


    option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        title: {
            left: 'center',
            text: '�յ�����'
        },
        legend: {
            top: 'bottom',
            data: ['����']
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 10
        }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: [
            {
                name: '���յ�����',
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(255, 70, 131)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        }, {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }])
                    }
                },
                data: data
            }
        ]
    };
    my_ri.setOption(option);
})();


//��Ԫ�µ�����
(function () {
    var py_yue = echarts.init(document.getElementById('py_yue'));
    //    app.title = '������̶����ǩ����';
    option = {
        title: {
            left: 'center',
            text: '�µ�����'
// subtext: '������������'
        },
        color: ['#ff468c'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // ������ָʾ���������ᴥ����Ч
                type: 'shadow'        // Ĭ��Ϊֱ�ߣ���ѡΪ��'line' | 'shadow'
            }
        },
        grid: {
            left: '1%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['4��', '5��', '6��', '7��', '8��', '9��'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'ֱ�ӷ���',
                type: 'bar',
                barWidth: '40%',
                data: [103295, 88993, 130266, 214727, 239565, 391030]
            },
        ]
    };
    py_yue.setOption(option);
})();
//    ��Ԫ�յ�����
(function () {
    var py_ri = echarts.init(document.getElementById('py_ri'));

    var date = ['9��18��',
        '9��19��',
        '9��20��',
        '9��21��',
        '9��22��',
        '9��23��',
        '9��24��',
        '9��25��',
        '9��26��',
        '9��27��',
        '9��28��',
        '9��29��',
        '9��30��',
        '10��1��',
        '10��2��',
        '10��3��',
        '10��4��',
        '10��5��',
        '10��6��',
        '10��7��',
        '10��8��',
        '10��9��',
        '10��10��',
        '10��11��',
        '10��12��',
        '10��13��',
        '10��14��',
        '10��15��',
        '10��16��',
        '10��17��'
    ];

    var data = [1780,
        39940,
        6911,
        4890,
        9380,
        1012,
        12311,
        11358,
        18375,
        1125,
        7834,
        10015,
        8923,
        3562,
        23453,
        10389,
        8940,
        9320,
        12355,
        4451,
        12981,
        29860,
        11230,
        8987,
        5698,
        6990,
        26790,
        15470,
        26701,
        6670


    ];
    option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        title: {
            left: 'center',
            text: '�յ�����'
        },
        legend: {
            top: 'bottom',
            data: ['����']
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 10
        }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: [
            {
                name: '���յ�����',
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(255, 70, 131)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        }, {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }])
                    }
                },
                data: data
            }
        ]
    };
    py_ri.setOption(option);
})();

//����֧���µ�����
(function () {
    var yl_yue = echarts.init(document.getElementById('yl_yue'));
    //    app.title = '������̶����ǩ����';
    option = {
        title: {
            left: 'center',
            text: '�µ�����'
// subtext: '������������'
        },
        color: ['#ff468c'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // ������ָʾ���������ᴥ����Ч
                type: 'shadow'        // Ĭ��Ϊֱ�ߣ���ѡΪ��'line' | 'shadow'
            }
        },
        grid: {
            left: '1%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['4��', '5��', '6��', '7��', '8��', '9��'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'ֱ�ӷ���',
                type: 'bar',
                barWidth: '40%',
                data: [131276, 127616, 118497, 81568, 74504, 91129]
            },
        ]
    };
    yl_yue.setOption(option);
})();
//    ����֧���յ�����
(function () {
    var yl_ri = echarts.init(document.getElementById('yl_ri'));

    var date = ['9��18��',
        '9��19��',
        '9��20��',
        '9��21��',
        '9��22��',
        '9��23��',
        '9��24��',
        '9��25��',
        '9��26��',
        '9��27��',
        '9��28��',
        '9��29��',
        '9��30��',
        '10��1��',
        '10��2��',
        '10��3��',
        '10��4��',
        '10��5��',
        '10��6��',
        '10��7��',
        '10��8��',
        '10��9��',
        '10��10��',
        '10��11��',
        '10��12��',
        '10��13��',
        '10��14��',
        '10��15��',
        '10��16��',
        '10��17��'
    ];

    var data = [8910,
        1036,
        7090,
        3694,
        563,
        989,
        4671,
        8712,
        994,
        4268,
        1314,
        443,
        290,
        1422,
        2314,
        912,
        4721,
        825,
        3210,
        524,
        3379,
        731,
        762,
        694,
        1034,
        2341,
        5312,
        2241,
        812,
        1024
    ];
    option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        title: {
            left: 'center',
            text: '�յ�����'
        },
        legend: {
            top: 'bottom',
            data: ['����']
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 10
        }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: [
            {
                name: '���յ�����',
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(255, 70, 131)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        }, {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }])
                    }
                },
                data: data
            }
        ]
    };
    yl_ri.setOption(option);
})();


//�����µ�����
(function () {
    var hd_yue = echarts.init(document.getElementById('hd_yue'));
    //    app.title = '������̶����ǩ����';
    option = {
        title: {
            left: 'center',
            text: '�µ�����'
// subtext: '������������'
        },
        color: ['#ff468c'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // ������ָʾ���������ᴥ����Ч
                type: 'shadow'        // Ĭ��Ϊֱ�ߣ���ѡΪ��'line' | 'shadow'
            }
        },
        grid: {
            left: '1%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['4��', '5��', '6��', '7��', '8��', '9��'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'ֱ�ӷ���',
                type: 'bar',
                barWidth: '40%',
                data: [6812, 5771, 3594, 27328, 2880, 2030]
            },
        ]
    };
    hd_yue.setOption(option);
})();
//    �����յ�����
(function () {
    var hd_ri = echarts.init(document.getElementById('hd_ri'));

    var date = ['9��18��',
        '9��19��',
        '9��20��',
        '9��21��',
        '9��22��',
        '9��23��',
        '9��24��',
        '9��25��',
        '9��26��',
        '9��27��',
        '9��28��',
        '9��29��',
        '9��30��',
        '10��1��',
        '10��2��',
        '10��3��',
        '10��4��',
        '10��5��',
        '10��6��',
        '10��7��',
        '10��8��',
        '10��9��',
        '10��10��',
        '10��11��',
        '10��12��',
        '10��13��',
        '10��14��',
        '10��15��',
        '10��16��',
        '10��17��'
    ];

    var data = [89,
        103,
        62,
        38,
        99,
        101,
        120,
        28,
        59,
        62,
        31,
        45,
        75,
        16,
        53,
        37,
        42,
        54,
        79,
        48,
        28,
        149,
        201,
        77,
        83,
        92,
        90,
        103,
        22,
        69

    ];
    option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        title: {
            left: 'center',
            text: '�յ�����'
        },
        legend: {
            top: 'bottom',
            data: ['����']
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 10
        }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: [
            {
                name: '���յ�����',
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(255, 70, 131)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        }, {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }])
                    }
                },
                data: data
            }
        ]
    };
    hd_ri.setOption(option);
})();


//ǰ���µ�����
(function () {
    var qh_yue = echarts.init(document.getElementById('qh_yue'));
    //    app.title = '������̶����ǩ����';
    option = {
        title: {
            left: 'center',
            text: '�µ�����'
// subtext: '������������'
        },
        color: ['#ff468c'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // ������ָʾ���������ᴥ����Ч
                type: 'shadow'        // Ĭ��Ϊֱ�ߣ���ѡΪ��'line' | 'shadow'
            }
        },
        grid: {
            left: '1%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['4��', '5��', '6��', '7��', '8��', '9��'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'ֱ�ӷ���',
                type: 'bar',
                barWidth: '40%',
                data: [532730, 877070, 834580, 898140, 1057900, 1370710]
            },
        ]
    };
    qh_yue.setOption(option);
})();
//    ǰ���յ�����
(function () {
    var qh_ri = echarts.init(document.getElementById('qh_ri'));

    var date = ['9��18��',
        '9��19��',
        '9��20��',
        '9��21��',
        '9��22��',
        '9��23��',
        '9��24��',
        '9��25��',
        '9��26��',
        '9��27��',
        '9��28��',
        '9��29��',
        '9��30��',
        '10��1��',
        '10��2��',
        '10��3��',
        '10��4��',
        '10��5��',
        '10��6��',
        '10��7��',
        '10��8��',
        '10��9��',
        '10��10��',
        '10��11��',
        '10��12��',
        '10��13��',
        '10��14��',
        '10��15��',
        '10��16��',
        '10��17��'
    ];

    var data = [89040,
        24390,
        11490,
        59688,
        52010,
        10324,
        37507,
        60922,
        77306,
        69206,
        68110,
        12438,
        8206,
        13723,
        25628,
        6679,
        3261,
        7825,
        6469,
        5621,
        31010,
        21040,
        9330,
        10290,
        10290,
        41430,
        44570,
        7580,
        6560,
        46890
    ];
    option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        title: {
            left: 'center',
            text: '�յ�����'
        },
        legend: {
            top: 'bottom',
            data: ['����']
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 10
        }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: [
            {
                name: '���յ�����',
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(255, 70, 131)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        }, {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }])
                    }
                },
                data: data
            }
        ]
    };
    qh_ri.setOption(option);
})();


//�г����µ�����
(function () {
    var zc_yue = echarts.init(document.getElementById('zc_yue'));
    //    app.title = '������̶����ǩ����';
    option = {
        title: {
            left: 'center',
            text: '�µ�����'
// subtext: '������������'
        },
        color: ['#ff468c'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // ������ָʾ���������ᴥ����Ч
                type: 'shadow'        // Ĭ��Ϊֱ�ߣ���ѡΪ��'line' | 'shadow'
            }
        },
        grid: {
            left: '1%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['4��', '5��', '6��', '7��', '8��', '9��'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'ֱ�ӷ���',
                type: 'bar',
                barWidth: '40%',
                data: [26145, 27456, 8771, 16353, 24799, 13480]
            },
        ]
    };
    zc_yue.setOption(option);
})();
//    �г����յ�����
(function () {
    var zc_ri = echarts.init(document.getElementById('zc_ri'));

    var date = ['9��18��',
        '9��19��',
        '9��20��',
        '9��21��',
        '9��22��',
        '9��23��',
        '9��24��',
        '9��25��',
        '9��26��',
        '9��27��',
        '9��28��',
        '9��29��',
        '9��30��',
        '10��1��',
        '10��2��',
        '10��3��',
        '10��4��',
        '10��5��',
        '10��6��',
        '10��7��',
        '10��8��',
        '10��9��',
        '10��10��',
        '10��11��',
        '10��12��',
        '10��13��',
        '10��14��',
        '10��15��',
        '10��16��',
        '10��17��'
    ];

    var data = [312,
        625,
        635,
        234,
        617,
        329,
        513,
        105,
        142,
        323,
        169,
        59,
        102,
        216,
        435,
        375,
        65,
        110,
        326,
        442,
        98,
        275,
        473,
        325,
        443,
        119,
        389,
        502,
        353,
        279

    ];
    option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        title: {
            left: 'center',
            text: '�յ�����'
        },
        legend: {
            top: 'bottom',
            data: ['����']
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 10
        }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: [
            {
                name: '���յ�����',
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(255, 70, 131)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        }, {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }])
                    }
                },
                data: data
            }
        ]
    };
    zc_ri.setOption(option);
})();


//����ͨ�µ�����
(function () {
    var gz_yue = echarts.init(document.getElementById('gz_yue'));
    //    app.title = '������̶����ǩ����';
    option = {
        title: {
            left: 'center',
            text: '�µ�����'
// subtext: '������������'
        },
        color: ['#ff468c'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // ������ָʾ���������ᴥ����Ч
                type: 'shadow'        // Ĭ��Ϊֱ�ߣ���ѡΪ��'line' | 'shadow'
            }
        },
        grid: {
            left: '1%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['4��', '5��', '6��', '7��', '8��', '9��'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'ֱ�ӷ���',
                type: 'bar',
                barWidth: '40%',
                data: [598620, 801200, 1098120, 2162610, 2971420, 3562600]
            },
        ]
    };
    gz_yue.setOption(option);
})();
//    ����ͨ�յ�����
(function () {
    var gz_ri = echarts.init(document.getElementById('gz_ri'));

    var date = ['9��18��',
        '9��19��',
        '9��20��',
        '9��21��',
        '9��22��',
        '9��23��',
        '9��24��',
        '9��25��',
        '9��26��',
        '9��27��',
        '9��28��',
        '9��29��',
        '9��30��',
        '10��1��',
        '10��2��',
        '10��3��',
        '10��4��',
        '10��5��',
        '10��6��',
        '10��7��',
        '10��8��',
        '10��9��',
        '10��10��',
        '10��11��',
        '10��12��',
        '10��13��',
        '10��14��',
        '10��15��',
        '10��16��',
        '10��17��'
    ];

    var data = [57800,
        99110,
        50380,
        313800,
        50120,
        161310,
        205750,
        159110,
        12980,
        218600,
        11230,
        38900,
        183800,
        250340,
        11350,
        53600,
        45880,
        147000,
        36090,
        34120,
        66020,
        219100,
        23400,
        54900,
        13200,
        82009,
        49400,
        25610,
        33408,
        83546


    ];
    option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        title: {
            left: 'center',
            text: '�յ�����'
        },
        legend: {
            top: 'bottom',
            data: ['����']
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 10
        }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: [
            {
                name: '���յ�����',
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(255, 70, 131)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        }, {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }])
                    }
                },
                data: data
            }
        ]
    };
    gz_ri.setOption(option);
})();
//�к��µ�����
(function () {
    var zh_yue = echarts.init(document.getElementById('zh_yue'));
    //    app.title = '������̶����ǩ����';
    option = {
        title: {
            left: 'center',
            text: '�µ�����'
// subtext: '������������'
        },
        color: ['#ff468c'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // ������ָʾ���������ᴥ����Ч
                type: 'shadow'        // Ĭ��Ϊֱ�ߣ���ѡΪ��'line' | 'shadow'
            }
        },
        grid: {
            left: '1%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['4��', '5��', '6��', '7��', '8��', '9��'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'ֱ�ӷ���',
                type: 'bar',
                barWidth: '40%',
                data: [1064360, 1667702, 2163200, 1548760, 1660876, 894593]
            },
        ]
    };
    zh_yue.setOption(option);
})();
//    �к��յ�����
(function () {
    var zh_ri = echarts.init(document.getElementById('zh_ri'));

    var date = ['9��18��',
        '9��19��',
        '9��20��',
        '9��21��',
        '9��22��',
        '9��23��',
        '9��24��',
        '9��25��',
        '9��26��',
        '9��27��',
        '9��28��',
        '9��29��',
        '9��30��',
        '10��1��',
        '10��2��',
        '10��3��',
        '10��4��',
        '10��5��',
        '10��6��',
        '10��7��',
        '10��8��',
        '10��9��',
        '10��10��',
        '10��11��',
        '10��12��',
        '10��13��',
        '10��14��',
        '10��15��',
        '10��16��',
        '10��17��'
    ];

    var data = [15146,
        48567,
        21890,
        22152,
        9437,
        5354,
        6433,
        7892,
        14790,
        18790,
        8754,
        6894,
        36890,
        6834,
        8790,
        5467,
        3256,
        2095,
        3548,
        8940,
        10132,
        18005,
        24642,
        33567,
        24583,
        17024,
        36653,
        27983,
        18090,
        32243


    ];
    option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        title: {
            left: 'center',
            text: '�յ�����'
        },
        legend: {
            top: 'bottom',
            data: ['����']
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 10
        }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: [
            {
                name: '���յ�����',
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(255, 70, 131)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        }, {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }])
                    }
                },
                data: data
            }
        ]
    };
    zh_ri.setOption(option);
})();