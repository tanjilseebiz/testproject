
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var orderSchema = new Schema({
	orderId: {type: String },company: {type: String },
	address: {type: String },


	productName: {type: String }
});




var model = mongoose.model('Order', orderSchema);
                module.exports = model;

