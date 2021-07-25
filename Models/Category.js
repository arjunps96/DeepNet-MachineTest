const mongoose = require("mongoose");
const Products = require("./Products");
const Subcategory = require("./Subcategory");
const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subcategory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Subcategory,
    },
  ],
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Products,
    },
  ],
});

/**
 * Query Middleware to populate Reference values
 */
CategorySchema.pre(/^find/, function (next) {
  this.populate({
    path: "products",
  }).populate({
    path: "subcategory",
  });
  next();
});
module.exports = mongoose.model("Category", CategorySchema);
