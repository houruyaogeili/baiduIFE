$(function() {

	$(document).on('click', function(e) { //用于点击文档区隐藏app的详情图
		e.stopPropagation();
		$('img.detailsimg').css('display', 'none');
	})

	appDetails(appObj.totalApp); //默认创建全部下载量排行榜
	//app下拉选项点击事件
	var appTypeSelect = $('#appTypeSelect'); //app下拉选项
	var selectValue = appTypeSelect.val(); //用于判断选中的值与上次是否发生变化
	if(typeof appTypeSelect != 'undefined') {
		appTypeSelect.on('click', function(e) {
			e.stopPropagation();
/*			
//			select option标签写法
			var value = $(this).val();
			if(selectValue != value) {
				appDetails(appObj[value]); //创建选中app类型下载量排行榜
				selectValue = value;
			}*/
			
//			ul li标签写法
			var target = e.target;
			if(target.nodeName.toLowerCase()=='li'){
				var value = $(target).attr('value');
				$(target).siblings().removeClass('selected');
				$(target).addClass('selected');
				if(selectValue !=value){
					appDetails(appObj[value]);
					selectValue = value;
					
				}
			}
		})
	}
})