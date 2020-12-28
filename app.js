const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const date=  require(__dirname+"/date.js")
var item="";
var items = [];
var i1=[];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get('/', function (req, res) {

let n= date();
    res.render("list",{listName: n, newItems:items});
});
app.post('/',function(req,res)
{
    item = req.body.fn;
  if(req.body.list=== "Grocery")
  {
    i1.push(item);
      res.redirect("/grocery");
  }
else
{
  items.push(item);
  res.redirect("/");
}
});
app.get("/grocery",function(req,res)
{
  res.render("list",{listName: "Grocery Shopping", newItems:i1});
});
app.post("/grocery",function(req,res)
{
  item = req.body.fn;
  i1.push(item);
    res.redirect("/grocery");
})
app.listen(3000,function(req,res)
{
  console.log("listening");
});
