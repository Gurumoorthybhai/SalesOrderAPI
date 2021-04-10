const Db = require("../dbconfig/connection");
const productModel = require("../model/B_productModel");
const sequelize = require("sequelize");

exports.findAllProdReport = (req, res, next) => {
  startDate = req.body.startDate;
  endDate = req.body.endDate;
  Db.query(
    `SELECT prod.productName,prod.productCost,sum(orders.quantity) as quantity,sum(orders.total) as total from productdetails as prod join orderdetails as orders on prod.productId = orders.productDetailproductId where createdAt BETWEEN  '${startDate}' AND '${endDate}' group by orders.userDetailuserId`,

    { type: sequelize.QueryTypes.SELECT }
  )
    .then((data) => {
      if (data) {
        // console.log("outlet data ", data);
        res.send(data);
      }
    })
    .catch((err) => {
      console.log("getting err in all outlets", err);
      res.status(500).send(err);
    });
};

exports.findAllUserReport = (req, res, next) => {
  startDate = req.body.startDate;
  endDate = req.body.endDate;
  console.log("date range", req.body);

  Db.query(
    `
    SELECT users.userId, users.userName,users.phoneNo, count(distinct prod.productName) as productcount, sum(orders.quantity) as quantity, sum(orders.total) as total from productdetails as prod join orderdetails as orders on prod.productId = orders.productDetailproductId join userDetails as users on users.userId = orders.userDetailuserId where createdAt BETWEEN  '${startDate}' AND '${endDate}' group by orders.userDetailuserId`,
    { type: sequelize.QueryTypes.SELECT }
  )
    .then((data) => {
      if (data) {
        // console.log("outlet data ", data);
        res.send(data);
      }
    })
    .catch((err) => {
      console.log("getting err in all outlets", err);
      res.status(500).send(err);
    });
};

exports.findAllOutletReport = (req, res, next) => {
  startDate = req.body.startDate;
  endDate = req.body.endDate;
  console.log("date range", req.body);
  Db.query(
    `SELECT outlet.outletId, outlet.outletName,outlet.outletAddress, count(distinct prod.productName) as productcount, sum(orders.quantity) as quantity, sum(orders.total) as total from productdetails as prod join orderdetails as orders on prod.productId = orders.productDetailproductId join outletDetails as outlet on outlet.outletId = orders.outletDetailoutletId where createdAt BETWEEN  '${startDate}' AND '${endDate}'  group by orders.outletDetailoutletId`,
    { type: sequelize.QueryTypes.SELECT }
  )
    .then((data) => {
      if (data) {
        // console.log("outlet data ", data);
        res.send(data);
      }
    })
    .catch((err) => {
      console.log("getting err in all outlets", err);
      res.status(500).send(err);
    });
};
