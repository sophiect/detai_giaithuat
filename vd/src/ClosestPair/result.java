package ClosestPair;

import java.awt.Point;

import com.db4o.ObjectContainer;



public class result {
	public int id;
	public String tenkieu;
	public int lanthu;
	public Pair capdiem;
	public long thoigian;
	
	
	// ---- SET GET----
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTenkieu() {
		return tenkieu;
	}
	public void setTenkieu(String tenkieu) {
		this.tenkieu = tenkieu;
	}
	public int getLanthu() {
		return lanthu;
	}
	public void setLanthu(int lanthu) {
		this.lanthu = lanthu;
	}
	public Pair getCapdiem() {
		return capdiem;
	}
	public void setCapdiem(Pair capdiem) {
		this.capdiem = capdiem;
	}
	public result(int id, String tenkieu, int lanthu, Pair capdiem, long thoigian) {
		super();
		this.id = id;
		this.tenkieu = tenkieu;
		this.lanthu = lanthu;
		this.capdiem = capdiem;
		this.thoigian = thoigian;
	}
	public long getThoigian() {
		return thoigian;
	}
	public void setThoigian(long thoigian) {
		this.thoigian = thoigian;
	}
	public result(int id) {
		super();
		this.id = id;
	}
	public result() {
		super();
	}
	

	
	//-----
/*	public result(int id,String tenkieu, int lanthu, Pair capdiem, int thoi ) {
		super();
		this.id = id;
		this.tenkieu = tenkieu;
		this.lanthu = lanthu;
		this.capdiem = capdiem;
	}
	
	public result(){}
	public result(String tenkieu) {
		super();
		this.tenkieu = tenkieu;
	}
	public result(int id) {
		super();
		this.id = id;
	}
	*/
	
}