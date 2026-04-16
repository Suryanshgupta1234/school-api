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

module.exports = db;