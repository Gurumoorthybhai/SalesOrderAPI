const sequelize = require("sequelize");
const Db = require("../dbconfig/connection");
const productModel = Db.define("productDetails", {
  productId: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  productName: {
    type: sequelize.STRING,
  },
  productCost: {
    type: sequelize.STRING,
  },
});

/* productModel.associate = (models) => {
  productModel.belongsToMany(models.productModel, {
    through: models.orderModel,
  });
  productModel.belongsTo(models.orderModel);
  // Outlet.hasMany(models.Order);
}; */

module.exports = productModel;
