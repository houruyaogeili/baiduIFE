function appDetails(data) {
	if(typeof data != 'undefined') {
		//创建排行
		var target1 = $("#appBodyOne").empty();
		var target2 = $("#appBodyTwo").empty();
		var flag = 0;
		for(var i = 0, length = data.length; i < length; i++) {
/*			var html = '<li class="app_list"><span>' + (i + 1) + '</span><img src="' + data[i]['src'] + '" alt="" /><b>' + data[i]['download'] + '</b>	</li>';
			var li = $(html).attr('data-value', data[i]['details'] || "");
			i < 8 ? li.appendTo(target1) : li.appendTo(target2);*/
//			var li = '<li class="app_list"><span> '+ (i + 1) +' </span><img src="'+ data[i]['src'] +'" /><b> ' + data[i]['download'] + ' </b><img src="' + data[i]['details'] +'" style="display:none" /></li>';
			
			var li=$('<li></li>').addClass('app_list').attr({
				'data-value':data[i]['details']
			});
			var span = $('<span>').appendTo(li).text(i+1);
			var img=$('<img />').appendTo(li).attr({
				'src': data[i]['src']
			});
			var b = $('<b>').appendTo(li).text(data[i]['download']);
			var img2=$('<img>').appendTo(li).addClass('detailsimg').attr({
				'src': data[i]['details'],
				'style': 'display:none;'
			});
			i<8 ? li.appendTo(target1) : li.appendTo(target2); //超过8条记录就分到右边一栏
			
		}
		//显示隐藏下载量图片
		$(".app_list").on('click',function(e){
			e.stopPropagation();
			$(this).children('.detailsimg').toggle();
		})
	}
}