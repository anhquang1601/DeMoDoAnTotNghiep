const mongoose=require("mongoose");
const Schema=mongoose.Schema
const billSchema=new Schema({
    thoigiantro:Date,
    sotienmotthang:Number,
    tongtien:Number,
    masv:String,
    maphong:String,
    sinhvienID:{
        type: Schema.Types.ObjectId, ref: 'student'
    },
    phongID:{
        type: Schema.Types.ObjectId, ref: 'room'
    }
})


const bill=mongoose.model('bill',billSchema);
module.exports= bill;