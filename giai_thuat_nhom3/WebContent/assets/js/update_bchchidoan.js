$(document).ready(function() {	
	$( "#dialog_ttsinhvien" ).dialog({
        autoOpen: false,
        show: "blind",
        hide: "explode",
        width: 700,
        resizable: false,
        modal: true
    });
	
	$(".btnChiTiet").click(function() {
		var makh=$(this).val();
		$("#trChiTiet_"+makh).toggle();

	});

	
	$("#btnCloseSua").click(function() {
		$("#dialog_ttsinhvien" ).dialog( "close" );

	});
	
});

function thong_tin_sinh_vien_mo_form(masv, tensv, diachi, chucvu, sokh) {
	$('#txtmasv').val(masv);
	$('#txttensv').val(tensv);
	$('#txtdiachi').val(diachi);
	if(chucvu ==""){
		$('#txtchucvu').val("");	
	}
	else{
		$('#txtchucvu').val(chucvu);}


	$('#txtkh').val(sokh);
	
	$("#dialog_ttsinhvien" ).dialog( "open" );
}


function xoa_chuc_vu(){
	$('.dynamic-input-error').remove();
	var valid = true;
	var masinhvien=$.trim($('#txtmasv').val());	
	var chucvucu=$.trim($('#txtchucvu').val());
	if (chucvucu=="") {
		alert("Sinh viên hiện tại không nằm trong ban chấp hành chi đoàn");
        valid = false;
	}
	if (valid) {
		
		$.ajax({
            type: "POST",
            url: "../xoabch",
            data: {                    
                   'masinhvien' : masinhvien
            },             
            success: function (data) {
            	
       
        $("#btncapnhat").click();
        //window.location.replace("../cap_nhat_ban_chap_hanh_chi_doan/*");       
            }
        });
	} 
	else {
		return valid;
	}
	
	
}


function thuc_hien_cap_nhat_bch() {
	$('.dynamic-input-error').remove();
	var valid = true;
	var masinhvien=$.trim($('#txtmasv').val());
	var chucvu=$.trim($('#chonchucvu').val());
	var chucvucu=$.trim($('#txtchucvu').val());
	if (chucvu=="0") {
		$('#chonchucvu').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng chọn chức vụ cho ban chấp hành chi đoàn</div>");
        valid = false;
	}
	if (valid) {
		
		$.ajax({
            type: "POST",
            url: "../update_bchchidoan",
            data: {                  
                   'masinhvien' : masinhvien,
                   'chucvu':chucvu,
                   'chucvucu':chucvucu
            },             
            success: function (data) {
            
              
                
                	 $("#btncapnhat").click();
              
                
            } 
        });
	} else {
		return valid;
}	}
















