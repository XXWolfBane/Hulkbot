module.exports = (bot, guild) => {
  const mysql = require('mysql')

  const connection = mysql.createConnection({
     host: 127.0.0.1,
     user: "FHGDev",
     password: process.env.mysqlpass,
     port: 3306
  })

  connection.connect(err => {
    if (err) console.error('error connecting:'+err.stack)
      console.log("Connected!")
  })

  connection.query(`create table ${guild.name}`, (err, results, fields) => {
    console.log(results)
  })
  
  connection.query(`insert ${guild.id} into ${guild.name}`, (err, results) => {
    console.log(results)
  })
}
