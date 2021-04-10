const sequelize = require("sequelize");
const Db = require("../dbconfig/connection");
const productModel = require("./B_productModel");
const orderModel = require("./D_orderModel");
const outletModel = Db.define("outletDetails", {
  outletId: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  outletName: {
    type: sequelize.STRING,
  },
  outletPhoneNo: {
    type: sequelize.BIGINT,
  },
  outletAddress: {
    type: sequelize.STRING,
  },
});

module.exports = outletModel;
