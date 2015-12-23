package ClosestPair;



import java.io.File;

import com.db4o.Db4oEmbedded;
import com.db4o.ObjectContainer;




public class PUB_Lib {
	private ObjectContainer db;
	public PUB_Lib() {
		
	}
	 
	
	public ObjectContainer getDb() {
		return db;
	}

	
	public void setDb(ObjectContainer db) {
		this.db = db;
	}

	public void connect(){
		
		db = Db4oEmbedded.openFile("F:/workspace/giai_thuat_nhom3/db.db4o");
	}
	
	public void closeconnect(){
		db.close();
	}
}

