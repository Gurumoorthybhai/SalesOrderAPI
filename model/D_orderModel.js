const sequelize = require("sequelize");
const Db = require("../dbconfig/connection");

const orderModel = Db.define("orderDetails", {
  orderId: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  quantity: {
    type: sequelize.FLOAT,
  },
  total: {
    type: sequelize.FLOAT,
  },
  createdBy: {
    type: sequelize.STRING,
  },
  updatedBy: {
    type: sequelize.STRING,
  },
  createdAt: {
    type: sequelize.DATE,
  },
  updatedAt: {
    type: sequelize.DATE,
  },
});

module.exports = orderModel;
