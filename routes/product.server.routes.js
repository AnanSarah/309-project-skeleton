    module.exports = function(app){

 var products = require('./../controllers/products.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

  app.route('/product/new').get(products.createView);

app.param('productId', products.productByID);


}