
const express =require('express');
const router=express.Router();
const updateRouter=require("../Controller/Update");

router.put("/updateKindRoom/:id",updateRouter.updateKindRoom)
router.put("/updateRoom",updateRouter.updateRoom)
router.put("/billroom", updateRouter.billroom)
router.put("/student", updateRouter.student)
router.put("/priortyObjectUpdate",updateRouter.priortyObjectUpdate)
router.put("/servoceBillUpdate",updateRouter.serviceBillUpdate)
router.put("/serviceUpdate", updateRouter.serviceUpdate)
router.put("/listServiceUpdate",updateRouter.listConvenientUpdate)
router.put("/listConvenientUpdate",updateRouter.listConvenientUpdate)
router.put("/converientUpdate",updateRouter.converientUpdate)
router.put("/listOfHostelUpdate",updateRouter.listOfHostelUpdate)
router.put("/customerUpdate", updateRouter.customerUpdate)

module.exports=router