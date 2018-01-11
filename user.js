var MongoClient = require('mongodb').MongoClient;
var assert = require('assert'); //check the returned response
var url = 'mongodb://localhost:27017/Blog'; //name our database Blog in MongoDB

module.exports = {
    signup: function(name, email, password){
        MongoClient.connect(url, function(err, database) {
			const myAwesomeDB = database.db('Blog');
        	myAwesomeDB.collection('user').insertOne( {
    			"name": name,
    			"email": email,
    			"password": password
			},function(err, result){
    			assert.equal(err, null);
    		console.log("Saved the user sign up details.");
			});
        });
    },
	getUserInfo: function(username, callback){
    	MongoClient.connect(url, function(err, database){
         	const myAwesomeDB = database.db('Blog');
        	myAwesomeDB.collection('user').findOne( { email : username 
        	},function(err, result){
            	if(result==null){
                	callback(false)
            	}
            	else{
                	callback(result);
            	}
        	});
         
    	});
	},
	updateProfile: function(name, password, username, callback){
    	MongoClient.connect(url, function(err, database) {
    		const myAwesomeDB = database.db('Blog');
        	myAwesomeDB.collection('user').updateOne( 
            	{ "email": username },
            	{ $set: 
                	{ "name" : name,
                  	"password" : password 
                	}
            	},function(err, result){
             
            	if(err == null){
                	callback(true)
            	}
            	else{
                	callback(false)
            	}
        	});
    	});
	},
	validateSignIn: function(username, password,callback){
		MongoClient.connect(url, function(err, database){
			const myAwesomeDB = database.db('Blog');
			console.log(username,password);
			myAwesomeDB.collection('user').findOne( { email : username ,password: password 
			},function(err, result){
				if(result==null){
					console.log('returning false')
					callback(false)
				}
				else{
					console.log('returning true')
					callback(true)
				}
			});
		});
	}	
	//Using the MongoDB client, try to connect to the database
}
