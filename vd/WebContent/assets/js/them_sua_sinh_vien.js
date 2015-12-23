/**
 * 
 */
$(document).ready(function() {	
	$( "#dialog_themsinhvien" ).dialog({
        autoOpen: false,
        show: "blind",
        hide: "explode",
        width: 800,
        resizable: false,
        modal: true
    });
	
	$( "#dialog_suasinhvien" ).dialog({
        autoOpen: false,
        show: "blind",
        hide: "explode",
        width: 700,
        resizable: false,
        modal: true
    });
	
	/*$(".btnChiTiet").click(function() {
		
	
		var i=$(this).val();
		$("#trChiTiet_"+i).toggle();
	});
	*/
	$("#btnClosethem").click(function() {
		$("#dialog_themsinhvien" ).dialog( "close" );

	});
	$("#btnClosesua").click(function() {
		$("#dialog_suasinhvien" ).dialog( "close" );

	});
	
	
});
function xem_chi_tiet(ma){
	
	var i=ma;
	$("#trChiTiet_"+i).toggle();
}
function sua_sinh_vien_mo_form(masv,tensv,dc,mail,sdt,face,skype) {

	
	
	$('#txtMaSV_sua').val(masv);
	$('#txtTenSV_sua').val(tensv);
	$('#txtDC_sua').val(dc);
	$('#txtSDT_sua').val(sdt);
	$('#txtEmail_sua').val(mail);
	$('#txtfb_sua').val(face);
	$('#txtskype_sua').val(skype);

	$("#dialog_suasinhvien" ).dialog( "open" );
}

function them_sinh_vien_mo_form() {
	
	$("#dialog_themsinhvien" ).dialog( "open" );
}

function thuc_hien_them_sinh_vien() {
	$('.dynamic-input-error').remove();
	//$('.dialog_suakehoach').removeClass('dynamic-input-error');
	var valid = true;
	var macd=$.trim($('#txtmacd').val());
	var masv=$.trim($('#txtMaSV').val());
	var tensv=$.trim($('#txtTenSV').val());
	var diachi=$.trim($('#txtDC').val());
	var sdt=$.trim($('#txtSDT').val());
	var mail=$.trim($('#txtEmail').val());
	var fb=$.trim($('#txtfb').val());
	var skype=$.trim($('#txtskype').val());
	
	if (masv=='') {
        $('#txtMaSV').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thông tin.</div>");
        valid = false;
    }
	
	if (tensv=='') {
        $('#txtTenSV').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thông tin.</div>");
        valid = false;
    }
	

	if (diachi=='') {
        $('#txtDC').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thông tin.</div>");
        valid = false;
    }

	if (sdt=='') {
        $('#txtSDT').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thông tin.</div>");
        valid = false;
    }
	

	if (mail=='') {
        $('#txtEmail').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thông tin.</div>");
        valid = false;
    }
	if (valid) {
		$.ajax({
            type: "POST",
            url: "../them_sinh_vien",
            data: {                   
                   'masv' : masv,
                   'tensv':tensv,
                   'diachi':diachi,
                   'sdt':sdt,
                   'mail':mail,
                   'fb':fb,
                   'skype':skype,
                   'macd':macd
            },             
            success: function (data) {
            	if (data=="OK") {
            		window.location.replace("../cap_nhat_sinh_vien/*?machidoan="+macd);
            	} else {
            		$('#txtMaSV').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Mã sinh viên đã tồn tại</div>");
                    return false;
            	}
            	
            }
        });
	} else {
		return valid;
	}
}


function thuc_hien_cap_nhat_sinh_vien() {
	$('.dynamic-input-error').remove();
	//$('.dialog_suakehoach').removeClass('dynamic-input-error');
	var valid = true;
	var macd=$.trim($('#txtmacd').val());
	var masv=$.trim($('#txtMaSV_sua').val());
	var tensv=$.trim($('#txtTenSV_sua').val());
	var diachi=$.trim($('#txtDC_sua').val());
	var sdt=$.trim($('#txtSDT_sua').val());
	var mail=$.trim($('#txtEmail_sua').val());
	var fb=$.trim($('#txtfb_sua').val());
	var skype=$.trim($('#txtskype_sua').val());
	
	
	if (tensv=='') {
        $('#txtTenSV_sua').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thông tin.</div>");
        valid = false;
    }
	

	if (diachi=='') {
        $('#txtDC_sua').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thông tin.</div>");
        valid = false;
    }

	if (sdt=='') {
        $('#txtSDT_sua').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thông tin.</div>");
        valid = false;
    }
	

	if (mail=='') {
        $('#txtEmail_sua').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thông tin.</div>");
        valid = false;
    }
	if (valid) {
		$.ajax({
            type: "POST",
            url: "../sua_sinh_vien",
            data: {                   
                   'masv' : masv,
                   'tensv':tensv,
                   'diachi':diachi,
                   'sdt':sdt,
                   'mail':mail,
                   'fb':fb,
                   'skype':skype,
                   'macd':macd
            },             
            success: function (data) {
            
            	window.location.replace("../cap_nhat_sinh_vien/*?machidoan="+macd);
            }
        });
	} else {
		return valid;
	}
}




function thuc_hien_xoa_sinh_vien() {
	$('.dynamic-input-error').remove();
	//$('.dialog_suakehoach').removeClass('dynamic-input-error');
	var macd=$.trim($('#txtmacd').val());
	var masv=$.trim($('#txtMaSV_sua').val());
	var valid = true;
	if (valid) {
		$.ajax({
            type: "POST",
            url: "../del_sv",
            data: {                   
                   'masv' : masv
            },             
            success: function (data) {
           
            	window.location.replace("../cap_nhat_sinh_vien/*?machidoan="+macd);
            	
            }
        });
	} else {
		return valid;
	}
}

function test(){
	window.location.replace("../cap_nhat_sinh_vien/*?machidoan="+macd);
	
}

/**
 * 
 */