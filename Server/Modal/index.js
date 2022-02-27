const mongoose=require("mongoose");
const studentSchema=new mongoose.Schema({
    hoten:String,
    namsinh:Date,
    diachi:String,
    sdt:Number,
    email:String,
    masv:String,
    phongID:{
       /*  type: Schema.Types.ObjectId, ref: 'room' */
       type:String
    },
    doituongID:{
       /*  type: Schema.Types.ObjectId, ref: 'object' */
       type:String
    }
})/* 
const billSchema=mongoose.Schema({
    thoigiantro:Date,
    sotienmotthang:Number,
    tongtien:Number,
    sinhvienID:{
        type: Schema.Types.ObjectId, ref: 'student'
    },
    phongID:{
        type: Schema.Types.ObjectId, ref: 'room'
    }
})

const roomSchema=mongoose.Schema({
    maphong:String,
    tenphong:String,
    kinkroomID:{
        type: Schema.Types.ObjectId, ref: 'kinkroom'
    },
    sinhvienID:[{ type: Schema.Types.ObjectId, ref: 'student'}]
})
const kinkroomSchema=mongoose.Schema({
    maloaiphong:String,
    tenloaiphong:String
})
const serviceBillSchema=mongoose.Schema({
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
const serviceSchema=mongoose.Schema({
    tendichvu:String,
    madichvu:String
})
const listServiceSchema=mongoose.Schema({
    soluong:Number,
    phongID:{
        type: Schema.Types.ObjectId, ref: 'room'
    },
    dichvuID:{
        type: Schema.Types.ObjectId, ref: 'service'
    }
})
const listConvenientSchema=mongoose.Schema({
   
    maphong:String,
    phongID:{
        type: Schema.Types.ObjectId, ref: 'room'
    }
})
const convenientSchema=mongoose.Schema({
    matiennghi:String,
    tentiennghi:String
})
const listOfHostelsSchema=mongoose.Schema({
    thoigianden:Date,
    thoigiandi:Date,
    phongID:{
        type: Schema.Types.ObjectId, ref: 'room'
    },
    khachID:{
        type: Schema.Types.ObjectId, ref: 'customer'
    }
})
const customerSchema=mongoose.Schema({
    makhach:String,
    tenkhach:String,
    sodienthoai:Number
})
const priorityObjectSchema=mongoose.Schema({
    tendoituonguutien:String,
    mauutien:String
}) */
/* const priorityObject=mongoose.model("priorityObject",priorityObjectSchema);
const customer=mongoose.model("customer",customerSchema);
const listOfHostels=mongoose.model("listOfHostels",listOfHostelsSchema);
const converient=mongoose.model('converient',convenientSchema);
const listConvenient=mongoose.model('listConvenient',listConvenientSchema);
const listService=mongoose.model('listService',listServiceSchema)
const service=mongoose.model('service',serviceSchema)
const servicebill=mongoose.model('servicebill',serviceBillSchema);
const kinkroom=mongoose.model('kinkroom',kinkroomSchema)
const room=mongoose.model('room',roomSchema); */
const student=mongoose.model('student',studentSchema);
/* const bill=mongoose.model('bill',billSchema); */

/* module.exports=priorityObject;
module.exports=customer;
module.exports=listOfHostels;
module.exports= converient;
module.exports=listConvenient;
module.exports=service;
module.exports= servicebill;
module.exports= kinkroom;
module.exports=room; */
module.exports=student;
/* module.exports= bill;
module.exports=listService; */
