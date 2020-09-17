var mysql = require('mysql');
require('dotenv').config()

const dbuser = process.env.MYSQL_USER;
const dbpassword = process.env.MYSQL_PASSWORD;
const db = process.env.MYSQL_DATABASE;

var connection = mysql.createConnection({
	host:'mysql',
	user: dbuser,
	password: dbpassword,
	database: db,
	connectTimeout: 100000

});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected to MySQL..!');
	}
});

module.exports = connection;