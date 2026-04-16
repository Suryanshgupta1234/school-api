<<<<<<< HEAD
require("dotenv").config();
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

db.connect((err) => {
  if (err) {
    console.error("DB Connection Failed:", err);
  } else {
    console.log("MySQL Connected...");
  }
});

=======
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "suryansh@2004",
    database: "schoolDB",
});

db.connect((err)=>{
    if(err){
        console.error("DB connetion failed:",err);
    }else{
        console.log("MSQL Connected...");
    }
});

>>>>>>> c671a866d771ab6b05e8537e1dbebf81ff24e30e
module.exports = db;