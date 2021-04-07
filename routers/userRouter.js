const express = require("express");
const app = express();
const router = express.Router();
const userController = require("../controller/userController");
router.get("/getAllUsers", userController.findAll);
router.post("/createUser", userController.create);
router.put("/editUser", userController.update);
router.delete("/deleteUser/:userId", userController.delete);

module.exports = router;
