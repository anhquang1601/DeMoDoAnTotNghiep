
const mongoose=require("mongoose");
const Schema=mongoose.Schema
const serviceBillSchema=new Schema({
    masv:String,
    madichvu:String,
    thoigiansudung:String,
    dongia:Number,
    thanhtien:Number,
    sinhvienID:{
        type: Schema.Types.ObjectId, ref: 'student'
    },
    dichvuID:{
        type: Schema.Types.ObjectId, ref: 'service'
    }
})

const servicebill=mongoose.model('servicebill',serviceBillSchema);
module.exports= servicebill;