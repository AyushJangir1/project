// export NODE_PATH=$NODE_PATH:C:\Users\ayush\Documents\GitHub\Hostel_Management_System`

const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require("cors")  // these are the imports

app.use(cors());  //cross orgin connection
app.use(express.json())  // to parse JSON requests

const db = mysql.createConnection({ //This create a connection pool
    host: 'localhost',
    user: 'root',
    password: 'Ayush@890789',
    database: 'projectdb'
})

db.connect(function(error){
    if (error) throw error
    else console.log("connection successfull")
})


app.post("/admin", (req, res) => {
    const username = req.body.username
    const password = req.body.password
    console.log(username);
    console.log(password);

    db.query("SELECT * FROM admin WHERE email=? AND password=?", [username, password], (err, result) =>{
        if (err) {
            req.setEncoding({err:err});
        }else{
            if(result.length > 0){
                console.log(result);
                res.send(result)
            }else{
                res.send({message:"Invalid username or password"})
            }
        }
    })
})

app.listen(3001, ()=> {
    console.log("running on the prot 3001")
})
