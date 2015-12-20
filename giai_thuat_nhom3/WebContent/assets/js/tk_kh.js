/**
 * 
 */
$(document).ready(function() {	
$( "#dialog_themchidoan" ).dialog({
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
	$("#btnCloseSua").click(function() {
		$("#dialog_themchidoan" ).dialog( "close" );

	});
	
});



function tim_ds_khdaduyet() {

	var valid = true;
	
	var tuthang=$.trim($('#ds_khdaduyet_tuthang').val());
	var denthang=$.trim($('#ds_khdaduyet_tuthang').val());
	var tunam=$.trim($('#ds_khdaduyet_tunam').val());
	var dennam=$.trim($('#ds_khdaduyet_dennam').val());
	var loai =$.trim($('#loaitk').val());
if(loai=="0"){ alert("de nghi nhap lua chon");}
else {	
	if (valid) {
		$.ajax({
            type: "POST",
            url: "../tk_kh",
            data: {                    
                   'tuthang' : tuthang,
                   'denthang':denthang,
                   'tunam':tunam,
                   'dennam':dennam,
                   'loai':loai
            },             
            success: function (data) {
            
            	 $('#bodyds').html(data);
          	//window.location.replace("../cap_nhat_ban_chap_hanh_doan/cap_nhat_ban_chap_hanh_doan.jsp");  
            }
        });
	} else {
		return valid;
	}
}
}















