
const mongoose=require("mongoose");
const serviceSchema=mongoose.Schema({
    tendichvu:String,
    madichvu:String
})

const service=mongoose.model('service',serviceSchema);

module.exports=service;