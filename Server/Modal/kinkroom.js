const mongoose=require("mongoose");
const Schema=mongoose.Schema
const kinkroomSchema=new Schema({
    maloaiphong:String,
    tenloaiphong:String
})
const kinkroom=mongoose.model('kinkroom',kinkroomSchema)

module.exports= kinkroom;