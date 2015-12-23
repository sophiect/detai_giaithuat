package ClosestPair;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

import com.db4o.ObjectContainer;
import com.db4o.ObjectSet;
import com.sun.jndi.cosnaming.CNNameParser;

import ClosestPair.Pair;


import java.awt.Point;


public class main {

	public static int soluong = 4000;
	
	public static void main(String[] args) {
		giai_thuat fn = new giai_thuat();
		D_Result rs = new D_Result();
		
		PUB_Lib cnn = new PUB_Lib();
		cnn.connect();
		ObjectContainer db = cnn.getDb();
		ObjectSet<result> results = rs.selectAll(db);
		int total = results.size();
		int rID = 0;
		if (total != 0) {
			rID = results.get(total - 1).getId();
		}

			int numPoints = soluong;

			List<Point> points = new ArrayList<Point>();
			Point[] pointsAr = new Point[soluong];
			Random r = new Random();

			for (int i = 0; i < numPoints; i++) {
				int x = r.nextInt();
				int y = r.nextInt();
				points.add(new Point(x, y));
				pointsAr[i] = new Point(x, y);

			}
			int k =0;

			/*long startTime = System.currentTimeMillis();
			Pair bruteForceClosestPair = fn.bruteForce(points);
			long elapsedTime = System.currentTimeMillis() - startTime;
			System.out.println(bruteForceClosestPair);
			System.out.println(elapsedTime);
			rs.addResult(db, rID + 1, "1", k, bruteForceClosestPair,elapsedTime);*/

			long startTime = System.currentTimeMillis();
			Pair dqClosestPair = fn.divideAndConquer(points);
			long elapsedTime = System.currentTimeMillis() - startTime;
			System.out.println(dqClosestPair);
			System.out.println(elapsedTime);
			rs.addResult(db, rID + 1, "2", k, dqClosestPair,elapsedTime);

			startTime = System.currentTimeMillis();
			Pair Sweeping = fn.closestPair(pointsAr);
			elapsedTime = System.currentTimeMillis() - startTime;
			System.out.println(Sweeping);
			System.out.println(elapsedTime);
			rs.addResult(db, rID + 1, "3", k, Sweeping,elapsedTime);
			
			ObjectSet<result> results1 = rs.selectAll(db);
			for(result  ra : results1){
				
				System.out.println(ra.getThoigian());
			}
			
	
		cnn.closeconnect();
	}
	}
