// JavaScript Document
$(function(){

//登录
  $("#iedu-header .login").click(function() {	
	$(window.parent.document).find("#top-login-box").show();
  });
  
  $("#top-login-box .login_close").click(function() {
    $(this).parent().hide();
  });
 
 //文章页登录功能
$(".art_login .alogin").click(function(ev){
    if(navigator.userAgent.indexOf("MSIE")>0){
	   $(window.parent.document).find("html").animate({"scrollTop":0},300);
	}else{
	   $(window.parent.document).find("html,body").animate({"scrollTop":0},300);
	}
	  $(window.parent.document).find("#top-login-box").show();
	  ev.preventDefault();
  });
		
//IE中链接虚线框
$('#iedu-header .login').bind('focus', function(){   
    if(this.blur){ //如果支持 this.blur   
        this.blur();   
    }   
});
	

$("#iedu-mainNav ul li").hover(function(){
	$(this).addClass("active");
	},function(){
		$(this).removeClass("active");
 }); 
	
	$("#iedu-nav ul li").hover(function(){
		$(this).addClass("active");
		},function(){
			$(this).removeClass("active");
     }); 
//清空文本框内容
$("#iedu-search").find(".txt").focus(function(){
	if($(this).val()=="输入搜索内容"){
		 $(this).val("");
	   }
	})
	.blur(function(){
		if($(this).val()==""){
		 $(this).val("输入搜索内容");
	   }
});

	$("#searchbtn").click(function(){
		var $inputtxt=$(this).siblings(".txt");
       if($inputtxt.val()=="输入搜索内容"){
		   $inputtxt.focus();
	   }
	});

	$("#search").submit(function(){
		var  txt=$(this).find(".txt");
		if(txt.val()==""){
			return false;
		}
	});


jQuery.clearTxt=function(obj){
  	$(obj).focus(function(){
	if($(this).val()=="请输入职位名称"){
		 $(this).val("");
	   }
	})
	.blur(function(){
		if($(this).val()==""){
		 $(this).val("请输入职位名称");
	   }
    });
	}

$.clearTxt(".job-search .job-name");
//公告文字上下滚动 
(function(){
	var wordh=32,
	    timer=null;	
		
	function noticeMarquee(){
		$(".todayfocus ul").animate({'margin-top':-wordh},500,function(){
        $(".todayfocus ul").css('margin-top',0);
		$(".todayfocus ul li:first").appendTo($(".todayfocus ul"));
		
		});
		
		}
    
	function autoplay(){
		timer = setInterval(function () {
				noticeMarquee();
			}, 3000);
		
		}
		
	autoplay();
	$(".todayfocus ul li").hover(function(){
		clearInterval(timer);
		},function(){
		autoplay();
		
		});
	
	})();
	(function(){
		//banner
var $banner=$("#iedu-banner1"),
 $banerli=$banner.find("li"),
 $playSpan=$banner.find(".playbar span"),
 $bannerP=$banner.find(".text p"),
 index = 1;
 len =$banerli.length;
 $banner.find("li:not(:first)").hide();


function show() {
    $banerli.eq(index).fadeIn(1000).siblings().fadeOut(1000);
	$playSpan.eq(index).addClass("active").siblings().removeClass("active");
	$bannerP.eq(index).show().siblings().hide();
	
    index++;
    if (index > len - 1) {
        index = 0;
    }
}
var timer = setInterval(show, 4000);
$banner.hover(function() {
    clearInterval(timer);

}, function() {
    timer = setInterval(show, 4000);
});

$playSpan.hover(function(){
	index=$(this).index();
	show();
	
	});
})();

//tab选项卡
jQuery.tab=function(obj,shijian){
  $(obj).find(".tab-more").attr("href",$(obj).find(".tabs li:eq(0)").find("a").attr("href"));
   $(obj).find(".tabs li:not(:last)").on(shijian,function(){
	  var index=$(this).index();
	  var link=$(this).find("a").attr("href");
	  $(obj).find(".tab-more").attr("href",link);
	  $(this).addClass("active").siblings().removeClass("active");
	  $(obj).find(".tabs-con").eq(index).show().siblings(".tabs-con").hide();
	   
	   });
	
	}	

$.tab("#iedu-tabs1","hover");
$.tab("#iedu-tabs2","hover");	
$.tab("#iedu-tabs3","hover");
$.tab("#iedu-tabs4","hover");
$.tab("#iedu-tabs5","hover");	
$.tab("#iedu-tabs6","hover");	
$.tab("#iedu-tabs7","hover");	
$.tab("#iedu-tabs8","hover");	
$.tab("#iedu-tabs9","hover");	
$.tab("#iedu-tabs10","hover");	
$.tab("#iedu-tabs11","hover");
$.tab("#iedu-tabs12","hover");	
$.tab("#iedu-tabs13","hover");			
	
 $(".tabs3 li").hover(function(){
	  var index=$(this).index();
	    $(this).addClass("active").siblings().removeClass("active");
	  $(".tabs-con1").eq(index).show().siblings(".tabs-con1").hide();
	 
	 });
	

	
/*推荐处图片滚动*/
 (function(){ 
 var $imgscroll = $(".img-scroll"),
	 $next=$imgscroll.find(".iedu-next"),
	 $prev=$imgscroll.find(".iedu-prev"),
	 $ul=$imgscroll.find("ul"),
	 w = $imgscroll.find("li").width(),
	 scrollTimer=null;
	
  $imgscroll.hover(function(){
     clearInterval(scrollTimer);
   },function(){
    scrollTimer = setInterval(function(){
       scrollNews($imgscroll);
     }, 5000 );

  }).trigger("mouseleave");
 
  $next.click(function(){
	  if($ul.is(":animated")) return;
	   scrollNews( $imgscroll ); 
	});
	  
  $prev.click(function(){
	   if($ul.is(":animated")) return;
	   $imgscroll.find("li:last").prependTo($ul);	 
	   $ul.css('marginLeft',-w).animate({'marginLeft':0},500);
   
	});
	
function scrollNews(obj){
   var $self = obj.find("ul"); 
   $self.animate({ "marginLeft" : -w +"px" }, 500 , function(){ 
         $self.css({marginLeft:0}).find("li:first").appendTo($self);
  })
}
 })();
//选择工作地区下拉列表
$(".job-search").on('click','.district',function(){
	$(this).find("ul").show();
})
$(".district").on('mouseleave',function(){
	$(this).find("ul").hide();
 });	 
$(".district").on('mouseenter',"li",function(){
	$(this).addClass("active").siblings().removeClass("active");
	
	})
$(".district").find("li").click(function(ev){
	var index=$(this).index();
  	if(index>=1){
	  	$(".dist").val($(this).html());	
	  }else{
		  $(".dist").val("").focus();
		 }
	$(this).parent().hide();
	ev.stopPropagation();
 });
 
 $(".dist").keydown(function(){
	 if($(this).val()==this.defaultValue){
		 $(this).val("");
	  }
 }).keyup(function(){
	 if($(this).val()==""){
		 $(this).val(this.defaultValue);
	  }
	 
	 });


	
//职位详情固定		  
(function(){
 if($("#js-fix").length){
   var top= $("#js-fix").offset().top;	 
    $(window).scroll(function(){
		  if($(this).scrollTop()>=top){
			   $("#js-fix").addClass("fix").width($(window).width()).css({"border-top":"2px solid #cb1719" });			   
			 }else{
                $("#js-fix").removeClass("fix").width(1000).css({"border-top":"none"});
		      }
		  });
 }
	})();		

//简历投递成功的弹窗
/*$(".s-list .send-resume").click(function(ev){
	ev.preventDefault();
	//页面层
layer.open({
        type:1,
        area: ['444px', '240px'],
		title:['投递提示','background:#27aec2;color:#fff; font-size:14px;font-weight:bold;'],
        shadeClose: true, //点击遮罩关闭
		skin: 'layui-layer-iedu',
		move: false,
		
        content: '<div style="font:bold 14px/36px Simsun;color:#464646; text-align:center;padding:38px 0 0 0;">恭喜，您已投递成功！<br>企业已成功收到您的求职简历。</div>',
		btn:['关闭'],
		yes: function(index){
			layer.closeAll();
			}
    });

	});	*/
	
	$("#iedu-nav li:eq(2)").hover(function(){
       			$(this).find(".moreAbroad-list").show().end().find(".more-abroad").text("德国").attr("href",'/abroad/germany');
       		},function(){
       		    $(this).find(".moreAbroad-list").hide().end().find(".more-abroad").text("更多").attr("href",'/abroad');

       		});
});