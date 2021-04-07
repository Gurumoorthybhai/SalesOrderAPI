const userModel = require("../model/userModel");

exports.findAll = (req, res) => {
  console.log("inside users findall");
  userModel
    .findAll()
    .then((data) => {
      if (data) {
        // console.log("user data ", data);
        res.send(data);
      }
    })
    .catch((err) => {
      console.log("getting err in all users", err);
      res.status(500).send(err);
    });
};

exports.create = (req, res, next) => {
  console.log("create", req.body);
  userModel
    .create(req.body)
    .then((data) => {
      if (data) {
        console.log("insert user", data);

        res.status(200).send(true);
      }
    })
    .catch((error) => {
      console.log("error in adding user", error);
      res.status(500).send("Error in added user");
    });
};

exports.update = (req, res) => {
  console.log("update", req.body);
  userModel
    .update(req.body, { where: { userId: req.body.userId } })
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
  console.log("API req", req.params.userId);
  console.log("req.body.userId", req.body.userId);
  userModel
    .findByPk(req.params.userId)
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
