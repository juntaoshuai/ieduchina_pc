$(function(){
	$(".intere-tabcon li").click(function(){
		if(!$(this).hasClass("active") && $(".selector-list li").length<3){
		  $(this).addClass("active");
		$("<li>"+$(this).text()+"<span class='cancel'></span></li>").appendTo($(".selector-list ul"));	
		$(".selector-list").show();
			
		}
		
		
	});
	
	
	$(".selector-list").on('click','.cancel',function(){
	  if($(".selector-list li").length==1){
	  	 $(".selector-list").hide();
	  }else{
	  	$(".selector-list").show();
	  }
		var text=$(this).closest("li").text();
		
		$(".intere-tabcon li:contains("+text+")").removeClass("active");
		$(this).closest("li").remove();
		
	});
	
	
	//占位符
function placeholder(input){
	input.on("input propertychange",function(){
		//alert($(input).val())
		if($(this).val() != ""){
			$(this).next().hide();
		}else{
			$(this).next().show();
		}
	})
}

placeholder($(".regform :text"));
placeholder($(".regform :password"));
	
	$.job1001EmailTips({
		'account':{className:'email-tips-list'},
		 
	});
	
	
});
