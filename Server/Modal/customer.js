
const mongoose=require("mongoose");
const customerSchema=mongoose.Schema({
    makhach:String,
    tenkhach:String,
    sodienthoai:Number
})
const customer=mongoose.model("customer",customerSchema);
module.exports=customer;