

$(document).ready(function() {	
		$( "#dialog_thembchkhoa" ).dialog({
	        autoOpen: false,
	        show: "blind",
	        hide: "explode",
	        width: 700,
	        resizable: false,
	        modal: true
	    });
	


	$( "#dialog_suabchkhoa" ).dialog({
        autoOpen: false,
        show: "blind",
        hide: "explode",
        width: 700,
        resizable: false,
        modal: true
    });
	
	$("#btnClosethem").click(function() {
		$("#dialog_thembchkhoa" ).dialog( "close" );

	});
	$("#btnClosesua").click(function() {
		$("#dialog_suabchkhoa" ).dialog( "close" );

	});
	
	
});

function sua_bch_khoa_mo_form(madk,tendk,chucvu,diachi,sdt) {
	
	$('#txtMabchdk_sua').val(madk);
	$('#txtTenbchdk_sua').val(tendk);
	$('#txtChucvucn').val(chucvu);
	$('#txtDC_sua').val(diachi);
	$('#txtSDT_sua').val(sdt);
	

	$('#dialog_suabchkhoa' ).dialog( "open" );

}
function them_doan_khoa_mo_form() {

	$('#dialog_thembchkhoa' ).dialog("open");
}

function thuc_hien_them_bch_khoa() {
	$('.dynamic-input-error').remove();
	//$('.dialog_suakehoach').removeClass('dynamic-input-error');
	var valid = true;
	
	var tenbch=$.trim($('#txtTenbchdk').val());
	var mabch=$.trim($('#txtMabchdk').val());
	var chucvu=$.trim($('#txtChucvu').val());
	var dc=$.trim($('#txtDC').val());
	var sdt=$.trim($('#txtSDT').val());
	
	if (mabch=='') {
        $('#txtMabchdk').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thông tin.</div>");
        valid = false;
    }
	if (tenbch=='') {
        $('#txtTenbchdk').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thông tin.</div>");
        valid = false;
    }
	if (chucvu=='') {
        $('#txtChucvu').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thông tin.</div>");
        valid = false;
    }
	if (dc=='') {
        $('#txtDC').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thông tin.</div>");
        valid = false;
    }
	if (sdt=='') {
        $('#txtSDT').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thông tin.</div>");
        valid = false;
    }

	

	if (valid) {
		$.ajax({
            type: "POST",
            url: "../thembchkhoa",
            data: {                 
                   'ten' : tenbch,
                   'ma':mabch,
                   'dc':dc,
                   'chucvu':chucvu,
                   'sdt':sdt
            },             
            success: function (data) {
            	
          	window.location.replace("../ban_chap_hanh_doan_khoa/");  
            }
        });
	} else {
		return valid;
	}
}



function thuc_hien_cap_nhat_bch_khoa() {
	$('.dynamic-input-error').remove();

	var valid = true;
	
	var tenbch=$.trim($('#txtTenbchdk_sua').val());
	var mabch=$.trim($('#txtMabchdk_sua').val());
	var chucvu=$.trim($('#txtChucvu_sua').val());
	var dc=$.trim($('#txtDC_sua').val());
	var sdt=$.trim($('#txtSDT_sua').val());
	if(chucvu==""){
		chucvu=$.trim($('#txtChucvucn').val());
	}
	
	if (tenbch=='') {
        $('#txtTenbchdk_sua').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thông tin.</div>");
        valid = false;
    }
	if (dc=='') {
        $('#txtDC_sua').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thông tin.</div>");
        valid = false;
    }
	if (sdt=="") {
        $('#txtSDT_sua').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thông tin.</div>");
        valid = false;
    }
	

	if (valid) {
		$.ajax({
            type: "POST",
            url: "../sua_bch_khoa",
            data: {                 
                   'ten' : tenbch,
                   'ma':mabch,
                   'dc':dc,
                   'chucvu':chucvu,
                   'sdt':sdt
            },             
            success: function (data) {
            	
          	window.location.replace("../ban_chap_hanh_doan_khoa/");  
            }
        });
	} else {
		return valid;
	}
}

function thuc_hien_xoa_bch_khoa() {
	$('.dynamic-input-error').remove();
	//$('.dialog_suakehoach').removeClass('dynamic-input-error');
	var valid = true;
	
	
	var mabch=$.trim($('#txtMabchdk_sua').val());

	if (valid) {
		$.ajax({
            type: "POST",
            url: "../xoabchkhoa",
            data: {                    
            	
                'ma':mabch
            },             
            success: function (data) {
            
          	window.location.replace("../ban_chap_hanh_doan_khoa/");  
            }
        });
	} else {
		return valid;
	}
}
/**
 * 
 */