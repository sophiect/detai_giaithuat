$(document).ready(function() {	
	
$( "#dialogWait" ).dialog({
        autoOpen: false,
        width: 700,
        resizable: false,
        modal: true,
        dialogClass:'fixed-dialog'
 });

$('#dialogWait').parent().children('.ui-dialog-titlebar').remove();
$('#dialogWait').parent().css('background','none').css('border','none');
if($('#grid_title').length>0){
         $('#fixed_title').html($('#grid_title').html());
  }

});
function thuc_hien() {
	$('.dynamic-input-error').remove();
	var valid = true;
	var txtsoluong = $('#txtsoluong').val();
	var txtsolan = $('#txtsolan').val();

	if (txtsoluong == '') {
		$('#txtsoluong')
				.parent()
				.append(
						"<div style='color:red;' class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thông tin.</div>");
		valid = false;
	}

	if (txtsolan == '') {
		$('#txtsolan')
				.parent()
				.append(
						"<div style='color:red;' class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập  thông tin.</div>");
		valid = false;
	}
	
	
	if (valid) {
		$.ajax({
			type : "POST",
			url : "../giai_thuat_nhom3/tinhtoan",
			data : {
				'txtsolan' : txtsolan,
				'txtsoluong' : txtsoluong
			},
			beforeSend: function(){
				$("#dialogWait" ).dialog( "open" );
			},
			complete: function(){
				$("#dialogWait" ).dialog( "close" );
			},
			success : function(data) {

				if (data == "OK") {
				//	alert(" Bài toán đã giải xong");
					ketqua(txtsolan);
			
				} else {
					alert("Không thực hiện được");
					return false;
				}
			}
		});
	} else {
		return valid;
	}
}

function ketqua(solanlap) {
	if (true) {
		$.ajax({
					type : "POST",
					url : "../giai_thuat_nhom3/laykq",
					data : {

					},
					beforeSend: function(){
						$("#dialogWait" ).dialog( "open" );
					},
					complete: function(){
						$("#dialogWait" ).dialog( "close" );
					},
					success : function(dataObj) {
					

						var data = JSON.parse(dataObj);

						if (data != null) {
							

							
							var databruteForce = [];
							var datadivideAndConquer = [];
							var dataSweeping = [];


							var label = [];
							var tam1 = 0;
							var tam2 = 0;
							var tam3 = 0;

							var length = Object.keys(data).length;
							
							for (var i = 0; i < length; i++) {

								if (data[i].tenkieu == "1") {

									databruteForce[tam1] = data[i].thoigian;
									tam1++;
								}
								if (data[i].tenkieu == "2") {
									datadivideAndConquer[tam2] = data[i].thoigian;
									tam2++;
								}
								if (data[i].tenkieu == "3") {
									dataSweeping[tam3] = data[i].thoigian;
									tam3++;
								}
							}
							
							
							for (var l = 0; l < solanlap; l++) {
								
						
								var j = l + 1;
								label[l] = "Lần " + j;

							}
							
							
					
// 3 giai thuat
							var LineChart = {
								labels : label,
								datasets : [ {
									fillColor : "rgba(167, 78, 158,0)",
									strokeColor : "rgba(167, 78, 158,1)",
									pointColor : "rgba(255, 255, 0,1)",
									pointStrokeColor : "#fff",
									data : dataSweeping
								}, {
									fillColor : "rgba(248, 156, 36,0)",
									strokeColor : "rgba(255, 45, 45,1)",
									pointColor : "rgba(255, 61, 61,1)",
									pointStrokeColor : "#fff",
									data : datadivideAndConquer
								}, {
									fillColor : "rgba(7, 255, 255,0)",
									strokeColor : "rgba(87, 242, 226,1)",
									pointColor : "rgba(167, 78, 158,1)",
									pointStrokeColor : "#fff",
									data : databruteForce
								} ]

							}

							var myLineChart = new Chart(document
									.getElementById("canvasLine").getContext(
											"2d")).Line(LineChart, {
								scaleFontSize : 13,
								scaleFontColor : "#ffa45e"
							});

				// danh cho 2 giai thuat chia de tri và truot phang		
							
							var LineChart2 = {
									labels : label,
									datasets : [ {
										fillColor : "rgba(167, 78, 158,0)",
										strokeColor : "rgba(167, 78, 158,1)",
										pointColor : "rgba(255, 255, 0,1)",
										pointStrokeColor : "#fff",
										data : dataSweeping
									}, {
										fillColor : "rgba(248, 156, 36,0)",
										strokeColor : "rgba(255, 45, 45,1)",
										pointColor : "rgba(255, 61, 61,1)",
										pointStrokeColor : "#fff",
										data : datadivideAndConquer
									} ]

								}

								var myLineChart = new Chart(document
										.getElementById("canvasLine2").getContext(
												"2d")).Line(LineChart2, {
									scaleFontSize : 13,
									scaleFontColor : "#ffa45e"
								});

							
// table ket qua
							var t = "<table class='table' style='width:100%; text-align: left; font-size: medium;'>" +
									"<tr style='text-align: center;height: 100px; background-color: rgba(108, 224, 255, 0.25); font-size: 16px; color: royalblue;'>" +
									"<th> Lần</th>" +
									"<th > Tên giải thuật</th>" +
									"<th style='width:80px'> Thời gian (mili giây)</th>" +
									"<th style='width:100px'> Điểm 1</th>" +
									"<th style='width:100px'> Điểm 2</th>" +
									"<th style='width:80px'> Khoảng cách</th>" +
									"<th> </th>" +
									"</tr>";
							
							
							var dem = 0;
							for(var lap = 0;lap<solanlap;lap++){
								 var vd = lap+1;
								t+="<tr>" +
									"<td rowspan='4' style='color: black; font-size: 20px;'>"+vd+"</td>" +
									"<td></td>" +
									"<td></td>" +
									"<td></td>" +
									"<td></td>" +
									"<td></td>" +
									"<td rowspan='4' align='center' style='text-align: center;'>" +
									"<form action='dulieu.jsp' method='get' target='_blank'>" +
										"<input type='text' name='id'  style='display: none;' value='"+data[0].id+lap+"'>" +
										"<button class='btn btn-success' type='submit'  style='height: 35px; width: 50px;'>Data</button>" +
										"</form>" +
										"<br>"+
									"<button class='btn btn-success' onclick='runAgain("+data[0].id+lap+")' style='height: 35px; width: 50px;'>Run </button> </td>" +
									"</tr>";
								
								for (var so = 0; so < 3; so++) {
								
										var i = lap+dem;
										//var lan = data[so].lanthu + 1;
		
										
										//t += "<td>" + lan + "</td>";
										
										if (data[i].tenkieu == "1")
										{	
											var kc = data[i].capdiem.distance;
											
											t += "<tr style='height:80px;font-size: 16px;color: rgb(167, 78, 158);'>";
											t += "<td> Vét cạn</td>";

											t += "<td>" + data[i].thoigian+"</td>";
											t += "<td>X: " + data[i].capdiem.point1.x
													+ "<br> Y: " + data[i].capdiem.point1.y
													+ "</td>";
											t += "<td>X: " + data[i].capdiem.point2.x
													+ "<br> Y: " + data[i].capdiem.point2.y
													+ "</td>";
											t += "<td>" + kc.toFixed(6);
													+ "</td>";
											
											t += "</tr>";
											
											
										}
										
										if (data[i].tenkieu == "2") 
										{	
											var kc = data[i].capdiem.distance;
											t += "<tr style='height:80px;font-size: 16px;color: rgb(255, 61, 61);'>";
											t += "<td> Chia để trị" +
													"</td>";

											t += "<td>" + data[i].thoigian+"</td>";
											t += "<td>X: " + data[i].capdiem.point1.x
													+ "<br> Y: " + data[i].capdiem.point1.y
													+ "</td>";
											t += "<td>X: " + data[i].capdiem.point2.x
													+ "<br> Y: " + data[i].capdiem.point2.y
													+ "</td>";
											t += "<td>" + kc.toFixed(6);
													+ "</td>";
											
											t += "</tr>";
											
										}
										
										
										if (data[i].tenkieu == "3") 
										{
											var kc = data[i].capdiem.distance;
											t += "<tr style='height:80px;font-size: 16px;color:rgb(255, 255, 0);'>";
											t += "<td> Trượt phẳng </td>";

											t += "<td>" + data[i].thoigian+"</td>";
											t += "<td>X: " + data[i].capdiem.point1.x
													+ "<br> Y: " + data[i].capdiem.point1.y
													+ "</td>";
											t += "<td>X: " + data[i].capdiem.point2.x
													+ "<br> Y: " + data[i].capdiem.point2.y
													+ "</td>";
											t += "<td>" + kc.toFixed(6);
													+ "</td>";
											
											t += "</tr>";
											
											
										}
										
										dem++;
	
									}
								dem--;

				}
							t += "</table>";

							$('#table_tt').html(t);
							document.getElementById("bd3").setAttribute("Style", "display:normal");
							document.getElementById("bd2").setAttribute("Style", "display:normal");
						} 
						else {
							alert("Không thực hiện được");
							return false;
						}
					}
				});
	} 
	else {
		return valid;
	}
}

function maxNumber(a, b, c) {
	var max = a;
	if (b > a) {
		max = b;

		if (c > b) {
			max = c;
		}
	} else {

		if (c > a) {
			max = c;
		}
	}

	return max;
}

function xemchitiet(){
	
	
	window.open("kqchitiet.jsp", "ket qua");
	
}

function runAgain(ma){
	if (true) {
		$.ajax({
			type : "POST",
			url : "../giai_thuat_nhom3/RunAgain",
			data : {
				'ma' : ma
			},
			beforeSend: function(){
				$("#dialogWait" ).dialog( "open" );
			},
			complete: function(){
				$("#dialogWait" ).dialog( "close" );
			},
			success : function(data) {

				if (data == "OK") {
					window.open("ChayLai.jsp", "Run Again");
					
			
				} else {
					alert("Không thực hiện được");
					return false;
				}
			}
		});
	} else {
		return valid;
	}
	
}
function showluachon(){
	
	
	var luachon = document.getElementById("luachon").value;

	if(luachon =="1"){
		
		document.getElementById("tt_ngau_nhien").setAttribute("Style", "display:normal");
		document.getElementById("tt_20").setAttribute("Style", "display:none");
		document.getElementById("tt_lech").setAttribute("Style", "display:none");
	}
	
	if(luachon =="2"){
		document.getElementById("tt_ngau_nhien").setAttribute("Style", "display:none");
		document.getElementById("tt_20").setAttribute("Style", "display:normal");
		document.getElementById("tt_lech").setAttribute("Style", "display:none");
	}
	if(luachon =="3"){
		document.getElementById("tt_ngau_nhien").setAttribute("Style", "display:none");
		document.getElementById("tt_20").setAttribute("Style", "display:none");
		document.getElementById("tt_lech").setAttribute("Style", "display:normal");
	}




}


function chay20(){
	if (true) {
		$.ajax({
			type : "POST",
			url : "../giai_thuat_nhom3/Run30",
			data : {
				
			},
			beforeSend: function(){
				$("#dialogWait" ).dialog( "open" );
			},
			complete: function(){
				$("#dialogWait" ).dialog( "close" );
			},
			success : function(data) {

				if (data == "OK") {
					//alert(" Bài toán đã giải xong");
					ketqua30();
			
				} else {
					alert("Không thực hiện được");
					return false;
				}
			}
		});
	} else {
		return valid;
	}
	
}


function ketqua30() {
	if (true) {
		$.ajax({
					type : "POST",
					url : "../giai_thuat_nhom3/laykq",
					data : {

					},
					beforeSend: function(){
						$("#dialogWait" ).dialog( "open" );
					},
					complete: function(){
						$("#dialogWait" ).dialog( "close" );
					},
					success : function(dataObj) {
					

						var data = JSON.parse(dataObj);

						if (data != null) {
							

							
							var databruteForce = [];
							var datadivideAndConquer = [];
							var dataSweeping = [];


						
							var tam1 = 1;
							var tam2 = 1;
							var tam3 = 1;
							databruteForce[0]=0;
							datadivideAndConquer=[0];
							dataSweeping[0]=0;

							var length = Object.keys(data).length;
							
							for (var i = 0; i < length; i++) {

								if (data[i].tenkieu == "1") {

									databruteForce[tam1] = data[i].thoigian;
									tam1++;
								}
								if (data[i].tenkieu == "2") {
									datadivideAndConquer[tam2] = data[i].thoigian;
									tam2++;
								}
								if (data[i].tenkieu == "3") {
									dataSweeping[tam3] = data[i].thoigian;
									tam3++;
								}
							}
							
							
							
					
// 3 giai thuat
							var LineChart = {
								labels : ["0","3","9","12","15","18","21","24","27","30"],
								datasets : [ {
									fillColor : "rgba(167, 78, 158,0)",
									strokeColor : "rgba(167, 78, 158,1)",
									pointColor : "rgba(255, 255, 0,1)",
									pointStrokeColor : "#fff",
									data : dataSweeping
								}, {
									fillColor : "rgba(248, 156, 36,0)",
									strokeColor : "rgba(255, 45, 45,1)",
									pointColor : "rgba(255, 61, 61,1)",
									pointStrokeColor : "#fff",
									data : datadivideAndConquer
								}, {
									fillColor : "rgba(7, 255, 255,0)",
									strokeColor : "rgba(87, 242, 226,1)",
									pointColor : "rgba(167, 78, 158,1)",
									pointStrokeColor : "#fff",
									data : databruteForce
								} ]

							}

							var myLineChart = new Chart(document
									.getElementById("canvasLine").getContext(
											"2d")).Line(LineChart, {
								scaleFontSize : 13,
								scaleFontColor : "#ffa45e"
							});

				// danh cho 2 giai thuat chia de tri và truot phang		
							
							var LineChart2 = {
									labels : ["0","3","9","12","15","18","21","24","27","30"],
									datasets : [ {
										fillColor : "rgba(167, 78, 158,0)",
										strokeColor : "rgba(167, 78, 158,1)",
										pointColor : "rgba(255, 255, 0,1)",
										pointStrokeColor : "#fff",
										data : dataSweeping
									}, {
										fillColor : "rgba(248, 156, 36,0)",
										strokeColor : "rgba(255, 45, 45,1)",
										pointColor : "rgba(255, 61, 61,1)",
										pointStrokeColor : "#fff",
										data : datadivideAndConquer
									} ]

								}

								var myLineChart = new Chart(document
										.getElementById("canvasLine2").getContext(
												"2d")).Line(LineChart2, {
									scaleFontSize : 13,
									scaleFontColor : "#ffa45e"
								});

							
// table ket qua
							var t = "<table class='table' style='width:100%; text-align: left; font-size: medium;'>" +
									"<tr style='text-align: center;height: 100px; background-color: rgba(108, 224, 255, 0.25); font-size: 16px; color: royalblue;'>" +
									"<th> Số lượng điểm</th>" +
									"<th> Tên giải thuật</th>" +
									"<th style='width:80px'> Thời gian (micro giây)</th>" +
									"<th style='width:100px'> Điểm 1</th>" +
									"<th style='width:100px'> Điểm 2</th>" +
									"<th style='width:80px'> Khoảng cách</th>" +
									"<th> </th>" +
									"</tr>";
							
							
							var dem = 0;
							var vd = 3;
							for(var lap = 0;lap<10;lap++){
								 
								t+="<tr>" +
									"<td rowspan='4' style='color: black; font-size: 20px;'>"+vd+"</td>" +
									"<td></td>" +
									"<td></td>" +
									"<td></td>" +
									"<td></td>" +
									"<td></td>" +
									"<td rowspan='4' align='center' style='text-align: center;'>" +
									"<form action='dulieu.jsp' method='get' target='_blank'>" +
										"<input type='text' name='id'  style='display: none;' value='"+data[0].id+lap+"'>" +
										"<button class='btn btn-success' type='submit'  style='height: 35px; width: 50px;'>Data</button>" +
										"</form>" +
										"<br>"+
									"<button class='btn btn-success' onclick='runAgain30("+data[0].id+lap+")' style='height: 35px; width: 50px;'>Run </button> </td>" +
									"</tr>";
								
								for (var so = 0; so < 3; so++) {
								
										var i = lap+dem;
										//var lan = data[so].lanthu + 1;
		
										
										//t += "<td>" + lan + "</td>";
										
										if (data[i].tenkieu == "1")
										{	
											var kc = data[i].capdiem.distance;
											
											t += "<tr style='height:80px;font-size: 16px;color: rgb(167, 78, 158);'>";
											t += "<td> Vét cạn</td>";

											t += "<td>" + data[i].thoigian+"</td>";
											t += "<td>X: " + data[i].capdiem.point1.x
													+ "<br> Y: " + data[i].capdiem.point1.y
													+ "</td>";
											t += "<td>X: " + data[i].capdiem.point2.x
													+ "<br> Y: " + data[i].capdiem.point2.y
													+ "</td>";
											t += "<td>" + kc.toFixed(6);
													+ "</td>";
											
											t += "</tr>";
											
											
										}
										
										if (data[i].tenkieu == "2") 
										{	
											var kc = data[i].capdiem.distance;
											t += "<tr style='height:80px;font-size: 16px;color: rgb(255, 61, 61);'>";
											t += "<td> Chia để trị" +
													"</td>";

											t += "<td>" + data[i].thoigian+"</td>";
											t += "<td>X: " + data[i].capdiem.point1.x
													+ "<br> Y: " + data[i].capdiem.point1.y
													+ "</td>";
											t += "<td>X: " + data[i].capdiem.point2.x
													+ "<br> Y: " + data[i].capdiem.point2.y
													+ "</td>";
											t += "<td>" + kc.toFixed(6);
													+ "</td>";
											
											t += "</tr>";
											
										}
										
										
										if (data[i].tenkieu == "3") 
										{
											var kc = data[i].capdiem.distance;
											t += "<tr style='height:80px;font-size: 16px;color:rgb(255, 255, 0);'>";
											t += "<td> Trượt phẳng </td>";

											t += "<td>" + data[i].thoigian+"</td>";
											t += "<td>X: " + data[i].capdiem.point1.x
													+ "<br> Y: " + data[i].capdiem.point1.y
													+ "</td>";
											t += "<td>X: " + data[i].capdiem.point2.x
													+ "<br> Y: " + data[i].capdiem.point2.y
													+ "</td>";
											t += "<td>" + kc.toFixed(6);
													+ "</td>";
											
											t += "</tr>";
											
											
										}
										
										
										dem++;
	
									}
								dem--;
								vd+=3;

				}
							t += "</table>";

							$('#table_tt').html(t);
							document.getElementById("bd3").setAttribute("Style", "display:normal");
							document.getElementById("bd2").setAttribute("Style", "display:normal");
						} 
						else {
							alert("Không thực hiện được");
							return false;
						}
					}
				});
	} 
	else {
		return valid;
	}
}
function thuc_hien_lech(){
	$('.dynamic-input-error').remove();
	var valid = true;
	var txtsoluong = $('#txtsoluong_lech').val();
	var txtsolan = $('#txtsolan_lech').val();

	if (txtsoluong == '') {
		$('#txtsoluong_lech')
				.parent()
				.append(
						"<div style='color:red;' class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập thông tin.</div>");
		valid = false;
	}

	if (txtsolan == '') {
		$('#txtsolan_lech')
				.parent()
				.append(
						"<div style='color:red;' class='dynamic-input-error'>&uarr;&nbsp;Vui lòng nhập  thông tin.</div>");
		valid = false;
	}
	if (valid) {
		$.ajax({
			type : "POST",
			url : "../giai_thuat_nhom3/tinhtoan_lech",
			data : {
				'txtsolan' : txtsolan,
				'txtsoluong' : txtsoluong
			},
			beforeSend: function(){
				$("#dialogWait" ).dialog( "open" );
			},
			complete: function(){
				$("#dialogWait" ).dialog( "close" );
			},
			success : function(data) {

				if (data == "OK") {
				//	alert(" Bài toán đã giải xong");
					ketqua(txtsolan);
			
				} else {
					alert("Không thực hiện được");
					return false;
				}
			}
		});
	} else {
		return valid;
	}
	
	
}

function runAgain30(ma){
	
	
	if (true) {
		$.ajax({
			type : "POST",
			url : "../giai_thuat_nhom3/RunAgain30",
			data : {
				'ma' : ma
			},
			beforeSend: function(){
				$("#dialogWait" ).dialog( "open" );
			},
			complete: function(){
				$("#dialogWait" ).dialog( "close" );
			},
			success : function(data) {

				if (data == "OK") {
					window.open("ChayLai.jsp", "Run Again");
					
			
				} else {
					alert("Không thực hiện được");
					return false;
				}
			}
		});
	} else {
		return valid;
	}
	
	
	
	
	
	
	
}











