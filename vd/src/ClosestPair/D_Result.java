package ClosestPair;

import java.awt.Point;

import com.db4o.ObjectContainer;
import com.db4o.ObjectSet;


public class D_Result {

public void addResult(ObjectContainer db,int id,String tenloai, int lanthu, Pair kq, long tg){
	try{
		
		 result r  = new result(id,tenloai, lanthu, kq,tg);					
		db.store(r);	
		
	}catch(Exception ex){
		throw ex;
	}
}
public void deletResult ( ObjectContainer db ){
	
	db.delete(db.queryByExample(new result()));	
}

public ObjectSet<result> selectAll(ObjectContainer db){
	
	return db.queryByExample(new result());	
}
}
