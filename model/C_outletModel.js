const sequelize = require("sequelize");
const Db = require("../dbconfig/connection");
const productModel = require("./B_productModel");
const orderModel = require("./D_orderModel");
const outletModel = Db.define("outletDetails", {
  outletId: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  outletName: {
    type: sequelize.STRING,
    allowNull: false,
  },
  outletPhoneNo: {
    type: sequelize.BIGINT,
    allowNull: false,
  },
  outletAddress: {
    type: sequelize.STRING,
    allowNull: false,
  },
});

module.exports = outletModel;
