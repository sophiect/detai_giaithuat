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
			success : function(data) {

				if (data == "OK") {
					alert(" Bài toán đã giải xong");
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
	

alert("ok");
	if (true) {
		$.ajax({
					type : "POST",
					url : "../giai_thuat_nhom3/laykq",
					data : {

					},
					success : function(dataObj) {
					

						var data = JSON.parse(dataObj);

						if (data != null) {
							alert("ok");

							
							var databruteForce = [];
							var datadivideAndConquer = [];
							var dataSweeping = [];

							var databruteForcept = [];
							var datadivideAndConquerpt = [];
							var dataSweepingpt = [];

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
								
								var max = maxNumber(databruteForce[l],
										datadivideAndConquer[l],
										dataSweeping[l]);
								databruteForcept[l] = (databruteForce[l] * 100)
										/ max;
								datadivideAndConquerpt[l] = (datadivideAndConquer[l] * 100)
										/ max;
								dataSweepingpt[l] = (dataSweeping[l] * 100)
										/ max;
								var j = l + 1;
								label[l] = "lan " + j;

							}
							
							
							
							var BarChart = {
								labels : label,
								datasets : [ {
									fillColor : "rgba(167, 78, 158,0.5)",
									strokeColor : "rgba(167, 78, 158,1)",
									data : dataSweeping
								}, {
									fillColor : "rgba(248, 156, 36,0.5)",
									strokeColor : "rgba(248, 156, 36,1)",
									data : datadivideAndConquer
								}, {
									fillColor : "rgba(7, 255, 255,0.5)",
									strokeColor : "rgba(87, 242, 226,1)",
									data : databruteForce
								} ]

							}

							var myBarChart = new Chart(document.getElementById(
									"canvasBar").getContext("2d")).Bar(
									BarChart, {
										scaleFontSize : 13,
										scaleFontColor : "#ffa45e"
									});
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
									strokeColor : "rgba(248, 156, 36,1)",
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
										strokeColor : "rgba(248, 156, 36,1)",
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
							var t = "<table class='table table-bordered' style='width:100%; text-align: center; font-size: medium;'><tr style='height: 100px; background-color: rgba(108, 224, 255, 0.25); font-size: 16px; color: royalblue;'><th> Lần</th><th> Tên giải thuật</th><th> Thời gian</th><th> Điểm 1</th><th> Điểm 2</th><th> Khoảng cách</th></tr>";

							for (var i = 0; i < length; i++) {
								var lan = data[i].lanthu + 1;

								t += "<tr style='height:80px;color: rgba(0, 0, 0, 0.67);'>";
								t += "<td>vong lap thu " + lan + "</td>";
								if (data[i].tenkieu == "1") {
									t += "<td>brute Force</td>";
								}
								if (data[i].tenkieu == "2") {
									t += "<td>divide And Conquer</td>";
								}
								if (data[i].tenkieu == "3") {
									t += "<td>Sweeping</td>";
								}

								t += "<td>" + data[i].thoigian+"</td>";
								t += "<td>X: " + data[i].capdiem.point1.x
										+ "<br> Y: " + data[i].capdiem.point1.y
										+ "</td>";
								t += "<td>X: " + data[i].capdiem.point2.x
										+ "<br> Y: " + data[i].capdiem.point2.y
										+ "</td>";
								t += "<td>" + data[i].capdiem.distance
										+ "</td>";
								t += "</tr>";
							

							}

							t += "</table>";

							$('#table_tt').html(t);

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