const sequelize = require("sequelize");
const Db = require("../dbconfig/connection");
const outletModel = require("./C_outletModel");
const orderModel = require("./D_orderModel");
// const userModel = require("./A_oModel");
const productModel = Db.define("productDetails", {
  productId: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  productName: {
    type: sequelize.STRING,
    allowNull: false,
  },
  productCost: {
    type: sequelize.FLOAT,
    allowNull: false,
  },
});

outletModel.belongsToMany(productModel, { through: orderModel, as: "product" });
productModel.belongsToMany(outletModel, { through: orderModel, as: "outlet" });

module.exports = productModel;
