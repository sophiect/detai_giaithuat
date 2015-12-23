$(document).ready(function() {	
	$( "#dialog_suakehoach" ).dialog({
        autoOpen: false,
        show: "blind",
        hide: "explode",
        width: 700,
        resizable: false,
        modal: true
    });
	$( "#dialog_themkehoach" ).dialog({
        autoOpen: false,
        show: "blind",
        hide: "explode",
        width: 900,
        resizable: false,
        modal: true
    });
	$( "#dialog_xoa_kehoach" ).dialog({
        autoOpen: false,
        show: "blind",
        hide: "explode",
        width: 600,
        resizable: false,
        modal: true
    });
	$( "#dialog_xoa_sv" ).dialog({
        autoOpen: false,
        show: "blind",
        hide: "explode",
        width: 600,
        resizable: false,
        modal: true
    });
	$( "#dialog_xoa_htkp" ).dialog({
        autoOpen: false,
        show: "blind",
        hide: "explode",
        width: 650,
        resizable: false,
        modal: true
    });
	$( "#dialog_xoa_lichtrinh" ).dialog({
        autoOpen: false,
        show: "blind",
        hide: "explode",
        width: 600,
        resizable: false,
        modal: true
    });
	$( "#dialog_them_hotro_kinhphi" ).dialog({
        autoOpen: false,
        show: "blind",
        hide: "explode",
        width: 700,
        resizable: false,
        modal: true
    });
	$( "#dialog_them_lichtrinh" ).dialog({
        autoOpen: false,
        show: "blind",
        hide: "explode",
        width: 700,
        resizable: false,
        modal: true
    });
	$( "#dialog_them_sinhvien" ).dialog({
        autoOpen: false,
        show: "blind",
        hide: "explode",
        width: 900,
        resizable: false,
        modal: true
    });
	
	$(".btnChiTiet").click(function() {
		var makh=$(this).val();
		$("#trChiTiet_"+makh).toggle();

	});
	
	$('.datepicker').datepicker({
		beforeShow: function() {
	        setTimeout(function(){
	            $('.ui-datepicker').css('z-index', 99999999999999);
	        }, 0);
	    },
        dateFormat:'dd-mm-yy',       
        showOn: 'both',
        buttonImageOnly: true,
        duration: 0        
    });
	
	$("#btnCloseSua").click(function() {
		$("#dialog_suakehoach" ).dialog( "close" );
	});
	
//	$(".check_lichtrinh").change(function(){
//		if ($(this).attr("checked")) {
//			$(this).parent().parent().parent().addClass("row_selected");
//		} else {
//			$(this).parent().parent().parent().removeClass("row_selected");
//		}
//	});
	
	$( '.check_sinhvien').live( "change", function() {   
		if ($(this).attr("checked")) {
			$(this).parent().parent().parent().addClass("row_selected");
		} else {
			$(this).parent().parent().parent().removeClass("row_selected");
		}
	});
	
	$( '.check_sinhvien').live( "change", function() {   
		if ($(this).attr("checked")) {
			$(this).parent().parent().parent().addClass("row_selected");
		} else {
			$(this).parent().parent().parent().removeClass("row_selected");
		}
	});

	$( '#checkbox_allsv').live( "change", function() {   
		if ($(this).attr("checked")) {
			$('.check_sinhvien').attr('checked',true);
			$('.tr_sv').addClass("row_selected");
		} else {
			$('.check_sinhvien').attr('checked',false);
			$('.tr_sv').removeClass("row_selected");
		}
	});

//	$('#dssv_tab').click(function(){
//		$.ajax({
//            type: "POST",
//            url: "../edit_kehoach",
//            data: {'task':'load_dssv_chi_doan',                    
//                   'MaChiDoan' : 'cd03',	                               
//            },             
//            success: function (data) {
//                $('#div_dssv').html(data);
//            }
//        });
//	});
			
	$( '.btnXoaHoTroKinhPhi').live( "click", function() {   
		var row = $(this).closest('tr');
		row.remove();
	});
	$( '.btnXoaLichTrinh').live( "click", function() {   
		var row = $(this).closest('tr');
		row.remove();
	});
	
	
});
function them_hotro_kinhphi () {
	$('.dynamic-input-error').remove();
	var valid = true;
	var ma_hotro = $.trim($('#txtMaHTKP_Them').val());
	var ma_nkp = $('#cboNguonKinhPhi_Them').val();
	var ten_nkp = $('select[name=cboNguonKinhPhi_Them] option:selected').text();
	var sotien = $.trim($('#txtSoTien_Them').val());
	
	if (ma_hotro=='') {
        $('#txtMaHTKP_Them').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập mã hỗ trợ kinh phí.</div>");
        valid = false;
    } else {
    	 $('.td_mahotro').each(function() {       
 	        var maht= $(this).html();
 	        if (maht.toLowerCase()==ma_hotro.toLowerCase()) {
 	        	$('#txtMaHTKP_Them').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Mã hỗ trợ kinh phí đã tồn tại.</div>");
 	        	valid = false;
 	        }
 	    });
    }
	if (ma_nkp=='') {
        $('#cboNguonKinhPhi_Them').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng chọn nguồn kinh phí.</div>");
        valid = false;
    }
	if (sotien=='') {
        $('#txtSoTien_Them').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập số tiền.</div>");
        valid = false;
    }
	
	if (valid) {
		add_row_hotro_kinhphi(ma_hotro, ma_nkp, ten_nkp, sotien);
		$('#txtMaHTKP_Them').val('');
	    $('#txtSoTien_Them').val('');
	} else {
		return false;
	}	
}

function add_row_hotro_kinhphi(ma_hotro, ma_nkp, ten_nkp, sotien) {
	if ($('.tr_hotrokp_null').length) {
        $(".tr_hotrokp_null").remove();
	}	
    var newRow = '<tr class="tr_hotro_kinhphi">'
    	newRow+= '<td class="td_mahotro">'+ma_hotro+'</td>';
	    newRow+= '<td class="td_manguonkinhphi">'+ten_nkp+'<input type="hidden" class="hidMaNguonKP_Them" name="hidMaNguonKP_Them" value="'+ma_nkp+'"/></td>';
	    newRow+= '<td class="text-right td_sotien">'+sotien+'</td>';
	    newRow+= '<td class="text-center"><a href="#" class="btn-social btnXoaHoTroKinhPhi" title="Xóa"><i class="icon-remove"></i></a></td>';
	    newRow+= '<tr>';
    $("#tab_ds_ho_tro_kp > tbody:last-child").append(newRow);    
}
function thuc_hien_them_hotro_kinhphi() {
	$('.dynamic-input-error').remove();
	var valid = true;
	var data='QQQ';
	var makehoach = $('#hidMaKeHoach').val();
	if (!isDaThemKeHoach()) {
		alert('Vui lòng thêm kế hoạch trước khi thêm hỗ trợ kinh phí');
		valid= false;
	} else {		
		if ($('.tr_hotro_kinhphi').length) {
			$('.tr_hotro_kinhphi').each(function() {       
	 	       var v_mahotro = $(this).find('.td_mahotro').html();
	 	       var v_manguonkinhphi = $(this).find('.hidMaNguonKP_Them').val();
	 	       var v_sotien = $(this).find('.td_sotien').html();
	 	       data+=','+v_mahotro+'@'+v_manguonkinhphi+'@'+v_sotien;
	 	    });		
			if (data == 'QQQ') {
				alert ('Vui lòng thêm hỗ trợ kinh phí vào danh sách');
				valid= false;
			}
		} else {
			alert ('Vui lòng thêm hỗ trợ kinh phí vào danh sách');
			valid= false;
		}		
	}
	if (valid) {
		$.ajax({
            type: "POST",
            url: "../edit_kehoach",
            data: {'task':'them_ho_tro_kinh_phi',                    
                   'MaKeHoach' : makehoach,
                   'data_hotrokp':data
            },             
            success: function (data) {
                if (data=="OK") {                
                	$(".them_ht_kinhphi_display").prop('disabled', true);                	
                	$('#td_message_hotrokinhphi').show();
                }      
            }
        });
	} else {
		return valid;
	}
	
}
function xoa_ke_hoach() {
	var makehoach=$.trim($('#lblMaKH_Xoa').html());
	if (makehoach!='') {
		$.ajax({
            type: "POST",
            url: "../edit_kehoach",
            data: {'task':'xoa_ke_hoach',                    
                   'MaKeHoach' : makehoach                   
            },             
            success: function (data) {
                if (data=="OK") {                
                	window.location.replace("../kehoach/");
                }      
            }
        });
	}
}
function close_dialog_them() {
	$('.dynamic-input-error').remove();	
	$("#dialog_themkehoach" ).dialog( "close" );
	window.location.replace("../kehoach/");
}

function ds_ke_hoach_mo_form_xoa(makh) {
	$('#lblMaKH_Xoa').html(makh);
	$("#dialog_xoa_kehoach" ).dialog( "open" );
}

function close_dialog_xoa() {
	$("#dialog_xoa_kehoach" ).dialog( "close" );
}
function ds_ke_hoach_mo_form_sua(makehoach, tg_bd, tg_kt, diadiem, noidung, machidoan, duyet, dathuchien) {
	$('#txtMaKH_Sua').val(makehoach);
	$('#datTGBD_Sua').val(tg_bd);
	$('#datTGKT_Sua').val(tg_kt);
	$('#txtDiaDiem_Sua').val(diadiem);
	$('#txtNoiDung_Sua').val(noidung);
	$('#cboChiDoan_Sua').val(machidoan);
	$('#chkDuyet_Sua').attr("checked",duyet);
	$('#chkDaThucHien_Sua').attr("checked",dathuchien);
	$("#dialog_suakehoach" ).dialog( "open" );
}

function ds_ke_hoach_mo_form_them() {	
	$('#txtMaKH_Them').focus();
	$("#dialog_themkehoach" ).dialog( "open" );
}

function thuc_hien_sua_ke_hoach() {
	$('.dynamic-input-error').remove();
	//$('.dialog_suakehoach').removeClass('dynamic-input-error');
	var valid = true;
	var makehoach=$('#txtMaKH_Sua').val();
	var tg_bd=$.trim($('#datTGBD_Sua').val());
	var tg_kt=$.trim($('#datTGKT_Sua').val());
	var diadiem=$.trim($('#txtDiaDiem_Sua').val());
	var noidung=$.trim($('#txtNoiDung_Sua').val());
	var machidoan=$.trim($('#cboChiDoan_Sua').val());
	var isDuyet=false;	
	var isThucHien=false;
	if ($('#chkDuyet_Sua').attr("checked")) {
		isDuyet=true;
	}
	if ($('#chkDaThucHien_Sua').attr("checked")) {
		isThucHien=true;
	}
	if (tg_bd=='') {
        $('#datTGBD_Sua').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thời gian bắt đầu.</div>");
        valid = false;
    }
	if (tg_kt=='') {
        $('#datTGKT_Sua').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thời gian kết thúc.</div>");
        valid = false;
    }
	if (diadiem=='') {
        $('#txtDiaDiem_Sua').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập địa điểm.</div>");
        valid = false;
    }
	if (noidung=='') {
        $('#txtNoiDung_Sua').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập nội dung.</div>");
        valid = false;
    }
	if (machidoan=='') {
        $('#cboChiDoan_Sua').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng chọn chi đoàn.</div>");
        valid = false;
    }
	
	if (valid) {
		$.ajax({
            type: "POST",
            url: "../edit_kehoach",
            data: {'task':'sua_ke_hoach',                    
                   'MaKeHoach' : makehoach,
                   'ThoiGianBD':tg_bd,
                   'ThoiGianKT':tg_kt,
                   'DiaDiem':diadiem,
                   'NoiDung':noidung,
                   'MaChiDoan':machidoan,
                   'Duyet':isDuyet,
                   'DaThucHien':isThucHien
            },             
            success: function (data) {
                if (data=="OK") {                
                	window.location.replace("../kehoach/");
                }      
            }
        });
	} else {
		return valid;
	}
	
	
}

function thuc_hien_them_ke_hoach() {
	$('.dynamic-input-error').empty();
	$(".them_ke_hoach_display").prop('disabled', false);
	
	var valid = true;
	var makehoach=$.trim($('#txtMaKH_Them').val());
	var tg_bd=$.trim($('#datTGBD_Them').val());
	var tg_kt=$.trim($('#datTGKT_Them').val());
	var diadiem=$.trim($('#txtDiaDiem_Them').val());
	var noidung=$.trim($('#txtNoiDung_Them').val());
	var machidoan=$.trim($('#cboChiDoan_Them').val());
	var isDuyet=false;	
	var isThucHien=false;
	if ($('#chkDuyet_Them').attr("checked")) {
		isDuyet=true;
	}
	if ($('#chkDaThucHien_Them').attr("checked")) {
		isThucHien=true;
	}
	if (makehoach=='') {
        $('#txtMaKH_Them').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập mã kế hoạch.</div>");
        valid = false;
    }
	if (tg_bd=='') {
        $('#datTGBD_Them').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thời gian bắt đầu.</div>");
        valid = false;
    }
	if (tg_kt=='') {
        $('#datTGKT_Them').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thời gian kết thúc.</div>");
        valid = false;
    }
	if (diadiem=='') {
        $('#txtDiaDiem_Them').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập địa điểm.</div>");
        valid = false;
    }
	if (noidung=='') {
        $('#txtNoiDung_Them').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập nội dung.</div>");
        valid = false;
    }
	if (machidoan=='') {
        $('#cboChiDoan_Them').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng chọn chi đoàn.</div>");
        valid = false;
    }
	
	if (valid) {
		$.ajax({
            type: "POST",
            url: "../edit_kehoach",
            data: {'task':'them_ke_hoach',                    
                   'MaKeHoach' : makehoach,
                   'ThoiGianBD':tg_bd,
                   'ThoiGianKT':tg_kt,
                   'DiaDiem':diadiem,
                   'NoiDung':noidung,
                   'MaChiDoan':machidoan,
                   'Duyet':isDuyet,
                   'DaThucHien':isThucHien
            },             
            success: function (data) {
                if (data=="EXISTS_MAKH") {                
                	$('#txtMaKH_Them').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Mã kế hoạch đã tồn tại.</div>");
                	return false;
                } else {// Thêm kế hoạch thành công chuyển sang bước 2
                	//disable các input và thông báo thành công
                	$('.dynamic-input-error').empty();
                	$('#td_message').show();
                	$(".them_ke_hoach_display").prop('disabled', true);
                	$('#hidMaKeHoach').val(makehoach);
                	$('#hidMaChiDoan').val(machidoan); 
                	//Load danh sach sinh vien theo chi doan
	                	$.ajax({
	                        type: "POST",
	                        url: "../edit_kehoach",
	                        data: {'task':'load_dssv_chi_doan',                    
	                               'MaChiDoan' : machidoan,	                               
	                        },             
	                        success: function (data) {
	                            $('#div_dssv').html(data);
	                        }
	                    });
                }
            }
        });
	} else {
		return valid;
	}
};


function thuc_hien_them_sinh_vien() {
	 var makehoach= $('#hidMaKeHoach').val();
//	 makehoach='KH01';
	 var valid = true;
	 if (makehoach=='') {
		 alert('Vui lòng thêm kế hoạch trước khi thêm sinh viên');
		 valid= false;
	 } else {
		 var data='QQQ';
		 $('input[class="check_sinhvien"]').each(function() {       
	        if ($(this).attr("checked")) {
	        	var masv=$(this).val();
	        	data+='@'+masv;
	        }           
	    });		 
		 if (data=='QQQ') {
			 alert('Vui lòng chọn sinh viên cần thêm');
			 valid= false;
		 }
	 }
	 
	 if (valid) {
		 $.ajax({
	            type: "POST",
	            url: "../edit_kehoach",
	            data: {'task':'them_sinh_vien_vao_ke_hoach',                    
	                   'MaKeHoach' : makehoach,
	                   'data_sinhvien': data
	            },             
	            success: function (data) {
	                if (data=="OK") {
	                	$("#btnThemSinhVien").prop('disabled', true);
	                	$(".check_sinhvien").prop('disabled', true);
	                	$("#checkbox_allsv").prop('disabled', true);
	                	$('#td_message_sinhvien').show();
	                }    
	            }
	        });
	 } else {
		 return valid;
	 }
};

function isDaThemKeHoach() {
	 var makehoach= $('#hidMaKeHoach').val();
	 if (makehoach == '') {
		 return false;
	 } else {
		 return true;
	 }
	 	
}

function them_lich_trinh () {
	$('.dynamic-input-error').remove();
	var valid = true;
	var ma_lichtrinh = $.trim($('#txtMaLichTrinh_Them').val());
	var ten_cv = $.trim($('#txtTenCongViec_Them').val());
	var thoigian_bd = $.trim($('#datLichTrinhBD_Them').val());
	var thoigian_kt = $.trim($('#datLichTrinhKT_Them').val());
	
	if (ma_lichtrinh=='') {
        $('#txtMaLichTrinh_Them').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập lịch trình.</div>");
        valid = false;
    } else {
    	 $('.td_malichtrinh').each(function() {       
 	        var malt= $(this).html();
 	        if (malt.toLowerCase()==ma_lichtrinh.toLowerCase()) {
 	        	$('#txtMaLichTrinh_Them').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Mã lịch trình đã tồn tại.</div>");
 	        	valid = false;
 	        }
 	    });
    }
	if (ten_cv=='') {
        $('#txtTenCongViec_Them').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập tên công việc.</div>");
        valid = false;
    }
	if (thoigian_bd=='') {
        $('#datLichTrinhBD_Them').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thời gian bắt đầu.</div>");
        valid = false;
    }
	if (thoigian_kt=='') {
        $('#datLichTrinhKT_Them').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thời gian kết thúc.</div>");
        valid = false;
    }
	if (valid) {
		add_row_hotro_lichtrinh(ma_lichtrinh, ten_cv, thoigian_bd, thoigian_kt);
		$('#txtMaLichTrinh_Them').val('');
	    $('#txtTenCongViec_Them').val('');
	    $('#datLichTrinhBD_Them').val('');
	    $('#datLichTrinhKT_Them').val('');
	} else {
		return false;
	}	
}
function add_row_hotro_lichtrinh(ma_lichtrinh, ten_cv, thoigian_bd, thoigian_kt) {
	if ($('.tr_lichtrinh_null').length) {
        $(".tr_lichtrinh_null").remove();
	}	
    var newRow = '<tr class="tr_lichtrinh">'
    	newRow+= '<td class="td_malichtrinh">'+ma_lichtrinh+'</td>';
	    newRow+= '<td class="td_tencongviec">'+ten_cv+'</td>';
	    newRow+= '<td class="text-center td_tgbd">'+thoigian_bd+'</td>';
	    newRow+= '<td class="text-center td_tgkt">'+thoigian_kt+'</td>';
	    newRow+= '<td class="text-center"><a href="#" class="btn-social btnXoaLichTrinh" title="Xóa"><i class="icon-remove"></i></a></td>';
	    newRow+= '<tr>';
    $("#tab_ds_lich_trinh > tbody:last-child").append(newRow);    
}
function thuc_hien_them_lich_trinh() {
	$('.dynamic-input-error').remove();
	var valid = true;
	var data='QQQ';
	var makehoach = $('#hidMaKeHoach').val();
	if (!isDaThemKeHoach()) {
		alert('Vui lòng thêm kế hoạch trước khi thêm lịch trình');
		valid= false;
	} else {		
		if ($('.tr_lichtrinh').length) {
			$('.tr_lichtrinh').each(function() {       
	 	       var v_malichtrinh = $(this).find('.td_malichtrinh').html();
	 	       var v_tencongviec = $(this).find('.td_tencongviec').html();
	 	       var v_tgbd = $(this).find('.td_tgbd').html();
	 	       var v_tgkt = $(this).find('.td_tgkt').html();
	 	       data+=','+v_malichtrinh+'@'+v_tencongviec+'@'+v_tgbd+'@'+v_tgkt;
	 	    });		
			if (data == 'QQQ') {
				alert ('Vui lòng thêm lịch trình vào danh sách');
				valid= false;
			}
		} else {
			alert ('Vui lòng thêm lịch trình vào danh sách');
			valid= false;
		}		
	}
	if (valid) {		
		$.ajax({
            type: "POST",
            url: "../edit_kehoach",
            data: {'task':'them_lich_trinh_vao_ke_hoach',                    
                   'MaKeHoach' : makehoach,
                   'data_lichtrinh':data
            },             
            success: function (data) {
                if (data=="OK") {                
                	$(".them_lichtrinh_display").prop('disabled', true);                	
                	$('#td_message_lichtrinh').show();
                }      
            }
        });
	} else {
		return valid;
	}
	
}
//==================XOA SINH VIEN========================
function remove_sinhvien_show_dialog(makehoach, masv) {
	$('#lblMAKH_SV_Xoa').html(makehoach);
	$('#lblMASV_Xoa').html(masv);
	$("#dialog_xoa_sv" ).dialog( "open" );
}
function close_dialog_xoa_sv() {
	$("#dialog_xoa_sv" ).dialog( "close" );
}

function xoa_sv_ke_hoach() {
	var makehoach=$.trim($('#lblMAKH_SV_Xoa').html());
	var masv=$.trim($('#lblMASV_Xoa').html());
	if (makehoach!='' && masv !='') {
		$.ajax({
            type: "POST",
            url: "../edit_kehoach",
            data: {'task':'xoa_sv_ke_hoach',                    
                   'MaKeHoach' : makehoach,
                   'MASV':masv
            },             
            success: function (data) {
                if (data=="OK") {                
                	window.location.replace("../kehoach/");
                }      
            }
        });
	}
}
//==================XOA HỖ TRỢ KINH PHÍ========================
function remove_htkp_show_dialog(makehoach, mahotro) {
	$('#lblMAKH_HTKP_Xoa').html(makehoach);
	$('#lblHTKP_Xoa').html(mahotro);
	$("#dialog_xoa_htkp" ).dialog( "open" );
}
function close_dialog_xoa_htkp() {
	$("#dialog_xoa_htkp" ).dialog( "close" );
}
function xoa_htkp_ke_hoach() {
	var makehoach=$.trim($('#lblMAKH_HTKP_Xoa').html());
	var mahotro=$.trim($('#lblHTKP_Xoa').html());
	if (makehoach!='' && mahotro !='') {
		$.ajax({
            type: "POST",
            url: "../edit_kehoach",
            data: {'task':'xoa_htkp_ke_hoach',                    
                   'MaKeHoach' : makehoach,
                   'MaHoTroKP':mahotro
            },             
            success: function (data) {
                if (data=="OK") {                
                	window.location.replace("../kehoach/");
                }      
            }
        });
	}
}
//==================XOA LỊCH TRÌNH========================
function remove_lichtrinh_show_dialog(makehoach, malichtrinh) {
	$('#lblMAKH_LT_Xoa').html(makehoach);
	$('#lblMALT_Xoa').html(malichtrinh);
	$("#dialog_xoa_lichtrinh" ).dialog( "open" );
}
function close_dialog_xoa_lichtrinh() {
	$("#dialog_xoa_lichtrinh" ).dialog( "close" );
}
function xoa_lichtrinh_ke_hoach() {
	var makehoach=$.trim($('#lblMAKH_LT_Xoa').html());
	var malichtrinh=$.trim($('#lblMALT_Xoa').html());
	if (makehoach!='' && malichtrinh !='') {
		$.ajax({
            type: "POST",
            url: "../edit_kehoach",
            data: {'task':'xoa_lichtrinh_ke_hoach',                    
                   'MaKeHoach' : makehoach,
                   'MaLichTrinh':malichtrinh
            },             
            success: function (data) {
                if (data=="OK") {                
                	window.location.replace("../kehoach/");
                }      
            }
        });
	}
}
//===============THÊM HỖ TRỢ KINH PHÍ==================
function mo_form_them_ho_tro_kinh_phi(makehoach) {
	$('#hdMaKH_HTKP_Them_f').val(makehoach);
	$("#dialog_them_hotro_kinhphi" ).dialog( "open" );
}
function close_dialog_them_kinhphi() {
	$("#dialog_them_hotro_kinhphi" ).dialog( "close" );
}
function thuc_hien_them_hotro_kinhphi_f(){
	$('.dynamic-input-error').remove();
	var valid = true;
	var makehoach=$('#hdMaKH_HTKP_Them_f').val();
	var ma_hotro = $.trim($('#txtMaHTKP_Them_f').val());
	var ma_nkp = $('#cboNguonKinhPhi_Them_f').val();
	var sotien = $.trim($('#txtSoTien_Them_f').val());
	
	if (ma_hotro=='') {
        $('#txtMaHTKP_Them_f').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập mã hỗ trợ kinh phí.</div>");
        valid = false;
    } 
	
	if (ma_nkp=='') {
        $('#cboNguonKinhPhi_Them_f').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng chọn nguồn kinh phí.</div>");
        valid = false;
    }
	if (sotien=='') {
        $('#txtSoTien_Them_f').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập số tiền.</div>");
        valid = false;
    }
	
	if (valid) {
		$.ajax({
            type: "POST",
            url: "../edit_kehoach",
            data: {'task':'them_ho_tro_kinh_phi_f',                    
                   'MaKeHoach' : makehoach,
                   'MaHoTro':ma_hotro,
                   'MaNguonKP':ma_nkp,
                   'SoTien':sotien
            },             
            success: function (data) {
                if (data=="EXISTS_MAHT") {                
                	$('#txtMaHTKP_Them_f').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Mã hỗ trợ nguồn kinh phí đã tồn tại.</div>");
                    return false;
                } else {
                	window.location.replace("../kehoach/");
                }    
            }
        });
	} else {
		return false;
	}	
}

//===============THÊM LỊCH TRÌNH==================
function mo_form_them_lich_trinh(makehoach){
	$('#hdMaKH_LT_Them_f').val(makehoach);
	$("#dialog_them_lichtrinh" ).dialog( "open" );
}
function close_dialog_them_lichtrinh() {
	$("#dialog_them_lichtrinh" ).dialog( "close" );
}

function thuc_hien_them_lich_trinh_f(){
	$('.dynamic-input-error').remove();
	var valid = true;
	var makehoach=$('#hdMaKH_LT_Them_f').val();
	var malichtrinh = $.trim($('#txtMaLichTrinh_Them_f').val());
	var tencongviec = $.trim($('#txtTenCongViec_Them_f').val());
	var tgbatdau = $.trim($('#datLichTrinhBD_Them_f').val());
	var tgketthuc = $.trim($('#datLichTrinhKT_Them_f').val());
	
	if (malichtrinh=='') {
        $('#txtMaLichTrinh_Them_f').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập mã lịch trình.</div>");
        valid = false;
    } 
	
	if (tencongviec=='') {
        $('#txtTenCongViec_Them_f').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập tên công việc.</div>");
        valid = false;
    }
	if (tgbatdau=='') {
        $('#datLichTrinhBD_Them_f').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thời gian bắt đầu.</div>");
        valid = false;
    }
	if (tgketthuc=='') {
        $('#datLichTrinhKT_Them_f').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thời gian kết thúc.</div>");
        valid = false;
    }
	if (valid) {
		$.ajax({
            type: "POST",
            url: "../edit_kehoach",
            data: {'task':'them_lich_trinh_f',                    
                   'MaKeHoach' : makehoach,
                   'MaLichTrinh':malichtrinh,
                   'TenCongViec':tencongviec,
                   'TGBD':tgbatdau,
                   'TGKT':tgketthuc
            },             
            success: function (data) {
                if (data=="EXISTS_MALT") {                
                	$('#txtMaLichTrinh_Them_f').parent().append("<div class='dynamic-input-error'>&uarr;&nbsp;Mã lịch trình đã tồn tại.</div>");
                    return false;
                } else {
                	window.location.replace("../kehoach/");
                }    
            }
        });
	} else {
		return false;
	}	
}
//===============THÊM SINH VIÊN==================
function mo_form_them_sinhvien(makehoach,machidoan){
	$('#hdMaKH_SV_Them_f').val(makehoach);
	$.ajax({
      type: "POST",
      url: "../edit_kehoach",
      data: {'task':'load_dssv_chi_doan',                    
             'MaChiDoan' : machidoan	                               
      },             
      success: function (data) {
          $('#load_dssv_result').html(data);
      }
  });
	$("#dialog_them_sinhvien" ).dialog( "open" );
}
function close_dialog_them_sinhvien() {
	$("#dialog_them_sinhvien" ).dialog( "close" );
}

function thuc_hien_them_sinhvien_f() {
	 var makehoach= $('#hdMaKH_SV_Them_f').val();
	 var valid = true;

	 var data='QQQ';
	 $('input[class="check_sinhvien"]').each(function() {       
        if ($(this).attr("checked")) {
        	var masv=$(this).val();
        	data+='@'+masv;
        }           
     });		 
	 if (data=='QQQ') {
		 alert('Vui lòng chọn sinh viên cần thêm');
		 valid= false;
	 }
	 
	 
	 if (valid) {
		 $.ajax({
	            type: "POST",
	            url: "../edit_kehoach",
	            data: {'task':'them_sinh_vien_vao_ke_hoach',                    
	                   'MaKeHoach' : makehoach,
	                   'data_sinhvien': data
	            },             
	            success: function (data) {
	            	window.location.replace("../kehoach/");  
	            }
	        });
	 } else {
		 return valid;
	 }
};