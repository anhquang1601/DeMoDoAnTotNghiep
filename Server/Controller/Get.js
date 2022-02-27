const PostModel = require("../Modal/student");
const getPriority = require("../Modal/priorityObject");
const modelStudent = require("../Modal/student");
const modelRoom = require("../Modal/room");
const modelBillRoom = require("../Modal/bill");
const modelServiceBill = require("../Modal/servicebill");
const modelKindRoom = require("../Modal/kinkroom");
const getController = {
  getpost: async (req, res) => {
    try {
      const posts = await PostModel.find()
        .populate("doituongID")
        .then((data, err) => {
          if (data) {
            res.status(200).json(data);
          }
        });
        if(posts){
      res.status(200).json(posts);
        }
    } catch (err) {
      res.status(500).json({ error: err });
    }
  },
  getStudent: async (req, res) => {
    try {
      const getStudent1 = await modelStudent
        .find()
        .populate({
          path: "phongID",
          populate: { path: "kinkroomID" },
        })
        .populate("doituongID")
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((err) => {
          res.status(400).json(err);
        });
        if(getStudent1){
      res.status(200).json(getStudent1);
        }
    } catch (err) {
      res.status(400).json(err);
    }
  },
  getBillRoom: async (req, res) => {
    try {
      const getBillRoomRouter = await modelBillRoom
        .find()
        .populate("sinhvienID")
        .populate("phongID")
        .then((data) => {
          if (data === null) {
            res.status(400).json("no data");
          } else {
            res.status(200).json(data);
          }
        });
        if(getBillRoomRouter){
      res.status(200).json(getBillRoomRouter);
        }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getpriority: async (req, res) => {
    try {
      const priority = await getPriority.find();
      console.log("post", priority);
      if(priority){
      res.status(200).json(priority);
      }
    } catch (err) {
      res.status(500).json({ error: err });
    }
  },
  getServiceBill: async (req, res) => {
    try {
      const getServiceBillRouter = await modelServiceBill
        .find()
        .populate("sinhvienID")
        .populate("dichvuID")
        .then((data) => {
          console.log(data);
          if (data === []) {
            res.status(400).json("no data");
          } else {
            res.status(200).json(data);
          }
        });
      if(getServiceBillRouter){
        res.status(200).json(getServiceBillRouter)
        }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getKindRoom: async (req,res) => {
    try {
      const getKindRoomRouter = await modelKindRoom.find().then((data) => {
        if (data === []) {
          res.status(400).json("no data");
        } else {
          res.status(200).json(data);
        }
      });
      if(getKindRoomRouter){
      res.status(200).json(getKindRoomRouter)
      }
    } catch (error) {
     res.status(500).json(error)
    }
  }
};

module.exports = getController;
/*  module.exports=getpost;  */
