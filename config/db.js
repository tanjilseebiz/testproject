var mongoose = require('mongoose');

module.exports = function() {
	mongoose.Promise = global.Promise;
	var db = mongoose.connect('mongodb://127.0.0.1/rapidtest',{userMongoClient:true});

	return db;
}