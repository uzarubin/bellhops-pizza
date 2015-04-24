var express = require('express');
var dominos = require('dominos');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log(dominos);
  res.render('index', { title: 'Express' });
});

router.post('/pizza', function(req, res) {
  var order=new dominos.class.Order();
  order.Order['StoreID'] = req.body.storeID;
  var address = {
    "Street": "800 Market Street Suite 207b",
    "City": "Chattanooga",
    "Region": "TN",
    "PostalCode": "37402",
    "Type": "Business"
  };
  order.Order.Address = address;
  var product = new dominos.class.Product();
  product.Code = "14SCREEN";
  product.Options= {"P": "1"};
  order.Order.Products.push(product);
  var product = new dominos.class.Product();
  product.Code = "14SCREEN";
  order.Order.Products.push(product);

  dominos.order.validate(order, function(data){
    if (data.success){
      console.log(data.result.Order.Products[0]);
      console.log(data.result.Order.Products[1]);
      dominos.order.price(order, function(data){
        console.log(data);
        console.log("AmountsBreakdown: ", data.result["Order"]["AmountsBreakdown"]);

        order.Order.Phone = "1 (888) 836-3939";
        order.Order.FirstName = "Barnabus";
        order.Order.LastName = "The Bellhop";
        order.Order.Email = "dingding@getbellhops.com";

        var amount = data.result.Order.Amounts.Customer;
        var cardInfo = new dominos.class.Payment();
        cardInfo.Amount = amount;
        order.Order.Payments.push(cardInfo);

        console.log(order.Order);

        console.log("HERE WE GO I HOPE THIS WORKS");
        //dominos.order.place(
          order,
          function(data){
            console.log("\n\n\nHERE'S WHAT WE GOT\n\n\n");
            console.log(data);
            if (data.result.Order.Status==-1){
              console.log("LOOKS LIKE TRUBBLE!");
              res.status(400).end();
            }
            else{
              console.log("\n\n\nLOOKS LIKE PIZZA TIME!!!!");
              res.status(200).end();
            }
          }
        );
      });
    }
  });
  dRBReO9kyNKPv_Ck57kU
});

module.exports = router;
