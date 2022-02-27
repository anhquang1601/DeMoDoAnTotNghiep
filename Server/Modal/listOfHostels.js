
const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const listOfHostelsSchema=new Schema({
    maphong:String,
    makhach:String,
    thoigianden:Date,
    thoigiandi:Date,
    phongID:{
        type: Schema.Types.ObjectId, ref: 'room'
    },
    khachID:{
        type: Schema.Types.ObjectId, ref: 'customer'
    }
})
const listOfHostels=mongoose.model("listOfHostels",listOfHostelsSchema);
module.exports=listOfHostels;