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
<!-- <script src="assets/plugins/jquery-1.8.3.min.js" type="text/javascript"></script>
<script src="assets/plugins/jquery-ui/jquery-ui-1.10.1.custom.min.js"
	type="text/javascript"></script>
<script src="assets/plugins/bootstrap/js/bootstrap.min.js"
	type="text/javascript"></script>
<script src="assets/plugins/breakpoints.js" type="text/javascript"></script>
<script src="assets/plugins/jquery-unveil/jquery.unveil.min.js"
	type="text/javascript"></script> -->

<!-- END CORE JS FRAMEWORK -->


<script src="assets/js/jquery-1.11.1.js" type="text/javascript"></script>
<script type="text/javascript" src="js/Chart.min.js"></script>
<script type="text/javascript" src="js/giaithuat.js"></script>

<!-- JQUERY-UI -->
<link href="jquery-ui-1.11.4/jquery-ui.css" rel="stylesheet"
	type="text/css" />
<link href="jquery-ui-1.11.4/jquery-ui.structure.css" rel="stylesheet"
	type="text/css" />
<link href="jquery-ui-1.11.4/jquery-ui.theme.css" rel="stylesheet"
	type="text/css" />
<script src="jquery-ui-1.11.4/jquery-ui.js" type="text/javascript"></script>


<script type="text/javascript"src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

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


		<div class="box">
			<div class="box-header">
				<h2>
					<i class="icon-bar-chart"></i> Thông Tin
				</h2>

			</div>
			<div class="box-content">
				<div align="center" class="box" title=" Thông Tin "
					style="display: normal; text-align: center;">
					<form name="thongtin" method="post">
						<table align="center" width="80%" border="0" class="table-hover"
							cellpadding="5px">
							<tr>
								<td align="left" class="cell-dialog">Số lượng điểm <font
									color="red">*</font></td>
								<td align="left" class="cell-dialog"><input id="txtsoluong"
									name="txtsoluong" class="input-large " type="text"></td>
							</tr>
							<tr>
								<td align="left" class="cell-dialog">Số lần thực hiện <font
									color="red">*</font></td>
								<td align="left" class="cell-dialog"><input id="txtsolan"
									name="txtsolan" class="input-large " type="text"></td>
							</tr>



							<tr>
								<td align="left" colspan="2" class="cell-dialog"><i>(<font
										color="red">*</font>) thông tin bắt buộc nhập
								</i></td>
							</tr>
							<tr>
								<td align="center" colspan="2" class="cell-dialog">
									<hr>
									<button type="button" onclick="thuc_hien()"
										class="btn btn-success btn-cons">Thực hiện</button>

								</td>
							</tr>
						</table>
					</form>
				</div>



			</div>

		</div>



		<div class="box">

			<div class="box-header">
				<h2>
					<i class="icon-bar-chart"></i> Thông Tin
				</h2>

			</div>
			<div align="center" class="box-content" style="width: 100%">
			
			
												
				<header>
					<h1>Biểu Đồ</h1>
				<!-- 	<table >
						<tr align="left">
							<th style="background: #83FFFF; width: 50px"></th>
							<th style="width: 80px">Vét cạn</th>
						
							<th style="background: #FBCD91;  width: 50px"></th>
							<th style="width: 80px">chia để trị</th>
						
							<th style="background: #D3A6CE;  width: 50px"></th>
							<th style="width: 80px"> Trượt phẳng</th>
						</tr>
					</table> -->
					<table >
						<tr align="left">
							<th style="background: #83FFFF; width: 50px"></th>
							<th style="width: 80px">chia để trị</th>
						
							<th style="background: #FBCD91;  width: 50px"></th>
							<th style="width: 80px">Vét cạn</th>
						
							<th style="background: #D3A6CE;  width: 50px"></th>
							<th style="width: 80px"> Trượt phẳng</th>
						</tr>
					</table>
				</header>

				<nav></nav>

				<canvas id="canvasBar" height="500" width="1000"></canvas>

			</div>
	
			
			<div>
			<canvas id="canvasLine" height="500" width="1000"></canvas>
			</div>
				<div id = "table_tt">
				
				
			</div>
		</div>


	</div>
	<!-- 
	 <script>
		var BarChart = {
			labels : [ "lan 1", "lan 2", "lan 3", "lan 4", "lan 5","lan 6", ],
			datasets : [ {
				fillColor : "rgba(167, 78, 158,0.5)",
				strokeColor : "rgba(167, 78, 158,1)",
				data : [ 13, 20, 30, 40, 50 ]
			}, {
				fillColor : "rgba(248, 156, 36,0.5)",
				strokeColor : "rgba(248, 156, 36,1)",
				data : [ 28, 68, 40, 19, 96 ]
			}, {
				fillColor : "rgba(7, 255, 255,0.5)",
  				strokeColor : "rgba(87, 242, 226,1)",
  				data : [ 28, 68, 40, 19, 96 ]
   				} ]

		}

		var myBarChart = new Chart(document.getElementById("canvas")
				.getContext("2d")).Bar(BarChart, {
			scaleFontSize : 13,
			scaleFontColor : "#ffa45e"
		});
	</script>  -->
</body>
</html>

