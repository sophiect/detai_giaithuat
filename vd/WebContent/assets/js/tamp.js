$(document).ready(function() {	
$( "#dialog_themchidoan" ).dialog({
        autoOpen: false,
        show: "blind",
        hide: "explode",
        width: 700,
        resizable: false,
        modal: true
    });
$( "#dialog_xoa" ).dialog({
    autoOpen: false,
    show: "blind",
    hide: "explode",
    width: 600,
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
function sua_chi_doan_mo_form(machidoan,tenchidoan) {
	
	$('#txtMaChiDoan_sua').val(machidoan);
	$('#txtTenChiDoan_sua').val(tenchidoan);
	$('#dialog_suachidoan' ).dialog( "open" );

}

function them_chi_doan_mo_form() {
	//alert("them mo");
	$('#dialog_themchidoan').dialog("open");
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
        $('#txtTenChiDoan').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thông tin</div>");
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
            	if (data=="OK") {
            		window.location.replace("../cap_nhat_chi_doan/*"); 
            	} else {
            		$('#txtMaChiDoan').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Mã chi đoàn đã tồn tại</div>");
                    return false;
            	}
            	
          	 
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
          
          	window.location.replace("../cap_nhat_chi_doan/*");}
        });
	} else {
		return valid;
	}
}

function close_dialog_xoa(){
	 $('#dialog_xoa').dialog('close');
}
function mo_form_xoa(ma){
	$('#ma_Xoa').html(ma);
	$("#dialog_xoa" ).dialog( "open" );
}

function xoa(){
	var ma=$.trim($('#ma_Xoa').html());
	if (true) {
		$.ajax({
            type: "POST",
            url: "../xoa_chi_doan",
            data: {                    
                   'ma' : ma
            },             
            success: function (data) {
            
          	window.location.replace("../cap_nhat_chi_doan/*");}
        });
	} else {
		return valid;
	}
}







