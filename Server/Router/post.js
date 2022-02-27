const express =require('express');
const router=express.Router();
const postPriorityObject=require("../Controller/Create");


const postController=require("../Controller/Post")


router.post("/student/:idRoom",postController.addStudent)

//post priorityObject
router.post("/priorityObject/:id",postController.addPriorityObject)

//post kinkroom
router.post("/Kindroom/",postController.addKinkRoom)

//post room
router.post("/room/:idKindroom",postController.addRoom)

//post servicebill
/* router.post("/service/:idService",(req,res)=>{
    var service=new modelService({

    })
}) */

//post billroom
router.post("/billroom",postController.addBillRoom)
//post Service

router.post("/Service",postController.addService)

//post servicebill
router.post("/servicebill",postController.addServiceBill)

//post listService

router.post("/listService",postController.addListSerice)


//post converient

router.post("/converient",postController.addConverient)

//post listConverient


router.post("/listconverient",postController.addListConvenient)


// post customer
router.post("/customer",postController.addCustomer)

router.post("/listOfHotels",postController.addListOfHotels)

//post Sigin
router.post("/Sigup",postController.addSigUp)

module.exports=router;