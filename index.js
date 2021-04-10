const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routers/userRouter");
const productRouter = require("./routers/productRouter");
const outletRouter = require("./routers/outletRouter");
const orderRouter = require("./routers/orderRouter");
const reportRouter = require("./routers/reportRouter");
const userModel = require("./model/A_userModel");
const productModel = require("./model/B_productModel");
const outletModel = require("./model/C_outletModel");
const orderModel = require("./model/D_orderModel");

const sequelize = require("./dbconfig/connection");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/outlets", outletRouter);
app.use("/api/orders", orderRouter);
app.use("/api/reports", reportRouter);

//sequelize.sync({ force: true });
userModel.sync();
outletModel.sync();
productModel.sync();
orderModel.sync();

app.listen({ port: 4000 }, () =>
  console.log("server is listening on port 4000")
);
