
const mongoose=require("mongoose");
const priorityObjectSchema=mongoose.Schema({
    tendoituonguutien:String,
    mauutien:String
}) 
 const priorityObject=mongoose.model("priorityobjects",priorityObjectSchema);

 module.exports=priorityObject;
