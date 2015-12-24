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

	public static int soluong = 30;
	 
	

	public static void main(String[] args) {
		
		
		giai_thuat fn = new giai_thuat();
		D_Result rs = new D_Result();

		PUB_Lib cnn = new PUB_Lib();
		cnn.connect();
		ObjectContainer db = cnn.getDb();
		ObjectSet<result> results = rs.selectAll(db);
		System.out.println("chay");
		D_Data data = new D_Data();

		/* String t1 = "nhan1";
		  String t2 = "nhan2";
		  String t3 = "nhan3";
		for (result rl : results) {

			//System.out.println("a");
			System.out.println("'"+rl.getTenkieu()+"'");
			String ta = rl.getTenkieu();
			String kq = Integer.toString(1);
			if (rl.getTenkieu().equals(t1)) {
				System.out.println("bang");
			}
			else{
				System.out.println("hok");
			}
		}*/
/*	List<Data> ds = data.getAllDataId(db);
	//	List<Data> ds = data.getDataId(db,"10");
		int stt =0;
		for(Data a:ds){
			System.out.println(a.getId());
			List<Point> ps = a.getTapDiem();
				for(Point p :ps){
					stt++;
					System.out.println(stt);
					System.out.println(p.getX());
					System.out.println(p.getY());
				}
		}
		*/
		int total = results.size();
		int rID = 0;
		if (total != 0) {
			rID = results.get(total - 1).getId();
		}
		
		  
		  
		  List<Point> points = new ArrayList<Point>(); Point[] pointsAr = new
		  Point[soluong]; Random r = new Random();
		  
		  /*for (int i = 0; i < numPoints; i++)
		  { 
		  int x = fn.RandomInt(-99, 99, r) ;
		  int y =fn.RandomInt(-99, 99, r) ;
		  points.add(new Point(x, y));
		  pointsAr[i] = new Point(x,
		  y);
		  
		  } */
		  
		  
		  int k = 0; 
		  int numPoints = 1000;
		  
		  
		  for (k = 0; k < 10; k++) {
		
			  for (int i = 0; i < numPoints; i++)
			  { 
			  int x = giai_thuat.RandomInt(-999, 999, r) ;
			  int y = giai_thuat.RandomInt(-999, 999, r) ;
			  points.add(new Point(x, y));
			  pointsAr[i] = new Point(x,y);
			  
			  } 
		  
		//  String nhan = Integer.toString(rID)+Integer.toString(k);
		  
		 // data.addData(db, nhan, points);
		  
		//  long elapsedTime = System.currentTimeMillis() - startTime;
		 // long startTime = System.currentTimeMillis(); 
		  
		  
	
		  long startTime = System.nanoTime();
			Pair Sweeping = giai_thuat.closestPair(pointsAr);
			long elapsedTime = System.nanoTime() - startTime;
			
			//rs.addResult(db, rID+1, "3",0, Sweeping,elapsedTime);
			System.out.println("Sweeping");
			System.out.println(elapsedTime);
			System.out.println(Sweeping);
			
			startTime = System.nanoTime();
			Pair dqClosestPair = giai_thuat.divideAndConquer(points);
			elapsedTime = System.nanoTime() - startTime;
			//rs.addResult(db, rID+1, "2",0, dqClosestPair,elapsedTime);
			System.out.println("dqClosestPair");
			System.out.println(elapsedTime);
			System.out.println(dqClosestPair);
			
			startTime = System.nanoTime();
			Pair bruteForceClosestPair = giai_thuat.bruteForce(points);
			 elapsedTime = System.nanoTime() - startTime;
			//rs.addResult(db, rID+1, "1", 0, bruteForceClosestPair,elapsedTime);
			System.out.println("bruteForceClosestPair");
			System.out.println(elapsedTime);
			System.out.println(bruteForceClosestPair);
			
			
		  numPoints +=5;
		  
		  }
		
		cnn.closeconnect();
	}
}
