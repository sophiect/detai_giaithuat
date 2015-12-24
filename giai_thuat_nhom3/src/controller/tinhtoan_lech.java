package controller;

import java.awt.Point;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.db4o.ObjectContainer;
import com.db4o.ObjectSet;

import ClosestPair.D_Data;
import ClosestPair.D_Result;
import ClosestPair.PUB_Lib;
import ClosestPair.Pair;
import ClosestPair.giai_thuat;
import ClosestPair.result;

/**
 * Servlet implementation class tinhtoan_lech
 */
@WebServlet("/tinhtoan_lech")
public class tinhtoan_lech extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public tinhtoan_lech() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int soluong = Integer.parseInt(request.getParameter("txtsoluong"));
		int sovonglap = Integer.parseInt(request.getParameter("txtsolan"));
		String kq ="";
		
		giai_thuat fn = new giai_thuat();
		D_Result rs = new D_Result();
		D_Data data = new D_Data();
		PUB_Lib cnn = new PUB_Lib();
		cnn.connect();
		ObjectContainer db = cnn.getDb();
		ObjectSet<result> results = rs.selectAll(db);
		int total = results.size();
		int rID = 0;
		if (total != 0) {
			rID = results.get(total - 1).getId();
		}

		for (int k = 0; k < sovonglap; k++) {

			int numPoints = soluong;

			List<Point> points = new ArrayList<Point>();
			Point[] pointsAr = new Point[soluong];
			Random r = new Random();
			
			int soluong8=(soluong/10)*8;
			
			//chay ramdom
			
			for (int i = 0; i < numPoints; i++) {
				
				if(i<soluong8){
					int x = fn.RandomInt(0, 10000, r);
					int y = fn.RandomInt(-10000, 10000, r);
					points.add(new Point(x, y));
					pointsAr[i] = new Point(x, y);
				}
				else{
					int x = fn.RandomInt(-10000, 10000, r);
					int y = fn.RandomInt(-10000, 10000, r);
					points.add(new Point(x, y));
					pointsAr[i] = new Point(x, y);
				}
				

			}
			
			//them data
			int ma = rID+1;
			String nhan = Integer.toString(ma)+Integer.toString(k);
			data.addData(db, nhan, points);
			
			
			//chay giai thuat

			long startTime = System.currentTimeMillis();
			Pair Sweeping = fn.closestPair(pointsAr);
			long elapsedTime = System.currentTimeMillis() - startTime;
			rs.addResult(db, ma, "3", k, Sweeping,elapsedTime);
			
			startTime = System.currentTimeMillis();
			Pair dqClosestPair = fn.divideAndConquer(points);
			elapsedTime = System.currentTimeMillis() - startTime;
			rs.addResult(db, ma, "2", k, dqClosestPair,elapsedTime);
			
			startTime = System.currentTimeMillis();
			Pair bruteForceClosestPair = fn.bruteForce(points);
			 elapsedTime = System.currentTimeMillis() - startTime;
			rs.addResult(db, ma, "1", k, bruteForceClosestPair,elapsedTime);
			if (bruteForceClosestPair.distance != dqClosestPair.distance
					&& Sweeping.distance != bruteForceClosestPair.distance) {
				kq="NO";
			}

		


			else
				kq = "OK";
		
		}
		cnn.closeconnect();
		response.setContentType("text/plain");
		response.getWriter().write(kq);
		
		
	}

}
