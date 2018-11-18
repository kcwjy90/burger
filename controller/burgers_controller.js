var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burger: data
      };
      // console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers/", function(req, res) {
    console.log(req.body.ate)
    burger.create(req.body.name, req.body.ate, function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    var burgerID = req.params.id;
    var burgerStatus = req.body.ate;

  
    burger.update(burgerID, burgerStatus, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  // Export routes for server.js to use.
  module.exports = router;




  
  // //require express and router
// //CONNECTED TO burger.js [NOT burger's'.js]

// //4 routes. 1. selectAll 2. insertOne 3.updateOne 4. delete

// var express = require("express");

// var router = express.Router();

// // Import the model (burgers.js) to use its database functions.
// var burger = require("../models/burger.js");

// // Create all our routes and set up logic within those routes where required.
// // burgers 를 burger로 바꿈
// router.get("/", function(req, res) {
//   burger.all(function(data) {
//     var hbsObject = {
//       burger: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

// router.post("/api/burgers", function(req, res) {
//   burger.create(req.body.name, req.body.gone
//   , function(result) {
//     // Send back the ID of the new quote. NOT exactly sure what this is doing either. 
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/api/burgers/:id", function(req, res) {
//   var burgerid = req.params.id;
//   var newstatus = req.body.gone;

  
//   burger.update(burgerid, newstatus, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });


// // Export routes for server.js to use.
// module.exports = router;