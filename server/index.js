const express = require("express");
const mongoose = require("mongoose");
const GetProducts = require("./routes/productlist");
const OrderProducts = require("./routes/orderroutes");
const AdminRoutes = require("./routes/adminroutes");
//const FilterProducts = require("./routes/filterproducts");
//const CartRoutes = require("./routes/cartroutes");
const expApp = express();
const cors = require("cors");

expApp.use(express.json());
expApp.use(cors());

mongoose
  .connect(
    "mongodb+srv://yohannes:FirstMERN_Project@cluster0.3hcds.mongodb.net/MERN_db?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("DB connection successful");
  })
  .catch(() => {
    console.log("DB connection failed");
  });
expApp.use("/admin", AdminRoutes);
expApp.use("/getallproducts", GetProducts);
expApp.use("/order", OrderProducts);
//app.use("/filter", FilterProducts);
//app.use("/cart", CartRoutes);
expApp.listen(3001, () => {
  console.log("server is listening on port 3001");
});
