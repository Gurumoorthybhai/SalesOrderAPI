const orderModel = require("../model/orderModel");
const productModel = require("../model/productModel");

exports.findAll = (req, res, next) => {
  orderModel
    .findAll({
      include: [
        {
          model: productModel,
        },
      ],
    })
    .then((data) => {
      if (data) {
        console.log("outlet data ", data);
        res.send(data);
      }
    })
    .catch((err) => {
      console.log("getting err in all outlets", err);
      res.status(500).send(err);
    });
};
