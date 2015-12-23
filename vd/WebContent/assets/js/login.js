$(document).ready(function() {	


	$( "#dialogshow" ).dialog({
	    autoOpen: false,
	    show: "blind",
	    hide: "explode",
	    width: 700,
	    resizable: false,
	    modal: true
	});
	$("#dialogshow" ).dialog( "open" );
	
});

function dong(){
	$("#dialogshow" ).dialog( "close" );
}
 function thuc_hien(){
	 
	 $('.dynamic-input-error').remove();
	 var valid = true;
	 var txtsoluong = $('#txtsoluong').val();
	 var txtsolan = $('#txtsolan').val();
	 
	 if (txtsoluong=='') {
        $('#txtsoluong').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thông tin.</div>");
        valid = false;
     }
	 
	 if (txtsolan=='') {
        $('#txtsolan').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập  thông tin.</div>");
        valid = false;
     }
	 if (valid) {
		 $.ajax({
            type: "POST",
            url: "../authentication",
            data: {'task':'check_login',                    
                   'txtsoluong' : txtsoluong,
                   'txtsolan':txtsolan
            },             
            success: function (data) {
                if (data=="OK") {                
                	alert("Đăng nhập thành công!");
                	window.location.replace("../cap_nhat_chi_doan/*");
                } else {
                	alert("Tên đăng nhập hoặc mật khẩu không đúng!");
                	return false;
                }  
            }
        });
	 } else {
		 return valid;
	 }
 }