const sequelize = require("sequelize");
const Db = require("../dbconfig/connection");
const productModel = require("../model/productModel");
const orderModel = Db.define("orderDetails", {
  orderId: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

orderModel.belongsTo(productModel);
module.exports = orderModel;
