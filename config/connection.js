// MySQL connection setup
var mysql = require("mysql");
var connection;

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Tekken03",
  database: "burgers_db"
});


// MySQL connection 
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
