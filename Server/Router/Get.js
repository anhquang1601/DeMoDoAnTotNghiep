const express =require('express');
const router=express.Router();
/* const getpost=require('../Controller/Get.js');
const getPriority1=require("../Controller/Get"); */
const middlewareController=require("../Controller/middlewareController")
const getController= require("../Controller/Get")

/* router.get('/',getpost); 
router.get('/get',getPriority1); */
router.get('/getStudent',getController.getStudent)
router.get("/getBillRoom",getController.getBillRoom)
router.get("/getServiceBill",getController.getServiceBill)

var jwt = require('jsonwebtoken');
const postController = require('../Controller/Post');
router.get("/kindroom", middlewareController.veryfyToken,getController.getKindRoom)
router.get("/privite", middlewareController.veryfyToken, (req,res,next)=>{
    res.json("welcome")
})
module.exports=router;