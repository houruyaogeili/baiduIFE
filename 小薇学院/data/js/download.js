$(function() {
	/*	var dom = $('#download_title').find('input[type=checkbox]'); //获取所有的checkbox选项
		dom.on('click', function(e) {
			e.stopPropagation();
			var status = this.checked;
			var id = $(this).attr('id');
			switch(id) {
				case "userimage":
					var check = $('li.download_one').find('input[type=checkbox]');
					for(var i = 0, length = check.length; i < length; i++) {
						check[i].checked = status;
					}
					break;
				case "useractive":
					var check = $('li.download_two #userimage');
					check[0].checked = status;
					break;
				case "appanalyze":
					var check = $('li.download_two #useractive');
					check[0].checked = status;
					break;
				default:
					break;
			}
		})*/

/*	$("#userimage").click(function() {
	var inputs = $("input[name='userimage']");
	var checkStates = this.checked;
		for(var i=0;i<inputs.length;i++){
			inputs[i].checked=checkStates;
		}
//		if(this.checked) {
//			for(var i=0;i<inputs.length;i++){
//			inputs[i].checked=true;
//			}	
//		} else {
//			for(var i=0;i<inputs.length;i++){
//			inputs[i].checked=false;
//			}
//		}
	
	})*/
	
	
	$(".limitText").on('click',function(e){
		e.stopPropagation();
		$(this).parent().siblings().children('ul').slideUp(800);
		$(this).siblings().slideToggle(800);
	})
	
	$('.text').on('click',function(e){
		e.stopPropagation();
		$(this).children('span').toggleClass('show');
	})
	
//	单选打勾
	var selectPic = function(initObj,targetObj){
		if(typeof(initObj)!="undefined" && typeof(targetObj)!="undefined"){
			initObj.on('click',function(event){
				var e = event || window.event;
				e.stopPropagation?e.stopPropagation():e.cancelBubble=true;
				var val = $(this).attr('value');
				var oprationObj = targetObj.find('p[value='+ val +'] span');
				oprationObj.toggleClass('show');
				$(this).toggleClass('selecedLi');
				
			})
		}
	}
	
	var initObj = $('.limitSelect li');
	var targetObj = $('.downloadList');
	selectPic(initObj,targetObj);
	
//	全选打勾
	/*var selectAll = function(initObj2,targetObj2){
		if(typeof(initObj2)!="undefined" && typeof(targetObj2)!="undefined"){
			var num = 0;
			initObj2.on('click',function(event){
				num++;
				var e = event || window.event;
				e.stopPropagation?e.stopPropagation():e.cancelBubble=true;
				var Name = $(this).attr('name');
				var oprationObj2 = targetObj2.find('p[name='+ Name +'] span');
				if(num%2){
					oprationObj2.addClass('show');
					$(this).find('.subliList').addClass('selecedLi');
				}else{
					oprationObj2.removeClass('show');
					$(this).find('.subliList').removeClass('selecedLi');
				}
			})
		}
	}
	var initObj2 = $('.download-selects');
	var targetObj2 = $('.downloadList');
	selectAll(initObj2,targetObj2);*/
	
	/*function checkPic(target1,target2,values){
		$("."+target1).on('click',function(e){
			e.stopPropagation();
			$(this).toggleClass('active');
			if ($("."+target1[value=values]).hasClass('active')) {
				$(target2[data=values]).addClass('select-pic');
			} else{
				$(target2[data=values]).removeClass('select-pic');
			}
		})
	}
	checkPic("limitSelect",".down-type p","downloadSex");*/
	
	
	$('.down-type p').on('click',function(e){
		$(this).toggleClass('select-pic');
	})
	
	
//	全选 /取消全选	
	function checkAll(id,name){
		$("#"+id).click(function(e){
			e.stopPropagation();
			var inputs = $("input[name='"+name+"']");
			var checkStates = this.checked;
			for(var i=0;i<inputs.length;i++){
				inputs[i].checked=checkStates;
			}
		})
	}
	
	checkAll("userimage","userimage");
	checkAll("useractive","useractive");
	checkAll("appanalyze","appanalyze");
})