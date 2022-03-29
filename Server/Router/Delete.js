const deleteRouter=require("../Controller/Delete")

const express =require('express');
const router=express.Router();


router.delete("/kindroom/:id",deleteRouter.kinkroom)
router.delete("/room/:id",deleteRouter.room)
router.delete("/student/:id",deleteRouter.student)
router.delete("/priorityObject/:id",deleteRouter.priorityObject)
router.delete("/servicebill/:id",deleteRouter.servicebill)
router.delete("/service/:id",deleteRouter.service)
router.delete("/listService/:id",deleteRouter.listService)
router.delete("/listConvenient/:id",deleteRouter.listConvenient)
router.delete("/convenrient/:id",deleteRouter.convenrient)
router.delete("/listOfHostels/:id",deleteRouter.listOfHostels)
router.delete("/customer/:id",deleteRouter.customer)

module.exports=router;