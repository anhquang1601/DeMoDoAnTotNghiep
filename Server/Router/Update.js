
const express =require('express');
const router=express.Router();
const updateRouter=require("../Controller/Update");

router.put("/updateKindRoom/:id",updateRouter.updateKindRoom)



module.exports=router