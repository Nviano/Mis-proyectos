var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "viano1984",
    database: "porfolio"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
module.exports = con;