//setting up mysql connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    hots: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
})


//Making connection
connection.connect(function(err){
    if (err){
        console.error("error connecting: "+ err.stack);
        return;

    }
    console.log("connection as id " + connection.threadId);
});

//Exporting connection for ORM to use. 
module.exports = connection;