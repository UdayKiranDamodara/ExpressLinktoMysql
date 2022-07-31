const express = require('express')
var mysql = require('mysql2')

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '9719',
  database: 'forum',
})

const app = express()

// con.connect(function (err) {
//   if (err) throw err
//   con.query('SELECT * FROM instructors', function (err, result, fields) {
//     if (err) throw err
//     console.log(result)
//   })
// })
con.connect()

const tableName = 'students'
con.query(`SELECT * FROM ${tableName};`, (err, result) => {
  if (err) throw err
  console.log(result)
})

app.listen(5000, () => {
  console.log('server started')
})
