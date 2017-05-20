$(function(){
			$(".navbar li").click(function(e){
				var ulcss = $(this).find("ul");
				$(this).siblings("li").find("ul").hide();
				ulcss.toggle();
				$(document).one("click", function(){
				       $(".navbar li ul").hide();
				});
				e.stopPropagation();
			});
			 //点击收缩  
          	$(".main-item").click(function(){
          		$(".main-select").toggle(800);
          	});
          	$(".limit-condition").click(function(){
          		$(".limit-select").toggle(800);
          	});
	        
});

		selection();
		function selection(){
			$('.text').on('click',function(e){
				e.stopPropagation();
				$(this).next().slideToggle();
			});
			$('.list li').on('click',function(e){
				e.stopPropagation();
				$(this).parent().siblings('p').text($(this).attr('value'));
			})
		};
//级联
var arr_province=["全部","苹果","小米","华为","魅族","三星","维沃","欧珀","乐视","酷派","金立"];
var arr_city=[
    ["iPhone 6","iPhone 6 Plus","iPhone 6s","iPhone SE","iPhone 5s","iPhone 6s Plus","iPhone 5","iPhone 4s","iPhone 4","红米Note3","小米4","小米Note","小米3","红米Note","小米4i","红米2","小米2s","红米Note2","红米Note2","红米3","荣耀6","华为Mate7","华为Mate8","荣耀畅玩4X","荣耀6 Plus","华为P8","荣耀畅玩4C","荣耀4A","荣耀7","荣耀畅玩5X","魅蓝Note2","魅蓝Note3","魅族MX5","魅蓝Note","魅族MX4","魅族MX5 Pro","魅族MX4 Pro","魅族MX6","魅蓝2","魅蓝metal","三星S7","三星Note3","三星S6 Edge","三星S5","三星A7","三星S6 Edge+","三星Note4","三星S6","三星S4","三星A8","vivo X5 Pro","vivo X6","vivo X6 Plus","vivo Y51A","vivo Y35A","vivo XPLAY 5","vivo X3S","vivo X3F","vivo Y613","vivo Y627","OPPO R7s","OPPO R9","OPPO R7 Plus","OPPO R1c","OPPO R9 Plus","OPPO R1s","OPPO A31","OPPO Find7","OPPO A30","OPPO R830","乐1s","乐2","乐1","乐1 Pro","乐max","乐max2","乐max Pro","大神F2","大神Note3","奇酷青春版","锋尚","大神F2 Plus","锋尚 Pro","酷派K1","大神F1 Plus","锋尚Max","锋尚Air","金立 M6","金立 S7","金立金刚","金立 M5","金立 F103","金立 M5 Plus","GIONEE F103s","金立 S5","金立 S7 mini","金立天鉴","终端机型"],
    ["iPhone 6","iPhone 6 Plus","iPhone 6s","iPhone SE","iPhone 5s","iPhone 6s Plus","iPhone 5","iPhone 4s","iPhone 4","终端机型"],
    ["红米Note3","小米4","小米Note","小米3","红米Note","小米4i","红米2","小米2s","红米Note2","红米Note2","红米3","终端机型"],
    ["荣耀6","华为Mate7","华为Mate8","荣耀畅玩4X","荣耀6 Plus","华为P8","荣耀畅玩4C","荣耀4A","荣耀7","荣耀畅玩5X","终端机型"],
    ["魅蓝Note2","魅蓝Note3","魅族MX5","魅蓝Note","魅族MX4","魅族MX5 Pro","魅族MX4 Pro","魅族MX6","魅蓝2","魅蓝metal","终端机型"],
    ["三星S7","三星Note3","三星S6 Edge","三星S5","三星A7","三星S6 Edge+","三星Note4","三星S6","三星S4","三星A8","终端机型"],
    ["vivo X5 Pro","vivo X6","vivo X6 Plus","vivo Y51A","vivo Y35A","vivo XPLAY 5","vivo X3S","vivo X3F","vivo Y613","vivo Y627","终端机型"],
    ["OPPO R7s","OPPO R9","OPPO R7 Plus","OPPO R1c","OPPO R9 Plus","OPPO R1s","OPPO A31","OPPO Find7","OPPO A30","OPPO R830","终端机型"],
    ["乐1s","乐2","乐1","乐1 Pro","乐max","乐max2","乐max Pro","终端机型"],
    ["大神F2","大神Note3","奇酷青春版","锋尚","大神F2 Plus","锋尚 Pro","酷派K1","大神F1 Plus","锋尚Max","锋尚Air","终端机型"],
    ["金立 M6","金立 S7","金立金刚","金立 M5","金立 F103","金立 M5 Plus","GIONEE F103s","金立 S5","金立 S7 mini","金立天鉴","终端机型"]
];
function select_change(num)
    {
        var city=document.form1.city;
        city.length=0;
        city.length=arr_city[num-1].length;
        for(var i=0; i<arr_city[num-1].length;i++)
        {
            city.options[i].text=arr_city[num-1][i];
            city.options[i].value=arr_city[num-1][i];
            if(city.options[i].value == "终端机型"){
            	city.options[i].disabled=true;
            }
        }
    }