package ClosestPair;

import java.awt.Point;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Random;

public class test {
	
	
	public static void main(String[] args) {
		double distance = 3244.31232131;
		DecimalFormat df = new DecimalFormat("#.0000");   
		double a = Double.parseDouble(df.format(distance));
		System.out.println(a);
		
		/* for(int k=0;k<5;k++){
			 System.out.println("");
				System.out.println("lan "+k);
		  int numPoints = 100;
		  List<Point> points = new ArrayList<Point>(); 
			  
			  Random r = new Random();
				  for (int i = 0; i < numPoints; i++)
						  { 
						  int x = giai_thuat.RandomInt(-999, 999, r) ;
						  int y = giai_thuat.RandomInt(-999, 999, r) ;
						  points.add(new Point(x, y));
						  
						  
						  } 
				
				long startTime = System.nanoTime();
				Pair dqClosestPair = giai_thuat.divideAndConquer(points);
				long elapsedTime = System.nanoTime() - startTime;
				
				System.out.println("dqClosestPair binh thuong");
				System.out.println(elapsedTime);
				System.out.println(dqClosestPair);
		
				
				 startTime = System.nanoTime();
				Pair dqClosestPair5 = giai_thuat.divideAndConquer5(points);
				 elapsedTime = System.nanoTime() - startTime;
			
				System.out.println("dqClosestPair them 5");
				System.out.println(elapsedTime);
				System.out.println(dqClosestPair5);
				
		 }
			
			 */

	}

}
