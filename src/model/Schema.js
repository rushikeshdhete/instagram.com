const mongoose = require("mongoose");

const DSchema = mongoose.Schema({
    name : {
        type : String,
        require:true,
    },
    password : {
        require : true,
        type : String,
    }
});

const UserInfo = new mongoose.model("UserInfo", DSchema);

module.exports = UserInfo;