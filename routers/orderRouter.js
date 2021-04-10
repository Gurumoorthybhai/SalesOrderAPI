const express = require("express");
const app = express();
const router = express.Router();
const orderController = require("../controller/orderController");
router.get("/getAllOrders", orderController.findAll);
router.post("/createOrder", orderController.create);
router.put("/editOrder", orderController.update);
router.delete("/deleteOrder/:orderId", orderController.delete);

module.exports = router;
