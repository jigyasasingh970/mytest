const mysql=require('mysql');
const express=require('express');
var app=express();
const bodyparser=require('body-parser');

app.use(bodyparser.json());

var mysqlConnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'chiya2511',
    database:'mydb',
    multipleStatements:true
});

mysqlConnection.connect((err)=>{
    if(!err)
    {

    console.log('Db connection succeeded');
    }
    else
    {

    console.log(err);
    console.log('db connection failed');
}

})

app.listen(3000,()=>console.log("Express server is running at Port no:3000"));
app.get('/codes', (req,res)=>{
    mysqlConnection.query('SELECT * FROM codemap',(err,rows,fields)=>{
        if(!err){
        console.log(rows);
       // res.send(rows);
        }
        else
        console.log(err);
    })
    res.send('welcome');
});


//add a code
app.post('/codes', (req,res)=>{



        let prod=req.body;
        var sql='INSERT INTO codemap (id,code) VALUES (?,?)';
        
    mysqlConnection.query(sql,[prod.id,prod.code],(err,rows,fields)=>{

        if(!err){
        console.log(rows);
       // res.send(rows);
        }
        else
        console.log(err);
    })
    res.send('welocome');
});
/*
    'oldtest1': '
}
 */
