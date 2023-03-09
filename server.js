const express = require('express');
const app = express();
const PORT= process.env.PORT || 4000
const db=require('./config/mysql_db.js')


app.get('/',(req,res)=>{
    console.log('/root')
});

app.get('/movies',(req,res)=>{
    console.log(req.params);
    console.log('/movies')
    db.query("select * from tb_bydd_ord",(err,data)=>{
        if(!err){
            console.log("aaaaaa");
            res.send(data)
            console.log("bbbbb");
        }
        else{
            console.log(err)
        }
    })
});


app.listen(PORT,()=>{
    console.log(`server on :: http://10.10.10.100:${PORT}`);
})


// var name = 'Amy';
// var adr = 'Mountain 21';
// var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
// con.query(sql, [name, adr], function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });