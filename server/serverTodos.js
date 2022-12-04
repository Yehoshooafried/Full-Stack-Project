const mysql =  require('mysql2');


const express = require('express');
const app = express();
const fs = require('fs');
const Path = require('path')
const cors = require("cors");
const { get } = require('http');
const { send } = require('process');

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}


// app.use(express.urlencoded())
app.use(cors(corsOptions)) // Use this after the variable declaration
app.use(express.json())

//GET Reqwests 

const con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "1234Myjbh!",
        database: 'todos'
    }
);

// show file content
app.get('/',  (req, res) => {  // readFiles,


 con.connect((err)=>{
    if(err) return err;
    console.log("connected succes");
    const sql = "SELECT * FROM users";

    // const usersObj=[]
    con.query(sql, (err, result)=>{
        if (err) return err;
        // console.log('insert succes'+ result.insertId + result.affectedRows);
        res.send(result)
    })
})

    
 
})








const port = 5000
app.listen(port, () => console.log(`listening on port ${port}`))



