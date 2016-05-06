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
        onkeyup: true,   
       // errorClass:'infoerror',
       // success:'Validform_right',
//      success: function(label) {
//        label.removeClass("infoerror").addClass("Validform_right").siblings(label).remove();
//    } ,
/*         groups:{
            births:"birth_year birth_month"
        },*/
         errorPlacement : function(error, element) {
         	
         	
        },
        //errorClass : "error",
        //focusInvalid : true,
        submitHandler : function(form) {
        	//$("input[name=speciality],input[name=jobs]").blur();
            form.submit();
        },
        rules : {
            account : {
                required : true
            },
            pwd:{
            	required:true
            },
            repwd:{
                required:true,
                equalTo:"#pwd"
            }
        },
        messages : {
           account : {
                required : "邮箱或手机不能为空"
            },

            pwd:{
            	required:"密码不能为空"
            },
            
            repwd:{
                required:"请输入确认密码！",
                equalTo:"两次密码必须相同"
            }
           
        }
       
    });
  
  
  
  
  
  
  
  
});




