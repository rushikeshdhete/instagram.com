const mongoose = require("mongoose");
mongoose.connect("mongodb://Localhost:27017/Instagram", {useNewUrlParser:true, useUnifiedTopology: true})
.then (() => {
    console.log("DataBase Created");
}).catch((err) => {
    console.log(err);   
});

