
const kindroomRouter=require("../Modal/kinkroom");
const roomRouter=require("../Modal/room")

const deleteRouter={
    
    kinkroom:(req,res)=>{
        const{id}=req.params
        roomRouter.find({_id:id}).then((data)=>{
            data.length>0? res.status(400).json("you can'n delate"): kindroomRouter.findOneAndDelete({_id:id})
            .then(response=>{
                if(response!==null){
                    res.status(200).json("delete success !")
                }else{
                    res.status(400).json(response)
                }
            })
          
        })
    }
}
module.exports= deleteRouter;