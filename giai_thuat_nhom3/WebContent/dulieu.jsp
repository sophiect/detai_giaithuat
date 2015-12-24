<!DOCTYPE html>

<%@page import="java.awt.Point"%>
<%@page import="ClosestPair.Data"%>
<%@page import="java.util.List"%>
<%@page import="ClosestPair.D_Data"%>
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

String ma = request.getParameter("id");
D_Data data = new D_Data();
List<Data> datas = data.getDataId(db, ma);

%>

	<div class="container">

		<div class="clearfix""></div>
		<div class="content">
			<div class="span10" align="center" style="width: 100%">

				<div style="background-color: white;" class="grid simple ">
					<div href="index.jsp">
						<img style="width: 100%;" src="img/bgbanner.jpg">
					</div>
				</div>
			</div>
		</div>


	<div class = "box">
		
		<div class="box-header">
				<h2>
					Dữ Liệu Điểm
				</h2>
			
		</div>
		<div class="box-content">
			
			
		
		<table class='table' style='width:100%; text-align: center; font-size: medium;'>
									<tr style='text-align: center;height: 100px; background-color: rgba(108, 224, 255, 0.25); font-size: 16px; color: royalblue;'>
									<th> STT </th>
									<th> Tọa Độ X</th>
									<th>  Tọa Độ Y</th>
									
									
									</tr>
		<%
		int stt =0;
		for( Data d : datas){
			
			List<Point> ps = d.getTapDiem();
			
			for(Point p :ps){
				stt++;
				%>
				
			<tr>
				
				<td><%=stt %></td>
				<td><%=p.getX() %></td>
				<td><%=p.getY() %></td>
				
				
			</tr>
				
				
				<%
				
				
			}
		}
		
		%>
	
			
		</table>
		
		</div>

	</div>


	</div>
<% cnn.closeconnect(); %>

</body>
</html>