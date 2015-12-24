package ClosestPair;

import java.awt.Point;
import java.util.List;

import com.db4o.ObjectContainer;
import com.db4o.ObjectSet;

public class D_Data {
	public void addData (ObjectContainer db, String id, List<Point> points){
		try{
			Data d = new Data(id,points);
			db.store(d);
			
			
		}catch(Exception ex){
			throw ex;
		}
	
	}
	
	public List<Data> getDataId(ObjectContainer db, String id){
		
		Data d = new Data(id);
		return db.queryByExample(d);
		
		
	}

public ObjectSet<Data> getAllDataId(ObjectContainer db){
		
		Data d = new Data();
		return db.queryByExample(d);
		
		
	}
}
