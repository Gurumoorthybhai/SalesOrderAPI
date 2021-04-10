const productModel = require("../model/B_productModel");

exports.findAll = (req, res, next) => {
  productModel
    .findAll()
    .then((data) => {
      if (data) {
        // console.log("product data ", data);
        res.send(data);
      }
    })
    .catch((err) => {
      console.log("getting err in all products", err);
      res.status(500).send(err);
    });
};

exports.create = (req, res, next) => {
  console.log("create", req.body);
  productModel
    .create(req.body)
    .then((data) => {
      if (data) {
        console.log("insert product", data);

        res.status(200).send(true);
      }
    })
    .catch((error) => {
      console.log("error in adding product", error);
      res.status(500).send("Error in added product");
    });
};

exports.update = (req, res) => {
  console.log("update", req.body);
  productModel
    .update(req.body, { where: { productId: req.body.productId } })
    .then((recordStatus) => {
      if (recordStatus) {
        console.log("success");
        res.status(200).send(true);
      } else {
        console.log("error in updating");
        res.status(500).send("error in updating");
      }
    })
    .catch((err) => {
      console.log("Error in updating master data", err);
      res.status(500).send(err);
    });
};

exports.delete = (req, res) => {
  console.log("API req", req.params.productId);
  console.log("req.body.productId", req.body.productId);
  productModel
    .findByPk(req.params.productId)
    .then((metaData) => {
      console.log("metaData", metaData);
      if (metaData) {
        metaData.destroy();
      }
    })
    .then((metaData) => {
      res.status(200).send(true);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};
