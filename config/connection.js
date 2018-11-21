//setting up mysql connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {

    connection = mysql.createConnection({
    hots: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});
};

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