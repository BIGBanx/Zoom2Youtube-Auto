var mysql = require("mysql");

//- Connection configuration
var db_config = {
  connectionLimit: 5,
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "youtube_zoom"
};

//- Create the connection variable
module.exports = mysql.createPool(db_config);
