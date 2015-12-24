<%@ page language="java" contentType="text/html; charset=UTF8"
	pageEncoding="UTF8"%>
<html>
<!-- BEGIN CONTAINER -->
<div class="page-container row-fluid">
	<!-- BEGIN SIDEBAR -->
	<div class="page-sidebar" id="main-menu">
		<!-- BEGIN MINI-PROFILE -->

		<!-- END MINI-PROFILE -->
		<!-- BEGIN MINI-WIGETS -->
		<!-- END MINI-WIGETS -->
		<!-- BEGIN SIDEBAR MENU -->

		<ul>
			<li class="start active "><a url="www.ctu.edu.vn"> <i
					class="icon-custom-home"></i> <span class="title">Đại học CẦn Thơ</span>
					<span class="selected"></span></a></li>
			<li class=""><a url="www.cit.ctu.edu.vn"> <i class="icon-envelope"></i>
					<span class="title">  Khoa CNTT&TT</span> 
</a>
			<li class=""><a href="javascript:;"> <i
					class="icon-custom-form"></i> <span class="title">Quản lý</span> <span
					class="arrow open "></span>
			</a>
				<ul class="sub-menu" style="display: block;">
					
					<li><a href="../cap_nhat_chi_doan/*">Danh sách chi đoàn.</a></li>
					<li><a href="../ban_chap_hanh_chi_doan/">Ban chấp hành chi đoàn.</a></li>
					<li><a href="../cap_nhat_chi_doan/*">Danh sách sinh viên.</a></li>
					<li><a href="../ban_chap_hanh_doan_khoa/">Ban chấp hành đoàn khoa.</a></li>
					<li><a href="../kehoach/">Cập nhật kế hoạch</a></li>
					

				</ul></li>

			<li class=""><a href="charts.html"> <i
					class="icon-custom-chart"></i> <span class="title">Thống kê
						kế hoạch</span><span class="arrow open "></span>
			</a>
				<ul class="sub-menu" style="display: block;">
					<li><a href="../thong_ke_ke_hoach/*"> Tất cả kế hoạch</a></li>
					<li><a href="../tim_ke_hoach_chi_tiet/*">Chi tiết kế hoạch</a></li>
					<li><a href="../ds_hoat_dong_cua_chi_doan/*"> Hoạt động Chi Đoàn - Sinh Viên</a></li>
					
				</ul></li>
		
	
		
			
		</ul>
		<div class="side-bar-widgets">
			<p class="menu-title">
				FOLDER <span class="pull-right"><a href="#"
					class="create-folder"><i class="icon-plus"></i></a></span>
			</p>
			<ul class="folders" id="folders">
				<li><a href="#">
						<div class="status-icon green"></div> Ghi chú nhanh
				</a></li>

				<li id="folder-input" class="folder-input" style="display: none">
					<input type="text" placeholder="Name of folder"
					class="no-boarder folder-name" name="" id="folder-name">
				</li>
			</ul>

		</div>
		<a href="#" class="scrollup">Scroll</a>
		<div class="clearfix"></div>
		<!-- END SIDEBAR MENU -->
	</div>
	<div class="footer-widget">
		<div
			class="progress transparent progress-success progress-small no-radius no-margin">
			<div data-percentage="79%" class="bar animate-progress-bar"></div>
		</div>
		<div class="pull-right">
			<div class="details-status">
				<span data-animation-duration="560" data-value="86"
					class="animate-number"></span>%
			</div>
			<a href="login.html"><i class="icon-off"></i></a>
		</div>
	</div>
	<!-- END SIDEBAR -->
	<!-- BEGIN PAGE CONTAINER-->
	<div class="page-content">
		<!-- BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM-->
		<div id="portlet-config" class="modal hide">
			<div class="modal-header">
				<button data-dismiss="modal" class="close" type="button"></button>
				<h3>Widget Settings</h3>
			</div>
			<div class="modal-body">Widget settings form goes here</div>
		</div>
		<div class="clearfix"></div>
		<div class="content">
			<div class="row-fluid">
				<div class="span12">
					<div style="background-color: white;" class="grid simple ">
						<div href="index.jsp">
							<img style="width: 100%;" src="../assets/img/bgbanner.jpg">
						</div>
					</div>
				</div>
			</div>
</html>