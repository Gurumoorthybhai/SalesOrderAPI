const express = require("express");
const app = express();
const router = express.Router();
const outletController = require("../controller/outletController");
router.get("/getAllOutlets", outletController.findAll);
router.post("/createOutlet", outletController.create);
router.put("/editOutlet", outletController.update);
router.delete("/deleteOutlet/:outletId", outletController.delete);

module.exports = router;
