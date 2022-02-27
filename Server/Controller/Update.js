const kindRoom=require("../Modal/kinkroom")
const room =require("../Modal/room")
const updateController={
    updateKindRoom:(req,res)=>{
        const {maloaiphong,tenloaiphong}=req.body;
        kindRoom.findOneAndUpdate({maloaiphong:req.params.id},{$set:{tenloaiphong:tenloaiphong}}).then((data)=>{
            if(data!==null){
                res.status(200).json("update succes !")
            }else{
                res.status(400).json("no data")
            }
        })
    },
   /*  room:(req,res)=>{
        const{}
    } */
}
module.exports= updateController;