$(function(){
	$('.btn_submit').click(function(){
		var rs = true;
		rs = check_text('companyname');
		if(rs!=true){ return false; }
		
		rs = check_max_len('companyname',20);
		if(rs!=true){ return false; }
		
		rs = check_text('name');
		if(rs!=true){ return false; }
		
		rs = check_max_len('name',20);
		if(rs!=true){ return false; }
		
		rs = check_text('contacts');
		if(rs!=true){ return false; }
		
		rs = check_tel('contacts');
		if(rs!=true){ return false; }
		
		rs = check_text('email');
		if(rs!=true){ return false; }
		
		rs = check_max_len('email',50);
		if(rs!=true){ return false; }
		
		rs = check_email('email');
		if(rs!=true){ return false; }
		
		rs = check_text('notes');
		if(rs!=true){ return false; }
		
		rs = check_max_len('notes',500);
		if(rs!=true){ return false; }
		
		//表单验证通过，可以提交表单了
		var url = $('#update-card-form').attr('action');
		var form_data = $('#update-card-form').serialize(); 
		$.post(url,form_data,function(data){
			if(data==1 || data=='1'){
				layer.msg('信息提交成功，5秒钟后自动刷新当前页面', {
					icon: 1,
					time: 5000,
					shade: [0.8, '#393D49'],
					offset: '45%',
					end: function(index){
						location.reload();//刷新
					}
				});
			}else if(data==-1 || data=='-1'){
				var mobile = $('#mobile').val();
				layer.msg('请按要求填写表单，5秒钟后将自动关闭...</div>', {
					icon: 2,
					time: 5000,
					shade: [0.8, '#393D49'],
					offset: '45%'
				});
			}else{
				layer.msg('信息提交失败，5秒钟后自动关闭该提示', {
					icon: 2,
					time: 5000,
					shade: [0.8, '#393D49'],
					offset: '45%'
				});
			}
		});
	});
	
	$('.btn_resume_submit').click(function(){
        var rs = true;
		rs = check_text('name');
		if(rs!=true){ return false; }
		
		rs = check_text('job');
		if(rs!=true){ return false; }
		
		rs = check_text('gz_year');
		if(rs!=true){ return false; }
		
		
		
		rs = check_text('mobile');
		if(rs!=true){ return false; }
		
		rs = check_tel('mobile');
		if(rs!=true){ return false; }
		
		rs = check_text('email');
		if(rs!=true){ return false; }
		
		rs = check_max_len('email');
		if(rs!=true){ return false; }
		
		rs = check_email('email');
		if(rs!=true){ return false; }
		
		//表单验证通过，可以提交表单了
		var url = $('#update-card-form').attr('action');
		var form_data = $('#update-card-form').serialize(); 
		$.post(url,form_data,function(data){
			if(data==1 || data=='1'){
				layer.msg('信息提交成功，5秒钟后自动刷新当前页面', {
					icon: 1,
					time: 5000,
					shade: [0.8, '#393D49'],
					offset: '45%',
					end: function(index){
						location.reload();//刷新
					}
				});
			}else if(data==-2 || data=='-2'){
				var mobile = $('#mobile').val();
				layer.msg('<div style="line-height:30px;">与手机号码 '+mobile+' 相关简历已存在，请勿再次提交！<br/>可拨打0755-86309669与猎头顾问联系，5秒钟后将自动关闭...</div>', {
					icon: 2,
					time: 5000,
					area: ['500px', '150px'],
					shade: [0.8, '#393D49']
				});
			}else{
				layer.msg('信息提交失败，5秒钟后自动关闭该提示', {
					icon: 2,
					time: 5000,
					shade: [0.8, '#393D49'],
					offset: '45%'
				});
			}
		});
	});
});

//只验证input，type=text的表单
function check_text(id){
	var $id = '#' + id;//表单的jquery对象
	var v = $.trim($($id).val());//表单的值
	var m = $($id).attr('data-required');//空值提示
	if(v==undefined || v==''){
		//layer插件(提示信息,ID或class,[信息显示的位置,信息的颜色])
		layer.tips(m, $id, {tips: [2, '#78BA32']});
		return false;
	}else{ return true; }
}

//只验证表单最大长度
function check_max_len(id,len){
	var $id = '#' + id;//表单的jquery对象
	var v = $.trim($($id).val());//表单的值
	var m = $($id).attr('data-max-len');//提示
	if(v.length>len){
		//layer插件(提示信息,ID或class,[信息显示的位置,信息的颜色])
		layer.tips(m, $id, {tips: [2, '#78BA32']});
		return false;
	}else{ return true; }
}

//只验证邮箱格式
function check_email(id){
	var $id = '#' + id;//表单的jquery对象
	var v = $.trim($($id).val());//表单的值
	var m = $($id).attr('data-email');//提示
	var reg = /^[A-Za-z0-9-_\.]+\@([A-Za-z0-9-_]+\.)+[A-Za-z0-9]{2,6}$/;
	if(!reg.test(v)){
		//layer插件(提示信息,ID或class,[信息显示的位置,信息的颜色])
		layer.tips(m, $id, {tips: [2, '#78BA32']});
		return false;
	}else{ return true; }
}

//只验证手机格式
function check_tel(id){
	var $id = '#' + id;//表单的jquery对象
	var v = $.trim($($id).val());//表单的值
	var m = $($id).attr('data-tel');//提示
	var reg=/^(1[358]\d{9})|(0\d{2,3}-\d{7,8})$/
	//var reg=/^1[358]\d{9}$/
	if(!reg.test(v)){
		//layer插件(提示信息,ID或class,[信息显示的位置,信息的颜色])
		layer.tips(m, $id, {tips: [2, '#78BA32']});
		return false;
	}else{ return true; }
}

/*ajax异步上传文件*/
//function uploadfile(k){
//	alert("come");
//	var action = $('#ID_POS'+k+'_FILE').attr('data-action');
//	new AjaxUpload( $('#ID_POS'+k+'_FILE'), {
//		action: action, 
//		name: 'file',
//		responseType: 'json',
//		onSubmit : function(file, ext) {
//			this.disable();
//			$('#ID_POS'+k+'_FILE_SHOW').html('正在上传文件...');
//			
//		} ,onComplete: function(file, json){
//			
//			this.enable();
//			if(json.result=='0' || json.result==0) {
//				$('#ID_POS'+k+'_FILE_SHOW').html(json.message);
//			}else{
//				$('#ID_POS'+k+'_FILE_SHOW').show();//显示提示信息
//				$('#ID_POS'+k+'_FILE_VALUE').val(json.id);//文件ID
//				$('#ID_POS'+k+'_FILE_SHOW').html('文件已上传完成');
//			}
//		}
//	});
//};



function uploadfile(k){
	 $.ajax({
    async: false,
    type: "GET",
    dataType: 'jsonp',
    jsonp: 'callback',
    jsonpCallback: 'callbackfunction',
    url: "http://www.jobht.com/form-data.html?type=hosting_resume_file",
    data: "",
    timeout: 3000,
    contentType: "application/json;utf-8",
    success: function(msg) {
      
	  
	  
	  
	  
	  var action = $('#ID_POS'+k+'_FILE').attr('data-action');
	new AjaxUpload( $('#ID_POS'+k+'_FILE'), {
		action: action, 
		name: 'file',
		responseType: 'json',
		onSubmit : function(file, ext) {
			this.disable();
			$('#ID_POS'+k+'_FILE_SHOW').html('正在上传文件...');
			
		} ,onComplete: function(file, json){
			
			this.enable();
			if(json.result=='0' || json.result==0) {
				$('#ID_POS'+k+'_FILE_SHOW').html(json.message);
			}else{
				$('#ID_POS'+k+'_FILE_SHOW').show();//显示提示信息
				$('#ID_POS'+k+'_FILE_VALUE').val(json.id);//文件ID
				$('#ID_POS'+k+'_FILE_SHOW').html('文件已上传完成');
			}
		}
	});
	  
	  
	  
	  
	  
    }
  });
	

	
};



//注册验证

$(function(){
	$("#regForm").validate({
        debug : false,
        onfocusout: function(element){
            $(element).valid();
        },
        submitHandler : function(form) {
            form.submit();
        },
         success: function(label) {
    // label.removeClass("error").addClass("Validform_right");
    label.html("<img src='images/regimg/correct.gif'>");
    } ,
        rules : {
            account:{
                required : true,
                accountRequire:true
                
            },
            pwd:{
            	required:true,
            	pwdRequired:true
            },
            repwd:{
                required:true,
                equalTo:"#pwd"
            }
        },
        messages: {
           account: {
                required:"邮箱或手机不能为空"
            },

            pwd:{
            	required:"密码不能为空"
            },
            
            repwd:{
                required:"请再次输入密码！",
                equalTo:"您2次输入的密码不一致"
            }
           
        }
       
    });
    
    //完善信息页面
    	$("#completeInfoForm").validate({
        debug : false,
        onfocusout: function(element){
            $(element).valid();
        },
        submitHandler : function(form) {
            form.submit();
        },
         success: function(label) {
    // label.removeClass("error").addClass("Validform_right");
    label.html("<img src='images/regimg/correct.gif'>");
    } ,
        rules : {
            username:{
                required : true,
                nameRequire:true
                
            },
            mobile:{
            	required:true,
            	isMobile:true,
            	
            },
            email:{
                required:true,
                email:true,
                maxlength:50,
//             remote:{
//              type:"POST",
//              url:"",
//              data:{
//                username:function(){
//                	return $("#name").val();
//                }
//             } 
//            } 
            },
            job:{
            	required:true,
            	jobRequire:true,
            	rangelength:[2,20]
            },
            nickname:{
            	required:true,
            	nicknameRequired:true
            }
        },
        messages: {
            username:{
                required : "请输入中文或英文（限20个字）"
            },
            mobile:{
            	required:"请输入正确的11位手机号码",
            	isMobile:"请输入正确的11位手机号码"
            },
            email:{
                required:"请输入邮箱",
                email:"邮箱格式不正确",
                maxlength:"邮箱长度超过限定",
                //remote:$.format("该邮箱已经存在，请更换")
            },
            job:{
            	required:"请填写您的职业或岗位（2-20个字）",
            	rangelength:"请填写您的职业或岗位（2-20个字）"
            },
            nickname:{
            	required:"请输入中文、英文、标点符号（2-20个字）"	
            }
           
        }
       
    });
  
  $.validator.addMethod("pwdRequired", function(value, element) {
        return this.optional(element)
            || (/^(\d|\w|\D)[^*]{5,19}$/.test(value));
    }, "支持6-20位数字、字母和标点符号");
  //手机号码验证
    jQuery.validator.addMethod("isMobile", function(value, element) {
        var length = value.length;
        return this.optional(element)
            || (length == 11 && 
/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[8156370])|(14[759]))+\d{8})$/.test(value));
            
    }, "请输入11位手机号");
  
   jQuery.validator.addMethod("accountRequire", function(value, element) {
        var length = value.length,
            emailReg = /^[A-Za-z0-9-_\.]+\@([A-Za-z0-9-_]+\.)+[A-Za-z0-9]{2,6}$/,
            mobileReg=/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[8156370])|(14[759]))+\d{8})$/;
             
        return this.optional(element)
            || ( emailReg.test(value) || mobileReg.test(value));
            
    }, "邮箱或手机格式不正确");
  
   jQuery.validator.addMethod("nameRequire", function(value, element) {
        var length = value.length;
        return this.optional(element)
            || (/^[\u4e00-\u9fa5A-Za-z]{1,20}$/.test(value));
            
    }, "请输入中文或英文（限20个字）");
  
  jQuery.validator.addMethod("jobRequire", function(value, element) {
        var length = value.length;
        return this.optional(element)
            || (/^[\u4e00-\u9fa5A-Za-z]{1,20}$/.test(value));
            
    }, "请输入中文或英文（2-20个字）");
    
      $.validator.addMethod("nicknameRequired", function(value, element) {
        return this.optional(element)
            || (/^[\d\w\D]{2,20}$/.test(value));
    }, "请输入中文、英文、标点符号（2-20个字）");
  
});




