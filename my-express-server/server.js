const express = require("express");

const app = express ();

app.get("/", function(request, response){
   response.send("<h1>Hello, World!</h1>");
});
app.get("/contact", function(request, response){
    response.send("contact me at: bokul19@gmail.com");
});

app.get("/about", function(request, response){
    response.send("My name is bokul ");
});

app.get("/hobbies", function(request, response){
    response.send("<ul><li>coffee</li><li>code</li>");
});

app.listen(3000, function (){
    console.log("server started on port 3000");
});