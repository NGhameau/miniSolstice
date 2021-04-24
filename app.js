const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const ejs = require('ejs')
const mongoose = require("mongoose");




app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));

app.set('view engine', 'ejs')



//mongoose.connect("mongodb+srv://admin-angie:test123@cluster0.gjrjw.mongodb.net/todolistDB", {
mongoose.connect("mongodb://admin:EFCvpa26526@node84005-todolist.hidora.com:27017/todolistDB", {
//mongoose.connect("mongodb://mongo:27017/todolistDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});






var listItems = ["1","2","3"]





app.get("/", function(req,res){
  //res.send("<h1>HELLO</h1>");
  //res.sendFile(__dirname+"/index.html")
  res.render('index',{
    listItems: listItems
  })

})


app.post("/", function(req,res){
  var item = req.body.newItem;
  console.log(item);
  listItems.push(item);

  res.redirect("/")
})


app.listen(3000,function(){
  console.log("Server running on port 3000");
})
