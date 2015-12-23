package ClosestPair;
import java.awt.Point;

public class Pair {
    public Point point1 = null;
    public Point point2 = null;
    public double distance = 0.0;
 
    public Pair()
    {  }
 
    public Point getPoint1() {
		return point1;
	}

	public void setPoint1(Point point1) {
		this.point1 = point1;
	}

	public Point getPoint2() {
		return point2;
	}

	public void setPoint2(Point point2) {
		this.point2 = point2;
	}

	public double getDistance() {
		return distance;
	}

	public void setDistance(double distance) {
		this.distance = distance;
	}

	public Pair(Point point1, Point point2)
    {
      this.point1 = point1;
      this.point2 = point2;
      calcDistance();
    }
 
    public void update(Point point1, Point point2, double distance)
    {
      this.point1 = point1;
      this.point2 = point2;
      this.distance = distance;
    }
 
    public void calcDistance()
    {  this.distance = distance(point1, point2);  }
 
    public String toString()
    {  return point1 + "-" + point2 + " : " + distance;  }
    
    public static double distance(Point p1, Point p2)
    {
      double xdist = p2.getX() - p1.getX();
      double ydist = p2.getY() - p1.getY();
      return Math.hypot(xdist, ydist);
    }
}
