const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Sigin=new Schema({
    username:String,
    password:String,
    enterThePassword:String,
    role:String
})
const sigin=mongoose.model("sigin",Sigin);
module.exports=sigin;