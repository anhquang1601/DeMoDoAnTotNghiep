const mongoose=require("mongoose");
const Schema=mongoose.Schema
const studentSchema=new Schema({
    hoten:{
        type:String
    },
    namsinh:{
        type:String
    },
    diachi:{
        type:String
    },
    sdt:{
        type:Number
    },
    email:{
        type:String
    },
    masv:{
        type:String
    },
    phongID:{
         type: Schema.Types.ObjectId, ref: 'room' ,
    },
    doituongID:{
         type: Schema.Types.ObjectId, ref: 'priorityobjects' ,
    },
    roomId:{
        type: Schema.Types.ObjectId, ref: 'rooms' ,
    }
})

const student=mongoose.model('student',studentSchema);
module.exports=student;