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


<!-- END CORE JS FRAMEWORK -->
<!-- <script type="text/javascript" src="http://code.jquery.com/jquery-1.10.0.min.js"></script> -->

<script src="assets/js/jquery-1.11.1.js" type="text/javascript"></script>
<script type="text/javascript" src="js/Chart.min.js"></script>
<script type="text/javascript" src="js/chaygiaithuat.js"></script>

<!-- JQUERY-UI -->
<link href="jquery-ui-1.11.4/jquery-ui.css" rel="stylesheet"
	type="text/css" />
<link href="jquery-ui-1.11.4/jquery-ui.structure.css" rel="stylesheet"
	type="text/css" />
<link href="jquery-ui-1.11.4/jquery-ui.theme.css" rel="stylesheet"
	type="text/css" />
<script src="jquery-ui-1.11.4/jquery-ui.js" type="text/javascript"></script>
<!-- <script type="text/javascript" src="js/jquery.min.js"></script> -->
<!-- <script type="text/javascript"src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
 -->
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
				<h2 style="font-family: arial; color: white;">Thông Tin</h2>

			</div>
			<div class="box-content">
				<div align="left" class="box" title=" Thông Tin "
					style="display: normal; text-align: center;">
				Trường hợp các tập dữ liệu điểm :
					<select id= "luachon" style=" background-color: white;color: #2d313b;font-size: 16px; border-color: #0090d9;text-align: center;"  onchange="showluachon()">
						<option value="0"></option>
						<option value="1"> Ngẫu nhiên</option>
						<option value="2"> Nhỏ hơn 30 điểm</option>
						<option value="3"> Điểm lệch về 1 trục</option>
						
					</select>
					
					

				</div>
			<div align="center" class="box" id="tt_ngau_nhien" style="display:none" title=" Thông Tin "
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
<!-- 	dữ liệu nhỏ hơn 20 phần tử	 -->	
				<div align="center" class="box" id ="tt_20" style="display:none">
					<button class="btn btn-success" onclick="chay20()"> Thực hiện</button>
				</div>
				
<!-- 	dữ liệu lệch về 1 hướng  -->		

				<div align="center" class="box" id="tt_lech" style="display:none" title=" Thông Tin "
					style="display: normal; text-align: center;">
					<form name="thongtin" method="post">
						<table align="center" width="80%" border="0" class="table-hover"
							cellpadding="5px">
							<tr>
								<td align="left" class="cell-dialog">Số lượng điểm <font
									color="red">*</font></td>
								<td align="left" class="cell-dialog"><input id="txtsoluong_lech"
									name="txtsoluong" class="input-large " type="text"></td>
							</tr>
							<tr>
								<td align="left" class="cell-dialog">Số lần thực hiện <font
									color="red">*</font></td>
								<td align="left" class="cell-dialog"><input id="txtsolan_lech"
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
									<button type="button" onclick="thuc_hien_lech()"
										class="btn btn-success btn-cons">Thực hiện</button>

								</td>
							</tr>
						</table>
					</form>
				</div>


			</div>

		</div>


	<!-- 	<div class="box">
			<div class="box-header">
				<h2 style="font-family: arial; color: white;">Thông Tin</h2>

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

		</div> -->



		<div class="box">

			<div class="box-header">
				<h2 style="font-family: arial; color: white;">Kết quả thực hiện
				</h2>

			</div>

			<p>
				<br>
			</p>

			<div class="box" id="table_tt" align="center"></div>
			<div align="center" class="box-content" style="width: 100%">



				<header>
					<h1>Biểu Đồ</h1>
					<table>
						<tr align="left">
							<th style="background: #83FFFF; width: 50px"></th>
							<th style="width: 80px">Vét cạn</th>

							<th style="background: #FF3D3D; width: 50px"></th>
							<th style="width: 80px">chia để trị</th>

							<th style="background: #D3A6CE; width: 50px"></th>
							<th style="width: 80px">Trượt phẳng</th>
						</tr>
					</table>

				</header>


			</div>


			<div class="box" id="bd3" style="display: none" align="center">
				<header>
					<h2 style="font-family: arial;">
						Biểu đồ thời gian chạy cả 3 giải thuật
						</h1>
				</header>

				<canvas id="canvasLine" height="500" width="800"></canvas>

				<div align="center">
					<button class="btn btn-success" onclick="xemchitiet()">Xem
						kết quả chi tiết</button>
				</div>

			</div>


			<div class="box" id="bd2" style="display: none" align="center">
				<header>
					<h2 style="font-family: arial;">
						Biểu đồ thời gian chạy giải thuật chia để trị và trượt phẳng
						</h1>
				</header>
				<table>
					<tr align="left">


						<th style="background: #FF3D3D; width: 50px"></th>
						<th style="width: 80px">chia để trị</th>

						<th style="background: #D3A6CE; width: 50px"></th>
						<th style="width: 80px">Trượt phẳng</th>
					</tr>
				</table>
				<canvas id="canvasLine2" height="500" width="800"></canvas>

			</div>


		</div>


	</div>
	
<div id="dialogWait"  style="display: none; text-align: center;">
	<div style="text-align:center"><img src="img/30.GIF"/></div>
  <!--  <div style="text-align: center; color:green; padding-top:5px ">Đang tải dữ liệu. Vui lòng chờ</div>
   <div style="text-align: center; color:green; padding:10px; font-weight: bold ">Nhấn phím F5 nếu chờ quá 30 giây.</div>		
 -->
 </div> 



</body>
<script type="text/javascript">
	
</script>
</html>


