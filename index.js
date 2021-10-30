const express = require("express");

const app = express();

app.get("/",()=>{
  console.log("req recived");
  res.send("Done Loading!!");
});

app.get("/home",()=>{
  console.log("home page");
  res.send("<h1>This is Home Page</h1>");
})

app.listen(1000,()=>{
  console.log("listening to port 1000");
});
