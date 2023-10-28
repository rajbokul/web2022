const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
// const request = require("request");
const https = require("https");

const app = express();
let items = ["buy food", "cook Food","eatfood"];
let workItems = [];

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

  let day = date.getDate();

   res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(req, res){
    let item = req.body.newItem;

    if (req.body.list === "work") {
    workItems.push(item);
    res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
    

});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "work list", newListItems: workItems});
});
app.post("/work", function(req, res){
     let item = req.body.newItem;
     workItems.push(item);
     res.redirect("/work");
});

app.get("/about", function(req, res) {
    res.render("about");
})

app.listen(3000, function() {
    console.log("server is running on port 3000");
});





//    var currentDay = today.getDay(); 
//    var day = "";


// switch (currentDay) {
//     case 0:
//         day ="Sunday"
//         break;
//     case 1:
//         day ="Monday"
//         break;
//     case 2:
//         day ="Tuesday"
//         break;
//     case 3:
//         day ="Wendesday"
//         break;
//     case 4:
//         day ="Thursday"
//         break;
//     case 5:
//         day ="Friday"
//         break;
//     case 6:
//         day ="Satureday"
//         break;


//      default:
//         console.log("error: ccurrent dayos equal to:" + currentDay);
// }
