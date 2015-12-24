<!DOCTYPE html>

<%@page import="com.google.gson.GsonBuilder"%>
<%@page import="com.google.gson.Gson"%>
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
	
<!-- BEGIN CORE JS FRAMEWORK--> 
<script src="assets/plugins/jquery-1.8.3.min.js" type="text/javascript"></script> 
<script src="assets/plugins/jquery-ui/jquery-ui-1.10.1.custom.min.js" type="text/javascript"></script> 
<script src="assets/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script> 
<script src="assets/plugins/breakpoints.js" type="text/javascript"></script> 
<script src="assets/plugins/jquery-unveil/jquery.unveil.min.js" type="text/javascript"></script> 
<!-- END CORE JS FRAMEWORK --> 
	
<script src="assets/js/jquery-1.11.1.js" type="text/javascript"></script>
<script type="text/javascript" src="js/Chart.min.js"></script>

<!-- JQUERY-UI -->
<link href="jquery-ui-1.11.4/jquery-ui.css" rel="stylesheet" type="text/css" />
<link href="jquery-ui-1.11.4/jquery-ui.structure.css" rel="stylesheet" type="text/css" />
<link href="jquery-ui-1.11.4/jquery-ui.theme.css" rel="stylesheet" type="text/css" />
<script  src="jquery-ui-1.11.4/jquery-ui.js" type="text/javascript"></script>
<script type="text/javascript" src="js/jquery.min.js"></script>
<!-- <script type = "text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
 -->
</head>

<body>
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
int solanlap = rss.size()/3;

%>

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

<!-- 
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
				
 -->

	<div class = "box">
		
		<div class="box-header">
				<h2>
					Kết quả
				</h2>
			
		</div>
		<div class="box-content">
			
			
		
		<table class='table' style='width:100%; text-align: left; font-size: medium;'>
									<tr style='text-align: center;height: 100px; background-color: rgba(108, 224, 255, 0.25); font-size: 16px; color: royalblue;'>
									<th> Lần</th>
									<th> Tên giải thuật</th>
									<th> Thời gian</th>
									<th> Điểm 1</th>
									<th> Điểm 2</th>
									<th> Khoảng cách</th>
									
									</tr>
		<%
		int dem = 0;
		for(int lap = 0; lap < solanlap ;lap++){
			 int vd = lap+1;
		
		%>
		
			<tr>
				<td rowspan='4' style='color: black; font-size: 20px;'><%=vd %></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				
			</tr>
			<%
			for (int so = 0; so < 3; so++) {
				
				int i= lap+dem;
				
				if(rss.get(i).getTenkieu().equals("1")){
					
					%>
	
					<tr style= "height:80px;font-size: 16px;color: rgb(167, 78, 158);">
					<td>Brute Force</td>

					<td><%=rss.get(i).getThoigian()%></td>
					<td>X: <%=rss.get(i).getCapdiem().getPoint1().getX()%>
						<br> Y: <%=rss.get(i).getCapdiem().getPoint1().getY()%>
					 </td>
					<td>X: <%=rss.get(i).getCapdiem().getPoint2().getX()%>
						 <br> Y: <%=rss.get(i).getCapdiem().getPoint2().getY()%>
					</td>
					<td><%=rss.get(i).getCapdiem().getDistance()%>
					</td>
					
					</tr>
					
				<%	
				}

				if(rss.get(i).getTenkieu().equals("2")){
					%>

					<tr style= "height:80px;font-size: 16px;color: rgb(167, 78, 158);">
					<td>Divide and Conquer</td>

					<td><%= rss.get(i).getThoigian()%></td>
					<td>X: <%= rss.get(i).getCapdiem().getPoint1().getX()%>
						<br> Y: <%= rss.get(i).getCapdiem().getPoint1().getY()%>
					 </td>
					<td>X: <%= rss.get(i).getCapdiem().getPoint2().getX()%>
						 <br> Y: <%= rss.get(i).getCapdiem().getPoint2().getY()%>
					</td>
					<td><%= rss.get(i).getCapdiem().getDistance()%>
					</td>
					
					</tr>
					
				<%	
				}

				if(rss.get(i).getTenkieu().equals("3")){
					%>

					<tr style= "height:80px;font-size: 16px;color: rgb(167, 78, 158);">
					<td>Plane Sweep</td>

					<td><%= rss.get(i).getThoigian()%></td>
					<td>X: <%= rss.get(i).getCapdiem().getPoint1().getX()%>
						<br> Y: <%= rss.get(i).getCapdiem().getPoint1().getY()%>
					 </td>
					<td>X: <%= rss.get(i).getCapdiem().getPoint2().getX()%>
						 <br> Y: <%= rss.get(i).getCapdiem().getPoint2().getY()%>
					</td>
					<td><%= rss.get(i).getCapdiem().getDistance()%>
					</td>
					
					</tr>
					
				<%	
				}
			
				dem++;
			}
			%>
			
		
		<%  dem--;} %>
		</table>
		
		</div>

	</div>


	</div>
<% cnn.closeconnect(); %>

</body>
</html>