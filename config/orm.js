// //import MYSQL connection
// //CONNECT TO connection.js


var connection = require("./connection");

var orm = {
    //Method to select all items within the burgers_db
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (error, result) {
            if (error) throw error;
            cb(result);

            
          });
        
    },
    // Method to insert a new burger to the SQL database
    insertOne: function (tableInput, burgerName, ate, cb) {
            var queryString = 'INSERT INTO ' + tableInput + ' (burger_name, devoured) ' + 'VALUES (' + "'" + burgerName + "'" + ', ' + ate +')';
            connection.query(queryString, function (error, result) {
                if (error) throw error;
                
                cb(result);
            });
        
    },

    updateOne: function (tableInput, burgerID, ate, cb) {
        var queryString = "UPDATE " + tableInput + " SET devoured = " + ate + " WHERE id = " + burgerID +";"
        
        connection.query(queryString, function (error, result) {
            if (error) throw error;
             
            cb(result);
            
        })                 
    }


}


module.exports = orm;



// var connection = require("../config/connection.js");

// //Helper function for SQL syntax
// // function printQuestionMarks(num){
// //     var arr = [];
    
// //     for (var i = 0; i<num; i++){
// //         arr.push("?");
// //     };

// //     return arr.toString();
// // };

// // //Helper function to convert object key/value pairs to SQL syntax
// // //WHY DO YOU NEED THIS PART? copied from catsApp. Not entirely clear.

// // function objTosql(ob){
// //     var arr = [];

// // // loop through the keys and push the key/value as a string int arr
// //     for (var key in ob){
// //         var value = ob[key];
// //         // check to skip hidden properties
// //         if (Object.hasOwnProperty.call(ob, key)) {
// //           // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
// //           if (typeof value === "string" && value.indexOf(" ") >= 0) {
// //             value = "'" + value + "'";
// //           }
// //           // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
// //           // e.g. {sleepy: true} => ["sleepy=true"]
// //           arr.push(key + "=" + value);
// //         }
// //     }
    
// //   // translate array of strings to a single comma-separated string
// //   return arr.toString();
// // };

// // Object for all our SQL statement functions.

// var orm = {
//     selectAll: function (tableInput, cb){
//         var queryString = "SELECT * FROM " + tableInput + ";";
//         connection.query(queryString, function(err, result){
//             if (err){
//                 throw err;
//             }
//             cb(result);
//         });
//     },

//     insertOne: function(tableInput, burgerName, gone, cb){
//         var queryString = "INSERT INTO " + tableInput + " (burger_name, devoured) " + "VALUES (" + burgerName + ") ";
        
//         console.log(queryString);

//         connection.query(queryString, vals, function(err, result){
//             if (err){
//                 throw err;
//             }
//             cb(result);
//         });
//     }, 

//     updateOne: function(tableInput, burgerid, gone, cb){
//         var queryString = "UPDATE " + tableInput + " SET devoured = " + gone + " WHERE id = " + burgerid;

//         console.log(queryString);

//         connection.query(queryString, function(err, result){
//             if (err){
//                 throw err;
//             }

//             cb(result);
//         })
//     }
// };

// //Export the orm to model (burger.js)
// module.exports = orm;

// Import MySQL connection.