const mysql = require("mysql");
const config = require("../config");

module.exports = mysql.createPool(config.database);