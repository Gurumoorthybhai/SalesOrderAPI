const orderModel = require("../model/D_orderModel");
const productModel = require("../model/B_productModel");
const outletModel = require("../model/C_outletModel");
const userModel = require("../model/A_userModel");
const Db = require("../dbconfig/connection");
const sequelize = require("sequelize");

exports.findAll = (req, res, next) => {
  Db.query(
    "SELECT outletDetails.outletId, outletDetails.outletName, outletDetails.outletPhoneNo, outletDetails.outletAddress,orderId,quantity,total,createdAt,product.productName,product.productCost,username,phoneNo,reportingManager from outletdetails as outletDetails join orderdetails on orderdetails.outletDetailOutletId = outletDetails.outletId join productDetails as product on product.productId = orderdetails.productDetailproductId join userdetails on orderdetails.userdetailuserId = userdetails.userid",
    { type: sequelize.QueryTypes.SELECT }
  )
    .then((data) => {
      if (data) {
        //console.log("order data ", data);
        res.send(data);
      }
    })
    .catch((err) => {
      console.log("getting err in all orders", err);
      res.status(500).send(err);
    });
};

/* exports.findOne = (req,res,next) => {
  orderModel.findByPk(id,{
    include: [{
      model:
    }
  }) */
exports.create = (req, res, next) => {
  //console.log("create", req.body);
  orderModel
    .create(req.body)
    .then((data) => {
      if (data) {
        console.log("insert order", data);

        res.status(200).send(true);
      }
    })
    .catch((error) => {
      console.log("error in adding order", error);
      res.status(500).send("Error in added order");
    });
};

exports.update = (req, res) => {
  console.log("update", req.body);
  orderModel
    .update(req.body, { where: { orderId: req.body.orderId } })
    .then((recordStatus) => {
      if (recordStatus) {
        console.log("success");
        res.status(200).send(true);
      } else {
        console.log("error in updating");
        res.status(500).send("error in updating");
      }
    })
    .catch((err) => {
      console.log("Error in updating master data", err);
      res.status(500).send(err);
    });
};

exports.delete = (req, res) => {
  // console.log("API req", req.params.outletId);
  // console.log("req.body.outletId", req.body.outletId);
  orderModel
    .findByPk(req.params.orderId)
    .then((metaData) => {
      console.log("metaData", metaData);
      if (metaData) {
        metaData.destroy();
      }
    })
    .then((metaData) => {
      res.status(200).send(true);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};
