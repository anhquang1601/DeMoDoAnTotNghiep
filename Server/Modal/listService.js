
const mongoose=require("mongoose");

const Schema=mongoose.Schema;
const listServiceSchema=new Schema({
    soluong:Number,
    maphong:String,
    madichvu:String,
    phongID:{
        type: Schema.Types.ObjectId, ref: 'room'
    },
    dichvuID:{
        type: Schema.Types.ObjectId, ref: 'service'
    }
})
const listService=mongoose.model('listService',listServiceSchema)

module.exports=listService; 