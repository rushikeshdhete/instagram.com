const express = require("express");
const app = express();
const UserInfo =require("./model/Schema");
const hbs = require("hbs");
const path = require("path");
const port = process.env.port ||  3000;
require("./db/createDataBase");

const  viewPath = path.join(__dirname, "../templets/views");
const publicPath = path.join(__dirname,"../public");

app.use(express.static(publicPath));
app.use(express.urlencoded({extended:false}));

app.set("view engine", "hbs");
app.set("views", viewPath);


app.get("/", (req, res)=>{
    res.render("index");
});

app.post("/index", async (req, res)=>{

    try {

        const Info = new UserInfo({
            name : req.body.userid,
            password : req.body.userpass,
        });
        const result = await Info.save();
        res.status(201).render("index");
        
    } catch (error) {
        console.log(error);
    }

});

app.listen(port, ()=>{
    console.log(`Listening ${port}`);
});