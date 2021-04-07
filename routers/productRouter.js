const express = require("express");
const app = express();
const router = express.Router();
const productController = require("../controller/productController");
router.get("/getAllProducts", productController.findAll);
router.post("/createProduct", productController.create);
router.put("/editProduct", productController.update);
router.delete("/deleteProduct/:productId", productController.delete);

module.exports = router;
