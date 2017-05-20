/**
 * Created by admin on 2016/10/20.
 */
/**
 * Created by admin on 2016/10/19.
 */
setInterval(function(){
    var keng = [];
    var a = 1;
    var aa = parseInt(a);
    var date = new Date();
    var year=date.getFullYear();
    var month=date.getMonth()+1;
    var dangr=date.getDate();
    var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();//小时
    var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();//分
    var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();//秒
    var time =year+"-"+month+"-"+dangr+" "+ hours + ":" + minute + ":" + second;
    var time1 = hours + ":" + minute + ":" + second;
    keng.push(time1);
    $(".zx_sj").html(time);







    for(i=0;i>0;i++){
        //keng[i];
    }
    //console.log(keng[i]);
    var sJa=document.getElementsByClassName("aa");
    var sJa1=document.getElementsByClassName("aaa");

    for(j=4;j<sJa.length;j++){
        sJa[j].innerHTML=keng[i];
    }
    for(k=4;k<sJa1.length;k++){
        sJa1[k].innerHTML=keng[i];
    }



    var qb=document.getElementsByClassName("qb");
    for(i=0;i<qb.length;i++){
        var yuansi= qb[i].innerHTML;
        qb[i].innerHTML=parseInt(yuansi) + parseInt(Math.random()*20);
    }
    //console.log();
},1000);

(function(){
    //数据递增
    var content = document.getElementsByClassName("q1");
    function curDateTime() {

        //前九个更新时间
        var a = 1;
        var aa = parseInt(a);
        var date = new Date();
        var year=date.getFullYear();
        var month=date.getMonth()+1;
        var dangr=date.getDate();
        var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();//小时
        var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();//分
        var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();//秒
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



//页面底部
(function(A){
    function _ROLL(obj){
        this.ele = document.getElementById(obj);
        this.interval = false;
        this.currentNode = 0;
        this.passNode = 0;
        this.speed = 100;
        this.childs = _childs(this.ele);
        this.childHeight = parseInt(_style(this.childs[0])['height']);
        //addEvent(this.ele,'mouseover',function(){
        //    window._loveYR.pause();
        //});
        //addEvent(this.ele,'mouseout',function(){
        //    window._loveYR.start(_loveYR.speed);
        //});
    }
    function _style(obj){
        return obj.currentStyle || document.defaultView.getComputedStyle(obj,null);
    }
    function _childs(obj){
        var childs = [];
        for(var i=0;i < obj.childNodes.length;i++){
            var _this = obj.childNodes[i];
            if(_this.nodeType===1){
                childs.push(_this);
            }
        }
        return childs;
    }
    function addEvent(elem,evt,func){
        if(-[1,]){
            elem.addEventListener(evt,func,false);
        }else{
            elem.attachEvent('on'+evt,func);
        };
    }
    function innerest(elem){
        var c = elem;
        while(c.childNodes.item(0).nodeType==1){
            c = c.childNodes.item(0);
        }
        return c;
    }
    _ROLL.prototype = {
        start:function(s){
            var _this = this;
            _this.speed = s || 100;
            _this.interval = setInterval(function(){
                _this.ele.scrollTop += 1;
                _this.passNode++;
                if(_this.passNode%_this.childHeight==0){
                    var o = _this.childs[_this.currentNode] || _this.childs[0];
                    _this.currentNode<(_this.childs.length-1)?_this.currentNode++:_this.currentNode=0;
                    _this.passNode = 0;
                    _this.ele.scrollTop = 0;
                    _this.ele.appendChild(o);
                }

            },_this.speed);
        },
        pause:function(){
            var _this = this;
            clearInterval(_this.interval);
        }
    }
    A.marqueen = function(obj){A._loveYR = new _ROLL(obj); return A._loveYR;}

})(window);
marqueen('roll_right').start(40/*速度默认100*/);
marqueen('roll_left').start(40/*速度默认100*/);

//标签页
//后四个标签页

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






//    全部月调用量
(function () {
    var qb_yue = echarts.init(document.getElementById('qb_yue'));
    //    app.title = '坐标轴刻度与标签对齐';
    option = {
        title: {
            left: 'center',
            text: '月调用量'
// subtext: '数据来自网络'
        },
        color: ['#7dddd8'
        ],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                data: ['4月', '5月', '6月', '7月', '8月', '9月'],
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
                name: '直接访问',
                type: 'bar',
                barWidth: '40%',
                data: [5297878, 7057199, 7134820, 6869689, 9872687, 11347784]
            },
        ]
    };
    qb_yue.setOption(option);

})();
//    全部当日调用量
(function () {
    var qb_ri = echarts.init(document.getElementById('qb_ri'));

    var date = ['9月18日',
        '9月19日',
        '9月20日',
        '9月21日',
        '9月22日',
        '9月23日',
        '9月24日',
        '9月25日',
        '9月26日',
        '9月27日',
        '9月28日',
        '9月29日',
        '9月30日',
        '10月1日',
        '10月2日',
        '10月3日',
        '10月4日',
        '10月5日',
        '10月6日',
        '10月7日',
        '10月8日',
        '10月9日',
        '10月10日',
        '10月11日',
        '10月12日',
        '10月13日',
        '10月14日',
        '10月15日',
        '10月16日',
        '10月17日'
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
            text: '日调用量'
        },
        legend: {
            top: 'bottom',
            data: ['意向']
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
                name: '当日调用量',
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(84, 137, 173)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(251, 253, 254)'
                        }, {
                            offset: 1,
                            color: 'rgb(84, 137, 173)'
                        }])
                    }
                },
                data: data
            }
        ]
    };
    qb_ri.setOption(option);
})();

//蚂蚁金服月调用量
(function () {
    var my_yue = echarts.init(document.getElementById('my_yue'));
    //    app.title = '坐标轴刻度与标签对齐';
    option = {
        title: {
            left: 'center',
            text: '月调用量'
// subtext: '数据来自网络'
        },
        color: ['#7dddd8'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                data: ['4月', '5月', '6月', '7月', '8月', '9月'],
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
                name: '直接访问',
                type: 'bar',
                barWidth: '40%',
                data: [2834640, 3461391, 2777792, 1920203, 2140743, 3222212]
            },
        ]
    };
    my_yue.setOption(option);
})();
//    蚂蚁金服日调用量
(function () {
    var my_ri = echarts.init(document.getElementById('my_ri'));

    var date = ['9月18日',
        '9月19日',
        '9月20日',
        '9月21日',
        '9月22日',
        '9月23日',
        '9月24日',
        '9月25日',
        '9月26日',
        '9月27日',
        '9月28日',
        '9月29日',
        '9月30日',
        '10月1日',
        '10月2日',
        '10月3日',
        '10月4日',
        '10月5日',
        '10月6日',
        '10月7日',
        '10月8日',
        '10月9日',
        '10月10日',
        '10月11日',
        '10月12日',
        '10月13日',
        '10月14日',
        '10月15日',
        '10月16日',
        '10月17日'
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
            text: '日调用量'
        },
        legend: {
            top: 'bottom',
            data: ['意向']
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
                name: '当日调用量',
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(84, 137, 173)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(251, 253, 254)'
                        }, {
                            offset: 1,
                            color: 'rgb(84, 137, 173)'
                        }])
                    }
                },
                data: data
            }
        ]
    };
    my_ri.setOption(option);
})();


//鹏元月调用量
(function () {
    var py_yue = echarts.init(document.getElementById('py_yue'));
    //    app.title = '坐标轴刻度与标签对齐';
    option = {
        title: {
            left: 'center',
            text: '月调用量'
// subtext: '数据来自网络'
        },
        color: ['#7dddd8'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                data: ['4月', '5月', '6月', '7月', '8月', '9月'],
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
                name: '直接访问',
                type: 'bar',
                barWidth: '40%',
                data: [103295, 88993, 130266, 214727, 239565, 391030]
            },
        ]
    };
    py_yue.setOption(option);
})();
//    鹏元日调用量
(function () {
    var py_ri = echarts.init(document.getElementById('py_ri'));

    var date = ['9月18日',
        '9月19日',
        '9月20日',
        '9月21日',
        '9月22日',
        '9月23日',
        '9月24日',
        '9月25日',
        '9月26日',
        '9月27日',
        '9月28日',
        '9月29日',
        '9月30日',
        '10月1日',
        '10月2日',
        '10月3日',
        '10月4日',
        '10月5日',
        '10月6日',
        '10月7日',
        '10月8日',
        '10月9日',
        '10月10日',
        '10月11日',
        '10月12日',
        '10月13日',
        '10月14日',
        '10月15日',
        '10月16日',
        '10月17日'
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
            text: '日调用量'
        },
        legend: {
            top: 'bottom',
            data: ['意向']
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
                name: '当日调用量',
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(84, 137, 173)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(251, 253, 254)'
                        }, {
                            offset: 1,
                            color: 'rgb(84, 137, 173)'
                        }])
                    }
                },
                data: data
            }
        ]
    };
    py_ri.setOption(option);
})();

//易联支付月调用量
(function () {
    var yl_yue = echarts.init(document.getElementById('yl_yue'));
    //    app.title = '坐标轴刻度与标签对齐';
    option = {
        title: {
            left: 'center',
            text: '月调用量'
// subtext: '数据来自网络'
        },
        color: ['#7dddd8'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                data: ['4月', '5月', '6月', '7月', '8月', '9月'],
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
                name: '直接访问',
                type: 'bar',
                barWidth: '40%',
                data: [131276, 127616, 118497, 81568, 74504, 91129]
            },
        ]
    };
    yl_yue.setOption(option);
})();
//    易联支付日调用量
(function () {
    var yl_ri = echarts.init(document.getElementById('yl_ri'));

    var date = ['9月18日',
        '9月19日',
        '9月20日',
        '9月21日',
        '9月22日',
        '9月23日',
        '9月24日',
        '9月25日',
        '9月26日',
        '9月27日',
        '9月28日',
        '9月29日',
        '9月30日',
        '10月1日',
        '10月2日',
        '10月3日',
        '10月4日',
        '10月5日',
        '10月6日',
        '10月7日',
        '10月8日',
        '10月9日',
        '10月10日',
        '10月11日',
        '10月12日',
        '10月13日',
        '10月14日',
        '10月15日',
        '10月16日',
        '10月17日'
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
            text: '日调用量'
        },
        legend: {
            top: 'bottom',
            data: ['意向']
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
                name: '当日调用量',
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(84, 137, 173)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(251, 253, 254)'
                        }, {
                            offset: 1,
                            color: 'rgb(84, 137, 173)'
                        }])
                    }
                },
                data: data
            }
        ]
    };
    yl_ri.setOption(option);
})();


//华道月调用量
(function () {
    var hd_yue = echarts.init(document.getElementById('hd_yue'));
    //    app.title = '坐标轴刻度与标签对齐';
    option = {
        title: {
            left: 'center',
            text: '月调用量'
// subtext: '数据来自网络'
        },
        color: ['#7dddd8'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                data: ['4月', '5月', '6月', '7月', '8月', '9月'],
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
                name: '直接访问',
                type: 'bar',
                barWidth: '40%',
                data: [6812, 5771, 3594, 27328, 2880, 2030]
            },
        ]
    };
    hd_yue.setOption(option);
})();
//    华道日调用量
(function () {
    var hd_ri = echarts.init(document.getElementById('hd_ri'));

    var date = ['9月18日',
        '9月19日',
        '9月20日',
        '9月21日',
        '9月22日',
        '9月23日',
        '9月24日',
        '9月25日',
        '9月26日',
        '9月27日',
        '9月28日',
        '9月29日',
        '9月30日',
        '10月1日',
        '10月2日',
        '10月3日',
        '10月4日',
        '10月5日',
        '10月6日',
        '10月7日',
        '10月8日',
        '10月9日',
        '10月10日',
        '10月11日',
        '10月12日',
        '10月13日',
        '10月14日',
        '10月15日',
        '10月16日',
        '10月17日'
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
            text: '日调用量'
        },
        legend: {
            top: 'bottom',
            data: ['意向']
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
                name: '当日调用量',
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(84, 137, 173)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(251, 253, 254)'
                        }, {
                            offset: 1,
                            color: 'rgb(84, 137, 173)'
                        }])
                    }
                },
                data: data
            }
        ]
    };
    hd_ri.setOption(option);
})();


//前海月调用量
(function () {
    var qh_yue = echarts.init(document.getElementById('qh_yue'));
    //    app.title = '坐标轴刻度与标签对齐';
    option = {
        title: {
            left: 'center',
            text: '月调用量'
// subtext: '数据来自网络'
        },
        color: ['#7dddd8'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                data: ['4月', '5月', '6月', '7月', '8月', '9月'],
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
                name: '直接访问',
                type: 'bar',
                barWidth: '40%',
                data: [532730, 877070, 834580, 898140, 1057900, 1370710]
            },
        ]
    };
    qh_yue.setOption(option);
})();
//    前海日调用量
(function () {
    var qh_ri = echarts.init(document.getElementById('qh_ri'));

    var date = ['9月18日',
        '9月19日',
        '9月20日',
        '9月21日',
        '9月22日',
        '9月23日',
        '9月24日',
        '9月25日',
        '9月26日',
        '9月27日',
        '9月28日',
        '9月29日',
        '9月30日',
        '10月1日',
        '10月2日',
        '10月3日',
        '10月4日',
        '10月5日',
        '10月6日',
        '10月7日',
        '10月8日',
        '10月9日',
        '10月10日',
        '10月11日',
        '10月12日',
        '10月13日',
        '10月14日',
        '10月15日',
        '10月16日',
        '10月17日'
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
            text: '日调用量'
        },
        legend: {
            top: 'bottom',
            data: ['意向']
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
                name: '当日调用量',
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(84, 137, 173)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(251, 253, 254)'
                        }, {
                            offset: 1,
                            color: 'rgb(84, 137, 173)'
                        }])
                    }
                },
                data: data
            }
        ]
    };
    qh_ri.setOption(option);
})();


//中诚信月调用量
(function () {
    var zc_yue = echarts.init(document.getElementById('zc_yue'));
    //    app.title = '坐标轴刻度与标签对齐';
    option = {
        title: {
            left: 'center',
            text: '月调用量'
// subtext: '数据来自网络'
        },
        color: ['#7dddd8'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                data: ['4月', '5月', '6月', '7月', '8月', '9月'],
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
                name: '直接访问',
                type: 'bar',
                barWidth: '40%',
                data: [26145, 27456, 8771, 16353, 24799, 13480]
            },
        ]
    };
    zc_yue.setOption(option);
})();
//    中诚信日调用量
(function () {
    var zc_ri = echarts.init(document.getElementById('zc_ri'));

    var date = ['9月18日',
        '9月19日',
        '9月20日',
        '9月21日',
        '9月22日',
        '9月23日',
        '9月24日',
        '9月25日',
        '9月26日',
        '9月27日',
        '9月28日',
        '9月29日',
        '9月30日',
        '10月1日',
        '10月2日',
        '10月3日',
        '10月4日',
        '10月5日',
        '10月6日',
        '10月7日',
        '10月8日',
        '10月9日',
        '10月10日',
        '10月11日',
        '10月12日',
        '10月13日',
        '10月14日',
        '10月15日',
        '10月16日',
        '10月17日'
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
            text: '日调用量'
        },
        legend: {
            top: 'bottom',
            data: ['意向']
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
                name: '当日调用量',
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(84, 137, 173)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(251, 253, 254)'
                        }, {
                            offset: 1,
                            color: 'rgb(84, 137, 173)'
                        }])
                    }
                },
                data: data
            }
        ]
    };
    zc_ri.setOption(option);
})();


//国政通月调用量
(function () {
    var gz_yue = echarts.init(document.getElementById('gz_yue'));
    //    app.title = '坐标轴刻度与标签对齐';
    option = {
        title: {
            left: 'center',
            text: '月调用量'
// subtext: '数据来自网络'
        },
        color: ['#7dddd8'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                data: ['4月', '5月', '6月', '7月', '8月', '9月'],
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
                name: '直接访问',
                type: 'bar',
                barWidth: '40%',
                data: [598620, 801200, 1098120, 2162610, 2971420, 3562600]
            },
        ]
    };
    gz_yue.setOption(option);
})();
//    国政通日调用量
(function () {
    var gz_ri = echarts.init(document.getElementById('gz_ri'));

    var date = ['9月18日',
        '9月19日',
        '9月20日',
        '9月21日',
        '9月22日',
        '9月23日',
        '9月24日',
        '9月25日',
        '9月26日',
        '9月27日',
        '9月28日',
        '9月29日',
        '9月30日',
        '10月1日',
        '10月2日',
        '10月3日',
        '10月4日',
        '10月5日',
        '10月6日',
        '10月7日',
        '10月8日',
        '10月9日',
        '10月10日',
        '10月11日',
        '10月12日',
        '10月13日',
        '10月14日',
        '10月15日',
        '10月16日',
        '10月17日'
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
            text: '日调用量'
        },
        legend: {
            top: 'bottom',
            data: ['意向']
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
                name: '当日调用量',
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(84, 137, 173)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(251, 253, 254)'
                        }, {
                            offset: 1,
                            color: 'rgb(84, 137, 173)'
                        }])
                    }
                },
                data: data
            }
        ]
    };
    gz_ri.setOption(option);
})();
//中海月调用量
(function () {
    var zh_yue = echarts.init(document.getElementById('zh_yue'));
    //    app.title = '坐标轴刻度与标签对齐';
    option = {
        title: {
            left: 'center',
            text: '月调用量'
// subtext: '数据来自网络'
        },
        color: ['#7dddd8'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                data: ['4月', '5月', '6月', '7月', '8月', '9月'],
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
                name: '直接访问',
                type: 'bar',
                barWidth: '40%',
                data: [1064360, 1667702, 2163200, 1548760, 1660876, 894593]
            },
        ]
    };
    zh_yue.setOption(option);
})();
//    中海日调用量
(function () {
    var zh_ri = echarts.init(document.getElementById('zh_ri'));

    var date = ['9月18日',
        '9月19日',
        '9月20日',
        '9月21日',
        '9月22日',
        '9月23日',
        '9月24日',
        '9月25日',
        '9月26日',
        '9月27日',
        '9月28日',
        '9月29日',
        '9月30日',
        '10月1日',
        '10月2日',
        '10月3日',
        '10月4日',
        '10月5日',
        '10月6日',
        '10月7日',
        '10月8日',
        '10月9日',
        '10月10日',
        '10月11日',
        '10月12日',
        '10月13日',
        '10月14日',
        '10月15日',
        '10月16日',
        '10月17日'
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
            text: '日调用量'
        },
        legend: {
            top: 'bottom',
            data: ['意向']
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
                name: '当日调用量',
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(84, 137, 173)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(251, 253, 254)'
                        }, {
                            offset: 1,
                            color: 'rgb(84, 137, 173)'
                        }])
                    }
                },
                data: data
            }
        ]
    };
    zh_ri.setOption(option);
})();




//华道模型
(function(){
    var hd_mx01 = echarts.init(document.getElementById('hd_mx01'));
    var hd_mx02 = echarts.init(document.getElementById('hd_mx02'));
    var hd_mx03 = echarts.init(document.getElementById('hd_mx03'));
    var hd_mx04 = echarts.init(document.getElementById('hd_mx04'));
//        app.title = '产品';
    option1 = {
        title:{
            text:"产品",
            x:"53%"
        },
        color:['#f39e4b','#6fb7c5','#505761','#887094','#75bead','#d44444'],
        legend: {
            orient: 'vertical',
            x: 'left',
//                y:'left',
            data:['合作意向','市场调研','需求分析','产品设计','产品原型','产品上线']
        },


        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '70%'],
                center:	['60%', '60%'],
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
                data:[
                    {value:1, name:'合作意向'},
                    {value:1, name:'市场调研'},
                    {value:1, name:'需求分析'},
                    {value:1, name:'产品设计'},
                    {value:1, name:'产品原型'},
                    {value:1, name:'产品上线'}
                ]
            }
        ]
    };
    option2 = {
        title:{
            text:"数据",
            x:"53%"
        },
        color:['#f39e4b','#6fb7c5','#505761','#887094','#75bead','#d44444'],
        legend: {
            orient: 'vertical',
            x: 'left',
//                y:'left',
            data:['确定数据','数据申请','数据导入','数据分析','数据统计','数据解析']
        },


        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '70%'],
                center:	['60%', '60%'],
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
                data:[
                    {value:1, name:'确定数据'},
                    {value:1, name:'数据申请'},
                    {value:1, name:'数据导入'},
                    {value:1, name:'数据分析'},
                    {value:1, name:'数据统计'},
                    {value:1, name:'数据解析'}
                ]
            }
        ]
    };
    option3 = {
        title:{
            text:"模型",
            x:"53%"
        },
        color:['#f39e4b','#6fb7c5','#505761','#887094','#75bead','#d44444'],
        legend: {
            orient: 'vertical',
            x: 'left',
//                y:'left',
            data:['搭建环境','安装工具','算法选取','参数调整','模型结果','模型确定']
        },


        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '70%'],
                center:	['60%', '60%'],
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
                data:[
                    {value:1, name:'搭建环境'},
                    {value:1, name:'安装工具'},
                    {value:1, name:'算法选取'},
                    {value:1, name:'参数调整'},
                    {value:1, name:'模型结果'},
                    {value:1, name:'模型确定'}
                ]
            }
        ]
    };
    option4 = {
        title:{
            text:"测试",
            x:"53%"
        },
        color:['#f39e4b','#6fb7c5','#505761','#887094','#75bead','#d44444'],
        legend: {
            orient: 'vertical',
            x: 'left',
//                y:'left',
            data:['测试环境','选取用户','用户分析','数据验证','内部测试','外部测试']
        },


        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '70%'],
                center:	['60%', '60%'],
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
                data:[
                    {value:1, name:'测试环境'},
                    {value:1, name:'选取用户'},
                    {value:1, name:'用户分析'},
                    {value:1, name:'数据验证'},
                    {value:1, name:'内部测试'},
                    {value:1, name:'外部测试'}
                ]
            }
        ]
    };
    hd_mx01.setOption(option1);
    hd_mx02.setOption(option2);
    hd_mx03.setOption(option3);
    hd_mx04.setOption(option4);
})()
//    网金社模型
var wj_mx01 = echarts.init(document.getElementById('wj_mx01'));
var wj_mx02 = echarts.init(document.getElementById('wj_mx02'));
var wj_mx03 = echarts.init(document.getElementById('wj_mx03'));
var wj_mx04 = echarts.init(document.getElementById('wj_mx04'));
//        app.title = '产品';
option1 = {
    title:{
        text:"产品",
        x:"53%"
    },
    color:['#f39e4b','#6fb7c5','#505761','#887094','#75bead','#eee'],
    legend: {
        orient: 'vertical',
        x: 'left',
//                y:'left',
        data:['合作意向','市场调研','需求分析','产品设计','产品原型','产品上线']
    },


    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            center:	['60%', '60%'],
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
            data:[
                {value:1, name:'合作意向'},
                {value:1, name:'市场调研'},
                {value:1, name:'需求分析'},
                {value:1, name:'产品设计'},
                {value:1, name:'产品原型'},
                {value:1, name:'产品上线'}
            ]
        }
    ]
};
option2 = {
    title:{
        text:"数据",
        x:"53%"
    },
    color:['#f39e4b','#6fb7c5','#505761','#887094','#75bead','#eee'],
    legend: {
        orient: 'vertical',
        x: 'left',
//                y:'left',
        data:['确定数据','数据申请','数据导入','数据分析','数据统计','数据解析']
    },


    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            center:	['60%', '60%'],
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
            data:[
                {value:1, name:'确定数据'},
                {value:1, name:'数据申请'},
                {value:1, name:'数据导入'},
                {value:1, name:'数据分析'},
                {value:1, name:'数据统计'},
                {value:1, name:'数据解析'}
            ]
        }
    ]
};
option3 = {
    title:{
        text:"模型",
        x:"53%"
    },
    color:['#f39e4b','#6fb7c5','#505761','#eee','#eee','#eee'],
    legend: {
        orient: 'vertical',
        x: 'left',
//                y:'left',
        data:['搭建环境','安装工具','算法选取','参数调整','模型结果','模型确定']
    },


    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            center:	['60%', '60%'],
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
            data:[
                {value:1, name:'搭建环境'},
                {value:1, name:'安装工具'},
                {value:1, name:'算法选取'},
                {value:1, name:'参数调整'},
                {value:1, name:'模型结果'},
                {value:1, name:'模型确定'}
            ]
        }
    ]
};
option4 = {
    title:{
        text:"测试",
        x:"53%"
    },
    color:['#f39e4b','#eee','#eee','#eee','#eee','#eee'],
    legend: {
        orient: 'vertical',
        x: 'left',
//                y:'left',
        data:['测试环境','选取用户','用户分析','数据验证','内部测试','外部测试']
    },


    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            center:	['60%', '60%'],
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
            data:[
                {value:1, name:'测试环境'},
                {value:1, name:'选取用户'},
                {value:1, name:'用户分析'},
                {value:1, name:'数据验证'},
                {value:1, name:'内部测试'},
                {value:1, name:'外部测试'}
            ]
        }
    ]
};
wj_mx01.setOption(option1);
wj_mx02.setOption(option2);
wj_mx03.setOption(option3);
wj_mx04.setOption(option4);




//    民生银行
var ms_mx01 = echarts.init(document.getElementById('ms_mx01'));
var ms_mx02 = echarts.init(document.getElementById('ms_mx02'));
var ms_mx03 = echarts.init(document.getElementById('ms_mx03'));
var ms_mx04 = echarts.init(document.getElementById('ms_mx04'));
//        app.title = '产品';
option01 = {
    title:{
        text:"产品",
        x:"53%"
    },
    color:['#f39e4b','#6fb7c5','#eee','#eee','#eee','#eee'],
    legend: {
        orient: 'vertical',
        x: 'left',
//                y:'left',
        data:['合作意向','市场调研','需求分析','产品设计','产品原型','产品上线']
    },


    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            center:	['60%', '60%'],
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
            data:[
                {value:1, name:'合作意向'},
                {value:1, name:'市场调研'},
                {value:1, name:'需求分析'},
                {value:1, name:'产品设计'},
                {value:1, name:'产品原型'},
                {value:1, name:'产品上线'}
            ]
        }
    ]
};
option02 = {
    title:{
        text:"数据",
        x:"53%"
    },
    color:['#f39e4b','#6fb7c5','#505761','#887094','#75bead','#eee'],
    legend: {
        orient: 'vertical',
        x: 'left',
//                y:'left',
        data:['确定数据','数据申请','数据导入','数据分析','数据统计','数据解析']
    },


    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            center:	['60%', '60%'],
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
            data:[
                {value:1, name:'确定数据'},
                {value:1, name:'数据申请'},
                {value:1, name:'数据导入'},
                {value:1, name:'数据分析'},
                {value:1, name:'数据统计'},
                {value:1, name:'数据解析'}
            ]
        }
    ]
};
option03 = {
    title:{
        text:"模型",
        x:"53%"
    },
    color:['#f39e4b','#6fb7c5','#eee','#eee','#eee','#eee'],
    legend: {
        orient: 'vertical',
        x: 'left',
//                y:'left',
        data:['搭建环境','安装工具','算法选取','参数调整','模型结果','模型确定']
    },

    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            center:	['60%', '60%'],
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
            data:[
                {value:1, name:'搭建环境'},
                {value:1, name:'安装工具'},
                {value:1, name:'算法选取'},
                {value:1, name:'参数调整'},
                {value:1, name:'模型结果'},
                {value:1, name:'模型确定'}
            ]
        }
    ]
};
option04 = {
    title:{
        text:"测试",
        x:"53%"
    },
    color:['#f39e4b','#6fb7c5','#eee','#eee','#eee','#eee'],
    legend: {
        orient: 'vertical',
        x: 'left',
//                y:'left',
        data:['测试环境','选取用户','用户分析','数据验证','内部测试','外部测试']
    },


    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            center:	['60%', '60%'],
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
            data:[
                {value:1, name:'测试环境'},
                {value:1, name:'选取用户'},
                {value:1, name:'用户分析'},
                {value:1, name:'数据验证'},
                {value:1, name:'内部测试'},
                {value:1, name:'外部测试'}
            ]
        }
    ]
};
ms_mx01.setOption(option01);
ms_mx02.setOption(option02);
ms_mx03.setOption(option03);
ms_mx04.setOption(option04);


//    普林科技
var pl_mx01 = echarts.init(document.getElementById('pl_mx01'));
var pl_mx02 = echarts.init(document.getElementById('pl_mx02'));
var pl_mx03 = echarts.init(document.getElementById('pl_mx03'));
var pl_mx04 = echarts.init(document.getElementById('pl_mx04'));
//        app.title = '产品';
option001 = {
    title:{
        text:"产品",
        x:"53%"
    },
    color:['#f39e4b','#6fb7c5','#505761','#887094','#eee','#eee'],
    legend: {
        orient: 'vertical',
        x: 'left',
//                y:'left',
        data:['合作意向','市场调研','需求分析','产品设计','产品原型','产品上线']
    },


    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            center:	['60%', '60%'],
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
            data:[
                {value:1, name:'合作意向'},
                {value:1, name:'市场调研'},
                {value:1, name:'需求分析'},
                {value:1, name:'产品设计'},
                {value:1, name:'产品原型'},
                {value:1, name:'产品上线'}
            ]
        }
    ]
};
option002 = {
    title:{
        text:"数据",
        x:"53%"
    },
    color:['#f39e4b','#6fb7c5','#505761','#887094','#eee','#eee'],
    legend: {
        orient: 'vertical',
        x: 'left',
//                y:'left',
        data:['确定数据','数据申请','数据导入','数据分析','数据统计','数据解析']
    },


    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            center:	['60%', '60%'],
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
            data:[
                {value:1, name:'确定数据'},
                {value:1, name:'数据申请'},
                {value:1, name:'数据导入'},
                {value:1, name:'数据分析'},
                {value:1, name:'数据统计'},
                {value:1, name:'数据解析'}
            ]
        }
    ]
};
option003 = {
    title:{
        text:"模型",
        x:"53%"
    },
    color:['#f39e4b','#6fb7c5','#eee','#eee','#eee','#eee'],
    legend: {
        orient: 'vertical',
        x: 'left',
//                y:'left',
        data:['搭建环境','安装工具','算法选取','参数调整','模型结果','模型确定']
    },


    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            center:	['60%', '60%'],
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
            data:[
                {value:1, name:'搭建环境'},
                {value:1, name:'安装工具'},
                {value:1, name:'算法选取'},
                {value:1, name:'参数调整'},
                {value:1, name:'模型结果'},
                {value:1, name:'模型确定'}
            ]
        }
    ]
};
option004 = {
    title:{
        text:"测试",
        x:"53%"
    },
    color:['#f39e4b','#6fb7c5','#eee','#eee','#eee','#eee'],
    legend: {
        orient: 'vertical',
        x: 'left',
//                y:'left',
        data:['测试环境','选取用户','用户分析','数据验证','内部测试','外部测试']
    },


    series: [
        {
            //name:false,
            type:'pie',
            radius: ['50%', '70%'],
            center:	['60%', '60%'],
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
            data:[
                {value:1, name:'测试环境'},
                {value:1, name:'选取用户'},
                {value:1, name:'用户分析'},
                {value:1, name:'数据验证'},
                {value:1, name:'内部测试'},
                {value:1, name:'外部测试'}
            ]
        }
    ]
};
pl_mx01.setOption(option001);
pl_mx02.setOption(option002);
pl_mx03.setOption(option003);
pl_mx04.setOption(option004);




$(".images-scroll").hover(function(){
    $(".left-scroll").css("display","block");
    $(".right-scroll").css("display","block");
},function(){
    $(".left-scroll").css("display","none");
    $(".right-scroll").css("display","none");
});