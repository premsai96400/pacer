const express = require("express");

const app=express();

app.get("/",()=>{
  res.send("Done Loading");
});

app.listen(1000,()=>{
  console.log("listening to port 1000");
});
