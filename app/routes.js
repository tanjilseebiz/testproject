const Order = require('./models/Nerd');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

	app.get('/testdb', function(req,res){
//console.log(req)
var newOrder = new Order({
	orderId: '2',
	company: 'hello',
	address: 'Dhanmondi',
	productName: 'laptop'});

newOrder.save(function(err,result){
	if (err) {
		console.log(err);
		res.send(err);
	}
	console.log(result);
	res.send(result);});
	})
	


};