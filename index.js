const express=require('express');
const path=require('path');

const app=express();
app.use(express.urlencoded({extended:false}));
const port=8000;

//serve static files
app.use(express.static(path.join(__dirname,'public')));



//template engine
app.set('view',path.join(__dirname,'views'));

app.set('view engine','pug');

app.get('/',function(req,res){
    res.render('index');
});

app.listen(port,()=>{
    console.log('server is running....');
});

module.exports=app;