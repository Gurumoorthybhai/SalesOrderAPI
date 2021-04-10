const outletModel = require("../model/C_outletModel");
const productModel = require("../model/B_productModel");

exports.findAll = (req, res, next) => {
  outletModel
    .findAll()
    .then((data) => {
      if (data) {
        // console.log("outlet data ", data);
        res.send(data);
      }
    })
    .catch((err) => {
      console.log("getting err in all outlets", err);
      res.status(500).send(err);
    });
};

/* {
  include: [
    {
      model: productModel,
      as: "outlet",
    },
  ],
} */

exports.create = (req, res, next) => {
  //console.log("create", req.body);
  outletModel
    .create(req.body)
    .then((data) => {
      if (data) {
        //  console.log("insert outlet", data);

        res.status(200).send(true);
      }
    })
    .catch((error) => {
      console.log("error in adding outlet", error);
      res.status(500).send("Error in added outlet");
    });
};

exports.update = (req, res) => {
  console.log("update", req.body);
  outletModel
    .update(req.body, { where: { outletId: req.body.outletId } })
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
  console.log("API req", req.params.outletId);
  console.log("req.body.outletId", req.body.outletId);
  outletModel
    .findByPk(req.params.outletId)
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
