$(document).ready(function() {	
$( "#dialog_themchidoan" ).dialog({
        autoOpen: false,
        show: "blind",
        hide: "explode",
        width: 700,
        resizable: false,
        modal: true
    });
$( "#dialog_suachidoan" ).dialog({
    autoOpen: false,
    show: "blind",
    hide: "explode",
    width: 700,
    resizable: false,
    modal: true
});


	$(".btnChiTiet").click(function() {
		
	
		var i=$(this).val();
		$("#trChiTiet_"+i).toggle();
	});

	$("#anbch").click(function() {
		
		
		
		$("#grid-body_bch").toggle();
	});

	
	$('.datepicker').datepicker({
        dateFormat:'dd-mm-yy',       
        showOn: 'both',
        buttonImageOnly: true,
        duration: 0
    });
	$("#btnClose").click(function() {
		$("#dialog_themchidoan" ).dialog( "close" );

	});
	$("#btnCloseSua").click(function() {
		$("#dialog_suachidoan" ).dialog( "close" );

	});
	
});
function xem_chi_tiet(ma){
	
	var i=ma;
	$("#trChiTiet_"+i).toggle();
}
function them_chi_doan_mo_form() {	
	$("#dialog_themchidoan" ).dialog( "open" );
}
function sua_chi_doan_mo_form(machidoan,tenchidoan) {
	$('#txtMaChiDoan_sua').val(machidoan);
	$('#txtTenChiDoan_sua').val(tenchidoan);
	$('#dialog_suachidoan' ).dialog( "open" );

}

function thuc_hien_them_chi_doan() {
	$('.dynamic-input-error').remove();
	//$('.dialog_suakehoach').removeClass('dynamic-input-error');
	var valid = true;
	
	var tenchidoan=$.trim($('#txtTenChiDoan').val());
	var machidoan=$.trim($('#txtMaChiDoan').val());

	
	if (machidoan=='') {
        $('#txtMaChiDoan').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thông tin</div>");
        valid = false;
    }
	if (tenchidoan=='') {
        $('#txtTenChiDoan').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập  thông tin</div>");
        valid = false;
    }
	
	if (valid) {
		$.ajax({
            type: "POST",
            url: "../edit_chidoan",
            data: {'task':'them_chi_doan',                    
                   'MaChiDoan' : machidoan,
                   'TenChiDoan':tenchidoan
            },             
            success: function (data) {
          	window.location.replace("../cap_nhat_ban_chap_hanh_doan/cap_nhat_ban_chap_hanh_doan.jsp");  
            }
        });
	} else {
		return valid;
	}
}
function thuc_hien_cap_nhat_chi_doan() {
	$('.dynamic-input-error').remove();
	//$('.dialog_suakehoach').removeClass('dynamic-input-error');
	var valid = true;
	
	var tenchidoan=$.trim($('#txtTenChiDoan_sua').val());
	var machidoan=$.trim($('#txtMaChiDoan_sua').val());

	

	if (tenchidoan=='') {
        $('#txtTenChiDoan').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thông tin</div>");
        valid = false;
    }
	
	if (valid) {
		$.ajax({
            type: "POST",
            url: "../update_chidoan",
            data: {                    
                   'MaChiDoan' : machidoan,
                   'TenChiDoan':tenchidoan
            },             
            success: function (data) {
            	
          	window.location.replace("../cap_nhat_sinh_vien/update_chi_doan.jsp");  
            }
        });
	} else {
		return valid;
	}
}














