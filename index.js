const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routers/userRouter");
const productRouter = require("./routers/productRouter");
const outletRouter = require("./routers/outletRouter");
const orderRouter = require("./routers/orderRouter");

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(cors());

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/outlets", outletRouter);
app.use("/api/orders", orderRouter);

app.listen(port, () => console.log(`server is listening on port ${port}`));
