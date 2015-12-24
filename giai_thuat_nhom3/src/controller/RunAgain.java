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
import ClosestPair.Data;
import ClosestPair.PUB_Lib;
import ClosestPair.Pair;
import ClosestPair.giai_thuat;
import ClosestPair.result;

/**
 * Servlet implementation class RunAgain
 */
@WebServlet("/RunAgain")
public class RunAgain extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RunAgain() {
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
		String ma = request.getParameter("ma");
				
		String kq ="";
		
		giai_thuat fn = new giai_thuat();
		D_Result rs = new D_Result();
		D_Data data = new D_Data();
		PUB_Lib cnn = new PUB_Lib();
		cnn.connect();
		ObjectContainer db = cnn.getDb();
		
		//tim RID
		
		ObjectSet<result> results = rs.selectAll(db);
		int total = results.size();
		int rID = 0;
		if (total != 0) {
			rID = results.get(total - 1).getId();
		}
		
		List<Data> datas = data.getDataId(db, ma);
	
		//Lay lai csdl
		
		List<Point> points = datas.get(0).getTapDiem();
		Point[] pointsAr = new Point[points.size()];
		int i =0;
		
		for(Point p : points){
			pointsAr[i] = new Point(p);
			i++;
		}

	
		
			//chay giai thuat

			long startTime = System.currentTimeMillis();
			Pair Sweeping = fn.closestPair(pointsAr);
			long elapsedTime = System.currentTimeMillis() - startTime;
			rs.addResult(db, rID+1, "3",0, Sweeping,elapsedTime);
			
			startTime = System.currentTimeMillis();
			Pair dqClosestPair = fn.divideAndConquer(points);
			elapsedTime = System.currentTimeMillis() - startTime;
			rs.addResult(db, rID+1, "2",0, dqClosestPair,elapsedTime);
			
			startTime = System.currentTimeMillis();
			Pair bruteForceClosestPair = fn.bruteForce(points);
			 elapsedTime = System.currentTimeMillis() - startTime;
			rs.addResult(db, rID+1, "1", 0, bruteForceClosestPair,elapsedTime);
			
			if (bruteForceClosestPair.distance != dqClosestPair.distance
					&& Sweeping.distance != bruteForceClosestPair.distance) {
				kq="NO";
			}

		


			else
				kq = "OK";
		
			cnn.closeconnect();
			response.setContentType("text/plain");
			response.getWriter().write(kq);
				
		}
		
	


		
		
}
