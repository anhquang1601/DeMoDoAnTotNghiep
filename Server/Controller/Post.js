const modelStudent =require("../Modal/student");
const modelPriorityObject=require("../Modal/priorityObject");
const modelKinkroom=require("../Modal/kinkroom");
const modelRoom=require("../Modal/kinkroom");
const modelBill=require("../Modal/bill");
const modelService=require("../Modal/service");
const modelServiceBill=require("../Modal/servicebill");
const modelListService=require("../Modal/listService");
const modalConverient =require("../Modal/converient");
const modelListConverient=require("../Modal/listConvenient");
const modelCustomer=require("../Modal/customer");
const modelSigup=require("../Modal/Sigin");
const modelListOfHostels=require("../Modal/listOfHostels")

const postController={
    addStudent:async(req,res)=>{
        var student=new modelStudent({
            hoten:req.body.hoten,
            namsinh:req.body.namsinh,
            diachi:req.body.diachi,
            sdt:req.body.sdt,
            email:req.body.email,
            masv:req.body.masv,
             roomId:req.params.idRoom 
        })
        student.save(function(err){
            if(err){
            res.status(400).json(err)
            }
            res.status(200).json("post student success")
        })
    },
    addPriorityObject:async(req,res)=>{
        var priorityObject=new modelPriorityObject({
            tendoituonguutien:req.body.tendoituonguutien,
            mauutien:req.body.mauutien
        })
        priorityObject.save(function(err){
            if(err){
                console.log("err",err)
            }else{
                modelStudent.findOneAndUpdate({_id:req.params.id},{doituongID:priority._id},function(err){
                   if(err){
                       res.status(400).json({error:err})
                   }else{
                       res.send("thanhcong")
                   }
                })
            }
        })
    },
    addKinkRoom:async(req,res)=>{
        const Kindroom=new modelKinkroom({
            maloaiphong:req.body.maloaiphong,
            tenloaiphong:req.body.tenloaiphong
        })
        Kindroom.save(function(err){
            if(err){
                res.status(400).json(err)
            }
            res.status(200).json("post kindroom success")
        })
    },
    addRoom:async(req,res)=>{
        var room=new modelRoom({
            maphong:req.body.maphong,
            tenphong:req.body.tenphong,
            kinkroomID:req.params.idKindroom
        })
        room.save(function(err){
            if(err){
                res.status(400).json(err)
            }
            res.status(200).json("post room success")
        })
    
    },
    addBillRoom:async(req,res)=>{
        const{masv,maphong,thoigiantro,sotienmotthang,tongtien}=req.body;
        
     
        modelStudent.findOne({masv:masv}).then((data)=>{
         var routeBill=new modelBill({
             masv,maphong,thoigiantro,sotienmotthang,tongtien, sinhvienID:data._id,phongID:data.roomId
            })
            routeBill.save(function(err){
             if(err){
                 res.status(400).json(err)
             }
             res.status(200).json("post billroom success")
         })
        })
       
     },
     addService:async(req,res)=>{
        const{  tendichvu,madichvu}=req.body;
        const routerService=new modelService({
            tendichvu,madichvu
        })
        routerService.save(function(err){
            if(err){
                res.status(400).json("loi client")
            }
            res.status(200).json("post Service success")
        })
    },
    addServiceBill:async(req,res)=>{
        const{ masv,madichvu,thoigiansudung,dongia,thanhtien}=req.body;
        modelStudent.findOne({masv:masv}).then((data)=>{
            modelService.findOne({madichvu:madichvu}).then((data1)=>{
                var routerServiceBill=new modelServiceBill({
                    masv,madichvu,thoigiansudung,dongia,thanhtien,sinhvienID:data._id,dichvuID:data1._id
                })
                routerServiceBill.save(function(err){
                    if(err){
                        res.status(400).json(err)
                    }
                    res.status(200).json("post servicebill success")
                })
            })
        })
    },
    addListSerice:async(req,res)=>{
        const {madichvu,maphong,soluong}=req.body;
        modelService.findOne({madichvu:madichvu}).then((data)=>{
            console.log("data",data)
            if(data!==null){
            modelRoom.findOne({maphong:maphong}).then((data1)=>{
                if(data1!==null){
                var routerListService=new modelListService({
                    maphong,madichvu,soluong,phongID:data._id,dichvuID:data1._id
                })
                routerListService.save(function(err){
                    if(err){
                    res.send("loi:",err)
                    }
                    res.status(200).json("post listService success")
                })}else{
                    res.status(400).json("không tìm thấy mã phòng")
                }
            })}else{
                res.status(400).json("không tìm thấy mã dịch vụ")
            }
        }).catch((err)=>{
            res.status(500).json('loi',err)
        })
    },
    addConverient:async(req,res)=>{
        var routerConverient=new modalConverient({
            matiennghi:req.body.matiennghi,
            tentienghi:req.body.tentienghi
        })
        routerConverient.save(function(err){
            if(err){
            res.status(500).json(err)
            }
            res.status(200).json("post converient success")
        })
    },
    addListConvenient:async(req,res)=>{
        const{maphong,matiennghi,soluong}=req.body
        modelRoom.findOne({maphong:maphong}).then((data)=>{
            if(data===null){
                res.status(400).json("không thấy mã phòng")
            }
            else{
                modalConverient.findOne({matiennghi:matiennghi}).then((data2)=>{
                    if(data2===null){
                        res.json("không tìm thấy mã tiện nghi");
                    }
                    else{
                        var routerListConverient=new modelListConverient({
                            maphong:req.body.maphong,
                            matiennghi:req.body.matiennghi,
                            soluong:soluong,
                            phongID:data._id,
                            tiennghiID:data2._id
    
                        })
                        routerListConverient.save(function(err){
                            if(err){
                                res.send("loi server")
                            }
                            else{
                                res.status(200).json("post list converient success !")
                            }
                        })
    
                    }
                })
            }
        })
    },
    addCustomer:async(req,res)=>{
        var routerCustomer=new modelCustomer({
            makhachhang:String,
            tenkhachhang:String,
            sdt:Number
        })
        routerCustomer.save(function(err){
            if(err){
                res.json("error server");
            }
            else{
                res.json("post customer success")
            }
        })
    },
    addListOfHotels:async(req,res)=>{

        modelRoom.findOne({maphong:req.body.maphong}).then((data)=>{
            if(data===null){
                res.json("no find code room")
            }else{
                modelCustomer.findOne({makhachhang:req.body.makhachhang}).then((data2)=>{
                    if(data2===null){
                        res.json("no find code customer")
                    }
                    else{
                        var routerListOfHotels=new modelListOfHostels({
                            maphong:req.body.maphong,
                            makhachhang:req.body.makhachhang,
                            thoigianden:req.body.thoigianden,
                            thoigiandi:req.body.thoigiandi
                        })
                        routerListOfHotels.save(function(err){
                            if(err){
                                res.json("error server")
                            }else{
                                res.status(200).json("post ListOfHotels success !")
                            }
                        })
                    }
                })
            }
        })
    },
    addSigUp:async(req,res)=>{
        const routeSigin=new modelSigup({
            username:req.body.username,
            password:req.body.password,
            enterThePassword:req.body.enterThePassword,
            role:0
        })
        routeSigin.save(function(err){
            if(err){
                res.status(400).json(err)
            }
            else{
                res.status(200).json("post Sigup Success !")
            }
        })
    },

}
module.exports=postController;