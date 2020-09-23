var express = require('express');
var app = express();
var bookList = require('./books.json');

app.get('/showbooks',function(req,res){
    res.send(bookList);
})

app.get('/search',function(req,res){
    var name = req.query.author;
    var sublist =[];
    var flag =0;
    for(const i in bookList){
        if(bookList[i].author == name){
            flag = 1;
            sublist.push(bookList[i]);
            
        }
    }
    
    if(flag == 0)
        res.send('Author not found');
        res.send(sublist);
})

app.get('/home',function(req,res){
    res.send('welcome to express');
})
// localhost:3000/login/chandana/mysuru
app.get('/login/:username/:city',function(req,res){
    var uname = req.params.username;
    var ucity = req.params.city;
    //res.send('Welcome '+uname+' from '+ucity);
    res.send(`Welcome ${uname} from ${ucity}`);
})

app.get('/loginUser/:username/:city',function(req,res){
    var params = req.params;
    res.send(params);
})

app.get('/userDetails/:username/:city',function(req,res){
    var user = {"name":req.params.username,"city":req.params.city};
    res.send(user)
})

app.get('/register',function(req,res){
    name = req.query.studentName;
    id = req.query.studentId;
    res.send({"stName":name,"stid":id});
})

app.listen('3000',function(){
    console.log('server listening to port 3000')
})