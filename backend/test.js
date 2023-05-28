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

app.post('/admin', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    console.log(req.body)

    db.query("INSERT INTO admin (email, password) VALUES(?,?)",[username, password], (err, result) => {
        if (err) {
            console.log(err)
        } else{
            res.send("Values Inserted")
        }
    } 
    )
})

app.post('/student', (req, res)=>{
    const username = req.body.email
    const password = req.body.password

    db.query("INSERT INTO student (email, passsword), VALUES(?,?)", [username, password], (err, result) => {
        if (err) {
            console.log(err)
        }
        else{
            res.send("Value Inserted")
        }
    })
})

app.listen(3001, ()=> {
    console.log("running on the port 3001")
})