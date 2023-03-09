
var mysql = require('mysql')

const db = mysql.createPool({
    host : '10.10.10.100',
    user : 'extra',
    password : 'extra000',
    database : 'adas_coin',
    port:3306

});

module.exports = db;