package ClosestPair;

import java.awt.Point;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.db4o.ObjectSet;

public class Data {

		public String id;
		public List<Point> tapDiem;
		
		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		public List<Point> getTapDiem() {
			return tapDiem;
		}
		public void setTapDiem(List<Point> tapDiem) {
			this.tapDiem = tapDiem;
		}
		public Data(String id, List<Point> tapDiem) {
			super();
			this.id = id;
			this.tapDiem = tapDiem;
		}
		/*public ArrayList<Point> getTapDiemArr() {
			Point[] arrays = Arrays.copyOf(tapDiem, tapDiem.size(), Point.class);
			String[] stringArray = Arrays.copyOf(tapDiem, tapDiem.size(), String[].class);
				//	copyOfRange(tapDiem,tapDiem.size(),Point[].class);
			return null ;//tapDiem;
		}*/
		public Data(String id) {
			super();
			this.id = id;
		}
		public Data() {
			super();
		}
		
}
