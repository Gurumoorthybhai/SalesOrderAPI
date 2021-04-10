const express = require("express");
const app = express();
const router = express.Router();
const reportController = require("../controller/reportController");

router.post("/outletDateFilter", reportController.findAllOutletReport);
router.post("/userDateFilter", reportController.findAllUserReport);
router.post("/productDateFilter", reportController.findAllProdReport);
module.exports = router;
