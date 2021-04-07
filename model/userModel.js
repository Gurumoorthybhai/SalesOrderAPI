const Sequelize = require("sequelize");
const Db = require("../dbconfig/connection");
const userModel = Db.define("userDetails", {
  userId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
  },
  phoneNo: {
    type: Sequelize.INTEGER,
  },
  reportingManager: {
    type: Sequelize.STRING,
  },
});

module.exports = userModel;
