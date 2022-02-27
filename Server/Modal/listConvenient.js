const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const listConvenientSchema=new Schema({
   
    maphong:String,
    matiennghi:String,
    tiennghiID:{
        type: Schema.Types.ObjectId, ref: 'converient',
    },
    phongID:{
        type: Schema.Types.ObjectId, ref: 'room'
    },
    soluong:Number
})
const listConvenient=mongoose.model('listConvenient',listConvenientSchema);
module.exports=listConvenient;