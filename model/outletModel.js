const sequelize = require("sequelize");
const Db = require("../dbconfig/connection");
const productModel = require("./productModel");
const orderModel = require("./orderModel");
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

/* outletModel.belongsToMany(productModel, { through: orderModel });
outletModel.belongsTo(orderModel); */
// Outlet.hasMany(models.Order);

module.exports = outletModel;
