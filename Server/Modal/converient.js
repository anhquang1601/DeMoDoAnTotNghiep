
const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const convenientSchema=new Schema({
    matiennghi:String,
    tentiennghi:String
})
const converient=mongoose.model('converient',convenientSchema);

module.exports= converient;