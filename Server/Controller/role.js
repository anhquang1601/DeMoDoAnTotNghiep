const middlewareController=require("../Controller/middlewareController")
const sigin=require("../Modal/Sigin")


const roleId={
    roleKindRoom:(req,res,next)=>{
        const id=middlewareController.returnId;
        sigin.find({_id:id})
        .then((data)=>{
            console.log(data)
            if(data.role===1){
                next()
            }
        })
        .catch(err=>{res.status(500)})
    }
}
module.exports=roleId;