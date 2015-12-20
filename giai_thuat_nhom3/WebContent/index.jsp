<!DOCTYPE html>

<%@ page language="java" contentType="text/html; charset=UTF8"
	pageEncoding="UTF8"%>
<html>
<head>
<meta charset="UTF-8">
<title>Visualize Data Beautifully Using JS Charts</title>
<link href="css/style.css" media="screen" rel="stylesheet">
<link
	href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800'
	rel='stylesheet' type='text/css'>
	
<!-- BEGIN CORE JS FRAMEWORK--> 
<script src="assets/plugins/jquery-1.8.3.min.js" type="text/javascript"></script> 
<script src="assets/plugins/jquery-ui/jquery-ui-1.10.1.custom.min.js" type="text/javascript"></script> 
<script src="assets/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script> 
<script src="assets/plugins/breakpoints.js" type="text/javascript"></script> 
<script src="assets/plugins/jquery-unveil/jquery.unveil.min.js" type="text/javascript"></script> 
<!-- END CORE JS FRAMEWORK --> 
	
<script src="assets/js/jquery-1.11.1.js" type="text/javascript"></script>
<script type="text/javascript" src="js/Chart.min.js"></script>
<script type="text/javascript" src="js/giaithuat.js"></script>
<!-- JQUERY-UI -->
<link href="jquery-ui-1.11.4/jquery-ui.css" rel="stylesheet" type="text/css" />
<link href="jquery-ui-1.11.4/jquery-ui.structure.css" rel="stylesheet" type="text/css" />
<link href="jquery-ui-1.11.4/jquery-ui.theme.css" rel="stylesheet" type="text/css" />
<script  src="jquery-ui-1.11.4/jquery-ui.js" type="text/javascript"></script>

<script type = "text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

</head>

<body>
	<div class="container">

		<div class="clearfix"></div>
		<div class="content">
			<div class="span10" align="center" style="width: 100%">

				<div style="background-color: white;" class="grid simple ">
					<div href="index.jsp">
						<img style="width: 100%;" src="img/bgbanner.jpg">
					</div>
				</div>
			</div>
		</div>


		<div align="dialogshow"  class="box" title=" Thông Tin " style="display: none; text-align: center;">
			<form name="thongtin" method="post">
				<table align="center" width="80%"  border="0" class="table-hover" cellpadding="5px">
					<tr>
						<td align="left" class="cell-dialog">Số lượng điểm <font
							color="red">*</font></td>
						<td align="left" class="cell-dialog">
						<input id="txtsoluong" name="txtsoluong" class="input-large " type="text"></td>
					</tr>
					<tr>
						<td align="left" class="cell-dialog">Số lần thực hiện <font
							color="red">*</font></td>
						<td align="left" class="cell-dialog">
						<input id="txtsolan" name="txtsolan" class="input-large " type="text"></td>
					</tr>



					<tr>
						<td align="left" colspan="2" class="cell-dialog"><i>(<font
								color="red">*</font>) thông tin bắt buộc nhập
						</i></td>
					</tr>
					<tr>
						<td align="center" colspan="2" class="cell-dialog">
							<hr>
							<button type="button"  onclick="thuc_hien()" class="btn btn-success btn-cons">Thực
								hiện</button>

						</td>
					</tr>
				</table>
			</form>
		</div>
				


	<div class = "box">
		
		<div class="box-header">
				<h2>
					<i class="icon-bar-chart"></i> Thông Tin 
				</h2>
			
		</div>
		<div class="box-content">
			<header>
			<h1>Biểu Đồ</h1>
		</header>

		<nav>
			
		</nav>

		<canvas id="canvas" height="450" width="610"></canvas>
		
		</div>

	</div>


	</div>

	<script>
		var BarChart = {
			labels : [ "Ruby", "jQuery", "Java", "ASP.Net", "PHP" ],
			datasets : [ {
				fillColor : "rgba(151,249,190,0.5)",
				strokeColor : "rgba(255,255,255,1)",
				data : [ 13, 20, 30, 40, 50 ]
			}, {
				fillColor : "rgba(252,147,65,0.5)",
				strokeColor : "rgba(255,255,255,1)",
				data : [ 28, 68, 40, 19, 96 ]
			} ]

		}

		var myBarChart = new Chart(document.getElementById("canvas")
				.getContext("2d")).Bar(BarChart, {
			scaleFontSize : 13,
			scaleFontColor : "#ffa45e"
		});
	</script>


</body>
</html>