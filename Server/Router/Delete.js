const deleteRouter=require("../Controller/Delete")

const express =require('express');
const router=express.Router();


router.delete("/kindroom/:id",deleteRouter.kinkroom)

module.exports=router;