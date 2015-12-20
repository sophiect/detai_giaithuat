$(document).ready(function() {

	$( "#dialog_dn" ).dialog({
	    autoOpen: false,
	    show: "blind",
	    hide: "explode",
	    width: 700,
	    resizable: false,
	    modal: true
	});
	$("#dialog_dn" ).dialog( "open" );

});
