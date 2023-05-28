const express = require("express");
const app = express();
const port = 3000;
// const mysql = require('mysql')
var connection;

let mysql = require('mysql');

const db = mysql.createPool({ //This create a connection pool
    host: 'localhost',
    // port: 3000,
    user: 'root',
    password: 'ayushonmysql@123',
    database: 'projectdb'
})

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
