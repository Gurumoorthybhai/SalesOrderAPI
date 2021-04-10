const sequelize = require("sequelize");
const Db = require("../dbconfig/connection");

const orderModel = Db.define("orderDetails", {
  orderId: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  quantity: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
  total: {
    type: sequelize.FLOAT,
    allowNull: false,
  },
  createdBy: {
    type: sequelize.STRING,
    allowNull: false,
  },
  updatedBy: {
    type: sequelize.STRING,
  },
  createdAt: {
    type: sequelize.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: sequelize.DATE,
  },
});

module.exports = orderModel;
