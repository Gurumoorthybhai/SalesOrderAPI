const Sequelize = require("sequelize");
const Db = require("../dbconfig/connection");
const productModel = require("./B_productModel");
const outletModel = require("./C_outletModel");
const orderModel = require("./D_orderModel");
const userModel = Db.define("userDetails", {
  userId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phoneNo: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  reportingManager: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

/* userModel.belongsToMany(orderModel, { through: userorderModel, as: "order" });
orderModel.belongsToMany(userModel, { through: userorderModel, as: "user" }); */
orderModel.belongsTo(userModel);
orderModel.belongsTo(productModel);
orderModel.belongsTo(outletModel);

module.exports = userModel;
