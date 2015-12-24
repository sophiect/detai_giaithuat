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
 * Servlet implementation class Run30
 */
@WebServlet("/Run30")
public class Run30 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Run30() {
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
		int numPoints = 5;
		for (int k = 0; k < 6; k++) {

		

			List<Point> points = new ArrayList<Point>();
			Point[] pointsAr = new Point[numPoints];
			Random r = new Random();
			
			//chay ramdom
			
			for (int i = 0; i < numPoints; i++) {
				
				int x = fn.RandomInt(-10000, 10000, r);
				int y = fn.RandomInt(-10000, 10000, r);
				points.add(new Point(x, y));
				pointsAr[i] = new Point(x, y);

			}
			
			//them data
			int ma = rID+1;
			String nhan = Integer.toString(ma)+Integer.toString(k);
			data.addData(db, nhan, points);
			
			
			//chay giai thuat
			long startTime = System.nanoTime();
			
			Pair Sweeping = fn.closestPair(pointsAr);
			long elapsedTime = System.nanoTime() - startTime;
			rs.addResult(db, ma, "3", k, Sweeping,elapsedTime);
			
			startTime =System.nanoTime();
			Pair dqClosestPair = fn.divideAndConquer(points);
			elapsedTime = System.nanoTime() - startTime;
			rs.addResult(db, ma, "2", k, dqClosestPair,elapsedTime);
			
			startTime = System.nanoTime();
			Pair bruteForceClosestPair = fn.bruteForce(points);
			 elapsedTime = System.nanoTime() - startTime;
			rs.addResult(db, ma, "1", k, bruteForceClosestPair,elapsedTime);
			if (bruteForceClosestPair.distance != dqClosestPair.distance
					&& Sweeping.distance != bruteForceClosestPair.distance) {
				kq="NO";
			}

		


			else
				kq = "OK";
			
		numPoints+=5;
		
		}
		cnn.closeconnect();
		response.setContentType("text/plain");
		response.getWriter().write(kq);
	}

}
