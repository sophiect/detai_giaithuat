<!DOCTYPE html>
<%@page import="ClosestPair.result"%>
<%@page import="com.db4o.ObjectSet"%>
<%@page import="ClosestPair.D_Result"%>
<%@page import="com.db4o.ObjectContainer"%>
<%@page import="ClosestPair.PUB_Lib"%>
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


<script src="assets/js/jquery-1.11.1.js" type="text/javascript"></script>
<script type="text/javascript" src="js/Chart.min.js"></script>


<!-- JQUERY-UI -->
<link href="jquery-ui-1.11.4/jquery-ui.css" rel="stylesheet"
	type="text/css" />
<link href="jquery-ui-1.11.4/jquery-ui.structure.css" rel="stylesheet"
	type="text/css" />
<link href="jquery-ui-1.11.4/jquery-ui.theme.css" rel="stylesheet"
	type="text/css" />
<script src="jquery-ui-1.11.4/jquery-ui.js" type="text/javascript"></script>

<script type="text/javascript" src="js/jquery.min.js"></script>
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


			
		
<%
PUB_Lib cnn = new PUB_Lib();
cnn.connect();
ObjectContainer db = cnn.getDb();

D_Result rs = new D_Result();
ObjectSet<result> results = rs.selectAll(db);
int total = results.size();
int rID = 0;
if (total != 0) {
	rID = results.get(total - 1).getId();
}
ObjectSet<result> rss = db.queryByExample(new result(rID));


%>


		<div class="box">

			<div class="box-header">
				<h2  style="font-family: arial; color: white;">
					Kết quả thực hiện
				</h2>

			</div>
		
			<p><br></p>
			
			<div class="box" id = "table_tt" align="center">
				<table class='table' style='width:100%; text-align: left; font-size: medium;'>
									<tr style='text-align: center;height: 100px; background-color: rgba(108, 224, 255, 0.25); font-size: 16px; color: royalblue;'>
									
									<th> Tên giải thuật</th>
									<th> Thời gian</th>
									<th> Điểm 1</th>
									<th> Điểm 2</th>
									<th> Khoảng cách</th>
									
									</tr>
	
			<%
			for(result rl: rss){
			
				
				if(rl.getTenkieu().equals("1")){
					
					%>
	
					<tr style= "height:80px;font-size: 16px;color: rgb(167, 78, 158);">
					<td>Brute Force</td>

					<td><%=rl.getThoigian()%></td>
					<td>X: <%=rl.getCapdiem().getPoint1().getX()%>
						<br> Y: <%=rl.getCapdiem().getPoint1().getY()%>
					 </td>
					<td>X: <%=rl.getCapdiem().getPoint2().getX()%>
						 <br> Y: <%=rl.getCapdiem().getPoint2().getY()%>
					</td>
					<td><%=rl.getCapdiem().getDistance()%>
					<span id = "tg1" value = "<%=rl.getThoigian() %>" >
					
					</td>
					
					</tr>
					
				<%	
				}

				if(rl.getTenkieu().equals("2")){
					%>

					<tr style= "height:80px;font-size: 16px;color: rgb(167, 78, 158);">
					<td>Divide and Conquer</td>

					<td><%= rl.getThoigian()%></td>
					<td>X: <%= rl.getCapdiem().getPoint1().getX()%>
						<br> Y: <%= rl.getCapdiem().getPoint1().getY()%>
					 </td>
					<td>X: <%= rl.getCapdiem().getPoint2().getX()%>
						 <br> Y: <%= rl.getCapdiem().getPoint2().getY()%>
					</td>
					<td><%= rl.getCapdiem().getDistance()%>
					<span id = "tg2" value = "<%=rl.getThoigian() %>" >
					</td>
					
					</tr>
					
				<%	
				}

				if(rl.getTenkieu().equals("3")){
					%>

					<tr style= "height:80px;font-size: 16px;color: rgb(167, 78, 158);">
					<td>Plane Sweep</td>

					<td><%= rl.getThoigian()%></td>
					<td>X: <%= rl.getCapdiem().getPoint1().getX()%>
						<br> Y: <%= rl.getCapdiem().getPoint1().getY()%>
					 </td>
					<td>X: <%= rl.getCapdiem().getPoint2().getX()%>
						 <br> Y: <%= rl.getCapdiem().getPoint2().getY()%>
					</td>
					<td><%= rl.getCapdiem().getDistance()%>
					<span id = "tg3" value = "<%=rl.getThoigian() %>" >
					</td>
					
					</tr>
					
				<%	
				}
			
				
			}
			%>
			
	
		</table>
				
				
			</div>
		<!-- 	<div align="center" class="box-content" style="width: 100%">
			
			
												
				<header>
					<h1>Biểu Đồ</h1>
				 	<table >
						<tr align="left">
							<th style="background: #83FFFF; width: 50px"></th>
							<th style="width: 80px">Vét cạn</th>
						
							<th style="background: #FBCD91;  width: 50px"></th>
							<th style="width: 80px">chia để trị</th>
						
							<th style="background: #D3A6CE;  width: 50px"></th>
							<th style="width: 80px"> Trượt phẳng</th>
						</tr>
					</table> 
					
				</header>

				
			</div>
	
			
			<div  class="box" id="bd3" style="display: none" align="center" >
			<header><h2 style="font-family: arial;">Biểu đồ thời gian chạy cả 3 giải thuật</h1></header>
			
			<canvas id="canvasLine" height="500" width="800"></canvas>
			
			<div align="center"><button class="btn btn-success" onclick="xemchitiet()">Xem kết quả chi tiết</button></div>
			
			</div>
			
			
			<div class="box" id="bd2" style="display: none" align="center" >
			<header><h2 style="font-family: arial;">Biểu đồ thời gian chạy giải thuật chia để trị và trượt phẳng</h1></header>
			<table >
						<tr align="left">
							
						
							<th style="background: #FBCD91;  width: 50px"></th>
							<th style="width: 80px">chia để trị</th>
						
							<th style="background: #D3A6CE;  width: 50px"></th>
							<th style="width: 80px"> Trượt phẳng</th>
						</tr>
					</table> 
			<canvas id="canvasLine2" height="500" width="800"></canvas>
			
			</div> -->
			
			
		</div>


	</div>
	
	<script type="text/javascript">

	var LineChart = {
		labels : ["Ruby", "jQuery","Java","ASP.Net","PHP"],
		datasets : [
			{
				fillColor : "rgba(151,249,190,0.5)",
				strokeColor : "rgba(255,255,255,1)",
				pointColor : "rgba(220,220,220,1)",
				pointStrokeColor : "#fff",
				data : [10,20,30,40,50]
			},
			{
				fillColor : "rgba(252,147,65,0.5)",
				strokeColor : "rgba(255,255,255,1)",
				pointColor : "rgba(173,173,173,1)",
				pointStrokeColor : "#fff",
				data : [28,68,40,19,96]
			}
		]
		
	}

var myLineChart = new Chart(document.getElementById("canvasLine").getContext("2d")).Line(LineChart, {scaleFontSize : 13, 	scaleFontColor : "#ffa45e"});
// danh cho 2 giai thuat chia de tri và truot phang		
		
		var LineChart2 = {
				labels : " Lần 1",
				datasets : [ {
					fillColor : "rgba(167, 78, 158,0)",
					strokeColor : "rgba(167, 78, 158,1)",
					pointColor : "rgba(255, 255, 0,1)",
					pointStrokeColor : "#fff",
					data : document.getElementById("tg3").value
				}, {
					fillColor : "rgba(248, 156, 36,0)",
					strokeColor : "rgba(248, 156, 36,1)",
					pointColor : "rgba(255, 61, 61,1)",
					pointStrokeColor : "#fff",
					data : document.getElementById("tg2").value
				} ]

			}

			var myLineChart = new Chart(document
					.getElementById("canvasLine2").getContext(
							"2d")).Line(LineChart2, {
				scaleFontSize : 13,
				scaleFontColor : "#ffa45e"
			});

	</script>

	 <%cnn.closeconnect(); %>
</body>
</html>


