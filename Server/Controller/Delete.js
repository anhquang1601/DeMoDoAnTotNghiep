
const kindroomRouter=require("../Modal/kinkroom");
const roomRouter=require("../Modal/room")
const jwt=require("jsonwebtoken")
const sigin=require("../Modal/Sigin")
const room=require("../Modal/room");
const billRoom=require("../Modal/bill");
const student=require("../Modal/student");
const priorityObject=require("../Modal/priorityObject");
const servicebill=require("../Modal/servicebill");
const service=require("../Modal/service");
const listService=require("../Modal/listService");
const listConvenient=require("../Modal/listConvenient");
const Convenrient=require("../Modal/converient");
const listOfHostels=require("../Modal/listOfHostels");
const customer=require("../Modal/customer")
const deleteRouter={
    kinkroom:(req,res)=>{
        const{id}=req.params
        const{maloaiphong}=req.body
        const token = req.headers.token
       const decode=jwt.verify(token,'mk')
       if(decode){
            sigin.find({_id:decode._id})
            .then(data=>{
                if(data[0].role==='1'){
                    roomRouter.find({_id:id}).then((data)=>{
                        data.length>0? res.status(400).json("you can'n delate"):
                        room.findOne({maloaiphong:maloaiphong}).
                        then((data)=>{
                            if(data===null){
                                kindroomRouter.findOneAndDelete({_id:id})
                                .then(response=>{
                                    if(response!==null){
                                        res.status(200).json("delete success !")
                                    }else{
                                        res.status(400).json(response)
                                    }
                                })
                            }else{
                                res.status(403).json("error afiliate !");
                            }
                        })
                      
                    })
                }
                else{
                    return res.status(403).json("no role")
                }
            })
       }else{
           return res.status(400).json("token error")
       }
    },
    //id truyen len la ma phong
    room:(req,res)=>{
        const{id}=req.params
        const token=req.headers.token
        const decode=jwt.verify(token,"mk")
        if(decode){
            sigin.findOne({id:decode._id})
            .then((data)=>{
                if(data[0].role==='1'){
                    billRoom.find({maphong:id})
                    .then((data)=>{
                        if(data===null){
                            room.findByIdAndDelete({maphong:id})
                            .then(()=>res.status(200).json("delete success !"))
                        }
                    })
                }else{
                    res.status(400).json("no role")
                }
            })
            .catch((err)=>res.status(400).json({message:"token no validate !",err:err}))
        }
    },
    student:(req,res)=>{
        const{id}=req.params
        const token=req.headers.token
        const decode=jwt.verify(token,"mk")
        if(decode){
            sigin.find({id:decode._id})
            .then((data)=>{
                if(data[0].role==='1'){
                    billRoom.findOne({masinhvien:id})
                    .then((data)=>{
                        if(data===null){
                            student.findOneAndDelete({masinhvien:id})
                            .then(()=>res.status(200).json("delete success !"))
                        }
                    })
                }
            })
            .catch((err)=>res.json(400).json({message:"no role",err:err}))
        }
        else{
            res.status(400).json("token no validate !")
        }
    },
    priorityObject:(req,res)=>{
        const{id}=req.params
        const token=req.headers.token
        const decode=jwt.verify(token,"mk")
        if(decode){
            sigin.find({id:decode._id})
            .then((data)=>{
                if(data[0].role==='1'){
                    student.findOne({madoituong:id})
                    .then((data)=>{
                        if(data===null){
                            priorityObject.findOneAndDelete({madoituong:id})
                            .then(()=>res.status(200).json("delete success !"))
                        }
                    })
                }
            })
            .catch((err)=>res.json(400).json({message:"no role",err:err}))
        }
        else{
            res.status(400).json("token no validate !")
        }
    },

    servicebill:(req,res)=>{
        const{id}=req.params
        const token=req.headers.token
        const decode=jwt.verify(token,"mk")
        if(decode){
            sigin.find({id:decode._id})
            .then((data)=>{
                if(data[0].role==='1'){
                    servicebill.findOneAndDelete({_id:id})
                    .then(()=>res.status(200).json("delete success !"))
                }
            })
            .catch((err)=>res.json(400).json({message:"no role",err:err}))
        }
        else{
            res.status(400).json("token no validate !")
        }
    },
    service:(req,res)=>{
        const{id}=req.params
        const token=req.headers.token
        const decode=jwt.verify(token,"mk")
        if(decode){
            sigin.find({id:decode._id})
            .then((data)=>{
                if(data[0].role==='1'){
                    servicebill.findOne({madichvu:id})
                    .then((data)=>{
                        if(data===null){
                            listService.findOne({madichvu:id})
                            .then((data)=>{
                                if(data===null){
                                    service.findOneAndDelete({madichvu:id})
                                    .then(()=>res.status(200).json("delete success !"))
                                }
                            })
                        }
                    })
                }
            })
            .catch((err)=>res.json(400).json({message:"no role",err:err}))
        }
        else{
            res.status(400).json("token no validate !")
        }
    },
    //id la id
    listService:(req,res)=>{
        const{id}=req.params
        const token=req.headers.token
        const decode=jwt.verify(token,"mk")
        if(decode){
            sigin.find({id:decode._id})
            .then((data)=>{
                if(data[0].role==='1'){
                    listService.findOneAndDelete({_id:id})
                    .then(()=>res.status(200).json("delete success !"))
                }
            })
            .catch((err)=>res.json(400).json({message:"no role",err:err}))
        }
        else{
            res.status(400).json("token no validate !")
        }
    },
    listConvenient:(req,res)=>{
        const{id}=req.params
        const token=req.headers.token
        const decode=jwt.verify(token,"mk")
        if(decode){
            sigin.find({id:decode._id})
            .then((data)=>{
                if(data[0].role==='1'){
                    listConvenient.findOneAndDelete({_id:id})
                    .then(()=>res.status(200).json("delete success !"))
                }
            })
            .catch((err)=>res.json(400).json({message:"no role",err:err}))
        }
        else{
            res.status(400).json("token no validate !")
        }
    },
    convenrient:(req,res)=>{
        const{id}=req.params
        const token=req.headers.token
        const decode=jwt.verify(token,"mk")
        if(decode){
            sigin.find({id:decode._id})
            .then((data)=>{
                if(data[0].role==='1'){
                    listConvenient.findOne({matiennghi:id})
                    .then((data)=>{
                        if(data===null){
                             Convenrient.findOneAndDelete({matiennghi:id})
                            .then(()=>res.status(200).json("delete success !"))
                        }
                    })
                }
            })
            .catch((err)=>res.json(400).json({message:"no role",err:err}))
        }
        else{
            res.status(400).json("token no validate !")
        }
    },
    listOfHostels:(req,res)=>{
        const{id}=req.params
        const token=req.headers.token
        const decode=jwt.verify(token,"mk")
        if(decode){
            sigin.find({id:decode._id})
            .then((data)=>{
                if(data[0].role==='1'){
                    listOfHostels.findOneAndDelete({_id:id})
                    .then(()=>res.status(200).json("delete success !"))
                }
            })
            .catch((err)=>res.json(400).json({message:"no role",err:err}))
        }
        else{
            res.status(400).json("token no validate !")
        }
    },
    customer:(req,res)=>{
        const{id}=req.params
        const token=req.headers.token
        const decode=jwt.verify(token,"mk")
        if(decode){
            sigin.find({id:decode._id})
            .then((data)=>{
                if(data[0].role==='1'){
                    listOfHostels.findOne({makhach:id})
                    .then((data)=>{
                        if(data===null){
                             customer.findOneAndDelete({makhach:id})
                            .then(()=>res.status(200).json("delete success !"))
                        }
                    })
                }
            })
            .catch((err)=>res.json(400).json({message:"no role",err:err}))
        }
        else{
            res.status(400).json("token no validate !")
        }
    },


}
module.exports= deleteRouter;