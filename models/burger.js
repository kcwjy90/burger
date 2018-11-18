//  //CONNECT TO orm.js

//  var orm = require("../config/orm.js");

//  var burger = {
//     all: function (cb){
//         orm.selectAll("burgers", function(res){
//             cb(res);
//         });
//     },

//     create: function(burgerName, gone, cb){
//         orm.insertOne("burgers", burgerName, gone, function(res){
//             cb(res);
//         })
//     },

//     update: function(burgerid, gone, cb){
//         orm.updateOne("burgers", burgerid, gone, function(res){
//             cb(res);
//         })
//     }
//  };



//  //Export the database functions for the controller (burgers_controller.js)

//  module.exports = burger;

//  //connection -> orm -> burgers -> burgers_controller

var orm = require("../config/orm");

var burger = {
    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(burgerName, ate, cb) {
      orm.insertOne("burgers", burgerName, ate, function(res) {
        cb(res);
      });
    },
    update: function(burgerID, ate, cb) {
      orm.updateOne("burgers", burgerID, ate, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;



// Testing cases:

//   burger.update("TRAE", "Waddd", true, function (res) {
//     console.log(res)
//  });
//   burger.create("Waddd", false, function (res) {
//       console.log(res)
//   });

//   burger.all(function (res) {
//       console.log(res);
//   });
