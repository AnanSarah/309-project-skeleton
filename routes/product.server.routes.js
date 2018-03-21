    module.exports = function(app){

 var products = require('./../controllers/products.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');
     app.route('/api/products')
	.get(products.list)
	.post(users.requiresLogin, products.create);


  app.route('/product/new').get(products.createView);

app.param('productId', products.productByID);


}