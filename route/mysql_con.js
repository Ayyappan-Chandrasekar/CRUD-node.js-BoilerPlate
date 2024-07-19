const mysql = require("mysql2");

// const { Router } = require("express");

// const router = express.Router()

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "medshyne",
});

con.connect(err=>{
    if (err){
        console.error("Connection failed");
        process.exit(1);
    }else{
        console.log("sql connection succesfully")
    }
})
con.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the database.');
  });


module.exports = con