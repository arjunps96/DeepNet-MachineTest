/**
 * Module Imports
 */
const express = require("express");
const connectDB = require("./config/ConnectDB");
const CategoryRoutes = require("./Routes/api/Category");
const SubcategoryRoutes = require("./Routes/api/Subcategory");
const ProductsRoutes = require("./Routes/api/Products");
const cors = require("cors");

const app = express();

/**
 * Connect DB is utility function used for connecting to MONOGODB
 */
connectDB();
/**
 * PORT is environment dependent variable,assigned a default value.
 */
const PORT = process.env.PORT || 5000;

/**
 * Middlewares used
 */
app.use(express.json());
app.use(cors());

/**
 * Routes
 */
app.use("/api/category", CategoryRoutes);
app.use("/api/subcategory", SubcategoryRoutes);
/**
 * Handling unhandledRoutes
 */
app.all("*", (req, res, next) => {
  res.status(400).send("No path Found");
});

app.listen(PORT, () => {
  //console.log(`Listening to port ${PORT}`);
});
