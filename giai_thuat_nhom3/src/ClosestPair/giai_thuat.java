package ClosestPair;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Random;
import java.util.SortedSet;
import java.util.TreeSet;

import ClosestPair.Pair;
import java.awt.Point;

public class giai_thuat {



	// ------ BRUTE FORCE

	public static double distance(Point p1, Point p2) {
		double xdist = p2.getX() - p1.getX();
		double ydist = p2.getY() - p1.getY();
		return Math.hypot(xdist, ydist);
	}

	public static Pair bruteForce(List<? extends Point> points) {
		int numPoints = points.size();
		if (numPoints < 2)
			return null;
		Pair pair = new Pair(points.get(0), points.get(1));
		if (numPoints > 2) {
			for (int i = 0; i < numPoints - 1; i++) {
				Point point1 = points.get(i);
				for (int j = i + 1; j < numPoints; j++) {
					Point point2 = points.get(j);
					double distance = distance(point1, point2);
					if (distance < pair.distance)
						pair.update(point1, point2, distance);
				}
			}
		}
		return pair;
	}

	// ----- divideAndConquer

	public static void sortByX(List<? extends Point> points) {
		Collections.sort(points, new Comparator<Point>() {
			public int compare(Point point1, Point point2) {
				if (point1.x < point2.x)
					return -1;
				if (point1.x > point2.x)
					return 1;
				return 0;
			}
		});
	}

	public static void sortByY(List<? extends Point> points) {
		Collections.sort(points, new Comparator<Point>() {
			public int compare(Point point1, Point point2) {
				if (point1.y < point2.y)
					return -1;
				if (point1.y > point2.y)
					return 1;
				return 0;
			}
		});
	}

	public static Pair divideAndConquer(List<? extends Point> points) {
		List<Point> pointsSortedByX = new ArrayList<Point>(points);
		sortByX(pointsSortedByX);
		List<Point> pointsSortedByY = new ArrayList<Point>(points);
		sortByY(pointsSortedByY);
		return divideAndConquer(pointsSortedByX, pointsSortedByY);
	}

	private static Pair divideAndConquer(List<? extends Point> pointsSortedByX, List<? extends Point> pointsSortedByY) {
		int numPoints = pointsSortedByX.size();
		if (numPoints <= 3)
			return bruteForce(pointsSortedByX);

		int dividingIndex = numPoints >>> 1;
		List<? extends Point> leftOfCenter = pointsSortedByX.subList(0, dividingIndex);
		List<? extends Point> rightOfCenter = pointsSortedByX.subList(dividingIndex, numPoints);

		List<Point> tempList = new ArrayList<Point>(leftOfCenter);
		sortByY(tempList);
		Pair closestPair = divideAndConquer(leftOfCenter, tempList);

		tempList.clear();
		tempList.addAll(rightOfCenter);
		sortByY(tempList);
		Pair closestPairRight = divideAndConquer(rightOfCenter, tempList);

		if (closestPairRight.distance < closestPair.distance)
			closestPair = closestPairRight;

		tempList.clear();
		double shortestDistance = closestPair.distance;
		double centerX = rightOfCenter.get(0).x;
		for (Point point : pointsSortedByY)
			if (Math.abs(centerX - point.x) < shortestDistance)
				tempList.add(point);

		for (int i = 0; i < tempList.size() - 1; i++) {
			Point point1 = tempList.get(i);
			for (int j = i + 1; j < tempList.size(); j++) {
				Point point2 = tempList.get(j);
				if ((point2.y - point1.y) >= shortestDistance)
					break;
				double distance = distance(point1, point2);
				if (distance < closestPair.distance) {
					closestPair.update(point1, point2, distance);
					shortestDistance = distance;
				}
			}
		}
		return closestPair;
	}
// cong 5
	
	public static Pair divideAndConquer5(List<? extends Point> points) {
		List<Point> pointsSortedByX = new ArrayList<Point>(points);
		sortByX(pointsSortedByX);
		List<Point> pointsSortedByY = new ArrayList<Point>(points);
		sortByY(pointsSortedByY);
		return divideAndConquer5(pointsSortedByX, pointsSortedByY);
	}

	private static Pair divideAndConquer5(List<? extends Point> pointsSortedByX, List<? extends Point> pointsSortedByY) {
		int numPoints = pointsSortedByX.size();
		if (numPoints <= 3)
			return bruteForce(pointsSortedByX);

		int dividingIndex = numPoints >>> 1;
		List<? extends Point> leftOfCenter = pointsSortedByX.subList(0, dividingIndex);
		List<? extends Point> rightOfCenter = pointsSortedByX.subList(dividingIndex, numPoints);

		List<Point> tempList = new ArrayList<Point>(leftOfCenter);
		sortByY(tempList);
		Pair closestPair = divideAndConquer5(leftOfCenter, tempList);

		tempList.clear();
		tempList.addAll(rightOfCenter);
		sortByY(tempList);
		Pair closestPairRight = divideAndConquer5(rightOfCenter, tempList);

		if (closestPairRight.distance < closestPair.distance)
			closestPair = closestPairRight;

		tempList.clear();
		double shortestDistance = closestPair.distance;
		double centerX = rightOfCenter.get(0).x;
		for (Point point : pointsSortedByY)
			if (Math.abs(centerX - point.x) < shortestDistance)
				tempList.add(point);

		for (int i = 0; i < tempList.size() - 1; i++) {
			Point point1 = tempList.get(i);
			for (int j = i + 1; j < 5; j++) {
				Point point2 = tempList.get(j);
				if ((point2.y - point1.y) >= shortestDistance)
					break;
				double distance = distance(point1, point2);
				if (distance < closestPair.distance) {
					closestPair.update(point1, point2, distance);
					shortestDistance = distance;
				}
			}
		}
		return closestPair;
	}
	// ---- SweepingSorter

	private static Comparator<Point> VERTICAL_COMPARATOR = new Comparator<Point>() {
		@Override
		public int compare(Point a, Point b) {
			if (a.y < b.y) {
				return -1;
			}

			if (a.y > b.y) {
				return 1;
			}

			if (a.x < b.x) {
				return -1;
			}

			if (a.x > b.x) {
				return 1;
			}

			return 0;
		}
	};

	private static Comparator<Point> HORIZONTAL_COMPARATOR = new Comparator<Point>() {
		@Override
		public int compare(Point a, Point b) {
			if (a.x < b.x) {
				return -1;
			}

			if (a.x > b.x) {
				return 1;
			}

			if (a.y < b.y) {
				return -1;
			}

			if (a.y > b.y) {
				return 1;
			}

			return 0;
		}
	};

	public static Pair closestPair(Point[] points) {
		double kc = 0;
		Pair kq = new Pair();
		Point[] closestPair = new Point[2];

		// When we start the min distance is the infinity
		double crtMinDist = Double.POSITIVE_INFINITY;

		// Get the points and sort them
		Point[] sorted = Arrays.copyOf(points, points.length);
		Arrays.sort(sorted, HORIZONTAL_COMPARATOR);

		// When we start the left most candidate is the first one
		int leftMostCandidateIndex = 0;

		// Vertically sorted set of candidates
		SortedSet<Point> candidates = new TreeSet<Point>(VERTICAL_COMPARATOR);

		// For each point from left to right
		for (Point current : sorted) {
			// Shrink the candidates
			while (current.x - sorted[leftMostCandidateIndex].x > crtMinDist) {
				candidates.remove(sorted[leftMostCandidateIndex]);
				leftMostCandidateIndex++;
			}

			// Compute the y head and the y tail of the candidates set
			Point head = new Point(current.x, (int) (current.y - crtMinDist));
			Point tail = new Point(current.x, (int) (current.y + crtMinDist));

			// We take only the interesting candidates in the y axis
			for (Point point : candidates.subSet(head, tail)) {
				double distance = current.distance(point);

				// Simple min computation
				if (distance < crtMinDist) {
					crtMinDist = distance;
					kc = crtMinDist;
					closestPair[0] = current;
					closestPair[1] = point;

				}
			}

			// The current point is now a candidate
			candidates.add(current);
		}
		kq.update(closestPair[0], closestPair[1], kc);

		return kq;
	}

	// ---------------tinh toan
	
	public void Run(int soluong, int sovonglap) {
		
		
		for(int k = 0; k < sovonglap; k++){
		

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

		System.out.println("so luong diem: " + numPoints + " - vong lap thu " +k);

		long startTime = System.currentTimeMillis();
		Pair bruteForceClosestPair = bruteForce(points);
		long elapsedTime = System.currentTimeMillis() - startTime;
		System.out.println("Brute force (" + elapsedTime + " ms): " + bruteForceClosestPair);

		startTime = System.currentTimeMillis();
		Pair dqClosestPair = divideAndConquer(points);
		elapsedTime = System.currentTimeMillis() - startTime;
		System.out.println("Divide and conquer (" + elapsedTime + " ms): " + dqClosestPair);

		startTime = System.currentTimeMillis();
		Pair Sweeping = closestPair(pointsAr);
		elapsedTime = System.currentTimeMillis() - startTime;
		System.out.println("SweepingClosesPair (" + elapsedTime + " ms): " + Sweeping);

		if (bruteForceClosestPair.distance != dqClosestPair.distance
				&& Sweeping.distance != bruteForceClosestPair.distance)
			System.out.println("MISMATCH");

		}
	}

	  public static int RandomInt(int aStart, int aEnd, Random aRandom){
		    if (aStart > aEnd) {
		      throw new IllegalArgumentException("Start cannot exceed End.");
		    }
		    
		    long range = (long)aEnd - (long)aStart + 1;
		    long fraction = (long)(range * aRandom.nextDouble());
		    int randomNumber =  (int)(fraction + aStart);    
		    return randomNumber;
		  }
	  public Point chuyenkieu(int x, int y){
		  Point p = new Point(x, y);
		  return p;
	  }
}
